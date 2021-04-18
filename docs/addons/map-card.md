# Homekit Infused

Back to [Addon List](../addon_list.md)

# Map Card
![Homekit Infused](../images/map-card.png)

### Description
This is a map card to show the location of person and/or device_trackers. This can be useful to place in a person view. The location view already has a preprogrammed view within the HKI Framework starting HKI 3.4.0.

### Configuration
- To use this you can simply change and/or add person and/or device_tracker entities to the list.

### Advanced

| Properties | Required | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| default_zoom | no | 15 | Sets the default zoom when opening the map |
| aspect_ratio | no | 16x9 | Sets the height/width of the map |
| entities | yes | none | Sets the entities that will be shown on the map |

### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/person_1/), you can name the file however you want (e.g. map-card.yaml)
- Copy the code below and make changes if needed

```
- type: map                    
  style: |
    ha-card {
      --paper-item-icon-color: black;
      color: black;
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
      font-family: var(--font-family);
      font-size: var(--name-font-size);
      opacity: 0.8;
      overflow: hidden;
    }                      
  default_zoom: 15
  aspect_ratio: 4x6
  entities:
    - person.person_1
    - person.person_2
    - person.person_3
```

### Layout card and horizontal/vertical stacks
I know the HA documentation has this perfectly explained already, but to make it easier on you I will try to explain in more detail [here](../addons/stacks.md)
