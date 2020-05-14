# Homekit Infused

## Contents
- [Introduction](index.md)
- [Preparation](preparation.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Updates and Addons](updates.md)
- [Feature Requests](requests.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

# About Homekit Infused
Homekit Infused v2.0.0 is the craziest lovelace setup out there in YAML mode. It is 90% configurable through the Homekit Infused interface! The other 10% is still super easy to setup. Your views will be auto-filled with your own entities and all you'd need to do is set up a single file! But WAIT!!!!! There is more..........

Homekit Infused has a fully customizable UI, you can create your own frontpage layout with ease with the built-in edit mode which allows you to show/hide and add elements to the UI with a flick of a button. Most of the configuration can be done within the HKI Settings and changes done within the UI are INSTANT!!! Yes you've read it well, no restarts or lovelace refreshes required!

Homekit Infused was created as a private project and released to the public as it was requested by many. In the past year the setup has changed quite a bit, not only aesthetically but also codewise. My goal was to make it easier for people to use what I have created without compromising too much on customization that users have made after installing my previous versions of HKI. The setup is still just as 'modular' as it ever was and you will find many improvements over the previous versions if you are an avid user of my setup. New users might find this project very interesting as well, as not only does it give you this wonderful interface, but it will also give you insight on how a bartender (yes that is me) creates code without having any coding knowledge beforehand other than some basic HTML back in the early 2000s.

### Follow me on YouTube
[Click Here for all the latest updates/videos](https://www.youtube.com/channel/UCYfcLj3IuQ-1mrnqgCk8f0w)

# Warnings!!!!
Warning:
- This lovelace UI is pretty heavy and it is not recommended to run this on a raspberry pi! Minimum requirements would be to use at least a NUC with an i3, 4GB of RAM and preferably more than 1.8Ghz. Better hardware will result in better performance! You can ofcourse proceed and install this on a rpi anyway if you really want to try it (though please share your results with me if you do so as I don't have one and I can't test it). I would personally recommend you to run this in a VM with 6 or 8GB of RAM.
- Questions asked without reading the documentation have the chance of not being answered. Read before you need help! I will however post video's on YT in the future
- Using HKI means you MUST have lovelace in YAML mode, what this means is that you can NO LONGER use the UI editor within lovelace. Therefor all the options to do that have been removed. There is a way to get the UI working, but it would only be for your main dashboard. I will not recommend using that and I will recommend using YAML mode instead for this project. (it will also benefit you as you might learn a thing or two from using YAML mode)
- If you use the NEST integration, you probably do NOT want to do a clean install! You might not be able to restore it. This is only a warning! I do not own a NEST and I have no clue on how it works. I mention this advised by some of the followers of this project.

# Hardware I use personally for this setup
#### Computer
- Intel i5 4690 3,6GHz
- 32GB DDR3 1600MHz RAM
- 4x HDD (2x 3TB, 2x 2TB)
- 2x SSD (1x 120GB, 1x 480GB)

Hypervisor used: Unraid
Docker: Yes
VM's: Windows 10 and Ubuntu 20.04
Home Assistant: Running on docker in Unraid

#### Smart Devices
- 6x Philips Hue dimmers (deCONZ controlled)
- 3x IKEA Tradfri remotes (deCONZ controlled)
- 1x hardware switch from Koogeek (connected through HA with Homekit Controller)
- 6x LED strips (around 30 meters in total) with MagicHome controllers (Flashed with ESPHome)
- 8x Ikea Tradfri smart switches  (deCONZ controlled)
- 12x Ikea Tradfri bulbs (ranging from normals to color temperature ones)  (deCONZ controlled)
- 4x Philips Hue lights (ranging from filament to color temperature ones)  (deCONZ controlled)
- 9x Sonoffs used as switches for devices (ranging from basic to POW R2) (Flashed with ESPHome)
- 11x Sonoff Basic used as light switches (Flashed with ESPHome)
- 1x Honeywell smoke detector by Xiaomi  (deCONZ controlled)
- 3x Aqara door/window sensors by Xiaomi  (deCONZ controlled)
- 3x Aqara temperature/humidity sensors by Xiaomi  (deCONZ controlled)
- 2x temperature/humidity sensors by Sonoff (they double as switches mentioned above)
- 1x Xiaomi Roborock S55 (Rooted and flashed with Valetudo RE)
- 1x Apple TV 4K
- 1x Xiaomi Mi Box S 4K
- 2x Samsung smart TV
- 2x Google Nest mini's
- 1x Google Home mini
- 1x Google Home standard
- 2x Aqara motion sensor by Xiaomi (deCONZ controlled)
- 3x IKEA Tradfri Motion sensors (deCONZ controlled)
- 1x Xiaofang Camera (rooted and flashed with Dafang Hacks)
- 1x deCONZ stick by Dresden Elektronic
- 1x Xiaomi Mija Gateway (Lumigateway version 3) (I only ever use this as speaker/light, no other devices are attached to this and it is cut off from the internet)

There is probably more, but I can't think of it right now XD
