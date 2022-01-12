# Homekit Infused 2022.x.x

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Splitting the Configuration](splitting-the-config.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

### Custom Cards
*Warning: Legacy Addon, might break in the future!

Users of Homekit Infused v3 are already known to this concept, but Homekit Infused allows you to add your own cards to any of the views instead of using the HKI addon features. You can combine them, though it sometimes doesn't look great when used at the same time. For you this will be trial and error. If it doesn't get you the result you want you should either just use addons or just use custom_cards. They can however work fantastically together when you use them together with the view_selector addon.

To add your own cards to the view you must:
- Create a folder in `/hki-user/views` with the same name as the objectname of your view (in the example below this is `/hki-user/views/living_room`)
- If you added a custom path for your custom_cards then create a folder with that name instead!
- Add the following line to your view config:

```yaml
living_room:
  custom_cards:
```
Below you can find all the extra options you can use with custom_cards

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| position | no | bottom | This decides if custom_cards should be rendered before or after HKI addons, choices are `top` or `bottom`, by default custom_cards are always rendered after HKI addons |
| type | no | default | Sets the type of the stack the cards are placed in, by default they are placed in a layout-card. But you can have the default HA behaviour by setting this to advanced. Note that all HKI views are in panel mode! Choices are `default` or `advanced`, whereas advanced is the normal HA behaviour. It is called advanced because it is much harder to get your desired layout this way. Users of Dwains Dashboard that want to convert their cards using the dwains-flexbox-card will want to set this option to `advanced` |

```yaml
living_room:
  custom_cards: 
    position: bottom
    type: default
```
Tip: You can control the default layout with the `layout` addon.

### Custom Cards
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
In the following folder /hki-user/views/home/ you have
buttons.yaml
map-card.yaml
weather-card.yaml
```
In this example the buttons will be at the top, below that there will be a map and below that there will be a weather card.

Because the cards are always placed in alphabetical/numerical order of the FILENAME you can add a double digit in front of the name.
This gives us the opportunity to sort the cards to our likings.

E.g.
```
In the following folder /hki-user/views/home/ you have
01.weather-card.yaml
02.buttons.yaml
03.map-card.yaml
``` 
In this example you can see that now there is a value and the names all start with the same letter/number. This means the second letter/number takes precedence. So in this example the top card will be a weather card, the second one will be buttons and the third is the map.
You could also do this by naming them `a.weather-card.yaml` and `b.buttons.yaml`. HKI does NOT care about the filename and you can name it whatever you want it to be, it will simply ALWAYS render the cards in alphabetical/numerical order!

You can also add your own files (since HKI doesn't care about the file names, it just cares about the order). 

### Advanced
You can have multiple cards in a single file if you so desire, which might be the case if you want to organise your cards differently or you prefer to have the same type of cards in the same file for easier editing.
When having multiple cards in a file it will still render everything in the same order, so imagine in our previous example that the `weather-card.yaml` file would have two cards (e.g. a simple weather card and a forecast card), it will render the FILES on alphabetical/numerical order, NOT the cards! Remember this!
E.g.
```
In the following folder /hki-user/views/home/ you have
01.weather-card.yaml (this one has two cards)
02.buttons.yaml
03.map-card.yaml
```
In this example the first card will be the simple weather card, the next one will be a forecast card (so the 2 cards in the first file go first). The third one will be the buttons and the fourth will be the map.
So there are 3 files, but 4 cards (as in the first file there are two cards).

If you wish to stick cards together you can use vertical or horizontal stacks within a file (https://www.home-assistant.io/lovelace/horizontal-stack/ and https://www.home-assistant.io/lovelace/vertical-stack/).

### Legacy Addons
To view all the available addons and their code [click here](https://github.com/jimz011/homekit-infused/tree/4.x.x-docs/addon_list.md)

##### More examples
I could go on with examples forever, but it is way better to just check out the example config that I have over [here](https://github.com/jimz011/homekit-infused/tree/4.x.x-personal)
