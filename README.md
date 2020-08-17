# Homekit Infused Framework
Homekit Infused v3.0.0 Framework

Placeholder!

This is the Homekit Infused 3.0.0 framework, this is only the framework and will contain unfilled views. You will need to install this first!
After the installation of the framework you can go on to install the addons (or create your own cards), the addons will decide the looks and layout of your installation.
All the cards that were previously included in HKI are now all downloadable separately.

### Requirements:
  - Make sure you do not have any leftovers from other themes (e.g. DwainsTheme) as they will conflict, this does not apply to fresh HA installs.
  - You must download HACS!
 
  Below is a list of all the addons required to run the framework, you can install all of them through HACS
| Name | Type | Required | Description |
|----------------------------------|----------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Card Mod](https://github.com/thomasloven/lovelace-card-mod) | Frontend | Yes | This mod allows for custom css on any card |
| [Button Card](https://github.com/custom-cards/button-card) | Frontend | Yes | This is the button used throughout the entire setup |
| [Layout Card](https://github.com/thomasloven/lovelace-layout-card) | Frontend | Yes | This addon is used as a replacement for vertical and horizontal stacks |
| [Custom Header](https://github.com/maykar/custom-header) | Frontend | Yes | This is used to modify the standard Home Assistant header |
| [More Info Card](https://github.com/thomasloven/lovelace-more-info-card) | Frontend | Yes | This card is used in most popups |
| [Card Tools](https://github.com/thomasloven/lovelace-card-tools) | Frontend | Yes | This is needed for various custom cards to run |
| [Swipe Card](https://github.com/bramkragten/swipe-card) | Frontend | Yes | This card is needed for the scrolling notifications, but also for most popups |
| [Browser Mod](https://github.com/thomasloven/hass-browser_mod) | Integration | Yes | Browser-mod makes the browser more useful and gives us the opportunity to show/create custom popups and many more, make sure you have `browser_mod:` in your `configuration.yaml` after you have installed it. Click the link for instructions! |
| [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen) | Integration | Yes | This is the MOST important piece of the setup, without this HKI will not work! Don't add this to your `configuration.yaml` file as the included package already does so for you, if you already have `lovelace_gen:` in your `configuration.yaml` please remove or comment that line! |

All the frontend addons must be installed as `Module`.

### Addons
Please refer to the addons documentation on how to create your own layout with predefined HKI cards or how to create your own. Each card will have a detailed explanation on how to install.

# This documentation is incomplete, you can NOT download this yet!
