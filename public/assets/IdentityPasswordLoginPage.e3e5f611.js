import{k as i,l as u,m as s,d as a,j as e,n as v,p as x,Q as r,q as _,s as m,t as y,v as h,x as d}from"./index.cf0f49d2.js";import{Q}from"./QPage.dee7b0df.js";import{Q as k,a as C}from"./QLayout.9266d96c.js";import{u as b,_ as L}from"./useLogin.eef426f9.js";import{_ as P}from"./ErrorsBanner.72fe4031.js";import"./QResizeObserver.458075a7.js";import"./QBanner.888145eb.js";var q="/assets/profile.cb41aaa0.svg";const B={key:0},$={__name:"LoginCard",setup(c){const{onLoginClicked:o,form:t,loading:p,errors:f,validationErrors:g,hasValidationErrors:w}=b();return(N,l)=>(i(),u(e(m),null,{default:s(()=>[a(e(r),{class:"text-center"},{default:s(()=>[a(L,{email:e(t).email,"onUpdate:email":l[0]||(l[0]=n=>e(t).email=n),password:e(t).password,"onUpdate:password":l[1]||(l[1]=n=>e(t).password=n),"validation-errors":e(g)},null,8,["email","password","validation-errors"]),e(w)?x("",!0):(i(),v("div",B,[a(P,{errors:e(f)},null,8,["errors"])]))]),_:1}),a(e(_),{loading:e(p),class:"full-width",color:"primary",label:"login",unelevated:"",onClick:e(o)},null,8,["loading","onClick"])]),_:1}))}};const V=d("img",{src:q},null,-1),E=d("div",{class:"text-center q-pt-lg"},[d("div",{class:"col text-h6 ellipsis"}," Log in ")],-1),D={__name:"IdentityPasswordLoginPage",setup(c){return(o,t)=>(i(),u(k,null,{default:s(()=>[a(C,null,{default:s(()=>[a(Q,{class:"flex bg-image flex-center"},{default:s(()=>[a(m,{style:y(o.$q.screen.lt.sm?{width:"80%"}:{width:"30%"})},{default:s(()=>[a(r,null,{default:s(()=>[a(h,{size:"103px",class:"absolute-center shadow-10"},{default:s(()=>[V]),_:1})]),_:1}),a(r,null,{default:s(()=>[E]),_:1}),a(r,null,{default:s(()=>[a($),a(_,{class:"full-width q-mt-md",color:"grey-6",label:"forgot password",flat:"",to:{name:"auth.requestPasswordReset"}},null,8,["to"])]),_:1})]),_:1},8,["style"])]),_:1})]),_:1})]),_:1}))}};export{D as default};
