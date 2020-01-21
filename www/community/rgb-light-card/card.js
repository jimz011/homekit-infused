class RGBLightCard extends HTMLElement {
    set hass(hass) {
        this._hass = hass;
        if (!this.content) {
            this.init();
            this.update();
        }
    }

    init() {
        let shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(RGBLightCard.getStaticCSS());

        this.content = document.createElement('div');
        this.content.className = 'wrapper';
        this.content.onclick = ev => ev.stopPropagation();
        shadow.appendChild(this.content);
    }

    update() {
        this.content.innerHTML = '';
        this.content.appendChild(this.getDynamicCSS());
        for (const color of this.config.colors) {
            const element = document.createElement('div');
            element.className = 'color-circle';
            element.style = `background:${RGBLightCard.getCSSColor(color)}`;
            element.addEventListener('click', () => this.applyColor(color));
            this.content.appendChild(element);
        }
    }

    getDynamicCSS() {
        const s = parseFloat(this.config.size) || 32;
        const style = document.createElement('style');
        style.textContent = `
        .wrapper { justify-content: ${RGBLightCard.getJustify(this.config.justify)}; margin-bottom: -${s / 8}px; }
        .color-circle {  width: ${s}px; height: ${s}px; margin: ${s / 8}px ${s / 4}px ${s / 4}px; }
        `;
        return style;
    }

    static getStaticCSS() {
        const style = document.createElement('style');
        style.textContent = `
        .wrapper { cursor: auto; display: flex; flex-wrap: wrap; }
        .color-circle {
            border-radius: 50%; cursor: pointer; transition: box-shadow 0.15s ease-in-out;
            box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
        }
        .color-circle:hover {
            box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)
        }
        `;
        return style;
    }

    setConfig(config) {
        // Colors must be a defined array
        if (!Array.isArray(config.colors)) {
            throw new Error('You need to define an array of colors');
        }
        // If root entity is defined, it can only be a light
        if (config.entity && config.entity.indexOf('light.') !== 0) {
            throw new Error(`entity '${config.entity}' must be a light`);
        }
        // Validate each color
        for (const c in config.colors) {
            const color = config.colors[c];
            const type = color.type || 'light';
            // Check if type is valid
            if (['light', 'script', 'scene'].indexOf(type) === -1) {
                throw new Error(`Invalid type '${type}' for colors[${c}]`);
            }
            // If root entity is not defined, ensure light entity_id is defined
            if (type === 'light' && !config.entity && !color.entity_id) {
                throw new Error(`You need to define entity or colors[${c}].entity_id`);
            }
            // If scene or script, ensure entity_id is defined
            if (type !== 'light' && !color.entity_id) {
                throw new Error(`You need to define colors[${c}].entity_id`);
            }
            // Check that entity_id is valid
            if (color.entity_id && color.entity_id.indexOf(type + '.') !== 0) {
                throw new Error(`colors[${c}].entity_id '${color.entity_id}' must be a ${type}`);
            }
        }

        this.config = config;

        if (this.content) {
            this.update();
        }
    }

    applyColor(color) {
        const serviceData = { entity_id: this.config.entity, ...color, icon_color: undefined, type: undefined };
        this._hass.callService(color.type || 'light', 'turn_on', serviceData);
    }

    static getCSSColor(color) {
        if (color['icon_color']) {
            return color['icon_color'];
        }
        if (color['color_name']) {
            return color['color_name'];
        }
        if (Array.isArray(color['rgb_color']) && color['rgb_color'].length === 3) {
            return `rgb(${color['rgb_color'].join(',')})`;
        }
        if (Array.isArray(color['hs_color']) && color['hs_color'].length === 2) {
            return `hsl(${color['hs_color'][0]},100%,${100 - color['hs_color'][1] / 2}%)`;
        }
        return '#7F848E';
    }

    static getJustify(option) {
        return (
            {
                left: 'flex-start',
                right: 'flex-end',
                center: 'center',
                between: 'space-between',
                around: 'space-around'
            }[option] || 'flex-start'
        );
    }
}

customElements.define('rgb-light-card', RGBLightCard);
