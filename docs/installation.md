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
##### NOTE
There is no direct upgrade path from HKI 4, the way HKI 5 is written is very similar, but deviates too much to make a decent upgrade possible. HKI 4 users should start fresh. If you are a new user, this doesn't apply to you and you can continue on to the next step of the documentation.

There is also a video guide available [HERE](https://www.youtube.com/playlist?list=PLezjWQmPsNpF9zNbWAXfm3mcnDwFYLdpT), but it is always recommended to keep the documentation at hand since video's tend to age fast!

##### Advice
- Install Home Assistant or create a backup of your current setup. I will advise you to install this on a clean Home Assistant install, though it is not a requirement.
- Add all your known devices to Home Assistant (if integrations are available the prefered way would be to use that instead of putting it in manually.
- Create person entities in the UI go to configuration>persons and create all the persons in your house. Add the device_trackers you have to the person entities via the dropdown menu. Also add an entity_picture to the entities so your entities will look better and you'll get a personalized profile button.

##### Requirements
- Create a secrets.yaml file in the root of your HA installation if you do not have it already. Add the following line on any line within that file `alarm_code: 123456`. You can change the code to whatever number you want. DO NOT SKIP THIS PART or HKI will fail to start.
- Install HACS https://hacs.xyz/docs/installation/manual
- Install all of the cards/components below.

### HACS
Below is a list of all the addons required to run the Homekit Infused, you can install ALL of them through HACS.

| Name | Type  | Description |
|----------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities) | Frontend | This card is handy to fill certain domains/entities very quickly |
| [Card Mod](https://github.com/thomasloven/lovelace-card-mod) | Frontend | This mod allows for custom css on any card and even stacks |
| [Button Card](https://github.com/custom-cards/button-card) | Frontend | This is the button used throughout the entire setup, WARNING! The latest button-card release has been pulled from HACS, you MUST replace 2 files after installing this card, you can find the fixes [HERE](fixes/) DO NOT SKIP THIS OR YOUR POPUPS WILL NOT WORK!!! |
| [State Switch](https://github.com/thomasloven/lovelace-state-switch) | Frontend | This is used to make cards appear based on certain conditions, like a conditional-card but better |
| [Card Tools](https://github.com/thomasloven/lovelace-card-tools) | Frontend | This is needed for various custom cards to run |
| [Search Card](https://github.com/postlund/search-card) | Frontend | An easy to use search card |
| [Swipe Card](https://github.com/bramkragten/swipe-card) | Frontend | This card is mainly used for the scrolling notifications |
| [Config Template Card](https://github.com/iantrich/config-template-card) | Frontend | Allows for some specific templating, it is required for the profile button |
| [Fold Entity Row](https://github.com/thomasloven/lovelace-fold-entity-row) | Frontend | Allows entities cards to have a row that can be folded/collapsed |
| [Text Input Row](https://github.com/gadgetchnnel/lovelace-text-input-row/) | Frontend | Allows text input rows to be much wider |
| [Layout Card](https://github.com/thomasloven/lovelace-layout-card) | Frontend | This card is needed for the layout, IMPORTANT: Read the note below |
| [Browser Mod](https://github.com/thomasloven/hass-browser_mod) | Integration | Browser-mod makes the browser more useful and gives us the opportunity to show/create custom popups and many more! |
| [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen) | Integration | This is the MOST important piece of the setup, without this HKI will not work! Don't add this to your `configuration.yaml` file as the included package already does so for you, if you already have `lovelace_gen:` in your `configuration.yaml` please remove or comment that line! |

### Adding Resources
Resources are added automatically when the card gets installed within HACS, but to be sure check them through `Sidebar > Lovelace Dashboards > Resources`. If there are no resources listed, make sure you either add them manually or reinstall them through HACS (you can find the url to add if you click on `redownload`, you do not need to redownload them, but you can use the URL's to add the resources manually if needed).

If you can't see the resources tab, set your profile to `advanced mode` in `Sidebar > Profile`!

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
