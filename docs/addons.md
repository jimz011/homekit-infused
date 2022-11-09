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
| [area_card](addons/area-card.md) *new* | A HA core card that shows you area/room information |
| [battery](addons/battery.md) | An addon to give your view a battery levels overview |
| [button](addons/button.md) | The all powerful button-card, probably the only addon you'll ever need |
| [calendar](addons/calendar.md) | The default Calendar card |
| [camera](addons/camera.md) | An addon to add your camera's to a view |
| [custom](addons/custom.md) | The ultimate addon that allows any card or multitude of cards! |
| [energy](addons/energy.md) *updated* | Recreate the HA energy dashboard in lovelace |
| [entities](addons/entities.md) | An easy to use entities card |
| [favorites](addons/favorites.md) | Show a stack with shortcuts to your favorited views |
| [gauge](addons/gauge.md) *updated* | Show simple gauges for your entities |
| [glance](addons/glance.md) | An easy to use glance card |
| [google](addons/google.md) | A Google Home TTS card |
| [humidifier](addons/humidifier.md) *new* | Core humidifier card |
| [history](addons/history.md) | This is the core HA graph card which you can use as an alternative to the graphs addon in HKI |
| [iframe](addons/iframe.md) | A handy iFrame card that you can use on your views |
| [logbook](addons/logbook.md) | Keep track of your entities with a logbook |
| [markdown](addons/markdown.md) *new* | The core markdown card with all its features available |
| [map](addons/map.md) | A map to track your entities |
| [media_player](addons/media-player.md) | A Media Player addon |
| [menu](addons/menu.md) | Show the menu on other views than.... menu! |
| [meteoalarm](addons/meteoalarm.md) | A nice card to show you your weather alerts |
| [picture_elements](addons/picture-elements.md) | The core picture elements card for HKI |
| [plant_status](addons/plant-status.md) | Monitor your plants |
| [plex](addons/plex.md) | A very beautiful Plex addon |
| [remote_control](addons/remote-control.md) | A beautiful remote control for Nvidia Shield TV/Apple TV |
| [sensor](addons/sensor.md) | A core sensor card |
| [shopping_list](addons/shopping-list.md) *new* | A simple shopping list for use on your views |
| [statistics_card](addons/statistics-card.md) *new* | The newly introduced core statistics card |
| [statistics_graph](addons/statistics-graph.md) *renamed* | Create beautiful statistics graphs |
| [sun_card](addons/sun-card.md) | A beautiful sun elevation card |
| [tile](addons/tile.md) *new* | A handy tile card |
| [upcoming_media](addons/upcoming-media.md) | Show your upcoming and recently added media from your sonarr/radarr |
| [thermostat](addons/thermostat.md) *updated* | Thermostat buttons for your view |
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

Addons can also be conditional depending on a state of an entity!

```yaml
# views.yaml (example of defining multiple addons of the same type)
  my_view:
    title: Location
    addons:
      button:
        - title: This will only show when Jimmy is home
          conditional: true
          conditions:
            - entity: person.jimmy
              state: "home"
          entities:
            - switch.phone
      button_2:
        - title: This will only show when Jimmy AND Stephanie are home
          conditional: true
          conditions:
            - entity: person.jimmy
              state: "home"
            - entity: person.stephanie
              state: "home"
          entities:
            - switch.iphone
      button_3:
        - title: This will only show when Jimmy is NOT home AND Stephanie IS home
          conditional: true
          conditions:
            - entity: person.jimmy
              state_not: "home"
            - entity: person.stephanie
              state: "home"
          entities:
            - switch.iphone
```
