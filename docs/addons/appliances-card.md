# Homekit Infused

Back to [Addon List](../addon_list.md)

# Auto Filled Fan Card
* HKI Framework 3.0.4 or higher required

![Homekit Infused](../images/appliances-card.png)

### Description
This card will create a beautiful picture-elements card which is simple, clean and very easy to setup!

### Configuration
- Only little information is needed for this card to work
- You can use your own images, or use any of the ones included (/www/images/appliances/)

### Advanced

| Properties | Required | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| image | no | /local/images/appliances/image.jpg | Sets the image of the card, this must be inside your www/images folder! |
| entity_status | yes | none | Show the state of this entity in the bottom status bar |
| entity_switch | yes | none | This sets an on/off button for this entity, this can be the same as the status if you don't have a separate status entity |
| entity_wattage | yes | none | Sets the power sensor of the device you want to monitor, see example below | 

### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/cleaning/), you can name the file however you want (e.g. appliances-card.yaml)
- Copy the code below and make changes if needed

```
- !include
  - '../../../base/templates/picture-elements/appliances-card.yaml'
  - image: /local/images/appliances/washingmachine.jpg
    entity_status: sensor.washing_machine_status
    entity_switch: switch.washing_machine
    entity_wattage: sensor.washing_machine_power
```
