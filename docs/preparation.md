# Homekit Infused

## Contents
- [About](index.md)
- [Intro](intro.md)
- [Important Notes](notes.md)
- [Preparation](preparation.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Tips & Tricks](tips.md)
- [Feature Requests](requests.md)
- [Issues & Questions](issues.md)
- [Thanks](thanks.md)

# PREPARATION
HKI is easy to configure as long as you have prepared yourself well. My advise is to use another computer, pi or create a vm to install this and test it first before moving over to production.
If you do decide to take the leap on your production device immediately I will highly suggest you make BACKUPS!!! I can't stress out enough that you should always do this unless you really don't care.
I cannot guarantee that this setup will work as great for everyone and I cannot if the setup will even work for you at all. Backing up your current system prevents yourself from being left empty handed!

NOTE: Even if you do not decide to use Homekit Infused the following preparations are actually really usefull for any Home Assistant setup.

### Preparation Checklist
#### Required
  - Time, I estimate the project to be installed within a few hours (I might be waaay off but I wouldn't know as I haven't installed it this way, It might be done in a relatively short time I am sure but that really depends on your current state with HA and ofc your experience with HA/Lovelace)
  - Install Home Assistant or create a backup of your current setup.
  - Add all your known devices to Home Assistant (if integrations are available the prefered way would be to use that instead of putting it in manually. (If you use tasmota, please use autodiscovery instead of hardcoding each device in your configuration. Though this is NOT a requirement, I would always advise you to use autodiscovery)
  - Create person entities in the UI go to configuration>persons and create all the persons in your house. Add the device_trackers you have to the person entities. Do not use device_trackers in lovelace unless you really need to (e.g. non-person related device_trackers)
  - Create/edit a `customize.yaml` file, this file is automatically created whenever you edit an entity through the UI configuration>customize. However you can create this file yourself if you don't have it already. Just put the file at the root of your config (e.g. same location as where `configuration.yaml` is located). If you have the file you may (or may not, haven't tested it) have to create an entry in `configuration.yaml`. I don't think it is necessary but if you do need it add the following line to `configuration.yaml`
  ```
  homeassistant:
    customize: !include customize.yaml
  ```
  Now if you have created this file what next? Well the `customize.yaml` file is used to give entities extra information like an icon and/or friendly name. For example every light in Home Assistant will appear as a lightbulb by default. This makes distinguishing lights only possible by name and it doesn't really look that cool. Now you could argue that this can all be done by the frontend now and you are very correct. However not only will this eliminate the need for the frontend to handle this when defining your entities in this file the icon and/or friendly name for that specific entity will be applied to everywhere on the frontend. Now what are the advantages of this? Well, if you want to re-use an entity mulitple times you don't need to define it's entity and/or name again. This will also apply to more-info windows and/or custom-cards that take the standard icon. You might see where I am going here. So, you should define the icons and names in this file for each entity that you want to be seen on the frontend (don't be crazy to do all your entities, only do the ones that will be shown on the frontend, but if you are that brave to do all, uhm I won't hold you back!). Why would I ask you to do this as a preparation? Well first of all, many people don't know about this built-in feature from Home Assistant. Second, this feature can also be accessed through the UI, but that will take too long (and even that feature is pretty unknown to many). So we are just going to edit the `customize.yaml` file with a text editor (or a hassio addon that does the same).
  Now how use this file? Well, either you download my `customize.yaml` file and edit it (which I might recommend if you do not have this file already) or start your own.
  Add the configuration for this as follows (please continue to read the entire section before starting to edit!!!!!!):
  ```
  switch.washingmachine:
    friendly_name: Washing Machine
    icon: mdi:washing-machine
  ```
  Simple huh? Now we could take it a step further, however this really depends on your needs. So what then? Well it is called Custom-UI, it was originally created for the states-ui (if you are new to HA, this was the frontend used before lovelace became the standard). It was actually used to add different cards to the states-ui that were not available at the time. However the same addon does something much more interesting. The addon can modify the `customize.yaml` file to accept templating!
  Now the addon hasn't been updated in a while now, but it isn't officially deprecated either (and tbh I don't think it will be soon either as this is still used by many). So what can we do with this then? Well the things we can do with this are really really cool. See the example below:
  ```
  binary_sensor.livingroom_door:
    friendly_name: Livingroom
    templates:
      icon: >
        if (state === 'on') return 'mdi:door-open';
        return 'mdi:door-closed';
  ```
  I think the result is obvious already and once again, as this is done through the backend this will also apply to anywhere else on the frontend (e.g. on a more-info window or a custom-card you would see an open door icon when the door is open and a closed door when it is closed) Cool huh?
  Now there are some people that have expressed there concerns on using Custom-UI (as they say it is deprecated, but I say it isn't!) therefor using Custom-UI is NOT a requirement.
  You have gotten the two examples, use the first example if you want to use it without Custom-UI or use a mix of both if you want to use Custom-UI. 
  Remember that you MUST fill in this file either way to use this with HKI 1.0a, without this file it should still work, however you will find yourself stuck in changing names and icons on the frontend. Both methods will help you create a better and more beautiful frontend (even if you don't use HKI). Use Custom-UI if you want dynamic icons! (see installation section on how to)
  
  Homekit Infused is based on a LOT of templates created specifically for this setup and in particular to make configuring this easier for third party users. Because of this nature it also means that many of the things can not be defined in the frontend. This only applies to views that are auto filled though (climate, lights, devices, security, sensors). These views can all be auto-filled with your own entities by filling in the provided files. Other views do not have auto filling and they can be edited just like you are used to, however I advise you to read the entire documentation before you do so as I have some great tips for you before editing actual views and/or templates (I will discuss this further in the tips/tricks section of the docs)

#### Optional 
  - The prefered way would be to do a clean install, however I can imagine you don't want to do this. Make sure that if you have older versions of Home Assistant that you have the correct components loaded. Most components are loaded within the `default_config:` however older setups might lack this line. Setting up location is also preferred to be done through the UI instead of hardcoding, not only will you be able to easily change the home location (great for RV's) but it also gives you a bit of extra privacy whenever you do decide to share your setup on the internet. (if using the ui for location it will not store the coordinates in configuration.yaml, nor will you need to create a separate !secret entry to achieve this. Obviously this is not a requirement, it is just advice)
  - Patience, do not rush something like this. Imagine all the months of work I have put into this? So taking some extra time to undertake this is not such a bad idea.
  - There are some entities (e.g. input_selects and input_booleans) which might be required, you will be guided through the global setup guide on where and how to do this.

