---
title: Important Notes
index: 2
---

## Important notes

- Some options can remove your ability to edit with the UI
- If you need to restore the default header add `?disable_ch` to the end of your URL: `http://192.168.1.2:8123/lovelace/1?disable_ch`
- After using "Raw Config Editor" you will need to refresh the page to restore Custom Header
- Swipe navigation is no longer included as it was with CCH. Use [Swipe Navigation](https://github.com/maykar/lovelace-swipe-navigation) instead.
- If templates aren't rendering try replacing double quotes in config options to single quotes. Example: change `background: repeat url("/local/img/header.png")` to `background: repeat url('/local/img/header.png')`
