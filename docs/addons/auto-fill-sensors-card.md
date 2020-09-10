# Homekit Infused

Back to [Addon List](../addon_list.md)

# Auto Filled Sensor Card
* HKI Framework 3.0.1 or higher required

![Homekit Infused](../images/auto-fill-sensors-card.png)

### Description
This is an auto filled sensors card which you can use to sort sensors on different kind of views (see screenshot), you can use this card to show your temperature, humidity or pressure sensors, but also motion/door/window/gas and smoke sensors. Choose the view you want this addon on and paste it!

### Configuration
Open your `customize.yaml` file and add the following attribute to your sensor entities. If you don't have your entities in this file yet then you must create them first. The attribute you will need to add is depends on the type you want to use, you can set the following types:
```
type: temperature (for temperature sensors)
type: humidity (for humidity sensors)
type: pressure (for pressure sensors)
type: door (for doors)
type: window (for windows)
type: motion (for motion sensors)
type: gas (for gas sensors)
type: smoke (for smoke sensors)
```
Here is an example on how to set the types
```
sensor.living_room_temperature:
  friendly_name: Living Room
  type: temperature

binary_sensor.living_room_motion:
  friendly_name: Living Room
  type: motion
```
*note: an entity can not have two types, HKI auto filled cards work by filtering the type attribute. This means you can not have an entity auto filled on two views. You can however always create a custom button to do this.

### Advanced

| Parameters | Type | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type | String | none | Sets the type that needs to be auto-filled, use the same type as you have set in your customize.yaml file |
| columns | Integer | 3 | Sets the number of buttons stacked horizontally |
| sort | String | name | Sorts the cards in a different order, choose from: domain, entity_id, name, state, attribute, last_changed last_updated or last_triggered |

### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/climate/), you can name the file however you want (e.g. temperature-sensors-card.yaml)
- Copy the code below and make changes if needed

```
- !include
  - '../../../base/templates/auto-fill/auto-fill-sensors-template.yaml'
  - type: temperature
    columns: 3
    sort: name
```

