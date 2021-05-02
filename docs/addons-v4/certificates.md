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

## Addons > Certificates

![Homekit Infused](../images/certificates-card.png)

This addon gives your view a core entities card that fills automatically with your certificates.
This addon has no extra options.

To add this addon to your view add `certificates:` in your view_config.

To add certificates to your view add the following line:

```yaml
# Example
  my_view:
    certificates:
```

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | Entities | Set the title of the stack |
| show_title | no | true | Show or hide the stack title |

```yaml
# Example
  my_view:
    certificates:
      show_title: false
```              