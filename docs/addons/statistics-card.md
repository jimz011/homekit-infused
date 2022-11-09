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

## Addons > Statistics Card

The Statistics card allows you to display a statistical value for an entity.

Statistics are gathered every 5 minutes for sensors that support it. It will either keep the min, max and mean of a sensors value for a specific period, or the sum for a metered entity.

If your sensor doesn’t work with statistics, check [this](https://www.home-assistant.io/more-info/statistics/).

### Stack Config

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will or setting `title: hide` will hide the title |
| days_to_show | no | 30 | Set how many days you want the graph to show |
| [view_layout](layout.md#view-layout) | no | undefined | This is best used in conjunction with the [layout](layout.md#view-layout) addon, but can also be used to control whether to show this stack on different screen sizes. |
| entities | yes | list of entities | Set your entity/entities here, you can define more than one entity per card |

### Statistic Extra Options

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | undefined | Set the entity used make sure to put `entity:` in the list and then the actual entity see example below |
| name | no | global_name | Set a custom name for this entity |
| unit | no | unit defined by entity | Unit of measurement given to data |
| stat_type | no | change | The statistics types to render. `min`, `max`, `mean`, `change` |
| period | no | month | The period to use for the calculation. See [here](https://www.home-assistant.io/dashboards/statistic/#options-for-period) how to use! |
| footer | no | undefined | Footer widget to render. See [footer documentation](https://www.home-assistant.io/dashboards/header-footer/). |

```yaml
# views.yaml (example)
  my_view:
    addons:
      statistics_card:
        - title: Stats
          entities:
            - sensor.unifi_gateway_mem
            - sensor.unraid_mem
``` 
```yaml
# views.yaml (example with stat types)
  my_view:
    addons:
      statistics_card:
        - title: Stats
          entities:
            - entity: sensor.unifi_gateway_mem
              stat_type: max
              period:
                calendar:
                  period: day
            - entity: sensor.unraid_mem
              stat_type: min
              period:
                calendar:
                  period: month
```

### Images:

![Homekit Infused](https://www.home-assistant.io/images/dashboards/statistic.png)
