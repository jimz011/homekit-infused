# Homekit Infused

Back to [Addon List](../addon_list.md)

# Button (navigation)

![Homekit Infused](../images/button-navigation.png)

### Description
This is the default HKI navigation button, it is by default used in the [menu](menu-card.md) but can also be used anywhere else like on the frontpage, [click here](frontpage-buttons.md) if you are looking for a predefined frontpage button row.

### Configuration
- You will need to set the name, icon, label and navigation path
- When using a layout-card you can also set a column size, else just use a horizontal-stack to stack buttons
- You can add a button badge if you like, the easiest way would be to replace `input_number.empty` with the entity you want to show in the badge.

### Advanced

| Properties | Required | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name | yes/no | none | Sets the name for the button, if the entity has a friendly name in customize.yaml this is not required! (this accepts JS templates, see examples below) |
| entity | no | input_boolean.dummy1 | Only use this is you want to have a navigation button that doubles as a switch |
| hold_action | no | more-info | Set this to toggle, so that a hold_action will toggle the entity mentioned above |
| custom_state | no | "on" | This is the state the above entity must have to have the button to be shown as "switched on" |
| icon | yes/no | none | Sets the icon for the button, if an entity_picture is set either in this config or in customize.yaml, the icon will be hidden! if this entity has an icon set in customize.yaml this is not required (this accepts JS templates, see examples below) |
| size | no | 25% | Sets the size of the icon |
| icon_color_off | no | var(--paper-item-icon-color) | Sets the color of the icon, if no entity is set than this is the variable you want to change |
| icon_color_on | no | var(--paper-item-icon-color) | Sets the color of the icon if it matches the custom_state of an entity, you must have an entity setup to use this as mentioned above |
| spin_off | no | false | Makes the icon spin, if no entity is set than this is the variable you want to change |
| spin_on | no | false | Makes the icon spin if it matches the custom_state of an entity, you must have an entity setup to use this as mentioned above |
| label | yes | none | Sets the label for the button (this accepts JS templates) |
| show_entity_picture | no | true | Set to show entity_picture instead of an icon, set this to false if you've set an entity_picture in customize.yaml and want to override it by showing an icon instead, else just leave the default setting | 
| entity_picture | no | none | Sets an entity_picture for this icon, this must be a path to an image (e.g. /local/images/your_image.png). This will override the icon setting! |
| aspect_ratio | no | 1/1 | Sets the aspect_ratio for the button |
| lock | no | false | Sets if the button will be locked, you can unlock a button by a tap, you will need to press it again to activate (this is useful to avoid accidental presses) |
| show_name | no | true | Show/hide the name on the button |
| show_label | no | true | Show/hide the label on the button |
| show_icon | no | true | Show/hide the icon on the button |
| show_state | no | false | Show/hide the state on the button |
| navigation_path | yes | /homekit-infused/home | Sets the path the button should point to, you can ONLY choose any of the included views, to find out the path names you can open the `/homekit-infused/user/views/` folder. The folder names are exactly the same as their paths |
| notification | yes | "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]" | Set a badge on a button, the badge will show what is set in the template, to make it easy all you'd need to do is replace the `input_number.empty` entity for an entity of which you want the state to be shown inside the badge (this accepts JS templates) |
| background_color | yes | "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]" | Sets background color of the badge, to make it easy all you'd need to do is replace the `input_number.empty` with the exact same entity as you have put inside the notification parameter explained above |
| grid | no | default-hki-grid | Change the grid of the button, choose from `default-hki-grid`, `light-devices-grid`, `old-hki-grid` or `old-light-devices-grid` |


### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/frontpage/), you can name the file however you want (e.g. buttons.yaml)
- Copy the code below and make changes if needed

```
# minimal example (without a badge)
- !include
  - '../../../base/templates/button/button-badge.yaml'
  - name: Lights
    label: Overview
    icon: mdi:floor-lamp
    navigation_path: /homekit-infused/lights
    notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
    background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
```

```
# example (with a badge)
- !include
  - '../../../base/templates/button/button-badge.yaml'
  - name: Climate
    label: Control
    icon: mdi:thermometer
    navigation_path: /homekit-infused/climate
    notification: "[[[ if (states['weather.dark_sky'].state == 0) return '&nbsp'; else return `${states['weather.dark_sky'].state}`; ]]]"
    background_color: "[[[ if (states['weather.dark_sky'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
```
### Layout card and horizontal/vertical stacks
I know the HA documentation has this perfectly explained already, but to make it easier on you I will try to explain in more detail [here](../addons/stacks.md)

