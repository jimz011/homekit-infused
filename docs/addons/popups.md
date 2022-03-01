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

## Popups

HKI comes with preconfigured popups by default. You can edit where to show the close button and which colors/actions to show in a light popup.
There are two different categories and must be defined separately (see last example below).

The settings on this page MUST be configured in `/hki-user/config/config.yaml`!

#### Popups

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| close_button_orientation | no | right | Choose where the X (close button) is located in HKI popups (this does NOT work for default HA popups) |

```yaml
# config.yaml (default popups settings)
  popups:
    close_button_orientation: right
```

#### RGB Popups

At this moment the only popup that is changeable is the RGB popup for the button addon. You must have set your [button](button.md) to `type: rgb` for these changes to have any effect on them!

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| slider_colored_by_light | no | true | Set if the slider should be the same color as the light |
| height | no | 410px | Set the height in `px` of the slider on the popup, it might be useful to lower this on smaller phones |
| width | no | 110px | Set the width in `px` of the slider on the popup |
| actions_per_row | no | 3 | Set the number of actions that should be shown horizontally |
| action_size | no | 30px | Set the size of the action button in `px` |
| rgb_popup | no | undefined | Set the action buttons, see options below |

#### RGB Popups Extra Options

You can have as many actions as you want, as long as you define both rgb and hex colors!

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| rgb_color | yes | undefined | Set the RGB color of the action button, the format MUST be `[255, 136, 0]` |
| hex_color | yes | undefined | Set the HEX color of the action button, the format MUST be `'#ff8800'` |

```yaml
# config.yaml (default rgb popups settings)
  rgb_popups:
    slider_colored_by_light: true
    height: 410px
    width: 110px
    actions_per_row: 3
    action_size: 30px
    rgb_popup: 
      - rgb_color: [255, 136, 0]
        hex_color: '#ff8800'
      - rgb_color: [255, 0, 95]
        hex_color: '#ff005f'
      - rgb_color: [40, 255, 0]
        hex_color: '#28ff00'
      - rgb_color: [0, 160, 255]
        hex_color: '#00a0ff'
      - rgb_color: [131, 0, 255]
        hex_color: '#8300ff'
      - rgb_color: [3, 0, 255]
        hex_color: '#0300ff'
```
```yaml
# config.yaml (example with both categories defined)
  popups:
    close_button_orientation: right
  rgb_popups:
    slider_colored_by_light: true
    height: 410px
    width: 110px
    actions_per_row: 3
    action_size: 30px
    rgb_popup: 
      - rgb_color: [255, 136, 0]
        hex_color: '#ff8800'
      - rgb_color: [255, 0, 95]
        hex_color: '#ff005f'
      - rgb_color: [40, 255, 0]
        hex_color: '#28ff00'
      - rgb_color: [0, 160, 255]
        hex_color: '#00a0ff'
      - rgb_color: [131, 0, 255]
        hex_color: '#8300ff'
      - rgb_color: [3, 0, 255]
        hex_color: '#0300ff'
```

### Images:

![Homekit Infused](../images/hki-popup.png)
![Homekit Infused](../images/hki-button-5.png)
