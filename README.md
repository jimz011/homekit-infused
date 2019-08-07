If you find any information on this page useful, feel free to buy me a coffee:

<a href="https://www.buymeacoffee.com/w8Jnf6Hit" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

# Home Assistant 0.97.x compatible Lovelace setup.
My current Home Assistant install (current running version 0.97.0b3)
This is my entirely new release with so much changes that you should read up if you already use parts from my setup! If you are new to this please continue to the introduction below the changes.

## Lovelace setup by jimzz011 July 2019 (*updated: 07/08/2019)
### Changes (07/08/2019)
- Replaced automations.yaml file with a current one. There seemed to be duplicate automations in the old one. Use parts from this one instead.
- Added up to date custom cards to the community folder (yes some people seem to want to copy these instead of using HACS like I asked you to do so, so there you go)
(*note: you can NOT copy the hacs folder from custom_components from my repo, it will NOT work, please download your own session of HACS)
### Changes (05/08/2019) (*note: This setup will work perfectly fine with 0.97.x however themes only seem to work when I throw an automation at it (this means it will be set for all users), the dynamic standard themes (day/night) will work just fine, though for now setting a theme per user does not work. If setting globally use the lovelace button I created and the corresponding automations (or make your own)! It probably has to do with the way I have themed this and might require a rewrite.

A very very great summer to all of you, I hope you enjoy your summer. Today I have a great update for all of you. This update is massive! Why? Well remember that I wanted to experiment with conditional cards and more users? Well guess what I was not satisfied with the result. Yes I was satisfied with how it looked, but not the way it was coded. It was extremely slow to a point my old iPad Air wouldn't want to load this setup anymore. So this time around I have rewritten every single page in the setup and boy you are going to love this! (sorry for the ones that were adopting my previous setup, but this will make your life, and mine, a lot easier).

So lets talk about what has changed. For this release I have changed a lot of simple stuff. My setup was way too complicated and even I got lost in it. Now it is as simple as this: Every menu item (what used to be popup cards) are now just separate views. This is far easier to maintain. Extremely easy to edit and even easier to get it running as you can now work view by view. Performance has gone up massively. It loads about 2 to 3 times faster than the previous setup whilst having added a bit more features. The setup will work EXACTLY the same as before and you might not see the difference at first glance. I have worked out a lot of small details that were bugging me and I have redesigned the top part of the screen on every page so that the setup is now consistently the same on every view.

What does this mean for multi-user setup? Well nothing! It means you don't need input_booleans and a bunch of conditional cards anymore to reach te same result. What does it mean for my old setup? Well, I suggest starting over! (I am terribly sorry). But after a week of testing, this is actually a config I am comfortable with to say I will not change the way this works. Obviously I will be continuing working on the setup. But I am actually very very happy on how the current method turned out. You might wonder if you see all those tabs in the header then? Well no, the header is hidden on smartphones now. And on an ipad/tablet the header only shows the first 5 tabs (just like it used to be). All other tabs are hidden, you will not be able to swipe to them by accident and you will not be able to access them from the header at all. Everything will look and feel exactly like it was, just better! Ofcourse for convenience the first 5 tabs (which were already there) are still swipable.

