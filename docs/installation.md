# Homekit Infused 2021.x.x

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Splitting the Configuration](splitting-the-config.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

### Installation
##### Advice
- Install Home Assistant or create a backup of your current setup. I will advise you to install this on a clean Home Assistant install, though it is not a requirement.
- Add all your known devices to Home Assistant (if integrations are available the prefered way would be to use that instead of putting it in manually.
- Create person entities in the UI go to configuration>persons and create all the persons in your house. Add the device_trackers you have to the person entities via the dropdown menu.
- Download this project, you can grab the latest release from [here](https://github.com/jimz011/homekit-infused/releases)

##### Requirements
- Create a secrets.yaml file in the root of your HA installation if you do not have it already. Add the following line on any line within that file `alarm_code: 123456`. You can change the code to whatever number you want. DO NOT SKIP THIS PART or HKI will fail to start.
- Install HACS https://hacs.xyz/docs/installation/manual
- Install all of the cards/components below, even if you don't plan to use them, HKI is dependent on them.

### HACS
Below is a list of all the addons required to run the Homekit Infused, you can install all of them through HACS

*NOTE: Some of these addons are required to run HKI and some are not. Since it is easier for me to just make you install all cards I will not go into detail on how to strip these cards from your setup. If a card is not defined it will not be used and will not take up your resources. Having all cards ready and available will make your HKI experience when using the addons a lot more pleasant.

| Name | Type  | Description |
|----------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Air Visual Card](https://github.com/dnguyen800/air-visual-card) | Frontend | This is a small and elegant air quality card |
| [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities) | Frontend | This mod will help with auto filling entities and such |
| [Bar Card](https://github.com/custom-cards/bar-card) | Frontend | This card can create greate looking bars and graphs |
| [Card Mod](https://github.com/thomasloven/lovelace-card-mod) | Frontend | This mod allows for custom css on any card |
| [Button Card](https://github.com/custom-cards/button-card) | Frontend | This is the button used throughout the entire setup |
| [State Switch](https://github.com/thomasloven/lovelace-state-switch) | Frontend | This is used to make cards appear based on certain conditions, like a conditional-card but better |
| [Light Popup Card](https://github.com/DBuit/light-popup-card) | Frontend | This is a popup that opens when holding/double tapping buttons |
| [Thermostat Popup Card](https://github.com/DBuit/thermostat-popup-card) | Frontend | This is a popup that opens when holding/double climate buttons |
| [More Info Card](https://github.com/thomasloven/lovelace-more-info-card) | Frontend | This is the card that shows a standard HA styled color wheel in conjunction with the light popup card |
| [Mini Graph Card](https://github.com/kalkih/mini-graph-card) | Frontend | Mini Graph Card gives the possibility to create more advanced graphs! |
| [Mini Media Player](https://github.com/kalkih/mini-media-player) | Frontend | This is a minimalistic media player |
| [Card Tools](https://github.com/thomasloven/lovelace-card-tools) | Frontend | This is needed for various custom cards to run |
| [Search Card](https://github.com/postlund/search-card) | Frontend | An easy to use search card |
| [Simple Weather Card](https://github.com/kalkih/simple-weather-card) | Frontend | This is a small weather card, see screenshot for details |
| [Swipe Card](https://github.com/bramkragten/swipe-card) | Frontend | This card is needed for the scrolling notifications, but also for most popups |
| [Upcoming Media Card](https://github.com/custom-cards/upcoming-media-card) | Frontend | This card is used for the upcoming media addon |
| [Vacuum Card](https://github.com/denysdovhan/vacuum-card) | Frontend | An awesome looking vacuum card for use with robot vacuums |
| [Layout Card](https://github.com/thomasloven/lovelace-layout-card) | Frontend | This card is needed for the layout, IMPORTANT: Read the note below |
| [Browser Mod](https://github.com/thomasloven/hass-browser_mod) | Integration | Browser-mod makes the browser more useful and gives us the opportunity to show/create custom popups and many more! |
| [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen) | Integration | This is the MOST important piece of the setup, without this HKI will not work! Don't add this to your `configuration.yaml` file as the included package already does so for you, if you already have `lovelace_gen:` in your `configuration.yaml` please remove or comment that line! |

### Adding Resources
Resources are added automatically when the card gets installed within HACS, but to be sure check them through `Sidebar > Lovelace Dashboards > Resources`.

### Installation
Copy the following files/folders to the root of your Home Assistant installation

- Copy the `/hki-base/` folder to the root of your setup
- Copy the `/hki-user/` folder to the root of your setup
- Copy the `/packages/` folder to the root of your setup
- Copy the `/www/` folder to the root of your setup
- Add the following lines to your `configuration.yaml` file

```yaml
homeassistant:
  packages: !include_dir_named packages/
```

Note: If you have an existing setup and already have packages, you must cut/paste the packages/homekit_infused folder inside your currently exising packages folder! (depending on the way the folder is included within your configuration.yaml file)

### Extra Information
- Create/edit a `customize.yaml` file, this file is automatically created whenever you edit an entity through the UI configuration>customize. However you can create this file yourself if you don't have it already. Just put the file at the root of your config, you can also download the example customize.yaml file instead.
You might need the following entry in your `configuration.yaml` file

```yaml
homeassistant:
  customize: !include customize.yaml
```

Now if you have created this file we will start and fill it with our own entities.
If you already have items in that file just add them below the last item, else just start typing exactly as in the example below. You do NOT need to do all of your entities. Just do the ones that are going to get shown in the frontend (e.g. lights, switches, sensors, binary_sensors and your vacuum).

```yaml
switch.washingmachine:
  friendly_name: Washing Machine
  icon: mdi:washing-machine
```

NOTE: The customize.yaml file is used for quick and easy manipulation of icons and friendly names without the need to redefine them again on each view. You can however just resort to using the devices addon to change the name/icon and such.

## That's it! You have succesfully installed the Homekit Infused! Now go on with configuring it :P

### Extra Information
#### Dwains Dashboard!

If you happen to have [Dwains Dashboard](https://github.com/dwainscheeren/dwains-lovelace-dashboard) installed I have some awesome news. The two dashboards can finally work together, however you do need a slight adjustment of the configuration.
First and foremost, you MUST have the latest Dwains Dashboard AND the latest HKI for this to work properly!

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
