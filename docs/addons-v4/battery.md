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

## Addons > Battery

![Homekit Infused](../images/auto-fill-battery-card.png)

This addon gives your view a card that fills automatically with your battery levels.
This addon has no extra options.

To add this addon to your view add `battery:` in your view_config.

To add battery to your view add the following line:

```yaml
# Example
  my_view:
    battery:
```

You can use any of the following options to modify your addon.
| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | Entities | Set the title of the stack |
| show_title | no | true | Show or hide the stack title |

```yaml
# Example
  my_view:
    battery:
      show_title: false
```              