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

# CONFIGURATION
Configuring HKI is super easy. When you first start HKI you will be greeted with a little onboarding process which will teach you the basics of using Homekit Infused. After having walked through the onboarding process you can setup anything you like using either edit mode or the HKI settings which can be found in the menu, do not skip the initial onboarding as it will set a bunch of defaults which are required for this setup to run smoothly. After the onboarding process you can go to HKI Menu > HKI Settings and set up each category on your own. Most of the settings are pretty self explanatory and shouldn't be too hard to understand. 

#### NOTE
A few settings can unfortunately not be done through the UI. Advanced templating is only available in YAML for example. You can find the settings that can't be set in the UI in the following file `/user_content/extra_settings.yaml`. It doesn't have much options, but I will suggest you to open it at least once to see what can be setup in there, you will probably only open it once or twice as those settings are rarely touched.

Another setting that can't be done through the UI is notifications on the frontpage. Though creating notifications is very easy, just check out the `/user_content/notifications.yaml` for great examples, you can use that file to create notifications or edit the predefined ones.

Last thing that can't be configured through the UI is custom user content. You can easily add your own cards to HKI, to do that you will have to go to `/user_content/views/` and select the view you want to add cards to. The user content is already inside of a vertical-stack, so all you'd need to do is to put your card config. You can create cards with the GUI toolbox which you can find in HKI Settings. You can't save directly from this toolbox, however you can copy/paste the code.

#### WARNING
Everything within the `extra_settings.yaml` file is commented, you can simply uncomment a line to change its properties and use it in Homekit Infused. Note that there are some lines that come uncommented by default, do NOT remove or comment them EVER! This will certainly break the setup and you will find yourself with a non-working lovelace interface.

#### Empty Views
Some views are empty and only contains a custom user area, this is because I haven't made something nice for those views yet. If you have something nice don't hesitate to share your ideas and it might get merged into the next release.

#### Custom Views and Buttons
There are custom buttons and views available for you to edit as you please. The views only contain the HKI style and can be completely designed as you wish. You don't have to use these views as any view in HKI is customizable.

#### Congratulations
Congratz, I hope you'll have a great ton of fun now!
