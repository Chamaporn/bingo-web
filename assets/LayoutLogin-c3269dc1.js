import{V,_ as x}from"./VApp-ca569c71.js";import{p as B,x as I,g as S,M as F,B as i,s as P,b as s,a as t,N as R,_ as w,o as m,c as f,w as l,Y as N,Z as $,$ as z,W as a}from"./index-9f2b5235.js";import{d as L,e as T,m as j,a as A,f as D,g as E,b as H,c as M,V as _}from"./VRow-4b8cd9cd.js";import{m as O,a as U,b as W,u as Y}from"./tag-f0012e75.js";import{m as Z,u as q}from"./VMain-8ed88d3c.js";const G=B({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...L(),...O(),...T(),...Z(),...j(),...U({tag:"footer"}),...I()},"VFooter"),J=S()({name:"VFooter",props:G(),setup(e,n){let{slots:r}=n;const{themeClasses:h}=F(e),{backgroundColorClasses:p,backgroundColorStyles:g}=A(i(e,"color")),{borderClasses:v}=D(e),{elevationClasses:y}=E(e),{roundedClasses:b}=H(e),c=P(32),{resizeRef:k}=W(d=>{d.length&&(c.value=d[0].target.clientHeight)}),u=s(()=>e.height==="auto"?c.value:parseInt(e.height,10)),{layoutItemStyles:C}=q({id:e.name,order:s(()=>parseInt(e.order,10)),position:s(()=>"bottom"),layoutSize:u,elementSize:s(()=>e.height==="auto"?void 0:u.value),active:s(()=>e.app),absolute:i(e,"absolute")});return Y(()=>t(e.tag,{ref:k,class:["v-footer",h.value,p.value,v.value,y.value,b.value,e.class],style:[g.value,e.app?C.value:{height:R(e.height)},e.style]},r)),{}}}),K={},o=e=>($("data-v-8164818e"),e=e(),z(),e),Q=o(()=>a("span",{class:"footer-label"},"สำนักงานพัฒนาธุรกรรมทางอิเล็กทรอนิกส์",-1)),X=o(()=>a("span",{class:"footer-label"},"อาคารเดอะ ไนน์ ทาวเวอร์ แกรนด์ พระรามเก้า (อาคารบี)",-1)),ee=o(()=>a("span",{class:"footer-label"},"33/4 ถนนพระราม 9 แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310",-1)),te=o(()=>a("span",{class:"footer-label"},"เบอร์ : 02 123 1234",-1)),ae=o(()=>a("span",{class:"footer-label"},"แฟกซ์ : 02 123 1200",-1)),oe=o(()=>a("span",{class:"footer-label"},"อีเมล : helpdesk@etda.or.th",-1));function se(e,n){return e.$vuetify.display.smAndDown?N("",!0):(m(),f(J,{key:0,class:"d-flex justify-center pt-1 pb-1",color:"primary lighten-1",padless:"",app:""},{default:l(()=>[t(M,{justify:"center","no-gutters":""},{default:l(()=>[t(_,{class:"d-flex flex-column",cols:"4"},{default:l(()=>[Q,X,ee]),_:1}),t(_,{class:"d-flex flex-column",cols:"2"},{default:l(()=>[te,ae,oe]),_:1})]),_:1})]),_:1}))}const le=w(K,[["render",se],["__scopeId","data-v-8164818e"]]),ie={__name:"LayoutLogin",setup(e){return(n,r)=>(m(),f(V,null,{default:l(()=>[t(x),t(le)]),_:1}))}};export{ie as default};
