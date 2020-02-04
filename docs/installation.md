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

| Name | Type | Required | Description |
|----------------------------------|--------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Weather Card] | Module | Yes | This is the animated weather card used in the weather view|
| Card-Mod | Module | Yes | This mod allows for custom css on any card |
| Button Card | Module | Yes | This is the button used throughout the entire setup |
| Mini Graph Card | Module | Yes | This is the mini-graph used in some of the popup cards |
| Auto Entities | Module | Yes | This is one of the most important addons as auto-filling requires this addon |
| Layout Card | Module | Yes | This addon is used as a replacement for vertical and horizontal stacks |
| Custom Header | Module | Yes | This is used to modify the standard Home Assistant header |
| More Info Card | Module | Yes | This card is used in most popups |
| RGB Light Card | js | Yes | This card is used in conjuction with the light-popup card |
| Card Tools | Module | Yes | This is needed for various custom cards to run |
| Check Button Card | js | Yes | This is the used in the cleaning view and makes checklists possible |
| Mini Media Player | js | No | This is a beautiful replacement for the built-in media player |
| Vertical-Stack-in-Card | js | Yes | This is like an entities-card but serves only for one purpose, to make cards tighter together and look like a single card |
| Simple Weather Card | Module | Yes | This is the weather banner found on the frontpage |
| Swipe Card | Module | Yes | This card is needed for the scrolling notifications, but also for most popups |
| State-Switch | Module | Yes | This card is an addition to conditional-cards, it works similar but has some extra features |
| Air Visual Card | js | Yes | This card is used in the weather view |
| Upcoming Media Card | js | No | This card can be used with the upcoming media component and is useful only for Plex, Radarr and Sonarr|
| Lovelace Xiaomi Vacuum Map Card | Module | No | This is the map card used for vacuum cleaners |
| GUI Toolbox Card | Module | No | A very cool card to make the UI editor partly available in YAML mode, this card gives you the original card editor with the exception that you can't save the cards directly. You can however copy/paste the code created with this |

