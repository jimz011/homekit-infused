# Homekit Infused

Back to [Addon List](../addon_list.md)

# Gap Card
![Homekit Infused](../images/gap-card.png)

### Description
This is a card that will create a gap at the left and right side of the screen (this will only be visible on a smartphone since desktop browsers have larger screens)

### Configuration
- No additional configuration required

### Install
- This card is only usefull inside a horizontal-stack
- Copy the code wherever you need this

```
- !include ../../../base/includes/gap.yaml
```

### Extra Information
This card is only usefull inside a horizontal-stack
```
- type: horizontal-stack
  cards:
    - !include ../../../base/includes/gap.yaml
    - type: entity-button
      entity: light.livingroom_lamp_1
    - type: entity-button
      entity: light.livingroom_lamp_2
    - type: entity-button
      entity: light.livingroom_lamp_3
    - !include ../../../base/includes/gap.yaml
```
