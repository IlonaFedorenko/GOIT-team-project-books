function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},l={},o=t.parcelRequirecb2a;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){l[e]=t},t.parcelRequirecb2a=o),o.register("lTrTm",(function(t,r){var l=o("11BUI");const n=document.querySelector("#popup-1"),c=document.querySelector("#popup-container-1"),i=document.querySelector(".header-sign-btn"),a=document.querySelector("#popup-close-1"),u=document.querySelector("#switch-button-1");function d(t){try{t.preventDefault()}catch{}n.classList.add("active"),e(l).disablePageScroll(document.body),window.addEventListener("keydown",h)}i.addEventListener("click",d),a.addEventListener("click",b),u.addEventListener("click",(function(){b(),function(t){try{t.preventDefault()}catch{}s.classList.add("active"),e(l).disablePageScroll(document.body),window.addEventListener("keydown",h)}()})),c.addEventListener("click",v),window.addEventListener("keydown",h);const s=document.querySelector("#popup-2"),f=document.querySelector("#popup-container-2"),p=document.querySelector("#popup-close-2"),g=document.querySelector("#switch-button-2");function b(){n.classList.remove("active"),s.classList.remove("active"),e(l).enablePageScroll(document.body),window.removeEventListener("keydown",h)}function v(e){e.currentTarget===e.target&&b()}function h(e){"Escape"===e.code&&b()}p.addEventListener("click",b),g.addEventListener("click",(function(){b(),d()})),f.addEventListener("click",v),window.addEventListener("keydown",h)})),o.register("11BUI",(function(e,t){var r;e.exports,r=function(){return function(e){var t={};function r(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(l,o,function(t){return e[t]}.bind(null,o));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){r.r(t);var l=function(e){return Array.isArray(e)?e:[e]},o=function(e){return e instanceof Node},n=function(e,t){if(e&&t){e=function(e){return e instanceof NodeList}(e)?e:[e];for(var r=0;r<e.length&&!0!==t(e[r],r,e.length);r++);}},c=function(e){return console.error("[scroll-lock] ".concat(e))},i=function(e){if(Array.isArray(e))return e.join(", ")},a=function(e){var t=[];return n(e,(function(e){return t.push(e)})),t},u=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document;if(r&&-1!==a(l.querySelectorAll(t)).indexOf(e))return e;for(;(e=e.parentElement)&&-1===a(l.querySelectorAll(t)).indexOf(e););return e},d=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,l=-1!==a(r.querySelectorAll(t)).indexOf(e);return l},s=function(e){if(e)return"hidden"===getComputedStyle(e).overflow},f=function(e){if(e)return!!s(e)||e.scrollTop<=0},p=function(e){if(e){if(s(e))return!0;var t=e.scrollTop,r=e.scrollHeight;return t+e.offsetHeight>=r}},g=function(e){if(e)return!!s(e)||e.scrollLeft<=0},b=function(e){if(e){if(s(e))return!0;var t=e.scrollLeft,r=e.scrollWidth;return t+e.offsetWidth>=r}},v=function(e){return d(e,'textarea, [contenteditable="true"]')},h=function(e){return d(e,'input[type="range"]')};function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"disablePageScroll",(function(){return k})),r.d(t,"enablePageScroll",(function(){return w})),r.d(t,"getScrollState",(function(){return L})),r.d(t,"clearQueueScrollLocks",(function(){return T})),r.d(t,"getTargetScrollBarWidth",(function(){return A})),r.d(t,"getCurrentTargetScrollBarWidth",(function(){return E})),r.d(t,"getPageScrollBarWidth",(function(){return G})),r.d(t,"getCurrentPageScrollBarWidth",(function(){return x})),r.d(t,"addScrollableTarget",(function(){return F})),r.d(t,"removeScrollableTarget",(function(){return W})),r.d(t,"addScrollableSelector",(function(){return q})),r.d(t,"removeScrollableSelector",(function(){return O})),r.d(t,"addLockableTarget",(function(){return P})),r.d(t,"addLockableSelector",(function(){return Y})),r.d(t,"setFillGapMethod",(function(){return M})),r.d(t,"addFillGapTarget",(function(){return j})),r.d(t,"removeFillGapTarget",(function(){return N})),r.d(t,"addFillGapSelector",(function(){return U})),r.d(t,"removeFillGapSelector",(function(){return B})),r.d(t,"refillGaps",(function(){return C}));var y=["padding","margin","width","max-width","none"],S={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:y[0],startTouchY:0,startTouchX:0},k=function(e){S.queue<=0&&(S.scroll=!1,R(),H()),F(e),S.queue++},w=function(e){S.queue>0&&S.queue--,S.queue<=0&&(S.scroll=!0,_(),I()),W(e)},L=function(){return S.scroll},T=function(){S.queue=0},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(e)){var r=e.style.overflowY;t?L()||(e.style.overflowY=e.getAttribute("data-scroll-lock-saved-overflow-y-property")):e.style.overflowY="scroll";var l=E(e);return e.style.overflowY=r,l}return 0},E=function(e){if(o(e)){if(e===document.body){var t=document.documentElement.clientWidth;return window.innerWidth-t}var r=e.style.borderLeftWidth,l=e.style.borderRightWidth;e.style.borderLeftWidth="0px",e.style.borderRightWidth="0px";var n=e.offsetWidth-e.clientWidth;return e.style.borderLeftWidth=r,e.style.borderRightWidth=l,n}return 0},G=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return A(document.body,e)},x=function(){return E(document.body)},F=function(e){e&&l(e).map((function(e){n(e,(function(e){o(e)?e.setAttribute("data-scroll-lock-scrollable",""):c('"'.concat(e,'" is not a Element.'))}))}))},W=function(e){e&&l(e).map((function(e){n(e,(function(e){o(e)?e.removeAttribute("data-scroll-lock-scrollable"):c('"'.concat(e,'" is not a Element.'))}))}))},q=function(e){e&&l(e).map((function(e){S.scrollableSelectors.push(e)}))},O=function(e){e&&l(e).map((function(e){S.scrollableSelectors=S.scrollableSelectors.filter((function(t){return t!==e}))}))},P=function(e){e&&(l(e).map((function(e){n(e,(function(e){o(e)?e.setAttribute("data-scroll-lock-lockable",""):c('"'.concat(e,'" is not a Element.'))}))})),L()||R())},Y=function(e){e&&(l(e).map((function(e){S.lockableSelectors.push(e)})),L()||R(),U(e))},M=function(e){if(e)if(-1!==y.indexOf(e))S.fillGapMethod=e,C();else{var t=y.join(", ");c('"'.concat(e,'" method is not available!\nAvailable fill gap methods: ').concat(t,"."))}},j=function(e){e&&l(e).map((function(e){n(e,(function(e){o(e)?(e.setAttribute("data-scroll-lock-fill-gap",""),S.scroll||J(e)):c('"'.concat(e,'" is not a Element.'))}))}))},N=function(e){e&&l(e).map((function(e){n(e,(function(e){o(e)?(e.removeAttribute("data-scroll-lock-fill-gap"),S.scroll||Z(e)):c('"'.concat(e,'" is not a Element.'))}))}))},U=function(e){e&&l(e).map((function(e){-1===S.fillGapSelectors.indexOf(e)&&(S.fillGapSelectors.push(e),S.scroll||z(e))}))},B=function(e){e&&l(e).map((function(e){S.fillGapSelectors=S.fillGapSelectors.filter((function(t){return t!==e})),S.scroll||V(e)}))},C=function(){S.scroll||H()},R=function(){var e=i(S.lockableSelectors);K(e)},_=function(){var e=i(S.lockableSelectors);D(e)},K=function(e){var t=document.querySelectorAll(e);n(t,(function(e){X(e)}))},D=function(e){var t=document.querySelectorAll(e);n(t,(function(e){Q(e)}))},X=function(e){if(o(e)&&"true"!==e.getAttribute("data-scroll-lock-locked")){var t=window.getComputedStyle(e);e.setAttribute("data-scroll-lock-saved-overflow-y-property",t.overflowY),e.setAttribute("data-scroll-lock-saved-inline-overflow-property",e.style.overflow),e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",e.style.overflowY),e.style.overflow="hidden",e.setAttribute("data-scroll-lock-locked","true")}},Q=function(e){o(e)&&"true"===e.getAttribute("data-scroll-lock-locked")&&(e.style.overflow=e.getAttribute("data-scroll-lock-saved-inline-overflow-property"),e.style.overflowY=e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-saved-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-locked"))},H=function(){S.fillGapSelectors.map((function(e){z(e)}))},I=function(){S.fillGapSelectors.map((function(e){V(e)}))},z=function(e){var t=document.querySelectorAll(e),r=-1!==S.lockableSelectors.indexOf(e);n(t,(function(e){J(e,r)}))},J=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(o(e)){var r;if(""===e.getAttribute("data-scroll-lock-lockable")||t)r=A(e,!0);else{var l=u(e,i(S.lockableSelectors));r=A(l,!0)}"true"===e.getAttribute("data-scroll-lock-filled-gap")&&Z(e);var n=window.getComputedStyle(e);if(e.setAttribute("data-scroll-lock-filled-gap","true"),e.setAttribute("data-scroll-lock-current-fill-gap-method",S.fillGapMethod),"margin"===S.fillGapMethod){var c=parseFloat(n.marginRight);e.style.marginRight="".concat(c+r,"px")}else if("width"===S.fillGapMethod)e.style.width="calc(100% - ".concat(r,"px)");else if("max-width"===S.fillGapMethod)e.style.maxWidth="calc(100% - ".concat(r,"px)");else if("padding"===S.fillGapMethod){var a=parseFloat(n.paddingRight);e.style.paddingRight="".concat(a+r,"px")}}},V=function(e){var t=document.querySelectorAll(e);n(t,(function(e){Z(e)}))},Z=function(e){if(o(e)&&"true"===e.getAttribute("data-scroll-lock-filled-gap")){var t=e.getAttribute("data-scroll-lock-current-fill-gap-method");e.removeAttribute("data-scroll-lock-filled-gap"),e.removeAttribute("data-scroll-lock-current-fill-gap-method"),"margin"===t?e.style.marginRight="":"width"===t?e.style.width="":"max-width"===t?e.style.maxWidth="":"padding"===t&&(e.style.paddingRight="")}};"undefined"!=typeof window&&window.addEventListener("resize",(function(e){C()})),"undefined"!=typeof document&&(document.addEventListener("touchstart",(function(e){S.scroll||(S.startTouchY=e.touches[0].clientY,S.startTouchX=e.touches[0].clientX)})),document.addEventListener("touchmove",(function(e){if(!S.scroll){var t=S.startTouchY,r=S.startTouchX,l=e.touches[0].clientY,o=e.touches[0].clientX;if(e.touches.length<2){var n=i(S.scrollableSelectors),c={up:t<l,down:t>l,left:r<o,right:r>o},a={up:t+3<l,down:t-3>l,left:r+3<o,right:r-3>o};!function t(r){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r){var o=u(r,n,!1);if(h(r))return!1;if(l||v(r)&&u(r,n)||d(r,n)){var i=!1;g(r)&&b(r)?(c.up&&f(r)||c.down&&p(r))&&(i=!0):f(r)&&p(r)?(c.left&&g(r)||c.right&&b(r))&&(i=!0):(a.up&&f(r)||a.down&&p(r)||a.left&&g(r)||a.right&&b(r))&&(i=!0),i&&(o?t(o,!0):e.cancelable&&e.preventDefault())}else t(o)}else e.cancelable&&e.preventDefault()}(e.target)}}}),{passive:!1}),document.addEventListener("touchend",(function(e){S.scroll||(S.startTouchY=0,S.startTouchX=0)})));var $={hide:function(e){c('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget'),k(e)},show:function(e){c('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget'),w(e)},toggle:function(e){c('"toggle" is deprecated! Do not use it.'),L()?k():w(e)},getState:function(){return c('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate'),L()},getWidth:function(){return c('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth'),G()},getCurrentWidth:function(){return c('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth'),x()},setScrollableTargets:function(e){c('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget'),F(e)},setFillGapSelectors:function(e){c('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector'),U(e)},setFillGapTargets:function(e){c('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget'),j(e)},clearQueue:function(){c('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks'),T()}},ee=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},l=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),l.forEach((function(t){m(e,t,r[t])}))}return e}({disablePageScroll:k,enablePageScroll:w,getScrollState:L,clearQueueScrollLocks:T,getTargetScrollBarWidth:A,getCurrentTargetScrollBarWidth:E,getPageScrollBarWidth:G,getCurrentPageScrollBarWidth:x,addScrollableSelector:q,removeScrollableSelector:O,addScrollableTarget:F,removeScrollableTarget:W,addLockableSelector:Y,addLockableTarget:P,addFillGapSelector:U,removeFillGapSelector:B,addFillGapTarget:j,removeFillGapTarget:N,setFillGapMethod:M,refillGaps:C,_state:S},$);t.default=ee}]).default},e.exports=r()})),o("lTrTm");
//# sourceMappingURL=shopping.a58d0458.js.map
