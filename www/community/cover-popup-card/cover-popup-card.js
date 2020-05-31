/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t=new WeakMap,e=e=>"function"==typeof e&&t.has(e),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},n={},r={},o=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${o}--\x3e`,c=new RegExp(`${o}|${a}`);class l{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let r=0,a=-1,l=0;const{strings:h,values:{length:m}}=t;for(;l<m;){const t=n.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)d(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=h[l],s=p.exec(e)[2],i=s.toLowerCase()+"$lit$",n=t.getAttribute(i);t.removeAttribute(i);const r=n.split(c);this.parts.push({type:"attribute",index:a,name:s,strings:r}),l+=r.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(o)>=0){const i=t.parentNode,n=e.split(c),r=n.length-1;for(let e=0;e<r;e++){let s,r=n[e];if(""===r)s=u();else{const t=p.exec(r);null!==t&&d(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(r)}i.insertBefore(s,t),this.parts.push({type:"node",index:++a})}""===n[r]?(i.insertBefore(u(),t),s.push(t)):t.data=n[r],l+=r}}else if(8===t.nodeType)if(t.data===o){const e=t.parentNode;null!==t.previousSibling&&a!==r||(a++,e.insertBefore(u(),t)),r=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(s.push(t),a--),l++}else{let e=-1;for(;-1!==(e=t.data.indexOf(o,e+1));)this.parts.push({type:"node",index:-1}),l++}}else n.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const d=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},h=t=>-1!==t.index,u=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class m{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,c=n.nextNode();for(;o<i.length;)if(r=i[o],h(r)){for(;a<r.index;)a++,"TEMPLATE"===c.nodeName&&(e.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=e.pop(),c=n.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const g=` ${o} `;class f{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===t.indexOf("--\x3e",n+1);const r=p.exec(t);e+=null===r?t+(s?g:a):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+o}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=t=>null===t||!("object"==typeof t||"function"==typeof t),_=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class v{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new w(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(y(t)||!_(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===n||y(t)&&t===this.value||(this.value=t,e(t)||(this.committer.dirty=!0))}commit(){for(;e(this.value);){const t=this.value;this.value=n,t(this)}this.value!==n&&this.committer.commit()}}class b{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(u()),this.endNode=t.appendChild(u())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=u()),t.__insert(this.endNode=u())}insertAfterPart(t){t.__insert(this.startNode=u()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=n,t(this)}const t=this.__pendingValue;t!==n&&(y(t)?t!==this.value&&this.__commitText(t):t instanceof f?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):_(t)?this.__commitIterable(t):t===r?(this.value=r,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof m&&this.value.template===e)this.value.update(t.values);else{const s=new m(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new b(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class S{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=n,t(this)}if(this.__pendingValue===n)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=n}}class x extends v{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends w{}let P=!1;try{const t={get capture(){return P=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class N{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=n,t(this)}if(this.__pendingValue===n)return;const t=this.__pendingValue,s=this.value,i=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),r=null!=t&&(null==s||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=E(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=n}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(P?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const M=new class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new x(t,e.slice(1),s).parts}return"@"===n?[new N(t,e.slice(1),i.eventContext)]:"?"===n?[new S(t,e.slice(1),s)]:new v(t,e,s).parts}handleTextExpression(t){return new b(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(t){let e=$.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(o);return s=e.keyString.get(i),void 0===s&&(s=new l(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const $=new Map,k=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const T=(t,...e)=>new f(t,e,"html",M)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function A(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,133,null,!1);let r=R(i),o=i[r],a=-1,c=0;const l=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-c,r=R(i,r),o=i[r]}l.forEach(t=>t.parentNode.removeChild(t))}const D=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},R=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(h(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const H=(t,e)=>`${t}--${e}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const Y=t=>e=>{const s=H(e.type,t);let i=$.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},$.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(o);if(n=i.keyString.get(r),void 0===n){const s=e.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(s,t),n=new l(e,s),i.keyString.set(r,n)}return i.stringsArray.set(e.strings,n),n},z=["html","svg"],j=new Set,q=(t,e,s)=>{j.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{z.forEach(e=>{const s=$.get(H(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),A(t,s)})})})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const r=document.createTreeWalker(i,133,null,!1);let o=R(n),a=0,c=-1;for(;r.nextNode();){for(c++,r.currentNode===s&&(a=D(e),s.parentNode.insertBefore(e,s));-1!==o&&n[o].index===c;){if(a>0){for(;-1!==o;)n[o].index+=a,o=R(n,o);return}o=R(n,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),A(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const F={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},U=(t,e)=>e!==t&&(e==e||t==t),I={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:U},L=Promise.resolve(!0);class B extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=L,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=I){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=U){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||F,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||F.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=I){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||I;this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,n=i._classProperties.get(t)||I;i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}B.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const W="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class Z{constructor(t,e){if(e!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(W?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const G=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof Z)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new Z(s,J)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const K=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let i=0,n=e.length;i<n;i++){const n=e[i];Array.isArray(n)?t(n,s):s.push(n)}return s}(t);class Q extends B{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){K(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?W?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof f&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}function X(t,e,s=null){if((t=new Event(t,{bubbles:!0,cancelable:!1,composed:!0})).detail=e||{},s)s.dispatchEvent(t);else{var i=function(){var t=document.querySelector("hc-main");return t=t?(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("hc-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-view"):(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=document.querySelector("home-assistant"))&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root"))&&t.shadowRoot)&&t.querySelector("ha-app-layout #view"))&&t.firstElementChild}();i&&i.dispatchEvent(t)}}Q.finalized=!0,Q.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,r=k.has(e),o=V&&11===e.nodeType&&!!e.host,a=o&&!j.has(n),c=a?document.createDocumentFragment():e;if(((t,e,s)=>{let n=k.get(e);void 0===n&&(i(e,e.firstChild),k.set(e,n=new b(Object.assign({templateFactory:O},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:Y(n)},s)),a){const t=k.get(c);k.delete(c);const s=t.value instanceof m?t.value.template:void 0;q(n,c,s),i(e,e.firstChild),e.appendChild(c),k.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};const tt=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),et=tt.prototype.html;tt.prototype.css;let st=window.cardHelpers;const it=new Promise(async(t,e)=>{st&&t(),window.loadCardHelpers&&(st=await window.loadCardHelpers(),window.cardHelpers=st,t())});function nt(t,e){const s=document.createElement("hui-error-card");return s.setConfig({type:"error",error:t,origConfig:e}),s}function rt(t,e){if(!e||"object"!=typeof e||!e.type)return nt(`No ${t} type configured`,e);let s=e.type;if(s=s.startsWith("custom:")?s.substr("custom:".length):`hui-${s}-${t}`,customElements.get(s))return function(t,e){let s=document.createElement(t);try{s.setConfig(JSON.parse(JSON.stringify(e)))}catch(t){s=nt(t,e)}return it.then(()=>{X("ll-rebuild",{},s)}),s}(s,e);const i=nt(`Custom element doesn't exist: ${s}.`,e);i.style.display="None";const n=setTimeout(()=>{i.style.display=""},2e3);return customElements.whenDefined(s).then(()=>{clearTimeout(n),X("ll-rebuild",{},i)}),i}class ot extends tt{static get version(){return 2}static get properties(){return{noHass:{type:Boolean}}}setConfig(t){var e;this._config=t,this.el?this.el.setConfig(t):(this.el=this.create(t),this._hass&&(this.el.hass=this._hass),this.noHass&&(e=this,document.querySelector("hc-main")?document.querySelector("hc-main").provideHass(e):document.querySelector("home-assistant")&&document.querySelector("home-assistant").provideHass(e)))}set config(t){this.setConfig(t)}set hass(t){this._hass=t,this.el&&(this.el.hass=t)}createRenderRoot(){return this}render(){return et`${this.el}`}}const at=function(t,e){const s=Object.getOwnPropertyDescriptors(e.prototype);for(const[e,i]of Object.entries(s))"constructor"!==e&&Object.defineProperty(t.prototype,e,i);const i=Object.getOwnPropertyDescriptors(e);for(const[e,s]of Object.entries(i))"prototype"!==e&&Object.defineProperty(t,e,s);const n=Object.getPrototypeOf(e),r=Object.getOwnPropertyDescriptors(n.prototype);for(const[e,s]of Object.entries(r))"constructor"!==e&&Object.defineProperty(Object.getPrototypeOf(t).prototype,e,s);const o=Object.getOwnPropertyDescriptors(n);for(const[e,s]of Object.entries(o))"prototype"!==e&&Object.defineProperty(Object.getPrototypeOf(t),e,s)},ct=customElements.get("card-maker");if(!ct||!ct.version||ct.version<2){class t extends ot{create(t){return function(t){return st?st.createCardElement(t):rt("card",t)}(t)}getCardSize(){return this.firstElementChild&&this.firstElementChild.getCardSize?this.firstElementChild.getCardSize():1}}ct?at(ct,t):customElements.define("card-maker",t)}const lt=customElements.get("element-maker");if(!lt||!lt.version||lt.version<2){class t extends ot{create(t){return function(t){return st?st.createHuiElement(t):rt("element",t)}(t)}}lt?at(lt,t):customElements.define("element-maker",t)}const dt=customElements.get("entity-row-maker");if(!dt||!dt.version||dt.version<2){class t extends ot{create(t){return function(t){if(st)return st.createRowElement(t);const e=new Set(["call-service","cast","conditional","divider","section","select","weblink"]);if(!t)return nt("Invalid configuration given.",t);if("string"==typeof t&&(t={entity:t}),"object"!=typeof t||!t.entity&&!t.type)return nt("Invalid configuration given.",t);const s=t.type||"default";return e.has(s)||s.startsWith("custom:")?rt("row",t):rt("entity-row",{type:{alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"}[t.entity.split(".",1)[0]]||"text",...t})}(t)}}dt?at(dt,t):customElements.define("entity-row-maker",t)}var ht={},ut=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,pt="[^\\s]+",mt=/\[([^]*?)\]/gm,gt=function(){};function ft(t,e){for(var s=[],i=0,n=t.length;i<n;i++)s.push(t[i].substr(0,e));return s}function yt(t){return function(e,s,i){var n=i[t].indexOf(s.charAt(0).toUpperCase()+s.substr(1).toLowerCase());~n&&(e.month=n)}}function _t(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var vt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],wt=["January","February","March","April","May","June","July","August","September","October","November","December"],bt=ft(wt,3),St=ft(vt,3);ht.i18n={dayNamesShort:St,dayNames:vt,monthNamesShort:bt,monthNames:wt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var xt={D:function(t){return t.getDate()},DD:function(t){return _t(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return _t(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return _t(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return _t(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return _t(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return _t(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return _t(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return _t(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return _t(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return _t(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return _t(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+_t(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},Ct={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+pt,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var s=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?s-1:s)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",gt],ddd:[pt,gt],MMM:[pt,yt("monthNamesShort")],MMMM:[pt,yt("monthNames")],a:[pt,function(t,e,s){var i=e.toLowerCase();i===s.amPm[0]?t.isPm=!1:i===s.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var s,i=(e+"").match(/([+-]|\d\d)/gi);i&&(s=60*i[1]+parseInt(i[2],10),t.timezoneOffset="+"===i[0]?s:-s)}]};Ct.dd=Ct.d,Ct.dddd=Ct.ddd,Ct.DD=Ct.D,Ct.mm=Ct.m,Ct.hh=Ct.H=Ct.HH=Ct.h,Ct.MM=Ct.M,Ct.ss=Ct.s,Ct.A=Ct.a,ht.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},ht.format=function(t,e,s){var i=s||ht.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=ht.masks[e]||e||ht.masks.default;var n=[];return(e=(e=e.replace(mt,(function(t,e){return n.push(e),"@@@"}))).replace(ut,(function(e){return e in xt?xt[e](t,i):e.slice(1,e.length-1)}))).replace(/@@@/g,(function(){return n.shift()}))},ht.parse=function(t,e,s){var i=s||ht.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=ht.masks[e]||e,t.length>1e3)return null;var n={},r=[],o=[];e=e.replace(mt,(function(t,e){return o.push(e),"@@@"}));var a,c=(a=e,a.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(ut,(function(t){if(Ct[t]){var e=Ct[t];return r.push(e[1]),"("+e[0]+")"}return t}));c=c.replace(/@@@/g,(function(){return o.shift()}));var l=t.match(new RegExp(c,"i"));if(!l)return null;for(var d=1;d<l.length;d++)r[d-1](n,l[d],i);var h,u=new Date;return!0===n.isPm&&null!=n.hour&&12!=+n.hour?n.hour=+n.hour+12:!1===n.isPm&&12==+n.hour&&(n.hour=0),null!=n.timezoneOffset?(n.minute=+(n.minute||0)-+n.timezoneOffset,h=new Date(Date.UTC(n.year||u.getFullYear(),n.month||0,n.day||1,n.hour||0,n.minute||0,n.second||0,n.millisecond||0))):h=new Date(n.year||u.getFullYear(),n.month||0,n.day||1,n.hour||0,n.minute||0,n.second||0,n.millisecond||0),h};var Pt=function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"})}:function(t){return ht.format(t,"mediumDate")},Nt=function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleString(e,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}:function(t){return ht.format(t,"haDateTime")},Et=function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleTimeString(e,{hour:"numeric",minute:"2-digit"})}:function(t){return ht.format(t,"shortTime")};customElements.define("cover-popup-card",class extends Q{constructor(){super(),this.actionRows=[],this.settings=!1,this.settingsCustomCard=!1,this.settingsPosition="bottom"}static get properties(){return{hass:{},config:{},active:{}}}render(){var t=this.config.entity,e=this.hass.states[t],s=this.config.actionsInARow?this.config.actionsInARow:4,i=this.config.icon?this.config.icon:e.attributes.icon?e.attributes.icon:"mdi:window-shutter",n=this.config.borderRadius?this.config.borderRadius:"12px",r="actionSize"in this.config?this.config.actionSize:"50px",o=this.config.actions;if(o&&o.length>0)for(var a=Math.ceil(o.length/s),c=0;c<a;c++){this.actionRows[c]=[];for(var l=0;l<s;l++)o[c*s+l]&&(this.actionRows[c][l]=o[c*s+l])}var d=!("fullscreen"in this.config)||this.config.fullscreen,h=this.config.sliderWidth?this.config.sliderWidth:"150px",u=this.config.sliderHeight?this.config.sliderHeight:"400px",p=0;this.settings="settings"in this.config,this.settingsCustomCard="settingsCard"in this.config,this.settingsPosition="settingsPosition"in this.config?this.config.settingsPosition:"bottom";var m="sliderColor"in this.config?this.config.sliderColor:"#FFF",g="sliderThumbColor"in this.config?this.config.sliderThumbColor:"#ddd",f="sliderTrackColor"in this.config?this.config.sliderTrackColor:"#ddd";if(this.settingsCustomCard&&this.config.settingsCard.cardOptions)if(this.config.settingsCard.cardOptions.entity&&"this"==this.config.settingsCard.cardOptions.entity)this.config.settingsCard.cardOptions.entity=t;else if(this.config.settingsCard.cardOptions.entity_id&&"this"==this.config.settingsCard.cardOptions.entity_id)this.config.settingsCard.cardOptions.entity_id=t;else if(this.config.settingsCard.cardOptions.entities)for(let e in this.config.settingsCard.cardOptions.entities)"this"==this.config.settingsCard.cardOptions.entities[e]&&(this.config.settingsCard.cardOptions.entities[e]=t);return T`
      <div class="${!0===d?"popup-wrapper":""}">
        <div id="popup" class="popup-inner" @click="${t=>this._close(t)}">
          <div class="icon${!0===d?" fullscreen":""}${["off","unavailable","paused"].includes(e.state)?"":" on"}">
              <ha-icon icon="${i}" />
          </div>
          <h4>${"off"===e.state?function(t,e,s){var i,n=function(t){return function(t){return t.substr(0,t.indexOf("."))}(t.entity_id)}(e);if("binary_sensor"===n)e.attributes.device_class&&(i=t("state."+n+"."+e.attributes.device_class+"."+e.state)),i||(i=t("state."+n+".default."+e.state));else if(e.attributes.unit_of_measurement&&!["unknown","unavailable"].includes(e.state))i=e.state+" "+e.attributes.unit_of_measurement;else if("input_datetime"===n){var r;if(e.attributes.has_time)if(e.attributes.has_date)r=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),i=Nt(r,s);else{var o=new Date;r=new Date(o.getFullYear(),o.getMonth(),o.getDay(),e.attributes.hour,e.attributes.minute),i=Et(r,s)}else r=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),i=Pt(r,s)}else i="zwave"===n?["initializing","dead"].includes(e.state)?t("state.zwave.query_stage."+e.state,"query_stage",e.attributes.query_stage):t("state.zwave.default."+e.state):t("state."+n+"."+e.state);return i||(i=t("state.default."+e.state)||t("component."+n+".state."+e.state)||e.state),i}(this.hass.localize,e,this.hass.language):Math.round(e.attributes.current_position)}</h4>
          <div class="range-holder" style="--slider-height: ${u};--slider-width: ${h};">
              <input type="range" style="--slider-width: ${h};--slider-height: ${u}; --slider-border-radius: ${n};--slider-color:${m};--slider-thumb-color:${g};--slider-track-color:${f};" .value="${"off"===e.state?0:Math.round(e.attributes.current_position)}" @change=${t=>this._setPosition(e,t.target.value)}>
          </div>

          ${o&&o.length>0?T`
          <div class="action-holder">

              ${this.actionRows.map(t=>{p++;var e=0;return T`
                  <div class="action-row">
                  ${t.map(t=>(e++,T`
                      <div class="action" style="--size:${r};" @click="${t=>this._activateAction(t)}" data-service="${p}#${e}">
                          <span class="color" style="background-color: ${t.color};border-color: ${t.color};--size:${r};">${t.icon?T`<ha-icon icon="${t.icon}" />`:T``}</span>
                          ${t.name?T`<span class="name">${t.name}</span>`:T``}
                      </div>
                    `))}
                  </div>
                `})}
          </div>`:T``}
          ${this.settings?T`<button class="settings-btn ${this.settingsPosition}${!0===d?" fullscreen":""}" @click="${()=>this._openSettings()}">${this.config.settings.openButton?this.config.settings.openButton:"Settings"}</button>`:T``}
        </div>
        ${this.settings?T`
            <div id="settings" class="settings-inner" @click="${t=>this._close(t)}">
              ${this.settingsCustomCard?T`
                <card-maker nohass data-card="${this.config.settingsCard.type}" data-options="${JSON.stringify(this.config.settingsCard.cardOptions)}" data-style="${this.config.settingsCard.cardStyle?this.config.settingsCard.cardStyle:""}">
                </card-maker>
              `:T`
                  <more-info-controls
                  .dialogElement=${null}
                  .canConfigure=${!1}
                  .hass=${this.hass}
                  .stateObj=${e}
                  style="--paper-slider-knob-color: white !important;
                  --paper-slider-knob-start-color: white !important;
                  --paper-slider-pin-color: white !important;
                  --paper-slider-active-color: white !important;
                  color: white !important;
                  --primary-text-color: white !important;"
                ></more-info-controls>
              `}
              <button class="settings-btn ${this.settingsPosition}${!0===d?" fullscreen":""}" @click="${()=>this._closeSettings()}">${this.config.settings.closeButton?this.config.settings.closeButton:"Close"}</button>
            </div>
          `:T``}
      </div>
    `}firstUpdated(){if(this.settings&&!this.settingsCustomCard){const t=this.shadowRoot.querySelector("more-info-controls").shadowRoot;t.removeChild(t.querySelector("app-toolbar"))}else this.settings&&this.settingsCustomCard&&this.shadowRoot.querySelectorAll("card-maker").forEach(t=>{var e={type:t.dataset.card};e=Object.assign({},e,JSON.parse(t.dataset.options)),t.config=e;let s="";if(t.dataset.style&&(s=t.dataset.style),""!=s){let e=0,i=setInterval((function(){let n=t.children[0];if(n){window.clearInterval(i);var r=document.createElement("style");r.innerHTML=s,n.shadowRoot.appendChild(r)}else 10==++e&&window.clearInterval(i)}),100)}})}updated(){}_openSettings(){this.shadowRoot.getElementById("popup").classList.add("off"),this.shadowRoot.getElementById("settings").classList.add("on")}_closeSettings(){this.shadowRoot.getElementById("settings").classList.remove("on"),this.shadowRoot.getElementById("popup").classList.remove("off")}_close(t){t&&(t.target.className.includes("popup-inner")||t.target.className.includes("settings-inner"))&&function(){const t=document.querySelector("hc-main")||document.querySelector("home-assistant"),e=t&&t._moreInfoEl;e&&e.close()}()}_createRange(t){const e=[];for(let s=0;s<t;s++)e.push(s);return e}_setPosition(t,e){const[s,i]=this.config.sliderService.split(".",2);"set_cover_position"==i?this.hass.callService(s,i,{entity_id:t.entity_id,position:e}):this.hass.callService(s,i,{entity_id:t.entity_id,tilt_position:e})}_activateAction(t){if(t.target.dataset&&t.target.dataset.service){const[e,s]=t.target.dataset.service.split("#",2),i=this.actionRows[e-1][s-1],[n,r]=i.service.split(".",2);i.service_data.entity_id&&"this"==i.service_data.entity_id&&(i.service_data.entity_id=this.config.entity),this.hass.callService(n,r,i.service_data)}}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");if(!t.sliderService)throw new Error("You need to define an sliderService");if(t.sliderService&&"cover.set_cover_position"!=t.sliderService&&"cover.set_cover_tilt_position"!=t.sliderService)throw new Error("sliderService should be equal to cover.set_cover_position or cover.set_cover_tilt_position");this.config=t}getCardSize(){return 1}static get styles(){return G`
        :host {
            background-color:#000!important;
        }
        .popup-wrapper {
            margin-top:64px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
        .popup-inner {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        .popup-inner.off {
          display:none;
        }
        #settings {
          display:none;
        }
        .settings-inner {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        #settings.on {
          display:flex;
        }
        .settings-btn {
          position:absolute;
          right:30px;
          background-color: #7f8082;
          color: #FFF;
          border: 0;
          padding: 5px 20px;
          border-radius: 10px;
          font-weight: 500;
          cursor: pointer;
        }
        .settings-btn.bottom {
          bottom:15px;
        }
        .settings-btn.bottom.fullscreen {
          margin:0;
        }
        .settings-btn.top {
          top: 25px;
        }
        .fullscreen {
          margin-top:-64px;
        }
        .icon {
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
            font-size:20px;
            margin-top:0;
            text-transform: capitalize;
        }
        
        .range-holder {
            height: var(--slider-height);
            width: var(--slider-width);
            position:relative;
            display: block;
        }
        .range-holder input[type="range"] {
            outline: 0;
            border: 0;
            border-radius: var(--slider-border-radius, 12px);
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
            background-color: var(--slider-track-color);
            position: absolute;
            top: calc(50% - (var(--slider-width) / 2));
            right: calc(50% - (var(--slider-height) / 2));
        }
        .range-holder input[type="range"]::-webkit-slider-runnable-track {
            height: var(--slider-width);
            -webkit-appearance: none;
            background-color: var(--slider-track-color);
            margin-top: -1px;
            transition: box-shadow 0.2s ease-in-out;
        }
        .range-holder input[type="range"]::-webkit-slider-thumb {
            width: 25px;
            border-right:10px solid var(--slider-color);
            border-left:10px solid var(--slider-color);
            border-top:20px solid var(--slider-color);
            border-bottom:20px solid var(--slider-color);
            -webkit-appearance: none;
            height: 80px;
            cursor: ew-resize;
            background: #fff;
            box-shadow: -350px 0 0 350px var(--slider-color), inset 0 0 0 80px var(--slider-thumb-color);
            border-radius: 0;
            transition: box-shadow 0.2s ease-in-out;
            position: relative;
            top: calc((var(--slider-width) - 80px) / 2);
        }
        
        .action-holder {
            display: flex;
            flex-direction: column;
            margin-top:20px;
        }
        .action-row {
            display:block;
            padding-bottom:10px;
        }
        .action-row:last-child {
            padding:0;
        }
        .action-holder .action {
            display:inline-block;
            margin-right:10px;
            margin-left:10px;
            cursor:pointer;
        }
        .action-holder .action:nth-child(4n) {
            margin-right:0;
        }
        .action-holder .action .color {
            width:var(--size);
            height:var(--size);
            border-radius:50%;
            display:block;
            border: 1px solid #FFF;
            line-height: var(--size);
            text-align: center;
            pointer-events: none;
        }
        .action-holder .action .color ha-icon {
          pointer-events: none;
        }
        .action-holder .action .name {
            width:var(--size);
            display:block;
            color: #FFF;
            font-size: 9px;
            margin-top:3px;
            text-align:center;
            pointer-events: none;
        }
    `}});
