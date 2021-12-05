# Homekit Infused 2021.x.x

## Content
- [Introduction](index.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Addons](addons.md)
- [Splitting the Configuration](splitting-the-config.md)
- [Updates](updates.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

## Splitting the Configuration
It is possible to split your configuration so you can organize your views better and make your code more readable.

Since it is useless to rewrite an entire documentation about this, here is the [official documentation](https://www.home-assistant.io/docs/configuration/splitting_configuration/).

I mention this, since I believe it is one of the few things that new users don't get to see until they have already invested a lot of time into their dashboards/configurations. You can do this for your configuration, lovelace, automations etc. etc. Basically anything in Home Assistant can be split using this method. And it will eventually make your code a lot better readable and most of all, you will probably have a better time finding code that you made a long time ago.

This basically allows you to split up your configuration in multiple files.

#### Splitting the View Config
If you have read the official documentation you will have found that you can split basically any file into any folder, as long as you refer to it from the main file. This is also possible for the view_config.yaml file, however there are less options allowed. In the view_config.yaml file you can ONLY use `!include {/path/filename.yaml}`. This means that you can not use merge options.

Below a few examples of how to split up your configuration.

```yaml
# Example View Config
  my_view:
    title: my view
    custom:
      !include ../../hki-user/views/my-view.yaml

# Example /hki-user/views/my-view.yaml file
- title: My first stack
  cards:
    - type: markdown
      content: My first split up card
```

In general, what the actual code would have looked like if it weren't split

```yaml
# Example non split code
  my_view:
    title: my view
    custom:
      - title: My first stack
        cards:
          - type: markdown
            content: My first split up card
```

Basically you do the exact same thing, but you refer to the code that is inside of another file.