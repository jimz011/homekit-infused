# Homekit Infused 4.x.x

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Custom Views](custom_views.md)
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
| vacuum | no | undefined | Adds vacuum controls to the view (see options below) |
| waze | no | undefined | Adds a waze traffic map to the view |

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

## Vacuum Addon
*By default only the entity is required
To use this addon put `vacuum:` into your views config

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | vacuum.rockrobo | Enter you vacuum entity |
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
