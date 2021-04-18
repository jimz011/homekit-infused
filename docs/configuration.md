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

## Configuration
In Homekit Infused v4.x.x it is super easy to setup views and configure them for either auto-filling or custom cards.
Homekit Infused only includes two preconfigured views, which is the `home` view and the `menu` view.
Most of the config is preconfigured and doesn't require your input, please read the following steps below.

*NOTE: For ANY change in the config below to take effect you MUST restart Home Assistant!!

### Setting up device counters
Before continuing we should first open `/hki-user/device_counters.yaml`. Add all your known entities to their corresponding groups. This will help HKI count the amount of devices that are actually turned on.
We can also re-use these entities again in buttons or in custom-cards. You can add groups yourself to this file, though they won't be used in any of the auto-filling options. Adding custom groups is only useful if you know how to use those entities in your own cards.

### Setting up the frontpage
The frontpage is by default auto-filled, you can however change the settings of most of the visible items on this view.
To setup the frontpage open the following file `/hki-user/config/general_config.yaml`. 
It is recommended to never remove any line in this config and it is recommended to set define the properties with `true` or `false` rather than commenting it. Some of the configuration can be commented, but it is best to leave it this way. 

The settings are pretty straightforward when you open the file. A lot of settings are related to auto-filling. If you wish to turn auto-fill off and create your own frontpage then you should set `auto_fill: false` and set `custom_cards: true`.

You must change/add the following items yourself:
- `persons:`
- `weather:`

*Note that these are already commented out by default and you should uncomment them and change them to your own respective configuration.

If you have set `custom_cards: true` you must create a folder with the same name as the path in `/hki-user/views/` by default this path is `home` unless you rename it in the settings. In this case your path would be `/hki-user/views/home/`.

### Setting up the menu
The menu is by default auto-filled with new buttons whenever you add a new view, you can however change the settings of most of the visible items on this view.
To setup the menu open the following file `/hki-user/config/general_config.yaml`. 
It is recommended to never remove any line in this config and it is recommended to set define the properties with `true` or `false` rather than commenting it. Some of the configuration can be commented, but it is best to leave it this way. 

The settings are pretty straightforward when you open the file. A lot of settings are related to auto-filling. If you wish to turn auto-fill off and create your own frontpage then you should set `auto_fill: false` and set `custom_cards: true`.

If you have set `custom_cards: true` you must create a folder with the same name as the path in `/hki-user/views/` by default this path is `menu` unless you rename it in the settings. In this case your path would be `/hki-user/views/menu/`.

##### Setting up the header
The header is by default ready to go, you can however change the settings of most of the visible items on the header.
To setup the header open the following file `/hki-user/config/general_config.yaml`. 
You can turn the sensors off in the header if you don't like them or set less icons to show. By default it shows the following 5 items:
- doors currently open
- windows currently open
- motion currently activated
- lights currently on
- devices currently on

The options for this are pretty straightforward.

### Setting up views
Views are completely conditional, this means that Homekit Infused doesn't have predefined views (unlike older versions of the project). You can create views pretty fast and easy by only entering a name!
To create a view open the following file `/hki-user/config/view_config.yaml`. 

To setup a new view you can enter ANY name you want, just make SURE your name is lowercase and doesn't contain spaces. Use underscores as HKI will automatically convert them.
```
# Example Minimal
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

*Note: when `custom_cards: true` or `custom_cards: advanced` is set you MUST create a folder with the same name as the path in `/hki-user/views/`. From the example above this would be `/hki-user/views/living_room/`.
Please read [this](custom_views.md) for more information on how to use this.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 'key' | yes | none | Sets the name, path and title of the view, this is not an actual property but the first line of your view |
||||
| show_subtitle | no | subtitle | Change the header subtitle, choose between `false`, `notifications` or `subtitle` |
| show_header | no | true | Show or hide the entire HKI header (this includes the subtitle) |
| subtitle | no | undefined | Set the subtitle text, this accepts button-card JS templates |
| icon | no | mdi:home | Set the icon for the navigation_bar, shortcut buttons and subtitle, this accepts button-card JS templates and FA icons |
| type | no | undefined | Set the type to `room` if you want this view to show up as a room (e.g. bathroom), this only has effect on the menu shortcut buttons! |
| min_columns | no | 1 | Set the minimal columns for this view, this has no effect when custom_cards is set to `advanced` |
| max_columns | no | 3 | Set the maximum columns for this view, this has no effect when custom_cards is set to `advanced` |'
| show_in_favorites | no | false | Set to `true` if you want this view to be auto included in the favorites of the menu and the frontpage |
| button_badge | no | undefined | This will set a bagde for the menu and favorites button, it will always show the state of an entered entity, you can use any entity_id (e.g. `sensor.current_temperature`) |
| show_in_navbar | no | false | Set to `true` if you want this view to be visible in the navigation_bar |
| devices | no | undefined | When devices are defined it will auto-fill the entities listed on this view (see examples below) |
| button_columns | no | 3 | Set how many buttons are placed next to each other when having it auto-filled |
| camera_columns | no | 1 | Set how many camera cards you want next to each other when having it auto-filled |
| graph_columns | no | 3 | Set how many graph cards you want next to each other when having it auto-filled |
| custom_cards | no | false | Set to `true` if you want to use your own cards from the user/views folder. By default custom cards are placed inside of a layout-card, set to `advanced` if you want to use the default lovelace layout instead. WARNING! This theme is built in panel mode, setting this to advanced means that you should know what you are doing and how to build your own layout! |


```
# Example 
  kitchen:
      subtitle: My Kitchen
      button_badge: sensor.kitchen_temp
      icon: mdi:fridge
      type: room
      devices:
        switches:
          - switch.afzuigkap
          - switch.oven
          - switch.airfryer
          - switch.nespresso_apparaat
          - switch.cappumaker
          - switch.waterkoker
          - switch.vaatwasser
          - switch.koelkast_2
        lights:
          - light.keuken
          - light.keuken_leds
          - light.keuken_leds_onder
