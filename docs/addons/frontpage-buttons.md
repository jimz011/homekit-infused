# Homekit Infused

Back to [Addon List](../addon_list.md)

# Frontpage Buttons

![Homekit Infused](../images/frontpage-buttons.png)

### Description
This is the default HKI frontpage navigation row. 

### Configuration
- For detailed instructions on how to use this, please follow read the [button (navigation)](button-navigation.md) documentation!
- If you use the default config (the config below) then no additional config is required.

### Advanced
For detailed instructions on how to use this, please follow read the [button (navigation)](button-navigation.md) documentation!

### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/frontpage/), you can name the file however you want (e.g. frontpage-buttons.yaml)
- Copy the code below and make changes if needed

```
# lovelace_gen
- type: horizontal-stack
  cards:
    - !include ../../../base/includes/gap.yaml
    - type: custom:layout-card
      column_num: 4
      justify_content: start
      layout: horizontal
      cards:  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.climate_title|default('Climate') }}
            label: {{ _global.header.climate_subtitle|default('Control') }}
            icon: {{ _global.header.climate_icon|default('mdi:thermometer') }}
            navigation_path: /homekit-infused/climate
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.devices_title|default('Devices') }}
            label: {{ _global.header.devices_subtitle|default('Overview') }}
            icon: {{ _global.header.devices_icon|default('mdi:power-plug') }}
            navigation_path: /homekit-infused/devices
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"                                             
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.lights_title|default('Lights') }}
            label: {{ _global.header.lights_subtitle|default('Overview') }}
            icon: {{ _global.header.lights_icon|default('mdi:floor-lamp') }}
            navigation_path: /homekit-infused/lights
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.security_title|default('Security') }}
            label: {{ _global.header.security_subtitle|default('Panel') }}
            icon: {{ _global.header.security_icon|default('mdi:cctv') }}
            navigation_path: /homekit-infused/security
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]" 
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.energy_title|default('Energy') }}
            label: {{ _global.header.energy_subtitle|default('Overview') }}
            icon: {{ _global.header.energy_icon|default('mdi:chart-line') }}
            navigation_path: /homekit-infused/energy
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]" 
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.scenes_title|default('Scenes') }}
            label: {{ _global.header.scenes_subtitle|default('Overview') }}
            icon: {{ _global.header.scenes_icon|default('mdi:arrange-send-backward') }}
            navigation_path: /homekit-infused/scenes
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.media_title|default('Media') }}
            label: {{ _global.header.media_subtitle|default('Center') }}
            icon: {{ _global.header.media_icon|default('mdi:plex') }}
            navigation_path: /homekit-infused/media
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"     
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.vacuum_title|default('Vacuum') }}
            label: {{ _global.header.vacuum_subtitle|default('Control') }}
            icon: {{ _global.header.vacuum_icon|default('mdi:robot-vacuum') }}
            navigation_path: /homekit-infused/vacuum
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"    
    - !include ../../../base/includes/gap.yaml
```
