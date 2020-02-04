# Homekit Infused

## Contents
- [About](index.md)
- [Intro](intro.md)
- [Important Notes](notes.md)
- [Preparation](preparation.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Updates and Addons](updates.md)
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
- Add all your known devices to Home Assistant (if integrations are available the prefered way would be to use that instead of putting it in manually. (If you use tasmota, please use autodiscovery instead of hardcoding each device in your configuration. Though this is NOT a requirement, I will always advise you to use autodiscovery)
- Create person entities in the UI go to configuration>persons and create all the persons in your house. Add the device_trackers you have to the person entities. Do not use device_trackers in lovelace unless you really need to (e.g. non-person related device_trackers)
- Create/edit a `customize.yaml` file, this file is automatically created whenever you edit an entity through the UI configuration>customize. However you can create this file yourself if you don't have it already. Just put the file at the root of your config (e.g. same location as where `configuration.yaml` is located). If you have the file you may (or may not, haven't tested it) have to create an entry in `configuration.yaml`. I don't think it is necessary but if you do need it add the following line to `configuration.yaml`
```
homeassistant:
  customize: !include customize.yaml
```
Now if you have created this file what next? Well the `customize.yaml` file is used to give entities extra information like an icon and/or friendly name. For example every light in Home Assistant will appear as a lightbulb by default. This makes distinguishing lights only possible by name and it doesn't really look that cool. Now you could argue that this can all be done by the frontend now and you are very correct. However not only will this eliminate the need for the frontend to handle this when defining your entities in this file the icon and/or friendly name for that specific entity will be applied to everywhere on the frontend. Now what are the advantages of this? Well, if you want to re-use an entity mulitple times you don't need to define it's entity and/or name again. This will also apply to more-info windows and/or custom-cards that take the standard icon. You might see where I am going here. So, you should define the icons and names in this file for each entity that you want to be seen on the frontend (don't be crazy to do all your entities, only do the ones that will be shown on the frontend, but if you are that brave to do all, uhm I won't hold you back!).
Why would I ask you to do this as a preparation? Well first of all, many people don't know about this built-in feature from Home Assistant. Second, this feature can also be accessed through the UI, but that will take too long (and even that feature is pretty unknown to many). So we are just going to edit the `customize.yaml` file with a text editor (or a hassio addon that can edit text).
Now how use this file? Well easy, see the example below on how to go on with this!
Add the configuration for this as follows (please continue to read the entire section before starting to edit!!!!!!):
```
switch.washingmachine:
  friendly_name: Washing Machine
  icon: mdi:washing-machine
```

Remember that you MUST fill in this file. Homekit Infused has no options to edit the names within the frontend, the interface will work without it, but you will have the same icons everywhere which isn't what you want. These preparations are not only useful for HKI but for Home Assistant in general.
 

#### Optional
- The prefered way would be to do a clean install.
- Patience, do not rush something like this. Imagine all the months of work I have put into this? So taking some extra time to undertake this is not such a bad idea.
