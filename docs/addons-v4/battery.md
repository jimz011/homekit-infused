# Homekit Infused 4.x.x

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

## Addons > Battery

![Homekit Infused](../images/auto-fill-battery-card.png)

This addon gives your view a card that fills stacks with battery entities. This addon no longer fills the battery entities automatically and you must add them yourself.
This however does give you more control over how the view looks and which battery entities are used in each stack. It is also faster to render than the previous method.

To add this addon to your view add `battery:` in your view_config.

To add battery to your view add the following line:

```yaml
# Example
  my_view:
    battery:
```

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will remove the title entirely |
| columns | no | 3 | Define the number of columns this stack will use |
| entities | yes | list of entities | List all your entities you want to show up here |  

```yaml
# Example
  my_view:
    battery:
      - title: Hue Dimmers
        columns: 3
        entities:
          - sensor.hallway_hue_dimmer
          - sensor.kitchen_hue_dimmer
          - sensor.office_hue_dimmer
```
```yaml
# Example Multiple Stacks
  my_view:
    battery:
      - title: Hue Dimmers
        columns: 3
        entities:
          - sensor.hallway_hue_dimmer
          - sensor.kitchen_hue_dimmer
          - sensor.office_hue_dimmer
      - title: IKEA Dimmers
        entities:
          - sensor.office_tradfri_dimmer
          - sensor.bedroom_tradri_dimmer
          - sensor.living_room_tradfri_dimmer
```

#### Battery Extra Options
By default it will get the friendly_name from either the entity itself or when set from customize.yaml. You can however set your own friendly name here if you wanted to.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | undefined | Set the entity that should be used |
| name | no | undefined | Sets the name of this entity |

```yaml
# Example Extra Options
  my_view:
    battery:
      - title: Hue Dimmers
        entities:
          - entity: sensor.hallway_hue_dimmer
            name: Hallway
          - entity: sensor.kitchen_hue_dimmer
            name: Kitchen
          - entity: sensor.office_hue_dimmer
            name: Office
```
