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

## Configuration
In Homekit Infused it is super easy to setup views and configure them for either the built-in addons or custom cards. Don't forget to read the tips & tricks section at the end of this page!.

*NOTE: For ANY change in the config below to take effect you MUST restart Home Assistant!!

### Setting up views
Homekit Infused is a YAML style dashboard and as such you must configure it through YAML files. To make it simple Homekit Infused is mostly managed through a single file `/hki-user/config/views.yaml` and you should use that file to edit Homekit Infused.

To start open the file mentioned above. You will find that 2 views are already configured for you, but any new view or changes to the already included views should be done in this file.

To create a new view, you must set an object (in this case the room name) to start a new view. This is the very first line of your new view.

```yaml
# views.yaml (example minimal configuration)
  living_room:
    icon: mdi:floor-lamp
```
```yaml
# views.yaml (example with custom subtitle)
  living_room:
    subtitle: Overview
    icon: mdi:floor-lamp
```

The example above will create a view for you named Living Room and automatically does the following:
- sets the title of the view (in this case Living Room)
- sets the path of the view for your browser to use (in this case https://hassio.local/homekit-infused/living_room)
- sets an icon for the navigation_bar, subtitle and menu/favorites button
- creates an entry in the menu

This is the bare minimum that will give you a brand new view, however without any other code the view will be sitting empty. Homekit Infused is capable of filling the views for you, use custom user code, or both at the same time. Below are all the view options that you can add to your view to customize each view entirely to your taste.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 'object' | yes | none | Sets the name, path and title of the view, this is not an actual property but the first line of your view, *NOTE: This can NOT contain special characters, use lowercase characters only!* |
| title | no | view_name | Set the title of the view, if undefined it will use the name of the view instead, you can NOT use templates for the title! |
| subtitle | no | undefined | Set the subtitle text, this accepts [JS templates](https://github.com/custom-cards/button-card#javascript-templates), if you don't set a subtitle it will show the default notifications instead |
| icon | no | mdi:home | Set the icon for the navigation_bar, shortcut buttons and subtitle, this also accepts FA icons, you can use [JS templates](https://github.com/custom-cards/button-card#javascript-templates) as long as you don't set this icon to show in the nav_bar |
| show_subtitle | no | subtitle | Set to show the header subtitle to true or false |
| show_in_favorites | no | false | Set to `true` if you want this view to be auto included in the favorites addon |
| show_in_menu | no | undefined | This forces a view to be shown in the menu addon, this is useful when using the `menu:` or `view_selector:` addon |
| button_label | no | no label | Set the button label text, this accepts [JS templates](https://github.com/custom-cards/button-card#javascript-templates) |
| button_badge | no | undefined | This will set a bagde for the menu and favorites button, it will always show the state of an entered entity, you can use any entity_id (e.g. `sensor.current_temperature`) |
| show_in_navbar | no | false | Set to `true` if you want this view to be visible in the navigation_bar, this is not the same as the menu! |
| visible | no | undefined | This will show the nav_bar icon only for certain users, this only reflects if `show_in_navbar` is `true`, this MUST be defined as a list! Check out the [Official Documentation](https://www.home-assistant.io/lovelace/views/#visible) for more information. NOTE: The URL will still be accessible for any user! |
| [addons](addons.md) | no | undefined | Add an addon to your view, refer to the [Addons](addons.md) section for documentation |
| [layout](addons/layout.md) | no | undefined | Change your views layout, refer to the [Layout](addons/layout.md) section for documentation |
| [view_selector](addons/view-selector.md) | no | undefined | Add a view_selector to the top of your view, refer to the [View Selector](addons/view-selector.md) section for documentation |
| [custom_legacy](addons/custom-legacy.md) | no | undefined | Disable all addons and go full YAML style on your views, refer to the [Custom Legacy](addons/custom-legacy.md) section for documentation |

```yaml
# views.yaml (example)
  kitchen:
    subtitle: My Kitchen
    button_badge: sensor.kitchen_temp
    icon: mdi:fridge
    show_in_navbar: true
    show_in_favorites: true
```

# General Config

The items below can be found in `/hki-user/config/config.yaml`. These settings are predefined for you by default, but some of them can be edited to your own likings. This is not a required step to get HKI running, but you will want to edit some of these in the future.

| Name | Description |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [alarm](addons/alarm.md) | Change the behaviour/popup of the alarm badge in the header |
| [header](addons/header.md) | Change the header badges and/or whether or not to show the subtitle globally |
| [popups](addons/popups.md) | Change the location of the close button in popups and change the colors in RGB light popups |
| [profile](addons/profile.md) | Change the contents of the profile menu, you can set the profile menu on a per user basis |

# Other Config

| Name | Description |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Device Counters](addons/device-counters.md) | Setup entities that count devices for you, this is a recommended step |
| [Find My](addons/find-my.md) | Setup your find_my page by following this section |
| [Notifications](addons/notifications.md) | Setup notifications to show in the subtitle of the header |
| [Splitting the config](splitting-the-config.md) | This will show you how to split up the views.yaml file into multiple separate files and show you how to organize code |
| [Theming](addons/themes.md) | How to edit the appearance of HKI like a Jedi Master? |

# Tips & Tricks

The performance of HKI once loaded up is blazing fast and should be very stable. However large setups using a lot of addons can have a huge impact on startup times. This is ONLY true for starting up Home Assistant. Large setups can take up to 3 minutes to restart.
Lovelace reload times depend on setup size and will vary from 5 to 40 seconds for large setups.

As mentioned this ONLY affects startup times and will not affect any other function of Home Assistant, nor will it slow down your interface once loaded.

Obviously this would make you crazy if you have to edit your setup and restart every time. To solve this problem you should edit/create views one by one! Comment out your completed views (except the Home view, this is important!) and restart. You will find that restarting will only take a few seconds and this allows you to edit your dashboard super fast. Once your view has been completed and tested you can comment it out and create the next view. Once you are done with all the views just uncomment the views you have created and restart.

### More examples
I could go on with examples forever, but it is way better to just check out the example config that I have over [here](https://github.com/jimz011/homekit-infused/tree/5.x.x-personal)
