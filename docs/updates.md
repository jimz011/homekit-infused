# Homekit Infused 4.x.x

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Custom Views](custom_views.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

# Updates
## Procedure from v4.x.x to newer
To update Homekit Infused to a newer version all you need to do is download the latest release and replace the following 2 folders:
- /hki-base/
- /packages/

Be sure to read any breaking changes.

## Procedure from v3.x.x to v4.0.0
*Warning: the entire HKI structure has changed and thus will require some user input. Note that anything that was configured in the `/homekit-infused/user/config/` folder MUST be configured again in v4 since many of these options have been merged and/or no longer needed.

To update Homekit Infused to version 4.0.0 you must do the following.
Make a copy of the following folder and put it somewhere safe:
- /homekit-infused/user/

Delete the following folders:
- /homekit-infused/
- /packages/
- /themes/

Delete the following entry from configuration.yaml
```
lovelace:
    mode: storage
```
if you have multiple dashboards then only remove
```
    mode: storage
```

Copy the following folders from the repo:
- /hki-base/
- /hki-user/

Migrate user files:
- copy back your own templates folder (if you had one) to `/hki-user/templates/`
- copy back your own includes folder (if you had one) to `/hki-user/includes/`
- copy back `device_counters.yaml` to `/hki-user/`
- copy back `notifications.yaml` to `/hki-user/`

Before we continue we need to change the path in notifications.yaml, do a search/replace for `base/` and replace it with `hki-base/`.

Before adding back the user folders create a view for them first as documented in the view creation section and set `custom_cards: true` or `custom_cards: advanced`.
```
# example view_config
living_room:
  subtitle: My livingroom
  icon: mdi:sofa
  custom_cards: true
```
Next make sure that the foldername matches the key (in this case `living_room:`). So in your user folder you should have `/hki-user/views/living_room/`.

*NOTE: The paths for existing legacy addons have also been changed and you should change them accordingly. This can be difficult so I will suggest adding back your folders one by one. Add a single view with `custom_cards: true` add the folder (and/or rename it to the corresponding key) and check if it works. You can do a quick full folder search/replace and replace the following two words:
- `base/` to `hki-base/`
- `user/` to `hki-user/`

I will once again stress out that you should do this slowly and with care or troubleshooting will be a nightmare!

You can remove ALL the folders you do not intend to use anymore. You can also delete the folders where `custom_cards:` is not defined and want to use auto-filling instead. This will make your folder look a whole lot cleaner.

You can see examples over [here](https://github.com/jimz011/PLACEHOLDER)

## Versions (these are always up to date and are used as sensors within Home Assistant)
[Current HKI Version](version.html)

[Latest Compatible HA Version](version_compatible.html)
