import{y as u,a5 as v,a6 as b,c as o,h as n,z as r,g as m}from"./index.12e37f59.js";var _=u({name:"QBanner",props:{...v,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:a}){const c=m(),i=b(e,c.proxy.$q),d=o(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(i.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),l=o(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const s=[n("div",{class:"q-banner__avatar col-auto row items-center self-start"},r(a.avatar)),n("div",{class:"q-banner__content col text-body2"},r(a.default))],t=r(a.action);return t!==void 0&&s.push(n("div",{class:l.value},t)),n("div",{class:d.value+(e.inlineActions===!1&&t!==void 0?" q-banner--top-padding":""),role:"alert"},s)}}});export{_ as Q};
