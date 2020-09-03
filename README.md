# Homekit Infused Framework
Homekit Infused v3.0.0 Framework

[Homekit Infused Framework](https://github.com/jimz011/homekit-infused/tree/3.0.0)
[Homekit Infused Addons](https://github.com/jimz011/homekit-infused/tree/addons)

This is the Homekit Infused 3.0.0 framework, this is only the framework and will contain unfilled views. The framework contains a set of predefined (empty) views, a beautiful header with embedded alarm management, sensor event monitoring, a greeting and notifications. It also contains a footer with the user currently logged in and two buttons that goes to home or the menu. The Homekit Infused Framework can run standalone, the views can be setup manually.

For the entire Homekit Infused Package you will need to install this first! This is the base of Homekit Infused, without it none of the addons will work.
After the installation of the framework you can go on to install the addons (or create your own cards), the addons will decide the looks and layout of your installation.
All the cards that were previously included in HKI will be available separately on the addons page (warning! at this time not all cards have been converted)

### General Preparation
##### Advice
- Install Home Assistant or create a backup of your current setup. I will advise you to install this on a clean Home Assistant install, though it is not a requirement.
- Add all your known devices to Home Assistant (if integrations are available the prefered way would be to use that instead of putting it in manually.
- Create person entities in the UI go to configuration>persons and create all the persons in your house. Add the device_trackers you have to the person entities.

##### Requirements
- Create a custom alarm, HKI has a lock/alarm in the header, you MUST set this up even if you are never going to use it! https://www.home-assistant.io/integrations/manual/
- Create a time sensor https://www.home-assistant.io/integrations/time_date/, you MUST have this for the homepage greeting to work properly.
- Install HACS https://hacs.xyz/docs/installation/manual
- Create/edit a `customize.yaml` file, this file is automatically created whenever you edit an entity through the UI configuration>customize. However you can create this file yourself if you don't have it already. Just put the file at the root of your config, you can also download the example customize.yaml file instead.
You might need the following entry in your `configuration.yaml` file
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
NOTE: The customize.yaml file is the only way that you can change the names/icons for buttons that use HKI autofill addons. If you do not intend to use any of the HKI addons and just the framework you can skip doing this, however you will not be able to use any of the features besides the HKI framework itself.

### HACS
Below is a list of all the addons required to run the framework, you can install all of them through HACS
| Name | Type  | Description |
|----------------------------------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Card Mod](https://github.com/thomasloven/lovelace-card-mod) | Frontend | This mod allows for custom css on any card |
| [Button Card](https://github.com/custom-cards/button-card) | Frontend | This is the button used throughout the entire setup |
| [Layout Card](https://github.com/thomasloven/lovelace-layout-card) | Frontend | This addon is used as a replacement for vertical and horizontal stacks |
| [Custom Header](https://github.com/maykar/custom-header) | Frontend | This is used to modify the standard Home Assistant header |
| [Card Tools](https://github.com/thomasloven/lovelace-card-tools) | Frontend | This is needed for various custom cards to run |
| [Swipe Card](https://github.com/bramkragten/swipe-card) | Frontend | This card is needed for the scrolling notifications, but also for most popups |
| [Browser Mod](https://github.com/thomasloven/hass-browser_mod) | Integration | Browser-mod makes the browser more useful and gives us the opportunity to show/create custom popups and many more, make sure you have `browser_mod:` in your `configuration.yaml` after you have installed it. Click the link for instructions! |
| [Lovelace Gen](https://github.com/thomasloven/hass-lovelace_gen) | Integration | This is the MOST important piece of the setup, without this HKI will not work! Don't add this to your `configuration.yaml` file as the included package already does so for you, if you already have `lovelace_gen:` in your `configuration.yaml` please remove or comment that line! |

All the frontend addons must be installed as `Module`.

### Adding Resources
Resources MUST be added manually which can be done within the Home Assistant configuration panel. Go to the Sidebar > Configuration > Lovelace Dashboards > Resources and add all of the following resources one by one. This makes it possible to use custom resources whenever you might need them and also makes sure you can still use the Home Assistant dashboard you have already created with the UI editor.

Add the following resources, you should select `javascript module` for each of them. 
To make it easier on you, I have compiled a list with all used resources that you can easily copy and enter.
```
/hacsfiles/button-card/button-card.js
/hacsfiles/custom-header/custom-header.js
/hacsfiles/lovelace-card-mod/card-mod.js
/hacsfiles/lovelace-card-tools/card-tools.js
/hacsfiles/lovelace-layout-card/layout-card.js
/hacsfiles/swipe-card/swipe-card.js
``` 
### Installation
Copy the following files/folders to the root of your Home Assistant installation

- Copy the `/homekit-infused/` folder to the root of your setup
- Copy the `/themes/` folder to the root of your setup
- Copy the `homekit-infused.yaml` file to the root of your setup
- Copy the `/packages/` folder to the root of your setup
- Copy the `/www/images/` folder to the `/www/` folder
- Add the following lines to your `configuration.yaml` file
```
homeassistant:
    packages: !include_dir_named packages/
```
Note: If you have an existing setup and already have packages, you must cut/paste the packages folder inside your currently exising packages folder! (depending on the way the folder is included within your configuration.yaml file)

- This will already work if you have used HACS for themes in the past, but to be safe add the following line to your `configuration.yaml` file:
```
frontend:
    themes: !include_dir_merge_named themes/
```

- You must set the following lines in your own `configuration.yaml` file. Without it, it will NOT work:
```
lovelace:
    mode: storage
    dashboards:
      homekit-infused:
        mode: yaml
        title: Homekit Infused
        icon: mdi:home-assistant
        show_in_sidebar: true
        filename: homekit-infused.yaml
```
- As a reminder for if you have missed it when installing the plugins from HACS
```
browser_mod:
```

The copying process should now be completed and we can move on to the configuration part.

### Configuring
There isn't much to configure from here on out, however you do need to setup a few things.
First make sure you have created the alarm entity and that you have the time sensor setup.
Next go to the menu > hki settings and change the theme to your liking, also set the frontpage welcome message!.

To change names and icons that are shown in the header, please open the `/homekit-infused/user/config/header_config.yaml` file and change any setting you like. You will also need to set your alarm_entity inside of this file.

To make the header sensors work (the three icons on the upper right side), you MUST fill in the `/homekit-infused/user/device_counters.yaml` file!

To create notifications you can open the `/homekit-infused/user/notifications.yaml` file, there are some included examples.

You can change the theme settings by going to the `/themes/name_of_theme/user/` folder, it has a little configuration file where you can change the border-radius and/or some basic colors and/or font-type/family/size. (This feature is NOT available yet and will be introduced in the 3.0.1 Framework Update)

### Addons
Addons are the cards to fill the framework with, you are not required to install any of the addons if you don't want to. You can always create your own cards in the exact same way addons work. Please read the addons section of the documentation on how to install or create addons yourself.

### Views
The HKI Framework comes with a preset amount of views that can be manipulated in any way you want (you can even change the names of the views if you so please). Note that the code does NOT allow for path name changes (e.g. you've renamed the lights view to anything else, the path will always remain /lights). The path is only visible in a browser and never in the HA App, so even if you'd rename a view you will most probably not notice it. 

To know which views are available you can simply open the `homekit-infused/user/views/` folder, every view has its own folder and these are the views you can refer to if you need to (the folder name is also the path name, which will make creating navigation buttons easier, if you don't want to use the included menu).

## That's it! You have succesfully installed the Homekit Infused Framework, please continue to the next section on how to download addons for the views and/or create them yourself. (Coming Soon!) [Click Here](https://github.com/jimz011/homekit-infused/tree/addons)
