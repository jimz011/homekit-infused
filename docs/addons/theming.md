# Homekit Infused

Back to [Addon List](../addon_list.md)

# Theming
*HKI 3.1.0 or higher required!

### Description
Themes are a personal thing and so I want HKI to be your personal thing too, so with the release of 3.1.x quite a few theming options have become available!

### Configuration
- Themes can be edited in the `/themes/` folder. Open any theme name and you are free to adjust the user settings.
- Do not touch the settings below the user section (or use at your own risk!).
- Below are all the options, these are already filled in for you by default and only needs changing if you want to.
- Make sure when you edit the theme files that you do not copy/overwrite the files after each update. Unfortunately there is no way for me to split these files!
- The properties can be removed, but can never be empty values, removing properties is a bad idea btw!

### Advanced

| Properties | Required | Default | Description |
|----------------------------------|-------------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| background-image | yes | '#FFFFFF' | Set a background color (can also be an image in your www folder e.g. `'center / cover no-repeat url("/local/images/wallpapers/valentine-test1.jpg") fixed'`) |
| header-text-color | yes | 'White' | Sets the header text color |
| header-font-size | yes | 15px | Sets the header font size |
| header-font-weight | yes | normal | Sets the header font weight |
| subtitle-text-color | yes | 'White' | Sets the subtitle text color |
| subtitle-font-size | yes | 12px | Sets the subtitle font size |
| subtitle-font-weight | yes | normal | Sets the subtitle font weight |
| title-text-color | yes | 'White' | Sets the title-text addon color |
| title-text-font-size | yes | 12px | Sets the title-text addon font size |
| title-text-font-weight | yes | bolder | Sets the title-text addon font weight |
| border-radius | yes | 12px | Sets the border radius of all the cards |
| box-shadow | yes | var(--ha-card-box-shadow, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) ) | Sets the box shadow for all the cards |
| bar-card-border-radius | yes | Sets the border radius of all bar cards (not yet included) |
| font-family | yes | Helvetica | Sets the global font family |
| name-font-size | yes | 12px | Sets the font size for button names |
| name-font-weight | yes | bold | Sets the font weight for button names |
| label-font-size | yes | 10px | Sets the font size for button labels |
| label-font-weight | yes | normal | Sets the font weight for button labels |
| state-font-size | yes | 10px | Sets the font size for button states |
| state-font-weight | yes | bold | Sets the font weight for button states |
| badge-font-size | yes | 10px | Sets the font size of text inside badges |
| badge-font-weight | yes | normal | Sets the font weight of text inside badges |
| badge-text-transform | yes | capitalize | Set if text inside badges need to be transformed (e.g. `uppercase`, `lowercase` or `capitalize`) |

After changing any of these properties in your theme files you can simply go to the menu in lovelace and go to `menu > ha settings > reload themes`. Wait a second or 2 and the changes should be instant.
