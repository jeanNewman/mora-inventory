<<<<<<<< HEAD:public/assets/register-vuelidate-rules.11b20230.js
import{j as u}from"./index.cf0f49d2.js";function l(r){return typeof r=="function"}function $(r){return r!==null&&typeof r=="object"&&!Array.isArray(r)}function p(r){return l(r.$validator)?Object.assign({},r):{$validator:r}}function b(r){return $(r)&&l(r.then)}function c(r){return typeof r=="object"?r.$valid:r}function m(r){return r.$validator||r}function y(r,e){if(!$(r))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof r}`);if(!$(e)&&!l(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=p(e);return t.$params=Object.assign({},t.$params||{},r),t}function x(r,e){if(!l(r)&&typeof u(r)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof r}`);if(!$(e)&&!l(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=p(e);return t.$message=r,t}const o=r=>{if(r=u(r),Array.isArray(r))return!!r.length;if(r==null)return!1;if(r===!1)return!0;if(r instanceof Date)return!isNaN(r.getTime());if(typeof r=="object"){for(let e in r)return!0;return!1}return!!String(r).length},w=r=>(r=u(r),Array.isArray(r)?r.length:typeof r=="object"?Object.keys(r).length:String(r).length);function d(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return n=>(n=u(n),!o(n)||e.every(a=>a.test(n)))}var A=d(/^[a-zA-Z]*$/),v={$validator:A,$message:"The value is not alphabetical",$params:{type:"alpha"}},T=d(/^[a-zA-Z0-9]*$/),V={$validator:T,$message:"The value must be alpha-numeric",$params:{type:"alphaNum"}},z=d(/^\d*(\.\d+)?$/),q={$validator:z,$message:"Value must be numeric",$params:{type:"numeric"}};function j(r,e){return t=>!o(t)||(!/\s/.test(t)||t instanceof Date)&&+u(r)<=+t&&+u(e)>=+t}function L(r,e){return{$validator:j(r,e),$message:t=>{let{$params:n}=t;return`The value must be between ${n.min} and ${n.max}`},$params:{min:r,max:e,type:"between"}}}const P=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var N=d(P),S={$validator:N,$message:"Value is not a valid email address",$params:{type:"email"}};function I(r){if(!o(r))return!0;if(typeof r!="string")return!1;const e=r.split(".");return e.length===4&&e.every(O)}const O=r=>{if(r.length>3||r.length===0||r[0]==="0"&&r!=="0"||!r.match(/^\d+$/))return!1;const e=+r|0;return e>=0&&e<=255};var R={$validator:I,$message:"The value is not a valid IP address",$params:{type:"ipAddress"}};function U(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:":";return e=>{if(r=u(r),!o(e))return!0;if(typeof e!="string")return!1;const t=typeof r=="string"&&r!==""?e.split(r):e.length===12||e.length===16?e.match(/.{2}/g):null;return t!==null&&(t.length===6||t.length===8)&&t.every(D)}}const D=r=>r.toLowerCase().match(/^[0-9a-f]{2}$/);function E(r){return{$validator:U(r),$message:"The value is not a valid MAC Address",$params:{type:"macAddress"}}}function M(r){return e=>!o(e)||w(e)<=u(r)}function C(r){return{$validator:M(r),$message:e=>{let{$params:t}=e;return`The maximum length allowed is ${t.max}`},$params:{max:r,type:"maxLength"}}}function Z(r){return e=>!o(e)||w(e)>=u(r)}function B(r){return{$validator:Z(r),$message:e=>{let{$params:t}=e;return`This field should be at least ${t.min} characters long`},$params:{min:r,type:"minLength"}}}function G(r){return typeof r=="string"&&(r=r.trim()),o(r)}var H={$validator:G,$message:"Value is required",$params:{type:"required"}};const h=(r,e)=>r?o(typeof e=="string"?e.trim():e):!0;function J(r){return function(e,t){if(typeof r!="function")return h(u(r),e);const n=r.call(this,e,t);return h(n,e)}}function K(r){return{$validator:J(r),$message:"The value is required",$params:{type:"requiredIf",prop:r}}}const g=(r,e)=>r?!0:o(typeof e=="string"?e.trim():e);function Q(r){return function(e,t){if(typeof r!="function")return g(u(r),e);const n=r.call(this,e,t);return g(n,e)}}function W(r){return{$validator:Q(r),$message:"The value is required",$params:{type:"requiredUnless",prop:r}}}const X=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;var Y=d(X),F={$validator:Y,$message:"The value is not a valid URL address",$params:{type:"url"}};function k(r,e,t){return t?e?e(r):r:((!r||!r.then)&&(r=Promise.resolve(r)),e?r.then(e):r)}function _(r){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.reduce((a,i)=>c(a)?a:m(i).apply(this,t),!1)}}function rr(r){return function(){const e=this;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.reduce(function(i,s){return k(i,function(f){return c(f)?f:m(s).apply(e,n)})},Promise.resolve(!1))}}function er(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];const n=e.some(s=>s.$async),a=e.reduce((s,f)=>f.$watchTargets?s.concat(f.$watchTargets):s,[]);let i=()=>!1;return e.length&&(i=n?rr(e):_(e)),{$async:n,$validator:i,$watchTargets:a}}function tr(){return y({type:"or"},x("The value does not match any of the provided validators",er(...arguments)))}function nr(r,e,t){return t?e?e(r):r:((!r||!r.then)&&(r=Promise.resolve(r)),e?r.then(e):r)}function ar(r){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.reduce((a,i)=>c(a)?m(i).apply(this,t):a,!0)}}function ir(r){return function(){const e=this;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.reduce(function(i,s){return nr(i,function(f){return c(f)?m(s).apply(e,n):f})},Promise.resolve(!0))}}function sr(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];const n=e.some(s=>s.$async),a=e.reduce((s,f)=>f.$watchTargets?s.concat(f.$watchTargets):s,[]);let i=()=>!1;return e.length&&(i=n?ir(e):ar(e)),{$async:n,$validator:i,$watchTargets:a}}function ur(){return y({type:"and"},x("The value does not match all of the provided validators",sr(...arguments)))}function or(r){return function(e,t){if(!o(e))return!0;const n=m(r).call(this,e,t);return b(n)?n.then(a=>!c(a)):!c(n)}}function fr(r){return{$validator:or(r),$message:"The value does not match the provided validator",$params:{type:"not"}}}function dr(r){return e=>!o(e)||(!/\s/.test(e)||e instanceof Date)&&+e>=+u(r)}function cr(r){return{$validator:dr(r),$message:e=>{let{$params:t}=e;return`The minimum value allowed is ${t.min}`},$params:{min:r,type:"minValue"}}}function lr(r){return e=>!o(e)||(!/\s/.test(e)||e instanceof Date)&&+e<=+u(r)}var mr=r=>({$validator:lr(r),$message:e=>{let{$params:t}=e;return`The maximum value allowed is ${t.max}`},$params:{max:r,type:"maxValue"}}),$r=d(/(^[0-9]*$)|(^-[0-9]+$)/),hr={$validator:$r,$message:"Value is not an integer",$params:{type:"integer"}},gr=d(/^[-]?\d*(\.\d+)?$/),pr={$validator:gr,$message:"Value must be decimal",$params:{type:"decimal"}},xr=({app:r})=>{r.config.globalProperties.$rules={is(e,t){return t=t!==void 0?t:!1,n=>{let a;switch(typeof e){case"string":a=String(n)===e;break;case"number":a=Number(n)===e;break;default:a=n===e}return a||t}},required(e=!1){return t=>H.$validator(t)||e},requiredIf(e,t=!1){return n=>K(e).$validator(n)||t},requiredUnless(e,t=!1){return n=>W(e).$validator(n)||t},minLength(e,t=!1){return n=>B(e).$validator(n)||t},maxLength(e,t=!1){return n=>C(e).$validator(n)||t},minValue(e,t=!1){return n=>cr(e).$validator(n)||t},maxValue(e,t=!1){return n=>mr(e).$validator(n)||t},between(e,t,n=!1){return a=>L(e,t).$validator(a)||n},alpha(e=!1){return t=>v.$validator(t)||e},alphaNum(e=!1){return t=>V.$validator(t)||e},numeric(e=!1){return t=>q.$validator(t)||e},integer(e=!1){return t=>hr.$validator(t)||e},decimal(e=!1){return t=>pr.$validator(t)||e},email(e=!1){return t=>S.$validator(t)||e},ipAddress(e=!1){return t=>R.$validator(t)||e},macAddress(e=":",t=!1){return n=>E.$validator(e)(n)||t},url(e=!1){return t=>F.$validator(t)||e},or(...e){let t=!1;return typeof e[e.length-1]=="string"&&(t=e.pop()),n=>tr(...e).$validator(n)||t},and(...e){let t=!1;return typeof e[e.length-1]=="string"&&(t=e.pop()),n=>ur(...e).$validator(n)||t},not(e,t=!1){return n=>fr(e).$validator(n)||t},sameAs(e,t=!1){return n=>n==e||t}}};export{xr as default};
========
import{j as u}from"./index.27345aab.js";function l(r){return typeof r=="function"}function $(r){return r!==null&&typeof r=="object"&&!Array.isArray(r)}function p(r){return l(r.$validator)?Object.assign({},r):{$validator:r}}function b(r){return $(r)&&l(r.then)}function c(r){return typeof r=="object"?r.$valid:r}function m(r){return r.$validator||r}function y(r,e){if(!$(r))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof r}`);if(!$(e)&&!l(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=p(e);return t.$params=Object.assign({},t.$params||{},r),t}function x(r,e){if(!l(r)&&typeof u(r)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof r}`);if(!$(e)&&!l(e))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=p(e);return t.$message=r,t}const o=r=>{if(r=u(r),Array.isArray(r))return!!r.length;if(r==null)return!1;if(r===!1)return!0;if(r instanceof Date)return!isNaN(r.getTime());if(typeof r=="object"){for(let e in r)return!0;return!1}return!!String(r).length},w=r=>(r=u(r),Array.isArray(r)?r.length:typeof r=="object"?Object.keys(r).length:String(r).length);function d(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return n=>(n=u(n),!o(n)||e.every(a=>a.test(n)))}var A=d(/^[a-zA-Z]*$/),v={$validator:A,$message:"The value is not alphabetical",$params:{type:"alpha"}},T=d(/^[a-zA-Z0-9]*$/),V={$validator:T,$message:"The value must be alpha-numeric",$params:{type:"alphaNum"}},z=d(/^\d*(\.\d+)?$/),q={$validator:z,$message:"Value must be numeric",$params:{type:"numeric"}};function j(r,e){return t=>!o(t)||(!/\s/.test(t)||t instanceof Date)&&+u(r)<=+t&&+u(e)>=+t}function L(r,e){return{$validator:j(r,e),$message:t=>{let{$params:n}=t;return`The value must be between ${n.min} and ${n.max}`},$params:{min:r,max:e,type:"between"}}}const P=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var N=d(P),S={$validator:N,$message:"Value is not a valid email address",$params:{type:"email"}};function I(r){if(!o(r))return!0;if(typeof r!="string")return!1;const e=r.split(".");return e.length===4&&e.every(O)}const O=r=>{if(r.length>3||r.length===0||r[0]==="0"&&r!=="0"||!r.match(/^\d+$/))return!1;const e=+r|0;return e>=0&&e<=255};var R={$validator:I,$message:"The value is not a valid IP address",$params:{type:"ipAddress"}};function U(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:":";return e=>{if(r=u(r),!o(e))return!0;if(typeof e!="string")return!1;const t=typeof r=="string"&&r!==""?e.split(r):e.length===12||e.length===16?e.match(/.{2}/g):null;return t!==null&&(t.length===6||t.length===8)&&t.every(D)}}const D=r=>r.toLowerCase().match(/^[0-9a-f]{2}$/);function E(r){return{$validator:U(r),$message:"The value is not a valid MAC Address",$params:{type:"macAddress"}}}function M(r){return e=>!o(e)||w(e)<=u(r)}function C(r){return{$validator:M(r),$message:e=>{let{$params:t}=e;return`The maximum length allowed is ${t.max}`},$params:{max:r,type:"maxLength"}}}function Z(r){return e=>!o(e)||w(e)>=u(r)}function B(r){return{$validator:Z(r),$message:e=>{let{$params:t}=e;return`This field should be at least ${t.min} characters long`},$params:{min:r,type:"minLength"}}}function G(r){return typeof r=="string"&&(r=r.trim()),o(r)}var H={$validator:G,$message:"Value is required",$params:{type:"required"}};const h=(r,e)=>r?o(typeof e=="string"?e.trim():e):!0;function J(r){return function(e,t){if(typeof r!="function")return h(u(r),e);const n=r.call(this,e,t);return h(n,e)}}function K(r){return{$validator:J(r),$message:"The value is required",$params:{type:"requiredIf",prop:r}}}const g=(r,e)=>r?!0:o(typeof e=="string"?e.trim():e);function Q(r){return function(e,t){if(typeof r!="function")return g(u(r),e);const n=r.call(this,e,t);return g(n,e)}}function W(r){return{$validator:Q(r),$message:"The value is required",$params:{type:"requiredUnless",prop:r}}}const X=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;var Y=d(X),F={$validator:Y,$message:"The value is not a valid URL address",$params:{type:"url"}};function k(r,e,t){return t?e?e(r):r:((!r||!r.then)&&(r=Promise.resolve(r)),e?r.then(e):r)}function _(r){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.reduce((a,i)=>c(a)?a:m(i).apply(this,t),!1)}}function rr(r){return function(){const e=this;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.reduce(function(i,s){return k(i,function(f){return c(f)?f:m(s).apply(e,n)})},Promise.resolve(!1))}}function er(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];const n=e.some(s=>s.$async),a=e.reduce((s,f)=>f.$watchTargets?s.concat(f.$watchTargets):s,[]);let i=()=>!1;return e.length&&(i=n?rr(e):_(e)),{$async:n,$validator:i,$watchTargets:a}}function tr(){return y({type:"or"},x("The value does not match any of the provided validators",er(...arguments)))}function nr(r,e,t){return t?e?e(r):r:((!r||!r.then)&&(r=Promise.resolve(r)),e?r.then(e):r)}function ar(r){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.reduce((a,i)=>c(a)?m(i).apply(this,t):a,!0)}}function ir(r){return function(){const e=this;for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.reduce(function(i,s){return nr(i,function(f){return c(f)?m(s).apply(e,n):f})},Promise.resolve(!0))}}function sr(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];const n=e.some(s=>s.$async),a=e.reduce((s,f)=>f.$watchTargets?s.concat(f.$watchTargets):s,[]);let i=()=>!1;return e.length&&(i=n?ir(e):ar(e)),{$async:n,$validator:i,$watchTargets:a}}function ur(){return y({type:"and"},x("The value does not match all of the provided validators",sr(...arguments)))}function or(r){return function(e,t){if(!o(e))return!0;const n=m(r).call(this,e,t);return b(n)?n.then(a=>!c(a)):!c(n)}}function fr(r){return{$validator:or(r),$message:"The value does not match the provided validator",$params:{type:"not"}}}function dr(r){return e=>!o(e)||(!/\s/.test(e)||e instanceof Date)&&+e>=+u(r)}function cr(r){return{$validator:dr(r),$message:e=>{let{$params:t}=e;return`The minimum value allowed is ${t.min}`},$params:{min:r,type:"minValue"}}}function lr(r){return e=>!o(e)||(!/\s/.test(e)||e instanceof Date)&&+e<=+u(r)}var mr=r=>({$validator:lr(r),$message:e=>{let{$params:t}=e;return`The maximum value allowed is ${t.max}`},$params:{max:r,type:"maxValue"}}),$r=d(/(^[0-9]*$)|(^-[0-9]+$)/),hr={$validator:$r,$message:"Value is not an integer",$params:{type:"integer"}},gr=d(/^[-]?\d*(\.\d+)?$/),pr={$validator:gr,$message:"Value must be decimal",$params:{type:"decimal"}},xr=({app:r})=>{r.config.globalProperties.$rules={is(e,t){return t=t!==void 0?t:!1,n=>{let a;switch(typeof e){case"string":a=String(n)===e;break;case"number":a=Number(n)===e;break;default:a=n===e}return a||t}},required(e=!1){return t=>H.$validator(t)||e},requiredIf(e,t=!1){return n=>K(e).$validator(n)||t},requiredUnless(e,t=!1){return n=>W(e).$validator(n)||t},minLength(e,t=!1){return n=>B(e).$validator(n)||t},maxLength(e,t=!1){return n=>C(e).$validator(n)||t},minValue(e,t=!1){return n=>cr(e).$validator(n)||t},maxValue(e,t=!1){return n=>mr(e).$validator(n)||t},between(e,t,n=!1){return a=>L(e,t).$validator(a)||n},alpha(e=!1){return t=>v.$validator(t)||e},alphaNum(e=!1){return t=>V.$validator(t)||e},numeric(e=!1){return t=>q.$validator(t)||e},integer(e=!1){return t=>hr.$validator(t)||e},decimal(e=!1){return t=>pr.$validator(t)||e},email(e=!1){return t=>S.$validator(t)||e},ipAddress(e=!1){return t=>R.$validator(t)||e},macAddress(e=":",t=!1){return n=>E.$validator(e)(n)||t},url(e=!1){return t=>F.$validator(t)||e},or(...e){let t=!1;return typeof e[e.length-1]=="string"&&(t=e.pop()),n=>tr(...e).$validator(n)||t},and(...e){let t=!1;return typeof e[e.length-1]=="string"&&(t=e.pop()),n=>ur(...e).$validator(n)||t},not(e,t=!1){return n=>fr(e).$validator(n)||t},sameAs(e,t=!1){return n=>n==e||t}}};export{xr as default};
>>>>>>>> upstream/main:public/assets/register-vuelidate-rules.901bcee3.js
