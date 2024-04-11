import{p as k,g as p,a,x as D,B as H,M as E,v as j,s as z,b as T,A as F,N as i,_ as L,o as M,c as U,w as l,W as v,Z as W,$ as Z}from"./index-8afcba10.js";import{V as q}from"./VMain-c9a8766a.js";import{d as G,e as J,m as K,a as O,f as Q,g as X,b as Y,c as u,V as m}from"./VRow-2c7bec39.js";import{f as ee,g as f,h as te,e as ae,V as le,d as oe}from"./VCard-7577a35d.js";import{m as C,a as B,u as S}from"./tag-f408201e.js";import{e as se,d as ne}from"./VBtn-65e72abf.js";const ie=k({text:String,...C(),...B()},"VToolbarTitle"),de=p()({name:"VToolbarTitle",props:ie(),setup(e,s){let{slots:t}=s;return S(()=>{const n=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[n&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),ce=[null,"prominent","default","comfortable","compact"],re=k({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ce.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...G(),...C(),...J(),...K(),...B({tag:"header"}),...D()},"VToolbar"),ue=p()({name:"VToolbar",props:re(),setup(e,s){var _;let{slots:t}=s;const{backgroundColorClasses:n,backgroundColorStyles:o}=O(H(e,"color")),{borderClasses:g}=Q(e),{elevationClasses:I}=X(e),{roundedClasses:N}=Y(e),{themeClasses:P}=E(e),{rtlClasses:$}=j(),d=z(!!(e.extended||(_=t.extension)!=null&&_.call(t))),c=T(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),r=T(()=>d.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return F({VBtn:{variant:"text"}}),S(()=>{var h;const A=!!(e.title||t.title),R=!!(t.image||e.image),b=(h=t.extension)==null?void 0:h.call(t);return d.value=!!(e.extended||b),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,g.value,I.value,N.value,P.value,$.value,e.class],style:[o.value,e.style]},{default:()=>[R&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(f,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(ee,{key:"image-img",cover:!0,src:e.image},null)]),a(f,{defaults:{VTabs:{height:i(c.value)}}},{default:()=>{var y,x,V;return[a("div",{class:"v-toolbar__content",style:{height:i(c.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(y=t.prepend)==null?void 0:y.call(t)]),A&&a(de,{key:"title",text:e.title},{text:t.title}),(x=t.default)==null?void 0:x.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(V=t.append)==null?void 0:V.call(t)])])]}}),a(f,{defaults:{VTabs:{height:i(r.value)}}},{default:()=>[a(se,null,{default:()=>[d.value&&a("div",{class:"v-toolbar__extension",style:{height:i(r.value)}},[b])]})]})]})}),{contentHeight:c,extensionHeight:r}}}),me=te("v-spacer","div","VSpacer");const fe={},w=e=>(W("data-v-eb8a32f7"),e=e(),Z(),e),ve=w(()=>v("label",{class:"text-white v-text-head"}," เข้าสู่ระบบ ",-1)),ge={class:"d-flex"},_e=w(()=>v("span",null," Azure AD",-1));function be(e,s,t,n,o,g){return M(),U(q,null,{default:l(()=>[a(oe,null,{default:l(()=>[a(u,{class:"justify-center pt-12"},{default:l(()=>[a(m,{cols:e.$vuetify.display.smAndDown?7:4},{default:l(()=>[a(ae,{style:{"vertical-align":"center"},height:"300px",class:"pt-",elevation:"1"},{default:l(()=>[a(ue,{color:"primary"},{default:l(()=>[a(u,{class:"justify-center"},{default:l(()=>[ve]),_:1})]),_:1}),v("div",ge,[a(m,{class:"pt-13"},{default:l(()=>[a(u,{class:"justify-center pt-8"},{default:l(()=>[a(m,{cols:e.$vuetify.display.smAndDown?10:8},{default:l(()=>[a(ne,{block:"",rounded:"",height:"45",size:"x-large",color:"#1565C0",elevation:"1"},{default:l(()=>[a(le,{icon:"mdi-microsoft-windows",color:"white",class:"pr-5"}),_e]),_:1})]),_:1},8,["cols"])]),_:1})]),_:1})]),a(me)]),_:1})]),_:1},8,["cols"])]),_:1})]),_:1})]),_:1})}const pe=L(fe,[["render",be],["__scopeId","data-v-eb8a32f7"]]);export{pe as default};
