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

## Addons > Upcoming Media

![Homekit Infused](../images/upcoming.png)

This addon gives your view an overview of upcoming movies/tv shows and recently added for your Plex/Sonarr/Radarr server.
This addon requires you to download and setup the following custom_components from HACS `Radarr Upcoming Media`, `Sonarr Upcoming Media` and `Plex Recently Added`.

To add this addon to your view add `upcoming_media:` in your view_config.

To add upcoming_media to your view add the following line:

```yaml
# Example
  my_view:
    upcoming_media:
```

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, omitting this line will hide the title entirely |
| entity | yes | undefined | Add the entity that should be used for this stack |

```yaml
# Example
  my_view:
    upcoming_media:
      - title: Recently Added TV
        entity: sensor.recently_added_tv
      - title: Recently Added Movies
        entity: sensor.recently_added_movies
      - title: Upcoming TV
        entity: sensor.sonarr_upcoming_media
      - title: Upcoming Movies
        entity: sensor.radarr_upcoming_media
```
