---
title: Change Log
index: 3
---

## Change Log
Major fixes, added features, or breaking changes.
<hr>


### Dec. 28th 2019 - v1.1.6

- Adds default_tab_on_refresh option
- Adjusts panel view styling
- Fixes animated shadow

### Dec. 24th 2019 - v1.1.4

- Uses default HA header text as default for header_text
- Adds shadow to header can be toggled with `shadow: true` or `shadow: false` 
- Adds split mode to split header into a header and footer, flip order with footer_mode.
- Listens for theme changes and updates accordingly

### Dec. 20th 2019 - v1.1.1

- iOS styling fixes
- Don't redirect to default tab on refresh

### Dec. 19th 2019 - v1.1.0

- Panel view display fixes
- Adds `test_template:`

### Dec. 18th 2019 - v1.0.7

Fixes for:
- View sizing
- 12 hour template
- Default tab
- Current tab indicator

### Dec. 17th 2019 - v1.0.6

- Fix "custom header" menu item

### Dec. 17th 2019 - v1.0.5

- Addresses "Tried to serve up '/config/www/community/custom-header/lit-element.js.map' but it does not exist"

### Dec. 17th 2019 - v1.0.4

- View style fixes
- Panel mode style fixes
- Insert custom header option in disabled mode

### Dec. 16th 2019 - v1.0.3

- Fix default_tab's default so it's not 0 when not set
- Make sure voice icon exists even if voice options are set in config
- Resize header only in Lovelace view and only when needed

### Dec. 16th 2019 - v1.0.2

- Adds localization to editor
- Fixes default tab not working in kiosk mode
- Fixes reversed text on buttons
- Adds hide_header to editor

### Dec. 15th 2019 - v1.0.1

- Added `hide_header: true` to hide the header and still allow sidebar to be swiped in from left.
- Fixed background not filling behind header causing transparent headers to show no background underneath.

### Dec. 15th 2019 - v1.0.0

- Initial release
