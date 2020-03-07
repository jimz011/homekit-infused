# Homekit Infused

## Contents
- [About](index.md)
- [Intro](intro.md)
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

#### Groups and Rooms
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


### Customization
Well I can imagine that a lot of people used code from the old project and have edited them to their own needs. This is still possible, though if you rely on the old decluttering-card templates you will need to get them from my older releases. Just click on releases on the repo and it will show you the older releases you can download.
Some pages do not autofill, or do not have lovelace_gen global config. These views can be either edited to your own likings, removed or you can wait for an example config/auto-fill template if I will ever create one for that specific view. I will recommend you to use something yourself though as nobody has the same desires for e.g. an Energy View, or maybe a personal view.
Not only will I recommend you to try and create something yourself, but I actually encourage you to do it. Why? Well simply because you will learn a lot by just trial and error and getting better in "how to use lovelace" is not only beneficial for me (less questions asked) but most importantly beneficial for you as you will learn a lot, learn how to solve basic problems and be able to create your own iteration of my setup.


Tip: If you don't want to compare templates every time I update them, don't edit them. If you want to use the template, make a copy of it and reference it from your view. This way your customizations on the templates will never break (unless you have the exact same filename that I chose, which is unlikely).
The following example is how a lovelace_gen template would look like. As you can see it get the template from the following file `button.yaml`.
```
- !include
  - templates/button.yaml
  - entity: light.office
    name: Office
```
Now if you would want to edit the `button.yaml` template, you'd be better off copying the file and renaming it to something else. E.g. `button-user.yaml`
This would result in the following code on the views:
```
- !include
  - templates/button-user.yaml
  - entity: light.office
    name: Office
```
To truly understand this you should learn how to use lovelace_gen (yes I keep repeating it, because it is important imho).
