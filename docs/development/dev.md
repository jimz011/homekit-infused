---
title: Development
index: 1
---

## Development

If you'd like to help with development follow the instructions below to setup a devcontainer to work from.

1. Fork and clone the repository
2. Open the [devcontainer][devcontainer] and run `npm start`
3. The compiled `.js` file will be accessible at `http://127.0.0.1:5000/custom-header.js` and in the `dist` directory
4. On a running Home Assistant installation add this to your Lovelace `resources:`

```yaml
- url: 'http://127.0.0.1:5000/custom-header.js'
  type: module
```

_Change "127.0.0.1" to the IP of your development machine._

### Bonus

If you need a fresh test instance you can install a fresh Home Assistant instance inside the devcontainer as well.

1. Run the command `dc start`
2. Home Assistant will install and will eventually be running on port `9123`

<!--Links -->

[devcontainer]: https://code.visualstudio.com/docs/remote/containers
