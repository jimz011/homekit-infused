# Homekit Infused

## Contents
- [About](index.md)
- [Intro](intro.md)
- [Preparation](preparation.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Updates and Addons](updates.md)
- [Feature Requests](requests.md)
- [Issues & Questions](issues.md)
- [Thanks](thanks.md)

# CONFIGURATION
Configuring Homekit Infused after the initial install is really easy. It only requires you to do at least a single step and a second step for clearing up details.

#### Global Configuration
- Fill in `customize.yaml` if you haven't done so in the preparation step
- Fill in the `rooms_and_groups.yaml` file that is located in your `/user_content/` folder. Fill in AS MUCH as you can! It will fill various views automatically according to these groups! Do NOT remove any groups! If you don't have entities for a specific group, only remove the entities in that group (including the `-`) and keep the group as it is.
- Congratulations, you have installed and setup Homekit Infused for basic use. You could open the `extra_settings.yaml` file to setup the use of deep_press if you desire (this file used to be the global_settings for older versions of HKI). There are a few other settings you can find in that file. Note that changes to this file require a restart.

#### Configuration
Configuring HKI is super easy. When you first start HKI you will be greeted with a little onboarding process which will teach you the basics of using Homekit Infused. After having walked through the onboarding process you can setup anything you like using either edit mode or the HKI settings which can be found in the menu. ALL config other than notifications, user cards/content and those groups you have just setup will be done through the UI. You don't need to use YAML elsewhere. All names, icons, widgets, layouts etc can be setup from within the UI and changes will be instant. No restarts/refreshes required.

#### WARNING
Everything within the `extra_settings.yaml` file is commented, you can simply uncomment a line to change its properties and use it in Homekit Infused. Note that there are some lines that come uncommented by default, do NOT remove or comment them EVER! This will certainly break the setup and you will find yourself with a non-working lovelace interface. You can however edit any of the lines that are commented. I will advise you that if you have used global_config in the past with HKI that you hardcode them as cards in the new user_content areas of the views! (you can still copy/paste lovelace_gen config inside of this file if you still need it, you can no longer have separate files so put them all in this file)

#### Notifications
This step can be skipped for now if you want to.
Notifications is something I can't template for you, this would require me to know exactly how many devices you have and what their entity names are. The file included is merely an example of how I have it set up and how you could set it up yourself. The first card in the list must have all the entities that come beneath it included in the list of states. This message will tell you that you have no notifications. This will only work if you have all the entities you define below that card inside of that list! Study my example carefully and you will be able to reproduce this pretty easy. All you would need to change are the entities and messages, you don't need to touch anything else. The notifications file can be found in the /user_content/ folder.

#### What should work now?
If all went well you should now have a working Homekit Infused setup with at least the following views that are working and auto-filled:
- climate
- lights
- devices
- security
- frontpage
- menu
- weather
- themes
- automations
- location
- cleaning
- waze traffic info
- battery
- scenes (you must add scenes to customize.yaml if you want icons, remember to choose short names)
- about (shows version number and project info, update this with each update)

Popups should work out of the box for the following views
- light
- device
- security
- climate
- thermostat

#### Empty Views
Some views are empty and only contains a custom user area, this is because I haven't made something nice for those views yet. If you have something nice don't hesitate to share your ideas and it might get merged into the next release.

#### Congratulations
Congratz, I hope you'll have a great ton of fun now!
