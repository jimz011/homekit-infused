This is the Release Candidate of HKI 2.0.0

Changes:
- HKI is now fully compatible with HA 0.110.x
- Revised French, Romanian, Italian, Hebrew and Spanish language (this adds vacuum and cover translations, English and Dutch are already available, more languages will follow)
- Added Polish language (thanks to @donhimol)
- Fixed bug where changing the language would not reset the attached input_boolean after an error
- Fixed bug where changing the icon set would not reset the attached input_boolean after an error
- Fixed bug where the header and/or header subtitle could not be hidden.
- Added missing header boolean for the covers view.
- Added cover switch popup
- Fans on the climate view now show a spinning icon when turned on and now shows a blue color
- Media Player widget is now an option (fill in the media_players in the room config), this is currently limited to simple media players, I will add functionality to this in upcoming versions.
- A Google Home widget is now added to the media player view
- Custom Header has been fixed (please update it via HACS and clear cache). You can now set HKI to be your main dashboard again. As a result the workaround has been removed!
- Storage mode is now included, the default dashboard and you can create your own dashboards with the Home Assistant interface just like you would without HKI. To have HKI as your main dashboard go to the sidebar and select the preferred dashboard, which is user based.
- New users that have created an entire dashboard with the lovelace UI editor will be pleased to know that installing HKI will not overwrite anything, nor will you lose access to that dashboard.
- As a result of the above resources are no longer included in the HKI package, you will have to install them yourself through HACS. After installing an addon it will ask you to add the resources automatically. If you have already installed the addons all you would need to do is add the resources (I suggest you keep the current resource file as a backup which can be found in `dashboards/resources` as you can quickly copy/paste it into the UI that way). To add resources to Home Assistant go to the Home Assistant Configuration menu and select `Lovelace Dashboards`. There will then be a tab that says `Resources`.
- Your own resources can now be used and will not be overwritten by HKI updates.
- Fixed an issue where badges on buttons would not update after a change.
- The Room Config settings will now only show config for the amount of rooms selected per floor (this to avoid rooms not being loaded at startup, please check the room config and add/change your settings if needed)
- You can now select the amount of floors shown in the lights and devices view. Invoke edit mode to change how it looks or hide it entirely.
- All groups in HKI Settings > Room Config are now working. The views will no longer get its entities from device_counters.yaml. This file is still needed for counting the number of devices that are 'on' so you won't need to make any changes here. This will also pave the way for a room based view which is highly requested. Make sure you fill in all the blanks in room config and add your cameras in the new camera config view. Remember, your config will no longer come from the extra_settings.yaml file and you MUST fill in the HKI Settings > Room Config for the views to work properly.
- HKI Settings has 2 new options: Google Home and Cameras
- Border radius has returned to the theme settings view and can now be set in the ui again. You can safely remove `user_content/theme_settings/border-radius.yaml`. To use the variable border-radius inside of your custom cards use the following style variable: `border-radius: {{ states('input_select.border_radius_selector') }};
- Fixed missing custom buttons (the settings would say there are 8 buttons to configure, but 3 were missing)
- Bugfixes and small enhancements to the code. Cleaned up some of the unused includes.


HOW TO UPDATE?
Remove the following folders and files:
```
- dashboards
- packages
- ui-lovelace.yaml
- homekit-infused.yaml
- homekit-infused-settings.yaml
- python_scripts (unless you need this folder yourself, this is no longer needed)
- themes
```

Copy the following folders and files to the root of your HA setup:
```
- dashboards
- packages
- themes
- homekit-infused.yaml
- homekit-infused-settings.yaml
```

Change the dashboard setup in your `configuration.yaml` to the following:
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
You might be wondering where the resources have gone, they will no longer be included in any of the future versions. Resources now have to be set within the UI (Sidebar > Lovelace Dashboards > Resources), this change was done to make storage mode dashboards available next to yaml mode dashboards. This makes it possible for new users to keep their already created dashboards and existing users can try out the official UI editor if they haven't done so in the past. It is now also possible to add your own custom resources. 

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
If you have missed it in previous installs please copy the following 4 folders from my repo (do NOT get these from HACS). If you did get them from HACS, then remove the following folders and get them from my repo instead.
```
- /www/community/switch-popup-card
- /www/community/cover-popup-card
- /www/community/light-popup-card
- /www/community/thermostat-popup-card
```

You will have to set a default dashboard if you want HKI to be the default dashboard when opening Home Assistant. This is on a per user basis and you will have to do this in the Sidebar > Profile > Select default Dashboard. You can use the `overview` dashboard if you want to try and build something yourself with the original HA UI editor just like when you (probably) first started using lovelace.

Enjoy!

