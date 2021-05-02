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
| title | no | Entities | Set the title of the stack |
| show_title | no | true | Show or hide the stack title |
| entities | yes | array | Add the entities you want in your stack, entities must be listed as an array |

```yaml
# Example
  my_view:
    entities_card:
      entities:
        - switch.light_1
        - switch.light_2
        - switch.light_3
```              