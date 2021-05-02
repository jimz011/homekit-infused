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
| 'object' | no | undefined | Set the title of the stack, the title is the name of your object |
| hide | no | undefined | If you want to hide the title of the stack add `.hide` to the object |
| entities | yes | array | Add the entities you want in your stack, entities must be listed as an array, you must define them directly after defining the category object |

```yaml
# Example
  my_view:
    upcoming_media:
      recently_added_tv:
        - sensor.recently_added_tv
      recently_added_movies:
        - sensor.recently_added_movies
      upcoming_tv:
        - sensor.sonarr_upcoming_media
      upcoming_movies.hide: # The title of this stack is hidden
        - sensor.radarr_upcoming_media
```