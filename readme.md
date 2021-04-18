# Homekit Infused version 4.x.x

Before continuing, make sure you have read the documentation on https://github.com/jimz011/homekit-infused

Checklist:
- All addons and resources installed?
- Added the line below in configuration.yaml?

Make sure you have the following line in your configuration.yaml
```
homeassistant:
  packages: !include_dir_named packages/
```

When updating read the breaking changes first, when no breaking changes are present just copy/replace the release files with yours.
The user folder will never be touched and you shouldn't touch the base folder. This way updating HKI is easy and simple!
