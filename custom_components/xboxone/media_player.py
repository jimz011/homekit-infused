"""
Support for functionality to interact with the Xbox One gaming console via SmartGlass protocol.

For more details about this platform, please refer to the documentation at
https://home-assistant.io/components/media_player.xboxone/

CREDITS:
- This module is based on media_player.firetv component, initially created by @happyleavesaoc
- Original code: https://github.com/home-assistant/home-assistant/blob/dev/homeassistant/components/media_player/firetv.py
"""
import logging
import functools
import requests
import voluptuous as vol
from urllib.parse import urljoin

from homeassistant.components.media_player import (
    MediaPlayerDevice, PLATFORM_SCHEMA)

from homeassistant.components.media_player.const import (
    SUPPORT_NEXT_TRACK, SUPPORT_PAUSE, SUPPORT_PREVIOUS_TRACK,
    SUPPORT_SELECT_SOURCE, SUPPORT_TURN_OFF, SUPPORT_TURN_ON,
    SUPPORT_VOLUME_STEP, SUPPORT_VOLUME_MUTE, SUPPORT_PLAY,
    MEDIA_TYPE_MUSIC, MEDIA_TYPE_VIDEO, MEDIA_TYPE_TVSHOW, MEDIA_TYPE_CHANNEL)
from homeassistant.const import (
    STATE_IDLE, STATE_OFF, STATE_PAUSED, STATE_PLAYING, STATE_UNKNOWN, STATE_ON,
    CONF_HOST, CONF_PORT, CONF_SSL, CONF_NAME, CONF_DEVICE, CONF_AUTHENTICATION,
    CONF_IP_ADDRESS)
import homeassistant.util.dt as dt_util
import homeassistant.helpers.config_validation as cv

_LOGGER = logging.getLogger(__name__)

SUPPORT_XBOXONE = SUPPORT_PAUSE | \
    SUPPORT_TURN_ON | SUPPORT_TURN_OFF | SUPPORT_PREVIOUS_TRACK | \
    SUPPORT_NEXT_TRACK | SUPPORT_SELECT_SOURCE | SUPPORT_PLAY | \
    SUPPORT_VOLUME_STEP | SUPPORT_VOLUME_MUTE

REQUIRED_SERVER_VERSION = '0.9.8'

DEFAULT_SSL = False
DEFAULT_HOST = 'localhost'
DEFAULT_NAME = 'Xbox One SmartGlass'
DEFAULT_PORT = 5557
DEFAULT_AUTHENTICATION = True

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
    vol.Required(CONF_DEVICE): cv.string,
    vol.Optional(CONF_IP_ADDRESS, default=''): cv.string,
    vol.Optional(CONF_HOST, default=DEFAULT_HOST): cv.string,
    vol.Optional(CONF_NAME, default=DEFAULT_NAME): cv.string,
    vol.Optional(CONF_PORT, default=DEFAULT_PORT): cv.port,
    vol.Optional(CONF_SSL, default=DEFAULT_SSL): cv.boolean,
    vol.Optional(CONF_AUTHENTICATION, default=DEFAULT_AUTHENTICATION): cv.boolean,
})


def setup_platform(hass, config, add_devices, discovery_info=None):
    """Set up the Xbox One platform."""
    name = config.get(CONF_NAME)
    ssl = config.get(CONF_SSL)
    host = config.get(CONF_HOST)
    port = config.get(CONF_PORT)
    liveid = config.get(CONF_DEVICE)
    ip = config.get(CONF_IP_ADDRESS)
    auth = config.get(CONF_AUTHENTICATION)

    proto = 'https' if ssl else 'http'
    base_url = '{0}://{1}:{2}'.format(proto, host, port)

    add_devices([XboxOneDevice(base_url, liveid, ip, name, auth)])


