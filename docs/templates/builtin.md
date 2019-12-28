---
title: Built-in Vars
index: 3
---

## Built-in Variables

There are prebuilt variables for you to use in the table below. The format of the date/time items is automatically detected by default, but you may use the config variable `locale:` to set a different one if needed. [Here is a list of locale codes](http://download1.parallels.com/SiteBuilder/Windows/docs/3.2/en_US/sitebulder-3.2-win-sdk-localization-pack-creation-guide/30801.htm) to be used like this:

```yaml
custom_header:
  locale: en-gb
```

|VARIABLE|DESCRIPTION|
|:-|:-|
|{{ user }}| Logged in user's name
|{{ time }}| Clock
|{{ date }}| Date
|{{ monthNum }}| Month's number
|{{ monthNumLZ }}| Month's number with a leading zero
|{{ monthNameShort }}| Abbreviated month's name
|{{ monthNameLong }}| Month's name
|{{ dayNum }}| Day's number
|{{ dayNumLZ }}| Day's number with a leading zero
|{{ dayNameShort }}| Abbreviated day's name
|{{ dayNameLong }}| Day's name
|{{ hours12 }}| Hour number for 12 hour clock
|{{ hours12LZ }}| Hour number for 12 hour clock with a leading zero
|{{ hours24}}| Hour number for 24 hour clock
|{{ hours24LZ }}| Hour number for 24 hour clock with a leading zero
|{{ minutes }}| Number of minutes
|{{ minutesLZ }}| Number of minutes with a leading zero
|{{ year2d }}| 2 digit year
|{{ year4d }}| 4 digit year
|{{ AMPM }}| AM or PM uppercase
|{{ ampm }}| am or pm lowercase
