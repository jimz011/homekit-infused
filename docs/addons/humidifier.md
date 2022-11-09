# Homekit Infused 5

## Content
- [Introduction](../index.md)
- [Installation](../installation.md)
- [Configuration](../configuration.md)
- [Addons](../addons.md)
- [Updates](../updates.md)
- [Issues & Questions](../issues.md)
- [About Me](../about.md)
- [Thanks](../thanks.md)

## Addons > Humidifier

The Humidifier card lets you control and monitor humidifiers, dehumidifiers, and hygrostat devices.

You can use any of the following options to modify your addon.

### Stack Config

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will or setting `title: hide` will hide the title |
| columns | no | 3 | Define the number of columns this stack will use |
| [view_layout](layout.md#view-layout) | no | undefined | This is best used in conjunction with the [layout](layout.md#view-layout) addon, but can also be used to control whether to show this stack on different screen sizes. |
| conditional | no | false | Setting this to `true` will make the stack condtional |
| conditions | no | undefined | Add entities and conditions, this will determine when this addon will be shown, e.g. if entity x is turned `on`, then show this addon (see [addons](../addons.md) for examples |
| entities | yes | list of tiles | List all your tiles you want to show up here |

### Humidifier Extra Options

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | undefined | Set the entity of your humidifier |
| name | no | default entity name | Set a custom name for your humidifier |

```yaml
# views.yaml (example minimum)
  my_view:
    addons:
      humidifier:
        - title: My Humidifiers
          cards:
            - humidifier.living_room
            - humidifier.bedroom
            - humidifier.office
```
```yaml
# views.yaml (example extra options)
  my_view:
    addons:
      humidifier:
        - title: My Humidifiers
          cards:
            - entity: humidifier.living_room
              name: Living
            - entity: humidifier.bedroom
              name: The Room
              
```

### Images:

![Homekit Infused](https://www.home-assistant.io/images/dashboards/humidifier_card.png)