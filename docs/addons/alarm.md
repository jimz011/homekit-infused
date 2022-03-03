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

## Alarm

You can setup your alarm in here including the header badge and/or popup. The settings on this page MUST be configured in `/hki-user/config/config.yaml`!

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity | yes | alarm_control_panel.home_alarm | Sets the alarm entity used |
| show_badge | no | true | Choose whether to show or hide the alarm badge in the header |
| icon | no | predefined | Set your own alarm icon, this accepts [JS templates](https://github.com/custom-cards/button-card#javascript-templates) |
| icon_color | no | predefined | Set your own icon color, this accepts [JS templates](https://github.com/custom-cards/button-card#javascript-templates) |
| [tap_action](https://github.com/custom-cards/button-card#Action) | no | predefined | Set a custom tap_action, see [actions](https://github.com/custom-cards/button-card#Action) for more information, if you set a tap_action the default popup will no longer work and be replaced by this action instead |
| [hold_action](https://github.com/custom-cards/button-card#Action) | no | none | Set a custom hold_action, see [actions](https://github.com/custom-cards/button-card#Action) |
| [double_tap_action](https://github.com/custom-cards/button-card#Action) | no | none | Set a custom double_tap_action, see [actions](https://github.com/custom-cards/button-card#Action), if undefined it will use the same action as set in hold_action |
| popup | no | keypad | Design your own popup when clicking this badge (*Note: Will not work if tap_action is defined!*), this must be a list of cards! If ommitted it will show a keypad instead |

```yaml
# config.yaml (default settings)
  alarm:
    entity: alarm_control_panel.home_alarm
    show_badge: true
```
```yaml
# config.yaml (example custom cards)
  alarm:
    entity: alarm_control_panel.home_alarm
    show_badge: true
    popup:
      - type: markdown
        content: My Alarm Panel
      - type: alarm-panel
        entity: alarm_control_panel.home_alarm
```

### Images:

![Homekit Infused](../images/hki-alarm-2.png)
![Homekit Infused](../images/hki-alarm-1.png)
