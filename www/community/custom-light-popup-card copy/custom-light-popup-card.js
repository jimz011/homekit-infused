import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";
class CustomLightPopupCard extends LitElement {
  
  static get properties() {
    return {
      hass: {},
      config: {},
      active: {}
    };
  }
  
  constructor() {
    super();
  }
  
  render() {
    
    var entity = this.config.entity;
    var stateObj = this.hass.states[entity];
    var scenesInARow = this.config.scenesInARow ? this.config.scenesInARow : 4;
    var brightness = 0;
    if(stateObj.attributes.brightness) {
        brightness = stateObj.attributes.brightness /2.55;
    }
    var icon = this.config.icon ? this.config.icon : stateObj.attributes.icon ? stateObj.attributes.icon: 'mdi:lightbulb';
    
    //Scenes
    var scenes = this.config.scenes;
    if(scenes && scenes.length > 0) {
        var sceneRows = [];
        var numberOfRows = Math.ceil(scenes.length / scenesInARow);
        for(var i=0;i<numberOfRows;i++) {
            sceneRows[i] = [];
            for(var j=0;j<scenesInARow;j++) {
                if(scenes[(i*scenesInARow)+j]) {
                    sceneRows[i][j] = scenes[(i*scenesInARow)+j];
                }
            }
        }
    }

    var switchValue = 0;
    switch(stateObj.state) {
        case 'on':
            switchValue = 1;
            break;
        case 'off':
            switchValue = 0;
            break;
        default:
            switchValue = 0;
    }
    
    var brightnessWidth = this.config.brightnessWidth ? this.config.brightnessWidth : "150px";
    var brightnessHeight = this.config.brightnessHeight ? this.config.brightnessHeight : "400px";
    var switchWidth = this.config.switchWidth ? this.config.switchWidth : "380px";
    var switchHeight = this.config.switchHeight ? this.config.switchHeight : "150px";
        
    return html`
        <div class="icon ${stateObj.state === "off" ? '': 'on'}">
            <ha-icon icon="${icon}" />
        </div>
        ${ stateObj.attributes.supported_features > 9 ? html`
            <h4 class="brightness">${stateObj.state === "off" ? 0 : Math.round(stateObj.attributes.brightness/2.55)}</h4>
            <div class="range-holder" style="--slider-height: ${brightnessHeight};">
                <input type="range" style="--slider-width: ${brightnessWidth};--slider-height: ${brightnessHeight};" .value="${stateObj.state === "off" ? 0 : Math.round(stateObj.attributes.brightness/2.55)}" @change=${e => this._setBrightness(stateObj, e.target.value)}>
            </div>
        ` : html`
            <h4>${stateObj.state}</h4>
            <div class="switch-holder" style="--switch-height: ${switchHeight};">
                <input type="range" style="--switch-width: ${switchWidth};--switch-height: ${switchHeight};" value="0" min="0" max="1" .value="${switchValue}" @change=${e => this._switch(stateObj)}>
            </div>
        `}
        
        ${scenes && scenes.length > 0 ? html`
        <div class="scene-holder">
            
            ${sceneRows.map((sceneRow) => html`
                <div class="scene-row">
                ${sceneRow.map((scene) => html`
                    <div class="scene" data-scene="${scene.scene}">
                        <span class="color" style="background-color: ${scene.color}"></span>
                        ${scene.name ? html`<span class="name">${scene.name}</span>`: html``}
                    </div>
                `)}
                </div>
            `)}
        </div>` : html ``}
        
    `;
  }
  
  updated() {
    this.shadowRoot.querySelectorAll(".scene").forEach(scene => {
        scene.addEventListener('click', event => {
            this._activateScene(scene.dataset.scene)
        })
    });
  }
  
  _createRange(amount) {
    const items = [];
    for (let i = 0; i < amount; i++) {
      items.push(i);
    }
    return items;
  }
  
  _setBrightness(state, value) {
    this.hass.callService("homeassistant", "turn_on", {
        entity_id: state.entity_id,
        brightness: value * 2.55
    });
  }
  
  _switch(state) {
      this.hass.callService("homeassistant", "toggle", {
        entity_id: state.entity_id    
      });
  }
  
  _activateScene(scene) {
    this.hass.callService("scene", "turn_on", {
        entity_id: scene
    });
  }
  
  setConfig(config) {
    if (!config.entity) {
      throw new Error("You need to define an entity");
    }
    this.config = config;
  }

  getCardSize() {
    return this.config.entities.length + 1;
  }
  
