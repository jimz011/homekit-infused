# Homekit Infused 5

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

## Updates
### How to update HKI 5 to a newer version?
To update Homekit Infused to a newer version all you need to do is download the latest release and replace the following 2 folders:
- /hki-base/
- /packages/

Be sure to read any breaking changes.

### Procedure upgrading from HKI 4 (last version v2022.02.0)
To put it simply.... There is none! There has been too many integral changes that it would take as much time explaining how to convert your setup as writing the entire project.

It is not all that bad though, HKI 4 users will find that many things are pretty much the same and only slightly different. In most cases you can simply re-use the config you already had with some adjustments. Nevertheless you should NOT copy over the entire setup that you had, go slowly and do it view by view.

There are two very notable changes though that I will mention here:
- notifications have had their template name changed.
- `/hki-user/views` is no longer the default folder for custom_cards, the folder has been renamed to `custom_legacy`! Why this change has been made can be found [here](splitting-the-config.md).

Luckily you don't have to redo all your notifications, just make sure you change all the lines that contain `'../hki-base/templates/header/notification-template.yaml'` to `'../hki-base/templates/header/subtitle-notification-template.yaml'`.

## Versions (these are always up to date and are used as sensors within Home Assistant)
[Current HKI Version](version.html)

[Latest Compatible HA Version](version_compatible.html)