```  
The example above will create a view for you named Kitchen and automatically does the following:
- sets the title of the view (in this case Kitchen)
- sets the path of the view for your browser to use (in this case https://hassio.local/homekit-infused/kitchen)
- sets an icon for the navigation_bar, subtitle and menu/favorites button
- creates an entry in the rooms section of the menu/frontpage (because of `type: room`)
- shows a badge in the shortcut button with the state of the entity entered
- fills the view with 2 stacks, one named switches and one named lights
- adds the entered entities to those two stacks and try to figure out what kind of entity it is and create a button for them and assign the correct popup.

*Note: under devices you can name the 'category' ANYTHING you want as long as it is again lowercase and has no spaces but underscores.
```
# Example 
  bedroom:
      subtitle: My Bedroom
      devices:
        my_crazy_lights:
          - light.lamp
          - light.wand
        my_other_wicked_lights:
          - lights.ceiling
```

### Extra Options
You can pass some extra data to the entities so that HKI knows what kind of popup and/or color it should give to the buttons or even add a lock to a button. To set some extra keys add a dot at the end of the entity and then the extra key.
E.g. `light.living_room.rgb` or `switch.kitchen_hood.fan`. You can have multiple tags. E.g. `switch.kitchen_hood.fan.lock`, the order of the keys do not matter, `switch.kitchen_hood.lock.fan` will also work!

*Note: You can ONLY use .lock in conjunction with another tag e.g. `switch.lamp.lock.rgb`. Do not try to combine e.g. `rgb` with `color-temp`.
*Tip: You can also set an entire category to be forced with these properties, see examples below.

| Tag | Description |
|-----------------------------|-------------|------------------------------------------------------------------|
| lock | this locks an entity and will now need two taps to turn on/off, the first tap unlocks, the second toggles|
| rgb | Use this tag to specify the entity type as an rgb-light, this lets HKI know that your light needs a different popup than other lights |
| color-temp | Use this tag to specify the entity type as a color-temperature-light, this lets HKI know that your light needs a different popup than other lights |
| fan | Fans are automatically assigned a different looking button (e.g. blue color when turned on and a spinning icon), if your entity isn't in the fan domain (e.g. switch.kitchen_ventilo) you can add the `fan` tag to force it |
| graph | Force an entity to show a graph instead, to color the line_color add a color like this `sensor.my_power_usage.graph.red`, choose between the following colors: `red`, `green`, `blue`, `cyan`, `orange`, `black`, `white`, `purple`, `pink`, `yellow` |

Examples:
```
lights:
  devices:
    living_room:
      - light.ceiling
      - light.wall.rgb # This entity is forced as an RGB entity
      - light.table_lamp.lock # This entity has a lock

    bedroom.lock: # This entire room/categorie has a lock
      - light.ceiling.color-temp # This entity is forced as a COLOR TEMP entity 
      - light.wall
      - light.table_lamp
```
```
kitchen:
  devices:
    lights:
      - light.ceiling.color-temp # This entity is forced as a COLOR TEMP entity
      - light.wall
      - light.table_lamp.lock # This entity has a lock

    switches: 
      - switch.kitchen_hood.fan # This entity is forced as a fan entity
      - switch.freezer
      - switch.refrigerator.lock # This entity has a lock
    fans.fan: # This entire room is forced as a fan entity
      - switch.kitchen_hood
      - switch.airco_exhaust
      - switch.toilet_exhaust
```

### More examples
I could go on with examples forever, but it is way better to just check out the example config that I have over [here](https://github.com/jimz011/homekit-infused/tree/4.x.x-personal)
