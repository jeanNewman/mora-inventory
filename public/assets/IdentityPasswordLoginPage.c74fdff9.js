import{l as i,s as u,t as s,d as a,j as e,m as v,x as y,y as r,Q as _,z as m,V as x,W as h,n as d}from"./index.fbcfccda.js";import{Q}from"./QPage.6f7661b3.js";import{Q as C,a as b}from"./QLayout.f93f145a.js";import{u as k,_ as L}from"./useLogin.8f42e7f6.js";import{_ as P}from"./ErrorsBanner.8ae8f481.js";import"./QResizeObserver.1fe933b9.js";import"./QBanner.e2b4b5c5.js";var B="/assets/profile.cb41aaa0.svg";const V={key:0},$={__name:"LoginCard",setup(c){const{onLoginClicked:o,form:t,loading:p,errors:f,validationErrors:g,hasValidationErrors:w}=k();return(E,l)=>(i(),u(e(m),null,{default:s(()=>[a(e(r),{class:"text-center"},{default:s(()=>[a(L,{email:e(t).email,"onUpdate:email":l[0]||(l[0]=n=>e(t).email=n),password:e(t).password,"onUpdate:password":l[1]||(l[1]=n=>e(t).password=n),"validation-errors":e(g)},null,8,["email","password","validation-errors"]),e(w)?y("",!0):(i(),v("div",V,[a(P,{errors:e(f)},null,8,["errors"])]))]),_:1}),a(e(_),{loading:e(p),class:"full-width",color:"primary",label:"login",unelevated:"",onClick:e(o)},null,8,["loading","onClick"])]),_:1}))}};const q=d("img",{src:B},null,-1),z=d("div",{class:"text-center q-pt-lg"},[d("div",{class:"col text-h6 ellipsis"}," Log in ")],-1),W={__name:"IdentityPasswordLoginPage",setup(c){return(o,t)=>(i(),u(C,null,{default:s(()=>[a(b,null,{default:s(()=>[a(Q,{class:"flex bg-image flex-center"},{default:s(()=>[a(m,{style:x(o.$q.screen.lt.sm?{width:"80%"}:{width:"30%"})},{default:s(()=>[a(r,null,{default:s(()=>[a(h,{size:"103px",class:"absolute-center shadow-10"},{default:s(()=>[q]),_:1})]),_:1}),a(r,null,{default:s(()=>[z]),_:1}),a(r,null,{default:s(()=>[a($),a(_,{class:"full-width q-mt-md",color:"grey-6",label:"forgot password",flat:"",to:{name:"auth.requestPasswordReset"}},null,8,["to"])]),_:1})]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}))}};export{W as default};
