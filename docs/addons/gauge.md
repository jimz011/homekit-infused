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

## Addons > Gauge Card

This addon gives your view a core gauge card that shows a simple gauge for an entity (or multiple entities).

You can use any of the following options to modify your addon.

### Stack Config

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will or setting `title: hide` will hide the title |
| columns | no | 1 | Set the number of gauges this stack will show horizontally |
| [view_layout](layout.md#view-layout) | no | undefined | This is best used in conjunction with the [layout](layout.md#view-layout) addon, but can also be used to control whether to show this stack on different screen sizes. |
| conditional | no | false | Setting this to `true` will make the stack condtional |
| conditions | no | undefined | Add entities and conditions, this will determine when this addon will be shown, e.g. if entity x is turned `on`, then show this addon (see [addons](../addons.md) for examples |
| entities | yes | undefined | Set your entity/entities here, you can define more than one entity per card |

### Gauge Extra Options
The recommended method to change icons and/or friendly names is by the use of customize.yaml, however this is not always adequate enough for the customizations that we might want, you can pass any of the options below to your entity to customize the look and feel.

By default you must enter an array of entities like in the examples below, this does not need extra options and will just get the global name/icon.
You must define it as an object instead to make use of the options below. See examples.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | undefined | Set the entity used make sure to put `entity:` in the list and then the actual entity see example below |
| name | no | global_name | Set a custom name for this entity |
| unit | no | unit defined by entity | This will set the measurement unit this gauge |
| min | no | unit defined by entity | This will set the minimum number to show this gauge |
| max | no | unit defined by entity | This will set the maximum number to show this gauge |
| severity | no | undefined | You can have colors shown on different severities for this gauge, you MUST use all three option `red`, `yellow` and `green` (see example below) |
| needle | no | false | Show the gauge as a needle gauge. Required to be set to true, if using segments |
| segments | no | undefined | List of colors and their corresponding start values. Segments will override the severity settings. Needle required to be true. |

### Segments

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| from | yes | undefined | Value from which to start the color. |
| color | yes | undefined | Color of the segment, may be any CSS color declaration like “red”, “#0000FF” or “rgb(255, 120, 0)”. |
| label | no | undefined | Label of the segment. This will be shown instead of the value. |

CSS variables can be used (instead of CSS ‘#rrggbb’) for default gauge segment colors:

`var(--success-color)` for green color
`var(--warning-color)` for yellow color
`var(--error-color)` for red color
`var(--info-color)` for blue color


```yaml
# views.yaml (example)
  my_view:
    addons:
      gauge:
        - title: Gauges
          columns: 3
          entities:
            - sensor.unifi_gateway_mem
            - sensor.memory_use_percent
``` 
```yaml
# views.yaml (example with severity)
  my_view:
    addons:
      gauge:
        - title: Gauges
          columns: 2
          entities:
            - entity: sensor.unifi_gateway_mem
              name: UDM Memory
              severity:
                red: 90
                yellow: 60
                green: 10
```
```yaml
# views.yaml (example with segments)
  my_view:
    addons:
      gauge:
        - title: Gauges
          columns: 2
          entities:
            - entity: sensor.kitchen_humidity
              needle: true
              min: 20
              max: 80
              segments:
                - from: 0
                  color: '#db4437'
                - from: 35
                  color: '#ffa600'
                - from: 40
                  color: '#43a047'
                - from: 60
                  color: '#ffa600'
                - from: 65
                  color: '#db4437'
```

### Images:

![Homekit Infused](../images/hki-gauge.png)
![Homekit Infused](https://www.home-assistant.io/images/dashboards/gauge_card.gif)
![Homekit Infused](https://www.home-assistant.io/images/dashboards/gauge_segments.png)

