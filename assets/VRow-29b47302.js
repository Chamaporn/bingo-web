import{p as u,a1 as k,i as l,ae as c,a3 as O,af as v,ag as T,ah as _,ai as f,X as g,g as h,y as N}from"./index-5efdf56c.js";import{m as $,a as V}from"./tag-19b40855.js";const H=u({border:[Boolean,Number,String]},"border");function Q(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k();return{borderClasses:l(()=>{const t=c(e)?e.value:e.border,a=[];if(t===!0||t==="")a.push(`${s}--border`);else if(typeof t=="string"||t===0)for(const o of String(t).split(" "))a.push(`border-${o}`);return a})}}function j(e){return O(()=>{const s=[],n={};if(e.value.background)if(v(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text){const t=T(e.value.background);if(t.a==null||t.a===1){const a=_(t);n.color=a,n.caretColor=a}}}else s.push(`bg-${e.value.background}`);return e.value.text&&(v(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):s.push(`text-${e.value.text}`)),{colorClasses:s,colorStyles:n}})}function Z(e,s){const n=l(()=>({text:c(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:a}=j(n);return{textColorClasses:t,textColorStyles:a}}function p(e,s){const n=l(()=>({background:c(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:a}=j(n);return{backgroundColorClasses:t,backgroundColorStyles:a}}const ee=u({elevation:{type:[Number,String],validator(e){const s=parseInt(e);return!isNaN(s)&&s>=0&&s<=24}}},"elevation");function te(e){return{elevationClasses:l(()=>{const n=c(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const ne=u({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function se(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k();return{roundedClasses:l(()=>{const t=c(e)?e.value:e.rounded,a=[];if(t===!0||t==="")a.push(`${s}--rounded`);else if(typeof t=="string"||t===0)for(const o of String(t).split(" "))a.push(`rounded-${o}`);return a})}}const P=(()=>f.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),x=(()=>f.reduce((e,s)=>{const n="offset"+g(s);return e[n]={type:[String,Number],default:null},e},{}))(),L=(()=>f.reduce((e,s)=>{const n="order"+g(s);return e[n]={type:[String,Number],default:null},e},{}))(),m={col:Object.keys(P),offset:Object.keys(x),order:Object.keys(L)};function U(e,s,n){let t=e;if(!(n==null||n===!1)){if(s){const a=s.replace(e,"");t+=`-${a}`}return e==="col"&&(t="v-"+t),e==="col"&&(n===""||n===!0)||(t+=`-${n}`),t.toLowerCase()}}const F=["auto","start","end","center","baseline","stretch"],M=u({cols:{type:[Boolean,String,Number],default:!1},...P,offset:{type:[String,Number],default:null},...x,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:e=>F.includes(e)},...$(),...V()},"VCol"),ae=h()({name:"VCol",props:M(),setup(e,s){let{slots:n}=s;const t=l(()=>{const a=[];let o;for(o in m)m[o].forEach(r=>{const d=e[r],b=U(o,r,d);b&&a.push(b)});const i=a.some(r=>r.startsWith("v-col-"));return a.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return N(e.tag,{class:[t.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),C=["start","end","center"],w=["space-between","space-around","space-evenly"];function y(e,s){return f.reduce((n,t)=>{const a=e+g(t);return n[a]=s(),n},{})}const K=[...C,"baseline","stretch"],E=e=>K.includes(e),A=y("align",()=>({type:String,default:null,validator:E})),z=[...C,...w],B=e=>z.includes(e),R=y("justify",()=>({type:String,default:null,validator:B})),J=[...C,...w,"stretch"],G=e=>J.includes(e),I=y("alignContent",()=>({type:String,default:null,validator:G})),S={align:Object.keys(A),justify:Object.keys(R),alignContent:Object.keys(I)},W={align:"align",justify:"justify",alignContent:"align-content"};function X(e,s,n){let t=W[e];if(n!=null){if(s){const a=s.replace(e,"");t+=`-${a}`}return t+=`-${n}`,t.toLowerCase()}}const Y=u({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:E},...A,justify:{type:String,default:null,validator:B},...R,alignContent:{type:String,default:null,validator:G},...I,...$(),...V()},"VRow"),oe=h()({name:"VRow",props:Y(),setup(e,s){let{slots:n}=s;const t=l(()=>{const a=[];let o;for(o in S)S[o].forEach(i=>{const r=e[i],d=X(o,i,r);d&&a.push(d)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return N(e.tag,{class:["v-row",t.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}});export{ae as V,oe as a,ee as b,ne as c,Q as d,te as e,se as f,Z as g,j as h,H as m,p as u};
