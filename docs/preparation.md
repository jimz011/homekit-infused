# Homekit Infused

## Contents
- [Introduction](index.md)
- [Preparation](preparation.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Updates and Addons](updates.md)
- [Feature Requests](requests.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
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
- Add all your known devices to Home Assistant (if integrations are available the prefered way would be to use that instead of putting it in manually.
- Create person entities in the UI go to configuration>persons and create all the persons in your house. Add the device_trackers you have to the person entities. Do not use device_trackers in lovelace unless you really need to (e.g. non-person related device_trackers)
- Create/edit a `customize.yaml` file, this file is automatically created whenever you edit an entity through the UI configuration>customize. However you can create this file yourself if you don't have it already. Just put the file at the root of your config (e.g. same location as where `configuration.yaml` is located). You might need the following entry in your `configuration.yaml` file
```
homeassistant:
    customize: !include customize.yaml
```
Now if you have created this file we will start and fill it with our own entities.
If you already have items in that file just add them below the last item, else just start typing exactly as in the example below. You do NOT need to do all of your entities. Just do the ones that are going to get shown in the frontend (e.g. lights, switches, sensors, binary_sensors and maybe your vacuum). You must not do battery entities.
```
switch.washingmachine:
    friendly_name: Washing Machine
    icon: mdi:washing-machine
```

Remember that you MUST fill in this file. Homekit Infused has no options to edit the names within the frontend, the interface will work without it, but you will have the same icons everywhere which isn't what you want. These preparations are not only useful for HKI but for Home Assistant in general.
- Create a weather sensor (preferably Dark Sky) without a configured weather sensor the frontpage might not load! https://www.home-assistant.io/integrations/weather.darksky/

- Create an Air Visual account and add it as a sensor https://www.home-assistant.io/integrations/airvisual/
- Create a custom alarm, not really required, but is handy for lots of stuff, just do it! https://www.home-assistant.io/integrations/manual/

#### Optional
- The prefered way would be to do a clean install, I will not stress on how much headache it might save you to do a clean install!
- Patience, do not rush something like this. Imagine all the months of work I have put into this? So taking some extra time to undertake this is not such a bad idea.
