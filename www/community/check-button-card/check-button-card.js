console.info(`%cCHECK-BUTTON-CARD\n%cVersion: 1.0.2`, 'color: green; font-weight: bold;', '');
class CheckButtonCard extends HTMLElement {
    constructor() {
        super();
        this._counter = 0;
        this._entityState = 0;
        this._configSet = false;
        this._undoEntityState = 0;
        this._currentTimestamp = 0;
        this._overBy = false;
        this._severity = [];
        this.attachShadow({ mode: 'open' });
    }
    setConfig(config) {
        const root = this.shadowRoot;
        function deepcopy(value) {
            if (!(!!value && typeof value == 'object')) {
                return value;
            }
            if (Object.prototype.toString.call(value) == '[object Date]') {
                return new Date(value.getTime());
            }
            if (Array.isArray(value)) {
                return value.map(deepcopy);
            }
            var result = {};
            Object.keys(value).forEach(function (key) { result[key] = deepcopy(value[key]); });
            return result;
        }
        config = deepcopy(config);
        if (root.lastChild)
            root.removeChild(root.lastChild);
        const defaultConfig = {
            height: '40px',
            discovery_prefix: 'homeassistant',
            undo_timeout: 15,
            color: 'var(--checkbutton-card-color, var(--primary-color))',
            text: {
                year: 'year',
                years: 'years',
                month: 'month',
                months: 'months',
                week: 'week',
                weeks: 'weeks',
                day: 'day',
                days: 'days',
                hour: 'hour',
                hours: 'hours',
                minute: 'minute',
                minutes: 'minutes',
                less_than: 'less than',
                more_than: 'more than',
                ago: 'ago',
                due_in: 'due in',
                over_by: 'over by'
            },
            display_limit: null,
            due: false
        };
        config.text = Object.assign(defaultConfig.text, config.text);
        config = Object.assign(defaultConfig, config);
        if (config.severity) {
            let newArray = config.severity.slice();
            for (var i = 0; i < newArray.length; i++) {
                const value = this._convertToSeconds(newArray[i].value);
                newArray[i].seconds = value;
            }
            newArray.sort(function (a, b) {
                return a.seconds - b.seconds;
            });
            if (config.due == false) {
                newArray = newArray.reverse();
            }
            config.severity = newArray;
        }
        if (config.title_position != 'inside') {
            if (!config.width)
                config.width = '70%';
        }
        else {
            if (!config.width)
                config.width = '100%';
        }
        const card = document.createElement('ha-card');
        const background = document.createElement('div');
        background.id = 'background';
        const button = document.createElement('cb-card-button');
        button.id = 'button';
        const buttonText = document.createElement('cb-card-buttontext');
        buttonText.id = 'buttonText';
        const undo = document.createElement('cb-card-undo');
        undo.id = 'undo';
        undo.style.setProperty('visibility', 'hidden');
        undo.textContent = 'undo';
        const buttonBlocker = document.createElement('cb-card-buttonblocker');
        buttonBlocker.id = 'buttonBlocker';
        buttonBlocker.style.setProperty('visibility', 'hidden');
        const title = document.createElement('cb-card-title');
        title.id = 'title';
        title.textContent = config.title;
        const titleBar = document.createElement('cb-card-titlebar');
        titleBar.id = 'titleBar';
        const inputBar = document.createElement('cb-card-inputbar');
        inputBar.id = 'inputBar';
        inputBar.style.setProperty('visibility', 'hidden');
        const minutesInput = document.createElement('input');
        minutesInput.type = 'number';
        minutesInput.id = 'minutesInput';
        minutesInput.placeholder = 'mm';
        const hoursInput = document.createElement('input');
        hoursInput.type = 'number';
        hoursInput.id = 'hoursInput';
        hoursInput.placeholder = 'hh';
        const daysInput = document.createElement('input');
        daysInput.type = 'number';
        daysInput.id = 'daysInput';
        daysInput.placeholder = 'dd';
        const inputForm = document.createElement('cb-card-inputform');
        inputForm.id = 'inputForm';
        const submitButton = document.createElement('cb-card-submitbutton');
        submitButton.id = 'submitButton';
        submitButton.textContent = '✔';
        const cancelButton = document.createElement('cb-card-cancelbutton');
        cancelButton.id = 'cancelButton';
        cancelButton.textContent = '✖';
        const configBar = document.createElement('cb-card-configbar');
        configBar.id = 'configBar';
        if (config.remove !== true)
            configBar.style.setProperty('visibility', 'hidden');
        const configInput = document.createElement('div');
        configInput.textContent = "Entity doesn't exist. Create?";
        configInput.id = 'configInput';
        const configForm = document.createElement('cb-card-configform');
        configForm.id = 'configForm';
        const submitConfigButton = document.createElement('cb-card-submitconfigbutton');
        submitConfigButton.id = 'submitConfigButton';
        submitConfigButton.textContent = '✔';
        const style = document.createElement('style');
        style.textContent = `
      ha-card {
        background-color: var(--paper-card-background-color);
        padding: 4px;
      }
      #background {
        position: relative;
        height: ${config.height};
      }
      #button {
        position: absolute;
        height: ${config.height};
        color: #FFF;
        text-align: center;
        font-weight: bold;
        font-size: 13px;
        text-shadow: 1px 1px #0007;
        border-radius: 3px;
        width: ${config.width};
        --background-color: #000;
        right: 0;
        background-color: var(--background-color);
        cursor: pointer;
      }
      #buttonText {
        white-space: pre;
        display: table-cell;
        height: ${config.height};
        width: 1000px;
        vertical-align: middle;
      }
      #buttonBlocker {
        position: absolute;
        height: ${config.height};
        width: ${config.width};
        right: 0;
      }
      #undo {
        position: absolute;
        text-align: center;
        height: ${config.height};
        line-height: ${config.height};
        width: 80px;
        background-color: hsl(220, 40%, 50%);
        right: 0px;
        border-radius: 3px;
        text-shadow: 1px 1px #0007;
        color: #FFF;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
      }
      #undo:active {
        background-color: hsl(220, 50%, 40%);
      }
      #title {
        display: table-cell;
        height: ${config.height};
        width: 100%;
        padding-left: 10px;
        text-align: left;
        font-size: 14px;
        vertical-align: middle;
        color: var(--primary-text-color);
      }
      #titleBar {
        position: absolute;
        height: ${config.height};
        width: 100%;
        cursor: pointer;
      }
      #inputBar, #configBar{
        position: absolute;
        display: table-cell;
        box-sizing: border-box;
        vertical-align: middle;
        height: ${config.height};
        line-height: ${config.height};
        border-radius: 3px;
        width: ${config.width};
        right: 0;
        --background-color: hsl(220, 50%, 50%);
        background-color: var(--background-color);
      }
      #secondsInput, #minutesInput, #hoursInput, #daysInput, #monthsInput, #yearsInput {
        height: 25px;
        width: 30px;
        text-align: center;
        margin-right: 4px;
        border-color: #000;
        border: 2px solid gray;
      }
      #configInput, #updateInput {
        right: 0px;
        text-shadow: 1px 1px #000;
        color: #FFF;
        font-weight: bold;
        text-align: center;
        width: 100%;
      }
      #submitButton, #submitConfigButton, #submitUpdateButton {
        text-align: center;
        cursor: pointer;
        position: relative;
        float: left;
        width: 50px;
        color: #00FF00;
        font-size: 22px;
        font-weight: bold;
      }
      #submitButton:hover, #submitConfigButton:hover, #submitUpdateButton:hover {
        font-size: 30px;
      }
      #submitConfigButton, #submitUpdateButton {
        float: right;
      }
      #cancelButton {
        text-align: center;
        cursor: pointer;
        position: relative;
        float: right;
        width: 50px;
        color: #FF0000;
        font-size: 22px;
        font-weight: bold;
      }
      #cancelButton:hover {
        font-size: 30px;
      }
      #inputForm {
        position: absolute;
        left: 50%;
        margin-left: -57px;
      }
      #configForm, #updateForm{
        position: absolute;
        width: 100%;
      }
      input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `;
        titleBar.appendChild(title);
        button.appendChild(buttonText);
        inputForm.appendChild(daysInput);
        inputForm.appendChild(hoursInput);
        inputForm.appendChild(minutesInput);
        inputBar.appendChild(cancelButton);
        inputBar.appendChild(inputForm);
        inputBar.appendChild(submitButton);
        configForm.appendChild(configInput);
        configBar.appendChild(configForm);
        configBar.appendChild(submitConfigButton);
        if (config.title_position != 'inside')
            background.appendChild(titleBar);
        background.appendChild(button);
        background.appendChild(inputBar);
        background.appendChild(configBar);
        background.appendChild(buttonBlocker);
        background.appendChild(undo);
        background.appendChild(style);
        card.appendChild(background);
        button.addEventListener('mousedown', event => {
            this._buttonHold('down');
        });
        button.addEventListener('touchstart', event => {
            this._buttonHold('down');
        });
        button.addEventListener('mouseup', event => {
            this._buttonHold('up');
            this._action();
        });
        button.addEventListener('touchend', event => {
            this._buttonHold('up');
        });
        buttonBlocker.addEventListener('mouseup', event => {
            this._buttonHold('up');
        });
        buttonBlocker.addEventListener('touchend', event => {
            this._buttonHold('up');
        });
        undo.addEventListener('mouseup', event => {
            this._undo();
        });
        submitButton.addEventListener('mouseup', event => {
            this._setInput();
        });
        cancelButton.addEventListener('mouseup', event => {
            this._hideInput();
        });
        submitConfigButton.addEventListener('mouseup', event => {
            this._setConfig();
        });
        titleBar.addEventListener('click', event => {
            this._showAttributes('hass-more-info', { entityId: config.entity }, null);
        });
        root.appendChild(card);
        this._config = config;
    }
    set hass(hass) {
        const config = this._config;
        this._hass = hass;
        let entityState;
        if (hass.states[config.entity] == undefined || config.remove == true) {
            this._showConfigBar();
        }
        if (hass.states[config.entity] != undefined) {
            if (hass.states[config.entity].attributes.unit_of_measurement != 'timestamp' && this._configSet != true) {
                this._showConfigBar();
            }
            entityState = hass.states[config.entity].state;
        }
        var counter = this._startTimer();
        clearInterval(this._counter);
        this._counter = counter;
        this._entityState = entityState;
    }
    _startTimer() {
        this._updateCard();
        var counter = setInterval(() => this._updateCard(), 10000);
        return counter;
    }
    _updateCard() {
        const root = this.shadowRoot;
        const config = this._config;
        const hass = this._hass;
        let entityState;
        if (hass.states[config.entity] == undefined)
            entityState = 'undefined';
        else
            entityState = hass.states[config.entity].state;
        const convertTime = this._convertToText(entityState);
        let displayTime = convertTime.displayTime;
        if (displayTime == null) {
            displayTime = config.text.less_than + ' 1';
        }
        let displayText = convertTime.displayText;
        let moreThanText = "";
        if (displayText == ("year" || "years")) {
            moreThanText = "more than ";
        }
        let color;
        if (config.severity)
            color = this._computeSeverity(convertTime.seconds, config.severity);
        else
            color = config.color;
        let textContent;
        if (config.due == true) {
            if (this._overBy == false)
                textContent = `${config.text.due_in} ${moreThanText}${displayTime} ${displayText}`;
            else
                textContent = `${config.text.over_by} ${moreThanText}${displayTime} ${displayText}`;
        }
        else {
            textContent = `${moreThanText}${displayTime} ${displayText} ${this._config.text.ago}`;
        }
        if (config.title_position == 'inside')
            root.getElementById('buttonText').textContent = `${config.title} \r\n${textContent}`;
        else
            root.getElementById('buttonText').textContent = `${textContent}`;
        root.getElementById('button').style.setProperty('--background-color', color);
    }
    _computeSeverity(stateValue, sections) {
        const config = this._config;
        if (this._overBy == true)
            stateValue = stateValue * -1;
        let color = null;
        sections.forEach(section => {
            if (config.due == false) {
                if (stateValue >= section.seconds && color == null) {
                    color = section.color;
                }
            }
            else {
                if (stateValue <= section.seconds && color == null) {
                    color = section.color;
                }
            }
        });
        if (color == null)
            color = config.color;
        return color;
    }
    _convertToSeconds(time) {
        let output;
        const timeFix = time + '';
        let timeArray = timeFix.split(' ');
        if (timeArray.length <= 1) {
            output = time;
        }
        else {
            switch (timeArray[1]) {
                case 'year':
                case 'years':
                    output = timeArray[0] * 31556952;
                    break;
                case 'month':
                case 'months':
                    output = timeArray[0] * 2629746;
                    break;
                case 'week':
                case 'weeks':
                    output = timeArray[0] * 604800;
                    break;
                case 'day':
                case 'days':
                    output = timeArray[0] * 86400;
                    break;
                case 'hour':
                case 'hours':
                    output = timeArray[0] * 3600;
                    break;
                case 'minute':
                case 'minutes':
                    output = timeArray[0] * 60;
                    break;
            }
        }
        output = Number(output);
        return output;
    }
    _convertToText(entityState) {
        const config = this._config;
        const timeout = this._convertToSeconds(config.timeout);
        const dueTime = Number(entityState) + timeout;
        const remainingTime = dueTime - Math.trunc(Date.now() / 1000);
        const elapsedTime = Date.now() / 1000 - Number(entityState);
        let displayTime = null;
        let displayText;
        let seconds;
        if (config.due == true) {
            seconds = remainingTime;
        }
        else {
            seconds = elapsedTime;
        }
        let isSign = Math.sign(seconds);
        if (isSign == -1) {
            seconds = Math.abs(seconds);
            this._overBy = true;
        }
        else {
            this._overBy = false;
        }
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
        let weeks = seconds / 604800;
        let months = seconds / 2629746;
        let years = seconds / 31556952;
        const displayLimit = config.display_limit;
        if (minutes < 1 || displayLimit == 'minutes') {
            displayText = config.text.minute;
        }
        else if (hours < 1 || displayLimit == 'minutes') {
            if (config.due == true)
                displayTime = Math.round(minutes);
            else
                displayTime = Math.trunc(minutes);
            if (displayTime == 1)
                displayText = config.text.minute;
            else
                displayText = config.text.minutes;
        }
        else if (days < 1 || displayLimit == 'hours') {
            if (config.due == true)
                displayTime = Math.round(hours);
            else
                displayTime = Math.trunc(hours);
            if (displayTime == 1)
                displayText = config.text.hour;
            else
                displayText = config.text.hours;
        }
        else if (weeks < 1 || displayLimit == 'days') {
            if (config.due == true)
                displayTime = Math.round(days);
            else
                displayTime = Math.trunc(days);
            if (displayTime == 1)
                displayText = config.text.day;
            else
                displayText = config.text.days;
        }
        else if (months < 1 || displayLimit == 'weeks') {
            if (config.due == true)
                displayTime = Math.round(weeks);
            else
                displayTime = Math.trunc(weeks);
            if (displayTime == 1)
                displayText = config.text.week;
            else
                displayText = config.text.weeks;
        }
        else if (months < 19 || displayLimit == 'months') {
            if (config.due == true)
                displayTime = Math.round(months);
            else
                displayTime = Math.trunc(months);
            if (displayTime == 1)
                displayText = config.text.month;
            else
                displayText = config.text.months;
        }
        else if (years >= 1.5 || displayLimit == 'years') {
            if (config.due == true)
                displayTime = Math.trunc(years);
            else
                displayTime = Math.trunc(years);
            if (displayTime == 1)
                displayText = config.text.year;
            else
                displayText = config.text.years;
        }
        return {
            displayTime: displayTime,
            displayText: displayText,
            seconds: seconds
        };
    }
    _buildPayload(timestamp) {
        const config = this._config;
        let payload = {};
        payload.timestamp = timestamp;
        payload.timeout = config.timeout;
        if (config.timeout)
            payload.timeout_timestamp = this._convertToSeconds(config.timeout) + this._currentTimestamp;
        payload.severity = config.severity;
        payload.unit_of_measurement = 'timestamp';
        if (config.automation)
            payload.automation = config.automation;
        payload = JSON.stringify(payload);
        return payload;
    }
    _action() {
        const root = this.shadowRoot;
        root.getElementById('undo').style.removeProperty('visibility');
        root.getElementById('buttonBlocker').style.removeProperty('visibility');
        this._undoEntityState = this._entityState;
        this._currentTimestamp = Math.trunc(Date.now() / 1000);
        this._clearUndo = this._showUndo();
        let payload = this._buildPayload(this._currentTimestamp);
        this._publish(payload);
    }
    _showUndo() {
        const root = this.shadowRoot;
        const config = this._config;
        function clearUndo() {
            root.getElementById('undo').style.setProperty('visibility', 'hidden');
            root.getElementById('buttonBlocker').style.setProperty('visibility', 'hidden');
        }
        var clearUndoReturn = setTimeout(clearUndo, config.undo_timeout * 1000);
        return clearUndoReturn;
    }
    _undo() {
        const root = this.shadowRoot;
        root.getElementById('undo').style.setProperty('visibility', 'hidden');
        root.getElementById('buttonBlocker').style.setProperty('visibility', 'hidden');
        let payload = this._buildPayload(this._undoEntityState);
        this._publish(payload);
        clearTimeout(this._clearUndo);
    }
    _setInput() {
        const config = this._config;
        const root = this.shadowRoot;
        const minutes = root.getElementById('minutesInput').value;
        const hours = root.getElementById('hoursInput').value;
        const days = root.getElementById('daysInput').value;
        const totalTime = minutes * 60 + hours * 3600 + days * 86400;
        const timestamp = Math.trunc(Date.now() / 1000) - totalTime;
        root.getElementById('inputBar').style.setProperty('visibility', 'hidden');
        root.getElementById('minutesInput').value = '';
        root.getElementById('hoursInput').value = '';
        root.getElementById('daysInput').value = '';
        let payload = this._buildPayload(timestamp);
        this._publish(payload);
        root.getElementById('undo').style.removeProperty('visibility');
        root.getElementById('buttonBlocker').style.removeProperty('visibility');
        this._currentTimestamp = timestamp;
        this._undoEntityState = this._entityState;
        this._clearUndo = this._showUndo();
    }
    _hideInput() {
        const root = this.shadowRoot;
        root.getElementById('inputBar').style.setProperty('visibility', 'hidden');
    }
    _showConfigBar() {
        const root = this.shadowRoot;
        const config = this._config;
        root.getElementById('configBar').style.removeProperty('visibility');
        if (config.remove == true) {
            if (this._hass.states[config.entity] != undefined) {
                root.getElementById('configInput').textContent = 'Remove Entity?';
            }
            else {
                root.getElementById('submitConfigButton').style.setProperty('visibility', 'hidden');
                root.getElementById('configInput').textContent = 'Entity removed. Set remove to false.';
            }
            root.getElementById('configBar').style.setProperty('--background-color', '#FF0000');
        }
        if (this._hass.states[config.entity] != undefined) {
            if (this._hass.states[config.entity].attributes.unit_of_measurement != 'timestamp') {
                root.getElementById('submitConfigButton').style.setProperty('visibility', 'hidden');
                root.getElementById('configInput').textContent = 'Already exists. Incorrect entity type.';
                root.getElementById('configBar').style.setProperty('--background-color', '#FF0000');
            }
        }
    }
    _buttonHold(state) {
        const root = this.shadowRoot;
        function showConfig() {
            root.getElementById('inputBar').style.removeProperty('visibility');
            root.getElementById('buttonBlocker').style.removeProperty('visibility');
        }
        if (state == 'down') {
            this._showInputTimeout = setTimeout(showConfig, 1000);
        }
        else if (state == 'up') {
            root.getElementById('buttonBlocker').style.setProperty('visibility', 'hidden');
            clearTimeout(this._showInputTimeout);
        }
    }
    _showAttributes(type, detail, options) {
        const root = this.shadowRoot;
        options = options || {};
        detail = detail === null || detail === undefined ? {} : detail;
        const event = new Event(type, {
            bubbles: options.bubbles === undefined ? true : options.bubbles,
            cancelable: Boolean(options.cancelable),
            composed: options.composed === undefined ? true : options.composed
        });
        event.detail = detail;
        root.dispatchEvent(event);
        return event;
    }
    _publish(payload) {
        const config = this._config;
        const sensorNameArray = config.entity.split('.');
        const sensorName = sensorNameArray[1];
        this._hass.callService('mqtt', 'publish', { topic: config.discovery_prefix + '/sensor/' + sensorName + '/state', payload: payload, retain: true });
    }
    _setConfig() {
        const root = this.shadowRoot;
        const config = this._config;
        const sensorNameArray = config.entity.split('.');
        const sensorName = sensorNameArray[1];
        root.getElementById('configBar').style.setProperty('visibility', 'hidden');
        const discoveryConfig = '{"value_template": "{{ value_json.timestamp }}","json_attributes_topic":"' +
            config.discovery_prefix +
            '/sensor/' +
            sensorName +
            '/state","state_topic":"' +
            config.discovery_prefix +
            '/sensor/' +
            sensorName +
            '/state","name": "' +
            sensorName +
            '","unique_id": "' +
            sensorName +
            '_homeassistant"}';
        if (config.remove == true) {
            this._hass.callService('mqtt', 'publish', {
                topic: config.discovery_prefix + '/sensor/' + sensorName + '/state',
                payload: '',
                retain: true
            });
            this._hass.callService('mqtt', 'publish', {
                topic: config.discovery_prefix + '/sensor/' + sensorName + '/state/config',
                payload: '',
                retain: true
            });
        }
        else {
            this._hass.callService('mqtt', 'publish', {
                topic: config.discovery_prefix + '/sensor/' + sensorName + '/state/config',
                payload: discoveryConfig,
                retain: true
            });
            this._configSet = true;
            this._action();
        }
    }
    getCardSize() {
        return 1;
    }
}
customElements.define('check-button-card', CheckButtonCard);
