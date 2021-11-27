# Homekit Infused 2021.x.x

## Content
- [Introduction](../index.md)
- [Installation](../installation.md)
- [Configuration](../configuration.md)
- [Addons](../addons.md)
- [Custom Views](../custom_views.md)
- [Updates](../updates.md)
- [Issues & Questions](../issues.md)
- [About Me](../about.md)
- [Thanks](../thanks.md)

## Addons > Cameras

![Homekit Infused](../images/auto-fill-cameras-card.png)

This addon lets you add cards to your view with camera entities

To add devices to your view add the following line:

```yaml
# Example
  my_view:
    cameras:
```

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will remove the title entirely |
| columns | no | 3 | Define the number of columns this stack will use |
| aspect_ratio | no | 16x10 | Set an aspect ratio for all the cameras in this stack |
| entities | yes | list of entities | List all your entities you want to show up here |

### Cameras Extra Options
By default you must enter an array of entities like in the examples below, this does not need extra options.
You must define it as an object instead to make use of the options below. See examples.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | undefined | Set the entity used |
| aspect_ratio | no | 16x10 | Set a custom aspect_ratio for this camera |
| show_state | no | false | Choose to show the state of this camera |
| camera_view | no | false | Choose between `auto` or `live`. Live will make the card show a live view, note that this might be heavy on your resources, it is recommended to keep this set to `auto` unless you really want this |

Examples:

```yaml
# Example Basic
my_view:
  cameras:
    - title: Unifi Camera's
      entities:
        - camera.living_room
        - camera.bedroom
```
```yaml
# Example Multiple Stacks
my_view:
  cameras:
    - title: Unifi Camera's
      entities:
        - camera.living_room
        - camera.bedroom
    - title: Xiaomi Camera's
      entities:
        - camera.frontdoor
        - camera.kitchen
```
```yaml
# Example Custom
my_view:
  cameras:
    - title: Unifi Camera's
      entities:
        - entity: camera.living_room
          aspect_ratio: 4x3
        - entity: camera.bedroom
          camera_view: live
```
```yaml
# Example Mixed Basic with Custom
my_view:
  cameras:
    - title: Unifi Camera's
      entities:
        - entity: camera.living_room
          aspect_ratio: 4x3
        - camera.bedroom
```
```yaml
# Example stack options
my_view:
  cameras:
    - title: Unifi Camera's
      aspect_ratio: 16x9
      entities:
        - camera.living_room
        - camera.bedroom
```

#### Camera Tip
Since camera's are rendered before most other addons we can make really cool views. Having multiple camera's in a row on the desktop.
The example below will show all 4 camera's horizontally and below that a stack of buttons showing motion.
```yaml
# Example stack options
my_view:
  layout:
    max_cols: 4
  cameras:
    - entities:
        - camera.living_room
    - entities:
        - camera.bedroom
    - entities:
        - camera.frontdoor
    - entities:
        - camera.backyard
  devices:
    - title: Motion Sensors
      columns: 4
      entities:
        - binary_sensor.living_room
        - binary_sensor.bedroom
        - binary_sensor.frontdoor
        - binary_sensor.backyard
```
