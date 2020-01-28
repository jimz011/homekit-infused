# Homekit Infused

## Contents
- [About](index.md)
- [Intro](intro.md)
- [Important Notes](notes.md)
- [Preparation](preparation.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Updates and Addons](updates.md)
- [Tips & Tricks](tips.md)
- [Feature Requests](requests.md)
- [Issues & Questions](issues.md)
- [Thanks](thanks.md)

# TIPS & TRICKS
This page will contain tutorials, tips and tricks on how to edit certain views, cards, elements and more for Homekit Infused. Unfortunately this will take time to write and will stay under construction for the time being.
If you want to help, please help me write tutorials on how you have edited Homekit Infused in a way that others might understand. Press on issues on Github and open a request for adding a tutorial. Tutorials that are unreadable to the average user will not be accepted.
I thank all of you in advance for sharing your tips and tricks for Homekit Infused here to not only help me getting better documentation (and less support questions) but also all of the users that would love to share configs.
Sharing a tutorial, trick or tip here with us will give it a better place than on the HA forums as it will fade away into the background because of all the messages. Info will always stand out here and thus easier to find for new and existing users.
Thanks again for sharing your experiences.

## Groups and Rooms
How to create groups and rooms for HKI's auto-filled views?
Copy a set of groups from the `hki_groups.yaml` file. They usually come in sets, e.g. 
``` 
  livingroom_rgb_lights:
    name: Livingroom RGB Lights
    entities:
      - light.woonkamer_led_lampen
      - light.gateway_light_7811dcdef324
  livingroom_color_temp_lights:
    name: Livingroom Color Temperature Lights
    entities:
      - light.vloerlamp
      - light.tafellamp
  livingroom_other_lights:
    name: Livingroom Other Lights
    entities:
      - light.plafond
      - light.eettafel
```
Now rename the `livingroom` part to any room you'd like.

Now go to the view where you want this group to be shown on (in this example it is the lights view) and copy/paste the following:
```
        - !include
          - '../templates/auto_fill_light_template.yaml'
          - content: YOUR_ROOM_NAME
            group_other: group.your_room_other_lights
            group_color_temp: group.your_room_color_temp_lights
            group_rgb: group.your_room_rgb_lights 
```
obviously you would need to have the same groupname as the one setup in the first example. Paste this at the bottom of the screen (you could either remove the bottom-card or paste it in between the bottom-card and the last card)
