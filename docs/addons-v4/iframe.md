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
| title | no | undefined | Set the title of the stack, ommitting this line will remove the title entirely |
| url | yes | undefined | Set your iFrame address here, note that if you use `https` to access your Home Assistant, your iFrame address must be `https` as well! |
| aspect_ratio | no | undefined | Set a custom aspect_ratio for this iFrame |

```yaml
# Example
  my_view:
    iframe: 
      - title: Windy
        url: https://embed.windy.com/
```
```yaml
# Example multiple iframes
  my_view:
    iframe: 
      - title: Windy
        url: https://embed.windy.com/
      - title: Buienradar
        url: https://embed.buienradar.nl/
```
