# Homekit Infused

Back to [Addon List](../addon_list.md)

# Climate Preset Buttons
*Homekit Infused Framework 3.0.3 or higher required

![Homekit Infused](../images/climate-preset-buttons.png)

### Description
This is a predefined set of buttons to use with your climate entities. It is advised to put this on your climate view.

### Configuration
- Please change the parameters you need to set below

### Advanced
| Parameters | Type | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name | String | none | Sets the name of the button |
| label | String | none | Sets the label of the button |
| icon | String | none | Sets the icon of the button |
| option | Integer | none | Sets the temperature preset of the button |
| other | Do NOT touch the other stuff! |

### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/climate/), you can name the file however you want (e.g. climate-presets-card.yaml)
- Copy the code below and make changes if needed

```
- type: horizontal-stack
  cards:
    - !include ../../../base/includes/gap.yaml
    - type: horizontal-stack
      cards:
        - !include
          - '../../../base/templates/button/service-call.yaml'
          - name: Power
            label: All
            icon: mdi:power
            service: climate.turn_on
            service_entity: all
            margin_right: 40px
            opacity_off: 0.8
        - !include
          - '../../../base/templates/button/service-call-with-option.yaml'
          - name: Frost
            label: Protection
            icon: mdi:snowflake-melt
            service: climate.set_temperature
            service_entity: all
            extra: temperature
            option: 11
            margin_right: 40px
            opacity_off: 0.8
        - !include
          - '../../../base/templates/button/service-call-with-option.yaml'
          - name: Heat
            label: All
            icon: mdi:fire
            service: climate.set_temperature
            service_entity: all
            extra: temperature
            option: 22
            margin_right: 40px
            opacity_off: 0.8
        - !include
          - '../../../base/templates/button/service-call.yaml'
          - name: Power
            label: All Off
            icon: mdi:power
            service: climate.turn_off
            service_entity: all
            margin_right: 40px
            opacity_off: 0.8
    - !include ../../../base/includes/gap.yaml
```

