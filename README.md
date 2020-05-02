This is beta 8 of HKI v2.0.0

A little longer than you are used of me. Unfortunately unforseen things have been happening in my life lately, with the death of one of my family members and the ongoing worldwide crisis (in other words, a BIG chance to lose our jobs for some of us) I did not really felt compelled to work on Home Assistant a lot and I simply needed a break. But I am back with a 'small' update for you today. Enjoy!

HKI Beta 8 is now open for anyone to download: visit https://github.com/jimz011/homekit-infused for documentation and download.

Changes:
- HKI is now compatible with HA 0.107.x, 0.108.x and 0.109.x!
- The settings and the frontend now have their own dashboards (unfortunately because of the way resources are loaded I had to create a workaround which is a bit annoying, but unfortunately for now the only way to make custom-header work properly again with Home Assistant v 0.107.x and up. I will try to address this in the future, however it might take a long time before I find out what the exact problem is).
- Removed all markdown cards in favor of button-cards (this should improve view loading)
- Fixed swipe-card notifications looking weird
- Fixed code for use with the latest version of button-card
- Fixed bugs where lovelace would reach it's max limit and force a reload (at least I think :P)
- Fixed issue within the HA Settings view where it would not fire the reload automations button 
- Added bar-card to the resources (you can install this with HACS if you need this). This is currently not a requirement, however it will be used in the future as well as it is used in a great HKI addon created by @noodlemctwoodle (https://github.com/noodlemctwoodle/homeassistant)
- Buttons in the HA Settings view will now ask for confirmation
- Alarm Keypad removed for a simpler solution, you can set the alarm up in the interface (you must have a manual alarm set up for this to work)
- The weather view is now in a vertical-stack making it uniform from the rest of the theme (this is only noticable on tablets and desktop browsers)
- Fixed laundry widgets, they now shop up properly
- Split up laundry widget (you can now show/hide the pictures individually instead of having either all 3 pictures or none enabled)
- Added Hebrew language (Thanks to @avi)
- Added Norsk language (Thanks to @wayller)
- Added German language (Thanks to @manzn)
- Added Romanian language (Thanks to @sergiu)
- Added alternative Spanish language (Thanks to @sergiu). Please give me feedback on which Spanish version you use and if I should keep both in the setup!
- Split up Name and Notifications font (you can now set the font size of the frontpage notifications separately)
- Added new Font options (you can now set a font weight for names, states, labels, badges and notifications. This can be useful in languages like Spanish where the second word is more important). This change will mess with your fonts, press the reset fonts button in the Fonts Config to reset it to default!
- Removed most icon and language input_text entities (this removes around 800 entities! Note that the endresult will be around the 400/500 entities removed as many have been added to accompany the new rooms and vacuum config)
- Languages are now handled through scripts and appdaemon thanks to @hassan (please read the update guide below)
- Icons are now handled through scripts and appdaemon thanks to @hassan (please read the update guide below)
- More rooms are now available (5 basement level rooms, 10 ground floor rooms, 10 first floor rooms, 5 second floor rooms and 5 third floor rooms)
- Rooms have to be setup in the UI now (you must renew your config on the rooms and do this in the UI)
- Rooms in the lights and devices view can now be shown/hidden through the Rooms Config (you can no longer hide/show these rooms with the edit mode, only adding a lock can still be done through the edit mode)
- Added partial RTL options (this is ideal for languages that read from Right to Left, the header will be added in the future). To enable this, enable it in the UI and uncomment the `rtl` line in `user_content/extra_settings.yaml`.
- Border-radius and box-shadow options have been removed from the theme options, they can now be set within the user_content/themes/ folder (this is done to improve frontend performance)
- Added a vacuum control panel (edit your view style with edit mode). To set this up go to HKI Settings > Vacuum Config (you MUST also set some extra variable within the extra_settings.yaml file)
- Removed the option to set 3 columns on the frontpage buttons widget (this improves loading times and decreases the amount of code on the frontpage, if you did use three columns well, sorry but it's a goner)
- Removed option to set the column size on certain views within the UI, this can still be done but must now be done in the `extra_settings.yaml` file. (once again this is to lower the amount of code and improve performance).
- Updated all plugins (only relevant if you did not install the plugins manually through HACS)
- Changed style of all remaining markdown cards (to improve performance)
- Lights and Devices views now have 5 floors available as opposed to the previous 3
- Added Appdaemon4 (you must install this if you want b8 to work, read update guide below)
- Hold actions can now also be invoked by a double tap on most buttons, e.g. when double tapping on a light it will open the slider popup (this makes it a lot easier to use on devices without 3D touch and more specifically Android devices)
- Removed haptics from navigation buttons (this was requested). Reason? It is annoying on Android, whereas you barely notice it on iOS. Since I have an Android phone now I can see it is quite annoying.
- Added widgets to the calendar view, it can now show the house calendar and a birthday calendar (set it up in the UI as usual). House calendar has been renamed to family calendar. You must set this up again if you already did in earlier beta's.
- Onboarding simplified to some help text, onboarding is still needed to fill in defaults (which is done by starting the onboarding). The initial process now only asks for icon sets and language. This is to lighten the onboarding process code as onboarding is only ever needed when installing for the first time.
- Updated all addons/plugins to the latest available versions (if you don't use HACS, download the updated resources from my repo `/www/community/`, else update them through HACS)
- The HKI repo now has a direct download link on the homepage as opposed to the more 'hidden' link of previous betas.
- Bugfixes

How to update?
Remember that you can only update from any version of 2.0.x. Older versions will not be updatable.

Update in the following order:
- Make a backup of your config! DON'T FORGET THIS!!!!
- Add the following lines to your configuration.yaml and add replace the existing code:
```
lovelace:
  mode: yaml
  resources: 
    !include_dir_merge_list dashboards/resources/
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
- Update Home Assistant to the latest version! MAKE SURE you have checked all the breaking changes on the update part. I can not be held responsible for you not reading breaking changes. If you are not affected by any of these changes you can proceed to the next step. If not, fix it first. To make sure lovelace is not the culprit here you could simply comment the views line in `ui-lovelace.yaml`!
- Install Appdaemon4 (if you use Homeassistant, previously Hass.io you can simply install this in the supervisor tab). Make sure you connect appdaemon to Home Assistant after you've installed it. (if you use hass.io you will only need to start the addon as config is already done for you!). If you use Home Assistant core please read up on how to install appdaemon4 here: https://appdaemon.readthedocs.io/en/stable/ (I have NOT tried this as I use Home Assistant aka Hass.io).
- Remove the following folders from your HA setup: `packages`, `lovelace`.
- Copy and paste/overwrite the following files/folders: `python_scripts`, `themes`, `packages`, `dashboards`, `user_content/theme_settings/`, `appdaemon/apps/` and the files `ui-lovelace.yaml`, `hki-settings.yaml`, `homekit-infused.yaml`. (If you already use Appdaemon, please copy the file text_states_load.py to you /appdaemon/apps/ folder and copy the corresponding apps from apps.yaml into your own apps.yaml file)
- Copy the `user_content/extra_settings.yaml` file to your `user_content` folder. WARNING: This will overwrite your existing config of that specific file. If you did make changes to this file you will have to set them again. Alternatively you could copy the contents of the new file to your existing file.
- If you did not make any changes to the standard notifications file and other user_content you can simply copy over the entire folder and overwrite the old files. If you did make use of the user_content and IF you use any of the included templates you MUST change the path to those templates in each file. The old path will most likely look like `../lovelace/templates...` or `../lovelace/includes...`. Change the word `lovelace` to `dashboards` in EVERY file within your user_content folder. This folder must have the correct paths EVERYWHERE, it might take a while for you to adjust this. You MUST do this otherwise lovelace will fail to load the interface! Check all the files in your `user_content` folder and it's subfolders to make sure this gets addressed! I will warn you again that it will NOT work if you don't set it right!!!
- Floors and Rooms can no longer be set in YAML (this is experimental as I am working on something better), please set them in HKI Settings > Room Config. Your old config will no longer work and this MUST be set within the UI!
- *Optional*: Copy the `user_content/vacuum_calibration.yaml` file to your own `user_content` folder. You will only need this if you want to use the live vacuum map widget.
- *Optional*: Cleanup entities, this release has over a 1000 less entities than beta 7 had, however Home Assistant will remember the last state of all these entities. Because it still loads all these entities you might find a slowdown in startup and when loading the database. Unfortunately there is no easy way to clean all the now 'unavailable' entities that you got throughout the beta's. To clean the entities you MUST open configuration > entities (sidebar) on a desktop (will probably not load on a phone). You must then wait a few minutes as loading takes a while and then remove ALL unavailable entities one by one (you can sort them). Experienced users could also do this faster by editing the `.storage/core.entity_registry` file and remove all the related config (always make a backup of that file first!).
You could also upgrade to HA 0.108.x as it speeds up the internal database by a massive margin. It will make opening the entities page in the UI MUCH faster, and a faster UI means faster deletion :P!

That is it for this beta, I know it doesn't sound like much as it doesn't really add many new features, but it should improve performance by quite a bit. I will still NOT recommend to install this on a rpi!
If you made a feature request and it isn't in this beta? It might come in the next beta! If there are things you think I have forgotten or you think I should change or add please open an Issue or a Feature Request. Asking me personally or on one of my threads will not guarantee me looking at your problem. There are a lot of people that feel the need to address me personally and I will urge everyone that has questions to ask them in the homekit_infused channels on either the forums or discord. Asking in public benefits everyone as I will also answer your question publicly!

Thanks again and enjoy beta8!

Jimz011

