!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequirecb2a;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequirecb2a=a),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var i=a("8MBJY"),l=a("a2hTj"),o=a("hKHmD"),u=function(){"use strict";function t(){e(i)(this,t),e(o)(this,"baseElements",document.querySelectorAll("[data-sign-base]")),e(o)(this,"advancedElements",document.querySelectorAll("[data-sign-advanced]")),e(o)(this,"signUpButtonName",document.querySelectorAll("[data-sign-name]")),e(o)(this,"logOutButton",document.querySelectorAll("[data-sign-logout]")),e(o)(this,"signUpButton",document.querySelectorAll("[data-sign-up]"))}return e(l)(t,[{key:"setActiveUser",value:function(e,t){var r={name:e,email:t};localStorage.setItem("active-user",JSON.stringify(r)),this.checkSignInStatus()}},{key:"getActiveUser",value:function(){var e=JSON.parse(localStorage.getItem("active-user"));if(e)return e}},{key:"getActiveUserName",value:function(){var e=this.getActiveUser();if(e){var t=e.name.split(" ")[0];return t=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}}},{key:"removeActiveUser",value:function(){localStorage.removeItem("active-user")}},{key:"onUserSignIn",value:function(e){var t=!0,r=!1,n=void 0;try{for(var a,i=this.baseElements[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){a.value.classList.add("hidden")}}catch(e){r=!0,n=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw n}}var l=!0,o=!1,u=void 0;try{for(var s,c=this.advancedElements[Symbol.iterator]();!(l=(s=c.next()).done);l=!0){s.value.classList.remove("hidden")}}catch(e){o=!0,u=e}finally{try{l||null==c.return||c.return()}finally{if(o)throw u}}var f=!0,d=!1,v=void 0;try{for(var y,h=this.signUpButton[Symbol.iterator]();!(f=(y=h.next()).done);f=!0){y.value.classList.remove("hidden")}}catch(e){d=!0,v=e}finally{try{f||null==h.return||h.return()}finally{if(d)throw v}}var m=!0,g=!1,p=void 0;try{for(var S,b=this.signUpButtonName[Symbol.iterator]();!(m=(S=b.next()).done);m=!0){S.value.textContent=e}}catch(e){g=!0,p=e}finally{try{m||null==b.return||b.return()}finally{if(g)throw p}}}},{key:"onUserSignOut",value:function(){this.removeActiveUser();var e=!0,t=!1,r=void 0;try{for(var n,a=this.signUpButton[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){n.value.classList.add("hidden")}}catch(e){t=!0,r=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw r}}var i=!0,l=!1,o=void 0;try{for(var u,s=this.logOutButton[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){u.value.classList.add("hidden")}}catch(e){l=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(l)throw o}}var c=!0,f=!1,d=void 0;try{for(var v,y=this.advancedElements[Symbol.iterator]();!(c=(v=y.next()).done);c=!0){v.value.classList.add("hidden")}}catch(e){f=!0,d=e}finally{try{c||null==y.return||y.return()}finally{if(f)throw d}}var h=!0,m=!1,g=void 0;try{for(var p,S=this.baseElements[Symbol.iterator]();!(h=(p=S.next()).done);h=!0){p.value.classList.remove("hidden")}}catch(e){m=!0,g=e}finally{try{h||null==S.return||S.return()}finally{if(m)throw g}}}},{key:"checkSignInStatus",value:function(){var e=this.getActiveUserName();e?this.onUserSignIn(e):this.onUserSignOut()}}]),t}(),s=document.querySelectorAll("[data-sign-up]"),c=!0,f=!1,d=void 0;try{for(var v,y=s[Symbol.iterator]();!(c=(v=y.next()).done);c=!0){v.value.onclick=function(){var e=!0,t=!1,r=void 0;try{for(var n,a=h[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){n.value.classList.toggle("hidden")}}catch(e){t=!0,r=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw r}}}}}catch(e){f=!0,d=e}finally{try{c||null==y.return||y.return()}finally{if(f)throw d}}var h=document.querySelectorAll("[data-sign-logout]"),m=!0,g=!1,p=void 0;try{for(var S,b=h[Symbol.iterator]();!(m=(S=b.next()).done);m=!0){S.value.onclick=function(){return w.onUserSignOut()}}}catch(e){g=!0,p=e}finally{try{m||null==b.return||b.return()}finally{if(g)throw p}}var w=new u;w.checkSignInStatus()}();
//# sourceMappingURL=index.3efd5ba7.js.map
