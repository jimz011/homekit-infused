'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalStackInCard = function (_HTMLElement) {
    _inherits(VerticalStackInCard, _HTMLElement);

    function VerticalStackInCard() {
        _classCallCheck(this, VerticalStackInCard);

        // Make use of shadowRoot to avoid conflicts when reusing
        var _this = _possibleConstructorReturn(this, (VerticalStackInCard.__proto__ || Object.getPrototypeOf(VerticalStackInCard)).call(this));

        _this.attachShadow({ mode: 'open' });
        return _this;
    }

    _createClass(VerticalStackInCard, [{
        key: 'setConfig',
        value: function setConfig(config) {
            var _this2 = this;

            if (!config || !config.cards || !Array.isArray(config.cards)) {
                throw new Error('Card config incorrect');
            }

            this.style.boxShadow = "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.15)";
            this.style.borderRadius = "2px";
            this.style.background = "var(--paper-card-background-color)";

            var root = this.shadowRoot;
            while (root.lastChild) {
                root.removeChild(root.lastChild);
            }

            this._refCards = [];
            if (config.title) {
                var title = document.createElement("div");
                title.className = "header";
                title.style = "font-family: var(--paper-font-headline_-_font-family); -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing); font-size: var(--paper-font-headline_-_font-size); font-weight: var(--paper-font-headline_-_font-weight); letter-spacing: var(--paper-font-headline_-_letter-spacing); line-height: var(--paper-font-headline_-_line-height);text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);opacity: var(--dark-primary-opacity);padding: 24px 16px 0px 16px";
                title.innerHTML = '<div class="name">' + config.title + '</div>';
                root.appendChild(title);
            }

            var element = void 0;
            config.cards.forEach(function (item) {
                if (item.type.startsWith("custom:")) {
                    element = document.createElement('' + item.type.substr("custom:".length));
                } else {
                    element = document.createElement('hui-' + item.type + '-card');
                }
                element.setConfig(item);
                root.appendChild(element);
                _this2._refCards.push(element);
            });
        }
    }, {
        key: 'connectedCallback',
        value: function connectedCallback() {
            var _this3 = this;

            this._refCards.forEach(function (element) {
                var fn = function fn() {
                    _this3._card(element);
                };

                if (element.updateComplete) {
                    element.updateComplete.then(fn);
                } else {
                    fn();
                }
            });
        }
    }, {
        key: '_card',
        value: function _card(element) {
            if (element.shadowRoot) {
                if (!element.shadowRoot.querySelector('ha-card')) {
                    var searchEles = element.shadowRoot.getElementById("root");
                    if (!searchEles) {
                        searchEles = element.shadowRoot.getElementById("card");
                    }
                    if (!searchEles) return;
                    searchEles = searchEles.childNodes;
                    for (var i = 0; i < searchEles.length; i++) {
                        if (searchEles[i].style !== undefined) {
                            searchEles[i].style.margin = "0px";
                        }
                        this._card(searchEles[i]);
                    }
                } else {
                    element.shadowRoot.querySelector('ha-card').style.boxShadow = 'none';
                }
            } else {
                if (typeof element.querySelector === 'function' && element.querySelector('ha-card')) {
                    element.querySelector('ha-card').style.boxShadow = 'none';
                }
                var _searchEles = element.childNodes;
                for (var _i = 0; _i < _searchEles.length; _i++) {
                    if (_searchEles[_i] && _searchEles[_i].style) {
                        _searchEles[_i].style.margin = "0px";
                    }
                    this._card(_searchEles[_i]);
                }
            }
        }
    }, {
        key: 'getCardSize',
        value: function getCardSize() {
            var totalSize = 0;
            this._refCards.forEach(function (element) {
                totalSize += typeof element.getCardSize === 'function' ? element.getCardSize() : 1;
            });
            return totalSize;
        }
    }, {
        key: 'hass',
        set: function set(hass) {
            if (this._refCards) {
                this._refCards.forEach(function (card) {
                    card.hass = hass;
                });
            }
        }
    }]);

    return VerticalStackInCard;
}(HTMLElement);

customElements.define('vertical-stack-in-card', VerticalStackInCard);
