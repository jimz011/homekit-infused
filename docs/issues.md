# Homekit Infused

## Contents
- [Introduction](index.md)
- [Preparation](preparation.md)
- [Installation](installation.md)
- [Configuration](configuration.md)
- [Updates and Addons](updates.md)
- [Feature Requests](requests.md)
- [Issues & Questions](issues.md)
- [About Me](about.md)
- [Thanks](thanks.md)

## ISSUES
If there are any issues please report them via GitHub. When doing so please be thorough in your explanation as the more details the better. Saying things like, "I have an issue, my lights view wont show" is not a good issue explanation as I will still be completely clueless as to why it won't show for you. Issues like these will be closed without an answer!
You could also quickly open a bug report by going inside of the HKI Menu > About > Bug Report.

The docs might be incomplete or not completely comprehensible for all. Remember that I am alone in this project, that I am not a programmer and that working on this for so long might get me into forgetting to add something in here. If you find something that is missing or incomplete please notify me so that I can change the documentation.

#### Known Issues
  - Language and Icon Automations might not work correctly when using Home Assistant Core, this is due to some paths being incorrect. This will be addressed in the upcoming release. To change it manually though you will want to change the following paths in the following files: `/appdaemon/apps/apps.yaml` and `/packages/homekit_infused/configuration.yaml line 883 to 885` Change the `/config/` part with your own root path to Home Assistant. You can ask for help on our discord server if you can't figure this out. This will not be an issue in beta 11 or 12 anymore!
  - Sometimes notifications would suddenly stop scrolling, solution is to touch the notification slightly, it will go back to automatic scrolling if you do that. I can't and wont fix this as it is a non-issue.
  - Lovelace can load slowly when you save it or do a lovelace refresh. The setup is pretty large and loading can take quite some time. You should only ever face this problem when editing in YAML. Refreshing the browser will not result in slow loading times unless you have made changes in YAML (not in the interface, those changes are instant).

#### QUESTIONS?

Please ask any question you have on the Home Assistant community forums, follow the link to go to my thread [HA Community Forum](https://community.home-assistant.io/t/homekit-infused-hki-v0-13-3-updated-07-01-2020-hki-preview-video-1-0a-online-now/117086)

#### Or join one of my two Slack groups which I maintain with @Dwains:
English Speaking: (warning: non-english speakers will be removed).
[Click Here for English](https://join.slack.com/t/homeassistanten/shared_invite/enQtNzg1NzQyOTI4ODE2LWVhMmY3ZjMxMThhOTk1OWEwY2E4NDE0YmViZWI3NjUyNzIyMzIwNTkwMzlmMDA5N2I0MTQ4MDhiYTkwYWFlZDU)

Dutch Speaking (warning: non-dutch speakers will be removed).
[Click Here for Dutch](https://join.slack.com/t/homeassistantnlbe/shared_invite/enQtNzc4MzAwMTEyNDIwLTgwZGVmNmNhZjZkNmVkMjM1NTM3N2UwODIzZTFjMzY1ZmUyMGJiZDU5ZTEyZWEyYzMzYzQzYWJmNGE3MWVjN2I)

Thank you and I hope you've enjoyed this release (please leave a comment on the forum/yt or privately so I can estimate what people think of the project)
Thanks once again!
