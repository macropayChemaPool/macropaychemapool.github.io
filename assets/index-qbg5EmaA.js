import{j as m}from"./jsx-runtime-CKrituN3.js";import{r as d,R as q}from"./index-CBqU2yxZ.js";import{B as V,S as X}from"./index-DFqD8mfM.js";import{S as Z}from"./store-Co352TV1.js";import{F as j}from"./index-CIRioFQb.js";import{T as Y,u as ee,c as b,f as te,d as re}from"./index-QaoBqWcy.js";import{n as ae}from"./index.browser-DP16PUbO.js";import{c as M}from"./classNames-CoONMu-Z.js";import{u as ne}from"./useTranslation-DXU8A8CY.js";import{O as Q,U as D,y as $,o as y,s as se,u as G,d as T,C as N,p as H,a as ie,l as C,c as U,q as oe}from"./transition-BDdlExqH.js";import{y as le,I as B,h as ue,T as ce,a as p,r as de,_ as me,M as K,D as J,b as pe}from"./keyboard-B5upkSX_.js";import{n as fe}from"./use-owner-BuQqy2kA.js";import{s as ve}from"./use-text-value-DqQEW2an.js";import{F as ge}from"./use-tree-walker-B-9c0BuR.js";const xe=e=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",width:"1em",fill:"currentColor",viewBox:"0 -960 960 960",...e},d.createElement("path",{d:"M480-360 280-560h400L480-360Z"}));var ye=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ye||{}),he=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(he||{}),Ie=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(Ie||{});function A(e,o=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,s=pe(o(e.items.slice()),l=>l.dataRef.current.domRef.current),r=n?s.indexOf(n):null;return r===-1&&(r=null),{items:s,activeItemIndex:r}}let be={1(e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},0(e){return e.menuState===0?e:{...e,__demoMode:!1,menuState:0}},2:(e,o)=>{var n;let s=A(e),r=te(o,{resolveItems:()=>s.items,resolveActiveIndex:()=>s.activeItemIndex,resolveId:l=>l.id,resolveDisabled:l=>l.dataRef.current.disabled});return{...e,...s,searchQuery:"",activeItemIndex:r,activationTrigger:(n=o.trigger)!=null?n:1}},3:(e,o)=>{let n=e.searchQuery!==""?0:1,s=e.searchQuery+o.value.toLowerCase(),r=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(i=>{var t;return((t=i.dataRef.current.textValue)==null?void 0:t.startsWith(s))&&!i.dataRef.current.disabled}),l=r?e.items.indexOf(r):-1;return l===-1||l===e.activeItemIndex?{...e,searchQuery:s}:{...e,searchQuery:s,activeItemIndex:l,activationTrigger:1}},4(e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},5:(e,o)=>{let n=A(e,s=>[...s,{id:o.id,dataRef:o.dataRef}]);return{...e,...n}},6:(e,o)=>{let n=A(e,s=>{let r=s.findIndex(l=>l.id===o.id);return r!==-1&&s.splice(r,1),s});return{...e,...n,activationTrigger:1}}},O=d.createContext(null);O.displayName="MenuContext";function F(e){let o=d.useContext(O);if(o===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,F),n}return o}function we(e,o){return G(o.type,be,e,o)}let Re=d.Fragment;function Se(e,o){let{__demoMode:n=!1,...s}=e,r=d.useReducer(we,{__demoMode:n,menuState:n?0:1,buttonRef:d.createRef(),itemsRef:d.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:l,itemsRef:i,buttonRef:t},u]=r,f=$(o);le([t,i],(I,R)=>{var c;u({type:1}),ue(R,ce.Loose)||(I.preventDefault(),(c=t.current)==null||c.focus())},l===0);let x=y(()=>{u({type:1})}),h=d.useMemo(()=>({open:l===0,close:x}),[l,x]),v={ref:f};return q.createElement(O.Provider,{value:r},q.createElement(se,{value:G(l,{0:T.Open,1:T.Closed})},N({ourProps:v,theirProps:s,slot:h,defaultTag:Re,name:"Menu"})))}let Me="button";function Pe(e,o){var n;let s=B(),{id:r=`headlessui-menu-button-${s}`,...l}=e,[i,t]=F("Menu.Button"),u=$(i.buttonRef,o),f=H(),x=y(c=>{switch(c.key){case p.Space:case p.Enter:case p.ArrowDown:c.preventDefault(),c.stopPropagation(),t({type:0}),f.nextFrame(()=>t({type:2,focus:b.First}));break;case p.ArrowUp:c.preventDefault(),c.stopPropagation(),t({type:0}),f.nextFrame(()=>t({type:2,focus:b.Last}));break}}),h=y(c=>{switch(c.key){case p.Space:c.preventDefault();break}}),v=y(c=>{if(de(c.currentTarget))return c.preventDefault();e.disabled||(i.menuState===0?(t({type:1}),f.nextFrame(()=>{var w;return(w=i.buttonRef.current)==null?void 0:w.focus({preventScroll:!0})})):(c.preventDefault(),t({type:0})))}),I=d.useMemo(()=>({open:i.menuState===0}),[i]),R={ref:u,id:r,type:Y(e,i.buttonRef),"aria-haspopup":"menu","aria-controls":(n=i.itemsRef.current)==null?void 0:n.id,"aria-expanded":i.menuState===0,onKeyDown:x,onKeyUp:h,onClick:v};return N({ourProps:R,theirProps:l,slot:I,defaultTag:Me,name:"Menu.Button"})}let ke="div",Ee=Q.RenderStrategy|Q.Static;function Te(e,o){var n,s;let r=B(),{id:l=`headlessui-menu-items-${r}`,...i}=e,[t,u]=F("Menu.Items"),f=$(t.itemsRef,o),x=fe(t.itemsRef),h=H(),v=ie(),I=v!==null?(v&T.Open)===T.Open:t.menuState===0;d.useEffect(()=>{let a=t.itemsRef.current;a&&t.menuState===0&&a!==(x==null?void 0:x.activeElement)&&a.focus({preventScroll:!0})},[t.menuState,t.itemsRef,x]),ge({container:t.itemsRef.current,enabled:t.menuState===0,accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});let R=y(a=>{var S,k;switch(h.dispose(),a.key){case p.Space:if(t.searchQuery!=="")return a.preventDefault(),a.stopPropagation(),u({type:3,value:a.key});case p.Enter:if(a.preventDefault(),a.stopPropagation(),u({type:1}),t.activeItemIndex!==null){let{dataRef:g}=t.items[t.activeItemIndex];(k=(S=g.current)==null?void 0:S.domRef.current)==null||k.click()}J(t.buttonRef.current);break;case p.ArrowDown:return a.preventDefault(),a.stopPropagation(),u({type:2,focus:b.Next});case p.ArrowUp:return a.preventDefault(),a.stopPropagation(),u({type:2,focus:b.Previous});case p.Home:case p.PageUp:return a.preventDefault(),a.stopPropagation(),u({type:2,focus:b.First});case p.End:case p.PageDown:return a.preventDefault(),a.stopPropagation(),u({type:2,focus:b.Last});case p.Escape:a.preventDefault(),a.stopPropagation(),u({type:1}),U().nextFrame(()=>{var g;return(g=t.buttonRef.current)==null?void 0:g.focus({preventScroll:!0})});break;case p.Tab:a.preventDefault(),a.stopPropagation(),u({type:1}),U().nextFrame(()=>{me(t.buttonRef.current,a.shiftKey?K.Previous:K.Next)});break;default:a.key.length===1&&(u({type:3,value:a.key}),h.setTimeout(()=>u({type:4}),350));break}}),c=y(a=>{switch(a.key){case p.Space:a.preventDefault();break}}),w=d.useMemo(()=>({open:t.menuState===0}),[t]),P={"aria-activedescendant":t.activeItemIndex===null||(n=t.items[t.activeItemIndex])==null?void 0:n.id,"aria-labelledby":(s=t.buttonRef.current)==null?void 0:s.id,id:l,onKeyDown:R,onKeyUp:c,role:"menu",tabIndex:0,ref:f};return N({ourProps:P,theirProps:i,slot:w,defaultTag:ke,features:Ee,visible:I,name:"Menu.Items"})}let De=d.Fragment;function $e(e,o){let n=B(),{id:s=`headlessui-menu-item-${n}`,disabled:r=!1,...l}=e,[i,t]=F("Menu.Item"),u=i.activeItemIndex!==null?i.items[i.activeItemIndex].id===s:!1,f=d.useRef(null),x=$(o,f);C(()=>{if(i.__demoMode||i.menuState!==0||!u||i.activationTrigger===0)return;let g=U();return g.requestAnimationFrame(()=>{var _,L;(L=(_=f.current)==null?void 0:_.scrollIntoView)==null||L.call(_,{block:"nearest"})}),g.dispose},[i.__demoMode,f,u,i.menuState,i.activationTrigger,i.activeItemIndex]);let h=ve(f),v=d.useRef({disabled:r,domRef:f,get textValue(){return h()}});C(()=>{v.current.disabled=r},[v,r]),C(()=>(t({type:5,id:s,dataRef:v}),()=>t({type:6,id:s})),[v,s]);let I=y(()=>{t({type:1})}),R=y(g=>{if(r)return g.preventDefault();t({type:1}),J(i.buttonRef.current)}),c=y(()=>{if(r)return t({type:2,focus:b.Nothing});t({type:2,focus:b.Specific,id:s})}),w=ee(),P=y(g=>w.update(g)),a=y(g=>{w.wasMoved(g)&&(r||u||t({type:2,focus:b.Specific,id:s,trigger:0}))}),S=y(g=>{w.wasMoved(g)&&(r||u&&t({type:2,focus:b.Nothing}))}),k=d.useMemo(()=>({active:u,disabled:r,close:I}),[u,r,I]);return N({ourProps:{id:s,ref:x,role:"menuitem",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,disabled:void 0,onClick:R,onFocus:c,onPointerEnter:P,onMouseEnter:P,onPointerMove:a,onMouseMove:a,onPointerLeave:S,onMouseLeave:S},theirProps:l,slot:k,defaultTag:De,name:"Menu.Item"})}let Ne=D(Se),Fe=D(Pe),_e=D(Te),je=D($e),E=Object.assign(Ne,{Button:Fe,Items:_e,Item:je});const W={xs:0,sm:640,md:768,lg:1024,xl:1280},Ce=()=>{const[e,o]=d.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1});return d.useEffect(()=>{const n=()=>{const s=window.innerWidth,r=Object.keys(W).reduce((i,t)=>{const u=t;return i[u]=s>=W[u],i},{}),l=["sm","md","lg","xl"].every(i=>!r[i]);r.xs=!!l,o(r)};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),e},z=({avatar:e,rol:o="rol",userName:n="User Name",menuItems:s,storeInfo:r,theme:l="white"})=>{const{t:i}=ne(),{xs:t,sm:u}=Ce(),f=[...t?[{label:m.jsxs(j,{align:"end",justify:"end",className:"w-full",direction:"vertical",children:[m.jsx("span",{className:"text-primary-blue",children:n}),m.jsx("span",{className:"text-gray-6",children:o})]})}]:[],...t&&r?[...r.store?[{label:m.jsx(V,{Icon:Z,label:i("header.store"),value:(r==null?void 0:r.store)??0,isBetween:!0,theme:l})}]:[],...r.cashRegister?[{label:m.jsx(V,{Icon:X,label:i("header.cashRegister"),value:(r==null?void 0:r.cashRegister)??0,isBetween:!0,theme:l})}]:[]]:[],...s];return m.jsxs(E,{as:"div",className:M("relative",{}),children:[m.jsx(E.Button,{className:"max-w-lg bg-transparent flex items-center text-sm rounded-full",children:m.jsxs(j,{gap:2,align:"center",children:[e,u&&m.jsxs(j,{align:"start",direction:"vertical",children:[m.jsx("p",{className:M("text-base font-bold text-primary-blue group-hover:text-primary-blue",{"text-white":l==="blue"}),children:n}),m.jsx("p",{className:M("text-sm font-medium text-grays group-hover:text-gray-500",{"text-white":l==="blue"}),children:o})]}),m.jsx(xe,{className:M("text-2xl ml-1",{"text-white bg-shades-Blue-30 rounded":l==="blue"})})]})}),m.jsx(oe,{as:d.Fragment,...re,children:m.jsx(E.Items,{className:"py-2 absolute right-0 mt-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none",children:f.map(({label:x,href:h,disabled:v})=>m.jsx(E.Item,{disabled:v,children:({active:I})=>m.jsx("a",{href:h,className:M("group flex w-full items-center rounded-none px-4 py-2 text-sm transition delay-150 duration-200 ease-in-out",{"cursor-pointer text-gray-8":!v,"bg-grays-Macropay-02":I,"cursor-not-allowed text-gray-300":v}),children:x})},ae()))})})]})};try{z.displayName="UserMenu",z.__docgenInfo={description:"",displayName:"UserMenu",props:{menuItems:{defaultValue:null,description:"",name:"menuItems",required:!0,type:{name:"MenuItem[]"}},avatar:{defaultValue:null,description:"",name:"avatar",required:!1,type:{name:"ReactNode"}},userName:{defaultValue:{value:"User Name"},description:"",name:"userName",required:!1,type:{name:"string"}},rol:{defaultValue:{value:"rol"},description:"",name:"rol",required:!1,type:{name:"string"}},storeInfo:{defaultValue:null,description:"",name:"storeInfo",required:!1,type:{name:"IStoreInfo"}},langs:{defaultValue:null,description:"",name:"langs",required:!1,type:{name:"Locale[]"}},theme:{defaultValue:{value:"white"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"white"'}]}}}}}catch{}export{xe as S,z as U,E as q,Ce as u};