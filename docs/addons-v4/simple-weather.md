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

## Addons > Simple Weather

![Homekit Infused](../images/simple-weather-card.png)

This addon gives your view a weather forecast card.
To add this addon to your view add `simple_weather:` in your view_config.

To add devices to your view add the following line:

```yaml
# Example
  my_view:
    simple_weather:
```

This card has no Title unlike other addons since this addon was meant to be used on the frontpage, you can also set a core weather card as a replacement to this if you prefer.

You can use any of the following options to modify your addon.
| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | undefined | Set your weather entity, this must be in the weather domain! |
| city_name | yes | undefined | Set your city name |
| backdrop | no | false | Sets a backdrop image for the simple weather card |
| path | no | weather | Change the path the card takes to you when clicked |

```yaml
# Example
  my_view:
    simple_weather: 
      entity: weather.dark_sky
      city_name: Eindhoven
      backdrop: true
      path: climate
```