All Changes:
- Completely rewritten lovelace setup for performance, ease of use and code reduction
- Removed almost 2000 lines of code (with the same end result yay)
- Added a quickmenu to every page for quickaccess to common views, the buttons change depending on the view you are on.
- Added a dog picture elements on the frontpage
- Groundwork for a decent landscape tablet mode, at the moment most of the elements are already great for use on a tablet in landscape mode. Unfortunately some elements will still look better on portret mode like the vacuum control panel. But nevertheless it is looking really great for the future. For screenshots please check the home assistant community website: https://community.home-assistant.io/t/homekit-inspired-lovelace-by-jimz011-august-2019-ha-0-96-x-compatible-now-with-dynamic-themes/117086
- Removed the header on all devices. My ipad still has a header which is added to the exceptions with CCH
- Removed all conditional-cards that functioned as a popup card to use the new views instead
- All input_booleans that had a name are replaced with a dummy one. Buttons will now just navigate you to the right view.
- Changed titles, headers etc to be more consistent with the rest of the setup.
- Now when the alarm is activated, the frontpage buttons will hide and the weather panel will be changed with a quickaccess menu, this is to prevent accidental presses in the interface whilst not being home and will prevent the alarm from going off for no reason but human error e.g. phone is unlocked, in your pants and you accidentally press a light button in your pocket, light turns on, sensor gets tripped, boom alarm goes off!. (this has never happened to me, but still this change is nice). The weather bar at the top will become a quickmenu with camera/menu/alarm buttons. So you can quickly access your camera's and alarm system. And if you really really have to whilst the alarm is activated, you can still go into the menu where you have access to everything.
- Decluttered A LOT, this includes the blank-card I used to create a gap between the borders of the screen. Each button is now 1 line! (I have had many suggestions to use a decluttering card for this, but I actually think this is much easier as it is just a single line, just make sure the path is correct)
- Minor changes to the vacuum control center to look better on the provided dark theme
- Added missing wallpapers and moved all unused images to another folder. This will make searching for the right image so much easier no?
- Many many little bugfixes and changes to detail.

Videos from this release:

Full Video: https://www.youtube.com/watch?v=Ng0EDltHujY

Tablet View: https://www.youtube.com/watch?v=105sd8tp4dg (srry my tablet is slow and old)

Quick Menu: https://www.youtube.com/watch?v=_4OUzDfBgIY (this is visible on all other views by default)

Alarm Interface Lock: https://www.youtube.com/watch?v=wsIgwRQdPFo

### Click here for the [Full Change Log](https://github.com/jimz011/homeassistant/blob/master/CHANGELOG.md)

## Introduction
Hello fellow home assistant users, I have started using Home Assistant almost a year ago and I absolutely love it. It is very addictive (as I think many of the people viewing this will know that feeling). Anyways I had done some basic HTML in the early 2000's but that was basically it. So I went into this software and this is what I have got to share. Bare in mind that I am just an amateur hobbyist that has no clue of what he's writing but I just try to read up on the community forums. It is not always as easy as it sounds knowing that Home Assistant changes fast, and I mean really fast. Things written down 2 months ago might already be outdated. So this is the code I came up with messing around with it and it works pretty good :P, ofcourse this is a work in progress and I will try to better the code, make it cleaner and look for details. For now I hope someone can make use of this.

### Screenshots
*Note: Screenshots are outdated, they still reside on the server as reference. My setup has changed a lot do not look at those, look at the video instead!

#### Video
Video: CLICK ON THE IMAGE TO START VIDEO (*updated 05/08/2019)

