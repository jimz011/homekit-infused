# Homekit Infused 4.x.x

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Custom Views](custom_views.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

# Introduction 
This is Homekit Infused aka HKI. When you come here for the first time you might be a little confused to what this is. 
Homekit Infused is in a nutshell a customizable 'framework' that you can use to build your own dashboard on, it is preconfigured to have an Apple style to it.
By default it contains the following things:
- A beautiful header with notifications that is customizable per view and is added to each view for you automatically
- A customizable navigation bar which can also be set at the bottom of the screen 
- 11 color schemes
- A lot of (optional) addons that can be turned on/off at will without any coding knowledge to enhance your lovelace experience
- Easy updates, copy/replace 2 folders on each update!
- And MUCH MUCH I mean MUCH more!

### Follow me on YouTube
[Click Here for all the latest updates/videos](https://www.youtube.com/jimz011)

# Disclaimer
Warning:
- I am not responsible for any data loss or defects that are caused by user error.
- Any custom card/component used in this project is not made by me and all credits should go to the original creator.
- Any custom card/component used in this project has a link to it's original repo and creator.

# Hardware I use personally for this setup
#### Computer

- Intel i5 4690 3,6GHz
- 32GB DDR3 1600MHz RAM
- 4x HDD (2x 3TB, 2x 2TB)
- 2x SSD (1x 120GB, 1x 480GB)
- Hypervisor used: Unraid
- Docker: Yes
- VM's: None
- Docker Containers: 60
- Home Assistant: Home Assistant Core running on docker in Unraid

#### Smart Devices
- 6x Philips Hue dimmers (deCONZ controlled)
- 3x IKEA Tradfri remotes (deCONZ controlled)
- 1x Koogeek kh01cn hardware switch (connected through HA with Homekit Controller)
- 11x LED strips (around 70 meters in total) with MagicHome controllers (Flashed with ESPHome, varying from RGB to RGBWC)
- 12x Ikea Tradfri smart switches  (deCONZ controlled)
- 2x Ikea Tradfri bulbs (ranging from normals to color temperature ones)  (deCONZ controlled)
- 13x Philips Hue lights (ranging from filament to color temperature ones)  (deCONZ controlled)
- 3x Sonoff POW R2 (to monitor the washingmachine, dryer and dishwasher)
- 7x Sonoff Basic used as light or device switches (Flashed with ESPHome)
- 2x Sonoffs TH-16 (used to monitor temperature and humidity, but also doubles as a switch)  (Flashed with ESPHome)
- 1x TP-Link HS110 Energy Reading smart switch (to monitor the refrigerator)
- 4x Blitwolf SHP13 Energy Reading smart switch (to monitor the freezer and unraid server)
- 1x Honeywell smoke detector by Xiaomi  (deCONZ controlled)
- 6x Aqara door/window sensors by Xiaomi (3 used on doors, 3 on windows)  (deCONZ controlled)
- 3x Aqara temperature/humidity sensors by Xiaomi  (deCONZ controlled)
- 1x Xiaomi Roborock S55 (Rooted and flashed with Valetudo RE)
- 1x Apple TV 4K
- 1x Nvidia Shield TV Pro (2019)
- 2x Samsung smart TV
- 2x Google Nest mini's
- 1x Google Home mini
- 1x Google Home
- 2x Google Nest Hub
- 2x Aqara motion sensor by Xiaomi (deCONZ controlled)
- 3x IKEA Tradfri Motion sensors (deCONZ controlled)
- 1x Xiaofang Camera (rooted and flashed with Dafang Hacks)
- 1x Simple webcam (via motioneye)
- 1x deCONZ stick by Dresden Elektronic
- 1x Xiaomi Mija Gateway (Lumigateway version 3) (I only ever use this as speaker/light, no other devices are attached to this and it is cut off from the internet)
- 1x Xiaomi Aqara Airconditioning Companion (version 3) (I don't have a compatible airconditioner yet, though it does work as a switch and energy reader, not yet in my HA)
- 1x Unifi Dream Machine Pro
- 2x Unifi AP AC-Lite
- 2x Unifi Flex G3 Camera

There is probably more, but I can't think of it right now XD  
