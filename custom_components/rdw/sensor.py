"""
RDW sensor version 2.0.1 Eelco Huininga 2019
Retrieves information on cars registered in the Netherlands. Currently
implemented sensors are APK (general periodic check) insurance status
and recall information
"""

VERSION = '2.0.1'

from datetime import datetime, timedelta
from requests import Session

import json
import logging
import voluptuous as vol

import homeassistant.helpers.config_validation as cv
from homeassistant.helpers.entity import Entity
from homeassistant.components.sensor import PLATFORM_SCHEMA
from homeassistant.const import (ATTR_ATTRIBUTION, CONF_NAME, STATE_UNKNOWN)
from homeassistant.util import Throttle

REQUIREMENTS = []

_RESOURCE_APK = \
    'https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken={}'
_RESOURCE_RECALL = \
    'https://opendata.rdw.nl/resource/t49b-isb7.json?kenteken={}'
_RESOURCE_RECALLINFO = \
    'https://terugroepregister.rdw.nl/Pages/Terugroepactie.aspx?mgpnummer={}'
_LOGGER = logging.getLogger(__name__)

CONF_PLATE = 'plate'
CONF_SENSORS = 'sensors'
CONF_DATEFORMAT = 'dateformat'
CONF_SCAN_INTERVAL = 'scan_interval'

DEFAULT_NAME = 'RDW'
DEFAULT_ATTRIBUTION = 'Data provided by RDW'
DEFAULT_DATEFORMAT = '%d-%m-%Y'
DEFAULT_SCAN_INTERVAL = timedelta(hours=24)

SENSOR_TYPES = {
    'expdate': ['Expdate', 'mdi:calendar', 'mdi:alert-outline'],
    'insured': ['Insured', 'mdi:car',      'mdi:alert-outline'],
    'recall':  ['Recall',  'mdi:wrench',   'mdi:alert-outline'],
}

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
    vol.Required(CONF_PLATE): cv.string,
    vol.Optional(CONF_NAME, default=DEFAULT_NAME): cv.string,
    vol.Optional(CONF_SENSORS, default=[]):
        vol.All(cv.ensure_list, [vol.In(SENSOR_TYPES)]),
    vol.Optional(CONF_DATEFORMAT, default=DEFAULT_DATEFORMAT):
        cv.string,
    vol.Optional(CONF_SCAN_INTERVAL, default=DEFAULT_SCAN_INTERVAL):
        cv.time_period
})


def setup_platform(hass, config, add_devices, discovery_info=None):
    """Set up the RDW Sensor."""

    name = config.get(CONF_NAME)
    plate = config.get(CONF_PLATE)
    dateformat = config.get(CONF_DATEFORMAT)
    interval = config.get(CONF_SCAN_INTERVAL)

    data = RDWSensorData(hass, plate.upper(), interval)

    dev = []
    for sensor_type in config[CONF_SENSORS]:
        dev.append(RDWSensor(
            hass, data, sensor_type, name,
            plate.upper(), dateformat))

    add_devices(dev, True)


