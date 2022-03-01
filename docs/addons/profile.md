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

## Profile

HKI comes with a profile menu with shortcut buttons. The middle section and the media player are fully customizable, you can use any card you want.
Every stack of cards will automatically be filled inside of a dropdown menu!

To make the most out of this menu you should add an entity_picture to your person entities!

NOTE: There are 12 shortcut buttons in the top bar, for non admins only 4 shortcuts are shown!
WARNING: You should NOT use JS templates in cards on this view, or your profile button will no longer render! Cards that support Jinja CAN be used!

The settings on this page MUST be configured in `/hki-user/config/config.yaml`!

#### Tips & Tricks

To get the best out of the profile menu I will suggest using a [state-switch](https://github.com/thomasloven/lovelace-state-switch), this way you can have the profile menu show different cards depending on the user.

#### Profile Options 

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| markdown | no | unknown | Set some text to use in the profile menu, this will be shown right from your profile picture |
| media_player | no | unknown | Choose a media_player to show at the bottom of the profile menu |
| cards | no | unknown | Set stacks with cards, see Extra Options below |

```yaml
# config.yaml (example profile markdown)
  profile:
    markdown: >
      **{{ states('sensor.greeting') }} {{ user|capitalize }}**
    
      {{ state_attr('sensor.pretty_date', 'week_day') }}, {{ states('sensor.pretty_date') }}
```
```yaml
# config.yaml (example spotify media_player for multiple users)
  profile:
    media_player:
      type: custom:state-switch
      entity: user
      states:
        Jimmy:
          type: custom:mini-media-player
          card_mod:
            style: |
              :host {
                --ha-card-background: black !important;
              }
          entity: media_player.spotify_jimmy
          artwork: cover
          hide:
            source: true
            power_state: true
        Stephanie:
          type: custom:mini-media-player
          card_mod:
            style: |
              :host {
                --ha-card-background: black !important;
              }
          entity: media_player.spotify_jimmy
          artwork: cover
          hide:
            source: true
            power_state: true
```
#### Profile Cards Extra Options

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | yes | unknown | Set a title for this stack |
| icon | yes | unknown | Set an icon for this stack |
| padding | no | -5 | Sets the indentation in which the cards in the dropdown menu will be shown. `-5` is flush with the dropdown title itself. |
| open | no | false | If set to `true` this category will always be collapsed/open when the popup opens |
| cards | yes | list of cards | Define your cards in here, you can use ALL options of the entities card addon! |

#### Cards Information

Cards are ALWAYS placed inside an entities card and will always be folded in a fold-entity-row. This means that you MUST start any card as if it were a card in an [entities card](https://www.home-assistant.io/lovelace/entities/). The options above will change the appearance of the fold-entity-row. 

```yaml
# config.yaml (example cards)
  profile:
    cards:
      - title: Calendar 
        icon: mdi:calendar
        entities:
          - type: custom:state-switch # start of the first card
            entity: user
            states:
              Jimmy:
                type: calendar
                entities:
                  - calendar.jimmy
              Stephanie:
                type: calendar
                entities:
                  - calendar.stephanie
      - title: Location
        icon: mdi:map
        open: true
        entities:
          - type: custom:hui-vertical-stack-card
            cards:
              - type: map
                dark_mode: true
                aspect_ratio: 2x1
                entities:
                  - person.jimmy
                  - person.stephanie
                  - person.tala
```

### Images:

![Homekit Infused](../images/hki-profile-1.png)
![Homekit Infused](../images/hki-profile-2.png)
