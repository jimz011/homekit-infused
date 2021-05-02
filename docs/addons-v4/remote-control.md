# Homekit Infused 4.x.x

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](../addons.md)
- [Custom Views](custom_views.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

## Addons > Remote Control

![Homekit Infused](../images/remote-control.png)

This addon gives your view a remote control that is suitable for Android TV, it also works for Apple TV's though not all features are working yet.

To add this addon to your view add `remote_control:` in your view_config.
To add remote_control to your view add the following line:

```yaml
# Example
  my_view:
    remote_control:
```

You can use any of the following options to modify your addon.
| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | Entities | Set the title of the stack |
| show_title | no | true | Show or hide the stack title |
| media_player | yes | undefined | Set your media_player entity here, usually this is something like `media_player.shield_tv` or `media_player.kitchen_apple_tv` |
| sound_player | yes | undefined | If you have a separate sound player you can enter the entity here, else use the same entity as the media_player |
| remote_entity | yes | undefined | Set your entity that is used as the remote control (for Android TV you must use the same entity as the media_player) |
| type | no | undefined | Set to `atv` if you have an Apple TV, otherwise don't use this line |


```yaml
# Example Android TV
  my_view:
    remote_control:
      media_player: media_player.slaapkamer
      sound_player: media_player.slaapkamer
      remote_entity: remote.slaapkamer
```   
```yaml
# Example Apple TV
  my_view:
    remote_control:
      media_player: media_player.slaapkamer
      sound_player: media_player.slaapkamer
      remote_entity: remote.slaapkamer
      type: atv
```                