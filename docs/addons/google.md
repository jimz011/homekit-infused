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

## Addons > Google

This addon gives your view a simple Google TTS card.

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will or setting `title: hide` will hide the title |
| speaker_group | no | undefined | Set a group entity (useful if you want to control multiple entities at once) |
| [view_layout](layout.md#view-layout) | no | undefined | This is best used in conjunction with the [layout](layout.md#view-layout) addon, but can also be used to control whether to show this stack on different screen sizes. |
| entities | yes | array | Add the entities you want in your stack, entities must be listed as an array and must be in the media_player domain |

```yaml
# views.yaml (example)
  my_view:
    addons:
      google: 
        - title: Google Home
          speaker_group: media_player.all_speakers
          entities:
            - media_player.badkamer_speaker
            - media_player.bijkeuken_speaker
            - media_player.woonkamer_speaker
```

### Images:

![Homekit Infused](../images/hki-google.png)
