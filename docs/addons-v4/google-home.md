# Homekit Infused 4.x.x

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Custom Views](custom_views.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

## Addons > Google Home

![Homekit Infused](../images/google-home-card.png)

This addon gives your view a simple Google Home TTS card.
To add this addon to your view add `google_home:` in your view_config.

To add google_home to your view add the following line:

```yaml
# Example
  my_view:
    google_home:
```

You can use any of the following options to modify your addon.
| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | Google Home | Set the title of the stack |
| show_title | no | true | Show or hide the stack title |
| all_speakers | no | undefined | Set your entity that has all speakers (you can set up speaker groups in Google Home) |
| entities | yes | array | Add the entities you want in your stack, entities must be listed as an array and must be in the media_player domain |

```yaml
# Example
  my_view:
    google_home: 
      all_speakers: media_player.all_speakers
      entities:
        - media_player.badkamer_speaker
        - media_player.bijkeuken_speaker
        - media_player.woonkamer_speaker
```