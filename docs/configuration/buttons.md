---
title: Buttons
index: 3
---

## Button Config Options

Options with a :warning: remove the ability to edit from the UI. See [important notes](#intro/notes) on how to restore the default header if needed.

| NAME                     | TYPE    | DEFAULT | DESCRIPTION                                   |
| :----------------------- | :------ | :------ | :-------------------------------------------- |
| menu_hide                | Boolean | false   | Hides the menu button                         |
| voice_hide               | Boolean | false   | Hides the voice button                        |
| options_hide             | Boolean | false   | Hides the options button :warning:            |
| menu_dropdown            | Boolean | false   | Places menu button in the options drop-down   |
| voice_dropdown           | Boolean | false   | Places voice button in the options drop-down  |
| reverse_button_direction | Boolean | false   | Places buttons at opposite side of the window |
| button_icons             |         |         | Set the icon of each button, more info below  |
| button_text              |         |         | Set text instead of an icon, more info below  |

### Button Icons

You can set any of the button's icons using `button_icons`.

```yaml
custom_header:
  button_icons:
    menu: mdi:skull
    voice: mdi:home
    options: mdi:death-star-variant
```

### Button Text

You can set any of the button's as text instead of icons using `button_text`.
The text may be 2 lines by using `<br>` to separate.

```yaml
custom_header:
  button_text:
    menu: 'menu'
    voice: 'voice<br>button'
    # The next example is using templates. See templates page for more info.
    options: '{{ time }}<br>{{ date }}'
```
