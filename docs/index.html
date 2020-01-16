# Homekit Infused Installation and Configuration Manual

## Contents
- [Intro](https://github.com/jimz011/homeassistant/tree/development#intro)
- [Preparation](https://github.com/jimz011/homeassistant/tree/development#preparation)
- [Installation](https://github.com/jimz011/homeassistant/tree/development#installation)
- [Configuration](https://github.com/jimz011/homeassistant/tree/development#configuration)
- [Tips & Tricks](https://github.com/jimz011/homeassistant/tree/development#tips--tricks)
- [Important Notes](https://github.com/jimz011/homeassistant/tree/development#important-notes)
- [Issues](https://github.com/jimz011/homeassistant/tree/development#issues)
- [Feature Requests](https://github.com/jimz011/homeassistant/tree/development#feature-requests)
- [Thanks](https://github.com/jimz011/homeassistant/tree/development#thanks)
- [Questions?](https://github.com/jimz011/homeassistant/tree/development#questions)

# INTRO

Hello everyone my name is Jimmy (jimz011) and I proudly present to you the latest version of Homekit Infused.
I know there was a long 'silence' before I came with an update. I can certainly tell you why. Homekit Infused has been completely rewritten from the ground up.
It took me months to rewrite all of it but it is finally done. (Take in account that I have a full-time job so time is a luxury product)

So to start off, I must sadly announce that there is no upgrade path from previous versions of HKI, the reason for this is simple. The code has changed too much!
It would be like trying to release the youtube app as an update to the facebook app. This is obviously not ideal and I had to choose to either continue the old project, or create a new one that should be better, especially considering the future.
So I chose to rewrite everything and boy it was a lot of work, not only did I rewrite it, I also found ways for a lot of the config to be easier to set up. As a non-developer (I am a bartender) you can imagine all the headaches it caused me to figure out a way to do this.
But I have found ways, they might not always seem very beautiful, because remember I'm not a programmer. But hey it works, which is all that counts.

One of the major changes, which I might consider the biggest change of all is the removal of decluttering-cards. All templates are now handled through lovelace_gen as well as global configuration. Lovelace_gen was a requirement for a global config to happen.
For all the users that made lots of customizations with this project not all hope is lost. All old decluttering-templates and cards can be cut/paste in the new config just like it was in the old one. So if you did make customizations you could still use them, but it might require you some extra work to put them on the right places.
I will however advise you to switch over to lovelace_gen templates in the long term as this is the mod that we will see more and more in the future on other HA setups, mark my words. You can find tutorials on how to do this in the future in these docs.
Why did I change to lovelace_gen? Well first and foremost it is a mod and not a card, it modifies the yaml parser and allows us to do templating stuff in lovelace. It also allows us to create decluttering style templates that can be used in a similar fashion that decluttering-card used.
But it is more than that, it is currently also the only way I know of that is capable of building a global config. That is what this entire update is about, simplification. In the end only a few files will need to be edited to get you up and running fairly quickly.

Anyways, lets not make this any longer than it should be and get into the project as I would love to tell you more about myself and why I use Home Assistant, but you can find a lengthy interview of me that I did a while back https://gadget-freakz.com/interview-with-jimz011/.
It isn't very recent anymore, but you will certainly get the idea.

I hope you enjoy this release,

Yours Sincerely,

Jimz011

### Changes since HKI 0.13.3:
  - Completely rewritten from the ground up
  - Removed decluttering-card
  - Added a neat header
  - New notification window
  - New popup cards system-wide which include brightness, color and switch popups
  - New thermostat view and cards
  - New design for several views
  - Added a footer
  - Dynamic Icons system-wide
  - More compact design on personal and vacuum views
  - Easier to configure
  - Auto filling of basic views (cameras/lights/devices/climate/binary_sensors) by filling in the provided group file, popup cards will be added automatically to their respective entities automatically
  - Waze traffic info view
  - Removed swipe-card on most views in favor of state-switch (srry but no more swiping as it would make the frontend crash too often)
  - Made code more compact, 3000 lines less than HKI 0.13.3 but more features as mentioned above!
  - Removed widgets page (proved to be useless)
  - Changed first view to the homepage (this way after a refresh it would open the frontpage instead of the climate view)
  - A lot of small fixes to the design in general (you might not even notice them, but they are there!)


# PREPARATION
HKI is easy to configure as long as you have prepared yourself well. My advise is to use another computer, pi or create a vm to install this and test it first before moving over to production.
If you do decide to take the leap on your production device immediately I will highly suggest you make BACKUPS!!! I can't stress out enough that you should always do this unless you really don't care.
I cannot guarantee that this setup will work as great for everyone and I cannot if the setup will even work for you at all. Backing up your current system prevents yourself from being left empty handed!

NOTE: Even if you do not decide to use Homekit Infused the following preparations are actually really usefull for any Home Assistant setup.

### Preparation Checklist
#### Required
  - Time, I estimate the project to be installed within a few hours (I might be waaay off but I wouldn't know as I haven't installed it this way, It might be done in a relatively short time I am sure but that really depends on your current state with HA and ofc your experience with HA/Lovelace)
  - Install Home Assistant or create a backup of your current setup.
  - Add all your known devices to Home Assistant (if integrations are available the prefered way would be to use that instead of putting it in manually. (If you use tasmota, please use autodiscovery instead of hardcoding each device in your configuration. Though this is NOT a requirement, I would always advise you to use autodiscovery)
  - Create person entities in the UI go to configuration>persons and create all the persons in your house. Add the device_trackers you have to the person entities. Do not use device_trackers in lovelace unless you really need to (e.g. non-person related device_trackers)
  - Create/edit a `customize.yaml` file, this file is automatically created whenever you edit an entity through the UI configuration>customize. However you can create this file yourself if you don't have it already. Just put the file at the root of your config (e.g. same location as where `configuration.yaml` is located). If you have the file you may (or may not, haven't tested it) have to create an entry in `configuration.yaml`. I don't think it is necessary but if you do need it add the following line to `configuration.yaml`
  ```
  homeassistant:
    customize: !include customize.yaml
  ```
  Now if you have created this file what next? Well the `customize.yaml` file is used to give entities extra information like an icon and/or friendly name. For example every light in Home Assistant will appear as a lightbulb by default. This makes distinguishing lights only possible by name and it doesn't really look that cool. Now you could argue that this can all be done by the frontend now and you are very correct. However not only will this eliminate the need for the frontend to handle this when defining your entities in this file the icon and/or friendly name for that specific entity will be applied to everywhere on the frontend. Now what are the advantages of this? Well, if you want to re-use an entity mulitple times you don't need to define it's entity and/or name again. This will also apply to more-info windows and/or custom-cards that take the standard icon. You might see where I am going here. So, you should define the icons and names in this file for each entity that you want to be seen on the frontend (don't be crazy to do all your entities, only do the ones that will be shown on the frontend, but if you are that brave to do all, uhm I won't hold you back!). Why would I ask you to do this as a preparation? Well first of all, many people don't know about this built-in feature from Home Assistant. Second, this feature can also be accessed through the UI, but that will take too long (and even that feature is pretty unknown to many). So we are just going to edit the `customize.yaml` file with a text editor (or a hassio addon that does the same).
  Now how use this file? Well, either you download my `customize.yaml` file and edit it (which I might recommend if you do not have this file already) or start your own.
  Add the configuration for this as follows (please continue to read the entire section before starting to edit!!!!!!):
  ```
  switch.washingmachine:
    friendly_name: Washing Machine
    icon: mdi:washing-machine
  ```
  Simple huh? Now we could take it a step further, however this really depends on your needs. So what then? Well it is called Custom-UI, it was originally created for the states-ui (if you are new to HA, this was the frontend used before lovelace became the standard). It was actually used to add different cards to the states-ui that were not available at the time. However the same addon does something much more interesting. The addon can modify the `customize.yaml` file to accept templating!
  Now the addon hasn't been updated in a while now, but it isn't officially deprecated either (and tbh I don't think it will be soon either as this is still used by many). So what can we do with this then? Well the things we can do with this are really really cool. See the example below:
  ```
  binary_sensor.livingroom_door:
    friendly_name: Livingroom
    templates:
      icon: >
        if (state === 'on') return 'mdi:door-open';
        return 'mdi:door-closed';
  ```
  I think the result is obvious already and once again, as this is done through the backend this will also apply to anywhere else on the frontend (e.g. on a more-info window or a custom-card you would see an open door icon when the door is open and a closed door when it is closed) Cool huh?
  Now there are some people that have expressed there concerns on using Custom-UI (as they say it is deprecated, but I say it isn't!) therefor using Custom-UI is NOT a requirement.
  You have gotten the two examples, use the first example if you want to use it without Custom-UI or use a mix of both if you want to use Custom-UI. 
  Remember that you MUST fill in this file either way to use this with HKI 1.0a, without this file it should still work, however you will find yourself stuck in changing names and icons on the frontend. Both methods will help you create a better and more beautiful frontend (even if you don't use HKI). Use Custom-UI if you want dynamic icons! (see installation section on how to)
  
  Homekit Infused is based on a LOT of templates created specifically for this setup and in particular to make configuring this easier for third party users. Because of this nature it also means that many of the things can not be defined in the frontend. This only applies to views that are auto filled though (climate, lights, devices, security, sensors). These views can all be auto-filled with your own entities by filling in the provided files. Other views do not have auto filling and they can be edited just like you are used to, however I advise you to read the entire documentation before you do so as I have some great tips for you before editing actual views and/or templates (I will discuss this further in the tips/tricks section of the docs)

#### Optional 
  - The prefered way would be to do a clean install, however I can imagine you don't want to do this. Make sure that if you have older versions of Home Assistant that you have the correct components loaded. Most components are loaded within the `default_config:` however older setups might lack this line. Setting up location is also preferred to be done through the UI instead of hardcoding, not only will you be able to easily change the home location (great for RV's) but it also gives you a bit of extra privacy whenever you do decide to share your setup on the internet. (if using the ui for location it will not store the coordinates in configuration.yaml, nor will you need to create a separate !secret entry to achieve this. Obviously this is not a requirement, it is just advice)
  - Patience, do not rush something like this. Imagine all the months of work I have put into this? So taking some extra time to undertake this is not such a bad idea.
  - There are some entities (e.g. input_selects and input_booleans) which might be required, you will be guided through the global setup guide on where and how to do this.

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
  - Popup Card (optional, deprecated though for visual uniformity still the only way to create the same popups everywhere) (https://github.com/thomasloven/lovelace-popup-card)
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

### Copying Files
  - For safe results I suggest restarting Home Assistant at this point.
  - After having installed all the required components and custom-cards it is now time to copy files over, remember that you should have made BACKUPS by now, if you haven't DO IT NOW!!! Past this there is nothing else I can do for you if you fail to do a simple task!

NOTE: Homekit Infused makes heavy use of lovelace_gen, split files and it supports the use of !secrets. Unfortunately to achieve this we have to run lovelace in yaml mode (you can do this by reading up the following part and copy the relevant config from `configuration.yaml`). There is a major downside of running this in YAML mode especially when you are used to using the UI-editor for lovelace cards. In YAML mode the menu that shows RAW Editor, Refresh, Unused Entities and UI editor will become useless (and therefor is hidden in this setup). Now for new users this might sound very daunting and it probably is a little. When you convert to YAML mode your storage mode lovelace config will no longer be used. There is an upside to this, storage mode lovelace and YAML mode lovelace do not store their information in the same file. If you have used storage mode (default HA) and want to try out YAML mode you can easily revert this change by just removing the lines from `configuration.yaml`. So to get the most out of this you will probably want to learn the basics of lovelace. If you know the basics of lovelace and you liked the UI editor I do have some good news. If you have installed the GUI-sandbox-tool in the previous steps then you will get a button that gives you exactly that UI editor you were already used to. The only difference is, is that you can't save cards with the UI editor and you will need to copy the code from the editor into the respective files.
Lovelace_gen is heavily used in this setup and is a requirement to run this at all. Lovelace_gen is what decluttering-card did in the older HKI versions but much more is possible with this. To get the most out of HKI (and if you want to start editing this yourself) You will have to learn lovelace_gen. It isn't really that hard, but it housed more features than to declutter some templates so keep that in mind. It makes global configuration possible, it can do templates (just like decluttering-card could, and config for that is pretty similar), it can make macro's and much more. Basically it brings jinja2 templating to the frontend without the need for an extra card! https://github.com/thomasloven/hass-lovelace_gen. You do not need to know how YAML mode and lovelace_gen works straight away. HKI should work without you knowing how to use them, but I highly recommend you to learn it as it isn't that difficult and will benefit you a lot in creating modifications to this setup.

Lets not dwell any longer and get into the copying part. There are two methods I will describe on how you can do this.

### Method 1 (HKI Structure, recommended, best for people new to HA)
Copy every file and folder to your own directory with the exception of `configuration.yaml` and `customize.yaml` unless you did not do the `customize.yaml` step at the preparation section of this guide. The structure should not be changed unless you know how to fix it yourself. Open a backup of your `configuration.yaml` file now.
Replace your `configuration.yaml` file (not the backup obviously) with the one from HKI and copy all the relevant stuff from your backup file back into this one. (do NOT copy switches, sensors, binary_sensors, lights, camera's, automations, input_booleans, input_selects, alarm_control_panel, device_tracker, script and shell_command configs!!!! I will get to that in a minute). Remember we are still talking about the `configuration.yaml` file!
Only copy real relevant stuff like HTTP config for SSL or your Xiaomi robot config or maybe a calendar config
Copy your own config in the corresponding folders in configuration/ (e.g. configuration/automations). Notice that in `configuration.yaml` they are all called in a different way (e.g. !include_merge_dir and !include_merge_list). This is because automations requires to be listed and groups require to be named.
    If you had this in `configuration.yaml`
    ```
    light:
      - platform: group
        name: Bedroom LEDs
        entities:
          - light.bed_led
          - light.floor_led
    ```
    You should copy your config that you had (without the leading `light:`) into `configuration/light/light.yaml`.
Do this for all the config you had (either in separate files or in configuration.yaml). When creating new files you do not need to care about the name of the file if that specific folder is included in `configuration.yaml` as !include_dir_merge_list or !include_dir_merge_named.
In both cases you can simply create a new file and start creating new groups, automations etc without needing to worry about the filename. This allows for split files in e.g. automations and groups which can make management of those files a bit easier (and most of all easier to find again in the future).
If you have an automations.yaml file you can simply drop this inside the `configuration/automations` folder as there is no file named automations.yaml in Homekit Infused (hm that easy? yeah, that easy!)
After having done this you are done copying (you do not need to touch the ui-lovelace.yaml file and the `lovelace/` folder just yet)

### Method 2 (Your own structure, for advanced users only)
Instead of using the first method you could simply use your existing config and do it the other way around (so instead of copying my entire structure, you will only copy the relevant config into your own files) You will need to copy everything from the files in the `configuration/` folder that are prefixed with `hki_` (e.g. `hki_automations.yaml` or `hki_input_select.yaml`) into your own files. Remember that you might need files that do not exist in your setup yet (like the previously talked about `customize.yaml`). Do this for all the necessary files. Don't forget `configuration.yaml`! Copy all other files to your root folder (don't forget files, but do NOT copy the `configuration/` folder and `configuration.yaml` as we've already copied this stuff!)

I am pretty sure you are already quite some time at this, maybe you should take a break now? XD!

# CONFIGURATION
Configuring Homekit Infused after the initial install is pretty straightforward. Open the files as instructed below and edit them. Editing these files alone will help you get up and running really quickly.
Basically all you would need to configure are these 3 files unless you want some customization to the frontend (obviously). For some things you will need a template sensor or automation but if you have copied the required files you will already have them, and if you use the provided files those sensors will most likely point to the correct groups (so no config would be required for those)
There are several views that can be auto-filled, see configuration below. Not every view will be auto filled and will require manual input from you. Basically all the pages that are not auto-filled can be edited to your own likings. The views that currently work with auto fill are: Lights, Devices, Security (motion/door/window/cams), climate (sensors and thermostat) and Remote. The frontpage will also be ready to use immediately after configuration. Only frontend notifications will require extra editing. By default all buttons will go to their respective views/popups. I will discuss tips/tricks on how to modify my setup in the tips/tricks section of the docs. (they are not here yet and I will post them in the near future.)

### Global Configuration
  - Fill in `customize.yaml` if you haven't done so in the preparation step
  - Fill in the `homekit_infused_groups.yaml` file from the HKI project with your own entities (these are the groups that will auto fill your entities inside lovelace, configuring this is pretty straightforward!)
  - Fill in the `global_config.yaml` file from the HKI project (this is the global and last config of HKI, fill this file with your own data, instructions can be found inside the file)
    This file looks very daunting with all the text, but actually it is only explanation! However it might take some time for you to fill in this file. I suggest to start with changing the frontpage info to your needs and then see if it works. You will need to restart Home Assistant after making changes in `global_config.yaml` so take your time for this!
  - Fill in `notifications.yaml` (this is a file that will need to be entirely edited by yourself, use my file as an example on how to do this, I will never make this automatic so you better start writing :P, you could leave this step for later if you so desire)
  - Congratulations, you have installed and setup Homekit Infused for basic use. For advanced use please refer to the tips & tricks section. Theoretically if you have done everything right the setup should work without too much trouble.

# TIPS & TRICKS
This page will contain tutorials, tips and tricks on how to edit certain views, cards, elements and more for Homekit Infused. Unfortunately this will take time to write and will stay under construction for the time being.
If you want to help, please help me write tutorials on how you have edited Homekit Infused in a way that others might understand. Press on issues on Github and open a request for adding a tutorial. Tutorials that are unreadable to the average user will not be accepted.
I thank all of you in advance for sharing your tips and tricks for Homekit Infused here to not only help me getting better documentation (and less support questions) but also all of the users that would love to share configs.
Sharing a tutorial, trick or tip here with us will give it a better place than on the HA forums as it will fade away into the background because of all the messages. Info will always stand out here and thus easier to find for new and existing users.
Thanks again for sharing your experiences.

# IMPORTANT NOTES
First of all I want to thank you all for your patience and support, it really means a lot to me. Though I do want to ask you to help each other out as well and not spam me constantly with support questions.
Remember I am only a bartender and I am not a programmer, nor do I have the experience or time to know everything XD.
  - I do not guarantee this setup will work for you
  - The setup has only been tested on an iPhone X (though it should not work differently on other smartphones)
  - I am trying to make updates as easy as possible hence all the templates and global config. Though it could still occur that I need to update a file that you have edited. I will create a guide for those specific files if it would ever be needed.
  - Future releases will probably not deviate too much from the current design and will probably only hold bugfixes, component/plugin updates and ofcourse new views and themes!
  - Questions asked without reading the documentation have the chance to not being answered. Read before you need (help)! I will however post video's on YT in the future

# ISSUES
If there are any issues please report them via GitHub. When doing so please be thorough in your explanation as the more details the better.
Saying things like, "I have an issue, my lights view wont show" is not a good issue explanation as I will still be completely clueless as to why it won't show for you. Issues like these will be closed without an answer!
The docs might be incomplete or not completely comprehensible for all. Remember that I am alone in this project, that I am not a programmer and that working on this for so long might get me into forgetting to add something in here. If you find something that is missing or incomplete please notify me so that I can change the documentation.

### Known Issues
  - Sometimes the HA app reloads after going to another tab (seems this is being worked on by the HA team)
  - Sometimes icons will not show the template when using Custom-UI, solution is a refresh
  - HACS doesn't always load after a restart, solution is to restart again (I do not know if this is since the last update of HACS or if something else is causing it)
  - Entities card takes more time to load than others (this seems to me like a card-mod problem as it only does it with entities cards, even with a single line config it would still do this)
  - Sometimes notifications would suddenly stop scrolling, solution is to touch the notification slightly, it will go back to automatic scrolling if you do that. I can't and wont fix this as it is a non-issue

### To Do
  - Fix themes (some themes need tweaking)
  - Add themes
  - Add new views (for example garden/plant view)
  - Rework scenes for use with the latest Home Assistant
  - Computer/Server monitor view
  - Other stuff?!?

# FEATURE REQUESTS
If you think there are features missing or that I should really implement a new feature/view please open an issue on GitHub with the title `FR` or `Feature Request`. In the comment field please state what features you would want to see,
and motivate your answer. Tell me why you think I should add it and what benefits it would have for other users. I will not create personal requests that would only suit a single user as that would be madness!

### Current Feature Requests
  - Afvalbeheer Card (this was actually in 0.13.3 but removed for the 1.0a version as the widgets page has been removed, it will return soon)
  - P2000 (requested some months ago, though not sure if it will make the cut)
  - Flight Information (currently there are no known components/addons that can do this, I will add this if this ever comes)
  - News (seems a bit too heavy for Home Assistant to have this running all the time, but I will look into it)

# THANKS
I wanted to thank everyone for supporting me, watching and subscribing to my channels, donating, downloading etc.
All of you really, thank you. Here are a few names I want to specially thank!
  - @ciotlosm
  - @thomasloven
  - @balloob
  - @gluwc
  - @maykar
  - @robbiet480
  - @ljmerza
  - @iantrich
  - @kalkih
  - @bramkragten
  - @peternijssen
  - @eelcohn
  - @hunterjm
  - @jc2k
  - @kuuji
  - @romrider
  - @roflcoopter
  - @Piotrmachowski
  - @xMrVizzy
  - @MarsWarrior
  - @Dwains
  - @Sander_Abbink
  - @FranckNijhof
  - @Dbuit
  - @martinvdm
  - @everyone I forgot to mention

I am really sorry, I have tried to get you all. But also a very big thank you to all of the ones not mentioned here. And ofcourse the Home Assistant community which helped me out a lot.

# QUESTIONS?

Please ask any question you have on the Home Assistant community forums, follow the link to go to my thread [HA Community Forum](https://community.home-assistant.io/t/homekit-infused-hki-v0-13-3-updated-07-01-2020-hki-preview-video-1-0a-online-now/117086)


Thank you and I hope you've enjoyed this release (please leave a comment on the forum/yt or privately so I can estimate what people think of the project)
Thanks once again!
