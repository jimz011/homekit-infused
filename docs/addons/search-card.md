# Homekit Infused

Back to [Addon List](../addon_list.md)

# Search Card
![Homekit Infused](../images/search-card.png)

### Description
This card can be used to quickly find an entity, just type a portion of the entity name inside the search bar and it will find it for you.

### Requirements (HACS)

| Name | Type  | Description |
|----------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Search Card](https://github.com/postlund/search-card) | Frontend | This is a card that can search your entities quickly |

### Resources
Add the following line to your lovelace resources 
```/hacsfiles/search-card/search-card.js```

### Configuration
- No additional configuration required

### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/frontpage/), you can name the file however you want (e.g. search-card.yaml)
- Copy the code below and make changes if needed

```
- !include ../../../base/includes/search-card.yaml
```

