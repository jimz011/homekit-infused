# Homekit Infused

Back to [Addon List](../addon_list.md)

# Frontpage Photo
*HKI Framework 3.0.2 or higher required

![Homekit Infused](../images/frontpage-photo.png)

### Description
This is the default HKI frontpage person tracker, it is used on the frontpage (but can be used anywhere ofcourse)

### Configuration
For this card to work properly you must setup a waze sensor to do that you must create zones first (this can be done through the UI by clicking on the map in the sidebar, else read instructions here https://www.home-assistant.io/integrations/zone/)
Once you've set this up we can add a waze sensor, example below:
```
sensor:
  - platform: waze_travel_time
    name: Travel Time to Home Jimmy
    origin: person.jimmy
    destination: zone.home
    region: EU

  - platform: waze_travel_time
    name: Travel Time to Work Jimmy
    origin: person.jimmy
    destination: zone.work
    region: EU
```

### Advanced
| Parameters | Type | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| person | String | none | Sets the person entity for this card |
| image_path | String | none | Sets the location of the image used on this card |
| navigation_path | String | none | You can choose between: `person_1, person_2, person_3 and person_4`, there are only 4 dedicated views for persons, to rename the person view header text you will need to edit the `/user/config/header_config.yaml` file! |
| alignment | String | left | Sets the alignment of the text and icons, choose from left or right (my advice would be to use left for the left photo and right for the right photo (if you use more than one) |
| text_color | String | white | Sets the text color within the card |
| phone_battery_sensor | String | none | Enter the phone battery sensor of this person (this is required!) |
| travel_time_to_home | String | none | Enter the sensor that shows you the travel time to home (this is required!) |
| travel_time_to_work | String | none | Enter the sensor that shows you the travel time to work (this is required!) |

### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/frontpage/), you can name the file however you want (e.g.frontpage-photos-card.yaml)
- Copy the code below and make changes if needed

```
- type: horizontal-stack
  cards:
    - !include ../../../base/includes/gap.yaml
    - !include
      - '../../../base/templates/picture-elements/frontpage-photo.yaml'
      - person: person.stephanie
        image_path: /local/images/jimmy_small.png
        navigation_path: person_1
        alignment: left
        text_color: white
        phone_battery_sensor: sensor.iphone_jimmy_battery_level
        travel_time_to_home: sensor.travel_time_to_home_jimmy
        travel_time_to_work: sensor.travel_time_to_work_jimmy
    - !include ../../../base/includes/gap.yaml
```

### Extra Information
This card will probably be more useful when stacking it, for 2 persons you will only need a horizontal-stack, for 4 persons I will advise you to use a vertical-stack as well.

Example 2 persons:
```
- type: horizontal-stack
  cards:
    - !include ../../../base/includes/gap.yaml
    - !include
      - '../../../base/templates/picture-elements/frontpage-photo.yaml'
      - person: person.jimmy
        image_path: /local/images/jimmy_small.png
        navigation_path: person_1
        alignment: left
        text_color: white
        phone_battery_sensor: sensor.iphone_jimmy_battery_level
        travel_time_to_home: sensor.travel_time_to_home_jimmy
        travel_time_to_work: sensor.travel_time_to_work_jimmy
    - !include
      - '../../../base/templates/picture-elements/frontpage-photo.yaml'
      - person: person.stephanie
        image_path: /local/images/jimmy_small.png
        navigation_path: person_2
        alignment: right
        text_color: white
        phone_battery_sensor: sensor.iphone_stephanie_battery_level
        travel_time_to_home: sensor.travel_time_to_home_stephanie
        travel_time_to_work: sensor.travel_time_to_work_stephanie
    - !include ../../../base/includes/gap.yaml
```

Example 4 persons:
```
- type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - !include ../../../base/includes/gap.yaml
        - !include
          - '../../../base/templates/picture-elements/frontpage-photo.yaml'
          - person: person.jimmy
            image_path: /local/images/jimmy.png
            navigation_path: person_1
            alignment: left
            text_color: white
            phone_battery_sensor: sensor.iphone_jimmy_battery_level
            travel_time_to_home: sensor.travel_time_to_home_jimmy
            travel_time_to_work: sensor.travel_time_to_work_jimmy
        - !include
          - '../../../base/templates/picture-elements/frontpage-photo.yaml'
          - person: person.stephanie
            image_path: /local/images/stephanie.png
            navigation_path: person_2
            alignment: right
            text_color: white
            phone_battery_sensor: sensor.iphone_stephanie_battery_level
            travel_time_to_home: sensor.travel_time_to_home_stephanie
            travel_time_to_work: sensor.travel_time_to_work_stephanie
        - !include ../../../base/includes/gap.yaml
    - type: horizontal-stack
      cards:
        - !include ../../../base/includes/gap.yaml
        - !include
          - '../../../base/templates/picture-elements/frontpage-photo.yaml'
          - person: person.jane
            image_path: /local/images/jane.png
            navigation_path: person_3
            alignment: left
            text_color: white
            phone_battery_sensor: sensor.iphone_jane_battery_level
            travel_time_to_home: sensor.travel_time_to_home_jane
            travel_time_to_work: sensor.travel_time_to_work_jane
        - !include
          - '../../../base/templates/picture-elements/frontpage-photo.yaml'
          - person: person.john
            image_path: /local/images/john.png
            navigation_path: person_4
            alignment: right
            text_color: white
            phone_battery_sensor: sensor.iphone_john_battery_level
            travel_time_to_home: sensor.travel_time_to_home_john
            travel_time_to_work: sensor.travel_time_to_work_john
        - !include ../../../base/includes/gap.yaml
```
