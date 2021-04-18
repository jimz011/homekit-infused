# Homekit Infused

Back to [Addon List](../addon_list.md)

# Layout card, horizontal and vertical stacks

### Description
Horizontal and vertical stacks are useful to make cards appear the way you want. Basically you are stacking a few cards together (so that in the end the entire stack can be treated as a single card).
Layout card is an addon that can do this as well, but makes it slightly easier since you can set the number of used columns. Since layout-card is a Framework requirement you already have this addon.
Neither of the methods are better than the other, however I must note that horizontal and vertical stacks are core HA code and layout-card is a custom-card. In my opinion it is safer to run stacks than a layout-card!

### Important Note
All the default views are wrapped inside a layout-card, by default this will be set to a max of 3 columns (meaning when viewed on a tablet or in a browser it will spread the cards in columns of 3). If the max_columns is set to 6 you can have 6 columns on the screen, which will be dynamic depending on the view width. You can change the column numbers in the ../user/config/view_config.yaml file.

WARNING! The light and devices view do NOT have a layout-card fixed, to properly use these pages start with a layout card like the example below. Because of the nature of this you must either reuse this same piece of code in each file, or put all the code in a single file. (this does not apply when using the auto-fill addons)
```
# example of light or devices view starting code
- type: custom:layout-card
  max_columns: 3
  layout: horizontal
  cards:
    - your view cards here
```

### Vertical and Horizontal stacks
```
# example with a horizontal stack (3 buttons horizontally)
- type: horizontal-stack
  cards:
    - name: Lights
      label: Overview
      icon: mdi:floor-lamp
      navigation_path: /homekit-infused/lights
      notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
      background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
    - name: Devices
      label: Overview
      icon: mdi:power-plug
      navigation_path: /homekit-infused/devices
      notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
      background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]" 
    - name: Security
      label: Overview
      icon: mdi:cctv
      navigation_path: /homekit-infused/security
      notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
      background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
```
```
# example with a vertical and horizontal stack (6 buttons with 2 rows of 3 buttons horizontally each)
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - type: entity-button
          name: Lights
          label: Overview
          icon: mdi:floor-lamp 
        - type: entity-button
          name: Devices
          label: Overview
          icon: mdi:power-plug
        - type: entity-button
          name: Security
          label: Overview
          icon: mdi:cctv
    - type: horizontal-stack
      cards:
        - type: entity-button
          name: Lights
          label: Overview
          icon: mdi:floor-lamp
        - type: entity-button
          name: Devices
          label: Overview
          icon: mdi:power-plug
        - type: entity-button
          name: Security
          label: Overview
          icon: mdi:cctv
```
```
# example with 2 markdown cards aligned horizontally
- type: horizontal-stack
  cards:
    - type: markdown
      content: left card
    - type: markdown
      content: right card
```
```
# example with 2 markdown cards aligned vertically
- type: vertical-stack
  cards:
    - type: markdown
      content: upper card
    - type: markdown
      content: lower card
```
As you can see the stacks in Home Assistant are pretty versatile, see it this way. ALL the cards that are inside a stack (horizontal or vertical) can be treated as a single card. On a desktop browser you will often see cards moving to fit the browser. Using these methods will make sure that even if the browser moves certain cards, that the cards in this stack will be treated as a single card (and thus all move to the same place). This is the method to use if you want, for example, 8 buttons to always stick together (and thus treated as a single card).

### Layout Card
```
# example with a layout-card (3 buttons horizontally)
- type: custom:layout-card
  column_num: 3
  justify_content: start
  layout: horizontal
  cards:
    - !include
      - '../../../base/templates/button/button-badge.yaml'
      - name: {Automations
        label: Overview
        icon: mdi:alpha-a-box 
    - !include
      - '../../../base/templates/button/button-badge.yaml'
      - name: Battery
        label: Overview
        icon: mdi:battery-50
    - !include
      - '../../../base/templates/button/button-badge.yaml'
      - name: Calendar
        label: Overview
        icon: mdi:calendar-account     
```
```
# example with a layout-card (6 buttons with 2 rows of 3 buttons horizontally each)
- type: custom:layout-card
  column_num: 3
  justify_content: start
  layout: horizontal
  cards:
    - !include
      - '../../../base/templates/button/button-badge.yaml'
      - name: {Automations
        label: Overview
        icon: mdi:alpha-a-box
    - !include
      - '../../../base/templates/button/button-badge.yaml'
      - name: Battery
        label: Overview
        icon: mdi:battery-50
    - !include
      - '../../../base/templates/button/button-badge.yaml'
      - name: Calendar
        label: Overview
        icon: mdi:calendar-account
    - !include
      - '../../../base/templates/button/button-badge.yaml'
      - name: {Automations
        label: Overview
        icon: mdi:alpha-a-box 
    - !include
      - '../../../base/templates/button/button-badge.yaml'
      - name: Battery
        label: Overview
        icon: mdi:battery-50
    - !include
      - '../../../base/templates/button/button-badge.yaml'
      - name: Calendar
        label: Overview
        icon: mdi:calendar-account
```

As you can see with a layout card you can continue to add buttons without the need of an extra horizontal-stack after each row. You can also easily set the amount of columns on each row by simply adjusting the column_num number.
