# Homekit Infused Framework
Homekit Infused v3.0.0 Framework

Placeholder!

This is the Homekit Infused 3.0.0 framework, this is only the framework and will contain unfilled views. You will need to install this first!
After the installation of the framework you can go on to install the addons (or create your own cards), the addons will decide the looks and layout of your installation.
All the cards that were previously included in HKI are now all downloadable separately.

### Preparation
- Install Home Assistant or create a backup of your current setup. I will advise you to install this on a clean Home Assistant install, though it is not a requirement.
- Add all your known devices to Home Assistant (if integrations are available the prefered way would be to use that instead of putting it in manually.
- Create person entities in the UI go to configuration>persons and create all the persons in your house. Add the device_trackers you have to the person entities. Do not use device_trackers in lovelace unless you really need to (e.g. non-person related device_trackers)
- Create a custom alarm, HKI has a lock/alarm in the header, you MUST set this up even if you are never going to use it! https://www.home-assistant.io/integrations/manual/
- Create a time sensor https://www.home-assistant.io/integrations/time_date/, you MUST have this for the homepage greeting to work properly.
- Create/edit a `customize.yaml` file, this file is automatically created whenever you edit an entity through the UI configuration>customize. However you can create this file yourself if you don't have it already. Just put the file at the root of your config (e.g. same location as where `configuration.yaml` is located). You might need the following entry in your `configuration.yaml` file
```
homeassistant:
    customize: !include customize.yaml
```
Now if you have created this file we will start and fill it with our own entities.
If you already have items in that file just add them below the last item, else just start typing exactly as in the example below. You do NOT need to do all of your entities. Just do the ones that are going to get shown in the frontend (e.g. lights, switches, sensors, binary_sensors and your vacuum).
```
switch.washingmachine:
    friendly_name: Washing Machine
    icon: mdi:washing-machine
```
NOTE: The customize.yaml file is the only way that you can change the names/icons for buttons that uses HKI autofill addons. If you do not intend to use any of the HKI addons and just the framework you can skip doing this, however you will not be able to use many of the features besides the HKI framework itself.

### Requirements:
  - Make sure you do not have any leftovers from other themes (e.g. DwainsTheme) as they will conflict, this does not apply to fresh HA installs.
  - You must download HACS!
 
  Below is a list of all the addons required to run the framework, you can install all of them through HACS
| Name | Type  | Description |
|----------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Card Mod](https://github.com/thomasloven/lovelace-card-mod) | Frontend | This mod allows for custom css on any card |
| [Button Card](https://github.com/custom-cards/button-card) | Frontend | This is the button used throughout the entire setup |
| [Layout Card](https://github.com/thomasloven/lovelace-layout-card) | Frontend | This addon is used as a replacement for vertical and horizontal stacks |
| [Custom Header](https://github.com/maykar/custom-header) | Frontend | This is used to modify the standard Home Assistant header |
| [More Info Card](https://github.com/thomasloven/lovelace-more-info-card) | Frontend | This card is used in most popups |
| [Card Tools](https://github.com/thomasloven/lovelace-card-tools) | Frontend | This is needed for various custom cards to run |
| [Swipe Card](https://github.com/bramkragten/swipe-card) | Frontend | This card is needed for the scrolling notifications, but also for most popups |
| [Browser Mod](https://github.com/thomasloven/hass-browser_mod) | Integration | Browser-mod makes the browser more useful and gives us the opportunity to show/create custom popups and many more, make sure you have `browser_mod:` in your `configuration.yaml` after you have installed it. Click the link for instructions! |
| [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen) | Integration | This is the MOST important piece of the setup, without this HKI will not work! Don't add this to your `configuration.yaml` file as the included package already does so for you, if you already have `lovelace_gen:` in your `configuration.yaml` please remove or comment that line! |

All the frontend addons must be installed as `Module`.

### Addons
Please refer to the addons documentation on how to create your own layout with predefined HKI cards or how to create your own. Each card will have a detailed explanation on how to install.

# This documentation is incomplete, you can NOT download this yet!
