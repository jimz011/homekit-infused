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

# CONFIGURATION
Configuring Homekit Infused after the initial install is pretty straightforward. Open the files as instructed below and edit them. Editing these files alone will help you get up and running really quickly.
Basically all you would need to configure are these 3 files unless you want some customization to the frontend (obviously). For some things you will need a template sensor or automation but if you have copied the required files you will already have them, and if you use the provided files those sensors will most likely point to the correct groups (so no config would be required for those)
There are several views that can be auto-filled, see configuration below. Not every view will be auto filled and will require manual input from you. Basically all the pages that are not auto-filled can be edited to your own likings. The views that currently work with auto fill are: Lights, Devices, Security (motion/door/window/cams), climate (sensors and thermostat) and Remote. The frontpage will also be ready to use immediately after configuration. Only frontend notifications will require extra editing. By default all buttons will go to their respective views/popups. I will discuss tips/tricks on how to modify my setup in the tips/tricks section of the docs. (they are not here yet and I will post them in the near future.)

### Global Configuration (Please do it in this order, do NOT skip files!
  - Fill in `customize.yaml` if you haven't done so in the preparation step
  - Fill in the `hki_groups.yaml` file from the HKI project with your own entities (these are the groups that will auto fill your entities inside lovelace, configuring this is pretty straightforward!)
  - Fill in the files within the `/global_configuration/` folder from the HKI project (this is the global and last config of HKI, fill this file with your own data, instructions can be found inside each file! If you had set up the 4 person layout in the installation section, please also fill in the files within the `/global_configuration/addons/` folder. Addons will be files like this in the future and can be easily added to that folder whenever I (or someone else) releases addons for this.
    This file looks very daunting with all the text, but actually it is only explanation! However it might take some time for you to fill in this file. I suggest to start with changing the frontpage info to your needs and then see if it works. You will need to restart Home Assistant after making changes in `global_config.yaml` so take your time for this!
  - Fill in `notifications.yaml` (this is a file that will need to be entirely edited by yourself, use my file as an example on how to do this, I will never make this automatic so you better start writing :P, you could leave this step for later if you so desire)
  - Congratulations, you have installed and setup Homekit Infused for basic use. For advanced use please refer to the tips & tricks section. Theoretically if you have done everything right the setup should work without too much trouble.

### Customization
Well I can imagine that a lot of people used code from the old project and have edited them to their own needs. This is still possible, though if you rely on the old decluttering-card templates you will need to get them from my older releases. Just click on releases on the repo and it will show you the older releases you can download.
Some pages do not autofill, or do not have lovelace_gen global config. These views can be either edited to your own likings, removed or you can wait for an example config/auto-fill template if I will ever create one for that specific view. I will recommend you to use something yourself though as nobody has the same desires for e.g. an Energy View, or maybe a personal view.
Not only will I recommend you to try and create something yourself, but I actually encourage you to do it. Why? Well simply because you will learn a lot by just trial and error and getting better in "how to use lovelace" is not only beneficial for me (less questions asked) but most importantly beneficial for you as you will learn a lot, learn how to solve basic problems and be able to create your own iteration of my setup.

Tip: If you don't want to compare templates every time I update them, don't edit them. If you want to use the template, make a copy of it and reference it from your view. This way your customizations on the templates will never break (unless you have the exact same filename that I chose, which is unlikely).
The following example is how a lovelace_gen template would look like. As you can see it get the template from the following file `button.yaml`.
```
- !include
  - templates/button.yaml
  - entity: light.office
    name: Office
```
Now if you would want to edit the `button.yaml` template, you'd be better off copying the file and renaming it to something else. E.g. `button-user.yaml`
This would result in the following code on the views:
```
- !include
  - templates/button-user.yaml
  - entity: light.office
    name: Office
```
To truly understand this you should learn how to use lovelace_gen (yes I keep repeating it, because it is important imho).

### Notifications
This step can be skipped for now if you want to.
Notifications is something I can't template for you, this would require me to know exactly how many devices you have and what their entity names are. The file included is merely an example of how I have it set up and how you could set it up yourself. The first card in the list must have all the entities that come beneath it included in the list of states. This message will tell you that you have no notifications. This will only work if you have all the entities you define below that card inside of that list! Study my example carefully and you will be able to reproduce this pretty easy. All you would need to change are the entities and messages, you don't need to touch anything else.

### Congratulations
If all went well you should now have a working Homekit Infused setup with at least the following views that are working:
- climate
- lights
- devices
- security
- frontpage
- menu
- vacuum (if you have a vacuum setup, preferably even rooted when possible)
- remote (if you have an Apple TV)
- weather
- themes
- battery

Other pages will probably work just as fine, but they will most probably require your editing skills to create an actual usable view as most of those views I have either not really put much effort in, or is lacking cards to your likings (which is almost certain)
Edit all the other views not mentioned in the list above yourself. Popups should work for most buttons and should work for at least all:
- light
- device
- security
- climate
- thermostat

To get popups everywhere you will need to setup the legacy_popup.yaml just replace any of my example entities into your own. ONLY put entities in here that do not have the possibility to do a service-call. Entities like `person.your_name` for instance. This is NOT a requirement for the setup to work, the only reason this is used is so that some popups (which uses the original design popup/more-info windows) will have the same style as the rest of HKI, these entities are usually not that numerous within HKI so don't put ALL your entities in here. Entities like lights, sensors, binary_sensors, switches, climate and camera's will all be handled automatically within HKI!

Congratz, I hope you'll have a great ton of fun now!
