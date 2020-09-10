# Homekit Infused

Back to [Addon List](../addon_list.md)

# Menu Card
*HKI Framework 3.0.1 or higher required

![Homekit Infused](../images/menu-card.png)

### Description
This is the default HKI menu (in case you require this and deleted it by accident)

### Configuration
- No additional configuration required
- To configure badges inside the buttons please read the advanced section

### Advanced
| Parameters | Type | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name | String | none | Sets the name for the buttons, by default it uses the global variables set inside `/user/config/header_config.yaml`. It is advised to change the names in that file instead, if you want to create a new (extra) button, you can simply hardcode the name |
| icon | String | none | Sets the icon for the buttons, by default it uses the global variables set inside `/user/config/header_config.yaml`. It is advised to change the icons in that file instead, if you want to create a new (extra) button, you can simply hardcode the icon |
| label | String | none | Sets the label for the buttons, by default it uses the global variables set inside `/user/config/header_config.yaml`. It is advised to change the names in that file instead, if you want to create a new (extra) button, you can simply hardcode the label |
| notification | Template | none | Set a badge on a button, the badge will show what is set in the template, to make it easy all you'd need to do is replace the `input_number.empty` entity for an entity of which you want the state to be shown inside the badge (experienced users can set any template they want) |
| background_color | Template | none | Sets background color of the badge, to make it easy all you'd need to do is replace the `input_number.empty` with the exact same entity as you have put inside the notification parameter explained above |

### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/menu/), you can name the file however you want (e.g. menu-card.yaml)
- Copy the code below and make changes if needed

```
# lovelace_gen
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
          - name: {{ _global.header.automations_title|default('Automations') }}
            label: {{ _global.header.automations_subtitle|default('Overview') }}
            icon: {{ _global.header.automations_icon|default('mdi:alpha-a-box') }}
            navigation_path: /homekit-infused/automations
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.battery_title|default('Battery') }}
            label: {{ _global.header.battery_subtitle|default('Overview') }}
            icon: {{ _global.header.battery_icon|default('mdi:battery-50') }}
            navigation_path: /homekit-infused/battery
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.calendar_title|default('Calendar') }}
            label: {{ _global.header.calendar_subtitle|default('Overview') }}
            icon: {{ _global.header.calendar_icon|default('mdi:calendar-account') }}
            navigation_path: /homekit-infused/calendar
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.certificates_title|default('Certificates') }}
            label: {{ _global.header.certificates_subtitle|default('Expiry') }}
            icon: {{ _global.header.certificates_icon|default('mdi:certificate') }}
            navigation_path: /homekit-infused/certificates
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"    
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.cleaning_title|default('Cleaning') }}
            label: {{ _global.header.cleaning_subtitle|default('Overview') }}
            icon: {{ _global.header.cleaning_icon|default('mdi:washing-machine') }}
            navigation_path: /homekit-infused/cleaning
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"     
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
          - name: {{ _global.header.computers_title|default('Computers') }}
            label: {{ _global.header.computers_subtitle|default('Overview') }}
            icon: {{ _global.header.computers_icon|default('mdi:desktop-tower-monitor') }}
            navigation_path: /homekit-infused/computers
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.covers_title|default('Covers') }}
            label: {{ _global.header.covers_subtitle|default('Overview') }}
            icon: {{ _global.header.covers_icon|default('mdi:window-shutter') }}
            navigation_path: /homekit-infused/covers
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
          - name: {{ _global.header.energy_title|default('Energy') }}
            label: {{ _global.header.energy_subtitle|default('Overview') }}
            icon: {{ _global.header.energy_icon|default('mdi:chart-line') }}
            navigation_path: /homekit-infused/energy
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.floorplan_title|default('Floorplan') }}
            label: {{ _global.header.floorplan_subtitle|default('Overview') }}
            icon: {{ _global.header.floorplan_icon|default('mdi:floor-plan') }}
            navigation_path: /homekit-infused/floorplan
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
          - name: {{ _global.header.location_title|default('Location') }}
            label: {{ _global.header.location_subtitle|default('Map') }}
            icon: {{ _global.header.location_icon|default('mdi:map-marker') }}
            navigation_path: /homekit-infused/location
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
          - name: {{ _global.header.scenes_title|default('Scenes') }}
            label: {{ _global.header.scenes_subtitle|default('Overview') }}
            icon: {{ _global.header.scenes_icon|default('mdi:arrange-send-backward') }}
            navigation_path: /homekit-infused/scenes
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
          - name: {{ _global.header.system_title|default('System') }}
            label: {{ _global.header.system_subtitle|default('Overview') }}
            icon: {{ _global.header.system_icon|default('mdi:home-assistant') }}
            navigation_path: /homekit-infused/system
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"                                             
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.traffic_title|default('Traffic') }}
            label: {{ _global.header.traffic_subtitle|default('Information') }}
            icon: {{ _global.header.traffic_icon|default('mdi:waze') }}
            navigation_path: /homekit-infused/traffic
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
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.waste_title|default('Waste') }}
            label: {{ _global.header.waste_subtitle|default('Overview') }}
            icon: {{ _global.header.waste_icon|default('mdi:trash-can') }}
            navigation_path: /homekit-infused/waste
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: {{ _global.header.weather_title|default('Weather') }}
            label: {{ _global.header.weather_subtitle|default('Information') }}
            icon: {{ _global.header.weather_icon|default('mdi:weather-partly-cloudy') }}
            navigation_path: /homekit-infused/weather
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
    - !include ../../../base/includes/gap.yaml
```

