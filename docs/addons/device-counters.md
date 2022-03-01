# Homekit Infused 5

## Content
- [Introduction](../index.md)
- [Installation](../installation.md)
- [Configuration](../configuration.md)
- [Addons](../addons.md)
- [Updates](../updates.md)
- [Issues & Questions](../issues.md)
- [About Me](../about.md)
- [Thanks](../thanks.md)

## Device Counters

Settings for this can be found in `/hki-user/device-counters.yaml` and must be edited in that file.

By default HKI has device counters to create sensors that will show you the amount of devices/lights etc that are on at this very moment. Currently you can only use the preconfigured items that are named in that file, this might change in the future.

### Information
When filling this file you get a few sensors that you can use in your setup. By default the header sensors should work out of the box (provided that you filled the device_counters.yaml file)
You can use the sensors anywhere you like (for example inside of a navigation button), below is a list of all the available sensors you can use. You can find the documentation of how to setup a badge inside a button [here](https://github.com/jimz011/homekit-infused/blob/master/docs/addons/button-navigation.md) and find examples of my personal setup [here](https://github.com/jimz011/homekit-infused/blob/personal/homekit-infused/user/views/menu/menu-card.yaml).

*Remember that this will NOT work without the device_counters.yaml file!!!

List of available sensors to use:
- sensor.current_devices_on (to show all devices currently on)
- sensor.current_lights_on (to show all lights currently on)
- sensor.current_climate_entities_on (to show all climate devices currently on)
- sensor.current_binary_sensors_on (to show all binary sensors currently on)
- sensor.current_doors_open (to show all doors currently open)
- sensor.current_windows_open (to show all windows currently open)
- sensor.current_motion_sensors_on (to show all motion sensors currently active)
- sensor.current_covers_open (to show all covers currently open)
- sensor.current_garage_doors_open (to show all garage doors currently open)
- sensor.current_fans_on (to show all fans currently on)
- sensor.current_detectors_on (to show all detector entities, like gas/smoke/fire, currently on)
