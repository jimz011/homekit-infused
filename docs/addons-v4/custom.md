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

## Custom

This addon is the ultimate addon for anyone wanting to do things that the included addons in HKI can not provide. Defining this addon in your config will allow you to use any card that is available for lovelace, these can be the official HA lovelace cards or any card from the HA community, it is absolutely all up to you.

A neat option to give your stack a title above the card is already baked into this addon which will shorten the code a lot for people that already have created custom views with the old `custom_cards:` addon. You can also choose to not show a title at all and make it more like the default HA would give you. This addon works superb with the `layout:` addon (this addon will receive an update with HKI 2021.12.3, so not all expected features are currently working!)

*Note: this addon is still experimental so there might be features not working correctly, if you find things please open an issue on github!
This has NOT been tested with lovelace_gen inside the config, but I figure that this will not be possible. This does NOT affect lovelace_gen templates as they will work as it did before.

To add this addon to your view add `custom:` in your view_config.

```yaml
# Example
  my_view:
    custom:
```

You can position the custom addon by adding `custom_position` to your view, this should be in the views general config and NOT within the custom addon! If you do not define this line, custom cards will ALWAYS be rendered AFTER HKI addons.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| custom_position | no | after | Change the location of rendering custom cards, you can choose between `before` and `after`, what it means is that it will render custom cards either before any of the HKI addons, or after any of the HKI addons |

```yaml
# Example
  my_view:
    custom_position: before
    custom:
```
Below are the settings you can use for your addons, Note that this addon is already a preprogrammed vertical-stack and thus each card will be rendered under the previous card. You can nest cards with other stack types like `horizontal-stack` or `grid` for example.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will remove the title entirely |
| position | no | after | Change the location of rendering this stack, you can choose between `before` and `after`, what it means is that it will render custom cards either before any of the HKI addons, or after any of the HKI addons, this can be configured separately for each stack. |
| cards | yes | list | Define all the cards you want. This accepts all cards with a valid configuration, for each cards configuration please refer to the original documentation of that specific card. |

**Tip:** If you want a title above each individual card, create a new stack for each of them, see the examples below.
**Note:** The examples below are with a markdown card, but this could be ANY card you want!
**Warning:** You can NOT use `# lovelace_gen` in the view_config, nor can you use it in any files refered to from the view_config. You can however refer to lovelace_gen templates if you so desire, as long as you don't put the line `# lovelace_gen` anywhere in any file that is refered to from the view_config.

```yaml
# Example (One stack with a title)
  my_view:
    custom: 
      - title: Title of this stack
        cards:
          - type: markdown
            content: "This new addon is amazing!"
```
```yaml
# Example (One stack with a title and nested stacks)
  my_view:
    custom: 
      - title: Title of this stack
        cards:
          - type: horizontal-stack
            cards:
              - type: markdown
                content: "This the left card"
              - type: markdown
                content: "This the right card"
```
**Reminder:** Cards within this mod are already in a vertical stack, so to make them render below the previous card all you would have to do is to add cards to the stack (no need to configure an extra vertical-stack)
```yaml
# Example (One stack with a title and multiple cards)
  my_view:
    custom: 
      - title: Title of this stack
        cards:
          - type: markdown
            content: "This the 1st and upper card"
          - type: markdown
            content: "This the 2nd and middle card"
          - type: markdown
            content: "This the 3rd and last card"
```
```yaml
# Example (One stack with a title and nested stacks and multiple cards)
  my_view:
    custom: 
      - title: Title of this stack
        cards:
          - type: horizontal-stack
            cards:
              - type: markdown
                content: "This the left card"
              - type: markdown
                content: "This the right card"
          - type: markdown
            content: "This the 1st and upper card"
          - type: markdown
            content: "This the 2nd and middle card"
          - type: markdown
            content: "This the 3rd and last card"
```
```yaml
# Example (Two stacks with a title)
  my_view:
    custom: 
      - title: First Stack
        cards:
          - type: markdown
            content: Hello
      - title: Second Stack
        cards:
          - type: markdown
            content: World!      
```
```yaml
# Example (Two stacks with titles, nested stacks and multiple cards)
  my_view:
    custom: 
      - title: Title of the first stack
        cards:
          - type: horizontal-stack
            cards:
              - type: markdown
                content: "This the left card"
              - type: markdown
                content: "This the right card"
          - type: markdown
            content: "This the 1st and upper card"
          - type: markdown
            content: "This the 2nd and middle card"
          - type: markdown
            content: "This the 3rd and last card"   
      - title: Title of the second stack
        cards:
          - type: horizontal-stack
            cards:
              - type: markdown
                content: "This the left card"
              - type: markdown
                content: "This the right card"
          - type: markdown
            content: "This the 1st and upper card"
          - type: markdown
            content: "This the 2nd and middle card"
          - type: markdown
            content: "This the 3rd and last card"   
```
```yaml
# Example (One stack, no title)
  my_view:
    custom: 
      - cards:
          - type: markdown
            content: Hello
          - type: markdown
            content: World!
```
```yaml
# Example (Two stacks, no titles)
  my_view:
    custom: 
      - cards:
          - type: markdown
            content: Hello
          - type: markdown
            content: World!
      - cards:
          - type: markdown
            content: How
          - type: markdown
            content: Are
          - type: markdown
            content: You?
```

## Migrate from custom_cards:
Migrating to the new custom addon is relatively simple, take the following steps if they apply to you:
- If you used multiple files in the past on the same view, make sure you create a single file and copy/paste all the separate files into a single file
- If you have any files with `# lovelace_gen` on the first line, you MUST remove this and any config that is dependent on it should be hardcoded! This does not affect templates since it does not require the file to have this line to use them.
- Give the file an easy to remember name and copy/cut it to `/hki-user/views/` (e.g. `/hki-user/views/laundry-room.yaml`)
- Refer to your file from within the view_config, see examples below

```yaml
# Example (Replace {your_folder} with your own folder name)
  my_view:
    custom:
      - cards:
          !include ../../hki-user/views/{your_file}.yaml
```
If you had previously set the custom_cards type to `advanced`, you must add a layout addon to your view, see example. You can instead also use advanced options like `custom:grid-layout` for a more advanced layout see [here](layout.md)

```yaml
# Example with advanced layout
  my_view:
    layout:
      type: advanced
    custom:
      - cards:
          !include ../../hki-user/views/{your_file}.yaml
```

*Note: Setting type to `advanced` will turn off all the features that the layout addon has to offer and will revert to the default Home Assistant layout. This means any other option you add to the `layout:` addon will be rendered useless. This will also render the title option unavailable, if you want a title on your stack you will have to create it yourself. Use at your own risk!

If you are migrating from the old `custom_cards:` addon, you will find that you no longer need to set a screen margin and no longer need to add a title. For your own convenience, I highly recommend migrating to the new style, you can still split the configuration up, you can see how to do that [here](../splitting-the-config.md).

The old `custom_cards:` addon will be deprecated soon with a planned obsolence for HKI 2022.1.1 however because of its experimental status it might be postponed to HKI 2022.2.1. You can however still read the old documentation [here](../custom_views.md).
