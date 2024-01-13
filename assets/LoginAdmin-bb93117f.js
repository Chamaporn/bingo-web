import{p,g as h,a as o,T as j,x as P,y as $,z as F,m as q,h as O,f as G,v as J,s as M,i as A,A as U,j as v,_ as W,o as K,c as Q,w as r,d as V,l as X,q as Y}from"./index-5efdf56c.js";import{V as Z}from"./VMain-09d4ec31.js";import{m as ee,b as te,c as ae,u as ne,d as oe,e as se,f as ie,a as _,V as b}from"./VRow-29b47302.js";import{b as le,c as x,d as re,a as de,e as ce,V as ue}from"./VCard-b67abc28.js";import{m as I,a as L,b as E}from"./tag-19b40855.js";import{V as fe}from"./VBtn-0a0bb054.js";const me=p({text:String,...I(),...L()},"VToolbarTitle"),ye=h()({name:"VToolbarTitle",props:me(),setup(e,c){let{slots:t}=c;return E(()=>{const s=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[s&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),ge=p({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function i(e,c,t){return h()({name:e,props:ge({mode:t,origin:c}),setup(s,l){let{slots:d}=l;const a={onBeforeEnter(n){s.origin&&(n.style.transformOrigin=s.origin)},onLeave(n){if(s.leaveAbsolute){const{offsetTop:u,offsetLeft:y,offsetWidth:f,offsetHeight:m}=n;n._transitionInitialStyles={position:n.style.position,top:n.style.top,left:n.style.left,width:n.style.width,height:n.style.height},n.style.position="absolute",n.style.top=`${u}px`,n.style.left=`${y}px`,n.style.width=`${f}px`,n.style.height=`${m}px`}s.hideOnLeave&&n.style.setProperty("display","none","important")},onAfterLeave(n){if(s.leaveAbsolute&&(n!=null&&n._transitionInitialStyles)){const{position:u,top:y,left:f,width:m,height:g}=n._transitionInitialStyles;delete n._transitionInitialStyles,n.style.position=u||"",n.style.top=y||"",n.style.left=f||"",n.style.width=m||"",n.style.height=g||""}}};return()=>{const n=s.group?j:P;return $(n,{name:s.disabled?"":e,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:a},d.default)}}})}function N(e,c){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return h()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(s,l){let{slots:d}=l;return()=>$(P,{name:s.disabled?"":e,css:!s.disabled,...s.disabled?{}:c},d.default)}})}function H(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=F(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const n=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const u=`${a[s]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=n.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=u})},onAfterEnter:d,onEnterCancelled:d,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[s]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:l,onLeaveCancelled:l};function l(a){e&&a._parent&&a._parent.classList.remove(e),d(a)}function d(a){const n=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,n!=null&&(a.style[t]=n),delete a._initialStyle}}i("fab-transition","center center","out-in");i("dialog-bottom-transition");i("dialog-top-transition");i("fade-transition");i("scale-transition");i("scroll-x-transition");i("scroll-x-reverse-transition");i("scroll-y-transition");i("scroll-y-reverse-transition");i("slide-x-transition");i("slide-x-reverse-transition");i("slide-y-transition");i("slide-y-reverse-transition");const ve=N("expand-transition",H());N("expand-x-transition",H("",!0));const he=[null,"prominent","default","comfortable","compact"],_e=p({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>he.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ee(),...I(),...te(),...ae(),...L({tag:"header"}),...q()},"VToolbar"),be=h()({name:"VToolbar",props:_e(),setup(e,c){var T;let{slots:t}=c;const{backgroundColorClasses:s,backgroundColorStyles:l}=ne(O(e,"color")),{borderClasses:d}=oe(e),{elevationClasses:a}=se(e),{roundedClasses:n}=ie(e),{themeClasses:u}=G(e),{rtlClasses:y}=J(),f=M(!!(e.extended||(T=t.extension)!=null&&T.call(t))),m=A(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=A(()=>f.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return U({VBtn:{variant:"text"}}),E(()=>{var w;const z=!!(e.title||t.title),D=!!(t.image||e.image),S=(w=t.extension)==null?void 0:w.call(t);return f.value=!!(e.extended||S),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,d.value,a.value,n.value,u.value,y.value,e.class],style:[l.value,e.style]},{default:()=>[D&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(x,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(le,{key:"image-img",cover:!0,src:e.image},null)]),o(x,{defaults:{VTabs:{height:v(m.value)}}},{default:()=>{var B,C,k;return[o("div",{class:"v-toolbar__content",style:{height:v(m.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(B=t.prepend)==null?void 0:B.call(t)]),z&&o(ye,{key:"title",text:e.title},{text:t.title}),(C=t.default)==null?void 0:C.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(k=t.append)==null?void 0:k.call(t)])])]}}),o(x,{defaults:{VTabs:{height:v(g.value)}}},{default:()=>[o(ve,null,{default:()=>[f.value&&o("div",{class:"v-toolbar__extension",style:{height:v(g.value)}},[S])]})]})]})}),{contentHeight:m,extensionHeight:g}}}),xe=re("v-spacer","div","VSpacer");const pe={},R=e=>(X("data-v-eb8a32f7"),e=e(),Y(),e),Ve=R(()=>V("label",{class:"text-white v-text-head"}," เข้าสู่ระบบ ",-1)),Te={class:"d-flex"},Se=R(()=>V("span",null," Azure AD",-1));function we(e,c,t,s,l,d){return K(),Q(Z,null,{default:r(()=>[o(ue,null,{default:r(()=>[o(_,{class:"justify-center pt-12"},{default:r(()=>[o(b,{cols:e.$vuetify.display.smAndDown?7:4},{default:r(()=>[o(de,{style:{"vertical-align":"center"},height:"300px",class:"pt-",elevation:"1"},{default:r(()=>[o(be,{color:"primary"},{default:r(()=>[o(_,{class:"justify-center"},{default:r(()=>[Ve]),_:1})]),_:1}),V("div",Te,[o(b,{class:"pt-13"},{default:r(()=>[o(_,{class:"justify-center pt-8"},{default:r(()=>[o(b,{cols:e.$vuetify.display.smAndDown?10:8},{default:r(()=>[o(fe,{block:"",rounded:"",height:"45",size:"x-large",color:"#1565C0",elevation:"1"},{default:r(()=>[o(ce,{icon:"mdi-microsoft-windows",color:"white",class:"pr-5"}),Se]),_:1})]),_:1},8,["cols"])]),_:1})]),_:1})]),o(xe)]),_:1})]),_:1},8,["cols"])]),_:1})]),_:1})]),_:1})}const Ie=W(pe,[["render",we],["__scopeId","data-v-eb8a32f7"]]);export{Ie as default};
