---
title: Main Config
index: 2
---

## Main Config Options

Options with a :warning: remove the ability to edit from the UI. See [important notes](#intro/notes) on how to restore the default header if needed.

| NAME                  | TYPE    | DEFAULT          | DESCRIPTION                                                                |
| :-------------------- | :------ | :--------------- | :------------------------------------------------------------------------- |
| header_text           | string  | default HA title | Replace the main header text, more info below                              |
| disabled_mode         | Boolean | false            | Disables Custom Header and returns the default HA header                   |
| kiosk_mode            | Boolean | false            | Hides the header and sidebar completely :warning:                          |
| compact_mode          | Boolean | false            | Compacts the header to about half the size while keeping all functionality |
| footer_mode           | Boolean | false            | Places the header at the bottom of the page or flips order of split_mode.  |
| split_mode            | Boolean | false            | Splits header into a header and footer, `footer_mode: true` to flip order. |
| disable_sidebar       | Boolean | false            | Disables and hides the sidebar and menu button                             |
| hide_header           | Boolean | false            | Hides the header, but still allows sidebar to be swiped on from left.      |
| hide_help             | Boolean | false            | Hides the "Help" option in the options menu                                |
| hide_unused           | Boolean | false            | Hides the "Unused Entities" option in the options menu                     |
| hide_refresh          | Boolean | false            | Hides the "Refresh" option in the options menu                             |
| hide_config           | Boolean | false            | Hides the "Configure UI" option in the options menu :warning:              |
| hide_raw              | Boolean | false            | Hides the "Raw Config Editor" option in the options menu :warning:         |
| default_tab_on_refresh| Boolean | true             | Disables/enables going to default tab on refresh. May cause default tab issues in some browsers when disabled.    |

### Example

```yaml
custom_header:
  header_text: '{{ time }}' # See templates section for more on this.
  compact_mode: true
  footer_mode: true
  hide_help: true
```

### Header Text

```yaml
custom_header:
  header_text: 'Custom Header'
```

The text may be 2 lines by using `<br>` to separate.

```yaml
custom_header:
  header_text: 'Custom<br>Header'
```

The next example uses [templates](#templates).

```yaml
custom_header:
  header_text: '{{ time }}<br>{{ date }}'
```
