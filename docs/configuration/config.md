---
title: Config
index: 1
---

## Configuration

Much of the config can be done by using the UI editor which can be found by selecting "Custom Header" in the options menu of Lovelace (editor is not available in YAML mode). More options will be added to the UI editor as Custom Header progresses.

Everything else is handled in YAML which would either be set in the raw config by selecting "Configure UI" and then "Raw Config Editor" or in the file `ui-lovelace.yaml` if you're using YAML mode.

The YAML configuration happens at the root of your Lovelace config under `custom_header:` at the same level as `resources:` and `views:`. Example:

```yaml
custom_header:
  compact_mode: true
resources:
  - url: /community_plugin/custom-header/custom-header.js
    type: module
views:
```
