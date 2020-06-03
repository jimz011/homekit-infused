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

## ISSUES
If there are any issues please report them via GitHub. When doing so please be thorough in your explanation as the more details the better. Saying things like, "I have an issue, my lights view wont show" is not a good issue explanation as I will still be completely clueless as to why it won't show for you. Issues like these will be closed without an answer!
You could also quickly open a bug report by going inside of the HKI Menu > About > Bug Report.

The docs might be incomplete or not completely comprehensible for all. Remember that I am alone in this project, that I am not a programmer and that working on this for so long might get me into forgetting to add something in here. If you find something that is missing or incomplete please notify me so that I can change the documentation.

#### Known Issues
  - Sometimes notifications would suddenly stop scrolling, solution is to touch the notification slightly, it will go back to automatic scrolling if you do that. I can't and wont fix this as it is a non-issue.
  - Lovelace can load slowly when you save it or do a lovelace refresh. The setup is pretty large and loading can take quite some time. You should only ever face this problem when editing in YAML. Refreshing the browser will not result in slow loading times unless you have made changes in YAML (not in the interface, those changes are instant).
  - HKI and HKI Settings are both different dashboards, this is done to reduce initial loading times and also allows you to add the settings to the sidebar. When coming back from the settings to the frontpage, it might need to do a quick reload, it will do this automatically and is not a bug. It is due to changing the dashboards.

## Troubleshooting
##### Appdaemon4
  - If your setup is full of `unknown` it is possible your appdaemon4 isn't set up right. Make sure you have downloaded appdaemon4 and make sure you have write access (this should not be a problem on Home Assistant installs, previously known as hass.io). If you are running appdaemon4 in docker, make sure your appdaemon4 container has access to the Home Assistant container. If you need to change paths you can change it in the following file `/appdaemon/apps/apps.yaml` if you have a more extravagant setup you might also need to change the paths in the following file `/packages/configuration.yaml last two lines`. This is however a very rare case and in most cases changing the path inside of the first file should do the trick. This file should be preconfigured for Home Assistant (previously Hass.io) installs and should work out of the box for those users.
##### My (binary) sensors are not showing up, even though I have entered them inside of the room config
If this happens, it means your devices lack a device_class. You can easily add a device_class by adding it to your entities in `customize.yaml` (you have created this file in the preparation part of the installation). To add a device_class to your devices you can simply add the following line `device_class: CLASS` to your `customize.yaml` entities.
Example:
```
sensor.living_th_sonoff_217541:
  friendly_name: Living Room Temperature
  device_class: temperature
```
The following list are device_classes used for each entity. You should only need this if your entity does not have a device_class (this is brand/type dependent and unfortunately I have no control over this).
```
- temperature
- humidity
- pressure
- opening (for doors)
- window
```
I might use device_class to separate devices within groups more often in the future so this might be useful to know.


#### QUESTIONS?

Please ask any question you have on the Home Assistant community forums, follow the link to go to my thread [HA Community Forum](https://community.home-assistant.io/t/homekit-infused-hki-v0-13-3-updated-07-01-2020-hki-preview-video-1-0a-online-now/117086)

## [Click here](https://discord.gg/WZvK4Cb) to join our Discord Server which I maintain with @Dwains. With over 500+ members from noobs to pro's. You'll be sure to get your answers fast here!
Thank you and I hope you've enjoyed this release (please leave a comment on the forum/yt or privately so I can estimate what people think of the project)
Thanks once again!