Manual Plugins Import: (Some components can't be found on HACS and need to be imported, go to HACS and scroll on the tabs bar to the right and click on settings, add the repositories below. After adding the repository click on it and install the card, DON'T forget this!)
Add all the repositories below as a 'plugin', choose it from the dropdown menu
  - Custom Light Popup Card (required) (https://github.com/DBuit/light-popup-card)
  - Thermostat Popup Card (required) (https://github.com/DBuit/thermostat-popup-card)
  - Deep-Press-Mod (optional, requires an Apple device, if you have a mixed household Apple/Android you can safely install this) (https://github.com/roflcoopter/deep-press)

### Components (click on integrations tab in HACS)
Required Components:
  - Browser_mod
  - Lovelace_gen
  - Average Sensor

Optional Components:
  - Plex Recently Added (if you use plex you might want this, required if you want to use the upcoming media card)
  - Sonarr and Radarr upcoming media (required if you want to use the upcoming media card)
  - Xbox One (add the following repository to your hassio addons https://github.com/hunterjm/hassio-addons, this component will work for non hassio installs as well)

Manual Components Import: (This works the same as with plugins, however some components might not get added through HACS, if it doesn't just copy my component into your custom_components folder)
Add all the repositories (where applicable) as an 'integration', choose it from the dropdown menu
  - Imap (optional, only required if using outlook/hotmail/live email addresses, copy this from my repo into your folder)
  - RDW (optional, Dutch Car Registration Sensor, copy this from my repo into your folder)

# Copying
### Notes
  - For safe results I suggest restarting Home Assistant at this point.
  - After having installed all the required components and custom-cards it is now time to copy files over, remember that you should have made BACKUPS by now, if you haven't DO IT NOW!!! Past this there is nothing else I can do for you if you fail to do a simple task!
  - Homekit Infused makes heavy use of lovelace_gen, split files and it supports the use of !secrets. Unfortunately to achieve this we have to run lovelace in yaml mode (you can do this by reading up the following part and copy the relevant config from `configuration.yaml`). There is a major downside of running this in YAML mode especially when you are used to using the UI-editor for lovelace cards. In YAML mode the menu that shows RAW Editor, Refresh, Unused Entities and UI editor will become useless (and therefor is hidden in this setup). Now for new users this might sound very daunting and it probably is a little. When you convert to YAML mode your storage mode lovelace config will no longer be used. There is an upside to this, storage mode lovelace and YAML mode lovelace do not store their information in the same file. If you have used storage mode (default HA) and want to try out YAML mode you can easily revert this change by just removing the lines from `configuration.yaml`. So to get the most out of this you will probably want to learn the basics of lovelace. If you know the basics of lovelace and you liked the UI editor I do have some good news. If you have installed the GUI-sandbox-tool in the previous steps then you will get a button that gives you exactly that UI editor you were already used to. The only difference is, is that you can't save cards with the UI editor and you will need to copy the code from the editor into the respective files.
Lovelace_gen is heavily used in this setup and is a requirement to run this at all. Lovelace_gen is what decluttering-card did in the older HKI versions but much more is possible with this. To get the most out of HKI (and if you want to start editing this yourself) You will have to learn lovelace_gen. It isn't really that hard, but it housed more features than to declutter some templates so keep that in mind. It makes global configuration possible, it can do templates (just like decluttering-card could, and config for that is pretty similar), it can make macro's and much more. Basically it brings jinja2 templating to the frontend without the need for an extra card! https://github.com/thomasloven/hass-lovelace_gen. You do not need to know how YAML mode and lovelace_gen works straight away. HKI should work without you knowing how to use them, but I highly recommend you to learn it as it isn't that difficult and will benefit you a lot in creating modifications to this setup.

Lets not dwell any longer and get into the copying part. There are two methods I will describe on how you can do this.

### Copy Files
To copy the files you will need all the following files/folders from my repo.

- You will need to copy the entire `/lovelace/` folder to the root of your setup
- Copy the `/themes/` folder to the root of your setup
- You will need to copy `ui-lovelace.yaml` and `global_config.yaml` to the root of your setup
- You will need to open the `configuration.yaml` from my repo and copy/paste all the contents into your own `configuration.yaml` file. (If you happen to have some of this already you don't need to copy it again, just make sure you don't have duplicates. E.g. you can't have `homeassistant:` or `browser_mod:` twice. It will give errors. If you already have used HKI in the past you might need to compare the changes. Don't worry the `configuration.yaml` file that is provided only has the necessary changes in them so you will be done relatively quickly.
- You will have to copy the `/www/images/` folder to your own `/www/` folder. If you have followed the preparation steps you will already have the `www` folder. If you don't you can simply create it.
- Copy ALL the files (or contents of those files) to your own respective folder/files. All the files that are within the `/configuration/required-config/` folder need to be copied to your own respective files.
```
Example:
Every automation need to go to either a folder (if you have a split or packaged HA configuration) or it will have to go into your `configuration.yaml` if you use the standard way HA does it. So automations would go under the `automations:` section of the `configuration.yaml` file, groups under `groups:` etc, etc. If you have used previous versions of HKI and use the split configuration structure you should delete the old automations related to HKI and just copy these files into their respective folders.
 There are 3 folders (required, optional and example config) You MUST have what is inside the required-config folder, you only need the optional-config if you want to use a vacuum cleaner with your setup, need a custom alarm or if you want to have the laundry room view to display correctly. The example-config folder is exactly what it is and are all my personal automations which are obviously not required for use with HKI, they serve as ideas for you to use.
  
- Last but not least: You will need to delete the contents (not the folder, just its contents) of the following two folders and replace the files with the ones from my repo!
 ```
- Delete the contents from your `/www/community/light-popup/` folder and copy the .js file from my repo into there
- Delete the contents from your `/www/community/thermostat-popup/` folder and copy the .js file from my repo into there
I am still looking into this, however without the slight changes I made to this card it might look bad or not work the way it is supposed to. Please do this, it is relatively simple!
  
- If you need any of the custom_components you can copy them (the imap sensor is only needed for hotmail/outlook users, rdw is only for Dutch citizens with a car) If you don't need any of these skip this.

- Now choose your layout. You have the choice between the following frontpage layouts:
1. Default (two large photos and a smaller photo in the middle)
2. 2-persons (two large photos, no middle photo)
3. 4-persons (four large photos)
4. 4-persons (two large photos, two smaller photos)
- If you have chosen your layout, please do the following: Copy the chosen template from the `/addons/views/` folder (found on the repo) to your `/lovelace/views/` folder. You MUST remove the `00.frontpage.yaml` file which comes by default!
  
Note: If you need examples for any or this you can always check out my personal branch (just go the the main page of this repo and then select branch: personal from the dropdown menu).
The copying process should now be completed and we can move on to the configuration part.

I am pretty sure you are already quite some time at this, maybe you should take a break now? XD!