class XboxOne:
    def __init__(self, base_url, liveid, ip, auth):
        self.is_server_up = False
        self.is_server_correct_version = True

        self.base_url = base_url
        self.liveid = liveid
        self._ip = ip
        self._auth = auth
        self._available = False
        self._connected = False
        self._media_status = None
        self._console_status = None
        self._volume_controls = None
        self._pins = None

    def get(self, endpoint, *args, **kwargs):
        endpoint = endpoint.replace('<liveid>', self.liveid)
        full_url = urljoin(self.base_url, endpoint)
        return requests.get(full_url, *args, **kwargs)

    @property
    def available(self):
        return self._available

    @property
    def connected(self):
        return self._connected

    @property
    def console_status(self):
        return self._console_status

    @property
    def media_status(self):
        return self._media_status

    @property
    def volume_controls(self):
        volume_controls = self._volume_controls
        if not volume_controls:
            return None

        controls = volume_controls.get('avr') or volume_controls.get('tv')
        if not controls:
            return None

        return {
            'mute': controls['buttons']['btn.vol_mute']['url'],
            'up': controls['buttons']['btn.vol_up']['url'],
            'down': controls['buttons']['btn.vol_down']['url'],
        }

    @property
    def media_playback_state(self):
        if self.media_status:
            return self.media_status.get('playback_status')

    @property
    def media_type(self):
        if self.media_status:
            return self.media_status.get('media_type')

    @property
    def media_position(self):
        if self.media_status:
            position = self.media_status.get('position')
            # Convert from nanoseconds
            if isinstance(position, int) and position >= 10000000:
                return position / 10000000

    @property
    def media_duration(self):
        if self.media_status:
            media_end = self.media_status.get('media_end')
            # Convert from nanoseconds
            if isinstance(media_end, int) and media_end >= 10000000:
                return media_end / 10000000

    @property
    def media_title(self):
        if self.media_status:
            return self.media_status.get('metadata', {}).get('title')

    @property
    def active_app(self):
        if self.console_status:
            active_titles = self.console_status.get('active_titles')
            app = [a.get('name') for a in active_titles if a.get('has_focus')]
            if len(app):
                return app[0]

    @property
    def active_app_image(self):
        if self.console_status:
            active_titles = self.console_status.get('active_titles')
            app = [a.get('image') for a in active_titles if a.get('has_focus')]
            if len(app):
                return app[0] or None

    @property
    def active_app_type(self):
        if self.console_status:
            active_titles = self.console_status.get('active_titles')
            app = [a.get('type') for a in active_titles if a.get('has_focus')]
            if len(app):
                return app[0]

    @property
    def all_apps(self):
        apps = {
            'Home': 'ms-xbox-dashboard://home?view=home',
            'TV': 'ms-xbox-livetv://'
        }

        if not self._pins and self._check_authentication():
            self._pins = self.get('/web/pins').json()

        if self._pins:
            try:
                for item in self._pins['ListItems']:
                    if item['Item']['ContentType'] == 'DApp' and item['Item']['Title'] not in apps.keys():
                        apps[item['Item']['Title']] = 'appx:{0}!App'.format(item['Item']['ItemId'])
            except:
                pass

        if self.console_status:
            active_titles = self.console_status.get('active_titles')
            for app in active_titles:
                if app.get('has_focus') and app.get('name') not in apps.keys():
                    apps[app.get('name')] = app.get('aum')
        return apps

    def _check_authentication(self):
        try:
            response = self.get('/auth').json()
            if response.get('authenticated'):
                return True

            response = self.get('/auth/refresh').json()
            if response.get('success'):
                return True

        except requests.exceptions.RequestException:
            _LOGGER.error('Unreachable /auth endpoint')
            return False
        except Exception as e:
            _LOGGER.error('Unknown Error: %s', e)

        _LOGGER.error('Refreshing authentication tokens failed!')
        return False

    def _refresh_devicelist(self):
        params = None
        if self._ip:
            params = {'addr': self._ip}
        self.get('/device', params=params)

    def _connect(self):
        if self._auth and not self._check_authentication():
            return False
        try:
            url = '/device/<liveid>/connect'
            params = {}
            if not self._auth:
                params['anonymous'] = True
            response = self.get(url, params=params).json()
            if not response.get('success'):
                _LOGGER.error('Failed to connect to console {0}: {1}'.format(self.liveid, str(response)))
                return False
        except requests.exceptions.RequestException:
            _LOGGER.error('Unreachable /connect endpoint')
            return False
        except Exception as e:
            _LOGGER.error('Unknown Error: %s', e)
            return None

        return True

    def _get_device_info(self):
        try:
            response = self.get('/device/<liveid>').json()
            if not response.get('success'):
                _LOGGER.debug('Console {0} not available'.format(self.liveid))
                return None
        except requests.exceptions.RequestException:
            _LOGGER.error('Unreachable device info /<liveid> endpoint')
            return None
        except Exception as e:
            _LOGGER.error('Unknown Error: %s', e)
            return None

        return response['device']

    def _update_console_status(self):
        try:
            response = self.get('/device/<liveid>/console_status').json()
            if not response.get('success'):
                _LOGGER.error('Console {0} not available'.format(self.liveid))
                return None
        except requests.exceptions.RequestException:
            _LOGGER.error('Unreachable /console_status endpoint')
            return None
        except Exception as e:
            _LOGGER.error('Unknown Error: %s', e)
            return None

        self._console_status = response['console_status']

    def _update_media_status(self):
        try:
            response = self.get('/device/<liveid>/media_status').json()
            if not response.get('success'):
                _LOGGER.error('Console {0} not available'.format(self.liveid))
                return None
        except requests.exceptions.RequestException:
            _LOGGER.error('Unreachable /media_status endpoint')
            return None
        except Exception as e:
            _LOGGER.error('Unknown Error: %s', e)
            return None

        self._media_status = response['media_status']

    def _update_volume_controls(self):
        if self._volume_controls:
            return

        try:
            response = self.get('/device/<liveid>/ir').json()
            if not response.get('success'):
                _LOGGER.error('Console {0} not available'.format(self.liveid))
                return None
        except requests.exceptions.RequestException:
            _LOGGER.error('Unreachable /ir endpoint')
            return None
        except Exception as e:
            _LOGGER.error('Unknown Error: %s', e)
            return None

        self._volume_controls = response

    def poweron(self):
        try:
            url = '/device/<liveid>/poweron'
            params = None
            if self._ip:
                params = { 'addr': self._ip }
            response = self.get(url, params=params).json()
            if not response.get('success'):
                _LOGGER.error('Failed to poweron {0}'.format(self.liveid))
                return None
        except requests.exceptions.RequestException:
            _LOGGER.error('Unreachable /poweron endpoint')
            return None

        return response

    def poweroff(self):
        try:
            response = self.get('/device/<liveid>/poweroff').json()
            if not response.get('success'):
                _LOGGER.error('Failed to poweroff {0}'.format(self.liveid))
                return None
        except requests.exceptions.RequestException:
            _LOGGER.error('Failed to call poweroff for {0}'.format(self.liveid))
            return None

        return response

    def ir_command(self, device, command):
        try:
            response = self.get('/device/<liveid>/ir').json()
            if not response.get('success'):
                return None
        except requests.exceptions.RequestException:
            _LOGGER.error('Failed to get enabled media commands for {0}'.format(self.liveid))
            return None
        except Exception as e:
            _LOGGER.error('Unknown Error: %s', e)
            return

        enabled_commands = response.get(device).get('buttons')
        if command not in enabled_commands:
            _LOGGER.error('Provided command {0} not enabled for current ir device'.format(command))
            return None
        else:
            button_url = enabled_commands.get(command).get('url')

        try:
            response = self.get('{0}'.format(button_url)).json()
            if not response.get('success'):
                return None
        except requests.exceptions.RequestException:
            _LOGGER.error('Failed to get enabled ir commands for {0}'.format(self.liveid))
            return None
        except Exception as e:
            _LOGGER.error('Unknown Error: %s', e)

        return response

    def media_command(self, command):
        try:
            response = self.get('/device/<liveid>/media').json()
            if not response.get('success'):
                return None
        except requests.exceptions.RequestException:
            _LOGGER.error('Failed to get enabled media commands for {0}'.format(self.liveid))
            return None
        except Exception as e:
            _LOGGER.error('Unknown Error: %s', e)
            return None

        enabled_commands = response.get('commands')
        if command not in enabled_commands:
            _LOGGER.error('Provided command {0} not enabled for current media'.format(command))
            return None

        try:
            response = self.get('/device/<liveid>/media/{0}'.format(command)).json()
            if not response.get('success'):
                return None
        except requests.exceptions.RequestException:
            _LOGGER.error('Failed to get enabled media commands for {0}'.format(self.liveid))
            return None
        except Exception as e:
            _LOGGER.error('Unknown Error: %s', e)
            return None

        return response

    def volume_command(self, command):
        if not self._volume_controls:
            return None

        url = self._volume_controls.get(command)

        if not url:
            return None

        try:
            response = self.get(url).json()
            if not response.get('success'):
                return None
        except requests.exceptions.RequestException:
            _LOGGER.error('Failed to get enabled volume commands for {0}'.format(self.liveid))
            return None
        except Exception as e:
            _LOGGER.error('Unknown Error: %s', e)
            return None

        return response

    def launch_title(self, launch_uri):
        try:
            apps = self.all_apps
            if launch_uri in apps.keys():
                launch_uri = apps[launch_uri]
            response = self.get('/device/<liveid>/launch/{0}'.format(launch_uri)).json()
            if not response.get('success'):
                return None
        except requests.exceptions.RequestException:
            _LOGGER.error('Failed to launch title \'{0}\' for {1}'.format(launch_uri, self.liveid))
            return None
        except Exception as e:
            _LOGGER.error('Unknown Error: %s', e)
            return None

        return response

    def _check_server(self):
        if not self.is_server_correct_version:
            return False

        try:
            resp = self.get('/versions').json()
            version = resp['versions']['xbox-smartglass-rest']
            if version != REQUIRED_SERVER_VERSION:
                self.is_server_correct_version = False
                _LOGGER.error("Invalid xbox-smartglass-rest version: %s. Required: %s",
                              version, REQUIRED_SERVER_VERSION)
        except requests.exceptions.RequestException:
            self.is_server_up = False
            return False

        self.is_server_up = True
        return True

    def refresh(self):
        """
        Enumerate devices and refresh status info
        """

        if not self._check_server():
            return

        self._check_authentication()
        self._refresh_devicelist()

        device_info = self._get_device_info()
        if not device_info or device_info.get('device_status') == 'Unavailable':
            self._available = False
            self._connected = False
            self._console_status = None
            self._media_status = None
            self._volume_controls = None
        else:
            self._available = True

            connection_state = device_info.get('connection_state')
            if connection_state == 'Connected':
                self._connected = True
            else:
                success = self._connect()
                if not success:
                    _LOGGER.error('Failed to connect to {0}'.format(self.liveid))
                    self._connected = False
                else:
                    self._connected = True

        if self.available and self.connected:
            self._update_console_status()
            self._update_media_status()
            self._update_volume_controls()


