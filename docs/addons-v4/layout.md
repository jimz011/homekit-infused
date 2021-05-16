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
| type | no | custom:horizontal-layout | Set the type of layout, choose between `custom:masonry-layout`, `custom:horizontal-layout`, or `custom:vertical-layout` |
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

#### Layout Explanation
Layout Card in itself is much more powerful than I could template (and why would I?). You can perfectly use your own custom configured layout-card when setting the custom_card type to `advanced`. This way you can leverage ALL of the features layout-card has to offer which you can find [here](https://github.com/thomasloven/lovelace-layout-card/blob/master/README.md). But some of its features can be easily accessed through HKI's own configuration.

##### Masonry layout

The masonry layout immitates the default layout of lovelace.

- Each card is assigned a height based on their contents. One height unit corresponds to roughly 50 pixels, but this may vary.
- When a card is placed in the layout, it is put in the first column which has a total height of less than `min_height` units. \
  Otherwise it is put it the shortest column.

![Masonry Layout](https://user-images.githubusercontent.com/1299821/111067510-f2639100-84c4-11eb-9ce1-b40cf1f13772.png)

##### Horizontal layout

The horizontal layout will add each card to the next column, looping back to the first one when necessary:

![Horizontal Layout](https://user-images.githubusercontent.com/1299821/111067632-7453ba00-84c5-11eb-942c-88dab6d1f19b.png)

This is the default HKI layout!

##### Vertical layout

The vertical layout will add each card to the same column as the previous one.

![Vertical Layout](https://user-images.githubusercontent.com/1299821/111067990-17f19a00-84c7-11eb-905a-2c687e85e972.png)
