# Homekit Infused

Back to [Addon List](../addon_list.md)

# Vacuum Basic Controls (Any Vacuum)
*HKI Framework 3.0.5 or higher required

![Homekit Infused](../images/vacuum-controls-preset.png)

### Description
This is a card that has a few preset buttons to control your vacuum cleaner. It will has some nice effects as well. When the vacuum is turned on, the play button will turn green and blink, the same is true for pause and stop! cool huh?

### Configuration
- To use this you must have a vacuum entity setup (e.g. Xiaomi Roborock)
- If you use a Xiaomi Roborock and have Valetudo, I will suggest connecting your vacuum with the default miio integration in HA as well (they will both function at the same time)
```
# example configuration.yaml
vacuum:
  - platform: xiaomi_miio
    host: 192.168.0.xx
    token: !secret roborock_token
```

### Advanced

| Properties | Required | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | vacuum.xiaomi_vacuum_cleaner | Sets the camera entity of your map |
| name_start | no | Start | Change the name of this button |
| name_pause | no | Pause | Change the name of this button |
| name_stop | no | Stop | Change the name of this button |
| name_find_me | no | Find Me | Change the name of this button |
| icon_play | no | mdi:play-circle-outline | Change the icon of this button |
| icon_pause | no | mdi:pause-circle-outline | Change the icon of this button |
| icon_stop | no | mdi:stop-circle-outline | Change the icon of this button |
| icon_find_me | no | mdi:map-marker | Change the icon of this button |
| grid | no | default-hki-grid | Change the grid of the button, choose from `default-hki-grid`, `light-devices-grid`, `old-hki-grid` or `old-light-devices-grid` |

### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/vacuum/), you can name the file however you want (e.g. vacuum-live-map.yaml)
- Copy the code below and make changes if needed

```
- !include
  - '../../../base/templates/vacuum/controls.yaml'
  - entity: vacuum.xiaomi_vacuum_cleaner
    icon_find_me: mdi:map-marker
```
