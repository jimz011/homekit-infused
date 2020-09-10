# Homekit Infused

Back to [Addon List](../addon_list.md)

# iFrame
![Homekit Infused](../images/iframe-card.png)

### Description
This is an iFrame to embed a websites in.

### Configuration
- To use this all you need to do is change the URL
- The example below is of a Windy weather card

### Advanced

| Parameters | Type | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| aspect_ratio | String | 125% | Sets the aspect ratio, this MUST be a percentage |
| url | String | none | Sets the url of the website that needs to be embedded, note that if you use https you can ONLY embed https websites! Also note that not all websites can be embedded. |

### Install
- Create a new file inside the folder of the view you want (e.g. /homekit-infused/user/views/weather/), you can name the file however you want (e.g. iframe-card.yaml)
- Copy the code below and make changes if needed

```
- type: horizontal-stack
  cards:
    - !include ../../../base/includes/gap.yaml
    - type: iframe
      style: |
        ha-card {
          position: relative !important;
          overflow: hidden !important;
          border-radius: var(--border-radius) !important;
          box-shadow: var(--box-shadow);
          -webkit-border-radius: var(--border-radius) !important;
          border-radius-x: var(--border-radius) !important;
        }
        iframe {
          border-radius: var(--border-radius) !important;
          -webkit-border-radius: var(--border-radius);
          border-radius-x: var(--border-radius) !important;
          overflow: hidden !important;
        }
      aspect_ratio: 125%
      url: https://embed.windy.com/embed2.html?lat=51.402&lon=5.467&detailLat=51.477&detailLon=5.496&width=650&height=750&zoom=10&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=true&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1" frameborder="0"
    - !include ../../../base/includes/gap.yaml
```

