# Homekit Infused

## Contents
- [About](index.md)
- [Intro](intro.md)
- [Important Notes](notes.md)
- [Preparation](preparation.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Updates and Addons](updates.md)
- [Tips & Tricks](tips.md)
- [Feature Requests](requests.md)
- [Issues & Questions](issues.md)
- [Thanks](thanks.md)

# About this project
Homekit Infused is a Home Assistant lovelace project designed to mimic, improve and ultimately replace Homekit. Homekit has too much limitations which I think was too bad as it really looks cool if you only have 6 lights :D

Homekit Infused was created as a private project and released to the public as it was requested by many. In the past year the setup has changed quite a bit, not only aesthetically but also codewise. My goal was to make it easier for people to use what I have created without compromising too much on customization that users have made after installing my previous versions of HKI. The setup is still just as 'modular' as it ever was and you will find many improvements over the previous versions if you are an avid user of my setup. New users might find this project very interesting as well, as not only does it give you this wonderful interface, but it will also give you insight on how a bartender (yes that is me) creates code without having any coding knowledge beforehand other than some basic HTML back in the early 2000s.

### Follow me on YouTube
[Click Here for all the latest updates/videos](https://www.youtube.com/channel/UCYfcLj3IuQ-1mrnqgCk8f0w)

# Warnings!!!!
Warning:
  - This project is NOT for beginners, if you do not know the basics of lovelace, you probably shouldn't jump on installing this project too fast (however, it is easier to install/configure than ever). If you don't have the basic knowledge, don't want to learn lovelace or simply want to wait before installing this project to get more knowledge about lovelace then I can recommend you to use apps like HassKit or HassApp (they are both free!). These apps are really really easy to use and even looks good. However it isn't that much customizable and well it has a different style to them (even though it is only a slight difference).
  
  - People coming from HKI 0.13.3 or below I have some bad news, there is NO upgrade path from those versions. You will have to install it fresh (you probably still want to as this code is imho much much better).
  - The icons shown on my videos are from FontAwesome. I use the pro version for my personal use and unfortunately I am not at liberty to share these. I have changed all the icons to and mdi variant for you so you don't have to worry about editing icons yourself.
  
### Changes since HKI 0.13.3:
  - Completely rewritten from the ground up
  - Removed decluttering-card
  - Switched from CCH to CH
  - Removed swipe-navigation (this doesn't seem to play well anymore, CH doesn't have it included either anymore)
  - Added a neat header
  - New notification window
  - New popup cards system-wide which include brightness, color and switch popups
  - New thermostat view and cards
  - New design for several views
  - Added a footer
  - Dynamic Icons system-wide
  - More compact design on several views
  - Easier to configure
  - Auto filling of basic views (cameras/lights/devices/climate/binary_sensors) by filling in the provided group file, popup cards will be added automatically to their respective entities automatically
  - Waze traffic info view
  - Removed swipe-card on most views in favor of state-switch (srry but no more swiping as it would make the frontend crash too often)
  - Made code more compact, 3000 lines less than HKI 0.13.3 but more features as mentioned above!
  - Removed widgets page (proved to be useless)
  - Changed first view to the homepage (this way after a refresh it would open the frontpage instead of the climate view)
  - A lot of small fixes to the design in general (you might not even notice them, but they are there!)
  - probably a lot more which I failed to mention

