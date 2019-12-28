---
title: Templates
index: 1
---

## Jinja Templates

- Every config item can be templated using Jinja templates
- If the template is using an entity then Custom Header will update dynamically when that entity changes
- Templates are also updated every minute for time-based templates
- Templates must return the expected value for the config item

It is advisable to check your templates using the built in tool in HA. To find it select "Developer Tools" in the sidebar and then click the "Template" link at the top.

There are some built in template variables that you may use and you can also create your own.

### Testing Templates:

By using the config option `test_template:` you can test that your template is returning the expected result. Add your template under `test_template:` and then look to your browsers Dev Tools console (F12) for the result. This will let you see if there are misplaced spaces, it's returning what you expect, or even if a Boolean is accidentally a string.

```
custom_header:
  test_template: "{{states('sensor.alarm_panel_icon')}}"
```
