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

## Addons > Rooms

This addon gives your view a rooms button stack with all your favorite views, for this to work properly you must set `type: room` on each view that you want in this stack.
To add this addon to your view add `rooms:` in your view_config.

To add favorites to your view add the following line:

```yaml
# Example
  my_view:
    rooms:
```

In the views you want this addon to show make sure you set `type: room`

```yaml
# Example
  my_favorite_view:
    type: room
```
This addon will then create a shortcut to that view. You can put the rooms addon anywhere you want and it will always show shortcuts to your rooms. It is recommended to use this on your frontpage and/or menu views.

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | Favorites | Set the title of the stack |
| show_title | no | true | Show or hide the stack title |

```yaml
# Example
  my_view:
    rooms:
      show_title: false
```