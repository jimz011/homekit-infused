# Homekit Infused

## Contents
- [About](index.md)
- [Intro](intro.md)
- [Preparation](preparation.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Updates and Addons](updates.md)
- [Feature Requests](requests.md)
- [Issues & Questions](issues.md)
- [Thanks](thanks.md)

# INTRO

Hello everyone my name is Jimmy (jimz011) and I proudly present to you the latest version of Homekit Infused.
I know there was a long 'silence' before I came with an update. I can certainly tell you why. Homekit Infused has been completely rewritten from the ground up.
It took me months to rewrite all of it but it is finally done. (Take in account that I have a full-time job so time is a luxury product)

So to start off, I must sadly announce that there is no upgrade path from previous versions of HKI, the reason for this is simple. The code has changed too much!
It would be like trying to release the youtube app as an update to the facebook app. This is obviously not ideal and I had to choose to either continue the old project, or create a new one that should be better, especially considering the future.
So I chose to rewrite everything and boy it was a lot of work, not only did I rewrite it, I also found ways for a lot of the config to be easier to set up. As a non-developer (I am a bartender) you can imagine all the headaches it caused me to figure out a way to do this.
But I have found ways, they might not always seem very beautiful, because remember I'm not a programmer. But hey it works, which is all that counts.

One of the major changes, which I might consider the biggest change of all is the removal of decluttering-cards. All templates are now handled through lovelace_gen as well as global configuration. Lovelace_gen was a requirement for a global config to happen.
For all the users that made lots of customizations with this project not all hope is lost. All old decluttering-templates and cards can be cut/paste in the new config just like it was in the old one. So if you did make customizations you could still use them, but it might require you some extra work to put them on the right places.
I will however advise you to switch over to lovelace_gen templates in the long term as this is the mod that we will see more and more in the future on other HA setups, mark my words. You can find tutorials on how to do this in the future in these docs.
Why did I change to lovelace_gen? Well first and foremost it is a mod and not a card, it modifies the yaml parser and allows us to do templating stuff in lovelace. It also allows us to create decluttering style templates that can be used in a similar fashion that decluttering-card used.
But it is more than that, it is currently also the only way I know of that is capable of building a global config. That is what this entire update is about, simplification. In the end only a few files will need to be edited to get you up and running fairly quickly.

Anyways, lets not make this any longer than it should be and get into the project as I would love to tell you more about myself and why I use Home Assistant, but you can find a lengthy interview of me that I did a while back https://gadget-freakz.com/interview-with-jimz011/.
It isn't very recent anymore, but you will certainly get the idea.

I hope you enjoy this release,

Yours Sincerely,

Jimz011

# Hardware I use personally for this setup
#### Computer
Intel i5 4690 3,6GHz
32GB DDR3 1600MHz RAM
4x HDD (2x 3TB, 2x 2TB)
2x SSD (1x 120GB, 1x 480GB)

Software used: ESXI Hypervisor with 4 cores and 8GB of RAM assigned to Home Assistant.

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
- 2x Aqara temperature/humidity sensors by Sonoff (they double as switches mentioned above)
- 1x Xiaomi Roborock S55 (Rooted and flashed with Valetudo RE)
- 2x Apple TV 4K
- 2x Samsung smart TV
- 2x Google Nest mini's
- 2x Aqara motion sensor by Xiaomi (deCONZ controlled)
- 3x IKEA Tradfri Motion sensors (deCONZ controlled)
- 1x Xiaofang Camera (rooted and flashed with Dafang Hacks)
- 1x deCONZ stick by Dresden Elektronic
- 1x Xiaomi Mija Gateway (Lumigateway version 3) (I only ever use this as speaker/light, no other devices are attached to this and it is cut off from the internet)

There is probably more, but I can't think of it right now XD
