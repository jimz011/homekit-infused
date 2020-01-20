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

### Global Configuration
  - Fill in `customize.yaml` if you haven't done so in the preparation step
  - Fill in the `hki_groups.yaml` file from the HKI project with your own entities (these are the groups that will auto fill your entities inside lovelace, configuring this is pretty straightforward!)
  - Fill in the `global_config.yaml` file from the HKI project (this is the global and last config of HKI, fill this file with your own data, instructions can be found inside the file)
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

### Congratulations
If all went well you should now have a working Homekit Infused setup with at least the following views that are working:
- climate
- lights
- devices
- security
- frontpage
- menu
- vacuum (if you have this setup)
- remote (if you have an Apple TV)
- weather
- themes

Other pages will probably work just as fine, but they will most probably require your editing skills to create an actual usable view as most of those views I have either not really put much effort in, or is lacking cards to your likings (which is almost certain)
Edit all the other views not mentioned in the list above yourself. Popups should work for most buttons and should work for at least all:
- light
- device
- security
- climate
- thermostat

To get popups everywhere you will need to setup the legacy_popup.yaml file and enter all the entities you have in there (don't worry about the templates, it will take care of everything as long as you set the entity names up within that file)

Congratz, I hope you'll have a great ton of fun now!