[![Watch Video](https://img.youtube.com/vi/Ng0EDltHujY/0.jpg)](https://youtu.be/Ng0EDltHujY)

### How to use

Prerequisites:
- Home Assistant 0.95.x or 0.96.x or 0.97.x (note: themes only work with automations in 0.97.x, if you copy the corresponding 4 automations, the 2 for startup and the ones that change theme from day to night and vice versa, it will just work fine out of the box)
- A bunch of custom-cards, see below for links
- Patience
- Some more patience
- A whole lot of more patience
- Have lovelace set in `yaml` mode, it has `!includes` and is split into multiple files which are NOT supported by the UI editor. To set lovelace to use the yaml mode put the following line into your `configuration.yaml`:
```
lovelace:
  mode: yaml
```
To use this Lovelace setup I highly recommend it that you only try this on a test environment or have at least basic knowledge of how to use Lovelace and custom cards. If you don't know how to work in Lovelace you could seriously hurt your setup to the point it will no longer render the page until you fix the error.
```
ALWAYS MAKE BACKUPS!!!!!!!!!
```
Make sure you always make a backup of your `ui-lovelace.yaml` file and other files if needed. I can not give guarantees that the setup works for anyone but myself. Everyone has different entities and more or less switches/sensors/camera's etc. If you happen to have a quite similar setup like I have you might get away with just changing the entity ID's but I highly recommend you to only use snippets of the setup and not just blatantly copy the entire thing and complain that it doesn't work. Because trust me, it isn't going to work :D. If you do decide to take the risk and copy everything, then make sure you at least remove ALL of the !secret entries and replace them with values of your own, and if you do not have those values yet, comment them out! Fail to do this and it won't start. Next is making sure you have every custom card setup, do this with HACS, find the link and instructions below. One day I might make a version that is more like a template and will only require changing basic stuff, but that day is far away (if ever). Though recent changes have put this setup in the right direction.

Try to use RAW versions of the text to avoid any kind of wrongful spaces. Remember that I warned you :D!

To make it easier on you if you want to copy it entirely is to first check the following:
- Make sure to either remove or replace ALL `!secret` entries as it won't start if they are undefined. I'd suggest commenting out the lines in lovelace and replacing them with your own config in `configuration.yaml`.
- Make sure you have downloaded all custom-cards with HACS (and/or imported them) before you begin.
- Make sure you download the relevant custom-components if desired
- I have a split config, this means saving things will not be as you are probably used to. Regular files like automation.yaml etc will behave as usual. This means changing anything in these files will require a restart or a soft restart from the UI. Lovelace behaves differently this way. Yes it is easier to manage, but it comes with a major downside. Any changes made in any of the files in lovelace will require you to save `ui-lovelace.yaml` every single time! DON'T FORGET THIS! Even if you don't make any changes to this `ui-lovelace.yaml` and have changed ONLY `main-view.yaml` you will still have to save `ui-lovelace.yaml`. Best way to do this is just to do a save all action in your favorite text editor. Know that some editors do not allow you to save if the file is unchanged (e.g. notepad++). I suggest not using any of those text editors. I would advise you to use Sublime Text Editor as it is lightweight, free, easy on the eyes and makes code look a lot more comprehensible.
- To start I would suggest trying a light page or even better the security page first. These are light on code and are easy to manage
- Comment out the popup cards, they probably don't work anyways. Best to add these last when you have the basics running.
- I can't stress out more that it is ALWAYS better to build from the ground up instead of copying a setup. I would advise you to copy snippets of the code to incorporate that into your own setup. But if you really want to dive in deep you are free to do so.
- On some Android devices it won't accept a hold_action when deep_press: true is enabled. Remove these lines from the switch-template.yaml and light-template.yaml. It is only useful for iphone users and will do nothing for Android.

## Addons Required, you will need HACS to download them for use with this setup (you can use the older custom_updater but I would highly recommend you to use HACS instead https://custom-components.github.io/hacs/installation/manual/. Some of the addons are not available on HACS, however you can import them yourself. Read the HACS docs on how to install non supported plugins/addons!! The links provided here will help you add them quickly.

Now lets get into the custom-cards and components you will need (components are optional as they might not apply to you).
Cards:
* [Card-Loader](https://github.com/thomasloven/lovelace-card-loader) - Not supported, install Manually - This mod will make sure cards are loaded before they are presented. Without this cards might not load until a refresh of the page.
* [Deep-Press](https://github.com/roflcoopter/deep-press) - HACS Supported, install with HACS - This is a great card for iphone users with 3d touch. Actually it isn't a card it modifies existing cards to support 3d touch. If you have an iphone that supports this I highly recommend you to use this. If you are not using this, remove the `deep_press: true` line from `switch-template.yaml` and `light-template.yaml`.
* [State-Switch](https://github.com/thomasloven/lovelace-state-switch) - Not supported, install Manually - Important if you want to be able to have multiple users to use your interface. My setup is not compatible out of the box without this. If you don't care for multi user you will have to manually remove the custom:state-switch entries.
* [Swipe-Card](https://github.com/bramkragten/custom-ui/tree/master/swipe-card) - HACS Supported, install with HACS - This is used to display the beautiful animation on the 'popup' cards and being able to swipe/flick through them. This is ESSENTIAL.
* [Button-Card](https://github.com/custom-cards/button-card) - HACS Supported, install with HACS - The MOST IMPORTANT card of my setup, you will need this!!
* [Lovelace-Card-Mod](https://github.com/thomasloven/lovelace-card-mod) - HACS Supported, install with HACS - Mods all the core cards to use CSS etc. Previously card-modder was used for this purpose.
* [Card-Tools](https://github.com/thomasloven/lovelace-card-tools) - Not supported, install Manually - ESSENTIAL many custom-cards depend on this, including Card-Modder
* [Compact-Custom-Header](https://github.com/maykar/compact-custom-header) - HACS Supported, install with HACS - Not essential, however one of my most favorite cards, it makes swipe navigation possible in lovelace as well as the ability to tweak the header just the way you want! I recommend to install this.
* [Popup-Card](https://github.com/thomasloven/lovelace-popup-card) - Not supported, install Manually - This card is no longer essential, if you had it before you can keep it. This will no longer be used in the future. However it is still used on some pages. Though the pages will load fine without this.
* [Thermostat-Card](https://github.com/ciotlosm/custom-lovelace/tree/master/thermostat-card) - Not supported, install Manually -  You will need to clone this card to your own repository as HACS can't read subfolders on github repo's or find someone that has it.
* [Upcoming-Media-Card](https://github.com/custom-cards/upcoming-media-card) - HACS Supported, install with HACS - Required if you want the upcoming media card. You will require a custom component for Sonarr and Radarr as well. If you do not run something like Kodi/Plex and get the films/series yourself you will have no use for this.
* [Lovelace-Markdown-Mod](https://github.com/thomasloven/lovelace-markdown-mod) - HACS Supported, install with HACS - Mods the core markdown card to be more useful. Previously useful-markdown-card was used for this
* [Vertical-Stack-In-Card](https://github.com/custom-cards/vertical-stack-in-card) - HACS Supported, install with HACS - You do not need this and I would not recommend using it on this setup. I have modified the js to have a transparent background as this card enforces a background. I'd recommend using a regular vertical-stack for this. I only use this for my custom:check-marker-cards
* [Mini-Media-Player](https://github.com/kalkih/mini-media-player) - HACS Supported, install with HACS - Beautiful replacement for the standard media player. I'd recommend this. The border-radius can not be set for iOS with a card-modder card on this. You will have to change the border radius in the js file of the card. Don't know what you are doing? Don't worry you can always redownload the file. Or just leave it as is.
* [Lovelace-Xiaomi-Vacuum-Map-Card](https://github.com/PiotrMachowski/Home-Assistant-Lovelace-Xiaomi-Vacuum-Map-card) - HACS Supported, install with HACS - This is the vacuum map card I use to set up zoned cleaning or make the robot move to a certain location on the map! If you have a vacuum then this is a must and I highly recommend you to download this
* [Calendar-Card](https://github.com/ljmerza/calendar-card) - This is the card I use to show our calendars. Recommended!
* [Simple-Weather-Card](https://github.com/kalkih/simple-weather-card) - HACS Supported, install with HACS - This is the beautiful minimalistic weather card which is seen on the top of my home screen. I like it a lot as it takes so much less space than most weather cards and it is imo one of the least important data to know. All I need to know is, what is the Temperature and "Is it going to rain?".
* [Lovelace-PostNL](https://github.com/peternijssen/lovelace-postnl) - HACS Supported, install with HACS - Highly recommended if you are a Dutch citizen (all Dutch citizens use this postal service). If you are not Dutch it is no use to install this. Get a card that does fit your needs! (if there is one ofcourse)
* [Mini-Graph-Card](https://github.com/kalkih/mini-graph-card) - HACS Supported, install with HACS - The best card for making graphs by a long shot! Highly recommended!
* [Light-Entity-Card](https://github.com/ljmerza/light-entity-card) - HACS Supported, install with HACS - A beautiful replacement for a color wheel. Can be used as a card or as seen in my setup (see video) with a popup card.
* [Lovelace-Decluttering-Card](https://github.com/custom-cards/decluttering-card) - HACS Supported, install with HACS -  ESSENTIAL and VERY IMPORTANT. None of the buttons in my config will ever render without this card. All buttons except for the light buttons are based of a single template. No template means no buttons. Do not fail to install this! This card is used as a replacement to YAML anchors which I previously used in my setup. This is way more versatile and better in every way (though anchors have some benefits as well).
* [Sun-Card](https://github.com/mishaaq/sun-card) - Not supported, install Manually - This is the sun card I use on the weather page. It tracks sunset/sunrise.
* [check-button-card](https://github.com/Gluwc/check-button-card) - Not supported, install Manually - This is the card I use to track how long ago a specific action was done (e.g. how long ago it was when the bathroom was cleaned). They are easy to setup and it is easy to use, however I am not satisfied with the way it looks. It is in my setup right now, but will likely be removed in the future.

Custom Components:
* [RDW-Sensor](https://github.com/eelcohn/home-assistant-rdw) - Not supported, install Manually - Only useful for Dutch citizens. Used for car license plates, APK and Insurrance tracking.
* [Sonarr-Upcoming-Media](https://github.com/custom-components/sensor.sonarr_upcoming_media) - HACS Supported, install with HACS - Required to use with Upcoming Media Card.
* [Radarr-Upcoming-Media](https://github.com/custom-components/sensor.radarr_upcoming_media) - HACS Supported, install with HACS - Required to use with Upcoming Media Card.
* [XboxOne](https://github.com/hunterjm/hassio-addons/tree/master/xboxone) - Not supported, install Manually - Xbox One Component to control you Xbox one from Home Assistant

## TO DO (*updated: 24/07/2019)
- Optimize Theming. ###In Progress
- Switching out the last popup cards for alternative cards. ###In Progress
- Scenes (continue the testing of my automations and where needed change) ###Postponed for later evaluation
- Xiaomi Plantsensor Cards ###Postponed to a future release
- Dog food and water dispenser ###Waiting for order to arrive, postponed to the first week of August.
- Other graphs related to servers/computers etc. ###Postponed to a future release
- Declutter some more cards ###Always in Progress
- Add even more buttons to then menu to get all functions in one place ###Currently in Progress
- And many more, which I can't think of at the moment and trust me it is probably a lot! ###Always in Progress



### Questions?

Please ask any question you have on the Home Assistant community forums.
https://community.home-assistant.io/t/homekit-inspired-lovelace-by-jimzz011-may-2019-ha-0-93-x-0-94-x-compatible/117086

## Thank you

Thank you for taking your time reading all this mess, I hope you have great fun with Home Assistant as I have and I will always try to help people out where I can, but as I said I am only an amateur so do not expect miracles :P.
Anyways have fun and see you next time!

## A very special thanks to
@ciotlosm

@thomasloven

@balloob

@gluwc

@maykar

@robbiet480

@ljmerza

@iantrich

@kalkih

@bramkragten

@peternijssen

@eelcohn

@hunterjm

@jc2k

@kuuji

@romrider

@roflcoopter

@3_14 / @Piotrmachowski

@everyone I forgot to mention

I am really sorry, I have tried to get you all. But also a very big thank you to all of the ones not mentioned here. And ofcourse the Home Assistant community which helped me out a lot.

## Author

Jimz011
