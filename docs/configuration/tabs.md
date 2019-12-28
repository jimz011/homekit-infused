---
title: Tabs
index: 4
---

## Tab Config Options

| NAME                  | TYPE          | DEFAULT | DESCRIPTION                                                                                |
| :-------------------- | :------------ | :------ | :----------------------------------------------------------------------------------------- |
| chevrons              | Boolean       | true    | Enables/disables the scroll arrows for the tabs                                            |
| indicator_top         | Boolean       | false   | Places the current tab indicator on top of the tab                                         |
| default_tab           | number/string |         | The default starting tab when entering Lovelace                                            |
| reverse_tab_direction | Boolean       | false   | Places tabs at opposite side of the window in reverse order                                |
| hide_tabs             | string        |         | An array or comma separated string of tabs to hide, more info below                        |
| show_tabs             | string        |         | An array or comma separated string of tabs to show, more info below                        |
| hidden_tab_redirect   | Boolean       | true    | Automatically redirects off hidden tabs to either the default tab or the first visible tab |
| tab_icons             | string        |         | Set the icon of each tab, useful for templates, more info below                            |

### Hide/Show Tabs

hide_tabs and show_tabs accept a tab/views index number, title, or path. They can also accept ranges like so: `5 to 9`

hide_tabs and show_tabs accept a comma separated list of tabs:

```yaml
custom_header:
  hide_tabs: '5 to 9, 0, home'
```

or an array of tabs:

```yaml
custom_header:
  hide_tabs:
    - 5 to 9
    - 0
    - home
```

### Tab Icons

The tab_icons option accepts a tab/views index number, title, or path. This option is mostly useful when used with [templates](#templates).

```yaml
custom_header:
  tab_icons:
    0: mdi:skull
    home: mdi:home
    7: mdi:death-star-variant
```
