import{j as S}from"./jsx-runtime-CKrituN3.js";import{r as c,R as Q}from"./index-CBqU2yxZ.js";import{c as E}from"./clsx-B-dksMZM.js";import{S as xe}from"./close-rI1dvE4l.js";import{T as me,e as ge,i as ae,S as he}from"./form-BsJ3P7Gw.js";import{T as ye,u as Oe,c as w,f as Se,a as Re}from"./index-QaoBqWcy.js";import{O as ee,U as j,y as V,o as x,u as q,l as _,p as U,s as Le,d as H,x as Ie,C as M,a as $e,b as we,c as J,q as Te}from"./transition-BDdlExqH.js";import{y as Pe,h as ke,T as Ce,I as W,o as De,a as O,r as qe,b as Ee}from"./keyboard-B5upkSX_.js";import{s as Ne}from"./use-text-value-DqQEW2an.js";import{f as je,s as Ve}from"./hidden-CN1vEaDl.js";var Me=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Me||{}),Fe=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Fe||{}),Ae=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ae||{}),ze=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(ze||{});function K(e,l=i=>i){let i=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=Ee(l(e.options.slice()),s=>s.dataRef.current.domRef.current),o=i?r.indexOf(i):null;return o===-1&&(o=null),{options:r,activeOptionIndex:o}}let Be={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let l=e.activeOptionIndex,{isSelected:i}=e.dataRef.current,r=e.options.findIndex(o=>i(o.dataRef.current.value));return r!==-1&&(l=r),{...e,listboxState:0,activeOptionIndex:l}},2(e,l){var i;if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=K(e),o=Se(l,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:o,activationTrigger:(i=l.trigger)!=null?i:1}},3:(e,l)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let i=e.searchQuery!==""?0:1,r=e.searchQuery+l.value.toLowerCase(),o=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+i).concat(e.options.slice(0,e.activeOptionIndex+i)):e.options).find(t=>{var n;return!t.dataRef.current.disabled&&((n=t.dataRef.current.textValue)==null?void 0:n.startsWith(r))}),s=o?e.options.indexOf(o):-1;return s===-1||s===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:s,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,l)=>{let i={id:l.id,dataRef:l.dataRef},r=K(e,o=>[...o,i]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(l.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(i)),{...e,...r}},6:(e,l)=>{let i=K(e,r=>{let o=r.findIndex(s=>s.id===l.id);return o!==-1&&r.splice(o,1),r});return{...e,...i,activationTrigger:1}},7:(e,l)=>({...e,labelId:l.id})},X=c.createContext(null);X.displayName="ListboxActionsContext";function F(e){let l=c.useContext(X);if(l===null){let i=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,F),i}return l}let Y=c.createContext(null);Y.displayName="ListboxDataContext";function A(e){let l=c.useContext(Y);if(l===null){let i=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,A),i}return l}function Qe(e,l){return q(l.type,Be,e,l)}let _e=c.Fragment;function Ue(e,l){let{value:i,defaultValue:r,form:o,name:s,onChange:t,by:n=(u,v)=>u===v,disabled:d=!1,horizontal:b=!1,multiple:h=!1,...R}=e;const T=b?"horizontal":"vertical";let k=V(l),[g=h?[]:void 0,L]=me(i,t,r),[p,a]=c.useReducer(Qe,{dataRef:c.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),m=c.useRef({static:!1,hold:!1}),D=c.useRef(null),C=c.useRef(null),I=c.useRef(null),y=x(typeof n=="string"?(u,v)=>{let $=n;return(u==null?void 0:u[$])===(v==null?void 0:v[$])}:n),P=c.useCallback(u=>q(f.mode,{1:()=>g.some(v=>y(v,u)),0:()=>y(g,u)}),[g]),f=c.useMemo(()=>({...p,value:g,disabled:d,mode:h?1:0,orientation:T,compare:y,isSelected:P,optionsPropsRef:m,labelRef:D,buttonRef:C,optionsRef:I}),[g,d,h,p]);_(()=>{p.dataRef.current=f},[f]),Pe([f.buttonRef,f.optionsRef],(u,v)=>{var $;a({type:1}),ke(v,Ce.Loose)||(u.preventDefault(),($=f.buttonRef.current)==null||$.focus())},f.listboxState===0);let re=c.useMemo(()=>({open:f.listboxState===0,disabled:d,value:g}),[f,d,g]),ne=x(u=>{let v=f.options.find($=>$.id===u);v&&G(v.dataRef.current.value)}),le=x(()=>{if(f.activeOptionIndex!==null){let{dataRef:u,id:v}=f.options[f.activeOptionIndex];G(u.current.value),a({type:2,focus:w.Specific,id:v})}}),oe=x(()=>a({type:0})),ie=x(()=>a({type:1})),se=x((u,v,$)=>u===w.Specific?a({type:2,focus:w.Specific,id:v,trigger:$}):a({type:2,focus:u,trigger:$})),ue=x((u,v)=>(a({type:5,id:u,dataRef:v}),()=>a({type:6,id:u}))),de=x(u=>(a({type:7,id:u}),()=>a({type:7,id:null}))),G=x(u=>q(f.mode,{0(){return L==null?void 0:L(u)},1(){let v=f.value.slice(),$=v.findIndex(B=>y(B,u));return $===-1?v.push(u):v.splice($,1),L==null?void 0:L(v)}})),ce=x(u=>a({type:3,value:u})),pe=x(()=>a({type:4})),fe=c.useMemo(()=>({onChange:G,registerOption:ue,registerLabel:de,goToOption:se,closeListbox:ie,openListbox:oe,selectActiveOption:le,selectOption:ne,search:ce,clearSearch:pe}),[]),ve={ref:k},z=c.useRef(null),be=U();return c.useEffect(()=>{z.current&&r!==void 0&&be.addEventListener(z.current,"reset",()=>{L==null||L(r)})},[z,L]),Q.createElement(X.Provider,{value:fe},Q.createElement(Y.Provider,{value:f},Q.createElement(Le,{value:q(f.listboxState,{0:H.Open,1:H.Closed})},s!=null&&g!=null&&ge({[s]:g}).map(([u,v],$)=>Q.createElement(je,{features:Ve.Hidden,ref:$===0?B=>{var Z;z.current=(Z=B==null?void 0:B.closest("form"))!=null?Z:null}:void 0,...Ie({key:u,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:o,name:u,value:v})})),M({ourProps:ve,theirProps:R,slot:re,defaultTag:_e,name:"Listbox"}))))}let He="button";function We(e,l){var i;let r=W(),{id:o=`headlessui-listbox-button-${r}`,...s}=e,t=A("Listbox.Button"),n=F("Listbox.Button"),d=V(t.buttonRef,l),b=U(),h=x(p=>{switch(p.key){case O.Space:case O.Enter:case O.ArrowDown:p.preventDefault(),n.openListbox(),b.nextFrame(()=>{t.value||n.goToOption(w.First)});break;case O.ArrowUp:p.preventDefault(),n.openListbox(),b.nextFrame(()=>{t.value||n.goToOption(w.Last)});break}}),R=x(p=>{switch(p.key){case O.Space:p.preventDefault();break}}),T=x(p=>{if(qe(p.currentTarget))return p.preventDefault();t.listboxState===0?(n.closeListbox(),b.nextFrame(()=>{var a;return(a=t.buttonRef.current)==null?void 0:a.focus({preventScroll:!0})})):(p.preventDefault(),n.openListbox())}),k=ae(()=>{if(t.labelId)return[t.labelId,o].join(" ")},[t.labelId,o]),g=c.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),L={ref:d,id:o,type:ye(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(i=t.optionsRef.current)==null?void 0:i.id,"aria-expanded":t.listboxState===0,"aria-labelledby":k,disabled:t.disabled,onKeyDown:h,onKeyUp:R,onClick:T};return M({ourProps:L,theirProps:s,slot:g,defaultTag:He,name:"Listbox.Button"})}let Ge="label";function Ke(e,l){let i=W(),{id:r=`headlessui-listbox-label-${i}`,...o}=e,s=A("Listbox.Label"),t=F("Listbox.Label"),n=V(s.labelRef,l);_(()=>t.registerLabel(r),[r]);let d=x(()=>{var h;return(h=s.buttonRef.current)==null?void 0:h.focus({preventScroll:!0})}),b=c.useMemo(()=>({open:s.listboxState===0,disabled:s.disabled}),[s]);return M({ourProps:{ref:n,id:r,onClick:d},theirProps:o,slot:b,defaultTag:Ge,name:"Listbox.Label"})}let Je="ul",Xe=ee.RenderStrategy|ee.Static;function Ye(e,l){var i;let r=W(),{id:o=`headlessui-listbox-options-${r}`,...s}=e,t=A("Listbox.Options"),n=F("Listbox.Options"),d=V(t.optionsRef,l),b=U(),h=U(),R=$e(),T=R!==null?(R&H.Open)===H.Open:t.listboxState===0;c.useEffect(()=>{var a;let m=t.optionsRef.current;m&&t.listboxState===0&&m!==((a=De(m))==null?void 0:a.activeElement)&&m.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let k=x(a=>{switch(h.dispose(),a.key){case O.Space:if(t.searchQuery!=="")return a.preventDefault(),a.stopPropagation(),n.search(a.key);case O.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:m}=t.options[t.activeOptionIndex];n.onChange(m.current.value)}t.mode===0&&(n.closeListbox(),J().nextFrame(()=>{var m;return(m=t.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})}));break;case q(t.orientation,{vertical:O.ArrowDown,horizontal:O.ArrowRight}):return a.preventDefault(),a.stopPropagation(),n.goToOption(w.Next);case q(t.orientation,{vertical:O.ArrowUp,horizontal:O.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),n.goToOption(w.Previous);case O.Home:case O.PageUp:return a.preventDefault(),a.stopPropagation(),n.goToOption(w.First);case O.End:case O.PageDown:return a.preventDefault(),a.stopPropagation(),n.goToOption(w.Last);case O.Escape:return a.preventDefault(),a.stopPropagation(),n.closeListbox(),b.nextFrame(()=>{var m;return(m=t.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})});case O.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(n.search(a.key),h.setTimeout(()=>n.clearSearch(),350));break}}),g=ae(()=>{var a;return(a=t.buttonRef.current)==null?void 0:a.id},[t.buttonRef.current]),L=c.useMemo(()=>({open:t.listboxState===0}),[t]),p={"aria-activedescendant":t.activeOptionIndex===null||(i=t.options[t.activeOptionIndex])==null?void 0:i.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":g,"aria-orientation":t.orientation,id:o,onKeyDown:k,role:"listbox",tabIndex:0,ref:d};return M({ourProps:p,theirProps:s,slot:L,defaultTag:Je,features:Xe,visible:T,name:"Listbox.Options"})}let Ze="li";function et(e,l){let i=W(),{id:r=`headlessui-listbox-option-${i}`,disabled:o=!1,value:s,...t}=e,n=A("Listbox.Option"),d=F("Listbox.Option"),b=n.activeOptionIndex!==null?n.options[n.activeOptionIndex].id===r:!1,h=n.isSelected(s),R=c.useRef(null),T=Ne(R),k=we({disabled:o,value:s,domRef:R,get textValue(){return T()}}),g=V(l,R);_(()=>{if(n.listboxState!==0||!b||n.activationTrigger===0)return;let y=J();return y.requestAnimationFrame(()=>{var P,f;(f=(P=R.current)==null?void 0:P.scrollIntoView)==null||f.call(P,{block:"nearest"})}),y.dispose},[R,b,n.listboxState,n.activationTrigger,n.activeOptionIndex]),_(()=>d.registerOption(r,k),[k,r]);let L=x(y=>{if(o)return y.preventDefault();d.onChange(s),n.mode===0&&(d.closeListbox(),J().nextFrame(()=>{var P;return(P=n.buttonRef.current)==null?void 0:P.focus({preventScroll:!0})}))}),p=x(()=>{if(o)return d.goToOption(w.Nothing);d.goToOption(w.Specific,r)}),a=Oe(),m=x(y=>a.update(y)),D=x(y=>{a.wasMoved(y)&&(o||b||d.goToOption(w.Specific,r,0))}),C=x(y=>{a.wasMoved(y)&&(o||b&&d.goToOption(w.Nothing))}),I=c.useMemo(()=>({active:b,selected:h,disabled:o}),[b,h,o]);return M({ourProps:{id:r,ref:g,role:"option",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-selected":h,disabled:void 0,onClick:L,onFocus:p,onPointerEnter:m,onMouseEnter:m,onPointerMove:D,onMouseMove:D,onPointerLeave:C,onMouseLeave:C},theirProps:t,slot:I,defaultTag:Ze,name:"Listbox.Option"})}let tt=j(Ue),at=j(We),rt=j(Ke),nt=j(Ye),lt=j(et),N=Object.assign(tt,{Button:at,Label:rt,Options:nt,Option:lt});const te=({options:e,defaultValue:l,placeholder:i="Selecciona una opción",size:r="lg",className:o="",disabled:s=!1,error:t,label:n,readOnly:d=!1,type:b="normal",required:h=!1,listHeight:R=32,onChange:T,...k})=>{const g={value:"",label:`${i}`},L=[{...g},...e],[p,a]=c.useState(l??L[0]),m=()=>a(g),D=E("bg-white absolute w-full overflow-auto rounded-lg text-base shadow-md ring-black/5 focus:outline-none z-50 p-1",{[`max-h-${R}`]:R});return S.jsxs("div",{className:"relative z-0 w-full",children:[S.jsx(N,{value:p,onChange:C=>{d||(a(C),T==null||T(C))},disabled:s||d,defaultValue:l,rest:k,children:({open:C})=>S.jsxs(S.Fragment,{children:[!!n&&S.jsxs(N.Label,{className:E("text-gray-10 mb-2 text-base font-normal",{"block leading-6":b==="normal","absolute text-xl duration-300 transform -translate-y-6 scale-75 top-0 origin-[0]":b==="underline"}),children:[S.jsx("label",{className:"text-red-500 mr-1",children:h&&"*"}),n&&`${n}`]}),S.jsxs("div",{className:"w-full flex items-center align-middle justify-center",children:[S.jsxs(N.Button,{className:E("relative w-full text bg-white truncate text-left pl-3 ring-1 ring-inset pr-8",{"h-6 text-sm":r==="sm","h-8 text-base":r==="md","h-10 text-lg":r==="lg","h-12 text-lg":r==="xl","cursor-not-allowed ring-gray-5 bg-gray-4 text-gray-6":s,"text-gray-6":!p.value,"ring-gray-7":!s,"\n                rounded-lg\n                font-normal focus-visible:outline-none\n                focus:ring-primary-blue ":b==="normal","block\n                  w-full\n                  ring-transparent\n                  border-b-2 border-gray-300\n                focus:border-primary-blue\n                  focus-visible:outline-none bg-transparent\n                  appearance-none\n                ":b==="underline","ring-red-400 border-red-400 focus:ring-red-600 focus:border-red-600":t&&!s,"cursor-not-allowed text-primary-blue":d,[o]:o}),children:[p.label,!p.value&&S.jsx("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4",children:S.jsx(he,{className:"size-5","aria-hidden":"true"})})]}),!!p.value&&S.jsx("span",{className:E("absolute right-0 flex items-center pr-4 text-gray-6",{"cursor-not-allowed":s||d,"text-primary-blue":d,"hover:text-gray-8 z-50 cursor-pointer transition-all duration-100 ease-linear":!s&&!d}),children:S.jsx(xe,{"aria-hidden":!0,className:"size-5",onClick:()=>!s&&!d&&m()})})]}),S.jsx(Te,{show:C,as:c.Fragment,...Re,children:S.jsx(N.Options,{className:D,children:e.map((I,y)=>S.jsx(N.Option,{disabled:I==null?void 0:I.disabled,className:({active:P,selected:f})=>E("relative w-100 py-2 select-none px-4 rounded-lg",{"cursor-pointer":!(I!=null&&I.disabled),"bg-gray-4":!f&&P,"bg-tints-Blue-90 font-bold":f||f&&P,"cursor-not-allowed text-gray-300":I==null?void 0:I.disabled}),value:I,children:I.label},`${y}_-_${n}`))})})]})}),t&&S.jsx("p",{className:"text-sm text-red-600",children:t})]})};try{te.displayName="Select",te.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"TOption[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"TOption"}},placeholder:{defaultValue:{value:"Selecciona una opción"},description:"",name:"placeholder",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},type:{defaultValue:{value:"normal"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"underline"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},listHeight:{defaultValue:{value:"32"},description:"",name:"listHeight",required:!1,type:{name:"enum",value:[{value:"24"},{value:"32"},{value:"40"},{value:"48"},{value:"64"},{value:"80"},{value:"96"}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: TOption) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{te as S};