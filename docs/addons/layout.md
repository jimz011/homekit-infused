# Homekit Infused 5

## Content
- [Introduction](../index.md)
- [Installation](../installation.md)
- [Configuration](../configuration.md)
- [Addons](../addons.md)
- [Updates](../updates.md)
- [Issues & Questions](../issues.md)
- [About Me](../about.md)
- [Thanks](../thanks.md)

## Layout

You can use this addon to change the layout of your view.

Below are some of the examples you can use, however this addon is REALLY AWESOME and you can use ALL options available to layout-card.
You should check out the [OFFICIAL DOCUMENTATION](https://github.com/thomasloven/lovelace-layout-card#layout-card-1)

The only difference in HKI is that you MUST define `layout:` in your view to use it. By default HKI uses `custom:masonry-layout` just like the default HA behaviour.


```yaml
# views.yaml (example)
  my_view:
    layout:
      layout_type: custom:horizontal-layout
      layout:
        max_cols: 3
```
```yaml
# views.yaml (example)
  my_view:
    layout:
      layout_type: custom:grid-layout
      layout:
        grid-template-columns: auto 43px
        grid-template-rows: min-content
        grid-template-areas: |
          "left right"
        mediaquery:
          "(min-width: 650px)":
            grid-template-columns: auto repeat(2, 43px)
            grid-template-areas: |
              "left center right"
```

## View layout

You can control where addons are placed/shown by adding a view_layout to their configuration. You can find documentation [HERE](https://github.com/thomasloven/lovelace-layout-card#card-layout-options)

You can also control whether or not to show an addon depending on screen size, you can find examples below:

```yaml
# views.yaml (example addon for specific screen size)
  my_view:
    title: My Lights
    addons:
      button:
        - title: Bedroom
          view_layout:
            show:
              mediaquery: "(min-width: 500px)"
          entities:
            - light.nightstand_1
            - light.nightstand_2
            - light.ceiling
```
```yaml
# views.yaml (example with layout addon defined, horizontal layout type)
  my_view:
    title: My Lights
    layout:
      layout_type: custom:horizontal-layout
      layout:
        max_cols: 5
    addons:
      button:
        - title: Bedroom
          view_layout:
            column: 3
          entities:
            - light.nightstand_1
            - light.nightstand_2
            - light.ceiling
```
```yaml
# views.yaml (example with layout addon defined, grid type)
  my_view:
    title: My Lights
    layout:
      layout_type: custom:grid-layout
      layout:
        grid-template-columns: auto 1fr
        grid-template-rows: min-content
        grid-template-areas: |
          "left right"
        mediaquery:
          "(min-width: 650px)":
            grid-template-columns: repeat(6, 43px)
            grid-template-areas: |
              "left left2 center center2 right right2"
    addons:
      button:
        - title: Bedroom
          view_layout:
            grid-area: right2
            show:
              mediaquery: "(min-width: 650px)"
          entities:
            - light.nightstand_1
            - light.nightstand_2
            - light.ceiling
```
