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

# Updates and Addons
## Updates
When you don't edit any of the views, includes and templates you can easily update this install! All you would need to do is copy my new files over your old ones.

## Addons
This project will get addons in the form of new views and/or widgets.
If you like to create addons for this project and want to share them, please learn how to use the Config Template Card and/or how to template button-card for use with HKI (you can find examples when inspecting my views, just don't edit them ok?).

[Current Version](version.html)

# Note for HKI 1.1 users
You can't update straight away as in v2.0.0 and above can. The easiest way to update would be to delete the lovelace folder (mind you that you might want to copy any notifications or custom views you have setup up). Delete the Homekit Infused folder (copy your hki_groups file first). Now reinstall HKI 2.0.0. Open the rooms_and_groups file and copy back the groups you have setup in the hki_groups file (note that rooms have changed names, so compare carefully and copy with care). Global config must now be done through the interface so you can't back that up, I'm sorry about that but this is no longer an issue with v2.0.0 and above. Trust me it takes me real hours to create something like this, you sure as hell could lose a bit of time setting it up right! Lastly you can copy the notifications to the `user_content` folder, you must rename `../templates/notification_template.yaml` to `../lovelace/templates/notification_template.yaml` for each notification.
