# Homekit Infused 2021.x.x

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

## Addons > Persons

![Homekit Infused](../images/frontpage-photo.png)

This addon gives your view photo's with information of your family members.

To add this addon to your view add `persons:` in your view_config.
To add persons to your view add the following line:

```yaml
# Example
  my_view:
    persons:
```

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will remove the title entirely |
| columns | no | 2 | Define the number of columns this stack will use |
| square | no | true | Set if the buttons should be square or not, this is useful when having different aspect_ratios |
| entities | yes | list of entities | List all your entities you want to show up here |

#### Persons Extra Options

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | person.john | Set your person entity here, this is required! |
| alignment | no | left | Set the alignment of the text |
| text_color | no | black | Set the color of the text |
| image_path | yes | /local/images/YOUR_IMAGE.png | Set the location of your persons photo/image, put this in your `/www/images` folder |
| phone_battery_sensor | no | undefined | Set your persons phone battery level entity here |
| travel_time_to_home | no | undefined | Set your persons travel time to home entity here (you must setup travel sensors for this to work) |
| travel_time_to_work | no | undefined | Set your persons travel time to work entity here (you must setup travel sensors for this to work) |
| path | no | undefined | Set a path for when you press the button, the name of the path is all that is needed (e.g. `location`, will take you to the `/homekit-infused/location` view |


```yaml
# Example
  my_view:
    persons:
      - columns: 2
        square: true
        entities:
          - entity: person.stephanie
            text_color: white
            image_path: /local/images/stephanie_small.png
            phone_battery_sensor: sensor.sm_n986b_batterijniveau
            travel_time_to_home: sensor.reistijd_stephanie
            travel_time_to_work: sensor.reistijd_stephanie_work
            path: stephanie_location
          - entity: person.jimmy
            alignment: right
            text_color: white
            image_path: /local/images/jimmy_small.png
            phone_battery_sensor: sensor.sm_n976b_battery_level
            travel_time_to_home: sensor.reistijd_jimmy
            travel_time_to_work: sensor.reistijd_jimmy_work
            path: jimmy_location
```      
```yaml
# Example 3 persons
  my_view:
    persons:
      - columns: 2
        square: true
        entities:
          - entity: person.stephanie
            text_color: white
            image_path: /local/images/stephanie_small.png
            phone_battery_sensor: sensor.sm_n986b_batterijniveau
            travel_time_to_home: sensor.reistijd_stephanie
            travel_time_to_work: sensor.reistijd_stephanie_work
            path: stephanie_location
          - entity: person.jimmy
            alignment: right
            text_color: white
            image_path: /local/images/jimmy_small.png
            phone_battery_sensor: sensor.sm_n976b_battery_level
            travel_time_to_home: sensor.reistijd_jimmy
            travel_time_to_work: sensor.reistijd_jimmy_work
            path: jimmy_location
      - columns: 1
        square: false
        entities:
          - entity: person.tala
            text_color: white
            image_path: /local/images/tala2.png
            path: tala
```   
```yaml
# Example 3 multiple stacks with different column sizes and title
  my_view:
    persons:
      - title: Adults
        columns: 3
        square: true
        entities:
          - entity: person.stephanie
            text_color: white
            image_path: /local/images/stephanie_small.png
            phone_battery_sensor: sensor.sm_n986b_batterijniveau
            travel_time_to_home: sensor.reistijd_stephanie
            travel_time_to_work: sensor.reistijd_stephanie_work
            path: stephanie_location
          - entity: person.jimmy
            alignment: right
            text_color: white
            image_path: /local/images/jimmy_small.png
            phone_battery_sensor: sensor.sm_n976b_battery_level
            travel_time_to_home: sensor.reistijd_jimmy
            travel_time_to_work: sensor.reistijd_jimmy_work
            path: johnny_location
          - entity: person.johnny
            alignment: right
            text_color: white
            image_path: /local/images/johnny_small.png
            phone_battery_sensor: sensor.sm_n976b_battery_level
            travel_time_to_home: sensor.reistijd_johnny
            travel_time_to_work: sensor.reistijd_johnny_work
            path: johnny_location
      - title: Kids
        columns: 2
        square: false
        entities:
          - entity: person.james
            text_color: white
            image_path: /local/images/tala2.png
            path: tala
          - entity: person.rachel
            text_color: white
            image_path: /local/images/rachel2.png
            path: rachel
```   
