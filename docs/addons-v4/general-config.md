# Homekit Infused 2021.x.x

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Splitting the Configuration](splitting-the-config.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

## General Config

This addon lets you auto-fill your views with camera entities

There are a few options you can set within the general config.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| margins | yes | 7px | Sets the amount of margins around each stack, this looks better to some people than the default HA style, the size MUST be in `px` |
| alarm | yes | see options below | Set the alarm entity used, by default HKI already gives you an alarm entity, which you have set the code for at the beginning of the setup |
| header | yes | see options below | You can change the header sensors here or turn them off completely |
| vacuum | yes | see options below | You can set your fan speed differences here, some vacuums use different names |
| popups | no | see options below | You can change the RGB popup that is shown for light entities here |

```yaml
  margins: 12px
```

#### Alarm Options

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | alarm_control_panel.home_alarm | Sets the alarm entity used |
| type | no | keypad | Choose the popup that is shown when pressing the lock icon on the frontpage, Choices are `keypad` and `toggles`, Toggles do NOT require any code to be entered to activate them! |

```yaml
# Default Settings
  alarm:
    entity: alarm_control_panel.home_alarm
    type: keypad
```

#### Header Options

You can add as little or as many sensors to the header as you want. I recommend that if you are using a phone that you do not set up more sensors than the size of your smallest phone in the household is capable of.
The greeting will be displaced when there is too little room. So even if it might look great for you, choose the smallest screen to build your UI from!

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| show_sensors | no | true | Sets to show/hide the header sensors that are in the top right corner |
| sensors | yes | list | Set the sensors to show in the header, the amount is unlimited as long as the length of your screen supports it |

#### Header Extra Options

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| icon | yes | unknown | Choose an icon to show in the header |
| entity | yes | unknown | Choose the entity that holds the number of devices that are `on`, you must have created this sensor yourself or use the ones from HKI's [device counters](device-counters.md) |
| group_entity | no | unkown | Choose the group that this entity belongs to, you must have create this sensor yourself or use the ones from HKI's [device counters](device-counters.md) |

```yaml
# Default Settings
  header:
    show_sensors: true 
    sensors: 
      - icon: mdi:door
        entity: sensor.current_doors_open
        group_entity: group.all_door_sensor_entities
      - icon: mdi:window-closed
        entity: sensor.current_windows_open
        group_entity: group.all_window_sensor_entities
      - icon: mdi:motion-sensor
        entity: sensor.current_binary_sensors_on
        group_entity: group.all_binary_sensor_entities
      - icon: mdi:power-plug
        entity: sensor.current_devices_on
        group_entity: group.all_device_switch_entities
      - icon: mdi:lightbulb
        entity: sensor.current_lights_on
        group_entity: group.all_light_entities
```

#### Vacuum Options

To make the vacuum addon work properly with HKI, HKI must know what fan speeds your vacuum is using. If your vacuum doesn't have fan speed control than you can skip this.
You must create a sensor first that reflects the correct fan speeds [documentation here](vacuum.md).

*Note: If you have a Xiaomi Roborock S5(5), flashed with Valetudo or Valetudo RE AND you have connected the vacuum with the `miio` integration to HA, chances are high that you don't need to touch these settings and just need to create the sensor.
*Note: It might be very well possible that connecting an unrooted Roborock S5(5) will result the same as the note above.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| min | yes | Silent | Set your vacuums minimum fan speed name or number |
| medium | yes | Standard | Set your vacuums medium fan speed name or number |
| high | yes | Medium | Set your vacuums high fan speed name or number |
| max | yes | Turbo | Set your vacuums max fan speed name or number |
| mop | no | Gentle | Set your vacuums mop fan speed name or number |

```yaml
# Default Settings
  vacuum:
    min: Silent
    medium: Standard
    high: Medium
    max: Turbo
    mop: Gentle
```
#### Popups Options

At this moment the only popup that is changeable is the RGB popup for the devices addon. You must have set your [devices](devices.md) `type: rgb` for these changes to have any effect on them!

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| slider_colored_by_light | no | true | Set if the slider should be the same color as the light |
| height | no | 410px | Set the height in `px` of the slider on the popup, it might be useful to lower this on smaller phones |
| width | no | 110px | Set the width in `px` of the slider on the popup |
| actions_per_row | no | 3 | Set the number of actions that should be shown horizontally |
| action_size | no | 30px | Set the size of the action button in `px` |
| rgb_popup | no | undefined | Set the action buttons, see options below |

#### Popups Extra Options

You can have as many actions as you want, as long as you define both rgb and hex colors!

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| rgb_color | yes | undefined | Set the RGB color of the action button, the format MUST be `[255, 136, 0]` |
| hex_color | yes | undefined | Set the HEX color of the action button, the format MUST be `'#ff8800'` |

```yaml
# Default Settings
  popups:
    slider_colored_by_light: true
    height: 410px
    width: 110px
    actions_per_row: 3
    action_size: 30px
    rgb_popup: 
      - rgb_color: [255, 136, 0]
        hex_color: '#ff8800'
      - rgb_color: [255, 0, 95]
        hex_color: '#ff005f'
      - rgb_color: [40, 255, 0]
        hex_color: '#28ff00'
      - rgb_color: [0, 160, 255]
        hex_color: '#00a0ff'
      - rgb_color: [131, 0, 255]
        hex_color: '#8300ff'
      - rgb_color: [3, 0, 255]
        hex_color: '#0300ff'
```
