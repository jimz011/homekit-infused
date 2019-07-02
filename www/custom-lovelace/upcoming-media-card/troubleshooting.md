# Troubleshooting:
### Follow the instructions below before posting an issue or asking for help on the forums. Be sure to indicate that you tried these steps and report your findings.

## Card:

* Make sure the card is not contained inside another card in your ui-lovelace.yaml. This will help rule out issues or conflicts with the containing card.

* Clear your browser's cache and make sure you're editing the version number in the resources section of ui-lovelace.yaml if you don't use the [custom_updater](https://github.com/custom-components/custom_updater)/[tracker_card](https://github.com/custom-cards/tracker-card) from this repo (more on this in the [readme](https://github.com/custom-cards/upcoming-media-card/blob/master/README.md)).

* Check that you installed the custom components & they are working correctly (more on components below). This card only works with the custom components linked at the top of the [readme](https://github.com/custom-cards/upcoming-media-card/blob/master/README.md).

## Components:

* Check that the components are reporting data. You can find this in your HA sidebar under developer tools. Click
the icon that looks like this <>. To help with troubleshooting always mention what you see here next to your sensor ("sensor.sonarr_upcoming_media", for example).

* "sensor.sonarr_upcoming" & "sensor.radarr_upcoming" are not the components for this card, they are the default HA components. The Sonarr and Radarr components for this card end in "media" and the links for them are in the [readme](https://github.com/custom-cards/upcoming-media-card/blob/master/README.md).

* Try the default Home Assistant components for the service you are using to see if they're working. If they are having issues as well it is a good indication that there are issues with the service and not the components.

Below are some links to try in your browser to test your connection and API needed for the components.
If you do not get any info from the links below, one or more of the following may be true:

* There are issues with the service that you are using
* IP, SSL, port, api key, or token may be incorrect.
* There are no items to report in your set time frame.

These are not issues related to the card or components and need addressed with the service you are using.

## Radarr & Sonarr:
Use the IP and port of your
Radarr or Sonarr server.
`````
http(s)://[IP]:[port]/api/calendar?apikey=[API_key]&start=[start_date]&end=[end_date]
`````
For start and end date use "YYYY-MM-DD" format like so: "2018-09-31"
Start date should be todays date and end date should be as far into the future as you set the component. </br></br>
**Example:**
`````
https://192.168.1.2:7878/api/calendar?apikey=yOuRApiKEyg03sheRE&start=2018-10-31&end=2019-05-15
`````
## Plex:
Use the IP and port of your Plex server.
`````
http(s)://[IP]:[port]/library/recentlyAdded?X-Plex-Token=[token]
`````
**Example:**
`````
http://192.168.1.2:32400/library/recentlyAdded?X-Plex-Token=yOuRPLexT0keng03sheRE
`````
