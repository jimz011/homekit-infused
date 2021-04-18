# Homekit Infused

Back to [Addon List](../addon_list.md)

# Simple Weather Card
![Homekit Infused](../images/simple-weather-card.png)

### Description
This is a small and elegant (but simple) weather card.

### Requirements (HACS)

| Name | Type  | Description |
|----------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Simple Weather Card](https://github.com/kalkih/simple-weather-card) | Frontend | This is a small weather card, see screenshot for details |

### Resources
Add the following line to your lovelace resources 
```
/hacsfiles/simple-weather-card/simple-weather-card-bundle.js
```

### Configuration
- To use this you can simply change the entity and the name (which is the city name)
- Experienced users can play with the styles or the backdrop if they want
- For more options check the official documentation here https://github.com/kalkih/simple-weather-card

### Advanced

| Properties | Required | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | weather.dark_sky | Sets the weather entity used for this card |
| name | no | none | Sets the city name shown on the card |
| backdrop | no | false | Sets a backdrop for the card |
| tap_action | no | navigate | You can simply change the tap_action to navigate elsewhere or call a service just as you'd do with core HA lovelace cards |


### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/frontpage/), you can name the file however you want (e.g. weather-card.yaml)
- Copy the code below and make changes if needed

```
- type: custom:simple-weather-card                    
  style: |
    ha-card {
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      opacity: 0.8;
      font-size: 12px;
      font-family: var(--font-family);
    }                      
  entity: weather.dark_sky
  name: Eindhoven
  backdrop: false
  tap_action:
    action: navigate
    navigation_path: /homekit-infused/weather
```

### Layout card and horizontal/vertical stacks
I know the HA documentation has this perfectly explained already, but to make it easier on you I will try to explain in more detail [here](../addons/stacks.md)
