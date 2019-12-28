---
title: Manual
index: 2
---

## Manual Installation

1. Download `custom-header.js` from the bottom of the [latest release page](https://github.com/maykar/custom-header/releases/latest) and place it under `www/custom-lovelace/compact-custom-header/` or another folder of your choosing (change url below to match).

2. Add the code below to your resources and refresh the page.

```yaml
resources:
    # Add to the version number at the end of this URL when updating.
  - url: /local/custom-lovelace/custom-header/custom-header.js?v=0.0.1
    type: module
```
