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
| name | String | none | Sets the name for the button |
| icon | String | none | Sets the icon for the button |
| label | String | none | Sets the label for the button |
| notification | Template | none | Set a badge on a button, the badge will show what is set in the template, to make it easy all you'd need to do is replace the `input_number.empty` entity for an entity of which you want the state to be shown inside the badge (experienced users can set any template they want) |
| background_color | Template | none | Sets background color of the badge, to make it easy all you'd need to do is replace the `input_number.empty` with the exact same entity as you have put inside the notification parameter explained above |
| navigation_path | String | none | HKI views are hardcoded, unless you know what you are doing you should NOT touch this! |

### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/menu/), you can name the file however you want (e.g. menu-card.yaml)
- Copy the code below and make changes if needed

```
# lovelace_gen
- type: horizontal-stack
  cards:
    - !include ../../../base/includes/gap.yaml
    - type: custom:layout-card
      min_columns: 3
      max_columns: 3
      justify_content: start
      layout: horizontal
      cards:
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Automations
            label: Overview
            icon: mdi:alpha-a-box
            navigation_path: /homekit-infused/automations
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Battery
            label: Overview
            icon: mdi:battery-50
            navigation_path: /homekit-infused/battery
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Calendar
            label: Overview
            icon: mdi:calendar-account
            navigation_path: /homekit-infused/calendar
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Certificates
            label: Expiry
            icon: mdi:certificate
            navigation_path: /homekit-infused/certificates
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"    
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Cleaning
            label: Overview
            icon: mdi:washing-machine
            navigation_path: /homekit-infused/cleaning
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"     
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Climate
            label: Control
            icon: mdi:thermometer
            navigation_path: /homekit-infused/climate
            notification: "[[[ if (states['sensor.average_house_temperature'].state == 0) return '&nbsp'; else return `${states['sensor.average_house_temperature'].state}`; ]]]"
            background_color: "[[[ if (states['sensor.average_house_temperature'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Computers
            label: Overview
            icon: mdi:desktop-tower-monitor
            navigation_path: /homekit-infused/computers
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Covers
            label: Overview
            icon: mdi:window-shutter
            navigation_path: /homekit-infused/covers
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Devices
            label: Overview
            icon: mdi:power-plug
            navigation_path: /homekit-infused/devices
            notification: "[[[ if (states['sensor.current_devices_on'].state == 0) return '&nbsp'; else return `${states['sensor.current_devices_on'].state}`; ]]]"
            background_color: "[[[ if (states['sensor.current_devices_on'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"                                           
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Energy
            label: Overview
            icon: mdi:chart-line
            navigation_path: /homekit-infused/energy
            notification: "[[[ if (states['sensor.current_power_usage'].state == 0) return '&nbsp'; else return `${states['sensor.current_power_usage'].state}`; ]]]"
            background_color: "[[[ if (states['sensor.current_power_usage'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Floorplan
            label: Overview
            icon: mdi:floor-plan
            navigation_path: /homekit-infused/floorplan
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Lights
            label: Overview
            icon: mdi:floor-lamp
            navigation_path: /homekit-infused/lights
            notification: "[[[ if (states['sensor.current_lights_on'].state == 0) return '&nbsp'; else return `${states['sensor.current_lights_on'].state}`; ]]]"
            background_color: "[[[ if (states['sensor.current_lights_on'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Location
            label: Map
            icon: mdi:map-marker
            navigation_path: /homekit-infused/location
            notification: "[[[ if (states['group.device_status'].state == 0) return '&nbsp'; else return `${states['group.device_status'].state}`; ]]]"
            background_color: "[[[ if (states['group.device_status'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"                          
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Media
            label: Center
            icon: mdi:plex
            navigation_path: /homekit-infused/media
            notification: "[[[ if (states['sensor.media_players_playing'].state == 0) return '&nbsp'; else return `${states['sensor.media_players_playing'].state}`; ]]]"
            background_color: "[[[ if (states['sensor.media_players_playing'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Scenes
            label: Overview
            icon: mdi:arrange-send-backward
            navigation_path: /homekit-infused/scenes
            notification: "[[[ if (states['sensor.current_scenes_on'].state == 0) return '&nbsp'; else return `${states['sensor.current_scenes_on'].state}`; ]]]"
            background_color: "[[[ if (states['sensor.current_scenes_on'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Security
            label: Panel
            icon: mdi:cctv
            navigation_path: /homekit-infused/security
            notification: "[[[ if (states['sensor.current_sensors_on'].state == 0) return '&nbsp'; else return `${states['sensor.current_sensors_on'].state}`; ]]]"
            background_color: "[[[ if (states['sensor.current_sensors_on'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: System
            label: Overview
            icon: mdi:home-assistant
            navigation_path: /homekit-infused/system
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"                                             
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Traffic
            label: Information
            icon: mdi:waze
            navigation_path: /homekit-infused/traffic
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"        
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Vacuum
            label: Control
            icon: mdi:robot-vacuum
            navigation_path: /homekit-infused/vacuum
            notification: "[[[ if (states['vacuum.xiaomi_vacuum_cleaner'].state == 0) return '&nbsp'; else return `${states['vacuum.xiaomi_vacuum_cleaner'].state}`; ]]]"
            background_color: "[[[ if (states['vacuum.xiaomi_vacuum_cleaner'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"    
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Waste
            label: Collection
            icon: mdi:trash-can
            navigation_path: /homekit-infused/waste
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Weather
            label: Information
            icon: mdi:weather-partly-cloudy
            navigation_path: /homekit-infused/weather
            notification: "[[[ if (states['weather.dark_sky'].state == 0) return '&nbsp'; else return `${states['weather.dark_sky'].state}`; ]]]"
            background_color: "[[[ if (states['weather.dark_sky'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
    - !include ../../../base/includes/gap.yaml
```

