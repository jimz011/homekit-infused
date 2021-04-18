# Homekit Infused

Back to [Addon List](../addon_list.md)

# Calendar Card
![Homekit Infused](../images/core-calendar-card.png)

### Description
This is a calendar card for use with calendar entities.

### Configuration
- To use this you can simply change the entities with your own
- You can add a title to the card if you want

### Advanced

| Properties | Required | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | none | Sets a title for this card |
| entities | yes | none | Sets the calendar entity or entities used for this card |

### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/calendar/), you can name the file however you want (e.g. calendar-card.yaml)
- Copy the code below and make changes if needed

```
- type: calendar
  style: |
    ha-card {
      border-radius: var(--border-radius);
      box-shadow: var(--box-shadow);
    }
  entities:
    - calendar.personal
    - calendar.family
```

### Layout card and horizontal/vertical stacks
I know the HA documentation has this perfectly explained already, but to make it easier on you I will try to explain in more detail [here](../addons/stacks.md)
