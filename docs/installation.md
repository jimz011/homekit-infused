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

# INSTALLATION
Installing HKI should be super easy and when using the basic method should not take you longer than 15-30 minutes. Though ofcourse this might depend on your experience with Home Assistant.

### Prerequisites
  - First create github account if you do not already have one
  - Then install HACS (https://github.com/hacs/integration) Please read the documentation on how to do this, I will not make docs on things that are already perfectly documented.


### Addons
The following components MUST be setup manually and can be found in HACS, click on integrations and find the following integrations.

| Name | Required | Description |
|----------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Browser Mod](https://github.com/thomasloven/hass-browser_mod) | Yes | Browser-mod makes the browser more useful and gives us the opportunity to show/create custom popups and many more, make sure you have `browser_mod:` in your `configuration.yaml` after you have installed it. Click the link for instructions! |
| [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen) | Yes | This is the MOST important piece of the setup, without this HKI will not work! Don't add this to your `configuration.yaml` file as the included package already does so for you, if you already have `lovelace_gen:` in your `configuration.yaml` please remove or comment that line! |
| [Average Sensor](https://github.com/Limych/ha-average) | No | This sums up the number of any of your entities and creates an average sensor of it, I use this on the climate view and frontpage. Not required, but you must have some kind of replacement if you don't use this, I recommend you to install it though, do not forget to set it up after installing |

When you are done make sure you add the following line to your `configuration.yaml` file:
```
browser_mod:
```


#### Plugins (Click on Frontend in HACS)

| Name | Type | Required | Description |
|----------------------------------|--------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Bar Card](https://github.com/custom-cards/bar-card) | Module | No | This creates great looking bars for use in graphs. Not required, but handy if you want to use custom addons like noodlemctwoodles unraid addon for HKI |
| [Gap Card](https://github.com/thomasloven/lovelace-gap-card) | Module | Yes | This creates a gap between the screenborders, this will eventually replace all the blank-buttons HKI currently has |
| [Text Input Row](https://github.com/gadgetchnnel/lovelace-text-input-row) | Module | Yes | This is needed to make input_text more readable |
| [Config Template Card](https://github.com/iantrich/config-template-card) | Module | Yes | This is needed to read some templates on some views/cards, don't skip this |
| [Search Card](https://github.com/postlund/search-card) | Module | No | This is the search card widget for the frontpage |
| [Weather Card](https://github.com/bramkragten/weather-card) | Module | Yes | This is the animated weather card used in the weather view|
| [Card Mod](https://github.com/thomasloven/lovelace-card-mod) | Module | Yes | This mod allows for custom css on any card |
| [Button Card](https://github.com/custom-cards/button-card) | Module | Yes | This is the button used throughout the entire setup |
| [Mini Graph Card](https://github.com/kalkih/mini-graph-card) | Module | Yes | This is the mini-graph used in some of the popup cards |
| [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities) | Module | Yes | This is one of the most important addons as auto-filling requires this addon |
| [Layout Card](https://github.com/thomasloven/lovelace-layout-card) | Module | Yes | This addon is used as a replacement for vertical and horizontal stacks |
| [Custom Header](https://github.com/maykar/custom-header) | Module | Yes | This is used to modify the standard Home Assistant header |
| [More Info Card](https://github.com/thomasloven/lovelace-more-info-card) | Module | Yes | This card is used in most popups |
| [Card Tools](https://github.com/thomasloven/lovelace-card-tools) | Module | Yes | This is needed for various custom cards to run |
| [Check Button Card](https://github.com/custom-cards/check-button-card) | Module | Yes | This is the used in the cleaning view and makes checklists possible |
| [Vertical-Stack-in-Card](https://github.com/custom-cards/vertical-stack-in-card) | js | Yes | This is like an entities-card but serves only for one purpose, to make cards tighter together and look like a single card |
| [Simple Weather Card](https://github.com/kalkih/simple-weather-card) | Module | Yes | This is the weather banner found on the frontpage |
| [Swipe Card](https://github.com/bramkragten/swipe-card) | Module | Yes | This card is needed for the scrolling notifications, but also for most popups |
| [State Switch](https://github.com/thomasloven/state-switch) | Module | Yes | This card is an addition to conditional-cards, it works similar but has some extra features |
| [Air Visual Card](https://github.com/dnguyen800/air-visual-card) | Module | Yes | This card is used in the weather view |
| [Upcoming Media Card](https://github.com/custom-cards/upcoming-media-card) | Module | No | This card can be used with the upcoming media component and is useful only for Plex, Radarr and Sonarr |
| [Xiaomi Vacuum Map Card](https://github.com/PiotrMachowski/lovelace-xiaomi-vacuum-map-card) | Module | No | This is the map card used for vacuum cleaners |
| [GUI Sandbox Card](https://github.com/thomasloven/lovelace-gui-sandbox) | Module | No | A very cool card to make the UI editor partly available in YAML mode, this card gives you the original card editor with the exception that you can't save the cards directly. You can however copy/paste the code created with this |

Manual Plugins Installation. The following plugins can either not be found on the HACS store or are modified by me. The best way to install these are to copy the corresponding files into your `/www/community/` folder. Do NOT get them from HACS!!

| Name | Type | Required | Description |
|----------------------------------|--------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Thermostat Popup Card](https://github.com/DBuit/thermostat-popup-card) | Module | Yes | These are popup cards used for climate devices, folder and paste it into the directory mentioned above |
| [Deep Press Mod](https://github.com/roflcoopter/deep-press) | Module | No | This is only useful for households with iPhones that have 3d-touch. It might not work well on mixed households (e.g. Android and iOS or iPhones without 3d-touch, this will become obsolete in a while when 3D touch will be completely phased out by Apple. | 
| [Light Popup Card](https://github.com/DBuit/light-popup-card) | Module | Yes | These are the popup cards used for lights and switches |
| [Switch Popup Card](https://github.com/DBuit/switch-popup-card) | Module | Yes | These are the popup cards used for fans and might be used more in the future |
| [Cover Popup Card](https://github.com/DBuit/cover-popup-card) | Module | Yes | These are the popup cards used for covers |

#### Components (click on Integrations in HACS)

| Name | Required | Description |
|----------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Browser Mod](https://github.com/thomasloven/hass-browser_mod) | Yes | Browser-mod makes the browser more useful and gives us the opportunity to show/create custom popups and many more, make sure you have `browser_mod:` in your `configuration.yaml` after you have installed it. Click the link for instructions! |
| [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen) | Yes | This is the MOST important piece of the setup, without this HKI will not work! Don't add this to your `configuration.yaml` file as the included package already does so for you, if you already have `lovelace_gen:` in your `configuration.yaml` please remove or comment that line! |
| [Average Sensor](https://github.com/Limych/ha-average) | No | This sums up the number of any of your entities and creates an average sensor of it, I use this on the climate view and frontpage. Not required, but you must have some kind of replacement if you don't use this, I recommend you to install it though, do not forget to set it up after installing |
| [Plex Recently Added](https://github.com/custom-components/sensor.plex_recently_added) | No | This works in conjunction with the Upcoming Media plugin, this is only useful if you use Plex |
| [Sonarr and Radarr Upcoming Media](https://github.com/custom-components/sensor.radarr_upcoming_media) | No | This works in conjunction with the Upcoming Media plugin, this is only useful if you use Sonarr or Radarr |

Manual Components Import. The following components can either not be found on the HACS store or are modified by me. The best way to install these are to copy the corresponding files into your `/custom_components/` folder.

| Name | Required | Description |
|----------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Imap | No | This is a modified imap component, you should only install this when using outlook/live or hotmail email addresses |
| RDW | No | This is a sensor for Dutch APK, if you are not a Dutch citizen this is useless to you |

#### Adding Resources
Resources MUST be added manually which can be done within the Home Assistant configuration panel. Go to the Sidebar > Configuration > Lovelace Dashboards > Resources and add all of the following resources one by one. This makes it possible to use custom resources whenever you might need them and also makes sure you can still use the Home Assistant dashboard you have already created with the UI editor.

Add the following resources, you should select `javascript module` for each of them. 
To make it easier on you, I have compiled a list with all used resources that you can easily copy and enter.
```
- /hacsfiles/air-visual-card/air-visual-card.js
- /hacsfiles/button-card/button-card.js
- /hacsfiles/calendar-card/calendar-card.js
- /hacsfiles/check-button-card/check-button-card.js
- /hacsfiles/config-template-card/config-template-card.js
- /hacsfiles/cover-popup-card/cover-popup-card.js
- /hacsfiles/custom-header/custom-header.js
- /hacsfiles/light-popup-card/light-popup-card.js
- /hacsfiles/lovelace-auto-entities/auto-entities.js
- /hacsfiles/lovelace-card-mod/card-mod.js
- /hacsfiles/lovelace-card-tools/card-tools.js
- /hacsfiles/lovelace-gap-card/gap-card.js
- /hacsfiles/lovelace-gui-sandbox/gui-sandbox.js
- /hacsfiles/lovelace-layout-card/layout-card.js
- /hacsfiles/lovelace-more-info-card/more-info-card.js
- /hacsfiles/lovelace-state-switch/state-switch.js
- /hacsfiles/lovelace-text-input-row/lovelace-text-input-row.js
- /hacsfiles/lovelace-xiaomi-vacuum-map-card/xiaomi-vacuum-map-card.js
- /hacsfiles/mini-graph-card/mini-graph-card-bundle.js
- /hacsfiles/mini-media-player/mini-media-player-bundle.js
- /hacsfiles/search-card/search-card.js
- /hacsfiles/simple-weather-card/simple-weather-card-bundle.js
- /hacsfiles/swipe-card/swipe-card.js
- /hacsfiles/switch-popup-card/switch-popup-card.js
- /hacsfiles/thermostat-popup-card/thermostat-popup-card.js
- /hacsfiles/upcoming-media-card/upcoming-media-card.js
- /hacsfiles/vertical-stack-in-card/vertical-stack-in-card.js
- /hacsfiles/weather-card/weather-card.js
```

# Copying
### Notes
- For safe results I suggest restarting Home Assistant at this point.
- After having installed all the required components and custom-cards it is now time to copy files over, remember that you should have made BACKUPS by now, if you haven't DO IT NOW!!! Past this there is nothing else I can do for you if you fail to do a simple task!

### Copy Files
To copy the files you will need all the following files/folders from my repo.

- Copy the entire `/dashboards/` folder to the root of your setup
- Copy the `/themes/` folder to the root of your setup
- Copy the `homekit-infused.yaml` and `homekit-infused-settings.yaml` files to the root of your setup
- Copy the `/packages/` folder to the root of your setup
- Copy the `/user_content/` folder to the root of your setup
- Copy the `/www/` folder to the root of your setup
- Copy the `/appdaemon/` folder to the root of your setup. (If you already use AppDaemon, please copy the file text_states_load.py to your /appdaemon/apps/ folder and copy the corresponding apps from apps.yaml into your own apps.yaml file)
- Add the following line to your `configuration.yaml` file
```
homeassistant:
    packages: !include_dir_named packages/
```
Note: If you have an existing setup and already have packages, you must cut/paste the packages folder inside your currently exising packages folder! (depending on the way the folder is included within your configuration.yaml file)

- This will already work if you have used HACS for themes in the past, but to be safe add the following line to your `configuration.yaml` file:
```
frontend:
    themes: !include_dir_merge_named themes/
```

- You must set the following lines in your own `configuration.yaml` file. Without it, it will NOT work:
```
lovelace:
    mode: storage
    dashboards:
      homekit-infused:
        mode: yaml
        title: HKI
        icon: mdi:cellphone
        show_in_sidebar: true
        filename: homekit_infused.yaml
      hki-settings:
        mode: yaml
        title: HKI Settings
        icon: mdi:tools
        show_in_sidebar: true
        filename: homekit_infused_settings.yaml    
```

The copying process should now be completed and we can move on to the configuration part.

I am pretty sure you are already quite some time at this, maybe you should take a break now? XD!
