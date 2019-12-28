---
title: Examples
index: 4
---

## Examples Using Entities

If Paulus is "home" default tab is 0 else default tab is 5.

```yaml
custom_header:
  default_tab: '{% if is_state("device_tracker.paulus", "home") %}0{% else %}5{% endif %}'
```

Return true for compact mode if `input_boolean.home` is "on".

```yaml
custom_header:
  compact_mode: '{{ states.input_boolean.home.state  == "on" }}'
```

## Examples Using Built-in Vars

This will make the header text display a clock like this: `1:45 pm`.

```yaml
custom_header:
  header_text: '{{ hours12 }}:{{ minutesLZ }} {{ ampm }}'
```

This will make the menu button display the date like this `Wed. Dec. 25 2019`.

```yaml
custom_header:
  button_text:
    menu: '{{ dayNameShort }}. {{ monthNameShort }}. {{ dayNum }} {{ year4d }}'
```
