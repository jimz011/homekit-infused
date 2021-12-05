# Homekit Infused 2021.x.x

## Content
- [Introduction](../index.md)
- [Installation](../installation.md)
- [Configuration](../configuration.md)
- [Addons](../addons.md)
- [Splitting the Configuration](../splitting-the-config.md)
- [Updates](../updates.md)
- [Issues & Questions](../issues.md)
- [About Me](../about.md)
- [Thanks](../thanks.md)

## Addons > Entities Card

![Homekit Infused](../images/waste-collection-card.png)

This addon gives your view a core entities card that fills automatically with your given entities.
This addon has no extra options.
To add this addon to your view add `entities_card:` in your view_config.

To add entities_card to your view add the following line:

```yaml
# Example
  my_view:
    entities_card:
```

You can use any of the following options to modify your addon.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| title | no | undefined | Set the title of the stack, ommitting this line will remove the title entirely |
| entities | yes | list of entities | Set your entity/entities here, you can define more than one entity per card |

```yaml
# Example
  my_view:
    entities_card:
      - title: Waste Collection
        entities:
          - sensor.mijnafvalwijzer_gft
          - sensor.mijnafvalwijzer_papier
          - sensor.mijnafvalwijzer_restafval
``` 

#### Entities Card Extra Options

You can set any of the official entities card options if you define your entity as an object

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type | no | undefined | Sets a custom card type: custom:my-custom-card or a divider |
| entity | no | undefined | Set the entity you want to use |
| name | no | undefined | Overwrites friendly name. |
| icon | no | undefined | Overwrites icon or entity picture. |
| image | no | undefined | Overwrites entity picture. |
| secondary_info | no | undefined | Show additional info. Values: entity-id, last-changed, last-updated, last-triggered (only for automations and scripts), position or tilt-position (only for supported covers), brightness (only for lights). |
| format | no | undefined | How the state should be formatted. Currently only used for timestamp sensors. Valid values are: relative, total, date, time and datetime. |
| action_name | no | undefined | Button label (only applies to script and scene rows). |
| state_color | no | undefined | Set to true to have icons colored when entity is active. |
| tap_action | no | undefined | Action taken on row tap. See action documentation. |
| hold_action | no | undefined | Action taken on row tap and hold. See action documentation. |
| double_tap_action | no | undefined | Action taken on row double tap. See action documentation. |

There are a ton of more options, but it would be useless to list them all here when you can find perfect examples here https://www.home-assistant.io/lovelace/entities/.
Almost every option is possible

```yaml
# Example with divider
  my_view:
    entities_card:
      - title: Waste Collection
        entities:
          - sensor.mijnafvalwijzer_gft
          - type: divider
          - sensor.mijnafvalwijzer_papier
          - sensor.mijnafvalwijzer_restafval
``` 
```yaml
# Example with multiple entities_cards
  my_view:
    entities_card:
      - title: Waste Collection
        entities:
          - sensor.mijnafvalwijzer_gft
          - sensor.mijnafvalwijzer_papier
          - sensor.mijnafvalwijzer_restafval
      - title: Sun
        entities:
          - sensor.sunrise
          - sensor.dark_mode
``` 
```yaml
# Example with custom entity cards
  my_view:
    entities_card:
      - title: My buttons
        entities:
          - sensor.sunrise
          - type: button
            icon: mdi:power
            name: Bed light transition
            action_name: Toggle light
            tap_action:
              action: call-service
              service: light.toggle
              service_data:
                entity_id: light.bed_light
                transition: 10
```
