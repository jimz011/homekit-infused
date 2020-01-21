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
const t=new WeakMap,e=e=>"function"==typeof e&&t.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,r=null)=>{for(;e!==r;){const r=e.nextSibling;t.removeChild(e),e=r}},i={},s={},o=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${o}--\x3e`,h=new RegExp(`${o}|${a}`);class c{constructor(t,e){this.parts=[],this.element=e;const r=[],n=[],i=document.createTreeWalker(e.content,133,null,!1);let s=0,a=-1,c=0;const{strings:u,values:{length:f}}=t;for(;c<f;){const t=i.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:r}=e;let n=0;for(let t=0;t<r;t++)l(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=u[c],r=p.exec(e)[2],n=r.toLowerCase()+"$lit$",i=t.getAttribute(n);t.removeAttribute(n);const s=i.split(h);this.parts.push({type:"attribute",index:a,name:r,strings:s}),c+=s.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(o)>=0){const n=t.parentNode,i=e.split(h),s=i.length-1;for(let e=0;e<s;e++){let r,s=i[e];if(""===s)r=d();else{const t=p.exec(s);null!==t&&l(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),r=document.createTextNode(s)}n.insertBefore(r,t),this.parts.push({type:"node",index:++a})}""===i[s]?(n.insertBefore(d(),t),r.push(t)):t.data=i[s],c+=s}}else if(8===t.nodeType)if(t.data===o){const e=t.parentNode;null!==t.previousSibling&&a!==s||(a++,e.insertBefore(d(),t)),s=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(r.push(t),a--),c++}else{let e=-1;for(;-1!==(e=t.data.indexOf(o,e+1));)this.parts.push({type:"node",index:-1}),c++}}else i.currentNode=n.pop()}for(const t of r)t.parentNode.removeChild(t)}}const l=(t,e)=>{const r=t.length-e.length;return r>=0&&t.slice(r)===e},u=t=>-1!==t.index,d=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class f{constructor(t,e,r){this.__parts=[],this.template=t,this.processor=e,this.options=r}update(t){let e=0;for(const r of this.__parts)void 0!==r&&r.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let s,o=0,a=0,h=i.nextNode();for(;o<n.length;)if(s=n[o],u(s)){for(;a<s.index;)a++,"TEMPLATE"===h.nodeName&&(e.push(h),i.currentNode=h.content),null===(h=i.nextNode())&&(i.currentNode=e.pop(),h=i.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(h.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(h,s.name,s.strings,this.options));o++}else this.__parts.push(void 0),o++;return r&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const g=` ${o} `;class m{constructor(t,e,r,n){this.strings=t,this.values=e,this.type=r,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let n=0;n<t;n++){const t=this.strings[n],i=t.lastIndexOf("\x3c!--");r=(i>-1||r)&&-1===t.indexOf("--\x3e",i+1);const s=p.exec(t);e+=null===s?t+(r?g:a):t.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+o}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),y=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class v{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[];for(let t=0;t<r.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new w(this)}_getValue(){const t=this.strings,e=t.length-1;let r="";for(let n=0;n<e;n++){r+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(b(t)||!y(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===i||b(t)&&t===this.value||(this.value=t,e(t)||(this.committer.dirty=!0))}commit(){for(;e(this.value);){const t=this.value;this.value=i,t(this)}this.value!==i&&this.committer.commit()}}class _{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i,t(this)}const t=this.__pendingValue;t!==i&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof m?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):y(t)?this.__commitIterable(t):t===s?(this.value=s,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,r="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof f&&this.value.template===e)this.value.update(t.values);else{const r=new f(e,t.processor,this.options),n=r._clone();r.update(t.values),this.__commitNode(n),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let r,n=0;for(const i of t)r=e[n],void 0===r&&(r=new _(this.options),e.push(r),0===n?r.appendIntoPart(this):r.insertAfterPart(e[n-1])),r.setValue(i),r.commit(),n++;n<e.length&&(e.length=n,this.clear(r&&r.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class S{constructor(t,e,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i,t(this)}if(this.__pendingValue===i)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=i}}class x extends v{constructor(t,e,r){super(t,e,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends w{}let k=!1;try{const t={get capture(){return k=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class C{constructor(t,e,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;e(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=i,t(this)}if(this.__pendingValue===i)return;const t=this.__pendingValue,r=this.value,n=null==t||null!=r&&(t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive),s=null!=t&&(null==r||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=P(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=i}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const P=t=>t&&(k?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;const A=new class{handleAttributeExpressions(t,e,r,n){const i=e[0];if("."===i){return new x(t,e.slice(1),r).parts}return"@"===i?[new C(t,e.slice(1),n.eventContext)]:"?"===i?[new S(t,e.slice(1),r)]:new v(t,e,r).parts}handleTextExpression(t){return new _(t)}};
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
 */function N(t){let e=E.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},E.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const n=t.strings.join(o);return r=e.keyString.get(n),void 0===r&&(r=new c(t,t.getTemplateElement()),e.keyString.set(n,r)),e.stringsArray.set(t.strings,r),r}const E=new Map,T=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const F=(t,...e)=>new m(t,e,"html",A)
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
 */;function O(t,e){const{element:{content:r},parts:n}=t,i=document.createTreeWalker(r,133,null,!1);let s=D(n),o=n[s],a=-1,h=0;const c=[];let l=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(c.push(t),null===l&&(l=t)),null!==l&&h++;void 0!==o&&o.index===a;)o.index=null!==l?-1:o.index-h,s=D(n,s),o=n[s]}c.forEach(t=>t.parentNode.removeChild(t))}const H=t=>{let e=11===t.nodeType?0:1;const r=document.createTreeWalker(t,133,null,!1);for(;r.nextNode();)e++;return e},D=(t,e=-1)=>{for(let r=e+1;r<t.length;r++){const e=t[r];if(u(e))return r}return-1};
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
const R=(t,e)=>`${t}--${e}`;let $=!0;void 0===window.ShadyCSS?$=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),$=!1);const V=t=>e=>{const r=R(e.type,t);let n=E.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},E.set(r,n));let i=n.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(o);if(i=n.keyString.get(s),void 0===i){const r=e.getTemplateElement();$&&window.ShadyCSS.prepareTemplateDom(r,t),i=new c(e,r),n.keyString.set(s,i)}return n.stringsArray.set(e.strings,i),i},j=["html","svg"],Y=new Set,q=(t,e,r)=>{Y.add(t);const n=r?r.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:s}=i;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(n,t);const o=document.createElement("style");for(let t=0;t<s;t++){const e=i[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{j.forEach(e=>{const r=E.get(R(e,t));void 0!==r&&r.keyString.forEach(t=>{const{element:{content:e}}=t,r=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{r.add(t)}),O(t,r)})})})(t);const a=n.content;r?function(t,e,r=null){const{element:{content:n},parts:i}=t;if(null==r)return void n.appendChild(e);const s=document.createTreeWalker(n,133,null,!1);let o=D(i),a=0,h=-1;for(;s.nextNode();){for(h++,s.currentNode===r&&(a=H(e),r.parentNode.insertBefore(e,r));-1!==o&&i[o].index===h;){if(a>0){for(;-1!==o;)i[o].index+=a,o=D(i,o);return}o=D(i,o)}}}(r,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const h=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)e.insertBefore(h.cloneNode(!0),e.firstChild);else if(r){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),O(r,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const z={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},U=(t,e)=>e!==t&&(e==e||t==t),L={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:U},I=Promise.resolve(!0);class B extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=I,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const n=this._attributeNameForProperty(r,e);void 0!==n&&(this._attributeToPropertyMap.set(n,r),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=L){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[r]},set(e){const n=this[t];this[r]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,r=U){return r(t,e)}static _propertyValueFromAttribute(t,e){const r=e.type,n=e.converter||z,i="function"==typeof n?n:n.fromAttribute;return i?i(t,r):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const r=e.type,n=e.converter;return(n&&n.toAttribute||z.toAttribute)(t,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=L){const n=this.constructor,i=n._attributeNameForProperty(t,r);if(void 0!==i){const t=n._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const r=this.constructor,n=r._attributeToPropertyMap.get(t);if(void 0!==n){const t=r._classProperties.get(n)||L;this._updateState=16|this._updateState,this[n]=r._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let r=!0;if(void 0!==t){const n=this.constructor,i=n._classProperties.get(t)||L;n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const r=this._updatePromise;this._updatePromise=new Promise((r,n)=>{t=r,e=n});try{await r}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}B.finalized=!0;
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
const W="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class Z{constructor(t,e){if(e!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(W?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const G=(t,...e)=>{const r=e.reduce((e,r,n)=>e+(t=>{if(t instanceof Z)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+t[n+1],t[0]);return new Z(r,J)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const K=t=>t.flat?t.flat(1/0):function t(e,r=[]){for(let n=0,i=e.length;n<i;n++){const i=e[n];Array.isArray(i)?t(i,r):r.push(i)}return r}(t);class Q extends B{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){K(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?W?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof m&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}function X(t,e){(function(t){return"string"==typeof t&&t.includes(".")&&1===parseFloat(t)})(t)&&(t="100%");var r=function(t){return"string"==typeof t&&t.includes("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function tt(t){return Math.min(1,Math.max(0,t))}function et(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function rt(t){return t<=1?100*Number(t)+"%":t}function nt(t){return 1===t.length?"0"+t:String(t)}function it(t,e,r){t=X(t,255),e=X(e,255),r=X(r,255);var n=Math.max(t,e,r),i=Math.min(t,e,r),s=0,o=0,a=(n+i)/2;if(n===i)o=0,s=0;else{var h=n-i;switch(o=a>.5?h/(2-n-i):h/(n+i),n){case t:s=(e-r)/h+(e<r?6:0);break;case e:s=(r-t)/h+2;break;case r:s=(t-e)/h+4}s/=6}return{h:s,s:o,l:a}}function st(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*r*(e-t):r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function ot(t,e,r){t=X(t,255),e=X(e,255),r=X(r,255);var n=Math.max(t,e,r),i=Math.min(t,e,r),s=0,o=n,a=n-i,h=0===n?0:a/n;if(n===i)s=0;else{switch(n){case t:s=(e-r)/a+(e<r?6:0);break;case e:s=(r-t)/a+2;break;case r:s=(t-e)/a+4}s/=6}return{h:s,s:h,v:o}}function at(t,e,r,n){var i=[nt(Math.round(t).toString(16)),nt(Math.round(e).toString(16)),nt(Math.round(r).toString(16))];return n&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function ht(t){return Math.round(255*parseFloat(t)).toString(16)}function ct(t){return lt(t)/255}function lt(t){return parseInt(t,16)}Q.finalized=!0,Q.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const i=r.scopeName,s=T.has(e),o=$&&11===e.nodeType&&!!e.host,a=o&&!Y.has(i),h=a?document.createDocumentFragment():e;if(((t,e,r)=>{let i=T.get(e);void 0===i&&(n(e,e.firstChild),T.set(e,i=new _(Object.assign({templateFactory:N},r))),i.appendInto(e)),i.setValue(t),i.commit()})(t,h,Object.assign({templateFactory:V(i)},r)),a){const t=T.get(h);T.delete(h);const r=t.value instanceof f?t.value.template:void 0;q(i,h,r),n(e,e.firstChild),e.appendChild(h),T.set(e,t)}!s&&o&&window.ShadyCSS.styleElement(e.host)};var ut={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function dt(t){var e={r:0,g:0,b:0},r=1,n=null,i=null,s=null,o=!1,a=!1;return"string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;var e=!1;if(ut[t])t=ut[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};var r=mt.rgb.exec(t);if(r)return{r:r[1],g:r[2],b:r[3]};if(r=mt.rgba.exec(t))return{r:r[1],g:r[2],b:r[3],a:r[4]};if(r=mt.hsl.exec(t))return{h:r[1],s:r[2],l:r[3]};if(r=mt.hsla.exec(t))return{h:r[1],s:r[2],l:r[3],a:r[4]};if(r=mt.hsv.exec(t))return{h:r[1],s:r[2],v:r[3]};if(r=mt.hsva.exec(t))return{h:r[1],s:r[2],v:r[3],a:r[4]};if(r=mt.hex8.exec(t))return{r:lt(r[1]),g:lt(r[2]),b:lt(r[3]),a:ct(r[4]),format:e?"name":"hex8"};if(r=mt.hex6.exec(t))return{r:lt(r[1]),g:lt(r[2]),b:lt(r[3]),format:e?"name":"hex"};if(r=mt.hex4.exec(t))return{r:lt(r[1]+r[1]),g:lt(r[2]+r[2]),b:lt(r[3]+r[3]),a:ct(r[4]+r[4]),format:e?"name":"hex8"};if(r=mt.hex3.exec(t))return{r:lt(r[1]+r[1]),g:lt(r[2]+r[2]),b:lt(r[3]+r[3]),format:e?"name":"hex"};return!1}(t)),"object"==typeof t&&(bt(t.r)&&bt(t.g)&&bt(t.b)?(e=function(t,e,r){return{r:255*X(t,255),g:255*X(e,255),b:255*X(r,255)}}(t.r,t.g,t.b),o=!0,a="%"===String(t.r).substr(-1)?"prgb":"rgb"):bt(t.h)&&bt(t.s)&&bt(t.v)?(n=rt(t.s),i=rt(t.v),e=function(t,e,r){t=6*X(t,360),e=X(e,100),r=X(r,100);var n=Math.floor(t),i=t-n,s=r*(1-e),o=r*(1-i*e),a=r*(1-(1-i)*e),h=n%6;return{r:255*[r,o,s,s,a,r][h],g:255*[a,r,r,o,s,s][h],b:255*[s,s,a,r,r,o][h]}}(t.h,n,i),o=!0,a="hsv"):bt(t.h)&&bt(t.s)&&bt(t.l)&&(n=rt(t.s),s=rt(t.l),e=function(t,e,r){var n,i,s;if(t=X(t,360),e=X(e,100),r=X(r,100),0===e)i=r,s=r,n=r;else{var o=r<.5?r*(1+e):r+e-r*e,a=2*r-o;n=st(a,o,t+1/3),i=st(a,o,t),s=st(a,o,t-1/3)}return{r:255*n,g:255*i,b:255*s}}(t.h,n,s),o=!0,a="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(r=t.a)),r=et(r),{ok:o,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:r}}var pt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",ft="[\\s|\\(]+("+pt+")[,|\\s]+("+pt+")[,|\\s]+("+pt+")\\s*\\)?",gt="[\\s|\\(]+("+pt+")[,|\\s]+("+pt+")[,|\\s]+("+pt+")[,|\\s]+("+pt+")\\s*\\)?",mt={CSS_UNIT:new RegExp(pt),rgb:new RegExp("rgb"+ft),rgba:new RegExp("rgba"+gt),hsl:new RegExp("hsl"+ft),hsla:new RegExp("hsla"+gt),hsv:new RegExp("hsv"+ft),hsva:new RegExp("hsva"+gt),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function bt(t){return Boolean(mt.CSS_UNIT.exec(String(t)))}var yt=function(){function t(e,r){var n;if(void 0===e&&(e=""),void 0===r&&(r={}),e instanceof t)return e;this.originalInput=e;var i=dt(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=null!=(n=r.format)?n:i.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,r=t.g/255,n=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=et(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var t=ot(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=ot(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),n=Math.round(100*t.v);return 1===this.a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this.roundA+")"},t.prototype.toHsl=function(){var t=it(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=it(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),n=Math.round(100*t.l);return 1===this.a?"hsl("+e+", "+r+"%, "+n+"%)":"hsla("+e+", "+r+"%, "+n+"%, "+this.roundA+")"},t.prototype.toHex=function(t){return void 0===t&&(t=!1),at(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),function(t,e,r,n,i){var s=[nt(Math.round(t).toString(16)),nt(Math.round(e).toString(16)),nt(Math.round(r).toString(16)),nt(ht(n))];return i&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),r=Math.round(this.b);return 1===this.a?"rgb("+t+", "+e+", "+r+")":"rgba("+t+", "+e+", "+r+", "+this.roundA+")"},t.prototype.toPercentageRgb=function(){var t=function(t){return Math.round(100*X(t,255))+"%"};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*X(t,255))};return 1===this.a?"rgb("+t(this.r)+"%, "+t(this.g)+"%, "+t(this.b)+"%)":"rgba("+t(this.r)+"%, "+t(this.g)+"%, "+t(this.b)+"%, "+this.roundA+")"},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+at(this.r,this.g,this.b,!1),e=0,r=Object.keys(ut);e<r.length;e++){var n=r[e];if(ut[n]===t)return n}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!=t?t:this.format;var r=!1,n=this.a<1&&this.a>=0;return e||!n||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.l+=e/100,r.l=tt(r.l),new t(r)},t.prototype.brighten=function(e){void 0===e&&(e=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-e/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-e/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-e/100*255))),new t(r)},t.prototype.darken=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.l-=e/100,r.l=tt(r.l),new t(r)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.s-=e/100,r.s=tt(r.s),new t(r)},t.prototype.saturate=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.s+=e/100,r.s=tt(r.s),new t(r)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var r=this.toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,new t(r)},t.prototype.mix=function(e,r){void 0===r&&(r=50);var n=this.toRgb(),i=new t(e).toRgb(),s=r/100;return new t({r:(i.r-n.r)*s+n.r,g:(i.g-n.g)*s+n.g,b:(i.b-n.b)*s+n.b,a:(i.a-n.a)*s+n.a})},t.prototype.analogous=function(e,r){void 0===e&&(e=6),void 0===r&&(r=30);var n=this.toHsl(),i=360/r,s=[this];for(n.h=(n.h-(i*e>>1)+720)%360;--e;)n.h=(n.h+i)%360,s.push(new t(n));return s},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var r=this.toHsv(),n=r.h,i=r.s,s=r.v,o=[],a=1/e;e--;)o.push(new t({h:n,s:i,v:s})),s=(s+a)%1;return o},t.prototype.splitcomplement=function(){var e=this.toHsl(),r=e.h;return[this,new t({h:(r+72)%360,s:e.s,l:e.l}),new t({h:(r+216)%360,s:e.s,l:e.l})]},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var r=this.toHsl(),n=r.h,i=[this],s=360/e,o=1;o<e;o++)i.push(new t({h:(n+o*s)%360,s:r.s,l:r.l}));return i},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();function vt(t,e){return void 0===t&&(t=""),void 0===e&&(e={}),new yt(t,e)}function wt(t,e){const r=document.createElement("hui-error-card");return r.setConfig({type:"error",error:t,origConfig:e}),r}function _t(t,e){if(!e||"object"!=typeof e||!e.type)return wt(`No ${t} type configured`,e);let r=e.type;if(r=r.startsWith("custom:")?r.substr("custom:".length):`hui-${r}-${t}`,customElements.get(r))return function(t,e){const r=document.createElement(t);try{r.setConfig(e)}catch(t){return wt(t,e)}return r}(r,e);const n=wt(`Custom element doesn't exist: ${r}.`,e);n.style.display="None";const i=setTimeout(()=>{n.style.display=""},2e3);return customElements.whenDefined(r).then(()=>{clearTimeout(i),function(t,e,r=null){if((t=new Event(t,{bubbles:!0,cancelable:!1,composed:!0})).detail=e||{},r)r.dispatchEvent(t);else{var n=document.querySelector("home-assistant");(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n&&n.shadowRoot)&&n.querySelector("home-assistant-main"))&&n.shadowRoot)&&n.querySelector("app-drawer-layout partial-panel-resolver"))&&n.shadowRoot||n)&&n.querySelector("ha-panel-lovelace"))&&n.shadowRoot)&&n.querySelector("hui-root"))&&n.shadowRoot)&&n.querySelector("ha-app-layout #view"))&&n.firstElementChild)&&n.dispatchEvent(t)}}("ll-rebuild",{},n)}),n}const St=customElements.get("home-assistant-main")?Object.getPrototypeOf(customElements.get("home-assistant-main")):Object.getPrototypeOf(customElements.get("hui-view")),xt=St.prototype.html;St.prototype.css;class Mt extends St{static get version(){return 2}static get properties(){return{noHass:{type:Boolean}}}setConfig(t){var e;this._config=t,this.el?this.el.setConfig(t):(this.el=this.create(t),this._hass&&(this.el.hass=this._hass),this.noHass&&(e=this,document.querySelector("home-assistant").provideHass(e)))}set config(t){this.setConfig(t)}set hass(t){this._hass=t,this.el&&(this.el.hass=t)}createRenderRoot(){return this}render(){return xt`${this.el}`}}const kt=function(t,e){const r=Object.getOwnPropertyDescriptors(e.prototype);for(const[e,n]of Object.entries(r))"constructor"!==e&&Object.defineProperty(t.prototype,e,n);const n=Object.getOwnPropertyDescriptors(e);for(const[e,r]of Object.entries(n))"prototype"!==e&&Object.defineProperty(t,e,r);const i=Object.getPrototypeOf(e),s=Object.getOwnPropertyDescriptors(i.prototype);for(const[e,r]of Object.entries(s))"constructor"!==e&&Object.defineProperty(Object.getPrototypeOf(t).prototype,e,r);const o=Object.getOwnPropertyDescriptors(i);for(const[e,r]of Object.entries(o))"prototype"!==e&&Object.defineProperty(Object.getPrototypeOf(t),e,r)},Ct=customElements.get("card-maker");if(!Ct||!Ct.version||Ct.version<2){class t extends Mt{create(t){return function(t){return _t("card",t)}(t)}getCardSize(){return this.firstElementChild&&this.firstElementChild.getCardSize?this.firstElementChild.getCardSize():1}}Ct?kt(Ct,t):customElements.define("card-maker",t)}const Pt=customElements.get("element-maker");if(!Pt||!Pt.version||Pt.version<2){class t extends Mt{create(t){return function(t){return _t("element",t)}(t)}}Pt?kt(Pt,t):customElements.define("element-maker",t)}const At=customElements.get("entity-row-maker");if(!At||!At.version||At.version<2){class t extends Mt{create(t){return function(t){const e=new Set(["call-service","divider","section","weblink"]);if(!t)return wt("Invalid configuration given.",t);if("string"==typeof t&&(t={entity:t}),"object"!=typeof t||!t.entity&&!t.type)return wt("Invalid configuration given.",t);const r=t.type||"default";if(e.has(r)||r.startsWith("custom:"))return _t("row",t);const n=t.entity.split(".",1)[0];return Object.assign(t,{type:{alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"}[n]||"text"}),_t("entity-row",t)}(t)}}At?kt(At,t):customElements.define("entity-row-maker",t)}var Nt={},Et=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,Tt="[^\\s]+",Ft=/\[([^]*?)\]/gm,Ot=function(){};function Ht(t,e){for(var r=[],n=0,i=t.length;n<i;n++)r.push(t[n].substr(0,e));return r}function Dt(t){return function(e,r,n){var i=n[t].indexOf(r.charAt(0).toUpperCase()+r.substr(1).toLowerCase());~i&&(e.month=i)}}function Rt(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var $t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Vt=["January","February","March","April","May","June","July","August","September","October","November","December"],jt=Ht(Vt,3),Yt=Ht($t,3);Nt.i18n={dayNamesShort:Yt,dayNames:$t,monthNamesShort:jt,monthNames:Vt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var qt={D:function(t){return t.getDate()},DD:function(t){return Rt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return Rt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return Rt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return Rt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return Rt(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return Rt(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return Rt(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return Rt(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return Rt(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return Rt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return Rt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+Rt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},zt={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+Tt,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var r=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?r-1:r)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",Ot],ddd:[Tt,Ot],MMM:[Tt,Dt("monthNamesShort")],MMMM:[Tt,Dt("monthNames")],a:[Tt,function(t,e,r){var n=e.toLowerCase();n===r.amPm[0]?t.isPm=!1:n===r.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var r,n=(e+"").match(/([+-]|\d\d)/gi);n&&(r=60*n[1]+parseInt(n[2],10),t.timezoneOffset="+"===n[0]?r:-r)}]};zt.dd=zt.d,zt.dddd=zt.ddd,zt.DD=zt.D,zt.mm=zt.m,zt.hh=zt.H=zt.HH=zt.h,zt.MM=zt.M,zt.ss=zt.s,zt.A=zt.a,Nt.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},Nt.format=function(t,e,r){var n=r||Nt.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=Nt.masks[e]||e||Nt.masks.default;var i=[];return(e=(e=e.replace(Ft,(function(t,e){return i.push(e),"@@@"}))).replace(Et,(function(e){return e in qt?qt[e](t,n):e.slice(1,e.length-1)}))).replace(/@@@/g,(function(){return i.shift()}))},Nt.parse=function(t,e,r){var n=r||Nt.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=Nt.masks[e]||e,t.length>1e3)return null;var i={},s=[],o=[];e=e.replace(Ft,(function(t,e){return o.push(e),"@@@"}));var a,h=(a=e,a.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(Et,(function(t){if(zt[t]){var e=zt[t];return s.push(e[1]),"("+e[0]+")"}return t}));h=h.replace(/@@@/g,(function(){return o.shift()}));var c=t.match(new RegExp(h,"i"));if(!c)return null;for(var l=1;l<c.length;l++)s[l-1](i,c[l],n);var u,d=new Date;return!0===i.isPm&&null!=i.hour&&12!=+i.hour?i.hour=+i.hour+12:!1===i.isPm&&12==+i.hour&&(i.hour=0),null!=i.timezoneOffset?(i.minute=+(i.minute||0)-+i.timezoneOffset,u=new Date(Date.UTC(i.year||d.getFullYear(),i.month||0,i.day||1,i.hour||0,i.minute||0,i.second||0,i.millisecond||0))):u=new Date(i.year||d.getFullYear(),i.month||0,i.day||1,i.hour||0,i.minute||0,i.second||0,i.millisecond||0),u};var Ut=function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleDateString(e,{year:"numeric",month:"long",day:"numeric"})}:function(t){return Nt.format(t,"mediumDate")},Lt=function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleString(e,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}:function(t){return Nt.format(t,"haDateTime")},It=function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}return!1}()?function(t,e){return t.toLocaleTimeString(e,{hour:"numeric",minute:"2-digit"})}:function(t){return Nt.format(t,"shortTime")};function Bt(t,e,r){var n,i=function(t){return function(t){return t.substr(0,t.indexOf("."))}(t.entity_id)}(e);if("binary_sensor"===i)e.attributes.device_class&&(n=t("state."+i+"."+e.attributes.device_class+"."+e.state)),n||(n=t("state."+i+".default."+e.state));else if(e.attributes.unit_of_measurement&&!["unknown","unavailable"].includes(e.state))n=e.state+" "+e.attributes.unit_of_measurement;else if("input_datetime"===i){var s;if(e.attributes.has_time)if(e.attributes.has_date)s=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),n=Lt(s,r);else{var o=new Date;s=new Date(o.getFullYear(),o.getMonth(),o.getDay(),e.attributes.hour,e.attributes.minute),n=It(s,r)}else s=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),n=Ut(s,r)}else n="zwave"===i?["initializing","dead"].includes(e.state)?t("state.zwave.query_stage."+e.state,"query_stage",e.attributes.query_stage):t("state.zwave.default."+e.state):t("state."+i+"."+e.state);return n||(n=t("state.default."+e.state)||t("component."+i+".state."+e.state)||e.state),n}customElements.define("light-popup-card",class extends Q{constructor(){super()}static get properties(){return{hass:{},config:{},active:{}}}render(){var t=this.config.entity,e=this.hass.states[t],r=this.config.scenesInARow?this.config.scenesInARow:4;e.attributes.brightness&&e.attributes.brightness;var n=this.config.icon?this.config.icon:e.attributes.icon?e.attributes.icon:"mdi:lightbulb",i=this.config.scenes;if(i&&i.length>0)for(var s=[],o=Math.ceil(i.length/r),a=0;a<o;a++){s[a]=[];for(var h=0;h<r;h++)i[a*r+h]&&(s[a][h]=i[a*r+h])}var c=0;switch(e.state){case"on":c=1;break;case"off":c=0;break;default:c=0}var l=this.config.brightnessWidth?this.config.brightnessWidth:"150px",u=this.config.brightnessHeight?this.config.brightnessHeight:"400px",d=this.config.switchWidth?this.config.switchWidth:"380px",p=this.config.switchHeight?this.config.switchHeight:"150px",f=this._getColorForLightEntity(e,this.config.useTemperature,this.config.useBrightness);return F`
        <div class="popup-wrapper" @click="${t=>this._close(t)}">
            <div class="popup-inner">
                <div class="icon">
                    <ha-icon style="${"on"===e.state?"fill:"+f+";":""}" icon="${n}" />
                </div>
                ${e.attributes.supported_features>9?F`
                    <h4 class="${"off"===e.state?"":"brightness"}">${"off"===e.state?Bt(this.hass.localize,e,this.hass.language):Math.round(e.attributes.brightness/2.55)}</h4>
                    <div class="range-holder" style="--slider-height: ${u};--slider-width: ${l};">
                        <input type="range" style="--slider-width: ${l};--slider-height: ${u};" .value="${"off"===e.state?0:Math.round(e.attributes.brightness/2.55)}" @change=${t=>this._setBrightness(e,t.target.value)}>
                    </div>
                `:F`
                    <h4>${Bt(this.hass.localize,e,this.hass.language)}</h4>
                    <div class="switch-holder" style="--switch-height: ${p};--switch-width: ${d};">
                        <input type="range" style="--switch-width: ${d};--switch-height: ${p};" value="0" min="0" max="1" .value="${c}" @change=${()=>this._switch(e)}>
                    </div>
                `}

                ${i&&i.length>0?F`
                <div class="scene-holder">

                    ${s.map(t=>F`
                        <div class="scene-row">
                        ${t.map(t=>F`
                            <div class="scene" data-scene="${t.scene}">
                                <span class="color" style="background-color: ${t.color}"></span>
                                ${t.name?F`<span class="name">${t.name}</span>`:F``}
                            </div>
                        `)}
                        </div>
                    `)}
                </div>`:F``}
            </div>
        </div>
    `}updated(){this.shadowRoot.querySelectorAll(".scene").forEach(t=>{t.addEventListener("click",()=>{this._activateScene(t.dataset.scene)})})}_close(t){t&&"popup-inner"===t.target.className&&function(){const t=document.querySelector("home-assistant")&&document.querySelector("home-assistant")._moreInfoEl;t&&t.close()}()}_createRange(t){const e=[];for(let r=0;r<t;r++)e.push(r);return e}_setBrightness(t,e){this.hass.callService("homeassistant","turn_on",{entity_id:t.entity_id,brightness:2.55*e})}_switch(t){this.hass.callService("homeassistant","toggle",{entity_id:t.entity_id})}_activateScene(t){this.hass.callService("scene","turn_on",{entity_id:t})}_getColorForLightEntity(t,e,r){var n=this.config.default_color?this.config.default_color:void 0;return t&&(t.attributes.rgb_color?(n=`rgb(${t.attributes.rgb_color.join(",")})`,t.attributes.brightness&&(n=this._applyBrightnessToColor(n,(t.attributes.brightness+245)/5))):e&&t.attributes.color_temp&&t.attributes.min_mireds&&t.attributes.max_mireds?(n=this._getLightColorBasedOnTemperature(t.attributes.color_temp,t.attributes.min_mireds,t.attributes.max_mireds),t.attributes.brightness&&(n=this._applyBrightnessToColor(n,(t.attributes.brightness+245)/5))):n=r&&t.attributes.brightness?this._applyBrightnessToColor(this._getDefaultColorForState(),(t.attributes.brightness+245)/5):this._getDefaultColorForState()),n}_applyBrightnessToColor(t,e){const r=new yt(this._getColorFromVariable(t));if(r.isValid){const t=r.mix("black",100-e).toString();if(t)return t}return t}_getLightColorBasedOnTemperature(t,e,r){const n=new yt("rgb(255, 160, 0)"),i=new yt("rgb(166, 209, 255)"),s=new yt("white"),o=(t-e)/(r-e)*100;return o<50?vt(i).mix(s,2*o).toRgbString():vt(s).mix(n,2*(o-50)).toRgbString()}_getDefaultColorForState(){return this.config.color_on?this.config.color_on:"#f7d959"}_getColorFromVariable(t){return void 0!==t&&"var"===t.substring(0,3)?window.getComputedStyle(document.documentElement).getPropertyValue(t.substring(4).slice(0,-1)).trim():t}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");this.config=t}getCardSize(){return this.config.entities.length+1}static get styles(){return G`
        :host {
            background-color:#000!important;
        }
        .popup-inner {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        .icon {
            text-align: center;
            display: block;
            height: 40px;
            width: 40px;
            color: rgba(255,255,255,0.3);
            font-size: 30px;
            padding-top: 5px;
        }
        .icon ha-icon {
            width: 30px;
            height: 30px;
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
            font-size: 15px;
            margin-top: 0;
            text-transform: capitalize;
            font-family: Helvetica;
        }
        h4.brightness:after {
            content: "%";
            padding-left: 1px;
        }
        
        .range-holder {
            height: var(--slider-height);
            width: var(--slider-width);
            position: relative;
            display: block;
        }
        .range-holder input[type="range"] {
            outline: 0;
            border: 0;
            border-radius: 12px;
            width: var(--slider-height);
            margin: 0;
            transition: box-shadow 0.2s ease-in-out;
            -webkit-transform: rotate(270deg);
            -moz-transform: rotate(270deg);
            -o-transform: rotate(270deg);
            -ms-transform: rotate(270deg);
            transform: rotate(270deg);
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
            border-right: 10px solid #FFF;
            border-left: 10px solid #FFF;
            border-top: 20px solid #FFF;
            border-bottom: 20px solid #FFF;
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
            width: var(--switch-width);
            position: relative;
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
            padding: 0;
        }
        .scene-holder .scene {
            display: inline-block;
            margin-right: 10px;
            cursor: pointer;
        }
        .scene-holder .scene:nth-child(4n) {
            margin-right: 0;
        }
        .scene-holder .scene .color {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: block;
        }
        .scene-holder .scene .name {
            width: 50px;
            overflow: hidden;
            display: block;
            color: #FFF;
            font-size: 9px;
            margin-top: 3px;
        }
    `}});
