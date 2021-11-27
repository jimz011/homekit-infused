# Homekit Infused 2021.x.x

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

## Addons
Addons are baked-in preconfigured cards that you can turn on/off on any view. You can add an addon by adding the key to your view configuration (which is done in /hki-user/config/view_config.yaml). Unfortunately you can't select the location of the rendered card but in most cases it should look pretty fine. Below you will find a quick example of how to add an addon to your view.

*Note: Addons can be used together with custom_cards, however it might look a bit awkward on desktop browsers and tablets. It will work fine for phones. If you don't like this behaviour you must choose between either using addons or using custom_cards. There is no way for me to change this. Combining does however work fantastically when you use the view_selector addon. You can also set if custom_cards should be rendered before or after HKI addons.

```yaml
# Example
my_view:
  subtitle: Overview
  icon: mdi:thermostat
  climate:

my_second_view:
  subtitle: Overview
  icon: mdi:vacuum-cleaner
  vacuum:
    - entity: vacuum.rockrobo
      show_controls: true
```
# Available Addons

| Name | Description |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [battery](addons-v4/battery.md) | An addon to give your view a battery levels overview |
| [calendar](addons-v4/calendar.md) | The default Calendar card |
| [cameras](addons-v4/cameras.md) | An addon to add your camera's to a view |
| [columns](addons-v4/columns.md) | This addon helps you set columns for addons globally |
| [climate](addons-v4/climate.md) | Preset buttons for your climate view |
| [devices](addons-v4/devices.md) | All the auto-filling you probably need and want, this will create all the buttons for you |
| [energy](addons-v4/energy-cards.md) | Recreate the HA energy dashboard in lovelace |
| [entities_card](addons-v4/entities.md) | An easy to use entities card |
| [favorites](addons-v4/favorites.md) | Show a stack with shortcuts to your favorited views |
| [find_my](addons-v4/find-my.md) | An Apple inspired find_my addon |
| [gauge](addons-v4/gauge-card.md) | Show simple gauges for your entities |
| [glance_card](addons-v4/glance-card.md) | An easy to use glance card |
| [google_home](addons-v4/google-home.md) | A Google Home TTS card |
| [graphs](addons-v4/graphs.md) | The addon you need to show your graphs |
| [iframe](addons-v4/iframe.md) | A handy iFrame card that you can use on your views |
| [history](addons-v4/history-graph.md) | This is the core HA graph card which you can use as an alternative to the graphs addon in HKI |
| [layout](addons-v4/layout.md) | Change the views layout |
| [logbook](addons-v4/logbook-card.md) | Keep track of your entities with a logbook |
| [map](addons-v4/map.md) | A map to track your entities |
| [media_players](addons-v4/media-players.md) | A Media Player addon |
| [menu](addons-v4/menu.md) | Show the menu on other views than.... menu! |
| [persons](addons-v4/persons.md) | Person photo's and links to use on your view |
| [plant_status](addons-v4/plant-status.md) | Monitor your plants |
| [remote_control](addons-v4/remote-control.md) | A beautiful remote control for Nvidia Shield TV/Apple TV |
| [rooms](addons-v4/rooms.md) | Show a stack with shortcuts to your room views |
| [search](addons-v4/search-card.md) | A handy search card for your view to find entities quickly |
| [simple_weather](addons-v4/simple-weather.md) | A simple weather card |
| [statistics](addons-v4/statistics-graph.md) | Create beautiful statistics graphs |
| [upcoming_media](addons-v4/upcoming-media.md) | Show your upcoming and recently added media from your sonarr/radarr |
| [vacuum](addons-v4/vacuum.md) | Vacuum controls and fan speed |
| [view_selector](addons-v4/view-selector.md) | Create your own in view navigation bar |
| [weather](addons-v4/weather.md) | The core HA weather card |
| [xbox_controller](addons-v4/xbox-controller.md) | An Xbox controller card |

This list will grow with new addons in the future.

Looking for legacy v3 style addons? You can find them [here](addon_list.md), note that all the original auto-fill addons will no longer work!
