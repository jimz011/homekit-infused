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

# INSTALLATION
Installing HKI can be quite an undertaking as you will need a lot of custom-cards and custom-components. I will try to guide you through on how to go at this.

### Prerequisites
  - First create github account if you do not already have one
  - Then install HACS (https://github.com/hacs/integration) Please read the documentation on how to do this, I will not make docs on things that are already perfectly documented.
  - After HACS is installed and configured you will need to install a list of custom-cards. There are two ways to do this, either the proper way or the quick and dirty way.
    The proper way would be to install each and every custom component and card manually through HACS. You can do this by going to the sidebar>HACS (it could also be called community)
    Search for each of the addons listed below and install them one by one.
    The quick and dirty way would be copying the entire www/community folder from the HKI project to your own.
    There are pro's and cons for both methods. The proper way will allow you to update the addons through HACS and be notified about them, however it might break the setup if I haven't fixed the code for breaking changes.
    The quick and dirty way allows for a 100% working one with the current downloaded project. However HACS won't know you have these files and you are not able to update them through HACS.
    If you are lazy for whatever reason, you could use the quick and dirty method and search for the addons in HACS later on (it will simply overwrite the old card and it would give the ability to update again)
    Your choice. Depending on the choice this can take from 2 minutes to a whopping 30 minutes to install. It really depends on a lot of factors and chosen method on how long this might take. Remember I talked about not rushing it!
    
    Find the following addons on HACS (you do not need to add them to the resources, I have already done this for you!)
    In the past I have pasted the repository links for every addon. Since they can be easily found through HACS I will only link to repo's that can't be found on HACS.
    If you need to read documentation on any of the cards please open your sidebar in HA go to HACS and choose the installed plugin. Remember that you need to check out the documenatation of how to use them for each plugin or component. Plugins are not so important to know how they work straight away as they will work fine without you knowing how to use them, however I do recommend you to read the custom-components documentation of each component as they are all different and some of the components will need some of your user input (it usually isn't that much).

Press repository to go to their respective pages.
### Plugins (click on plugins tab in HACS)
Required Plugins:
  - Layout Card
  - RGB Light Card
  - Light Entity Card
  - Card Tools
  - Check Button Card (Requires MQTT)
  - Mini Media Player Card
  - Calendar Card (Requires calendar sensors)
  - Button Card
  - Vertical-Stack-in-Card
  - Card-Mod
  - Simple Weather Card
  - Custom Header (This is the replacement for Custom Compact Header, don't confuse them!)
  - Mini Graph Card
  - Swipe Card
  - State-Switch
  - Weather Card 
  - Auto Entities
  - Air Visual Card (Requires Air Visual account and a sensor, it is free!)
  - Waze Travel Card
  - Lovelace More Info Card (required)

Optional Plugins:
  - Upcoming Media Card (Plex, Sonarr and/or Radarr required)
  - Xiaomi Vacuum Map Card (Requires Xiaomi Robot Vacuum)
  - Valetudo Map Card (Requires Xiaomi Robot Vacuum that is Rooted!)
  - Swipe Navigation (Used for swiping between views on mobile phones)
  - GUI Sandbox Card (optional, brings ui-editor to yaml mode. You won't be able to save, but you can create cards visually and copy code later on. recommended for tinkerers)

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
  - Afvalbeheer (for Dutch waste collection)
  - Plex Recently Added (if you use plex you might want this, required if you want to use the upcoming media card)
  - Sonarr and Radarr upcoming media (required if you want to use the upcoming media card)
  - Xbox One (add the following repository to your hassio addons https://github.com/hunterjm/hassio-addons, this component will work for non hassio installs as well)
  - ESPHome (add the following repository to your hassio addons https://github.com/esphome/hassio, I have not tested this on a non hassio install)

Manual Components Import: (This works the same as with plugins, however some components might not get added through HACS, if it doesn't just copy my component into your custom_components folder)
Add all the repositories (where applicable) as an 'integration', choose it from the dropdown menu
  - Imap (optional, only required if using outlook/hotmail/live email addresses, copy this from my repo into your folder)
  - Apple TV MRP (optional, if you have an Apple TV you might want this until the core version is fixed!) (https://github.com/chamberlain2007/apple_tv_mrp)
  - RDW (optional, Dutch Car Registration Sensor, copy this from my repo into your folder)
  - Xbox One (optional, if you own an Xbox you can use this component to control it, visit the following link on how to install this on either hassio or standard ha) (https://github.com/hunterjm/hassio-addons/tree/master/xboxone)
  - Custom-UI (optional, gives you the ability to template icons/names/etc in customize.yaml, editing this file was already discussed in the preparation section of the guide. This is not required but if you want system-wide dynamic icons you will want this) (https://github.com/andrey-git/home-assistant-custom-ui)
  - Customizer (optional, required when using Custom-UI, when installing Custom-UI you will need this component as well)

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
- If you need any of the custom_components you can copy them (the imap sensor is only needed for hotmail/outlook users, rdw is only for Dutch citizens with a car and you can take the xbox one component if you do not have hass.io as you can't install addons without hassio)

Note: the `/esphome/` folder is there as an example for you to use if you happen to use ESPHome. The other files that have a .example.yaml extension are my own configuration files and serve as an example for you to use.

The copying process should now be completed and we can move on to the configuration part.

I am pretty sure you are already quite some time at this, maybe you should take a break now? XD!
