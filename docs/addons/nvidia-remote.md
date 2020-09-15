# Homekit Infused

Back to [Addon List](../addon_list.md)

# Remote Control (Nvidia SHIELD TV/Android TV)
*HKI Framework 3.0.4 or higher required

![Homekit Infused](../images/remote-control.png)

### Description
This is a predefined remote control solution for your Nvidia SHIELD TV (pro). This has only been tested on a SHIELD however there is a big chance that this will work with any Android TV (e.g. Xiaomi miBox S). Please let me know if you have any of these mediaplayers and if this addon works for you.

*Note: some features might not work properly as this addon is experimental, know issue is that the mute button does not work as intended!

### Configuration
- Configurating this addon is fairly simple and only requires a few properties.

### Advanced

| Properties | Required | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| entity_media_player | yes | none | This MUST be your Android TV entity!
| entity_media_player_sound | yes | none | You can use this if you use a different media_player to control sound (this MUST be an entity in the media_player domain!). If you don't have a separate media_player for sound you must enter the same entity as above |

### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/frontpage/), you can name the file however you want (e.g. frontpage-buttons.yaml)
- Copy the code below and make changes if needed

```
- type: horizontal-stack
  cards:
    - !include ../../../base/includes/gap.yaml
    - !include
      - '../../../base/templates/other/remote-control.yaml'
      - entity_media_player: media_player.nvidia_s_h_i_e_l_d_tv_pro
        entity_media_player_sound: media_player.samsung_ue65ku6000
    - !include ../../../base/includes/gap.yaml
```
