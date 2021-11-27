# Homekit Infused 2021.x.x

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

## Addons > Map

![Homekit Infused](../images/map-card.png)

This addon gives your view a map that you can use with your defined entities.

To add this addon to your view add `map:` in your view_config.
To add map to your view add the following line:

```yaml
# Example
  my_view:
    map:
```

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will remove the title entirely |
| default_zoom | no | default | Sets the default zoom, around 15 is probably what you will want for your setup |
| aspect_ratio | no | none | Sets an aspect ratio for your map |
| entities | yes | array | Add the entities you want in your stack, entities must be listed as an array |

```yaml
# Example
  my_view:
    map:
      - title: Location Stephanie
        default_zoom: 15
        aspect_ratio: 16x10
        entities:
          - person.stephanie
```              
```yaml
# Example multiple maps
  my_view:
    map:
      - title: Location Stephanie
        entities:
          - person.stephanie
      - title: Location Jimmy
        entities:
          - person.jimmy
```  
```yaml
# Example multiple entities on single map
  my_view:
    map:
      - title: Location
        entities:
          - person.stephanie
          - person.jimmy
          - person.tala
```  