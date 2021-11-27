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

## Addons > Glance Card

![Homekit Infused](../images/glance-card.png)

This addon gives your view a core glance card that fills automatically with your given entities.
This addon has no extra options.
To add this addon to your view add `glance_card:` in your view_config.

To add glance_card to your view add the following line:

```yaml
# Example
  my_view:
    glance_card:
```

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will remove the title entirely |
| entities | yes | list of entities | Set your entity/entities here, you can define more than one entity per card |
| show_name | no | true | Choose whether to show the name of the entity |
| show_icon | no | true | Choose whether to show the icon of the entity |
| show_state | no | true | Choose whether to show the state of the entity |
| columns | no | auto | Choose how many columns you want this card to have, if omitted than it will choose the column size automatically |
| state_color | no | true | Choose whether to show a different color when the state is `on`, just like a light button would show |

```yaml
# Example
  my_view:
    glance_card:
      - title: Waste Collection
        columns: 3
        show_name: false
        entities:
          - sensor.mijnafvalwijzer_gft
          - sensor.mijnafvalwijzer_papier
          - sensor.mijnafvalwijzer_restafval
``` 