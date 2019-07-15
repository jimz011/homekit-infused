# Home Assistant 0.95.x compatible Lovelace setup.
My current Home Assistant install (current running version 0.95.4)
This is my entirely new release with so much changes that you should read up if you already use parts from my setup! If you are new to this please continue to the introduction below the changes.

## Lovelace setup by jimzz011 July 2019 (*updated: 15/07/2019)
### Changes (15/07/2019)
BREAKING CHANGE:
- This update has a major change and that is the removal of popup cards, there are some left, but most are gone now in favor of state-switches and conditional cards. This is still experimental so it is prone to change! The reason why I removed popup cards are simple. They are hard to use when copying an entire setup as they need to be setup correctly for them to work properly, this also means that you will need to adjust all the entities first before the card will show up properly. Conditional cards solves this problem as it will just display nothing if nothing is defined and will not break all other popup cards in the chain. Another major reason is because the size of the popup cards look really awkward on tablets when using conditional cards within those popups. The location of the popup will change randomly to a point you can't even see it on your screen anymore. This is most prominent on tablets/desktops. Another major reason is iOS. When you try to run popup cards on iOS it sometimes bugs and show you a duplicate of the card within the same popup. It looks really bad and only retrying to open the card fixes the problem, this is most prominent on older hardware like an iPad Air, iPhone 6s and less on newer devices like the iPhone 8 or iPhone X.
- So after reading the above you might think by yourself, 'Hey Jimz', 'if you use conditional cards, how will you deal with multiple users as they would clearly be visible to all users now wouldn't it?'. I'd say good question and the experimental solution is this: in this release I have added a state-switch to show views per user now.
- 'But Jimz, that would massively increase the code now wouldn't it?', Well not necessarily. I have removed many of the input_select options I had before and removed all the buttons that came with the popup cards (the 4 buttons on top of almost every popup card). It took up a lot of code and the removal of all these lines make up for the added code discussed above.
- 'And how would I get to those pages that were previously accessible with those buttons?' Easy, you simply swipe on the "popup" now and it will switch the page.

These changes will make per user views possible and changing anything in the menu or anything else in lovelace will not affect the other user when used at the same time. This means that when I open up the vacuum control panel (which is a conditional card) will only show for me and not for my wife and vice versa. She can open the same page at the same time and she will have no interference of me using the same conditional card!

