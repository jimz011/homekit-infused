# Homekit Infused 4.x.x

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](../addons.md)
- [Custom Views](custom_views.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

## Addons > iFrame

![Homekit Infused](../images/iframe-card.png)

This addon gives your view an iFrame card .
To add this addon to your view add `iframe:` in your view_config.

To add iframe to your view add the following line:

```yaml
# Example
  my_view:
    iframe:
```

You can use any of the following options to modify your addon.
| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | iFrame | Set the title of the stack |
| show_title | no | true | Show or hide the stack title |
| url | yes | undefined | Set your iFrame address here, note that if you use `https` to access your Home Assistant, your iFrame address must be `https` as well! |

```yaml
# Example
  my_view:
    iframe: 
      title: Windy
      url: https://windy.com
```