import{u as oe,m as ne,a as ae,b as se}from"./tag-19b40855.js";import{p as A,E as O,i as u,P as le,I as $,B as Z,s as E,K as _,D as q,j as z,M as ue,C as ie,ab as re,ac as ce,G as ve,ad as de,g as ye,a as D}from"./index-5efdf56c.js";const R=Symbol.for("vuetify:layout"),F=Symbol.for("vuetify:layout-item"),U=1e3,Se=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),xe=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function fe(){const e=O(R);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function we(e){const l=O(R);if(!l)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${ie()}`,v=Z("useLayoutItem");q(F,{id:n});const a=E(!1);re(()=>a.value=!0),ce(()=>a.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:r}=l.register(v,{...e,active:u(()=>a.value?!1:e.active.value),id:n});return ve(()=>l.unregister(n)),{layoutItemStyles:i,layoutRect:l.layoutRect,layoutItemScrimStyles:r}}const me=(e,l,n,v)=>{let a={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...a}}];for(const r of e){const m=l.get(r),g=n.get(r),M=v.get(r);if(!m||!g||!M)continue;const b={...a,[m.value]:parseInt(a[m.value],10)+(M.value?parseInt(g.value,10):0)};i.push({id:r,layer:b}),a=b}return i};function Le(e){const l=O(R,null),n=u(()=>l?l.rootZIndex.value-100:U),v=le([]),a=$(new Map),i=$(new Map),r=$(new Map),m=$(new Map),g=$(new Map),{resizeRef:M,contentRect:b}=oe(),X=u(()=>{const o=new Map,d=e.overlaps??[];for(const t of d.filter(c=>c.includes(":"))){const[c,s]=t.split(":");if(!v.value.includes(c)||!v.value.includes(s))continue;const f=a.get(c),p=a.get(s),x=i.get(c),w=i.get(s);!f||!p||!x||!w||(o.set(s,{position:f.value,amount:parseInt(x.value,10)}),o.set(c,{position:p.value,amount:-parseInt(w.value,10)}))}return o}),h=u(()=>{const o=[...new Set([...r.values()].map(t=>t.value))].sort((t,c)=>t-c),d=[];for(const t of o){const c=v.value.filter(s=>{var f;return((f=r.get(s))==null?void 0:f.value)===t});d.push(...c)}return me(d,a,i,m)}),k=u(()=>!Array.from(g.values()).some(o=>o.value)),I=u(()=>h.value[h.value.length-1].layer),G=u(()=>({"--v-layout-left":z(I.value.left),"--v-layout-right":z(I.value.right),"--v-layout-top":z(I.value.top),"--v-layout-bottom":z(I.value.bottom),...k.value?void 0:{transition:"none"}})),S=u(()=>h.value.slice(1).map((o,d)=>{let{id:t}=o;const{layer:c}=h.value[d],s=i.get(t),f=a.get(t);return{id:t,...c,size:Number(s.value),position:f.value}})),T=o=>S.value.find(d=>d.id===o),V=Z("createLayout"),j=E(!1);_(()=>{j.value=!0}),q(R,{register:(o,d)=>{let{id:t,order:c,position:s,layoutSize:f,elementSize:p,active:x,disableTransitions:w,absolute:J}=d;r.set(t,c),a.set(t,s),i.set(t,f),m.set(t,x),w&&g.set(t,w);const H=ue(F,V==null?void 0:V.vnode).indexOf(o);H>-1?v.value.splice(H,0,t):v.value.push(t);const K=u(()=>S.value.findIndex(L=>L.id===t)),B=u(()=>n.value+h.value.length*2-K.value*2),Q=u(()=>{const L=s.value==="left"||s.value==="right",P=s.value==="right",te=s.value==="bottom",N={[s.value]:0,zIndex:B.value,transform:`translate${L?"X":"Y"}(${(x.value?0:-110)*(P||te?-1:1)}%)`,position:J.value||n.value!==U?"absolute":"fixed",...k.value?void 0:{transition:"none"}};if(!j.value)return N;const y=S.value[K.value];if(!y)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const C=X.value.get(t);return C&&(y[C.position]+=C.amount),{...N,height:L?`calc(100% - ${y.top}px - ${y.bottom}px)`:p.value?`${p.value}px`:void 0,left:P?void 0:`${y.left}px`,right:P?`${y.right}px`:void 0,top:s.value!=="bottom"?`${y.top}px`:void 0,bottom:s.value!=="top"?`${y.bottom}px`:void 0,width:L?p.value?`${p.value}px`:void 0:`calc(100% - ${y.left}px - ${y.right}px)`}}),ee=u(()=>({zIndex:B.value-1}));return{layoutItemStyles:Q,layoutItemScrimStyles:ee,zIndex:B}},unregister:o=>{r.delete(o),a.delete(o),i.delete(o),m.delete(o),g.delete(o),v.value=v.value.filter(d=>d!==o)},mainRect:I,mainStyles:G,getLayoutItem:T,items:S,layoutRect:b,rootZIndex:n});const W=u(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),Y=u(()=>({zIndex:l?n.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:W,layoutStyles:Y,getLayoutItem:T,items:S,layoutRect:b,layoutRef:M}}function pe(){const e=E(!1);return _(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:u(()=>e.value?void 0:{transition:"none !important"}),isBooted:de(e)}}const ge=A({scrollable:Boolean,...ne(),...ae({tag:"main"})},"VMain"),$e=ye()({name:"VMain",props:ge(),setup(e,l){let{slots:n}=l;const{mainStyles:v}=fe(),{ssrBootStyles:a}=pe();return se(()=>D(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[v.value,a.value,e.style]},{default:()=>{var i,r;return[e.scrollable?D("div",{class:"v-main__scroller"},[(i=n.default)==null?void 0:i.call(n)]):(r=n.default)==null?void 0:r.call(n)]}})),{}}});export{$e as V,Se as a,Le as c,xe as m,we as u};
