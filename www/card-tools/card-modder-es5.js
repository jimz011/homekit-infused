"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n    <div id=\"root\">", "</div>\n    "], ["\n    <div id=\"root\">", "</div>\n    "]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.whenDefined('card-tools').then(function () {
  var CardModder = function (_cardTools$litElement) {
    _inherits(CardModder, _cardTools$litElement);

    function CardModder() {
      _classCallCheck(this, CardModder);

      return _possibleConstructorReturn(this, (CardModder.__proto__ || Object.getPrototypeOf(CardModder)).apply(this, arguments));
    }

    _createClass(CardModder, [{
      key: "setConfig",
      value: function setConfig(config) {
        cardTools.checkVersion(0.3);

        if (!config || !config.card) {
          throw new Error("Card config incorrect");
        }
        if (Array.isArray(config.card)) {
          throw new Error("It says 'card', not 'cardS'. Remove the dash.");
        }
        this._config = config;
        this.card = cardTools.createCard(config.card);
        this.templated = [];
        this.attempts = 0;
      }
    }, {
      key: "render",
      value: function render() {
        return cardTools.litHtml()(_templateObject, this.card);
      }
    }, {
      key: "firstUpdated",
      value: function firstUpdated() {
        this._cardMod();
      }
    }, {
      key: "_cardMod",
      value: function _cardMod() {
        var _this2 = this;

        if (!this._config.style) return;

        var target = null;
        target = target || this.card.querySelector("ha-card");
        target = target || this.card.shadowRoot && this.card.shadowRoot.querySelector("ha-card");
        target = target || this.card.firstChild && this.card.firstChild.shadowRoot && this.card.firstChild.shadowRoot.querySelector("ha-card");
        if (!target && !this.attempts) // Try twice
          setTimeout(function () {
            return _this2._cardMod();
          }, 100);
        this.attempts++;
        target = target || this.card;

        for (var k in this._config.style) {
          if (cardTools.hasTemplate(this._config.style[k])) this.templated.push(k);
          if (this.card.style.setProperty) this.card.style.setProperty(k, '');
          if (target.style.setProperty) target.style.setProperty(k, cardTools.parseTemplate(this._config.style[k]));
        }
        this.target = target;
      }
    }, {
      key: "getCardSize",
      value: function getCardSize() {
        if (this._config && this._config.report_size) return this._config.report_size;
        if (this.card) return typeof this.card.getCardSize === "function" ? this.card.getCardSize() : 1;
        return 1;
      }
    }, {
      key: "hass",
      set: function set(hass) {
        var _this3 = this;

        if (this.card) this.card.hass = hass;
        if (this.templated) this.templated.forEach(function (k) {
          _this3.target.style.setProperty(k, cardTools.parseTemplate(_this3._config.style[k], ''));
        });
      }
    }]);

    return CardModder;
  }(cardTools.litElement());

  customElements.define('card-modder', CardModder);
});

window.setTimeout(function () {
  if (customElements.get('card-tools')) return;
  customElements.define('card-modder', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: "setConfig",
      value: function setConfig() {
        throw new Error("Can't find card-tools. See https://github.com/thomasloven/lovelace-card-tools");
      }
    }]);

    return _class;
  }(HTMLElement));
}, 2000);
