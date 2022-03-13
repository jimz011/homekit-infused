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

## Addons > Custom

This addon is the ultimate addon for anyone wanting to do things that the included addons in HKI can not provide. Defining this addon in your config will allow you to use any card that is available for lovelace, these can be the official HA lovelace cards or any card from the HA community, it is absolutely all up to you.

The custom addon is like all other addons preconfigured as a vertical-stack with a title card which can be hidden if needed.

### Stack Config

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will or setting `title: hide` will hide the title |
| [view_layout](layout.md#view-layout) | no | undefined | This is best used in conjunction with the [layout](layout.md#view-layout) addon, but can also be used to control whether to show this stack on different screen sizes. |
| type | no | undefined | Setting a type can make the stack condtional, this option will ONLY accept `conditional` |
| conditions | no | undefined | Add entities and conditions, this will determine when this addon will be shown, e.g. if entity x is turned `on`, then show this addon (see [addons](../addons.md) for examples |
| cards | yes | list | Define all the cards you want. This accepts all cards with a valid configuration, for each cards configuration please refer to the original documentation of that specific card. |

**Tip:** If you want a title above each individual card, create a new stack for each of them, see the examples below.
**Note:** The examples below are with a markdown card, but this could be ANY card you want!

```yaml
# views.yaml (example one stack)
  my_view:
    addons:
      custom: 
        - title: Title of this stack
          cards:
            - type: markdown
              content: "This new addon is amazing!"
```
```yaml
# views.yaml (example nested stacks)
  my_view:
    addons:
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
# views.yaml (example one stack with a title and multiple cards)
  my_view:
    addons:
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
# views.yaml (example one stack with a title, nested stacks and multiple cards)
  my_view:
    addons:
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
# views.yaml (example two stacks, two titles)
  my_view:
    addons:
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
# views.yaml (example two stacks with titles, nested stacks and multiple cards)
  my_view:
    addons:
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
# views.yaml (example one stack, no title)
  my_view:
    addons:
      custom: 
        - cards:
            - type: markdown
              content: Hello
            - type: markdown
              content: World!
# or
  my_view:
    addons:
      custom: 
        - title: hide
          cards:
            - type: markdown
              content: Hello
            - type: markdown
              content: World!
```
```yaml
# views.yaml (example two stacks, no titles)
  my_view:
    addons:
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

### What about styling?
You can add the default HKI style to any card quickly by adding two lines to your cards. This will set the card up to use most of the HKI styles. Some of them aren't in there but can be added separately. You must add the following to your card:

```yaml
card_mod:
  class: hki
```
```yaml
# views.yaml (example giving HKI style to a card)
  my_view:
    addons:
      custom: 
        - cards:
            - type: markdown
              card_mod:
                class: hki
              content: Hello
```
```yaml
# views.yaml (example giving HKI style to a card with custom styles)
  my_view:
    addons:
      custom: 
        - cards:
            - type: markdown
              card_mod:
                class: hki
                style: |
                  ha-card {
                    opacity: 0.4;
                  }
              content: Hello
```
