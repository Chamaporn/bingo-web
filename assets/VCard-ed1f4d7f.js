import{h as qe,u as ye,m as ee,a as le,b as te,d as Ye,e as Ue,f as Ke,g as Ge}from"./VRow-742d5a50.js";import{m as V,u as x,a as W}from"./tag-7e39b9b0.js";import{a9 as K,g as w,aa as Je,a4 as Qe,a3 as be,ab as Ze,A as pe,p as b,b as m,N as h,a as l,F as _e,a2 as Se,ac as ne,s as R,r as ae,q as X,k as et,t as tt,G,H as Ce,J as ke,L as nt,e as j,j as oe,ad as at,I as N,x as Y,M as U,ae as it,B as we,af as st,ag as rt,l as lt,v as ie,f as ot,ah as ut,ai as ue,aj as ct,ak as ce}from"./index-559b1c29.js";const dt=["top","bottom"],vt=["start","end","left","right"];function mt(e,n){let[t,a]=e.split(" ");return a||(a=K(dt,t)?"start":K(vt,t)?"top":"center"),{side:de(t,n),align:de(a,n)}}function de(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function se(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return w()({name:t??Je(Qe(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...V()},setup(a,s){let{slots:i}=s;return()=>{var r;return be(a.tag,{class:[e,a.class],style:a.style},(r=i.default)==null?void 0:r.call(i))}}})}const ft=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),J=w(!1)({name:"VDefaultsProvider",props:ft(),setup(e,n){let{slots:t}=n;const{defaults:a,disabled:s,reset:i,root:r,scoped:o}=Ze(e);return pe(a,{reset:i,root:r,scoped:o,disabled:s}),()=>{var u;return(u=t.default)==null?void 0:u.call(t)}}});const Ve=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ie(e){return{dimensionStyles:m(()=>({height:h(e.height),maxHeight:h(e.maxHeight),maxWidth:h(e.maxWidth),minHeight:h(e.minHeight),minWidth:h(e.minWidth),width:h(e.width)}))}}function gt(e){return{aspectStyles:m(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const xe=b({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...V(),...Ve()},"VResponsive"),ve=w()({name:"VResponsive",props:xe(),setup(e,n){let{slots:t}=n;const{aspectStyles:a}=gt(e),{dimensionStyles:s}=Ie(e);return x(()=>{var i;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[l("div",{class:"v-responsive__sizer",style:a.value},null),(i=t.additional)==null?void 0:i.call(t),t.default&&l("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),ht=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),F=(e,n)=>{let{slots:t}=n;const{transition:a,disabled:s,...i}=e,{component:r=Se,...o}=typeof a=="object"?a:{};return be(r,_e(typeof a=="string"?{name:s?"":a}:o,i,{disabled:s}),t)};function yt(e,n){if(!ne)return;const t=n.modifiers||{},a=n.value,{handler:s,options:i}=typeof a=="object"?a:{handler:a,options:{}},r=new IntersectionObserver(function(){var g;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const c=(g=e._observe)==null?void 0:g[n.instance.$.uid];if(!c)return;const v=o.some(y=>y.isIntersecting);s&&(!t.quiet||c.init)&&(!t.once||v||c.init)&&s(v,o,u),v&&t.once?Le(e,n):c.init=!0},i);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Le(e,n){var a;const t=(a=e._observe)==null?void 0:a[n.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const bt={mounted:yt,unmounted:Le},pt=bt,_t=b({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...xe(),...V(),...ht()},"VImg"),Pe=w()({name:"VImg",directives:{intersect:pt},props:_t(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:t,slots:a}=n;const s=R(""),i=ae(),r=R(e.eager?"loading":"idle"),o=R(),u=R(),c=m(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=m(()=>c.value.aspect||o.value/u.value||0);X(()=>e.src,()=>{g(r.value!=="idle")}),X(v,(d,f)=>{!d&&f&&i.value&&k(i.value)}),et(()=>g());function g(d){if(!(e.eager&&d)&&!(ne&&!d&&!e.eager)){if(r.value="loading",c.value.lazySrc){const f=new Image;f.src=c.value.lazySrc,k(f,null)}c.value.src&&tt(()=>{var f,C;if(t("loadstart",((f=i.value)==null?void 0:f.currentSrc)||c.value.src),(C=i.value)!=null&&C.complete){if(i.value.naturalWidth||p(),r.value==="error")return;v.value||k(i.value,null),y()}else v.value||k(i.value),z()})}}function y(){var d;z(),r.value="loaded",t("load",((d=i.value)==null?void 0:d.currentSrc)||c.value.src)}function p(){var d;r.value="error",t("error",((d=i.value)==null?void 0:d.currentSrc)||c.value.src)}function z(){const d=i.value;d&&(s.value=d.currentSrc||d.src)}let L=-1;function k(d){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const C=()=>{clearTimeout(L);const{naturalHeight:A,naturalWidth:I}=d;A||I?(o.value=I,u.value=A):!d.complete&&r.value==="loading"&&f!=null?L=window.setTimeout(C,f):(d.currentSrc.endsWith(".svg")||d.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,u.value=1)};C()}const P=m(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),_=()=>{var C;if(!c.value.src||r.value==="idle")return null;const d=l("img",{class:["v-img__img",P.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:i,onLoad:y,onError:p},null),f=(C=a.sources)==null?void 0:C.call(a);return l(F,{transition:e.transition,appear:!0},{default:()=>[G(f?l("picture",{class:"v-img__picture"},[f,d]):d,[[nt,r.value==="loaded"]])]})},B=()=>l(F,{transition:e.transition},{default:()=>[c.value.lazySrc&&r.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",P.value],src:c.value.lazySrc,alt:e.alt},null)]}),$=()=>a.placeholder?l(F,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!a.error)&&l("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,T=()=>a.error?l(F,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&l("div",{class:"v-img__error"},[a.error()])]}):null,O=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,E=R(!1);{const d=X(v,f=>{f&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{E.value=!0})}),d())})}return x(()=>{const[d]=ve.filterProps(e);return G(l(ve,_e({class:["v-img",{"v-img--booting":!E.value},e.class],style:[{width:h(e.width==="auto"?o.value:e.width)},e.style]},d,{aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(ke,null,[l(_,null,null),l(B,null,null),l(O,null,null),l($,null,null),l(T,null,null)]),default:a.default}),[[Ce("intersect"),{handler:g,options:e.options},null,{once:!0}]])}),{currentSrc:s,image:i,state:r,naturalWidth:o,naturalHeight:u}}}),St=[null,"default","comfortable","compact"],re=b({density:{type:String,default:"default",validator:e=>St.includes(e)}},"density");function Te(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j();return{densityClasses:m(()=>`${n}--density-${e.density}`)}}const Ct=["elevated","flat","tonal","outlined","text","plain"];function Be(e,n){return l(ke,null,[e&&l("span",{key:"overlay",class:`${n}__overlay`},null),l("span",{key:"underlay",class:`${n}__underlay`},null)])}const $e=b({color:String,variant:{type:String,default:"elevated",validator:e=>Ct.includes(e)}},"variant");function Ee(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j();const t=m(()=>{const{variant:i}=oe(e);return`${n}--variant-${i}`}),{colorClasses:a,colorStyles:s}=qe(m(()=>{const{variant:i,color:r}=oe(e);return{[["elevated","flat"].includes(i)?"background":"text"]:r}}));return{colorClasses:a,colorStyles:s,variantClasses:t}}const kt=["x-small","small","default","large","x-large"],ze=b({size:{type:[String,Number],default:"default"}},"size");function Ae(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j();return at(()=>{let t,a;return K(kt,e.size)?t=`${n}--size-${e.size}`:e.size&&(a={width:h(e.size),height:h(e.size)}),{sizeClasses:t,sizeStyles:a}})}const wt=b({color:String,start:Boolean,end:Boolean,icon:N,...V(),...ze(),...W({tag:"i"}),...Y()},"VIcon"),Vt=w()({name:"VIcon",props:wt(),setup(e,n){let{attrs:t,slots:a}=n;const s=ae(),{themeClasses:i}=U(e),{iconData:r}=it(m(()=>s.value||e.icon)),{sizeClasses:o}=Ae(e),{textColorClasses:u,textColorStyles:c}=ye(we(e,"color"));return x(()=>{var g,y;const v=(g=a.default)==null?void 0:g.call(a);return v&&(s.value=(y=st(v).filter(p=>p.type===rt&&p.children&&typeof p.children=="string")[0])==null?void 0:y.children),l(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",i.value,o.value,u.value,{"v-icon--clickable":!!t.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},c.value,e.style],role:t.onClick?"button":void 0,"aria-hidden":!t.onClick},{default:()=>[v]})}),{}}});function It(e,n){const t=ae(),a=R(!1);if(ne){const s=new IntersectionObserver(i=>{e==null||e(i,s),a.value=!!i.find(r=>r.isIntersecting)},n);lt(()=>{s.disconnect()}),X(t,(i,r)=>{r&&(s.unobserve(r),a.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:t,isIntersecting:a}}const me={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Re=b({location:String},"location");function Ne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=ie();return{locationStyles:m(()=>{if(!e.location)return{};const{side:i,align:r}=mt(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(c){return t?t(c):0}const u={};return i!=="center"&&(n?u[me[i]]=`calc(100% - ${o(i)}px)`:u[i]=0),r!=="center"?n?u[me[r]]=`calc(100% - ${o(r)}px)`:u[r]=0:(i==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),u})}}const xt=b({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...V(),...Re({location:"top"}),...ee(),...W(),...Y()},"VProgressLinear"),Lt=w()({name:"VProgressLinear",props:xt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=ot(e,"modelValue"),{isRtl:s,rtlClasses:i}=ie(),{themeClasses:r}=U(e),{locationStyles:o}=Ne(e),{textColorClasses:u,textColorStyles:c}=ye(e,"color"),{backgroundColorClasses:v,backgroundColorStyles:g}=le(m(()=>e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:p}=le(e,"color"),{roundedClasses:z}=te(e),{intersectionRef:L,isIntersecting:k}=It(),P=m(()=>parseInt(e.max,10)),_=m(()=>parseInt(e.height,10)),B=m(()=>parseFloat(e.bufferValue)/P.value*100),$=m(()=>parseFloat(a.value)/P.value*100),T=m(()=>s.value!==e.reverse),O=m(()=>e.indeterminate?"fade-transition":"slide-x-transition"),E=m(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function d(f){if(!L.value)return;const{left:C,right:A,width:I}=L.value.getBoundingClientRect(),M=T.value?I-f.clientX+(A-I):f.clientX-C;a.value=Math.round(M/I*P.value)}return x(()=>l(e.tag,{ref:L,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&k.value,"v-progress-linear--reverse":T.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},z.value,r.value,i.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(_.value):0,"--v-progress-linear-height":h(_.value),...o.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:$.value,onClick:e.clickable&&d},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...c.value,[T.value?"left":"right"]:h(-_.value),borderTop:`${h(_.value/2)} dotted`,opacity:E.value,top:`calc(50% - ${h(_.value/4)})`,width:h(100-B.value,"%"),"--v-progress-linear-stream-to":h(_.value*(T.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",v.value],style:[g.value,{opacity:E.value,width:h(e.stream?B.value:100,"%")}]},null),l(Se,{name:O.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(f=>l("div",{key:f,class:["v-progress-linear__indeterminate",f,y.value],style:p.value},null))]):l("div",{class:["v-progress-linear__determinate",y.value],style:[p.value,{width:h($.value,"%")}]},null)]}),t.default&&l("div",{class:"v-progress-linear__content"},[t.default({value:$.value,buffer:B.value})])]})),{}}}),Pt=b({loading:[Boolean,String]},"loader");function Tt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j();return{loaderClasses:m(()=>({[`${n}--loading`]:e.loading}))}}function Bt(e,n){var a;let{slots:t}=n;return l("div",{class:`${e.name}__loader`},[((a=t.default)==null?void 0:a.call(t,{color:e.color,isActive:e.active}))||l(Lt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const $t=["static","relative","fixed","absolute","sticky"],Et=b({position:{type:String,validator:e=>$t.includes(e)}},"position");function zt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:j();return{positionClasses:m(()=>e.position?`${n}--${e.position}`:void 0)}}function At(e,n){const t=ut("RouterLink"),a=m(()=>!!(e.href||e.to)),s=m(()=>(a==null?void 0:a.value)||ue(n,"click")||ue(e,"click"));if(typeof t=="string")return{isLink:a,isClickable:s,href:we(e,"href")};const i=e.to?t.useLink(e):void 0;return{isLink:a,isClickable:s,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&m(()=>{var r,o;return e.exact?(r=i.isExactActive)==null?void 0:r.value:(o=i.isActive)==null?void 0:o.value}),href:m(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const Rt=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");const Q=Symbol("rippleStop"),Nt=80;function fe(e,n){e.style.transform=n,e.style.webkitTransform=n}function Z(e){return e.constructor.name==="TouchEvent"}function Oe(e){return e.constructor.name==="KeyboardEvent"}const Ot=function(e,n){var g;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,s=0;if(!Oe(e)){const y=n.getBoundingClientRect(),p=Z(e)?e.touches[e.touches.length-1]:e;a=p.clientX-y.left,s=p.clientY-y.top}let i=0,r=.3;(g=n._ripple)!=null&&g.circle?(r=.15,i=n.clientWidth/2,i=t.center?i:i+Math.sqrt((a-i)**2+(s-i)**2)/4):i=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const o=`${(n.clientWidth-i*2)/2}px`,u=`${(n.clientHeight-i*2)/2}px`,c=t.center?o:`${a-i}px`,v=t.center?u:`${s-i}px`;return{radius:i,scale:r,x:c,y:v,centerX:o,centerY:u}},q={show(e,n){var p;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((p=n==null?void 0:n._ripple)!=null&&p.enabled))return;const a=document.createElement("span"),s=document.createElement("span");a.appendChild(s),a.className="v-ripple__container",t.class&&(a.className+=` ${t.class}`);const{radius:i,scale:r,x:o,y:u,centerX:c,centerY:v}=Ot(e,n,t),g=`${i*2}px`;s.className="v-ripple__animation",s.style.width=g,s.style.height=g,n.appendChild(a);const y=window.getComputedStyle(n);y&&y.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),fe(s,`translate(${o}, ${u}) scale3d(${r},${r},${r})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),fe(s,`translate(${c}, ${v}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const t=n[n.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const a=performance.now()-Number(t.dataset.activated),s=Math.max(250-a,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=t.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(t.parentNode)},300)},s)}};function He(e){return typeof e>"u"||!!e}function H(e){const n={},t=e.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||e[Q])){if(e[Q]=!0,Z(e))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(n.center=t._ripple.centered||Oe(e),t._ripple.class&&(n.class=t._ripple.class),Z(e)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{q.show(e,t,n)},t._ripple.showTimer=window.setTimeout(()=>{var a;(a=t==null?void 0:t._ripple)!=null&&a.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},Nt)}else q.show(e,t,n)}}function ge(e){e[Q]=!0}function S(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{S(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),q.hide(n)}}function De(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let D=!1;function We(e){!D&&(e.keyCode===ce.enter||e.keyCode===ce.space)&&(D=!0,H(e))}function je(e){D=!1,S(e)}function Me(e){D&&(D=!1,S(e))}function Fe(e,n,t){const{value:a,modifiers:s}=n,i=He(a);if(i||q.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,ct(a)&&a.class&&(e._ripple.class=a.class),i&&!t){if(s.stop){e.addEventListener("touchstart",ge,{passive:!0}),e.addEventListener("mousedown",ge);return}e.addEventListener("touchstart",H,{passive:!0}),e.addEventListener("touchend",S,{passive:!0}),e.addEventListener("touchmove",De,{passive:!0}),e.addEventListener("touchcancel",S),e.addEventListener("mousedown",H),e.addEventListener("mouseup",S),e.addEventListener("mouseleave",S),e.addEventListener("keydown",We),e.addEventListener("keyup",je),e.addEventListener("blur",Me),e.addEventListener("dragstart",S,{passive:!0})}else!i&&t&&Xe(e)}function Xe(e){e.removeEventListener("mousedown",H),e.removeEventListener("touchstart",H),e.removeEventListener("touchend",S),e.removeEventListener("touchmove",De),e.removeEventListener("touchcancel",S),e.removeEventListener("mouseup",S),e.removeEventListener("mouseleave",S),e.removeEventListener("keydown",We),e.removeEventListener("keyup",je),e.removeEventListener("dragstart",S),e.removeEventListener("blur",Me)}function Ht(e,n){Fe(e,n,!1)}function Dt(e){delete e._ripple,Xe(e)}function Wt(e,n){if(n.value===n.oldValue)return;const t=He(n.oldValue);Fe(e,n,t)}const jt={mounted:Ht,unmounted:Dt,updated:Wt},Mt=b({fluid:{type:Boolean,default:!1},...V(),...W()},"VContainer"),tn=w()({name:"VContainer",props:Mt(),setup(e,n){let{slots:t}=n;const{rtlClasses:a}=ie();return x(()=>l(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}});const Ft=w()({name:"VCardActions",props:V(),setup(e,n){let{slots:t}=n;return pe({VBtn:{variant:"text"}}),x(()=>{var a;return l("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Xt=se("v-card-subtitle"),qt=se("v-card-title");const Yt=b({start:Boolean,end:Boolean,icon:N,image:String,...V(),...re(),...ee(),...ze(),...W(),...Y(),...$e({variant:"flat"})},"VAvatar"),he=w()({name:"VAvatar",props:Yt(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=U(e),{colorClasses:s,colorStyles:i,variantClasses:r}=Ee(e),{densityClasses:o}=Te(e),{roundedClasses:u}=te(e),{sizeClasses:c,sizeStyles:v}=Ae(e);return x(()=>l(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,s.value,o.value,u.value,c.value,r.value,e.class],style:[i.value,v.value,e.style]},{default:()=>{var g;return[e.image?l(Pe,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?l(Vt,{key:"icon",icon:e.icon},null):(g=t.default)==null?void 0:g.call(t),Be(!1,"v-avatar")]}})),{}}}),Ut=b({appendAvatar:String,appendIcon:N,prependAvatar:String,prependIcon:N,subtitle:String,title:String,...V(),...re()},"VCardItem"),Kt=w()({name:"VCardItem",props:Ut(),setup(e,n){let{slots:t}=n;return x(()=>{var c;const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),r=!!(i||t.append),o=!!(e.title||t.title),u=!!(e.subtitle||t.subtitle);return l("div",{class:["v-card-item",e.class],style:e.style},[s&&l("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?l(J,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&l(he,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),l("div",{class:"v-card-item__content"},[o&&l(qt,{key:"title"},{default:()=>{var v;return[((v=t.title)==null?void 0:v.call(t))??e.title]}}),u&&l(Xt,{key:"subtitle"},{default:()=>{var v;return[((v=t.subtitle)==null?void 0:v.call(t))??e.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),r&&l("div",{key:"append",class:"v-card-item__append"},[t.append?l(J,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):i&&l(he,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Gt=se("v-card-text"),Jt=b({appendAvatar:String,appendIcon:N,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:N,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...Ye(),...V(),...re(),...Ve(),...Ue(),...Pt(),...Re(),...Et(),...ee(),...Rt(),...W(),...Y(),...$e({variant:"elevated"})},"VCard"),nn=w()({name:"VCard",directives:{Ripple:jt},props:Jt(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:s}=U(e),{borderClasses:i}=Ke(e),{colorClasses:r,colorStyles:o,variantClasses:u}=Ee(e),{densityClasses:c}=Te(e),{dimensionStyles:v}=Ie(e),{elevationClasses:g}=Ge(e),{loaderClasses:y}=Tt(e),{locationStyles:p}=Ne(e),{positionClasses:z}=zt(e),{roundedClasses:L}=te(e),k=At(e,t),P=m(()=>e.link!==!1&&k.isLink.value),_=m(()=>!e.disabled&&e.link!==!1&&(e.link||k.isClickable.value));return x(()=>{const B=P.value?"a":e.tag,$=!!(a.title||e.title),T=!!(a.subtitle||e.subtitle),O=$||T,E=!!(a.append||e.appendAvatar||e.appendIcon),d=!!(a.prepend||e.prependAvatar||e.prependIcon),f=!!(a.image||e.image),C=O||d||E,A=!!(a.text||e.text);return G(l(B,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":_.value},s.value,i.value,r.value,c.value,g.value,y.value,z.value,L.value,u.value,e.class],style:[o.value,v.value,p.value,e.style],href:k.href.value,onClick:_.value&&k.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[f&&l("div",{key:"image",class:"v-card__image"},[a.image?l(J,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):l(Pe,{key:"image-img",cover:!0,src:e.image},null)]),l(Bt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),C&&l(Kt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),A&&l(Gt,{key:"text"},{default:()=>{var M;return[((M=a.text)==null?void 0:M.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&l(Ft,null,{default:a.actions}),Be(_.value,"v-card")]}}),[[Ce("ripple"),_.value&&e.ripple]])}),{}}});export{pt as I,Bt as L,F as M,jt as R,Vt as V,re as a,Tt as b,Pt as c,tn as d,nn as e,Pe as f,J as g,se as h,$e as i,ze as j,Ae as k,It as l,ht as m,Ve as n,Re as o,Et as p,Rt as q,Ee as r,Ie as s,Ne as t,Te as u,zt as v,At as w,Be as x,Ft as y,qt as z};
