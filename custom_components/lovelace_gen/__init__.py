import os
import logging
import json
import io
import time
from collections import OrderedDict

import jinja2

from homeassistant.util.yaml import loader
from homeassistant.exceptions import HomeAssistantError

_LOGGER = logging.getLogger(__name__)

def fromjson(value):
    return json.loads(value)

jinja = jinja2.Environment(loader=jinja2.FileSystemLoader("/"))

jinja.filters['fromjson'] = fromjson

llgen_config = {}

def load_yaml(fname, secrets = None, args={}):
    try:
        ll_gen = False
        with open(fname, encoding="utf-8") as f:
            if f.readline().lower().startswith("# lovelace_gen"):
                ll_gen = True

        if ll_gen:
            stream = io.StringIO(jinja.get_template(fname).render({**args, "_global": llgen_config}))
            stream.name = fname
            return loader.yaml.load(stream, Loader=lambda _stream: loader.SafeLineLoader(_stream, secrets)) or OrderedDict()
        else:
            with open(fname, encoding="utf-8") as config_file:
                return loader.yaml.load(config_file, Loader=lambda stream: loader.SafeLineLoader(stream, secrets)) or OrderedDict()
    except loader.yaml.YAMLError as exc:
        _LOGGER.error(str(exc))
        raise HomeAssistantError(exc)
    except UnicodeDecodeError as exc:
        _LOGGER.error("Unable to read file %s: %s", fname, exc)
        raise HomeAssistantError(exc)


def _include_yaml(ldr, node):
    args = {}
    if isinstance(node.value, str):
        fn = node.value
    else:
        fn, args, *_ = ldr.construct_sequence(node)
    fname = os.path.abspath(os.path.join(os.path.dirname(ldr.name), fn))
    try:
        return loader._add_reference(load_yaml(fname, ldr.secrets, args=args), ldr, node)
    except FileNotFoundError as exc:
        _LOGGER.error("Unable to include file %s: %s", fname, exc);
        raise HomeAssistantError(exc)

def _uncache_file(ldr, node):
    path = node.value
    timestamp = str(time.time())
    if '?' in path:
        return f"{path}&{timestamp}"
    return f"{path}?{timestamp}"

loader.load_yaml = load_yaml
loader.SafeLineLoader.add_constructor("!include", _include_yaml)
loader.SafeLineLoader.add_constructor("!file", _uncache_file)

async def async_setup(hass, config):
    llgen_config.update(config.get("lovelace_gen"));
    return True

# Allow redefinition of node anchors
import yaml

def compose_node(self, parent, index):
    if self.check_event(yaml.events.AliasEvent):
        event = self.get_event()
        anchor = event.anchor
        if anchor not in self.anchors:
            raise yaml.composer.ComposerError(None, None, "found undefined alias %r"
                    % anchor, event.start_mark)
        return self.anchors[anchor]
    event = self.peek_event()
    anchor = event.anchor
    self.descend_resolver(parent, index)
    if self.check_event(yaml.events.ScalarEvent):
        node = self.compose_scalar_node(anchor)
    elif self.check_event(yaml.events.SequenceStartEvent):
        node = self.compose_sequence_node(anchor)
    elif self.check_event(yaml.events.MappingStartEvent):
        node = self.compose_mapping_node(anchor)
    self.ascend_resolver()
    return node

yaml.composer.Composer.compose_node = compose_node