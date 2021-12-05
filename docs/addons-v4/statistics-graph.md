# Homekit Infused 2021.x.x

## Content
- [Introduction](../index.md)
- [Installation](../installation.md)
- [Configuration](../configuration.md)
- [Addons](../addons.md)
- [Splitting the Configuration](../splitting-the-config.md)
- [Updates](../updates.md)
- [Issues & Questions](../issues.md)
- [About Me](../about.md)
- [Thanks](../thanks.md)

## Addons > Statistics Graph

![Homekit Infused](../images/statistics.png)

This addon gives your view a core statistics graph card that shows the statistics of a given entity (or multiple entities).

To add this addon to your view add `statistics:` in your view_config.

To add statistics graph card to your view add the following line:

```yaml
# Example
  my_view:
    statistics:
```

*NOTE: You’re configuring a statistic but your card shows no data, but no errors? That’s caused by a bug in the integration providing the entity. Integrations need to configure their entities correctly so Home Assistant knows that we need to track statistics for it and how. Open an issue with the author of the integration and link them to https://developers.home-assistant.io/docs/core/entity/sensor#long-term-statistics. 

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will remove the title entirely |
| entities | yes | list of entities | Set your entity/entities here, you can define more than one entity per card |
| days_to_show | no | 30 | Set how many days you want the graph to show |
| chart_type | no | line | Set the type of chart style, you can choose between `line` and `bar` |
| stat_types | no | list of types | Set stat type(s) for this entity to show in your card, see example below. Choose between `min`, `max`, `mean`, and `sum` |

```yaml
# Example
  my_view:
    statistics:
      - title: Statistics
        days_to_show: 7
        entities:
          - sensor.unifi_gateway_mem
          - sensor.memory_use_percent
``` 
```yaml
# Example with stat types
  my_view:
    statistics:
      - title: Statistics
        days_to_show: 7
        entities:
          - sensor.unifi_gateway_mem
          - sensor.memory_use_percent
        stat_types:
          - min
          - max
          - mean
          - sum
```

![Homekit Infused](../images/statistics2.png)