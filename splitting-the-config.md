# Homekit Infused 5

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

## Splitting the Configuration
It is possible to split your configuration so you can organize your views better and make your code more readable.

Since it is useless to rewrite an entire documentation about this, here is the [official documentation](https://www.home-assistant.io/docs/configuration/splitting_configuration/).

I mention this, since I believe it is one of the few things that new users don't get to see until they have already invested a lot of time into their dashboards/configurations. You can do this for your configuration, lovelace, automations etc. etc. Basically anything in Home Assistant can be split using this method. And it will eventually make your code a lot better readable and most of all, you will probably have a better time finding code that you made a long time ago.

This basically allows you to split up your configuration in multiple files.

#### Splitting the views.yaml file
If you have read the official documentation you will have found that you can split basically any file into any folder, as long as you refer to it from the main file. This is also possible for the views.yaml file, for this example we will use a simple example on how to split your views into multiple files. For this example you must create a folder named `views` in `/hki-user/` (the full path would look like this `/hki-user/views`).

```yaml
# views.yaml (example)
views:
  !include_dir_named ../views
```

The above file will not need to be touched again since all config will be taken from the folder we have just created.
Create a file with the name of your object in `/hki-user/views` (the file name will be the object and title of the view)

```yaml
# hki-user/views/livingroom.yaml
subtitle: My livingroom 
addons:
  button:
    - title: My livingroom lights
      entities:
        - light.lava_lamp
```

When using this method you MUST define EVERY view in a separate file. You can NOT have multiple views in the same file!
Basically you do the exact same thing as in the views.yaml file, you have just split them up into multiple files.

There is also an alternative way users can split up the configuration.
```yaml
# views.yaml (example)
views:
  !include_dir_merge_named ../views
```

The above file will not need to be touched again since all config will be taken from the folder we have just created.
Create a file with the name of your object in `/hki-user/views`, in this case the name doesn't really matter since we need to define the object.

```yaml
# hki-user/views/livingroom.yaml
living_room:
  title: livingroom
  subtitle: My livingroom 
  addons:
    button:
      - title: My livingroom lights
        entities:
          - light.lava_lamp
```

Using this method allows you to add multiple views in the same file as well as having multiple files, but you MUST define the object for each view.

Whatever method you choose doesn't really matter, it is really up to personal preference, they are just methods of organising your code. If you do not feel comfortable doing this just use the `views.yaml` file.
