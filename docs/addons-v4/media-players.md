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

## Addons > Media Players

![Homekit Infused](../images/auto-fill-media-players-card.png)

This addon lets you auto-fill your views with some media_player entities.

To add media_players to your view add the following line:

```yaml
# Example
  my_view:
    media_players:
```

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will remove the title entirely |
| columns | no | 1 | Define the number of columns this stack will use |
| square | no | false | Set if the media_players should be square or not |
| entities | yes | list of entities | List all your entities you want to show up here |

### Media Players Extra Options
You can pass any of the options below to your entity to customize the look and feel.

By default you must enter an array of entities like in the examples above. You must define it as an object instead to make use of the options below. See examples.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | undefined | Set the entity used |
| type | no | default | Choose between `default` HA media-player or `mini-media-player` |
| name | no | global_name | Set a name for this media-player |

The options below can ONLY be used when the type is set to `mini-media-player`!

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| icon | no | undefined | Specify a custom icon from any of the available mdi icons |
| artwork | no | undefined | `cover` to display current artwork in the card background, `full-cover` to display full artwork, `material` for alternate artwork display with dynamic colors, `none` to hide artwork, `full-cover-fit` for full cover without cropping |
| source | no | undefined | Change source select appearance, `icon` for just an icon, `full` for the full source name |
| sound_mode | no | undefined | Change sound mode select appearance, `icon` for just an icon, `full` for the full sound mode name |
| info | no | undefined | Change how the media information is displayed, `short` to limit media information to one row, `scroll` to scroll overflowing media info |
| volume_stateless | no | false | Swap out the volume slider for volume up & down buttons |
| volume_step | no | 10 | Change the volume step size of the volume buttons and the volume slider (number between 1 - 100) |
| max_volume | no | 1 | Specify the max vol limit of the volume slider (number between 1 - 100) |
| min_volume | no | 100 | Specify the min vol limit of the volume slider (number between 1 - 100) |
| replace_mute | no | false | Replace the mute button, available options are `play_pause` (previously `play`), `stop`, `play_stop`, `next` |
| toggle_power | no | true | Set to `false` to change the power button behaviour to `media_player.turn_on`/`media_player.turn_off` |
| background | no | undefined | Background image, specify the image url e.g. `"/local/background-img.png"` |
| scale | no | 1 | UI scale modifier, default is `1` |

Examples:

```yaml
# Example Basic
living_room:
  media_players:
    - title: Spotify
      entities:
        - media_player.spotify_stephanie
        - media_player.spotify_jimmy
```
```yaml
# Example Basic Multiple Stacks
living_room:
  media_players:
    - title: Spotify
      entities:
        - media_player.spotify_stephanie
        - media_player.spotify_jimmy
    - title: TV's
      entities:
        - media_player.samsung_tv
        - media_player.philips_tv
```
```yaml
# Example Custom
living_room:
  media_players:
    - title: Spotify
      entities:
        - entity: media_player.spotify_stephanie
          name: Spotify Stephanie
        - entity: media_player.spotify_jimmy
          type: mini-media-player
          volume_stateless: true
          max_volume: 80
```
```yaml
# Example Mixed Basic with Custom
living_room:
  media_players:
    - title: Living Room
      entities:
        - media_player.samsung_tv
        - media_player.nvidia_shield
        - entity: media_player.spotify_stephanie
          name: Spotify Stephanie
        - entity: media_player.spotify_jimmy
          type: mini-media-player
          volume_stateless: true
          max_volume: 80
```
