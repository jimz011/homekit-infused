// Notes
// Feedparser data loads each RSS feed data entry as an HA entity's attribute. The name of the attribute is the name of the author, like 'Oscar Wilde'.
// The quote's data is stored as a dictionary under key 'Oscar Wilde'. Access an entry by hass.states[config.entity].attributes[author name][column name]

class QuoteDayCard extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    setConfig(config) {
      if (!config.entity) {
        throw new Error('Please define an entity.');
      }

      if (!config.image) {
        config.image = `/local/bg.jpg`;
      }          

      const root = this.shadowRoot;
      if (root.lastChild) root.removeChild(root.lastChild);
  
      const cardConfig = Object.assign({}, config);
      if (!cardConfig.title) {
        cardConfig.title = `Quote of the Day`;
      } 


      const card = document.createElement('ha-card');
      const content = document.createElement('div');
      const style = document.createElement('style');

      style.textContent = `
            ha-card {
              /* sample css */
            }

            body {
              margin: 0;
              font-family: Arial, Helvetica, sans-serif;
            }

            .quotecontainer {
              position: relative;
              width: 100%;
            }
          
            .quotecenter {
              margin: auto;
              width: 90%;
              position: absolute;
              text-align: center;
              padding: 1px;

              line-height: 1;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;

            }
          
            .quotecontainer img { 
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: 100%;
              height: auto;
            }

            /*=== Trigger  ===*/
            .animate {
              -webkit-animation-duration: 20s;
              animation-duration: 10s;
              -webkit-animation-fill-mode: both;
              animation-fill-mode: both;
            }

            /*=== Optional Delays, change values here  ===*/
            .one {
              -webkit-animation-delay: 0.7s;
              -moz-animation-delay: 2.0s;
              animation-delay: 0.7s;
              }

            /*=== Animations start here  ===*/
            /*=== FADE IN  ===*/
            @-webkit-keyframes fadeIn {
              from {
                opacity: 0;
              }
 
              to {
                opacity: 1;
              }
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
 
              to {
                opacity: 1;
              }
            }
 
            .fadeIn {
              -webkit-animation-name: fadeIn;
              animation-name: fadeIn;
            }

            `;
             


      content.innerHTML = `
      <div id='content'>
      </div>
      `;
      
      if (cardConfig.title && !['Quote of the Day'].includes(cardConfig.title)) {
        card.header = cardConfig.title;
      }
      card.appendChild(content);
      card.appendChild(style);
      root.appendChild(card);
      this._config = cardConfig;
    }
  
 
    set hass(hass) {
      const config = this._config;
      const root = this.shadowRoot;
      const card = root.lastChild;
      this.myhass = hass;
      let card_content = ''
      let quote_content = ``


      card_content += `<div class="quotecontainer">
        <img src="${config.image}" style="width:100%">
        <div class="quotecenter animate fadeIn one">`;
       
      if (hass.states[config.entity]) {
        const quoteList = hass.states[config.entity].attributes;
        var quoteArray = [];
        
        // Build an array of keys while walking through quoteList dictionary.
        // The If statement filters out common HA entity attributes like 'friendly_name', 'icon,' and 'homebridge_hidden'. Assumes remaining attributes are the RSS feed entries      
        for (var quote in quoteList) {
            if (quoteList.hasOwnProperty(quote) && quote !== "friendly_name" && quote !== "icon" && quote !== "homebridge_hidden") {
                quoteArray.push(quote);
            }
        }
        

        // Selects random quote
        var quoteAuthor = quoteArray[quoteArray.length * Math.random() << 0];
        var quote = quoteList[quoteAuthor]

        if (!quoteList) {
          throw new Error("Feed is !feed");
          debugger;
        }  
        
        
        if (quoteList == undefined) {
          throw new Error("Feed is undefined");
          debugger;
        } 

        // If statement also checks for values in 'summary' and 'title'. 
        if (quote['summary'].length >= 60) { quote_content += `<h2>${quote['summary']}</h2>`; } 
        else if (quote['summary'].length >= 140) { quote_content += `<h3>${quote['summary']}</h3>`; }              
        else { quote_content += `<h1>${quote['summary']}</h1>`; }             
        quote_content += `<h3>${quote['title']}</h3>`;           

        card_content += quote_content
        card_content += `</div></div>` 

      };
      root.lastChild.hass = hass;
      root.getElementById('content').innerHTML = card_content;

      
    }
    getCardSize() {
      return 1;
    }
}
  
customElements.define('quote-day-card', QuoteDayCard);
