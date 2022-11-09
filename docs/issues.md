# Homekit Infused 5

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

## ISSUES

#### Known Issues
  - If you get a `t.setConfig is not a function` error, please re-download `Swipe Card` from HACS!
  - If your popups do not work or get the `custom element doesn't exist: popup-card` error you can try the following solutions below:

```
# Solution by Jimz011
1. Update HKI to the 2022.5.1
2. Delete browser-mod entirely (make sure nothing remains)
3. Re-download browser-mod from HACS with the latest version available at this very moment
4. Restart HA
5. Check in your Devices & Integrations and see if browser-mod is listed and loaded, if not add a new integration and select browser-mod
6. Open up the sidebar to find the browser-mod tab, click on it and register your browser
```
```
# Solution by Markeydoo
1. Install browser mod
2. Thoroughly clear your browser cache 17
3. Go to the Browser Mod panel in your sidebar
4. Make sure the “Register” toggle is checked.
5. This is required in order to enable backend services to target this browser.*
6. Refresh the page (F5)
7. Go to Developer Tools → Services [![Open your Home Assistant instance and show your service developer tools.
8. Select service “Browser Mod: popup (browser_mod.popup)”
9. Check the “Title” checkbar and write something as a title
10. Enter some text in the “Content” text box, not yaml or anything, just any text for now.
11. Click “CALL SERVICE”, The button is likely grayed out. That’s a Home Assistant visual bug. Click it anyway.
12. A popup dialog should now open on all your Registered Browsers.
```

#### QUESTIONS?
For questions please visit any of the support links on the [main page](https://github.com/jimz011/homekit-infused) of this repo.
