!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const o=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),n=o.prototype.html;o.prototype.css;customElements.define("more-info-card",class extends o{static get properties(){return{hass:{}}}setConfig(e){this.config=e}getCardSize(){return 5}firstUpdated(){const e=this.shadowRoot.querySelector("ha-card").querySelector("more-info-controls").shadowRoot;e.removeChild(e.querySelector("app-toolbar"))}render(){const e=this.hass&&this.hass.states&&this.hass.states[this.config.entity],t=void 0===e.attributes.friendly_name?e.entity_id.split(".")[1].replace(/_/g," "):e.attributes.friendly_name;return n`
    <ha-card
      .header=${this.config.title||t}
    >
    <more-info-controls
      .dialogElement=${null}
      .canConfigure=${!1}
      .hass=${this.hass}
      .stateObj=${e}
    ></more-info-controls>
    </ha-card>
    `}})}]);