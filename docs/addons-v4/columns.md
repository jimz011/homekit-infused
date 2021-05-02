# Homekit Infused 4.x.x

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Custom Views](custom_views.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

## Columns

Set the amount of columns for your views
To add this addon to your view add `columns:` in your view_config.

```yaml
# Example
  my_view:
    columns:
```

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| min_columns | no | 1 | Set the minimal columns for this view, this has no effect when custom_cards is set to `advanced` |
| max_columns | no | 3 | Set the maximum columns for this view, this has no effect when custom_cards is set to `advanced` |

Below are the settings you can use for your addons

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| battery | no | 3 | Set how many battery entities are shown horizontally |
| buttons | no | 3 | Set how many buttons are shown horizontally |
| cameras | no | 1 | Set how many camera cards are shown horizontally |
| graphs | no | 3 | Set how many graph cards are shown horizontally |
| media_players | no | 1 | Set how many media players are shown horizontally |
| persons | no | 2 | Set how many person cards are shown horizontally |
| persons_alt | no | 2 | Set how many person alt cards are shown horizontally |
| view_selector | no | 3 | Set how many buttons are shown horizontally |

```yaml
# Example
  my_view:
    columns:
      min_columns: 2
      buttons: 2
      cameras: 2
```