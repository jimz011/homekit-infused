"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

customElements.define('card-tools', function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, null, [{
    key: "CUSTOM_TYPE_PREFIX",
    value: function CUSTOM_TYPE_PREFIX() {
      return "custom:";
    }
  }, {
    key: "version",
    value: function version() {
      return "0.3";
    }
  }, {
    key: "v",
    value: function v() {
      return version;
    }
  }, {
    key: "checkVersion",
    value: function checkVersion(v) {
      if (this.version() < v) {
        throw new Error("Old version of card-tools found. Get the latest version of card-tools.js from https://github.com/thomasloven/lovelace-card-tools");
      }
    }
  }, {
    key: "litElement",
    value: function litElement() {
      return Object.getPrototypeOf(customElements.get('hui-error-entity-row'));
    }
  }, {
    key: "litHtml",
    value: function litHtml() {
      return this.litElement().prototype.html;
    }
  }, {
    key: "hass",
    value: function hass() {
      return document.querySelector('home-assistant').hass;
    }
  }, {
    key: "fireEvent",
    value: function fireEvent(ev, detail) {
      var entity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      ev = new Event(ev, {
        bubbles: true,
        cancelable: false,
        composed: true
      });
      ev.detail = detail || {};
      if (entity) {
        entity.dispatchEvent(ev);
      } else {
        document.querySelector("home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("app-drawer-layout partial-panel-resolver").shadowRoot.querySelector("ha-panel-lovelace").shadowRoot.querySelector("hui-root").shadowRoot.querySelector("ha-app-layout #view").firstElementChild.dispatchEvent(ev);
      }
    }
  }, {
    key: "createThing",
    value: function createThing(thing, config) {
      var _this = this;

      var _createThing = function _createThing(tag, config) {
        var element = document.createElement(tag);
        try {
          element.setConfig(config);
        } catch (err) {
          console.error(tag, err);
          return _createError(err.message, config);
        }
        return element;
      };

      var _createError = function _createError(error, config) {
        return _createThing("hui-error-card", {
          type: "error",
          error: error,
          config: config
        });
      };

      if (!config || (typeof config === "undefined" ? "undefined" : _typeof(config)) !== "object" || !config.type) return _createError("No " + thing + " type configured", config);
      var tag = config.type;
      if (config.error) {
        var err = config.error;
        delete config.error;
        return _createError(err, config);
      }
      if (tag.startsWith(this.CUSTOM_TYPE_PREFIX())) tag = tag.substr(this.CUSTOM_TYPE_PREFIX().length);else tag = "hui-" + tag + "-" + thing;

      if (customElements.get(tag)) return _createThing(tag, config);

      // If element doesn't exist (yet) create an error
      var element = _createError("Custom element doesn't exist: " + tag + ".", config);
      element.style.display = "None";
      var time = setTimeout(function () {
        element.style.display = "";
      }, 2000);
      // Remove error if element is defined later
      customElements.whenDefined(tag).then(function () {
        clearTimeout(timer);
        _this.fireEvent("ll-rebuild", {}, element);
      });

      return element;
    }
  }, {
    key: "createCard",
    value: function createCard(config) {
      return this.createThing("card", config);
    }
  }, {
    key: "createElement",
    value: function createElement(config) {
      return this.createThing("element", config);
    }
  }, {
    key: "createEntityRow",
    value: function createEntityRow(config) {
      var SPECIAL_TYPES = new Set(["call-service", "divider", "section", "weblink"]);
      var DEFAULT_ROWS = {
        alert: "toggle",
        automation: "toggle",
        climate: "climate",
        cover: "cover",
        fan: "toggle",
        group: "group",
        input_boolean: "toggle",
        input_number: "input-number",
        input_select: "input-select",
        input_text: "input-text",
        light: "toggle",
        media_player: "media-player",
        lock: "lock",
        scene: "scene",
        script: "script",
        sensor: "sensor",
        timer: "timer",
        switch: "toggle",
        vacuum: "toggle",
        water_heater: "climate"
      };

      if (!config || (typeof config === "undefined" ? "undefined" : _typeof(config)) !== "object" || !config.entity && !config.type) {
        Object.assign(config, { error: "Invalid config given" });
        return this.createThing("", config);
      }

      var type = config.type || "default";
      if (SPECIAL_TYPES.has(type) || type.startsWith(this.CUSTOM_TYPE_PREFIX())) return this.createThing("row", config);

      var domain = config.entity.split(".", 1)[0];
      Object.assign(config, { type: DEFAULT_ROWS[domain] || "text" });
      return this.createThing("entity-row", config);
    }
  }, {
    key: "deviceID",
    value: function deviceID() {
      var ID_STORAGE_KEY = 'lovelace-player-device-id';
      if (window['fully'] && typeof fully.getDeviceId === "function") return fully.getDeviceId();
      if (!localStorage[ID_STORAGE_KEY]) {
        var s4 = function s4() {
          return Math.floor((1 + Math.random()) * 100000).toString(16).substring(1);
        };
        localStorage[ID_STORAGE_KEY] = "" + s4() + s4() + "-" + s4() + s4();
      }
      return localStorage[ID_STORAGE_KEY];
    }
  }, {
    key: "moreInfo",
    value: function moreInfo(entity) {
      this.fireEvent("hass-more-info", { entityId: entity });
    }
  }, {
    key: "longpress",
    value: function longpress(element) {
      customElements.whenDefined("long-press").then(function () {
        var longpress = document.body.querySelector("long-press");
        longpress.bind(element);
      });
      return element;
    }
  }, {
    key: "hasTemplate",
    value: function hasTemplate(text) {
      return (/\[\[\s+.*\s+\]\]/.test(text)
      );
    }
  }, {
    key: "parseTemplate",
    value: function parseTemplate(text, error) {
      var _this2 = this;

      if (typeof text !== "string") return text;
      var _parse = function _parse(str) {
        try {
          str = str.replace(/^\[\[\s+|\s+\]\]$/g, '');
          var parts = str.split(".");
          var v = _this2.hass().states[parts[0] + "." + parts[1]];
          parts.shift();
          parts.shift();
          parts.forEach(function (item) {
            return v = v[item];
          });
          return v;
        } catch (err) {
          return error || "[[ Template matching failed " + str + " ]]";
        }
      };
      text = text.replace(/(\[\[\s.*?\s\]\])/g, function (str, p1, offset, s) {
        return _parse(str);
      });
      return text;
    }
  }, {
    key: "args",
    value: function args() {
      var url = document.currentScript.src;
      url = url.substr(url.indexOf("?") + 1);
      var args = {};
      url.split("&").forEach(function (a) {
        if (a.indexOf("=")) {
          var parts = a.split("=");
          args[parts[0]] = parts[1];
        } else {
          args[a] = true;
        }
      });
      return args;
    }
  }, {
    key: "localize",
    value: function localize(key) {
      var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      var language = this.hass().language;
      if (this.hass().resources[language] && this.hass().resources[language][key]) return this.hass().resources[language][key];
      return def;
    }
  }]);

  return _class;
}());

// Global definition of cardTools
var cardTools = customElements.get('card-tools');

console.info("%cCARD-TOOLS IS INSTALLED\n%cDeviceID: " + customElements.get('card-tools').deviceID(), "color: green; font-weight: bold", "");
