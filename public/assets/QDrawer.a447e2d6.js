import{y as K,c as o,h as x,z as ae,r as q,w as s,J as le,as as Be,g as ue,i as oe,B as re,a7 as Te,a5 as Ce,a9 as Oe,a6 as $e,ab as Se,ad as ze,at as De,au as H,o as Me,P as p,ak as Ve,av as ee,aw as _e}from"./index.12e37f59.js";import{a as We}from"./QResizeObserver.f2766778.js";import{T as J}from"./ClosePopup.37ad25ce.js";var Ae=K({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:B}){const f=o(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>x("div",{class:f.value},ae(B.default))}}),Ie=K({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:B,emit:f}){const{proxy:{$q:O}}=ue(),n=oe(re,()=>{console.error("QHeader needs to be child of QLayout")}),d=q(parseInt(t.heightHint,10)),b=q(!0),T=o(()=>t.reveal===!0||n.view.value.indexOf("H")>-1||O.platform.is.ios&&n.isContainer.value===!0),z=o(()=>{if(t.modelValue!==!0)return 0;if(T.value===!0)return b.value===!0?d.value:0;const l=d.value-n.scroll.value.position;return l>0?l:0}),a=o(()=>t.modelValue!==!0||T.value===!0&&b.value!==!0),D=o(()=>t.modelValue===!0&&a.value===!0&&t.reveal===!0),M=o(()=>"q-header q-layout__section--marginal "+(T.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),C=o(()=>{const l=n.rows.value.top,y={};return l[0]==="l"&&n.left.space===!0&&(y[O.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),l[2]==="r"&&n.right.space===!0&&(y[O.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),y});function r(l,y){n.update("header",l,y)}function m(l,y){l.value!==y&&(l.value=y)}function v({height:l}){m(d,l),r("size",l)}function i(l){D.value===!0&&m(b,!0),f("focusin",l)}s(()=>t.modelValue,l=>{r("space",l),m(b,!0),n.animate()}),s(z,l=>{r("offset",l)}),s(()=>t.reveal,l=>{l===!1&&m(b,t.modelValue)}),s(b,l=>{n.animate(),f("reveal",l)}),s(n.scroll,l=>{t.reveal===!0&&m(b,l.direction==="up"||l.position<=t.revealOffset||l.position-l.inflectionPoint<100)});const V={};return n.instances.header=V,t.modelValue===!0&&r("size",d.value),r("space",t.modelValue),r("offset",z.value),le(()=>{n.instances.header===V&&(n.instances.header=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const l=Be(B.default,[]);return t.elevated===!0&&l.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(x(We,{debounce:0,onResize:v})),x("header",{class:M.value,style:C.value,onFocusin:i},l)}}});const te=150;var Fe=K({name:"QDrawer",inheritAttrs:!1,props:{...Te,...Ce,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Oe,"on-layout","mini-state"],setup(t,{slots:B,emit:f,attrs:O}){const n=ue(),{proxy:{$q:d}}=n,b=$e(t,d),{preventBodyScroll:T}=_e(),{registerTimeout:z}=Se(),a=oe(re,()=>{console.error("QDrawer needs to be child of QLayout")});let D,M,C;const r=q(t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint),m=o(()=>t.mini===!0&&r.value!==!0),v=o(()=>m.value===!0?t.miniWidth:t.width),i=q(t.showIfAbove===!0&&r.value===!1?!0:t.modelValue===!0),V=o(()=>t.persistent!==!0&&(r.value===!0||se.value===!0));function l(e,u){if(ne(),e!==!1&&a.animate(),h(0),r.value===!0){const c=a.instances[P.value];c!==void 0&&c.belowBreakpoint===!0&&c.hide(!1),g(1),a.isContainer.value!==!0&&T(!0)}else g(0),e!==!1&&U(!1);z(()=>{e!==!1&&U(!0),u!==!0&&f("show",e)},te)}function y(e,u){ie(),e!==!1&&a.animate(),g(0),h($.value*v.value),j(),u!==!0&&z(()=>{f("hide",e)},te)}const{show:A,hide:_}=ze({showing:i,hideOnRouteChange:V,handleShow:l,handleHide:y}),{addToHistory:ne,removeFromHistory:ie}=De(i,_,V),L={belowBreakpoint:r,hide:_},w=o(()=>t.side==="right"),$=o(()=>(d.lang.rtl===!0?-1:1)*(w.value===!0?1:-1)),X=q(0),S=q(!1),I=q(!1),G=q(v.value*$.value),P=o(()=>w.value===!0?"left":"right"),F=o(()=>i.value===!0&&r.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:v.value:0),N=o(()=>t.overlay===!0||t.miniToOverlay===!0||a.view.value.indexOf(w.value?"R":"L")>-1||d.platform.is.ios===!0&&a.isContainer.value===!0),W=o(()=>t.overlay===!1&&i.value===!0&&r.value===!1),se=o(()=>t.overlay===!0&&i.value===!0&&r.value===!1),de=o(()=>"fullscreen q-drawer__backdrop"+(i.value===!1&&S.value===!1?" hidden":"")),ve=o(()=>({backgroundColor:`rgba(0,0,0,${X.value*.4})`})),Y=o(()=>w.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),ce=o(()=>w.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),fe=o(()=>{const e={};return a.header.space===!0&&Y.value===!1&&(N.value===!0?e.top=`${a.header.offset}px`:a.header.space===!0&&(e.top=`${a.header.size}px`)),a.footer.space===!0&&ce.value===!1&&(N.value===!0?e.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(e.bottom=`${a.footer.size}px`)),e}),he=o(()=>{const e={width:`${v.value}px`,transform:`translateX(${G.value}px)`};return r.value===!0?e:Object.assign(e,fe.value)}),me=o(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),ye=o(()=>`q-drawer q-drawer--${t.side}`+(I.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(b.value===!0?" q-drawer--dark q-dark":"")+(S.value===!0?" no-transition":i.value===!0?"":" q-layout--prevent-focus")+(r.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${m.value===!0?"mini":"standard"}`+(N.value===!0||W.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(Y.value===!0?" q-drawer--top-padding":""))),be=o(()=>{const e=d.lang.rtl===!0?t.side:P.value;return[[J,qe,void 0,{[e]:!0,mouse:!0}]]}),we=o(()=>{const e=d.lang.rtl===!0?P.value:t.side;return[[J,Z,void 0,{[e]:!0,mouse:!0}]]}),ge=o(()=>{const e=d.lang.rtl===!0?P.value:t.side;return[[J,Z,void 0,{[e]:!0,mouse:!0,mouseAllDir:!0}]]});function R(){xe(r,t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint)}s(r,e=>{e===!0?(D=i.value,i.value===!0&&_(!1)):t.overlay===!1&&t.behavior!=="mobile"&&D!==!1&&(i.value===!0?(h(0),g(0),j()):A(!1))}),s(()=>t.side,(e,u)=>{a.instances[u]===L&&(a.instances[u]=void 0,a[u].space=!1,a[u].offset=0),a.instances[e]=L,a[e].size=v.value,a[e].space=W.value,a[e].offset=F.value}),s(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&R()}),s(()=>t.behavior+t.breakpoint,R),s(a.isContainer,e=>{i.value===!0&&T(e!==!0),e===!0&&R()}),s(a.scrollbarWidth,()=>{h(i.value===!0?0:void 0)}),s(F,e=>{k("offset",e)}),s(W,e=>{f("on-layout",e),k("space",e)}),s(w,()=>{h()}),s(v,e=>{h(),E(t.miniToOverlay,e)}),s(()=>t.miniToOverlay,e=>{E(e,v.value)}),s(()=>d.lang.rtl,()=>{h()}),s(()=>t.mini,()=>{t.modelValue===!0&&(ke(),a.animate())}),s(m,e=>{f("mini-state",e)});function h(e){e===void 0?p(()=>{e=i.value===!0?0:v.value,h($.value*e)}):(a.isContainer.value===!0&&w.value===!0&&(r.value===!0||Math.abs(e)===v.value)&&(e+=$.value*a.scrollbarWidth.value),G.value=e)}function g(e){X.value=e}function U(e){const u=e===!0?"remove":a.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function ke(){clearTimeout(M),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),I.value=!0,M=setTimeout(()=>{I.value=!1,n&&n.proxy&&n.proxy.$el&&n.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function qe(e){if(i.value!==!1)return;const u=v.value,c=H(e.distance.x,0,u);if(e.isFinal===!0){c>=Math.min(75,u)===!0?A():(a.animate(),g(0),h($.value*u)),S.value=!1;return}h((d.lang.rtl===!0?w.value!==!0:w.value)?Math.max(u-c,0):Math.min(0,c-u)),g(H(c/u,0,1)),e.isFirst===!0&&(S.value=!0)}function Z(e){if(i.value!==!0)return;const u=v.value,c=e.direction===t.side,Q=(d.lang.rtl===!0?c!==!0:c)?H(e.distance.x,0,u):0;if(e.isFinal===!0){Math.abs(Q)<Math.min(75,u)===!0?(a.animate(),g(1),h(0)):_(),S.value=!1;return}h($.value*Q),g(H(1-Q/u,0,1)),e.isFirst===!0&&(S.value=!0)}function j(){T(!1),U(!0)}function k(e,u){a.update(t.side,e,u)}function xe(e,u){e.value!==u&&(e.value=u)}function E(e,u){k("size",e===!0?t.miniWidth:u)}return a.instances[t.side]=L,E(t.miniToOverlay,v.value),k("space",W.value),k("offset",F.value),t.showIfAbove===!0&&t.modelValue!==!0&&i.value===!0&&t["onUpdate:modelValue"]!==void 0&&f("update:modelValue",!0),Me(()=>{f("on-layout",W.value),f("mini-state",m.value),D=t.showIfAbove===!0;const e=()=>{(i.value===!0?l:y)(!1,!0)};if(a.totalWidth.value!==0){p(e);return}C=s(a.totalWidth,()=>{C(),C=void 0,i.value===!1&&t.showIfAbove===!0&&r.value===!1?A(!1):e()})}),le(()=>{C!==void 0&&C(),clearTimeout(M),i.value===!0&&j(),a.instances[t.side]===L&&(a.instances[t.side]=void 0,k("size",0),k("offset",0),k("space",!1))}),()=>{const e=[];r.value===!0&&(t.noSwipeOpen===!1&&e.push(Ve(x("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),be.value)),e.push(ee("div",{ref:"backdrop",class:de.value,style:ve.value,"aria-hidden":"true",onClick:_},void 0,"backdrop",t.noSwipeBackdrop!==!0&&i.value===!0,()=>ge.value)));const u=m.value===!0&&B.mini!==void 0,c=[x("div",{...O,key:""+u,class:[me.value,O.class]},u===!0?B.mini():ae(B.default))];return t.elevated===!0&&i.value===!0&&c.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(ee("aside",{ref:"content",class:ye.value,style:he.value},c,"contentclose",t.noSwipeClose!==!0&&r.value===!0,()=>we.value)),x("div",{class:"q-drawer-container"},e)}}});export{Ae as Q,Ie as a,Fe as b};
