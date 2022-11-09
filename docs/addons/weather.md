# Homekit Infused 5

## Content
- [Introduction](../index.md)
- [Installation](../installation.md)
- [Configuration](../configuration.md)
- [Addons](../addons.md)
- [Updates](../updates.md)
- [Issues & Questions](../issues.md)
- [About Me](../about.md)
- [Thanks](../thanks.md)

## Addons > Weather

This addon gives your view a simple but elegant weather forecast card.

### HACS Requirements

| Name | Type  | Description |
|----------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Simple Weather Card](https://github.com/kalkih/simple-weather-card) | Frontend | A simple weather card (only required if `type: simple_weather`) |

You can use any of the following options to modify your addon.

### Stack Config

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will or setting `title: hide` will hide the title |
| type | yes | core | Set the card type, either `core` or `simple_weather`, you MUST define this |
| entity | yes | undefined | Set your weather entity, this must be in the weather domain! |
| path | no | weather | Change the path the UI will navigate to when clicked, remember that you must have created the view you want to refer to |
|||||
| show_forecast | no | true | Show forecast (only works for `type: core`) |
| city_name | yes | undefined | Set your city name (only works for `type: simple_weather`) |
| backdrop | no | false | Sets a backdrop image (only works for `type: simple_weather`) |
| primary_info | no | undefined | Primary card information, one or more weather attributes |
| secondary_info | no | undefined | Secondary card information, one or more weather attributes |
| custom | no | undefined | Override weather information with custom sensors, see examples below (only works for `type: simple_weather`) |
| [view_layout](layout.md#view-layout) | no | undefined | This is best used in conjunction with the [layout](layout.md#view-layout) addon, but can also be used to control whether to show this stack on different screen sizes. |

### Weather attributes (simple-weather only)
| Name |  Description |
|------|--------------|
| extrema | Forecast high and low temperature |
| precipitation | Forecast precipitation |
| precipitation_probability | Probability of precipitation |
| humidity | Current humidity |
| wind_speed | Current wind speed |
| wind_bearing | Current wind direction |
| pressure | Current air pressure |

### Backdrop object options (simple-weather only)
See [Backdrop example](#backdrop-example) for example usage.

| Name | Type | Default | Description |
|------|------|---------|-------------|
| fade | boolean | `false` | Faded background.
| day | string | '#45aaf2' | Background color (Day).
| night | string | '#a55eea' | Background color (Night).
| text | string | 'var(--text-dark-color)' | Text color.

#### Custom option array
See [Custom example](#custom-sensors-example) for example usage.
Possible entries are: `temp`, `high`, `low`, `state`, `precipitation`, `humidity`, `icon-state`, `wind_speed`, `wind_bearing`, `pressure` & `precipitation_probability`.

```yaml
custom:
  - temp: sensor.home_temp
  - high: sensor.home_high_temp
  - low: sensor.home_low_temp
```

```yaml
# views.yaml (example core weather)
  my_view:
    addons:
      weather:
        - title: Core Weather
          type: core
          entity: weather.eindhoven
          show_forecast: false
          path: weather
```
```yaml
# views.yaml (example simple weather)
  my_view:
    addons:
      weather:
        - title: Simple Weather
          type: simple_weather
          entity: weather.eindhoven
          city_name: Eindhoven
          backdrop: true
          path: weather
```
```yaml
# views.yaml (example simple weather)
  my_view:
    addons:
      weather:
        - title: hide
          type: simple_weather
          entity: weather.eindhoven
          city_name: Eindhoven
          backdrop: true
          path: weather
          primary_info:
            - wind_bearing
            - humidity
          secondary_info:
            - precipitation
            - precipitation_probability
          custom:
            - temp: sensor.home_temp
            - high: sensor.home_high_temp
            - low: sensor.home_low_temp
```

### Images:

![Homekit Infused](../images/hki-weather-1.png)

![Homekit Infused](../images/hki-weather-2.png)
