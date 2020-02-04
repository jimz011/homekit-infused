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

# INSTALLATION
Installing HKI can be quite an undertaking as you will need a lot of custom-cards and custom-components. I will try to guide you through on how to go at this.

### Prerequisites
  - First create github account if you do not already have one
  - Then install HACS (https://github.com/hacs/integration) Please read the documentation on how to do this, I will not make docs on things that are already perfectly documented.
  - After HACS is installed and configured you will need to install a list of custom-cards. There are two ways to do this. Either copy all the contents of the `/www/community/` folder to your own `/www/community/` folder. This will not allow you to update the addons in the future. Or find them in the HACS community store, this method is preferred and allows you to update addons in the future.

The following addons are needed and can be found in the HACS plugin store!
You won't need to add them to the resources file as I have already done this for you.

#### Plugins (Click on Plugins in HACS)

| Name | Type | Required | Description |
|----------------------------------|--------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Weather Card](https://github.com/bramkragten/weather-card) | Module | Yes | This is the animated weather card used in the weather view|
| [Card-Mod](https://github.com/thomasloven/lovelace-card-mod) | Module | Yes | This mod allows for custom css on any card |
| [Button Card](https://github.com/custom-cards/button-card) | Module | Yes | This is the button used throughout the entire setup |
| [Mini Graph Card](https://github.com/kalkih/mini-graph-card) | Module | Yes | This is the mini-graph used in some of the popup cards |
| [Auto Entities](https://github.com/thomasloven/lovelace-auto-entities) | Module | Yes | This is one of the most important addons as auto-filling requires this addon |
| [Layout Card](https://github.com/thomasloven/lovelace-layout-card) | Module | Yes | This addon is used as a replacement for vertical and horizontal stacks |
| [Custom Header](https://github.com/maykar/custom-header) | Module | Yes | This is used to modify the standard Home Assistant header |
| [More Info Card](https://github.com/thomasloven/lovelace-more-info-card) | Module | Yes | This card is used in most popups |
| [RGB Light Card](https://github.com/bokub/rgb-light-card) | js | Yes | This card is used in conjuction with the light-popup card |
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

Manual Plugins Installation. The following plugins can either not be found on the HACS store or are modified by me. The best way to install these are to copy the corresponding files into your `/www/community/` folder. Do NOT get them from HACS!!

| Name | Type | Required | Description |
|----------------------------------|--------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Light Popup Card](https://github.com/DBuit/light-popup-card) | Module | Yes | These are popup cards used for lights, copy the `/www/community/light-popup/` folder and paste it into the directory mentioned above |
| [Thermostat Popup Card](https://github.com/DBuit/thermostat-popup-card) | Module | Yes | These are popup cards used for climate devices, copy the `/www/community/light-popup/` folder and paste it into the directory mentioned above |
| [Deep Press Mod](https://github.com/roflcoopter/deep-press) | Module | No | This is only useful for households with iPhones that have 3d-touch. It might not work well on mixed households (e.g. Android and iOS or iPhones without 3d-touch. | 

#### Components (click on Integrations in HACS)

| Name | Required | Description |
|----------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Browser Mod](https://github.com/thomasloven/hass-browser_mod) | Yes | Browser-mod makes the browser more useful and gives us the opportunity to show/create custom popups and many more, make sure you have `browser_mod:` in your `configuration.yaml` after you have installed it. Click the link for instructions! |
| [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen) | Yes | This is the MOST important piece of the setup, without this HKI will not work! Don't add this to your `configuration.yaml` file as the included package already does so for you, if you already have `lovelace_gen:` in your `configuration.yaml` please remove or comment that line! |
| [Average Sensor](https://github.com/Limych/ha-average) | No | This sums up the number of any of your entities and creates an average sensor of it, I use this on the climate view and frontpage. Not required, but you must have some kind of replacement if you don't use this | 
| [Average Sensor](https://github.com/Limych/ha-average) | No | This sums up the number of any of your entities and creates an average sensor of it, I use this on the climate view and frontpage. Not required, but you must have some kind of replacement if you don't use this |
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
- Copy the `/homekit-infused/` folder to the root of your setup
- Copy the `/global_config/` folder to the root of your setup
- Copy the `/www/images/` folder to your own `/www/` folder
- Add the following line to your `configuration.yaml` file
```
homeassistant:
  packages:
    homekit_infused_config: !include homekit_infused/configuration.yaml
    homekit_infused_groups: !include homekit_infused/hki_groups.yaml
```
Note: you can't have `homeassistant:` twice in your setup. You already have it so just copy the packages part and paste it below `homeassistant:`. Mind the indentation!

- This will already work if you have used HACS for themes in the past, but to be safe add the following line to your `configuration.yaml` file:
```
frontend:
  themes: !include_dir_merge_named themes/
```
Note: once again, you can't have `frontend:` twice!

- Now choose your layout. You have the choice between the following frontpage layouts:
1. Default (two large photos and a smaller photo in the middle)
2. 2-persons (two large photos, no middle photo)
3. 4-persons (four large photos)
4. 4-persons (two large photos, two smaller photos)
- If you have chosen your layout, please do the following: Copy the chosen template from the `/addons/views/` folder (found on the repo) to your `/lovelace/views/` folder. You MUST remove the `00.frontpage.yaml` file which comes by default!

The copying process should now be completed and we can move on to the configuration part.

I am pretty sure you are already quite some time at this, maybe you should take a break now? XD!
