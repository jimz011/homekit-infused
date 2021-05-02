# Homekit Infused 4.x.x

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](../addons.md)
- [Custom Views](custom_views.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

## Notifications

![Homekit Infused](../images/notifications.png)

You can setup your notifications by opening `/hki-user/notifications.yaml` the file already has an example for you to work with.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| icon | yes | none | Sets an icon to show with the notification |
| name | yes | none | Sets the notification, note that on small screens you'll want to use short notifications, otherwise they'll be cut off! |
| spin | no | false | Sets if the icon should spin when showing the notification |

To create a new notification all you have to do is create a new line in your notifications.yaml file and add the code you want.
You can create a message that shows you that you have no notifications, to do this your conditions need to be the exact opposite of the standard notifications (see example below)

```yaml
# Example single notification
- type: conditional
  conditions:
    - entity: binary_sensor.smoke_sensor
      state: "on"
  card:
    !include
    - '../hki-base/templates/header/notification-template.yaml'
    - icon: mdi:smoke-detector
      name: There is smoke detected in the Kitchen!!
      spin: true
```
```yaml
# Example multiple notifications

# Smoke Detector
- type: conditional
  conditions:
    - entity: binary_sensor.smoke_sensor
      state: "on"
  card:
    !include
    - '../hki-base/templates/header/notification-template.yaml'
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
    - '../hki-base/templates/header/notification-template.yaml'
    - icon: mdi:door
      name: The frontdoor is open!!
```
```yaml
# Example multiple notifications with an all clear notification

# All Clear
- type: conditional
  conditions:
    - entity: binary_sensor.smoke_sensor
      state: "off"
    - entity: binary_sensor.smoke_sensor
      state: "off"
  card:
    !include
    - '../hki-base/templates/header/notification-template.yaml'
    - icon: mdi:check-box-outline
      name: All clear, no notifications.
      
# Smoke Detector
- type: conditional
  conditions:
    - entity: binary_sensor.smoke_sensor
      state: "on"
  card:
    !include
    - '../hki-base/templates/header/notification-template.yaml'
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
    - '../hki-base/templates/header/notification-template.yaml'
    - icon: mdi:door
      name: The frontdoor is open!!
```
