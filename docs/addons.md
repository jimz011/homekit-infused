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

# How to?
Addons are baked in preconfigured cards that you can turn on/off on any view. The beta only has a few addons, but more will be added in the future. You can add an addon by adding the key to your view configuration (which is done in /hki-user/config/view_config.yaml)

Looking for legacy v3 style addons? You can find them [here](legacy_addons.md), note that all the original auto-fill addons will no longer work!

```
# Example
my_view:
  subtitle: Overview
  icon: mdi:thermostat
  climate:

my_second_view:
  subtitle: Overview
  icon: mdi:vacuum-cleaner
  vacuum:
    entity: vacuum.rockrobo
    show_controls: true
```
# Available Addons

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| climate | no | undefined | Set to true to give the view preset climate buttons (see options below) |
| map | no | undefined | Set to true to show a map with all the persons in the house |
| search_card | no | undefined | Set to add a search card to the top of the view |
| vacuum | no | undefined | Adds vacuum controls to the view (see options below) |
| waze | no | undefined | Adds a waze traffic map to the view |
| weather | no | undefined | Adds a forecast card and/or windy map to the view |

# Addon Details

## Climate Addon
*By default none of the extra options are required
To use this addon put `climate:` into your views config

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| power_name_on | no | Power | Name of the `turn_on` power button |
| power_label_on | no | All On | Label of the `turn_on` power button |
| power_icon_on | no | mdi:power | The icon of the `turn_on` power button |
| frost_protection_name | no | Frost | Name of the frost_protection button |
| frost_protection_label | no | Protection | Label of the frost_protection button |
| frost_protection_icon | no | mdi:snowflake-melt | Icon of the frost_protection button |
| frost_protection_temperature | no | 11 | | preset temperature of the frost_protection button |
| heat_all_name | no | Heat | Name of the heat_all button |
| heat_all_label | no | All | Label of the heat_all button |
| heat_all_icon | no | mdi:fire | Icon of the heat_all button |
| heat_all_temperature | no | 22 | Preset temperature of the heat_all button |
| power_name_on | no | Power | Name of the `turn_off` power button |
| power_label_off | no | All Off | Label of the `turn_off` power button |
| power_icon_off | no | mdi:power | The icon of the `turn_off` power button |

Examples:
```
# Example minimum
my_view:
  icon: mdi:thermostat
  climate:
```
```
# Example with extra keys
my_view:
  icon: mdi:thermostat
  climate:
    power_name_on: Aan
```
## Map Addon
To use this addon put `map:` into your views config, for now no extra options to configure.
```
# Example
my_view:
  icon: mdi:map-marker
  map: 
```

## Search Card Addon
To use this addon put `search_card:` into your views config. No extra options to configure.
```
# Example
my_view:
  icon: mdi:map-marker
  search_card: 
```

## Vacuum Addon
*By default only the entity is required
To use this addon put `vacuum:` into your views config

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | vacuum.rockrobo | Enter your vacuum entity |
| show_controls | no | undefined/true | Set to false if you want to hide the controls |

Examples:
```
# Example minimum
my_view:
  icon: mdi:robot-vacuum
  vacuum:
    entity: vacuum.rockrobo
```
```
# Example with extra keys
my_view:
  icon: mdi:robot-vacuum
  vacuum:
    entity: vacuum.rockrobo
    show_controls: false
```

## Waze Addon
To use this addon put `waze:` into your views config. No extra options to configure.
```
# Example
my_view:
  icon: mdi:map-marker
  waze: 
```

## Weather Addon
To use this addon put `weather:` into your views config. You must at least set OR `entity` and `city_name` OR `windy_url`, you can use them together if you want!.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes/no | weather.dark_sky | Enter your weather entity, this must be a weather entity and not a sensor e.g. `weather.dark_sky` |
| city_name | yes/no | undefined | Set your city name to show on the card |
| windy_url | yes/no | Set a nice windy iframe for your view, you must add an URL in this field, you can create your own URL by visiting [this website](https://www.windy.com/-Embed-widget-on-page/widgets?) |

```
# Example
my_view:
  icon: mdi:map-marker
  weather:
    entity: weather.eindhoven
    city_name: Eindhoven
    windy_url: YOUR WINDY URL
```
