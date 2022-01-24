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

## Layout

You can use this addon to change the layout of your view.

To add this addon to your view add `layout:` in your view_config.

```yaml
# Example
  my_view:
    layout:
```

Below are a few of the settings you can use for this addon. For the full documentation please refer to https://github.com/thomasloven/lovelace-layout-card. The options below are the most commonly used, but it does feature more options.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| layout_type | no | custom:horizontal-layout | Set the type of layout, choose between `advanced`, `custom:masonry-layout`, `custom:horizontal-layout`, `custom:vertical-layout` or `custom:grid-layout` |
| options | no | undefined | Set which options you want to give this layout |

*Note: Setting type to `advanced` will turn off all the features that the layout addon has to offer and will revert to the default Home Assistant layout. Since the view is in panel mode (this is just how HKI is programmed), this means a vertical stack where only the first card will be rendered. It is called advanced because you will have to know how to make use of a panel mode view! Use this feature at your own risk!

Below are some of the options that are available

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| width | no | 300 | Size in pixels of each column |
| max_width | no | 500 | Maximum width of a card (1.5 \* `width` if specified, otherwise 500) |
| max_cols | no | 4 if sidebar is hidden, 3 if shown | Maximum number of columns to show |
| rtl | no | false | Place columns in right-to-left order, set to `true` if you want this |                             
| column_widths | no | auto | Set how many columns this view will permanently show disregarding screensize and/or aspect ratio |                                                        
| grid- | no | undefined | A [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) specification of grid templates |

```yaml
# Example
  my_view:
    layout:
      options:
        - max_cols: 3
```
```yaml
# Example
  my_view:
    layout:
      layout_type: custom:vertical-layout
      options:
        - max_cols: 3
          max_width: 100
```
```yaml
# Example
  my_view:
    layout:
      options:
        - column_widths: 7fr
          max_width: 100%
```
```yaml
# Example with grid-template-columns
  my_view:
    layout:
      layout_type: custom:grid-layout
      options:
        - grid-template-columns: auto 30px 25%
          grid-template-rows: auto
          grid-template-areas: |
            "header header header"
            "main . sidebar"
            "footer footer footer"
          mediaquery:
            "(max-width: 600px)":
              grid-template-columns: 100%
              grid-template-areas: |
                "header"
                "sidebar"
                "main"
                "footer"
            "(max-width: 800px)":
              grid-template-columns: 50% 50%
              grid-template-areas: |
                "header sidebar"
                "main main"
                "footer footer"
```

**NOTE:** The leading hyphen is specific to HKI and although the official documentation is slightly different, for this to work properly with HKI you MUST use the leading hyphen.
The hyphen should be less prone to errors though. See examples below.

```yaml
# Official Documentation Example
type: custom:layout-card
layout_type: custom:grid-layout
layout:
  grid-template-columns: 70% 30%
  grid-template-rows: auto
  grid-template-areas: |
    "position1 position2"

# HKI Example with the same card above
  my_view:
    layout:
      layout_type: custom:grid-layout
      options:
        - grid-template-columns: 70% 30%
          grid-template-rows: auto
          grid-template-areas: |
            "position1 position2"

# HKI Example with hyphens for each option
  my_view:
    layout:
      layout_type: custom:grid-layout
      options:
        - grid-template-columns: 70% 30%
        - grid-template-rows: auto
        - grid-template-areas: |
            "position1 position2"
```
I know it sounds a little bit tedious since it deviates from the official documentation but for now this was the only way for me to implement this addon with the full options as opposed to pre HKI 2021.12.1 where only a few options were available.

### Layout Explanation
Layout Card in itself is much more powerful than I could template (and why would I?). You can perfectly use your own custom configured layout-card when setting the custom_card type to `advanced`. This way you can leverage ALL of the features layout-card has to offer which you can find [here](https://github.com/thomasloven/lovelace-layout-card/blob/master/README.md). But some of its features can be easily accessed through HKI's own configuration.

### Masonry layout

The masonry layout immitates the default layout of lovelace.

- Each card is assigned a height based on their contents. One height unit corresponds to roughly 50 pixels, but this may vary.
- When a card is placed in the layout, it is put in the first column which has a total height of less than `min_height` units. \
  Otherwise it is put it the shortest column.

![Masonry Layout](https://user-images.githubusercontent.com/1299821/111067510-f2639100-84c4-11eb-9ce1-b40cf1f13772.png)

### Horizontal layout

The horizontal layout will add each card to the next column, looping back to the first one when necessary, this is the default HKI layout!:

![Horizontal Layout](https://user-images.githubusercontent.com/1299821/111067632-7453ba00-84c5-11eb-942c-88dab6d1f19b.png)

### Vertical layout

The vertical layout will add each card to the same column as the previous one.

![Vertical Layout](https://user-images.githubusercontent.com/1299821/111067990-17f19a00-84c7-11eb-905a-2c687e85e972.png)

### Grid layout

The grid layout will give you full controll of your cards by leveraging [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).

The grid layout accepts any option starting with `grid-` that works for a Grid Container as well as `grid` and `place-items` and `place-content`.

Furthermore, the special option `mediaquery` can be used to set grid options depending on currently matched [@media rules](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp). This helps immensely in creating fully responsive layouts. \
Please see the example code accompanying the screen recording below. \
Note that only the first matching rule will be applied.

The grid layout accepts any css grid property starting with `grid-` that works for a Grid Item as well as `place-self`.

There's no point trying to list all `grid-` options here. Instead see the excellent guide linked above.

![Grid Layout](https://user-images.githubusercontent.com/1299821/111082577-4d1edc00-8509-11eb-80d1-2ecbdea7a085.gif)
