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

## Addons > Favorites

This addon gives your view a set of buttons with shortcuts to your favorite/most used views. It will ONLY show shortcuts to views that have the following line set:

```yaml
# views.yaml (example)
  my_view:
    show_in_favorites: true
```

You can use any of the following options to modify your addon. You MUST use at least one of the settings!

### Stack and Addon Config

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will or setting `title: hide` will hide the title |
| [view_layout](layout.md#view-layout) | no | undefined | This is best used in conjunction with the [layout](layout.md#view-layout) addon, but can also be used to control whether to show this stack on different screen sizes. |
| conditional | no | false | Setting this to `true` will make the stack condtional |
| conditions | no | undefined | Add entities and conditions, this will determine when this addon will be shown, e.g. if entity x is turned `on`, then show this addon (see [addons](../addons.md) for examples |
| columns | yes/no | 3 | Set how many buttons are shown horizontally |

```yaml
# views.yaml (example)
  my_view:
    addons:
      favorites:
        - title: Favorites
          columns: 3
```
```yaml
# views.yaml (example no title)
  my_view:
    addons:
      favorites:
        - columns: 3
# or
  my_view:
    addons:
      favorites:
        - title: hide
          columns: 3
```

### Images:

![Homekit Infused](../images/hki-favorites.png)
