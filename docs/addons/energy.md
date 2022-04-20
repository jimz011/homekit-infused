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

## Addons > Energy

This addon gives your view a wide range of different core energy cards.

*NOTE: For more screenshots of what the options below look like, you can refer to the [official HA documentation](https://www.home-assistant.io/lovelace/energy/). This addon has quite a few different cards check them all out.

You can use any of the following options to modify your addon.

### Stack and Addon Config

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will or setting `title: hide` will hide the title |
| [view_layout](layout.md#view-layout) | no | undefined | This is best used in conjunction with the [layout](layout.md#view-layout) addon, but can also be used to control whether to show this stack on different screen sizes. |
| conditional | no | false | Setting this to `true` will make the stack condtional |
| conditions | no | undefined | Add entities and conditions, this will determine when this addon will be shown, e.g. if entity x is turned `on`, then show this addon (see [addons](../addons.md) for examples |
| energy-date-selection | no | undefined | Add this line to your config if you want to use this card with your addon |
| energy-usage-graph | no | undefined | Add this line to your config if you want to use this card with your addon |
| energy-solar-graph | no | undefined | Add this line to your config if you want to use this card with your addon |
| energy-gas-graph | no | undefined | Add this line to your config if you want to use this card with your addon |
| energy-sources-table | no | undefined | Add this line to your config if you want to use this card with your addon |
| energy-grid-neutrality-gauge | no | undefined | Add this line to your config if you want to use this card with your addon |
| energy-solar-consumed-gauge | no | undefined | Add this line to your config if you want to use this card with your addon |
| energy-carbon-consumed-gauge | no | undefined | Add this line to your config if you want to use this card with your addon |
| energy-devices-graph | no | undefined | Add this line to your config if you want to use this card with your addon |
| energy-distribution | no | undefined | Add this line to your config if you want to use this card with your addon |
| link_dashboard | no | false | Add this to your card to create a shortcut to your energy dashboard (this only works when using the `energy-distribution` type)

```yaml
# views.yaml (example)
  my_view:
    addons:
      energy:
        - title: Energy Date Select
          type: energy-date-selection
        - title: Energy Usage
          type: energy-usage-graph
``` 
```yaml
# views.yaml (example of everything)
  my_view:
    addons:
      energy:
        - title: Energy Date Select
          type: energy-date-selection
        - title: Energy Usage
          type: energy-usage-graph
        - title: Energy Solar
          type: energy-solar-graph
        - title: Energy Gas
          type: energy-gas-graph
        - title: Energy Distribution with link
          type: energy-distribution
          link_dashboard: true
        - title: Energy Distribution without link
          type: energy-distribution
        - title: Energy Sources
          type: energy-sources-table
        - title: Grid Neutrality
          type: energy-grid-neutrality-gauge
        - title: Solar Consumed
          type: energy-solar-consumed-gauge
        - title: Carbon Consumed
          type: energy-carbon-consumed-gauge
        - title: Energy Devices
          type: energy-devices-graph
```
```yaml
# views.yaml (example no title)
  my_view:
    addons:
      energy:
        - type: energy-date-selection
# or
  my_view:
    addons:
      energy:
        - title: hide
          type: energy-date-selection
```

### Images:

![Homekit Infused](../images/hki-energy-1.png)

![Homekit Infused](../images/hki-energy-2.png)

![Homekit Infused](../images/hki-energy-3.png)
