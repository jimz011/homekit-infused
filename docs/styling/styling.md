---
title: styling
index: 1
---

## Styling Config

All color items accept [valid CSS colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

| NAME                   | TYPE   | DESCRIPTION                                                                                                           |
| :--------------------- | :----- | :-------------------------------------------------------------------------------------------------------------------- |
| background             | string | Background of the header (accepts [background shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/background)): `background: repeat url('/local/img/header.png')` |
| shadow                 | string | Turns header shadow on or off                                                                                         |
| elements_color         | string | Color of all elements in header                                                                                       |
| menu_color             | string | Color of menu button                                                                                                   |
| voice_color            | string | Color of voice button                                                                                                 |
| options_color          | string | Color of options button                                                                                               |
| all_tabs_color         | string | Color of all tabs                                                                                                     |
| notification_dot_color | string | Color of new notification indicator                                                                                   |
| tab_indicator_color    | string | Color of the current tab indicator                                                                                     |
| active_tab_color       | string | Color of the current tab's icon/text                                                                                   |
| tabs_color             |        | Color of single tabs, more info below                                                                                 |

### Tabs Color

tabs_color accepts a tab/view's index number, title, or path.

```yaml
custom_header:
  tabs_color:
    0: green
    home: 'rgb(214, 122, 127)'
    7: '#fafafa'
```
