---
title: Translation
index: 2
---

## Translation

The editor of Custom Header is fully translatable.

### Change a translation

Find the file that corespond with your language in [this directory](https://github.com/maykar/custom-header/master/src/localize/languages/), make your changes and crate a PR to have it in the next version.

### Add a new language

1: Add a new json file with your language code under `src/localize/languages/`
2: Copy the contents of `en.json`to your new file.
3: Start transalting.
4: Add the language to`src/localize/localize.js`(see how`en`and`nb`) are added if you are not sure.
5: Crate a PR to have it in the next version.
