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
  
### Basic
The easiest way to get the addons installed is by just copying the entire contents of the /www/ folder to the root of your Home Assistant install. This way you have the best compatibility (as all the addons have been tested) and it assures you that you won't get notified for addon updates (which some people might find annoying). Updating addons can ofcourse still be done by updating HKI as I will update this repo regularly with these kind of updates. If you need more flexibility you might want to take a look at the advanced section. Remember that you MUST have HACS setup or else this method will not work.

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
You can skip to the Copy Files part if you have used the basic steps above, else continue with advanced.

### Advanced
Experienced Home Assistant users might want to install these addons in HACS. I will mention though that I can NOT give support on untested versions of these addons and updating any of these addons without having been tested in HKI is on your own risk. I will advise you to just use the basic mode and use HACS for any other plugin you might want/need as those plugins are not a requirement in HKI. For best compatibility you will only use the ones from this repo! You will not need to add the resources to your configuration as I have already done this. You will only need to do this if you want to add custom resources (WARNING: custom resources currently do not survive updates, it is a small thing, but I had to mention it).

#### Plugins (Click on Plugins in HACS)

| Name | Type | Required | Description |
|----------------------------------|--------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Gap Card](https://github.com/thomasloven/lovelace-gap-card) | Module | Yes | This creates a gap between the screenborders, this will eventually replace all the blank-buttons HKI currently has |
| [Text Input Row](https://github.com/gadgetchnnel/lovelace-text-input-row) | js | Yes | This is needed to make input_text more readable |
| [Config Template Card](https://github.com/iantrich/config-template-card) | Module | Yes | This is needed to read some templates on some views/cards, don't skip this |
| [Search Card](https://github.com/postlund/search-card) | Module | No | This is the search card widget for the frontpage |
| [Weather Card](https://github.com/bramkragten/weather-card) | Module | Yes | This is the animated weather card used in the weather view|
| [Card-Mod](https://github.com/thomasloven/lovelace-card-mod) | Module | Yes | This mod allows for custom css on any card |
| [Button Card](https://github.com/custom-cards/button-card) | Module | Yes | This is the button used throughout the entire setup |
| [Mini Graph Card](https://github.com/kalkih/mini-graph-card) | Module | Yes | This is the mini-graph used in some of the popup cards |
| [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities) | Module | Yes | This is one of the most important addons as auto-filling requires this addon |
| [Layout Card](https://github.com/thomasloven/lovelace-layout-card) | Module | Yes | This addon is used as a replacement for vertical and horizontal stacks |
| [Custom Header](https://github.com/maykar/custom-header) | Module | Yes | This is used to modify the standard Home Assistant header |
| [More Info Card](https://github.com/thomasloven/lovelace-more-info-card) | Module | Yes | This card is used in most popups |
| [Card Tools](https://github.com/thomasloven/lovelace-card-tools) | Module | Yes | This is needed for various custom cards to run |
| [Check Button Card](https://github.com/custom-cards/check-button-card) | js | Yes | This is the used in the cleaning view and makes checklists possible |
| [Vertical-Stack-in-Card](https://github.com/custom-cards/vertical-stack-in-card) | js | Yes | This is like an entities-card but serves only for one purpose, to make cards tighter together and look like a single card |
| [Simple Weather Card](https://github.com/kalkih/simple-weather-card) | Module | Yes | This is the weather banner found on the frontpage |
| [Swipe Card](https://github.com/bramkragten/swipe-card) | Module | Yes | This card is needed for the scrolling notifications, but also for most popups |
| [State Switch](https://github.com/thomasloven/state-switch) | Module | Yes | This card is an addition to conditional-cards, it works similar but has some extra features |
| [Air Visual Card](https://github.com/dnguyen800/air-visual-card) | js | Yes | This card is used in the weather view |
| [Upcoming Media Card](https://github.com/custom-cards/upcoming-media-card) | js | No | This card can be used with the upcoming media component and is useful only for Plex, Radarr and Sonarr |
| [Xiaomi Vacuum Map Card](https://github.com/PiotrMachowski/lovelace-xiaomi-vacuum-map-card) | Module | No | This is the map card used for vacuum cleaners |
| [GUI Sandbox Card](https://github.com/thomasloven/lovelace-gui-sandbox) | Module | No | A very cool card to make the UI editor partly available in YAML mode, this card gives you the original card editor with the exception that you can't save the cards directly. You can however copy/paste the code created with this |
| [Light Popup Card](https://github.com/DBuit/light-popup-card) | Module | Yes | These are the popup cards used for lights and switches|

Manual Plugins Installation. The following plugins can either not be found on the HACS store or are modified by me. The best way to install these are to copy the corresponding files into your `/www/community/` folder. Do NOT get them from HACS!!

| Name | Type | Required | Description |
|----------------------------------|--------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Thermostat Popup Card](https://github.com/DBuit/thermostat-popup-card) | Module | Yes | These are popup cards used for climate devices, copy the `/www/community/thermostat-popup/` folder and paste it into the directory mentioned above |
| [Deep Press Mod](https://github.com/roflcoopter/deep-press) | Module | No | This is only useful for households with iPhones that have 3d-touch. It might not work well on mixed households (e.g. Android and iOS or iPhones without 3d-touch. | 

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

# Copying
### Notes
- For safe results I suggest restarting Home Assistant at this point.
- After having installed all the required components and custom-cards it is now time to copy files over, remember that you should have made BACKUPS by now, if you haven't DO IT NOW!!! Past this there is nothing else I can do for you if you fail to do a simple task!

### Copy Files
To copy the files you will need all the following files/folders from my repo.

- Copy the entire `/lovelace/` folder to the root of your setup
- Copy the `/themes/` folder to the root of your setup
- Copy `ui-lovelace.yaml` file to the root of your setup
- Copy the `/packages/` folder to the root of your setup
- Copy the `/user_content/` folder to the root of your setup
- Copy the `/www/` folder to the root of your setup
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

- You must set the following line in your own `configuration.yaml` file. Without it, it will NOT work!
```
lovelace:
    mode: yaml
```

##### Note for users from older HKI versions
Note: you can't have duplicate keys, this means that you can't have either the exact same config twice. This is mostly important for users coming from the alpha or beta versions of this setup. If you did run the 1.1, you MUST remove EVERYTHING that was related to that (this means, views, global_config, automations, input_selects, etc, etc). Don't forget anything. (if you can't remember what those files were, you can simply download the 1.1 release from the repo and see which files were in there). HKI config is now packaged for easy updates. This also means that keeping the old automations etc would mean duplicate keys! So remove them. You won't need to worry about this in the future again as this has been taken care of in v2.0.0

The copying process should now be completed and we can move on to the configuration part.

I am pretty sure you are already quite some time at this, maybe you should take a break now? XD!
