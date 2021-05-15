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

## Layout

You can use this addon to change the layout of your view.

To add this addon to your view add `layout:` in your view_config.

```yaml
# Example
  my_view:
    layout:
```

Below are the settings you can use for your addons

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type | no | custom:horizontal-layout | Set the type of layout, choose between `custom:masonry-layout`, `custom:horizontal-layout`, `custom:vertical-layout` or `custom:grid-layout` |
| width | no | 300 | Size in pixels of each column |
| max_width | no | 500 | Maximum width of a card (1.5 \* `width` if specified, otherwise 500) |
| max_cols | no | 4 if sidebar is hidden, 3 if shown | Maximum number of columns to show |
| rtl | no | false | Place columns in right-to-left order, set to `true` if you want this |                                                                                         
| column_widths | no | undefined | A [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) specification of column widths |

```yaml
# Example
  my_view:
    layout:
      max_cols: 3
```
```yaml
# Example
  my_view:
    layout:
      max_cols: 3
      max_width: 100
```
```yaml
# Example
  my_view:
    layout:
      column_widths: 7fr;
      max_width: 100%
```