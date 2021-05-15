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

## Columns

You can use this addon to set a few columns globally on your views, usually you would need to redefine the columns for each stack. This addon ensures you only need to set it once for an entire view.
Note that a stacks individual settings will always take priority over the global setting. This is done so that you can customize single stacks even with the global settings enabled.
If you are looking to change the view layout (which used to be here), then you should check out the `layout` addon.

To add this addon to your view add `columns:` in your view_config.

```yaml
# Example
  my_view:
    columns:
```

Below are the settings you can use for your addons

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| battery | no | 3 | Set how many battery entities are shown horizontally |
| buttons | no | 3 | Set how many buttons are shown horizontally |
| cameras | no | 1 | Set how many camera cards are shown horizontally |
| graphs | no | 3 | Set how many graph cards are shown horizontally |
| media_players | no | 1 | Set how many media players are shown horizontally |
| persons | no | 2 | Set how many person cards are shown horizontally |

```yaml
# Example
  my_view:
    columns:
      buttons: 2
      cameras: 2
```