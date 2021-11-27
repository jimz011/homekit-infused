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

## Addons > Graphs

![Homekit Infused](../images/mini-graph-card.png)

This addon lets you auto-fill your views with some media_player entities.

To add graphs to your view add the following line:

```yaml
# Example
  my_view:
    graphs:
```

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will remove the title entirely |
| columns | no | 3 | Define the number of columns this stack will use |
| square | no | false | Set if the graphs should be square or not |
| entities | yes | list of entities | List all your entities you want to show up here |

Note: The stack config of this addon also accepts almost any of the options below, this is so that you don't have to define these configurations over and over again for each entity, see examples below!

### Graph Extra Options
You can pass any of the options below to your entity to customize the look and feel.

By default you must enter an array of entities like in the examples above. You must define it as an object instead to make use of the options below. See examples.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | undefined | Set the entity used, note that this addon only supports 1 single entity per graph, if you want to be able to use more, you must create this yourself as a custom_card! |
| type | no | default | Choose between `button` or `graph`, when setting this as a button it will show up as a button with a graph inside |
| hours_to_show | no | 24 | Sets the number of hours to show, when `type: button` this is by default 12 hours |
| points_per_hour | no | 2 | Sets the points measured per hour, when `type: button` this is by default 1 |
| line_width | no | 7 | Sets the line width, when `type: button` this is by default 9 |
| line_color | no | red | Choose any color you want, this can be a CSS name like `green` or `blue` |
| hour24 | no | true | Set to false if you prefer the 12 hour system |
| animate | no | true | Shows a small animation upon loading the graph |
| decimals | no | 1 | Sets the amount of decimals shown for this graph |
| graph_type | no | line | Select the appearance of the graph. Choose between `line` or `bar` |

The options below will ONLY work for `type: graph` and not for `type: button`!

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name | no | global_name | Set a name for this graph |
| icon | no | global_icon | Set an icon for this graph |
| show_icon | no | true | Show/hide the icon on the graph |
| fill | no | true | Fills the graph from the bottom |
| show_extrema | no | true | Show a lot of extra information |
| show_average | no | true | Show the average number for this graph |
| font_size | no | 53 | Adjust the font size of the state, as percentage of the original size |
| font_size_header | no | 9 | Adjust the font size of the header, size in pixels |
| height | no | 90 | Set a custom height of the line graph |

Examples:

```yaml
# Example Basic
living_room:
  graphs:
    - title: Temperature
      columns: 2
      entities:
        - sensor.living_room_temperature
        - sensor.kitchen_temperature
```
```yaml
# Example Basic Multiple Stacks
living_room:
  graphs:
    - title: Temperature
      entities:
        - sensor.living_room_temperature
        - sensor.kitchen_temperature
    - title: Humidity
      entities:
        - sensor.living_room_humidity
        - sensor.kitchen_humidity
```
```yaml
# Example Custom
living_room:
  graphs:
    - title: Temperature
      entities:
        - entity: sensor.living_room_temperature
          line_color: green
        - entity: sensor.kitchen_temperature
          decimals: 2
```
```yaml
# Example stack features
living_room:
  graphs:
    - title: Temperature
      line_color: cyan
      entities:
        - sensor.woonkamer
        - sensor.slaapkamer
        - sensor.kleine_kamer_temperatuur
    - title: Humidity
      line_color: purple
      entities:
        - sensor.woonkamer_2
        - sensor.slaapkamer_2
        - sensor.kleine_kamer_luchtvochtigheid
    - title: Pressure
      line_color: orange
      entities:
        - sensor.slaapkamer_3
        - sensor.badkamer_3
```
```yaml
# Example stack features as a button
living_room:
  graphs:
    - title: Temperature
      type: button
      line_color: cyan
      entities:
        - sensor.woonkamer
        - sensor.slaapkamer
        - sensor.kleine_kamer_temperatuur
    - title: Humidity
      type: button
      line_color: purple
      entities:
        - sensor.woonkamer_2
        - sensor.slaapkamer_2
        - sensor.kleine_kamer_luchtvochtigheid
    - title: Pressure
      type: button
      line_color: orange
      entities:
        - sensor.slaapkamer_3
        - sensor.badkamer_3
```