Changes:
- Removed most input_select options with the exception of a few (like the menu)
- Removed popup-cards with the exception of weather and light page (to show a more-info window in a popup, this will be replaced by browser-mod in the next update)
- Added conditional cards in favor of popup cards, this has changed the config A LOT, do not overwrite your config with this if you do not know what you are doing
- Removed all buttons that used to navigate you through the popup-cards, this also affects all newly added cards like the vacuum control center card.
- Added swipe-card in favor of the old input_select buttons, this makes one handed use on phones a breeze.
- Added state-switch to accomodate for multi-users which was previously no problem with popup-cards. WARNING: This is a massive change and has made the setup a lot more complicated for new users. I use includes A LOT because not only will it save me a lot of time if I break a piece of the code (as most of the time only that part will not load) and is it easier to find, but also gives me the opportunity to organise the code in a way that I find suitable (and duplication of code doesn't look that bad this way, as they are in separate files).
- Split decluttering templates, this makes it easier to manage your templates and add very long templates if needed as this won't clutter the decluttering templates file :P
- Many minor changes to the UI to accomodate for all these changes above

You know what? Why don't you see for yourself what has changed?
Video: CLICK ON THE IMAGE TO START VIDEO

[![Watch Video](https://img.youtube.com/vi/cBBTLzPO5Ag/0.jpg)](https://youtu.be/cBBTLzPO5Ag) 


### For older changelogs please scroll down to the bottom of the page!

## Introduction
Hello fellow home assistant users, I have started using Home Assistant almost a year ago and I absolutely love it. It is very addictive (as I think many of the people viewing this will know that feeling). Anyways I had done some basic HTML in the early 2000's but that was basically it. So I went into this software and this is what I have got to share. Bare in mind that I am just an amateur hobbyist that has no clue of what he's writing but I just try to read up on the community forums. It is not always as easy as it sounds knowing that Home Assistant changes fast, and I mean really fast. Things written down 2 months ago might already be outdated. So this is the code I came up with messing around with it and it works pretty good :P, ofcourse this is a work in progress and I will try to better the code, make it cleaner and look for details. For now I hope someone can make use of this.

### Screenshots and Video

Screenshot Summary (find more screenshots in the screenshots folder with the rest of the files):
*Note: Screenshots/videos are a bit outdated, most views will largely still look the same, it is just more optimized now and it has had a lot more attention to small details like spacings between buttons and borders etc. I will post new screens/vids in the future.

<img src="https://github.com/jimz011/homeassistant/blob/master/screenshots/1.jpg" width="300" height="650">
<img src="https://github.com/jimz011/homeassistant/blob/master/screenshots/2.jpg" width="300" height="650">
<img src="https://github.com/jimz011/homeassistant/blob/master/screenshots/3.jpg" width="300" height="650">
<img src="https://github.com/jimz011/homeassistant/blob/master/screenshots/4.jpg" width="300" height="650">
<img src="https://github.com/jimz011/homeassistant/blob/master/screenshots/5.jpg" width="300" height="650">

<img src="https://github.com/jimz011/homeassistant/blob/master/screenshots/red1.jpg" width="300" height="650">
<img src="https://github.com/jimz011/homeassistant/blob/master/screenshots/red2.jpg" width="300" height="650">

#### Don't stop here! Watch the video!
*Note: Screenshots/videos are a bit outdated, most views will largely still look the same, it is just more optimized now and it has had a lot more attention to small details like spacings between buttons and borders etc. I will post new screens/vids in the future.
There is SOO much going on in just 5 views that I can't possibly throw all the screenshots here without making this document unreadable. Please refer to the screenshots folder for more screenshots OR watch the video below which will give you the grand tour into this setup!

Video: CLICK ON THE IMAGE TO START VIDEO

[![Watch Video](https://img.youtube.com/vi/NFj7gwNAYPg/0.jpg)](https://youtu.be/NFj7gwNAYPg) 

sorry for the bad filming, I had to use accessibility tools to show you where I am actually pressing or it might get really confusing. This also meant it really limited my way of interacting with the device and thus making some errors sometimes. You will have to forgive me on that.

### How to use

Prerequisites:
- Home Assistant 0.94.x or 0.95.x
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

## Addons Required, you will need HACS to download them for use with this setup (you can use the older custom_updater but I would highly recommend you to use HACS instead https://custom-components.github.io/hacs/installation/manual/. Some of the addons are not available on HACS, however you can import them yourself. Read the HACS docs on how to install non supported plugins/addons!! The links provided here will help you add them quickly.

Now lets get into the custom-cards and components you will need (components are optional as they might not apply to you).
Cards:
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
* [Lovelace-Xiaomi-Vacuum-Map-Card](https://github.com/PiotrMachowski/Home-Assistant-Lovelace-Xiaomi-Vacuum-Map-card) - Not supported, install Manually - This is the vacuum map card I use to set up zoned cleaning or make the robot move to a certain location on the map! If you have a vacuum then this is a must and I highly recommend you to download this
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

## TO DO (*updated: 15/07/2019)
- Global theming to have the ability to have themes change dynamically, in automations and per user. This will include a day and night theme ###in Progress (this could take a while as this is a shitload of work and atm not the highest priority)
- Switching out the last popup cards for alternative cards. ###In Progress
- Scenes (continue the testing of my automations and where needed change) ###Postponed for later evaluation
- Xiaomi Plantsensor Cards ###Postponed to a future release
- Dog food and water dispenser ###Products either not ordered yet or waiting for order to arrive, postponed to a future release
- Other graphs related to servers/computers etc. ###Postponed to a future release
- Declutter some more cards ###In Progress
- Add more buttons to then menu to get all functions in one place if needed ###Currently in Progress
- And many more, which I can't think of at the moment and trust me it is probably a lot! ###Always in Progress

## Changelog
### Changes (11/07/2019)
Sorry for the long delay, I have actually tried to rearrange the setup for use with swipe-card, but unfortunately this is way too buggy to be any good (it looked nice though), anyways a weeks work totally useless. But no fear, I still have the promised update for you guys.

- Added a pretty cool Vacuum Control Center, this will replace the previously used xiaomi-vacuum-cleaner-card and you can safely remove that addon if you use this setup, you will need a custom card for the zone map which can be found here: https://github.com/PiotrMachowski/Home-Assistant-Lovelace-Xiaomi-Vacuum-Map-card, the rest of the cards are just cards that you should already have if you follow this setup.
- The maintenance/cleaning popup card no longer has the dog card
- Moved around button placements of the frontpage to fit the menu button (previously this was the "other view", now you can simply press the menu button on the frontpage to show the entire menu, convenient eh?)
- Testing conditional cards as a replacement to popup cards, so far it seems to work very well. If you want to try it out yourself you can see my code, it uses conditional cards to show the menu now whereas before you would have to go to the actual view. This should save time and makes the interface a bit easier to use, in the future I might decide to swap all popup cards in favor of conditional cards, but like I said this is something I am currently testing
- The NOW ON and AUTOMATIONS popup buttons have been moved to the menu
- Added a dog popup button on the frontpage, this card was moved from the maintenance/cleaning popup card. It also has a state, device tracker and location added to it. For questions about this please send me a message on the HA community forums.
- Splitted the frontpage in multiple yaml files, this is in preparation for the conditional cards as this would clutter a single view immensely
- Minor fixes to the code

NOTE: Unfortunately all these changes (and the changes I still have in mind) keeps me from working on proper theming, themes are worked on but at a very slow pace, please have patience or use any other theme available on the community. If you do decide to use the theme I provide note that if you really need to get work done in the dev-states panel you will have to change the theme back to default as there are some black and white elements which are themed badly.
### Changes (05/07/2019):
- Reworked Climate Control panel (also changed this in the other view, better know as the main menu)
- Added Energy Consumption to the setup
### Changes (04/07/2019):
- Removed custom_updater in favor of HACS. BREAKING CHANGE, Warning! Do not copy/paste this if you have used parts of my setup before, you can not! Read the instructions on how to install and configure HACS https://custom-components.github.io/hacs/installation/manual/ . You will need to do this yourself and this could take a little time figuring out all the stuff. You can remove custom_updater and ALL the custom-cards previously installed if you switch to HACS. Note that custom-updater will be deprecated at some time so switching to HACS is just a matter of time. Read carefully on how to install this, you will need a github account to use this. But don't worry it is free and the instruction manual is pretty straight forward.
- Moved the config files to a separate folder. It is now easier to manage the configuration files, just like lovelace.
- Decluttered the notifications file, another 380 lines removed.
- Added birthday sensor, frontend notification and automation
- Minor fixes to the code
### Changes (02/07/2019):
- Minor changes to the other view, the top menu button is now correctly aligned with the rest of the buttons, this was only noticable on larger screens like tablets and or desktops/laptops.
- Moved all the views to a view folder, this change will break your setup if you don't copy this!
- Added custom-card and custom-components to the repo, this will make understanding the setup easier.
### Changes (29/06/2019): 
BREAKING CHANGES THROUGHOUT THE ENTIRE SETUP!!!! If you have previously used my setup I have to warn you that the configuration for this setup is entirely different. Yes the result looks pretty much the same, but the current config is easier to manage and most important, it is almost 2000 lines of code less than before even with the added features! Unfortunately on the outside the setup looks a lot like the previous one, that is because I am pretty happy with the current design. This release is mostly based upon optimization, speed and attention to detail and future-proofing as everything is updated with current mods/cards/etc.

Summary:
- The entire interface is now dynamic, sizing happens based on the screen size, no longer are buttons a fixed dimension. This fixes spacing problems on larger screen phones like for example an iPhone Plus/Max, but also tablets benefit from this. And the beauty is that all buttons stay the same aspect ratio regardless of device. So say goodbye to weird rectangle looking buttons when viewed on larger screens and you can now enjoy square buttons at all times.
- Removed the following custom-cards: state-switch, useful-markdown-card, card-modder
- Added card-mod, markdown-mod and vacuum-cleaner-card
- Split lovelace setup into several files for easier management and a less cluttered setup, ui-lovelace.yaml will only reference to the new files, you will not need to edit this file afterwards in a long time. You will need to save this file (regardless if there were any changes) if you make changes in other files. That way it will reload lovelace, else it will keep the old config loaded until refreshed. It might be harder to catch errors because it will even load if you delete all the files within the lovelace folder until you refresh it! so be cautious when working with this. Yes it takes a step extra, but it is worth the effort as editing views, popup-cards or anything else is so easy now and best of all very easy to find. Find the new files in the lovelace folder!
- Removed anchors, this was necessary to split the lovelace file as anchors need to be at the root of every yaml file (at least that is what I understood of it)
- Added decluttering-card as a replacement to anchors and boy you are going to love this! Why? Well ALL the buttons in the entire setup are based of two templates. Check the code as to what I mean exactly because this one is huge!
- Added birthday sensor, it is a python_script which will create a sensor for you, notifications for the frontpage will arrive in the future. You can find the script in the python_scripts folder. You will need to create an automation, an example can be found at the bottom of my automations.yaml file
- Added vacuum-card as I have a Roborock S55 integrated in my setup now. This will get improved in the future as I am not happy with the current way it works. Nevertheless it is very much usable.
- Cleaned up a lot and I seriously mean a lot of code, no more weird stacks in stacks in stacks which served no purpose. All of the previous card-modder and useful-markdown-cards have been rewritten to be used with the core versions of this. Thomas Loven made a mod which does the same thing as the old ones but instead of it being a custom card it is a mod to the core card. In other words all of my current setup use this kind of code now.
- Unified all spacings between screens, whereas before on pages with 4 buttons the borders on the left and right. This is more in line with the Apple Homekit interface and this also means that the borders on each page are the same for every view, popup, card etc. And because the cards used are dynamic now you won't even notice a difference (though it is a tad bit smaller on iPhone X(s) devices.
- Removed state-switch card in favor of core conditional cards. Lightens up the setup and functions exactly the same way. Though if you use user based cards (e.g. you have a different homescreen than your spouse based on user logged in) I would not recommend you to remove this as this I do not know how to achieve the same thing with conditional cards. However I do not use user based cards so in my setup conditional cards will do exactly what the state-switch did in my previous configuration.
- Reworked other view with a revamped menu, color to the page will be added in the near future.
- Some small fixes, optimisations and a lot of attention to detail

!Important Note!
Apple has released the first beta's of tvOS 13, the Apple component in Home Assistant will NO LONGER WORK with tvOS 13. This also means, no more state updates, no remote control, no dimming lights when started playing, no more automations possible whatsoever with the Apple TV. If you rely on this DON'T EVER UPDATE TO tvOS 13. Apple has removed a few services from the ATV which involves Home Sharing and was necessary for the pyatv component to work. They will most likely never create an alternative to this and thus you are warned. If you want to downgrade your Apple TV you can still do this until Apple stops signing that firmware so if you haven't downgraded before halfway september know that you will probably be stuck with a broken remote control in HA or broken automations that were based on the ATV's states.


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

@everyone I forgot to mention

I am really sorry, I have tried to get you all. But also a very big thank you to all of the ones not mentioned here. And ofcourse the Home Assistant community which helped me out a lot.

## Author

Jimz011
