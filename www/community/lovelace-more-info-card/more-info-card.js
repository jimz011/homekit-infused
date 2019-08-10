customElements.whenDefined('card-tools').then(() => {
let cardTools = customElements.get('card-tools');
class MoreInfoCard extends cardTools.LitElement {

  setConfig(config) {
    this.config = config;
  }

  render() {
    return cardTools.LitHtml`
    <ha-card
    .header = "${this.config.title}"
    >
    <more-info-controls
    .dialogElement="${null}"
    .canConfigure="${false}"
    .hass="${this._hass}"
    .stateObj="${this.state_obj}"
    ></more-info-controls>
    </ha-card>
    `;
  }

  firstUpdated() {
    const mic = this.shadowRoot.querySelector("ha-card").querySelector("more-info-controls").shadowRoot;
    mic.removeChild(mic.querySelector("app-toolbar"));
  }

  set hass(hass) {
    this._hass = hass;
    this.state_obj = hass.states[this.config.entity];
    this.requestUpdate();
  }

  getCardSize() {
    return 1;
  }

}
customElements.define('more-info-card', MoreInfoCard);
});