  static get styles() {
    return css`
        :host {
            background-color:#000!important;
        }
        .icon {
            margin: 0 auto;
            text-align:center;
            display:block;
            height: 40px;
            width: 40px;
            color: rgba(255,255,255,0.3);
            font-size: 30px;
            padding-top:5px;
        }
        .icon ha-icon {
            width:30px;
            height:30px;
        }
        .icon.on ha-icon {
            fill: #f7d959;
        }
        h4 {
            color: #FFF;
            display: block;
            font-weight: 300;
            margin-bottom: 30px;
            text-align: center;
            font-size:15px;
            margin-top:0;
            text-transform: capitalize;
            font-family: Helvetica;
        }
        h4.brightness:after {
            content: "%";
            padding-left: 1px;
        }
        
        .range-holder {
            height: var(--slider-height);
            position:relative;
            display: block;
        }
        .range-holder input[type="range"] {
            outline: 0;
            border: 0;
            border-radius: 12px;
            width: var(--slider-height);
            margin: 0;
            transition: box-shadow 0.2s ease-in-out;
            -webkit-transform:rotate(270deg);
            -moz-transform:rotate(270deg);
            -o-transform:rotate(270deg);
            -ms-transform:rotate(270deg);
            transform:rotate(270deg);
            overflow: hidden;
            height: var(--slider-width);
            -webkit-appearance: none;
            background-color: #ddd;
            position: absolute;
            top: calc(50% - (var(--slider-width) / 2));
            right: calc(50% - (var(--slider-height) / 2));
        }
        .range-holder input[type="range"]::-webkit-slider-runnable-track {
            height: var(--slider-width);
            -webkit-appearance: none;
            color: #ddd;
            margin-top: -1px;
            transition: box-shadow 0.2s ease-in-out;
        }
        .range-holder input[type="range"]::-webkit-slider-thumb {
            width: 25px;
            border-right:10px solid #FFF;
            border-left:10px solid #FFF;
            border-top:20px solid #FFF;
            border-bottom:20px solid #FFF;
            -webkit-appearance: none;
            height: 80px;
            cursor: ew-resize;
            background: #fff;
            box-shadow: -350px 0 0 350px #FFF, inset 0 0 0 80px #ddd;
            border-radius: 0;
            transition: box-shadow 0.2s ease-in-out;
            position: relative;
            top: calc((var(--slider-width) - 80px) / 2);
        }
        .switch-holder {
            height: var(--switch-height);
            position:relative;
            display: block;
        }
        .switch-holder input[type="range"] {
            outline: 0;
            border: 0;
            border-radius: 12px;
            width: calc(var(--switch-height) - 20px);
            margin: 0;
            transition: box-shadow 0.2s ease-in-out;
            -webkit-transform: rotate(270deg);
            -moz-transform: rotate(270deg);
            -o-transform: rotate(270deg);
            -ms-transform: rotate(270deg);
            transform: rotate(270deg);
            overflow: hidden;
            height: calc(var(--switch-width) - 20px);
            -webkit-appearance: none;
            background-color: #ddd;
            padding: 10px;
            position: absolute;
            top: calc(50% - (var(--switch-width) / 2));
            right: calc(50% - (var(--switch-height) / 2));
        }
        .switch-holder input[type="range"]::-webkit-slider-runnable-track {
            height: calc(var(--switch-width) - 20px);
            -webkit-appearance: none;
            color: #ddd;
            margin-top: -1px;
            transition: box-shadow 0.2s ease-in-out;
        }
        .switch-holder input[type="range"]::-webkit-slider-thumb {
            width: calc(var(--switch-height) / 2);
            -webkit-appearance: none;
            height: calc(var(--switch-width) - 20px);
            cursor: ew-resize;
            background: #fff;
            transition: box-shadow 0.2s ease-in-out;
            border: none;
            box-shadow: -1px 1px 20px 0px rgba(0,0,0,0.75);
            position: relative;
            top: 0;
            border-radius: 12px;
        }
        
        .scene-holder {
            display: flex;
            flex-direction: column;
            margin-top:20px;
        }
        .scene-row {
            display:block;
            text-align:center;
            padding-bottom:10px;
        }
        .scene-row:last-child {
            padding:0;
        }
        .scene-holder .scene {
            display:inline-block;
            margin-right:10px;
            cursor:pointer;
        }
        .scene-holder .scene:nth-child(4n) {
            margin-right:0;
        }
        .scene-holder .scene .color {
            width:50px;
            height:50px;
            border-radius:50%;
            display:block;
        }
        .scene-holder .scene .name {
            width:50px;
            overflow:hidden;
            display:block;
            color: #FFF;
            font-size: 9px;
            margin-top:3px;
        }
    `;
  }  
  
}

customElements.define('custom-light-popup-card', CustomLightPopupCard);
