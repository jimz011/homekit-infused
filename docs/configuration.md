# Homekit Infused

## Contents
- [About](index.md)
- [Intro](intro.md)
- [Preparation](preparation.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Updates and Addons](updates.md)
- [Tips & Tricks](tips.md)
- [Feature Requests](requests.md)
- [Issues & Questions](issues.md)
- [Thanks](thanks.md)

# CONFIGURATION
Configuring Homekit Infused after the initial install is really easy. It only requires you to do at least a single step and a second step for clearing up details.

#### Global Configuration
- Fill in `customize.yaml` if you haven't done so in the preparation step
- Fill in the `hki_groups.yaml` file that is located in your `/homekit_infused/` folder. Fill in AS MUCH as you can! This is the file used in the setup and is what this theme is all about. It will fill various views automatically according to these groups! Do NOT remove any groups! If you don't have entities for a specific group, only remove the entities in that group (including the `-`) and keep the group as it is.
- Fill in the `global_settings.yaml` file found within the `global_config` folder. Fill in at least the person entities (uncomment the lines you need). No other config is required at the moment for the setup to work.
- Congratulations, you have installed and setup Homekit Infused for basic use. For advanced use please refer to the tips & tricks section. Theoretically if you have done everything right the setup should work without too much trouble.

#### Views and Global Config
The global config is how HKI can be customised. It saves you a lot of trouble when updating AND makes it a lot easier for less experienced HA users to still be able to tweak the setup.
Each view has its own global_config file and I have tried to make the config go from top to bottom. This means if the header is on top of the view and buttons at the bottom, that the global_config file will follow (more or less) that same order.
If you want to change anything on for example the frontpage you can simply open up the `global_config/views/frontpage_view.yaml` file and uncomment the part you want to change. If a line is commented, it will choose the default config (which is not shown in those files)
Example:
```
frontpage_buttons_first_row:
#    first_button_name: Livingroom
#    first_button_icon: mdi:sofa
```
Will result in a configuration with the default settings (defaults are set by me)
But:
```
frontpage_buttons_first_row:
    first_button_name: Office
    first_button_icon: mdi:desktop
```
Would give the first button on the first row the `Office` name and `mdi:desktop` as an icon.

#### WARNING
Everything within the global_config files is commented, you can simply uncomment a line to change its properties and use it in Homekit Infused. Note that there are some lines that come uncommented by default, do NOT remove or comment them EVER! This will certainly break the setup and you will find yourself with a non-working lovelace interface. You can however edit any of the lines that are commented (if you do not know what you are doing I suggest not adding new lines to the files as they don't work like views, for more information I highly suggest you learn at least the basics of how lovelace_gen works [here](https://github.com/thomasloven/hass-lovelace_gen).

#### Notifications
This step can be skipped for now if you want to.
Notifications is something I can't template for you, this would require me to know exactly how many devices you have and what their entity names are. The file included is merely an example of how I have it set up and how you could set it up yourself. The first card in the list must have all the entities that come beneath it included in the list of states. This message will tell you that you have no notifications. This will only work if you have all the entities you define below that card inside of that list! Study my example carefully and you will be able to reproduce this pretty easy. All you would need to change are the entities and messages, you don't need to touch anything else.

#### What should work now?
If all went well you should now have a working Homekit Infused setup with at least the following views that are working and auto-filled:
- climate
- lights
- devices
- security
- frontpage
- menu
- weather
- themes
- automations
- location
- cleaning
- waze traffic info
- battery
- scenes (you must add scenes to customize.yaml if you want icons, remember to choose short names)
- vacuum (if you have a vacuum setup, preferably even rooted when possible)
- remote (depending on the downloaded template from the addons folder, coming soon!)
- laundry (depending if your devices know state and power usage)
- upcoming media (depending if you have plex/radarr and sonarr setup)
- about (shows version number and project info, update this with each update)

Popups should work out of the box for the following views
- light
- device
- security
- climate
- thermostat

Views that need to be either edited by yourself or downloaded as an addon in future releases:
- downloads
- energy consumption
- computers
- calendar
- certificates
- floorplan

To get popups everywhere you will need to setup the legacy_popup.yaml just replace any of my example entities into your own. ONLY put entities in here that do not have the possibility to do a service-call. Entities like `person.your_name` for instance. This is NOT a requirement for the setup to work, the only reason this is used is so that some popups (which uses the original design popup/more-info windows) will have the same style as the rest of HKI, these entities are usually not that numerous within HKI so don't put ALL your entities in here. Entities like lights, sensors, binary_sensors, switches, climate and camera's will all be handled automatically within HKI!

#### Empty Views
Some views are empty (they only have a header) and this is done on purpose. You can either fill in the empty views yourself with your own custom design/cards or you can wait for me (or others) to upload addons for this project and insert it later on when the addons are released.

#### Congratulations
Congratz, I hope you'll have a great ton of fun now!
