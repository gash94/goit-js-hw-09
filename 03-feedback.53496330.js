var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,u,f,l=0,c=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,u=setTimeout(h,t),c?b(e):a}function T(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-l>=i}function h(){var e=m();if(T(e))return j(e);u=setTimeout(h,function(e){var n=t-(e-f);return v?d(n,i-(e-l)):n}(e))}function j(e){return u=void 0,y&&r?b(e):(r=o=void 0,a)}function w(){var e=m(),n=T(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(v)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,i=(v="maxWait"in n)?s(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},w.flush=function(){return void 0===u?a:j(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector("input"),b=document.querySelector("textarea"),S=document.querySelector(".feedback-form");document.querySelector("button");S.addEventListener("input",t((function(){const e={email:y.value,message:b.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),0!==localStorage.length&&(y.value=JSON.parse(localStorage.getItem("feedback-form-state")).email,b.value=JSON.parse(localStorage.getItem("feedback-form-state")).message),S.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;if(""===t.value||""===n.value)return alert("Proszę uzupełnić wszystkie pola!");{const r={email:t.value,message:n.value};console.log(r),e.currentTarget.reset(),localStorage.clear()}}));
//# sourceMappingURL=03-feedback.53496330.js.map
