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

## Addons > Logbook Card

![Homekit Infused](../images/logbook.png)

This addon gives your view a core logbook card that shows the history of a given entity (or multiple entities), this can be useful for example when you want to track all the events of a given entity.
To add this addon to your view add `logbook:` in your view_config.

To add logbook card to your view add the following line:

```yaml
# Example
  my_view:
    logbook:
```

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will remove the title entirely |
| entities | yes | list of entities | Set your entity/entities here, you can define more than one entity per card |
| hours_to_show | no | 24 | Set how many hours you want the logbook card to show |

```yaml
# Example
  my_view:
    logbook:
      - title: Logbook
        hours_to_show: 12
        entities:
          - light.livingroom
          - switch.oven
``` 