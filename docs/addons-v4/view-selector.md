# Homekit Infused 4.x.x

## Content
- [Introduction](../index.md)
- [Installation](../installation.md)
- [Configuration](../configuration.md)
- [Addons](../addons.md)
- [Custom Views](../custom_views.md)
- [Updates](../updates.md)
- [Issues & Questions](../issues.md)
- [About Me](../about.md)
- [Thanks](../thanks.md)

## Addons > View Selector

![Homekit Infused](../images/vs_1.png)

This addon gives your view a selector menu at the top of your view.
To add this addon to your view add `view_selector:` in your view_config.

To add view_selector to your view add the following line:

```yaml
# Example
  my_view:
    view_selector:
```

The view selector works by leveraging multiple views as pages. You must add the view_selector to every view that you want the view_selector to show on.
Also note that when adding view_selector to your view it will be removed from the main menu! You can re-add them to your view by adding `show_in_menu: true`.

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| columns | no | 4 | Set the amount of columns the view_selector uses on this page |
| aspect_ratio | no | 1/1 | Set a custom aspect_ratio, this is useful when using less buttons |
| elements | yes | a list of elements | Set the elements your view selector should use, see options below |

#### Elements Extra Options

| Name | Required | Default | Description |
|----------------------------------|-------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name | yes | undefined | Sets the name of this button |
| icon | yes | undefined | Sets the icon of this button |
| path | yes | undefined | Sets the path this button should take you to |
| this_view | no | undefined | You can add this to your selector to make HKI aware that you are currently on this page, this will give the button a nice `ON` appearance. The view selector works fine without it though |

```yaml
# Example with 2 views with a view_selector
  stephanie_location:
    view_selector:
      columns: 3
      aspect_ratio: 3/1
      elements:
        - name: Agenda
          icon: mdi:calendar-edit
          path: stephanie_calendar
          this_view: true
        - name: Location
          icon: mdi:map-marker
          path: stephanie_location

  stephanie_calendar:
    view_selector:
      columns: 3
      aspect_ratio: 3/1
      elements:
        - name: Agenda
          icon: mdi:calendar-edit
          path: stephanie_calendar
        - name: Location
          icon: mdi:map-marker
          path: stephanie_location
          this_view: true
```
```yaml
# Example with 2 views with a view_selector with one view shown in the main menu
  stephanie_location:
    show_in_menu: true
    view_selector:
      columns: 3
      aspect_ratio: 3/1
      elements:
        - name: Agenda
          icon: mdi:calendar-edit
          path: stephanie_calendar
          this_view: true
        - name: Location
          icon: mdi:map-marker
          path: stephanie_location

  stephanie_calendar:
    view_selector:
      columns: 3
      aspect_ratio: 3/1
      elements:
        - name: Agenda
          icon: mdi:calendar-edit
          path: stephanie_calendar
        - name: Location
          icon: mdi:map-marker
          path: stephanie_location
          this_view: true
```

More images:

![Homekit Infused](../images/vs_2.png)
