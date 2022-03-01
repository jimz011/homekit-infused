# Homekit Infused 5

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

### Installation
##### Advice
- Install Home Assistant or create a backup of your current setup. I will advise you to install this on a clean Home Assistant install, though it is not a requirement.
- Add all your known devices to Home Assistant (if integrations are available the prefered way would be to use that instead of putting it in manually.
- Create person entities in the UI go to configuration>persons and create all the persons in your house. Add the device_trackers you have to the person entities via the dropdown menu. Also add an entity_picture to the entities, you can do this when creating the persons. You **MUST** do this before installing HKI!!!!! If you don't you the top right button will **NOT** appear. You should create a user AND a person with only 1 word (e.g. first name **ONLY**) I stress this because the profile menu will not work if you skip this step!

##### Requirements
- Create a secrets.yaml file in the root of your HA installation if you do not have it already. Add the following line on any line within that file `alarm_code: 123456`. You can change the code to whatever number you want. DO NOT SKIP THIS PART or HKI will fail to start.
- Install HACS https://hacs.xyz/docs/installation/manual
- Install all of the cards/components below.

### HACS
Below is a list of all the addons required to run the Homekit Infused, you can install ALL of them through HACS.

| Name | Type  | Description |
|----------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities) | Frontend | This mod will help with auto filling entities and such |
| [Card Mod](https://github.com/thomasloven/lovelace-card-mod) | Frontend | This mod allows for custom css on any card |
| [Button Card](https://github.com/custom-cards/button-card) | Frontend | This is the button used throughout the entire setup |
| [State Switch](https://github.com/thomasloven/lovelace-state-switch) | Frontend | This is used to make cards appear based on certain conditions, like a conditional-card but better |
| [Card Tools](https://github.com/thomasloven/lovelace-card-tools) | Frontend | This is needed for various custom cards to run |
| [Search Card](https://github.com/postlund/search-card) | Frontend | An easy to use search card |
| [Swipe Card](https://github.com/bramkragten/swipe-card) | Frontend | This card is needed for the scrolling notifications, but also for most popups |
| [Config Template Card](https://github.com/iantrich/config-template-card) | Frontend | Allows for some specific templating, it is required for the profile button |
| [Fold Entity Row](https://github.com/thomasloven/lovelace-fold-entity-row) | Frontend | Allows entities cards to have a row that can be folded/collapsed |
| [Text Input Row](https://github.com/gadgetchnnel/lovelace-text-input-row/) | Frontend | Allows text input rows to be much wider |
| [Layout Card](https://github.com/thomasloven/lovelace-layout-card) | Frontend | This card is needed for the layout, IMPORTANT: Read the note below |
| [Browser Mod](https://github.com/thomasloven/hass-browser_mod) | Integration | Browser-mod makes the browser more useful and gives us the opportunity to show/create custom popups and many more! |
| [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen) | Integration | This is the MOST important piece of the setup, without this HKI will not work! Don't add this to your `configuration.yaml` file as the included package already does so for you, if you already have `lovelace_gen:` in your `configuration.yaml` please remove or comment that line! |

### Adding Resources
Resources are added automatically when the card gets installed within HACS, but to be sure check them through `Sidebar > Lovelace Dashboards > Resources`. If there are no resources listed, make sure you either add them manually or reinstall them through HACS.

### Installation
Download the project, you can grab the latest release from [here](https://github.com/jimz011/homekit-infused/releases).
Copy the following files/folders to the root of your Home Assistant installation

- Copy the `/hki-base/` folder to the root of your setup
- Copy the `/hki-user/` folder to the root of your setup
- Copy the `/packages/` folder to the root of your setup
- Add the following lines to your `configuration.yaml` file

```yaml
homeassistant:
  packages: !include_dir_named packages/
```

Optionally you can add the images folder to your setup (it has some useful images that you might want to use):
- Copy the `/www/` folder to the root of your setup

**NOTE:** The packages folder has 2 extra folders named `homekit-infused-theme` and `homekit-infused-extra`, these 2 packages are optional and can be removed safely if you do not wish to make use of the advanced theming options in HKI or the extra additional sensors HKI can create for you.

## That's it! You have succesfully installed the Homekit Infused! Now go on with configuring it :P

### Extra Information
#### Dwains Dashboard!

If you happen to have [Dwains Dashboard](https://github.com/dwainscheeren/dwains-lovelace-dashboard) you must comment out a line in the Homekit Infused configuration files.

You must proceed with the following change, this must be repeated EVERY time HKI gets updated! You must comment (or remove) the following line.
```yaml
# in /packages/homekit_infused/hki_configuration.yaml
lovelace_gen: !include_dir_merge_named ../../hki-user/config/
```

This is line 1 and should look like this after the change

```yaml
# lovelace_gen: !include_dir_merge_named ../../hki-user/config/
```

Restart Home Assistant after you have done this change!
