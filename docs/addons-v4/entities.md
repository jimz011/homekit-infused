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

## Addons > Entities Card

![Homekit Infused](../images/waste-collection-card.png)

This addon gives your view a core entities card that fills automatically with your given entities.
This addon has no extra options.
To add this addon to your view add `entities_card:` in your view_config.

To add entities_card to your view add the following line:

```yaml
# Example
  my_view:
    entities_card:
```

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will remove the title entirely |
| entities | yes | list of entities | Set your entity/entities here, you can define more than one entity per card |

```yaml
# Example
  my_view:
    entities_card:
      - title: Waste Collection
        entities:
          - sensor.mijnafvalwijzer_gft
          - sensor.mijnafvalwijzer_papier
          - sensor.mijnafvalwijzer_restafval
``` 

#### Entities Card Extra Options

Unfortunately the original entities card is so feature rich that it is virtually impossible to template this. So this card is meant to be basic and simple. You can only enter your entities and have a divider.
You can have as many entities_card as you want on a single view. When using a divider, make sure you quote the line or HKI will crash!

```yaml
# Example with divider
  my_view:
    entities_card:
      - title: Waste Collection
        entities:
          - sensor.mijnafvalwijzer_gft
          - 'type: divider'
          - sensor.mijnafvalwijzer_papier
          - sensor.mijnafvalwijzer_restafval
``` 
```yaml
# Example with multiple entities_cards
  my_view:
    entities_card:
      - title: Waste Collection
        entities:
          - sensor.mijnafvalwijzer_gft
          - sensor.mijnafvalwijzer_papier
          - sensor.mijnafvalwijzer_restafval
      - title: Sun
        entities:
          - sensor.sunrise
          - sensor.dark_mode
``` 