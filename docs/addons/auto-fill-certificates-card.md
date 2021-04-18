# Homekit Infused

Back to [Addon List](../addon_list.md)

# Auto Filled Certificates Card (show expiry dates)
![Homekit Infused](../images/certificates-card.png)

### Description
This card will automatically create an entities card with ALL your certificate expiry sensors without the need of configuration.

### Configuration
- No additional configuration required 
- Experienced users can change the style and change include/exclude parameters if they wish (https://github.com/thomasloven/lovelace-auto-entities)

### Advanced

| Properties | Required | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| exclude | no | none | Sets the certificate entities to be excluded from the card, this must be a list of objects |
| method | no | name | Sorts the cards in a different order, choose from: domain, entity_id, name, state, attribute, last_changed last_updated or last_triggered |
| other | | | It is probably best if you leave all the other settings alone! |


### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/certificates/), you can name the file however you want (e.g. certificate-card.yaml)
- Copy the code below and make changes if needed

```
- type: custom:auto-entities
  filter:
    exclude:
      - entity_id: '*timestamp*'
    include:
      - entity_id: 'sensor.cert_expiry_*'
  show_empty: false
  sort:
    method: name
    numeric: true
  card:
    type: entities
    style: |
      ha-card {
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
      }
  ```
 
