# Homekit Infused 5

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

## Addons
Addons are baked-in preconfigured cards that you can turn on/off on any view. You can add an addon by adding the key to your view configuration (which is done in /hki-user/config/views.yaml). ALL addons are preconfigured with a vertical-stack and a title, you MUST keep this in mind when defining addons. Each addon has some extra options for the stack, so the first section of each addons documentation shows you those extra options.

You can control the placement of the addons by using the [layout](addons/layout.md) addon and/or by changing the order of defining your addons. The addons that are defined first will be rendered first. How to exactly configure an addon depends on the addon and you should read the addons specific documentation before adding them to your configuration.

```yaml
# views.yaml (example how to add addons)
  my_view:
    subtitle: Overview
    icon: mdi:thermostat
    addons:
      thermostat:
        - title: My thermostats
          entities:
            - # Thermostat addon config here!

  my_second_view:
    subtitle: Overview
    icon: mdi:vacuum-cleaner
    addons:
      button:
        - title: My lights
          entities:
            - # Button addon config here!
```
# Addons

| Name | Description |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [air_visual](addons/air-visual.md) | A nice looking air quality card |
| [areas](addons/areas.md) | A card that shows you room information *Coming Soon* |
| [battery](addons/battery.md) | An addon to give your view a battery levels overview |
| [button](addons/button.md) | The all powerful button-card, probably the only addon you'll ever need |
| [calendar](addons/calendar.md) | The default Calendar card |
| [camera](addons/camera.md) | An addon to add your camera's to a view |
| [custom](addons/custom.md) | The ultimate addon that allows any card or multitude of cards! |
| [energy](addons/energy.md) | Recreate the HA energy dashboard in lovelace |
| [entities](addons/entities.md) | An easy to use entities card |
| [favorites](addons/favorites.md) | Show a stack with shortcuts to your favorited views |
| [gauge](addons/gauge.md) | Show simple gauges for your entities |
| [glance](addons/glance.md) | An easy to use glance card |
| [google](addons/google.md) | A Google Home TTS card |
| [iframe](addons/iframe.md) | A handy iFrame card that you can use on your views |
| [history](addons/history.md) | This is the core HA graph card which you can use as an alternative to the graphs addon in HKI |
| [logbook](addons/logbook.md) | Keep track of your entities with a logbook |
| [map](addons/map.md) | A map to track your entities |
| [media_player](addons/media-player.md) | A Media Player addon |
| [menu](addons/menu.md) | Show the menu on other views than.... menu! |
| [meteoalarm](addons/meteoalarm.md) | A nice card to show you your weather alerts |
| [picture_elements](addons/picture-elements.md) | The core picture elements card for HKI |
| [plant_status](addons/plant-status.md) | Monitor your plants |
| [plex](addons/plex.md) | A very beautiful Plex addon |
| [remote_control](addons/remote-control.md) | A beautiful remote control for Nvidia Shield TV/Apple TV |
| [sensor](addons/sensor.md) | A core sensor card |
| [statistics](addons/statistics.md) | Create beautiful statistics graphs |
| [upcoming_media](addons/upcoming-media.md) | Show your upcoming and recently added media from your sonarr/radarr |
| [thermostat](addons/thermostat.md) | Thermostat buttons for your view |
| [weather](addons/weather.md) | The weather addon for HKI, choose between core or simple-weather |
| [xbox](addons/xbox.md) | An Xbox controller card |

### Advanced

Addons can be defined multiple times, this is particularly useful when you want for example a view with a button stack at the top, a map in the middle and another button stack at the bottom.

To define an extra addon of the same type in a single view you MUST add a suffix to the addon name, it doesn't matter what the name of the suffix is, as long as you use one. `addon_whatever:`

```yaml
# views.yaml (example of defining multiple addons of the same type)
  my_view:
    title: Location
    addons:
      button:
        - title: My Quicktoggles
          entities:
            - switch.phone
      button_2:
        - title: My second quicktoggles
          entities:
            - switch.iphone
      button_whatever:
        - title: Another button addon
          entities:
            - switch.galaxy
```

### Extra Information

What happened to the `simple_weather`, `devices`, `rooms`, `sun_card`, `find_my`, `layout`, `columns`, `mini-media-player`, `search` `vacuum` and `graph` addons that were present in HKI 4?

Well the reasoning can be found below:
- `sun_card`, `mini-media-player` and `graph` were addons that are either too large to template or unnecessary to add, you can still use them with the `custom:` addon, this allows for all their options to be unlocked and gives much much more customization.
- `find_my` and `layout` have NOT been removed but had its documentation moved to the configuration page instead.
- `columns` is redundant and rather confusing. Columns are now just set per addon instead.
- `devices` has been merged into the new `button:` addon.
- `rooms` has been reworked and is now called `areas:`.
- `simple_weather` has been merged with the `weather:` addon and can be found there.
- `search` is now integrated into the profile menu.
- `vacuum` is just too hard to template whilst there are so many great options already available. I suggest using the custom addon with a nice vacuum card (like Xiaomi Vacuum Card or Xiaomi Vacuum Map Card)
