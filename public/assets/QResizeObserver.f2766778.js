import{y as T,w as S,o as v,J as g,K as z,L as E,g as w,M as b,N as L,O as P,r as R,E as C,P as p,h as M}from"./index.12e37f59.js";const{passive:x}=b,N=["both","horizontal","vertical"];var D=T({name:"QScrollObserver",props:{axis:{type:String,validator:n=>N.includes(n),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(n,{emit:m}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let e=null,r,a;S(()=>n.scrollTarget,()=>{o(),u()});function s(){e!==null&&e();const c=Math.max(0,L(r)),f=P(r),l={top:c-t.position.top,left:f-t.position.left};if(n.axis==="vertical"&&l.top===0||n.axis==="horizontal"&&l.left===0)return;const h=Math.abs(l.top)>=Math.abs(l.left)?l.top<0?"up":"down":l.left<0?"left":"right";t.position={top:c,left:f},t.directionChanged=t.direction!==h,t.delta=l,t.directionChanged===!0&&(t.direction=h,t.inflectionPoint=t.position),m("scroll",{...t})}function u(){r=E(a,n.scrollTarget),r.addEventListener("scroll",i,x),i(!0)}function o(){r!==void 0&&(r.removeEventListener("scroll",i,x),r=void 0)}function i(c){if(c===!0||n.debounce===0||n.debounce==="0")s();else if(e===null){const[f,l]=n.debounce?[setTimeout(s,n.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];e=()=>{l(f),e=null}}}const d=w();return v(()=>{a=d.proxy.$el.parentNode,u()}),g(()=>{e!==null&&e(),o()}),Object.assign(d.proxy,{trigger:i,getPosition:()=>t}),z}});function Q(){const n=R(!C.value);return n.value===!1&&v(()=>{n.value=!0}),n}const O=typeof ResizeObserver!="undefined",y=O===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var V=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(n,{emit:m}){let t=null,e,r={width:-1,height:-1};function a(o){o===!0||n.debounce===0||n.debounce==="0"?s():t===null&&(t=setTimeout(s,n.debounce))}function s(){if(clearTimeout(t),t=null,e){const{offsetWidth:o,offsetHeight:i}=e;(o!==r.width||i!==r.height)&&(r={width:o,height:i},m("resize",r))}}const u=w();if(Object.assign(u.proxy,{trigger:a}),O===!0){let o;return v(()=>{p(()=>{e=u.proxy.$el.parentNode,e&&(o=new ResizeObserver(a),o.observe(e),s())})}),g(()=>{clearTimeout(t),o!==void 0&&(o.disconnect!==void 0?o.disconnect():e&&o.unobserve(e))}),z}else{let d=function(){clearTimeout(t),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",a,b.passive),i=void 0)},c=function(){d(),e&&e.contentDocument&&(i=e.contentDocument.defaultView,i.addEventListener("resize",a,b.passive),s())};const o=Q();let i;return v(()=>{p(()=>{e=u.proxy.$el,e&&c()})}),g(d),()=>{if(o.value===!0)return M("object",{style:y.style,tabindex:-1,type:"text/html",data:y.url,"aria-hidden":"true",onLoad:c})}}}});export{D as Q,V as a};
