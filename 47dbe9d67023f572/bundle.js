!function(){var e=function(e){var t;return function(n){return t||e(t={exports:{},parent:n},t.exports),t.exports}},t=e(function(e,t){"use strict";var n=Me({title:"404 route not found"});e.exports=n(function(e){return function(){var e=r({}),t=document.createElement("main");t.setAttribute("id","404");var n=document.createElement("header"),o=document.createElement("h1");e(o,[arguments[0],arguments[1]]);var i=document.createElement("h2");e(i,[arguments[2]]),e(n,["\n        ",o,"\n        ",i,"\n      "]);var a=document.createElement("a");return a.setAttribute("href","/"),a.setAttribute("class","pt2"),e(a,["Back to main."]),e(t,["\n      ",n,"\n      ",a,"\n    "]),t}(e.title,e.location,this.title)})}),n=e(function(e,t){"use strict";var n=Me({title:"main",clicks:0,handleClick:function(){this.clicks++,console.log(this.clicks)}});e.exports=n(function(e){return function(){var e=r({}),t=document.createElement("main");t.setAttribute("id","main"),t.setAttribute("class",arguments[1]);var n=document.createElement("div"),o=document.createElement("img");o.onclick=arguments[0],o.setAttribute("src","/assets/logo.svg"),o.setAttribute("alt","digital bonfire");var i=document.createElement("a");return i.setAttribute("href","mailto:hello@starter.org"),i.setAttribute("class","f1"),e(i,["hello@starter.org"]),e(n,["\n        ",o,"\n        ",i,"\n      "]),e(t,["\n      ",n,"\n    "]),t}(this.handleClick,o)});var o="_52c4f50a"}),r=e(function(e,t){var n=/\n[\s]+$/,r=/^\n[\s]+/,o=/[\s]+$/,i=/^[\s]+/,a=/[\n\s]+/g,u=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],l=["code","pre","textarea"];e.exports=function e(t,s){if(Array.isArray(s))for(var c,f,d=t.nodeName.toLowerCase(),p=!1,h=0,v=s.length;h<v;h++){var y=s[h];if(Array.isArray(y))e(t,y);else{("number"==typeof y||"boolean"==typeof y||"function"==typeof y||y instanceof Date||y instanceof RegExp)&&(y=y.toString());var g=t.childNodes[t.childNodes.length-1];if("string"==typeof y)p=!0,g&&"#text"===g.nodeName?g.nodeValue+=y:(y=document.createTextNode(y),t.appendChild(y),g=y),h===v-1&&(p=!1,-1===u.indexOf(d)&&-1===l.indexOf(d)?""===(c=g.nodeValue.replace(r,"").replace(o,"").replace(n,"").replace(a," "))?t.removeChild(g):g.nodeValue=c:-1===l.indexOf(d)&&(f=0===h?"":" ",c=g.nodeValue.replace(r,f).replace(i," ").replace(o,"").replace(n,"").replace(a," "),g.nodeValue=c));else if(y&&y.nodeType){p&&(p=!1,-1===u.indexOf(d)&&-1===l.indexOf(d)?""===(c=g.nodeValue.replace(r,"").replace(n,"").replace(a," "))?t.removeChild(g):g.nodeValue=c:-1===l.indexOf(d)&&(c=g.nodeValue.replace(i," ").replace(r,"").replace(n,"").replace(a," "),g.nodeValue=c));var m=y.nodeName;m&&(d=m.toLowerCase()),t.appendChild(y)}}}}}),o={},i={};(function(e){var t,n=void 0!==e?e:"undefined"!=typeof window?window:{};"undefined"!=typeof document?t=document:(t=n["__GLOBAL_DOCUMENT_CACHE@4"])||(t=n["__GLOBAL_DOCUMENT_CACHE@4"]=o),i=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var a={};(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},a=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var u={},l=Object.create(null),s="onloadid"+(new Date%9e6).toString(36),c="data-"+s,f=0;function d(e,t){l[e][0]&&0===l[e][2]&&(l[e][0](t),l[e][2]=1)}function p(e,t){l[e][1]&&1===l[e][2]&&(l[e][1](t),l[e][2]=0)}function h(e,t){for(var n=Object.keys(l),r=0;r<e.length;r++){if(e[r]&&e[r].getAttribute&&e[r].getAttribute(c)){var o=e[r].getAttribute(c);n.forEach(function(n){o===n&&t(n,e[r])})}e[r]&&e[r].childNodes.length>0&&h(e[r].childNodes,t)}}a&&a.MutationObserver&&new MutationObserver(function(e){if(!(Object.keys(l).length<1))for(var t=0;t<e.length;t++)e[t].attributeName!==c?(h(e[t].removedNodes,function(e,t){i.documentElement.contains(t)||p(e,t)}),h(e[t].addedNodes,function(e,t){i.documentElement.contains(t)&&d(e,t)})):(n=e[t],r=d,o=p,a=void 0,a=n.target.getAttribute(c),function(e,t){return!(!e||!t)&&l[e][3]===l[t][3]}(n.oldValue,a)?l[a]=l[n.oldValue]:(l[n.oldValue]&&o(n.oldValue,n.target),l[a]&&r(a,n.target)));var n,r,o,a}).observe(i.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[c]}),(u=function e(t,n,r,o){return n=n||function(){},r=r||function(){},t.setAttribute(c,"o"+f),l["o"+f]=[n,r,0,o||e.caller],f+=1,t}).KEY_ATTR=c,u.KEY_ID=s;var v=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","onmouseenter","onmouseleave","ontouchcancel","ontouchend","ontouchmove","ontouchstart","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"],y=v.length;function g(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var m=function(e,t){var n=e.nodeType,r=e.nodeName;1===n&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,u=null,l=r.length-1;l>=0;--l)a=(u=r[l]).name,o=u.namespaceURI,i=u.value,o?(a=u.localName||a,t.getAttributeNS(o,a)!==i&&t.setAttributeNS(o,a,i)):t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var s=n.length-1;s>=0;--s)!1!==(u=n[s]).specified&&(a=u.name,(o=u.namespaceURI)?(a=u.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),3!==n&&8!==n||t.nodeValue!==e.nodeValue&&(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;g(e,t,"checked"),g(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n),"null"===n&&(t.value="",t.removeAttribute("value")),e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?function(e,t){g(e,t,"selected")}(e,t):"TEXTAREA"===r&&function(e,t){var n=e.value;if(n!==t.value&&(t.value=n),t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t),function(e,t){for(var n=0;n<y;n++){var r=v[n];e[r]?t[r]=e[r]:t[r]&&(t[r]=void 0)}}(e,t)};"function"==typeof Symbol&&Symbol.iterator;var b=3;function w(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&e.type===b&&e.nodeValue===t.nodeValue}var A=function(e,t){return function e(t,n){return n?t?t.isSameNode&&t.isSameNode(n)?n:t.tagName!==n.tagName?t:(m(t,n),function(t,n){for(var r,o,i,a,u=0,l=0;r=n.childNodes[l],o=t.childNodes[l-u],r||o;l++)if(o)if(r)if(w(o,r))(i=e(o,r))!==r&&(n.replaceChild(i,r),u++);else{a=null;for(var s=l;s<n.childNodes.length;s++)if(w(n.childNodes[s],o)){a=n.childNodes[s];break}a?((i=e(o,a))!==a&&u++,n.insertBefore(i,r)):o.id||r.id?(n.insertBefore(o,r),u++):(i=e(o,r))!==r&&(n.replaceChild(i,r),u++)}else n.appendChild(o),u++;else n.removeChild(r),l--}(t,n),n):null:t}(t,e)},O={},E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(O,"__esModule",{value:!0});var k=new WeakMap,_=Symbol("iteration key");function N(e,t,n){var r=t.get(n);r&&r.forEach(e.add,e)}function L(e){e.cleaners&&e.cleaners.forEach(x,e),e.cleaners=[]}function x(e){e.delete(this)}var S=[],C=!1;function V(e){var t=S[S.length-1];t&&(j(t,e),function(e,t){var n=t.target,r=t.key;"iterate"===t.type&&(r=_);var o=k.get(n),i=o.get(r);i||(i=new Set,o.set(r,i)),i.has(e)||(i.add(e),e.cleaners.push(i))}(t,e))}function P(e){(function(e){var t=e.target,n=e.key,r=e.type,o=k.get(t),i=new Set;if("clear"===r?o.forEach(function(e,t){N(i,o,t)}):N(i,o,n),"add"===r||"delete"===r||"clear"===r){var a=Array.isArray(t)?"length":_;N(i,o,a)}return i})(e).forEach(R,e)}function R(e){j(e,this),"function"==typeof e.scheduler?e.scheduler(e):"object"===E(e.scheduler)?e.scheduler.add(e):e()}function j(e,t){if(e.debugger&&!C)try{C=!0,e.debugger(t)}finally{C=!1}}var M=Symbol("is reaction"),T=new WeakMap,I=new WeakMap,U=Object.prototype.hasOwnProperty,D={has:function(e){var t=T.get(this),n=Reflect.getPrototypeOf(this);return V({target:t,key:e,type:"has"}),n.has.apply(t,arguments)},get:function(e){var t=T.get(this),n=Reflect.getPrototypeOf(this);return V({target:t,key:e,type:"get"}),n.get.apply(t,arguments)},add:function(e){var t=T.get(this),n=Reflect.getPrototypeOf(this),r=n.has.call(t,e),o=n.add.apply(t,arguments);return r||P({target:t,key:e,value:e,type:"add"}),o},set:function(e,t){var n=T.get(this),r=Reflect.getPrototypeOf(this),o=r.has.call(n,e),i=r.get.call(n,e),a=r.set.apply(n,arguments);return o?t!==i&&P({target:n,key:e,value:t,oldValue:i,type:"set"}):P({target:n,key:e,value:t,type:"add"}),a},delete:function(e){var t=T.get(this),n=Reflect.getPrototypeOf(this),r=n.has.call(t,e),o=n.get?n.get.call(t,e):void 0,i=n.delete.apply(t,arguments);return r&&P({target:t,key:e,oldValue:o,type:"delete"}),i},clear:function(){var e=T.get(this),t=Reflect.getPrototypeOf(this),n=0!==e.size,r=e instanceof Map?new Map(e):new Set(e),o=t.clear.apply(e,arguments);return n&&P({target:e,oldTarget:r,type:"clear"}),o},forEach:function(){var e=T.get(this),t=Reflect.getPrototypeOf(this);return V({target:e,type:"iterate"}),t.forEach.apply(e,arguments)},keys:function(){var e=T.get(this),t=Reflect.getPrototypeOf(this);return V({target:e,type:"iterate"}),t.keys.apply(e,arguments)},values:function(){var e=T.get(this),t=Reflect.getPrototypeOf(this);return V({target:e,type:"iterate"}),t.values.apply(e,arguments)},entries:function(){var e=T.get(this),t=Reflect.getPrototypeOf(this);return V({target:e,type:"iterate"}),t.entries.apply(e,arguments)},get size(){var e=T.get(this),t=Reflect.getPrototypeOf(this);return V({target:e,type:"iterate"}),Reflect.get(t,"size",e)}};D[Symbol.iterator]=function(){var e=T.get(this),t=Reflect.getPrototypeOf(this);return V({target:e,type:"iterate"}),t[Symbol.iterator].apply(e,arguments)};var F={get:function(e,t,n){return e=U.call(D,t)?D:e,Reflect.get(e,t,n)}},K=Function("return this")(),W=new Map([[Map,F],[Set,F],[WeakMap,F],[WeakSet,F],[Object,!1],[Array,!1],[Int8Array,!1],[Uint8Array,!1],[Uint8ClampedArray,!1],[Int16Array,!1],[Uint16Array,!1],[Int32Array,!1],[Uint32Array,!1],[Float32Array,!1],[Float64Array,!1]]);function z(e){return W.get(e.constructor)}var Y=Object.prototype.hasOwnProperty,B=new Set(Object.getOwnPropertyNames(Symbol).map(function(e){return Symbol[e]}).filter(function(e){return"symbol"===(void 0===e?"undefined":E(e))})),G={get:function(e,t,n){var r=Reflect.get(e,t,n);if("symbol"===(void 0===t?"undefined":E(t))&&B.has(t))return r;V({target:e,key:t,receiver:n,type:"get"});var o=I.get(r);if(S.length>0&&"object"===(void 0===r?"undefined":E(r))&&null!==r){if(o)return o;var i=Reflect.getOwnPropertyDescriptor(e,t);if(!i||!1!==i.writable||!1!==i.configurable)return H(r)}return o||r},has:function(e,t){var n=Reflect.has(e,t);return V({target:e,key:t,type:"has"}),n},ownKeys:function(e){return V({target:e,type:"iterate"}),Reflect.ownKeys(e)},set:function(e,t,n,r){"object"===(void 0===n?"undefined":E(n))&&null!==n&&(n=T.get(n)||n);var o=Y.call(e,t),i=e[t],a=Reflect.set(e,t,n,r);return e!==T.get(r)?a:(o?n!==i&&P({target:e,key:t,value:n,oldValue:i,receiver:r,type:"set"}):P({target:e,key:t,value:n,receiver:r,type:"add"}),a)},deleteProperty:function(e,t){var n=Y.call(e,t),r=e[t],o=Reflect.deleteProperty(e,t);return n&&P({target:e,key:t,oldValue:r,type:"delete"}),o}};function H(e){return void 0===e&&(e={}),T.has(e)||"function"==typeof(t=e.constructor)&&t.name in K&&K[t.name]===t&&!W.has(t)?e:I.get(e)||function(e){var t=z(e)||G,n=new Proxy(e,t);return I.set(e,n),T.set(n,e),function(e){k.set(e,new Map)}(e),n}(e);var t}O.observe=function(e,t){void 0===t&&(t={});var n=e[M]?e:function t(){return function(e,t,n,r){if(e.unobserved)return Reflect.apply(t,n,r);if(-1===S.indexOf(e)){L(e);try{return S.push(e),Reflect.apply(t,n,r)}finally{S.pop()}}}(t,e,this,arguments)};return n.scheduler=t.scheduler,n.debugger=t.debugger,n[M]=!0,t.lazy||n(),n},O.unobserve=function(e){e.unobserved||(e.unobserved=!0,L(e)),"object"===E(e.scheduler)&&e.scheduler.delete(e)},O.observable=H,O.isObservable=function(e){return T.has(e)},O.raw=function(e){return T.get(e)||e};var $={},q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X=Object.create||function(e){var t=function(){};return t.prototype=e,new t},J=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return n},Q=Function.prototype.bind||function(e){var t=this;return function(){return t.apply(e,arguments)}};function Z(){this._events&&Object.prototype.hasOwnProperty.call(this,"_events")||(this._events=X(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0}$=Z,Z.EventEmitter=Z,Z.prototype._events=void 0,Z.prototype._maxListeners=void 0;var ee,te=10;try{var ne={};Object.defineProperty&&Object.defineProperty(ne,"x",{value:0}),ee=0===ne.x}catch(Ue){ee=!1}function re(e){return void 0===e._maxListeners?Z.defaultMaxListeners:e._maxListeners}function oe(e,t,n,r){var o,i,a;if("function"!=typeof n)throw new TypeError('"listener" argument must be a function');if((i=e._events)?(i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),a=i[t]):(i=e._events=X(null),e._eventsCount=0),a){if("function"==typeof a?a=i[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),!a.warned&&(o=re(e))&&o>0&&a.length>o){a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+' "'+String(t)+'" listeners added. Use emitter.setMaxListeners() to increase limit.');u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=a.length,"object"===("undefined"==typeof console?"undefined":q(console))&&console.warn&&console.warn("%s: %s",u.name,u.message)}}else a=i[t]=n,++e._eventsCount;return e}function ie(){if(!this.fired)switch(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length){case 0:return this.listener.call(this.target);case 1:return this.listener.call(this.target,arguments[0]);case 2:return this.listener.call(this.target,arguments[0],arguments[1]);case 3:return this.listener.call(this.target,arguments[0],arguments[1],arguments[2]);default:for(var e=new Array(arguments.length),t=0;t<e.length;++t)e[t]=arguments[t];this.listener.apply(this.target,e)}}function ae(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=Q.call(ie,r);return o.listener=n,r.wrapFn=o,o}function ue(e,t,n){var r=e._events;if(!r)return[];var o=r[t];return o?"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):se(o,o.length):[]}function le(e){var t=this._events;if(t){var n=t[e];if("function"==typeof n)return 1;if(n)return n.length}return 0}function se(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}ee?Object.defineProperty(Z,"defaultMaxListeners",{enumerable:!0,get:function(){return te},set:function(e){if("number"!=typeof e||e<0||e!=e)throw new TypeError('"defaultMaxListeners" must be a positive number');te=e}}):Z.defaultMaxListeners=te,Z.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw new TypeError('"n" argument must be a positive number');return this._maxListeners=e,this},Z.prototype.getMaxListeners=function(){return re(this)},Z.prototype.emit=function(e){var t,n,r,o,i,a,u="error"===e;if(a=this._events)u=u&&null==a.error;else if(!u)return!1;if(u){if(arguments.length>1&&(t=arguments[1]),t instanceof Error)throw t;var l=new Error('Unhandled "error" event. ('+t+")");throw l.context=t,l}if(!(n=a[e]))return!1;var s="function"==typeof n;switch(r=arguments.length){case 1:!function(e,t,n){if(t)e.call(n);else for(var r=e.length,o=se(e,r),i=0;i<r;++i)o[i].call(n)}(n,s,this);break;case 2:!function(e,t,n,r){if(t)e.call(n,r);else for(var o=e.length,i=se(e,o),a=0;a<o;++a)i[a].call(n,r)}(n,s,this,arguments[1]);break;case 3:!function(e,t,n,r,o){if(t)e.call(n,r,o);else for(var i=e.length,a=se(e,i),u=0;u<i;++u)a[u].call(n,r,o)}(n,s,this,arguments[1],arguments[2]);break;case 4:!function(e,t,n,r,o,i){if(t)e.call(n,r,o,i);else for(var a=e.length,u=se(e,a),l=0;l<a;++l)u[l].call(n,r,o,i)}(n,s,this,arguments[1],arguments[2],arguments[3]);break;default:for(o=new Array(r-1),i=1;i<r;i++)o[i-1]=arguments[i];!function(e,t,n,r){if(t)e.apply(n,r);else for(var o=e.length,i=se(e,o),a=0;a<o;++a)i[a].apply(n,r)}(n,s,this,o)}return!0},Z.prototype.addListener=function(e,t){return oe(this,e,t,!1)},Z.prototype.on=Z.prototype.addListener,Z.prototype.prependListener=function(e,t){return oe(this,e,t,!0)},Z.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.on(e,ae(this,e,t)),this},Z.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');return this.prependListener(e,ae(this,e,t)),this},Z.prototype.removeListener=function(e,t){var n,r,o,i,a;if("function"!=typeof t)throw new TypeError('"listener" argument must be a function');if(!(r=this._events))return this;if(!(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=X(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){a=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(var n=o,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}(n),1===n.length&&(r[e]=n[0]),r.removeListener&&this.emit("removeListener",e,a||t)}return this},Z.prototype.removeAllListeners=function(e){var t,n,r;if(!(n=this._events))return this;if(!n.removeListener)return 0===arguments.length?(this._events=X(null),this._eventsCount=0):n[e]&&(0==--this._eventsCount?this._events=X(null):delete n[e]),this;if(0===arguments.length){var o,i=J(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=X(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},Z.prototype.listeners=function(e){return ue(this,e,!0)},Z.prototype.rawListeners=function(e){return ue(this,e,!1)},Z.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):le.call(e,t)},Z.prototype.listenerCount=le,Z.prototype.eventNames=function(){return this._eventsCount>0?Reflect.ownKeys(this._events):[]};var ce={};function fe(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var de=O.observable,pe=O.observe,he=O.unobserve,ve=O.isObservable,ye="data-"+u.KEY_ID,ge=1;function me(e){if("function"!=typeof e)return de(e);var t=this,n=new WeakMap,r=new WeakMap,o=function o(){var i=Array.from(arguments),a=i.map(function(e){return me.raw(e)}),l=i[0],s=void 0;return n.has(l)?s=n.get(l):(s=e.apply(t,a)).id=ge++,u(s,function(u){if(ve(l)){if(r.has(l))return;n.set(l,u)}var s=!1,c=u.id,f=pe(function(){o.emit.apply(o,["premorph",me.raw(t),u].concat(fe(a)));var r=e.apply(t,i);r.id=r.id||c,r.setAttribute(ye,(n.get(l)||u).getAttribute(ye)),A(u,r),s?o.emit.apply(o,["morph",me.raw(t),u].concat(fe(a))):(o.emit.apply(o,["load",me.raw(t),u].concat(fe(a))),s=!0)});ve(l)&&r.set(l,f)},function(e){r.has(l)&&(o.emit.apply(o,["unload",me.raw(t),e].concat(fe(a))),he(r.get(l)),r.delete(l))},ge)};return $.call(o),Object.assign(o,$.prototype),o}Object.assign(me,O),ce=me;var be={},we=Object.create(null),Ae="onloadid"+(new Date%9e6).toString(36),Oe="data-"+Ae,Ee=0;function ke(e,t){we[e][0]&&0===we[e][2]&&(we[e][0](t),we[e][2]=1)}function _e(e,t){we[e][1]&&1===we[e][2]&&(we[e][1](t),we[e][2]=0)}function Ne(e,t){for(var n=Object.keys(we),r=0;r<e.length;r++){if(e[r]&&e[r].getAttribute&&e[r].getAttribute(Oe)){var o=e[r].getAttribute(Oe);n.forEach(function(n){o===n&&t(n,e[r])})}e[r]&&e[r].childNodes.length>0&&Ne(e[r].childNodes,t)}}a&&a.MutationObserver&&new MutationObserver(function(e){if(!(Object.keys(we).length<1))for(var t=0;t<e.length;t++)e[t].attributeName!==Oe?(Ne(e[t].removedNodes,function(e,t){i.documentElement.contains(t)||_e(e,t)}),Ne(e[t].addedNodes,function(e,t){i.documentElement.contains(t)&&ke(e,t)})):(n=e[t],r=ke,o=_e,a=void 0,a=n.target.getAttribute(Oe),function(e,t){return!(!e||!t)&&we[e][3]===we[t][3]}(n.oldValue,a)?we[a]=we[n.oldValue]:(we[n.oldValue]&&o(n.oldValue,n.target),we[a]&&r(a,n.target)));var n,r,o,a}).observe(i.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[Oe]}),(be=function e(t,n,r,o){return n=n||function(){},r=r||function(){},t.setAttribute(Oe,"o"+Ee),we["o"+Ee]=[n,r,0,o||e.caller],Ee+=1,t}).KEY_ATTR=Oe,be.KEY_ID=Ae;var Le={};function xe(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var Se=O.observable,Ce=O.observe,Ve=O.unobserve,Pe="data-"+be.KEY_ID,Re=1;function je(e){if("function"!=typeof e)return Se(e);var t=Re++,n=void 0,r=void 0,o=this,i=function i(){var a=Array.from(arguments),u=a.map(function(e){return je.raw(e)}),l=r||e.apply(o,u);return l.id=l.id||t,be(l,function(l){n||(r=l,i.emit.apply(i,["load",je.raw(o),l].concat(xe(u))),n=Ce(function(){i.emit.apply(i,["morph",je.raw(o),l].concat(xe(u)));var n=e.apply(o,a);n.id=n.id||t,n.setAttribute(Pe,r.getAttribute(Pe)),A(l,n)}))},function(e){n&&(i.emit.apply(i,["unload",je.raw(o),e].concat(xe(u))),Ve(n),n=null)},t)};return $.call(i),Object.assign(i,$.prototype),i}Object.assign(je,O),Le=je;var Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("function"==typeof e)return Le(e);var t=[],n=o(Le(e)),r=function(){return Le.apply(n,arguments)};return r.use=function(r){var o=Object.assign({},e);t.push(r),n=t.reduce(function(e,t){return t(e)||e},o)},r.observable=function(e){return o(Le(e))},r;function o(e){var t=new Set;return new Proxy(e,{get:function(r,o,i){return"function"==typeof r[o]&&e.hasOwnProperty(o)?function(){t.add(r[o]);var e=r[o].apply(n,arguments);return t.delete(r[o]),e}:r[o]},set:function(n,r,o,i){if(0===t.size)throw new Error("Cannot mutate state outside of an action");return void 0===e[r]&&console.warn("Adding new observable property "+r+" dynamically in unsupported by proxy-polyfill"),n[r]=o,!0}})}},Te=Me({location:window.location.pathname,get route(){switch(this.location){case"/":case"/index.html":return n({});default:return t({})}}})(function(e){return function(){var e=r({}),t=document.createElement("body");return t.setAttribute("class","baskerville"),e(t,["\n      ",arguments[0],"\n    "]),t}(this.route(e))}),Ie=ce({title:"starter"});ce.observe(function(){return document.title=Ie.title}),document.body=Te(Ie)}();
//# sourceMappingURL=bundle.js.map