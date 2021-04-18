# Homekit Infused
*This documentation applies to HKI Framework 3.1.2 or higher!

Back to [Addon List](../addon_list.md)

# Custom Views

### Description
HKI has 8 custom views to manipulate, these views can be used when you feel the default 27 views do not fit your needs.
The menu does not have buttons to these custom views so you will have to create them yourself (see examples below)

### Configuration
- To use custom views you must have the HKI Framework 3.1.2 or higher!
- You can change the Title, Subtitle and Icon in the header by changing them in `../user/config/custom_views_header_config.yaml`, you MUST restart HA after changing this
- To navigate to the views you can create a button with navigation options, this can be a core button but also be a button-card or HKI addon like the [navigation button](https://github.com/jimz011/homekit-infused/blob/master/docs/addons/button-navigation.md)
- The options to use for the custom views header are exactly the same as for the [default header](https://github.com/jimz011/homekit-infused/blob/master/docs/addons/header_templates.md)
- For examples, please see below

### Install
- This is part of the HKI Framework and doesn't require a separate install

### Extra Information
Like any other view in HKI it is not possible to rename the path! If you want to navigate directly to the path you can use the following urls, the same names are used inside of the buttons to navigate to the custom views

- https://your-domain.com/homekit-infused/custom_1
- https://your-domain.com/homekit-infused/custom_2
- https://your-domain.com/homekit-infused/custom_3
- https://your-domain.com/homekit-infused/custom_4
- https://your-domain.com/homekit-infused/custom_5
- https://your-domain.com/homekit-infused/custom_6
- https://your-domain.com/homekit-infused/custom_7
- https://your-domain.com/homekit-infused/custom_8

The last part of this url can also be used inside a [navigation button](https://github.com/jimz011/homekit-infused/blob/master/docs/addons/button-navigation.md) like the example below
```
# example navigation button to a custom view
- !include
  - '../../../base/templates/button/button-badge.yaml'
  - name: Custom View 1
    label: User
    icon: mdi:account
    navigation_path: /homekit-infused/custom_1
    notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
    background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"   
```
```
# example of a menu card for all 4 custom views
- type: horizontal-stack
  cards:
    - !include ../../../base/includes/gap.yaml
    - type: custom:layout-card
      min_columns: 3
      max_columns: 3
      justify_content: start
      layout: horizontal
      cards:
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Custom View 1
            label: User
            icon: mdi:account
            navigation_path: /homekit-infused/custom_1
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Custom View 2
            label: User
            icon: mdi:account
            navigation_path: /homekit-infused/custom_2
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Custom View 3
            label: User
            icon: mdi:account
            navigation_path: /homekit-infused/custom_3
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
        - !include
          - '../../../base/templates/button/button-badge.yaml'
          - name: Custom View 4
            label: User
            icon: mdi:account
            navigation_path: /homekit-infused/custom_4
            notification: "[[[ if (states['input_number.empty'].state == 0) return '&nbsp'; else return `${states['input_number.empty'].state}`; ]]]"
            background_color: "[[[ if (states['input_number.empty'].state == 0) return 'rgba(0,0,0,0.0)'; else return 'var(--paper-item-icon-color)'; ]]]"  
    - !include ../../../base/includes/gap.yaml
```