class XboxOneDevice(MediaPlayerDevice):
    """Representation of an Xbox One device on the network."""

    def __init__(self, base_url, liveid, ip, name, auth):
        """Initialize the Xbox One device."""
        self._xboxone = XboxOne(base_url, liveid, ip, auth)
        self._name = name
        self._liveid = liveid
        self._state = STATE_UNKNOWN
        self._running_apps = None
        self._current_app = None

    @property
    def name(self):
        """Return the device name."""
        return self._name

    @property
    def unique_id(self):
        """Console Live ID"""
        return self._liveid

    @property
    def should_poll(self):
        """Device should be polled."""
        return True

    @property
    def supported_features(self):
        """Flag media player features that are supported."""
        active_support = SUPPORT_XBOXONE
        if self.state not in [STATE_PLAYING, STATE_PAUSED]\
                and (self._xboxone.active_app_type not in ['Application', 'App'] or self._xboxone.active_app == 'Home'):
            active_support &= ~SUPPORT_NEXT_TRACK & ~SUPPORT_PREVIOUS_TRACK
        if not self._xboxone.volume_controls:
            active_support &= ~SUPPORT_VOLUME_MUTE & ~SUPPORT_VOLUME_STEP
        return active_support

    @property
    def state(self):
        """Return the state of the player."""
        playback_state = {
            'Closed': STATE_IDLE,
            'Changing': STATE_IDLE,
            'Stopped': STATE_IDLE,
            'Playing': STATE_PLAYING,
            'Paused': STATE_PAUSED
        }.get(self._xboxone.media_playback_state)

        if playback_state:
            state = playback_state
        elif self._xboxone.connected or self._xboxone.available:
            if self._xboxone.active_app_type in ['Application', 'App'] or self._xboxone.active_app == 'Home':
                state = STATE_ON
            else:
                state = STATE_UNKNOWN
        else:
            state = STATE_OFF

        return state

    @property
    def media_content_type(self):
        """Media content type"""
        if self.state in [STATE_PLAYING, STATE_PAUSED]:
            return {
                'Music': MEDIA_TYPE_MUSIC,
                'Video': MEDIA_TYPE_VIDEO
            }.get(self._xboxone.media_type)

    @property
    def media_duration(self):
        """Duration in seconds"""
        if self.state in [STATE_PLAYING, STATE_PAUSED]:
            return self._xboxone.media_duration

    @property
    def media_position(self):
        """Position in seconds"""
        if self.state in [STATE_PLAYING, STATE_PAUSED]:
            return self._xboxone.media_position

    @property
    def media_position_updated_at(self):
        """Last valid time of media position"""
        if self.state in [STATE_PLAYING, STATE_PAUSED]:
            return dt_util.utcnow()

    @property
    def media_image_url(self):
        """Image url of current playing media."""
        return self._xboxone.active_app_image

    @property
    def media_title(self):
        """When media is playing, print title (if any) - otherwise, print app name"""
        if self.state in [STATE_PLAYING, STATE_PAUSED]:
            return self._xboxone.media_title
        return self._xboxone.active_app

    @property
    def source(self):
        """Return the current app."""
        return self._xboxone.active_app

    @property
    def source_list(self):
        """Return a list of running apps."""
        return list(self._xboxone.all_apps.keys())

    def update(self):
        """Get the latest date and update device state."""
        self._xboxone.refresh()

    def turn_on(self):
        """Turn on the device."""
        self._xboxone.poweron()

    def turn_off(self):
        """Turn off the device."""
        self._xboxone.poweroff()

    def mute_volume(self, mute):
        """Mute the volume."""
        self._xboxone.volume_command('mute')

    def volume_up(self):
        """Turn volume up for media player."""
        self._xboxone.volume_command('up')

    def volume_down(self):
        """Turn volume down for media player."""
        self._xboxone.volume_command('down')

    def media_play(self):
        """Send play command."""
        self._xboxone.media_command('play')

    def media_pause(self):
        """Send pause command."""
        self._xboxone.media_command('pause')

    def media_stop(self):
        self._xboxone.media_command('stop')

    def media_play_pause(self):
        """Send play/pause command."""
        self._xboxone.media_command('play_pause')

    def media_previous_track(self):
        """Send previous track command."""
        if self._xboxone.active_app == 'TV':
            self._xboxone.ir_command('stb', 'btn.ch_down')
        else:
            self._xboxone.media_command('prev_track')

    def media_next_track(self):
        """Send next track command."""
        if self._xboxone.active_app == 'TV':
            self._xboxone.ir_command('stb', 'btn.ch_up')
        else:
            self._xboxone.media_command('next_track')

    def select_source(self, source):
        """Select input source."""
        self._xboxone.launch_title(source)
