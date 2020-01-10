# Homekit Infused Installation and Configuration Manual

## Contents
- Intro
- Preparation
- Installation
- Configuration
- Tips & Tricks
- Important Notes
- Issues
- Feature Requests
- Special Thanks
- Questions?

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

## Changes since HKI 0.13.3:
  - Completely rewritten from the ground up
  - Removed decluttering-card
  - Added a neat header
  - New notification window
  - New popup cards system-wide which include brightness, color and switch popups
  - New thermostat view and cards
  - New design for several views
  - Footer
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

Preparation Checklist:
  - Time, I estimate the project to be installed within a few hours (I might be waaay off but I wouldn't know as I haven't installed it this way, It might be done in a relatively short time I am sure but that really depends on your current state with HA and ofc your experience with HA/Lovelace)
  - Install Home Assistant or create a backup of your current setup.
  - Add all your known devices to Home Assistant (if integrations are available the prefered way would be to use that instead of putting it in manually. If you use tasmota, please use autodiscovery instead of hardcoding each device in your configuration, please do it if you don't use it already!)
  - The prefered way would be to do a clean install, however I can imagine you don't want to do this. Make sure that if you have older versions of Home Assistant that you have the correct components loaded. Most components are loaded within the `default_config:` however older setups might lack this line. Setting up location is also preferred to be done through the UI instead of hardcoding.
  - Create person entities in the UI go to configuration>persons and create all the persons in your house. Add the device_trackers you have to the person entities. Do not use device_trackers in lovelace unless you really need to.
  - Patience, do not rush something like this. Imagine all the months of work I have put into this? So taking some extra time to undertake this is not such a bad idea.
  - There are some entities which might be required, you will be guided through the global setup guide on where and how to do this.

# INSTALLATION
Installing HKI can be quite an undertaking as you will need a lot of custom-cards and custom-components. I will try to guide you through on how to go at this.
  - First create github account if you do not already have one
  - Then install HACS (https://github.com/hacs/integration) Please read the documentation on how to do this, I will not make docs on things that are already perfectly documented.
  - After HACS is installed and configured you will need to install a list of custom-cards. There are two ways to do this, either the proper way or the quick and dirty way.
    The proper way would be to install each and every custom component and card manually through HACS. You can do this by going to the sidebar>HACS (it could also be called community).
    Search for each of the addons listed below and install them one by one.
    The quick and dirty way would be copying the entire www/community folder from the HKI project to your own.
    There are pro's and cons for both methods. The proper way will allow you to update the addons through HACS and be notified about them, however it might break the setup if I haven't fixed the code for breaking changes.
    The quick and dirty way allows for a 100% working one with the current downloaded project. However HACS won't know you have these files and you are not able to update them through HACS.
    If you are lazy for whatever reason, you could use the quick and dirty method and search for the addons in HACS later on (it will simply overwrite the old card and it would give the ability to update again)
    Your choice. Depending on the choice this can take from 2 minutes to a whopping 30 minutes to install. It really depends on a lot of factors and chosen method on how long this might take. Remember I talked about not rushing it!
    
    Find the following addons on HACS (you do not need to add them to the resources, I have already done this for you!)
    In the past I have pasted the repository links for every addon. Since they can be easily found through HACS I will only link to repo's that can't be found on HACS.
    If you need to read documentation on any of the cards please open your sidebar in HA go to HACS and choose the installed plugin. Press repository to go to their respective pages.

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
    
      Optional Components:
        - Afvalbeheer (for Dutch waste collection)
        - Plex Recently Added (if you use plex you might want this, required if you want to use the upcoming media card)
        - Sonarr and Radarr upcoming media (required if you want to use the upcoming media card)

      Manual Components Import: (This works the same as with plugins, however some components might not get added through HACS, if it doesn't just copy my component into your custom_components folder)
      Add all the repositories (where applicable) as an 'integration', choose it from the dropdown menu
        - Imap (optional, only required if using outlook/hotmail/live email addresses, copy this from my repo into your folder)
        - Apple TV MRP (optional, if you have an Apple TV you might want this until the core version is fixed!) (https://github.com/chamberlain2007/apple_tv_mrp)
        - RDW (optional, Dutch Car Registration Sensor, copy this from my repo into your folder)
        - Xbox One (optional, if you own an Xbox you can use this component to control it, visit the following link on how to install this on either hassio or standard ha) (https://github.com/hunterjm/hassio-addons/tree/master/xboxone)
        - Custom-UI (optional, gives you the ability to template icons/names/etc in customize.yaml, editing this file will be discussed further down the guide. This is not required but if you want system-wide dynamic icons you will want this) (https://github.com/andrey-git/home-assistant-custom-ui)
        - Customizer (optional, required when using Custom-UI, when installing Custom-UI you will need this component as well)

  - For safe results I suggest restarting Home Assistant at this point.
  - After having installed all the required components and custom-cards it is now time to copy files over, remember that you should have made BACKUPS by now, if you haven't DO IT NOW!!! Past this there is nothing else I can do for you if you fail to do a simple task!
    Copy every file and folder to your own directory with the exception of `configuration.yaml`. The structure should not be changed unless you know how to fix it yourself. Open a backup of your `configuration.yaml` file now.
    Replace your `configuration.yaml` file (not the backup obviously) with the one from HKI and copy all the relevant stuff from your backup file back into this one. (do NOT copy switches, sensors, binary_sensors, lights, camera's, automations, input_booleans, input_selects, alarm_control_panel, device_tracker, script and shell_command configs!!!! I will get to that in a minute).
    Only copy real relevant stuff like HTTP config for SSL or your Xiaomi robot config or maybe a calendar config? Find examples in the provided `configuration.yaml` file.
    Copy your own config in the corresponding folders in configuration/ (e.g. configuration/automations). Notice that in `configuration.yaml` they are all called in a different way. This is because automations requires to be listed and groups require to be named.
    Copy the relevant setup that you have (e.g. switches, lights, camera's) to the right folders, look in the examples on how to indent your config. If you have an automations.yaml file you can simply drop this inside the configuration/automations folder as there is no file named automations.yaml (hm that easy? yeah, that easy!)
    Do this for all the config you had (either in separate files or in configuration.yaml). Note that when creating new files you do not need to care about the name of the file if the domain is included in either of these ways in `configuration.yaml`. Either !include_dir_merge_list or !include_dir_merge_named.
    In both cases you can simply create a new file and start creating new groups, automations etc without needing to worry about the filename.

I am pretty sure you are already quite some time at this, maybe you should take a break now? XD!

# CONFIGURATION
Configuring Homekit Infused after the initial install is pretty straightforward. Open the files as instructed below and edit them. Editing these files alone will help you get up and running really quickly.
Basically all you would need to configure are these 3 files unless you want some customization to the frontend (obviously). For some things you will need a template sensor or automation but if you have copied the required files you will already have them.
Some files might need little editing for localization but I will guide you through that process.

  - Fill in the `customize.yaml` file from the HKI project with your own entities (instructions can be found inside the `customize.yaml` file as well as examples)
  - Fill in the `homekit_infused_groups.yaml` file from the HKI project with your own entities (these are the groups that will auto fill your entities inside lovelace, configuring this is pretty straightforward!)
  - Fill in the `global_config.yaml` file from the HKI project (this is the global and last config of HKI, fill this file with your own data, instructions can be found inside the file)
    Warning! this file is pretty lengthy, I suggest to start with changing the frontpage info to your needs and then see if it works. You will need to restart Home Assistant after making changes in `global_config.yaml` so take your time for this!
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

Known Issues:
  - Sometimes the HA app reloads after going to another tab
  - Sometimes the HA app needs a refresh (pull down to refresh)
  - Sometimes icons will not show the template when using Custom-UI, solution is a refresh
  - HACS doesn't always load after a restart, solution is to restart again (I do not know if this is since the last update of HACS or if something else is causing it)
  - Entities card takes more time to load than others (this seems to me like a card-mod problem as it only does it with entities cards, even with a single line config it would still do this)
  - Sometimes notifications would suddenly stop scrolling, solution is to touch the notification slightly, it will go back to automatic scrolling if you do that

To Do:
  - Fix themes (some themes need tweaking)
  - Add themes
  - Add new views (for example garden/plant view)
  - Rework scenes for use with the latest Home Assistant
  - Computer/Server monitor view

# FEATURE REQUESTS
If you think there are features missing or that I should really implement a new feature/view please open an issue on GitHub with the title `FR` or `Feature Request`. In the comment field please state what features you would want to see,
and motivate your answer. Tell me why you think I should add it and what benefits it would have for other users. I will not create personal requests that would only suit a single user as that would be madness!

Current Feature Requests:
  - Afvalbeheer Card (this was actually in 0.13.3 but removed for the 1.0a version as the widgets page has been removed, it will return soon)
  - P2000 (requested some months ago, though not sure if it will make the cut)
  - Flight Information (currently there are no known components/addons that can do this, I will add this if this ever comes)
  - News (seems a bit too heavy for Home Assistant to have this running all the time, but I will look into it)

# SPECIAL THANKS
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
  - @3_14 / @Piotrmachowski
  - @xMrVizzy
  - @MarsWarrior
  - @Dwains
  - @Sander_Abbink
  - @FranckNijhof
  - @Dbuit
  - @everyone I forgot to mention

I am really sorry, I have tried to get you all. But also a very big thank you to all of the ones not mentioned here. And ofcourse the Home Assistant community which helped me out a lot.

# QUESTIONS?

Please ask any question you have on the Home Assistant community forums, follow the link to go to my thread [HA Community Forum](https://community.home-assistant.io/t/homekit-inspired-lovelace-by-jimzz011-may-2019-ha-0-93-x-0-94-x-compatible/)


Thank you and I hope you've enjoyed this release (please leave a comment on the forum/yt or privately so I can estimate what people think of the project)
Thanks once again!
