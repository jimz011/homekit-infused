---
title: Advanced Styling
index: 2
---

## CSS Variables

You can use these custom CSS variables in your HA theme to style Custom-Header.

| CSS Var                     | DESCRIPTION                          |
| :-------------------------- | :----------------------------------- |
| --ch-background             | Background of the header             |
| --ch-elements-color         | Color of all elements in header      |
| --ch-menu-color             | Color of menu button                 |
| --ch-voice-color            | Color of voice button                |
| --ch-options-color          | Color of options button              |
| --ch-all-tabs-color         | Color of all tabs                    |
| --ch-notification-dot-color | Color of new notification indicator  |
| --ch-tab-indicator-color    | Color of the current tab indicator   |
| --ch-active-tab-color       | Color of the current tab's icon/text |

## Custom CSS

You can add your own custom CSS to elements using the config options below.

Keep in mind that this will be trial and error as these items already have CSS applied to them that you'll be overriding. Be sure to inspect the elements you're modifying to see the existing CSS.

These default styles are also subject to change when there are updates to HA or Custom Header. I cannot provide support for these options.

Full example including all the available elements below. This example is untested and will most likely look pretty crazy if used.

```yaml
custom_header:
  header_css: 'background: green; padding: 5px'
  stack_css: 'padding: 0; background: purple;' # This is the container that holds the header text and tabs.
  header_text_css: 'font-family: "Times New Roman", Times, serif;'
  active_tab_css: 'background: blue; color: #fff;'
  options_list_css: 'background: #fff;' # CSS of the options drop-down menu.
  menu_css: 'background: dimgrey;'
  options_css: 'padding: 0 10px 0 15px;'
  voice_css: 'color: pink;'
  view_css: 'padding-top: 20px;' # This is the container that holds the cards under the header.
  panel_view_css: 'padding-top: 20px;' # Same as view_css only when using panel view.
  tab_container_css: 'background: pink;'
  all_tabs_css: 'color: purple;'
  tabs_css:
    0: 'color: green;'
    home: 'color: rgb(214, 122, 127)'
    7: 'color: #fafafa; padding: 0 15px;'
```
