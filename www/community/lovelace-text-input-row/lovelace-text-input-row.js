class TextInputRow extends Polymer.Element {

  static get template() {
    return Polymer.html`
      <paper-input
          label="[[label]]"
          value="[[value]]"
          minlength="[[minlength]]"
          maxlength="[[maxlength]]"
          autoValidate="[[pattern]]"
          pattern="[[pattern]]"
          type="[[mode]]"
          on-change="valueChanged"
          id="textinput"
          placeholder=""
        ></paper-input>
    `;
  }

  ready() {
    super.ready();
    this.$.textinput.addEventListener('click', ev => ev.stopPropagation());
  }

  setConfig(config) {
    this._config = config;
  }

  valueChanged(ev) {
    const newValue = this.$.textinput.value;
    const param = {
      entity_id: this._config.entity,
      value: newValue,
    };
    this._hass.callService('input_text', 'set_value', param);
  }

  computeObjectId(entityId) {
    return entityId.substr(entityId.indexOf(".") + 1);
  }

  computeStateName(stateObj){
    return stateObj.attributes.friendly_name === undefined 
    ? this.computeObjectId(stateObj.entity_id).replace(/_/g, " ") 
    : stateObj.attributes.friendly_name || "";
  }

  set hass(hass) {
    this._hass = hass;
    this.stateObj = hass.states[this._config.entity];
    if(this.stateObj) {
      this.value = this.stateObj.state;
      this.minlength = this.stateObj.attributes.min;
      this.maxlength = this.stateObj.attributes.max;
      this.pattern = this.stateObj.attributes.pattern;
      this.mode = this.minlength = this.stateObj.attributes.mode;
      this.label = this._config.name ? this._config.name : this.computeStateName(this.stateObj);
    }
  }
}

customElements.define('text-input-row', TextInputRow);