class RDWSensor(Entity):
    """Representation of a RDW Sensor."""

    def __init__(self, hass, data, sensor_type, name, plate, dateformat):
        """Initialize the sensor."""
        self._hass = hass
        self._data = data
        self._sensor_type = sensor_type
        self._name = name
        self._plate = plate
        self._dateformat = dateformat
        self._icon = SENSOR_TYPES[sensor_type][1]
        self._state = None
        self._attributes = {ATTR_ATTRIBUTION: DEFAULT_ATTRIBUTION}
        self._unit_of_measurement = None

    @property
    def name(self):
        """Return the name of the sensor."""
        return '{} {}'.format(self._name, self._sensor_type)

    @property
    def icon(self):
        """Return the mdi icon of the sensor."""
        return self._icon

    @property
    def unit_of_measurement(self):
        """Return the unit of measurement."""
        return self._unit_of_measurement

    @property
    def state(self):
        """Return the state of the sensor."""
        return self._state

    @property
    def device_state_attributes(self):
        """Return the state attributes."""
        return self._attributes    

    def update(self):
        """Fetch new state data for the sensor."""
        self._data.update()

        self._state = STATE_UNKNOWN
        self._attributes = {}

        if self._sensor_type == 'expdate':
            self._state = datetime.strptime(self._data.expdate, '%Y%m%d')
            self._state = self.state.date().strftime(self._dateformat)
            if datetime.strptime(self._data.expdate, '%Y%m%d') < \
               datetime.now():
                self._icon = SENSOR_TYPES['expdate'][2]
        elif self._sensor_type == 'insured':
            if self._data.insured == 'Ja':
                self._state = True
            elif self._data.insured == 'Nee':
                self._state = False
                self._icon = SENSOR_TYPES['insured'][2]
        elif self._sensor_type == 'recall':
            self._state = self._data.recall
            self._attributes = self._data.attrs
            if self.state > 0:
                self._icon = SENSOR_TYPES['recall'][2]

                
class RDWSensorData(object):
    """
    Get car data from the RDW API.
    """
    _current_status_code = None
    _interval = DEFAULT_SCAN_INTERVAL

    def __init__(self, hass, plate, interval):
        """
        Initiates the sensor data with default settings if none other are set.
        :param plate: license plate id
        """
        self._hass = hass
        self._plate = plate
        self._interval = interval
        self._session = Session()
        self.expdate = None
        self.insured = None
        self.recall = None
        self.attrs = {}

    def get_data_from_apk_api(self):
        """
        Get data from the RDW APK API
        :return: A list containing the RDW APK data
        """

        try:
            result = self._session.get(_RESOURCE_APK.format(self._plate),
                     data="json={}")
        except:
            _LOGGER.error("RDW: Unable to connect to the RDW APK API")
            return None

        self._current_status_code = result.status_code

        if self._current_status_code != 200:
            _LOGGER.error(
                "RDW: Got an invalid HTTP status code %s from RDW APK API", \
                self._current_status_code)
            return None

        _LOGGER.debug("RDW: raw APK data: %s", result)

        try:
            data = result.json()[0]
        except:
            _LOGGER.error(
                "RDW: Got invalid response from RDW APK API. \
                Is the license plate id %s correct?", \
                self._plate)
            data = None

        return data

    def get_data_from_recall_api(self):
        """
        Get data from the RDW Recall API
        :return: A list containing the RDW Recall data
        """

        try:
            result = self._session.get(_RESOURCE_RECALL.format(self._plate),
                     data="json={}")
        except:
            _LOGGER.error("RDW: Unable to connect to the RDW Recall API")
            return None

        self._current_status_code = result.status_code

        if self._current_status_code != 200:
            _LOGGER.error(
                "RDW: Got an invalid HTTP status code %s from RDW Recall API",
                self._current_status_code)
            return None

        _LOGGER.debug("RDW: raw recall data: %s", result)

        try:
            data = result.json()
        except:
            _LOGGER.error(
                "RDW: Got invalid response from RDW Recall API. \
                Is the license plate id %s correct?",
                self._plate)
            data = None

        return data


    @Throttle(_interval)
    def update(self):
        self.attrs = {}

        rdw_apkdata = (self.get_data_from_apk_api())
        rdw_recalldata = (self.get_data_from_recall_api())

        if rdw_apkdata is not None:
            try:
                self.expdate = rdw_apkdata['vervaldatum_apk']
            except:
                self.expdate = None
            try:
                self.insured = rdw_apkdata['wam_verzekerd']
            except:
                self.insured = None

        for recall in rdw_recalldata:
            if recall['code_status'] is not 'P':
                self.attrs[recall['referentiecode_rdw'].lower()] = \
                    _RESOURCE_RECALLINFO.format(recall['referentiecode_rdw'])

        self.recall = len(self.attrs)
