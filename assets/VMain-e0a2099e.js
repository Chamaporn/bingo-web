import{b as oe,m as ne,a as ae,u as se}from"./tag-7e39b9b0.js";import{p as A,i as O,b as u,r as le,a6 as $,a5 as _,s as k,m as q,z as D,N as M,a7 as ue,h as ie,al as re,am as ce,l as ve,an as de,g as me,a as U}from"./index-559b1c29.js";const R=Symbol.for("vuetify:layout"),F=Symbol.for("vuetify:layout-item"),Z=1e3,Se=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),xe=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ye(){const e=O(R);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function we(e){const l=O(R);if(!l)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${ie()}`,v=_("useLayoutItem");D(F,{id:n});const a=k(!1);re(()=>a.value=!0),ce(()=>a.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:r}=l.register(v,{...e,active:u(()=>a.value?!1:e.active.value),id:n});return ve(()=>l.unregister(n)),{layoutItemStyles:i,layoutRect:l.layoutRect,layoutItemScrimStyles:r}}const fe=(e,l,n,v)=>{let a={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...a}}];for(const r of e){const f=l.get(r),g=n.get(r),z=v.get(r);if(!f||!g||!z)continue;const b={...a,[f.value]:parseInt(a[f.value],10)+(z.value?parseInt(g.value,10):0)};i.push({id:r,layer:b}),a=b}return i};function Le(e){const l=O(R,null),n=u(()=>l?l.rootZIndex.value-100:Z),v=le([]),a=$(new Map),i=$(new Map),r=$(new Map),f=$(new Map),g=$(new Map),{resizeRef:z,contentRect:b}=oe(),X=u(()=>{const o=new Map,d=e.overlaps??[];for(const t of d.filter(c=>c.includes(":"))){const[c,s]=t.split(":");if(!v.value.includes(c)||!v.value.includes(s))continue;const y=a.get(c),p=a.get(s),x=i.get(c),w=i.get(s);!y||!p||!x||!w||(o.set(s,{position:y.value,amount:parseInt(x.value,10)}),o.set(c,{position:p.value,amount:-parseInt(w.value,10)}))}return o}),h=u(()=>{const o=[...new Set([...r.values()].map(t=>t.value))].sort((t,c)=>t-c),d=[];for(const t of o){const c=v.value.filter(s=>{var y;return((y=r.get(s))==null?void 0:y.value)===t});d.push(...c)}return fe(d,a,i,f)}),E=u(()=>!Array.from(g.values()).some(o=>o.value)),I=u(()=>h.value[h.value.length-1].layer),W=u(()=>({"--v-layout-left":M(I.value.left),"--v-layout-right":M(I.value.right),"--v-layout-top":M(I.value.top),"--v-layout-bottom":M(I.value.bottom),...E.value?void 0:{transition:"none"}})),S=u(()=>h.value.slice(1).map((o,d)=>{let{id:t}=o;const{layer:c}=h.value[d],s=i.get(t),y=a.get(t);return{id:t,...c,size:Number(s.value),position:y.value}})),N=o=>S.value.find(d=>d.id===o),V=_("createLayout"),T=k(!1);q(()=>{T.value=!0}),D(R,{register:(o,d)=>{let{id:t,order:c,position:s,layoutSize:y,elementSize:p,active:x,disableTransitions:w,absolute:J}=d;r.set(t,c),a.set(t,s),i.set(t,y),f.set(t,x),w&&g.set(t,w);const H=ue(F,V==null?void 0:V.vnode).indexOf(o);H>-1?v.value.splice(H,0,t):v.value.push(t);const j=u(()=>S.value.findIndex(L=>L.id===t)),B=u(()=>n.value+h.value.length*2-j.value*2),Q=u(()=>{const L=s.value==="left"||s.value==="right",P=s.value==="right",te=s.value==="bottom",K={[s.value]:0,zIndex:B.value,transform:`translate${L?"X":"Y"}(${(x.value?0:-110)*(P||te?-1:1)}%)`,position:J.value||n.value!==Z?"absolute":"fixed",...E.value?void 0:{transition:"none"}};if(!T.value)return K;const m=S.value[j.value];if(!m)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const C=X.value.get(t);return C&&(m[C.position]+=C.amount),{...K,height:L?`calc(100% - ${m.top}px - ${m.bottom}px)`:p.value?`${p.value}px`:void 0,left:P?void 0:`${m.left}px`,right:P?`${m.right}px`:void 0,top:s.value!=="bottom"?`${m.top}px`:void 0,bottom:s.value!=="top"?`${m.bottom}px`:void 0,width:L?p.value?`${p.value}px`:void 0:`calc(100% - ${m.left}px - ${m.right}px)`}}),ee=u(()=>({zIndex:B.value-1}));return{layoutItemStyles:Q,layoutItemScrimStyles:ee,zIndex:B}},unregister:o=>{r.delete(o),a.delete(o),i.delete(o),f.delete(o),g.delete(o),v.value=v.value.filter(d=>d!==o)},mainRect:I,mainStyles:W,getLayoutItem:N,items:S,layoutRect:b,rootZIndex:n});const Y=u(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),G=u(()=>({zIndex:l?n.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:Y,layoutStyles:G,getLayoutItem:N,items:S,layoutRect:b,layoutRef:z}}function pe(){const e=k(!1);return q(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:u(()=>e.value?void 0:{transition:"none !important"}),isBooted:de(e)}}const ge=A({scrollable:Boolean,...ne(),...ae({tag:"main"})},"VMain"),$e=me()({name:"VMain",props:ge(),setup(e,l){let{slots:n}=l;const{mainStyles:v}=ye(),{ssrBootStyles:a}=pe();return se(()=>U(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[v.value,a.value,e.style]},{default:()=>{var i,r;return[e.scrollable?U("div",{class:"v-main__scroller"},[(i=n.default)==null?void 0:i.call(n)]):(r=n.default)==null?void 0:r.call(n)]}})),{}}});export{$e as V,Se as a,Le as c,xe as m,we as u};
