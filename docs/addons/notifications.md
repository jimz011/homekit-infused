# Homekit Infused

Back to [Addon List](../addon_list.md)

# Notifications
![Homekit Infused](../images/notifications.png)

### Description
This card will show you live notifications in the subtitle part of the header (this only works on the frontpage). If you have multiple notifications, they will automatically slide and show you each notification for a few seconds. You could also swipe through them.

### Configuration
- Since this is part of the framework all you'd need to do is create a notification. See examples below.
- To create a notification you will have to open the following file `/homekit-infused/user/notifications.yaml`
- You will first need to create a conditional card and then put the notification card inside of it. The state of the defined condition will decide to show the notification or not. See examples below.

### Advanced

| Properties | Required | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| icon | yes | none | Sets an icon to show with the notification |
| name | yes | none | Sets the notification, note that on small screens you'll want to use short notifications, otherwise they'll be cut off! |
| spin | no | false | Sets if the icon should spin when showing the notification |

### Install
- To create a new notification all you have to do is create a new line in your notifications.yaml file and add the code you want.
- If you have multiple notifications just put them on a new line
- You can create a message that shows you that you have no notifications, to do this your conditions need to be the exact opposite of the standard notifications (see example below)

```
# example single notification
- type: conditional
  conditions:
    - entity: binary_sensor.smoke_sensor
      state: "on"
  card:
    !include
    - '../base/templates/header/notification-template.yaml'
    - icon: mdi:smoke-detector
      name: There is smoke detected in the Kitchen!!
      spin: true
```
```
# example multiple notifications

# Smoke Detector
- type: conditional
  conditions:
    - entity: binary_sensor.smoke_sensor
      state: "on"
  card:
    !include
    - '../base/templates/header/notification-template.yaml'
    - icon: mdi:smoke-detector
      name: There is smoke detected in the Kitchen!!
      spin: true

# Front Door
- type: conditional
  conditions:
    - entity: binary_sensor.front_door
      state: "on"
  card:
    !include
    - '../base/templates/header/notification-template.yaml'
    - icon: mdi:door
      name: The frontdoor is open!!
```

```
# example multiple notifications with an all clear notification

# All Clear
- type: conditional
  conditions:
    - entity: binary_sensor.smoke_sensor
      state: "off"
    - entity: binary_sensor.smoke_sensor
      state: "off"
  card:
    !include
    - '../base/templates/header/notification-template.yaml'
    - icon: mdi:check-box-outline
      name: All clear, no notifications.
      
# Smoke Detector
- type: conditional
  conditions:
    - entity: binary_sensor.smoke_sensor
      state: "on"
  card:
    !include
    - '../base/templates/header/notification-template.yaml'
    - icon: mdi:smoke-detector
      name: There is smoke detected in the Kitchen!!
      spin: true

# Front Door
- type: conditional
  conditions:
    - entity: binary_sensor.front_door
      state: "on"
  card:
    !include
    - '../base/templates/header/notification-template.yaml'
    - icon: mdi:door
      name: The frontdoor is open!!
```

### Extra Information
For more examples you can check out my personal notifications.yaml file [here](https://github.com/jimz011/homekit-infused/blob/personal/homekit-infused/user/notifications.yaml)
