##### ###############################################################################################
""" 
 Appdaemon File to switch language files  and upload them to only one set of input_text            
 This file uses variables from text file and an input_boolean control to switch between languages  
 This file should be installed in the Apps directory inside the appdaemon folder                   
 Also you need to add some lines to call the app in the apps.yaml   
 This file hase been changed and adapted to load from any txt files to set of input text at HA.
 Settings on the apps.yaml:

LanguageLoadStates:
  module: text_states_load
  class: TextStatesLoad
  path: /config/packages/languages/selected_language.txt
  isloaded_language: input_boolean.language_states_load  

 """
#####################################################################################################
import configparser
import os
import sys

import appdaemon.plugins.hass.hassapi as hass

class TextStatesLoad(hass.Hass):

    def initialize(self):
        if "sensor" in self.args:
            self.sensors = self.args["sensor"].split(",")
            for sensor in self.sensors:
                self.listen_state(self.load_config, sensor, state="on")
        else:
            self.log("No sensor Selected, do nothing")
        
    def create_config(self):
        self.log("No Config found, Creating new Config")
        config = configparser.ConfigParser()
        config.add_section("text")
        with open(self.args["path"], "w") as config_file:
            config.write(config_file)
            config_file.close()

    def get_config(self):
        if not os.path.exists(self.args["path"]):
            self.create_config()
        config = configparser.ConfigParser()
        config.read(self.args["path"])
        return config

    def get_setting(self, section, setting):
        config = self.get_config()
        value = config.get(section, setting)
        return value

    def update_states(self, section, setting, value):
        if section == "text":
           self.call_service("input_text/set_value", entity_id=setting, value=value)
        else:
            self.log("Nothing to load, no text section")

    def load_config(self, event_name, data, entity_id, state, kwargs):
        config = self.get_config()
        if self.get_state(self.args["sensor"]) =="on":
            for (setting, value) in config.items("text"):
                if self.get_state(setting) != value:
                    self.update_states("text", setting, value)
            self.turn_off(self.args["sensor"])
            self.log("States Imported Successfully")

