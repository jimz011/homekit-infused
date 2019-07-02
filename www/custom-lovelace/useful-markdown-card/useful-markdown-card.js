customElements.whenDefined('card-tools').then(() => {
let cardTools = customElements.get('card-tools');
class UsefulMarkdownCard extends cardTools.LitElement {

  async setConfig(config) {
    this._config = config;
    window.addEventListener("location-changed", () => this.update_content() );
  }

  static get properties() {
    return {
      cardContent: {type: String},
      cardStyle: {type: String},
      hass: {type: Object},
    };
  }

  update_content() {
    this.cardContent = cardTools.parseTemplate(this._config.content);
    this.cardStyle = cardTools.parseTemplate(this._config.style);
  }

  render() {
    return cardTools.LitHtml`
    <hui-markdown-card></hui-markdown-card>
    `;
  }

  async updated(changedProperties) {
    const card = this.shadowRoot.querySelector("hui-markdown-card");
    if(changedProperties.has('hass')) this.update_content();

    if(!card) return;
    if(changedProperties.has('cardContent')) {
      card.setConfig(Object.assign(
        {
          type: "markdown",
          title: this._config.title,
          content: this.cardContent },
      ));
      card.requestUpdate();
    }
    if(changedProperties.has('cardStyle')) {
      await card.updateComplete;
      const haCard = card.shadowRoot.querySelector("ha-card");
      if(haCard.querySelector("#umc-style"))
        haCard.removeChild(haCard.querySelector("#umc-style"));
      const styleTag = document.createElement('style');
      styleTag.id = "umc-style";
      styleTag.innerHTML = this.cardStyle;
      haCard.appendChild(styleTag);
    }
  }

  getCardSize()
  {
    const card = this.shadowRoot.querySelector("hui-markdown-card");
    return (card && card.getCardSize) ? card.getCardSize() : 1;
  }
}

cardTools.hass.callService('persistent_notification', 'create', {
  notification_id: 'umc-deprecation',
  title: 'Deprecated lovelace plugin',
  message: 'The `useful-markdown-card` plugin you are using is deprecated and should be replaced with `markdown-mod`. See https://github.com/thomasloven/lovelace-markdown-mod',
});

customElements.define('useful-markdown-card', UsefulMarkdownCard);
});

window.setTimeout(() => {
  if(customElements.get('card-tools')) return;
  customElements.define('useful-markdown-card', class extends HTMLElement{
    setConfig() { throw new Error("Can't find card-tools. See https://github.com/thomasloven/lovelace-card-tools");}
  });
}, 2000);
