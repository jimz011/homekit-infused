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

## Addons > Custom Legacy
*Warning: You can NOT use addons on a view that has `custom_legacy:` set!*

Users of Homekit Infused v3 and v4 are already known to this concept. Homekit Infused allows you to disable all addons and create a view completely custom just like all previous versions of HKI could. This is useful if you don't want to use the addons and create the views with your own code. This setting is per view and can not be set globally.

If you are looking for a way to add custom cards together with your addons you should take a look at the [custom:](custom.md) addon instead!

To add your own cards to the view you must:
- Create a folder in `/hki-user/custom_legacy` with the same name as the objectname of your view (in the example below this is `/hki-user/custom_legacy/living_room`)
- If you added a custom path for your custom_cards then create a folder with that name instead!
- Add the following line to your view config:

```yaml
living_room:
  custom_legacy:
```

Tip: You can control the layout with the `layout` addon!

### Custom Legacy
To use your custom cards on a view you must open the folder that we have just created and then create a new file. You can name the file anyway you want since the name of the file is not relevant for now.
Lets say we have a file that is named `button-and-title.yaml` and add a piece of code to it. To make it easier to understand I chose a core lovelace card for this example

```yaml
- type: entity-button
  entity: light.living_room
```
This will render an entity button on the chosen view.

### How to control the layout of the Custom Cards?
Cards that are dropped into the views folder will be placed from top to bottom in alphabetical/numerical order (of the filename).
E.g.

```
In the following folder /hki-user/custom_legacy/home/ you have
buttons.yaml
map-card.yaml
weather-card.yaml
```
In this example the buttons will be at the top, below that there will be a map and below that there will be a weather card.

Because the cards are always placed in alphabetical/numerical order of the FILENAME you can add a double digit in front of the name.
This gives us the opportunity to sort the cards to our likings.

E.g.
```
In the following folder /hki-user/custom_legacy/home/ you have
01.weather-card.yaml
02.buttons.yaml
03.map-card.yaml
``` 
In this example you can see that now there is a value and the names all start with the same letter/number. This means the second letter/number takes precedence. So in this example the top card will be a weather card, the second one will be buttons and the third is the map.
You could also do this by naming them `a.weather-card.yaml` and `b.buttons.yaml`. HKI does NOT care about the filename and you can name it whatever you want it to be, it will simply ALWAYS render the cards in alphabetical/numerical order!

You can also add your own files (since HKI doesn't care about the file names, it just cares about the order). 

### What about styling?
You can add the default HKI style to any card quickly by adding two lines to your cards. This will set the card up to use most of the HKI styles. Some of them aren't in there but can be added separately. You must add the following to your card:

```yaml
card_mod:
  class: hki
```
```yaml
# (example giving HKI style to a card)
 - type: markdown
   card_mod:
     class: hki
   content: Hello
```
```yaml
# (example giving HKI style to a card with custom styles)
- type: markdown
  card_mod:
    class: hki
    style: |
      ha-card {
        opacity: 0.4;
      }
  content: Hello
```

### Advanced
You can have multiple cards in a single file if you so desire, which might be the case if you want to organise your cards differently or you prefer to have the same type of cards in the same file for easier editing.
When having multiple cards in a file it will still render everything in the same order, so imagine in our previous example that the `weather-card.yaml` file would have two cards (e.g. a simple weather card and a forecast card), it will render the FILES on alphabetical/numerical order, NOT the cards! Remember this!
E.g.
```
In the following folder /hki-user/custom_legacy/home/ you have
01.weather-card.yaml (this one has two cards)
02.buttons.yaml
03.map-card.yaml
```
In this example the first card will be the simple weather card, the next one will be a forecast card (so the 2 cards in the first file go first). The third one will be the buttons and the fourth will be the map.
So there are 3 files, but 4 cards (as in the first file there are two cards).

If you wish to stick cards together you can use vertical or horizontal stacks within a file (https://www.home-assistant.io/lovelace/horizontal-stack/ and https://www.home-assistant.io/lovelace/vertical-stack/).

