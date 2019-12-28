---
title: HACS
index: 1
---

## Installation with HACS

[HACS](https://github.com/custom-components/hacs) is a custom integration that allows you to search for, discover, install, and manage custom additions to Home Assistant.

1. In the HACS store search for "custom header" and follow the links to install.

2. Add the code below to your resources and refresh the page, this code will also be displayed in HACS for easy copy/paste.

```yaml
resources:
  - url: /community_plugin/custom-header/custom-header.js
    type: module
```
