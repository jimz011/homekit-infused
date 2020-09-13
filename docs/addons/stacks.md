# Homekit Infused

Back to [Addon List](../addon_list.md)

# Layout card, horizontal and vertical stacks

### Description
Horizontal and vertical stacks are useful to make cards appear the way you want. Basically you are stacking a few cards together (so that in the end the entire stack can be treated as a single card).
Layout card is an addon that can do this as well, but makes it slightly easier since you can set the number of used columns. Since layout-card is a Framework requirement you already have this addon.
Neither of the methods are better than the other, however I must note that horizontal and vertical stacks are core HA code and layout-card is a custom-card. In my opinion it is safer to run stacks than a layout-card!

### Vertical and Horizontal stacks
```
# example with a vertical and horizontal stack (3 buttons horizontally)
# I use a vertical-stack so that the next horizontal-stack is always together in place with the first horizontal-stack. This will make the buttons stick together even when the desktop browser decides to move the cards.
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - !include ../../../base/includes/gap.yaml
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
        - !include ../../../base/includes/gap.yaml
```
```
# example with a vertical and horizontal stack (6 buttons with 2 rows of 3 buttons horizontally each)
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - !include ../../../base/includes/gap.yaml
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
        - !include ../../../base/includes/gap.yaml
    - type: horizontal-stack
      cards:
        - !include ../../../base/includes/gap.yaml
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
        - !include ../../../base/includes/gap.yaml
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
- type: horizontal-stack
  cards:
    - !include ../../../base/includes/gap.yaml
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
    - !include ../../../base/includes/gap.yaml
```
```
# example with a layout-card (6 buttons with 2 rows of 3 buttons horizontally each)
- type: horizontal-stack
  cards:
    - !include ../../../base/includes/gap.yaml
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
    - !include ../../../base/includes/gap.yaml
```

As you can see with a layout card you can continue to add buttons without the need of an extra horizontal-stack after each row. You can also easily set the amount of columns on each row by simply adjusting the column_num number.