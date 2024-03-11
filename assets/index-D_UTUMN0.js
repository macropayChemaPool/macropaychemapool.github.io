import{j as L}from"./jsx-runtime-CKrituN3.js";import{r as c,R as Q}from"./index-CBqU2yxZ.js";import{c as _}from"./clsx-B-dksMZM.js";import{S as xe}from"./close-rI1dvE4l.js";import{T as me,e as ge,i as re,S as he}from"./form-BsJ3P7Gw.js";import{T as ye,u as Oe,c as $,f as Se,a as Re}from"./index-QaoBqWcy.js";import{O as ee,U as j,y as q,o as v,u as E,l as U,p as z,s as Le,d as H,x as Ie,C as V,a as $e,b as we,c as J,q as Te}from"./transition-BDdlExqH.js";import{y as Pe,h as ke,T as Ce,I as W,o as De,a as y,r as Ee,b as Ne}from"./keyboard-B5upkSX_.js";import{s as je}from"./use-text-value-DqQEW2an.js";import{f as qe,s as Ve}from"./hidden-CN1vEaDl.js";var Me=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Me||{}),Fe=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Fe||{}),Ae=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ae||{}),Be=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Be||{});function K(e,o=i=>i){let i=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,a=Ne(o(e.options.slice()),s=>s.dataRef.current.domRef.current),l=i?a.indexOf(i):null;return l===-1&&(l=null),{options:a,activeOptionIndex:l}}let Qe={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let o=e.activeOptionIndex,{isSelected:i}=e.dataRef.current,a=e.options.findIndex(l=>i(l.dataRef.current.value));return a!==-1&&(o=a),{...e,listboxState:0,activeOptionIndex:o}},2(e,o){var i;if(e.dataRef.current.disabled||e.listboxState===1)return e;let a=K(e),l=Se(o,{resolveItems:()=>a.options,resolveActiveIndex:()=>a.activeOptionIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...e,...a,searchQuery:"",activeOptionIndex:l,activationTrigger:(i=o.trigger)!=null?i:1}},3:(e,o)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let i=e.searchQuery!==""?0:1,a=e.searchQuery+o.value.toLowerCase(),l=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+i).concat(e.options.slice(0,e.activeOptionIndex+i)):e.options).find(t=>{var n;return!t.dataRef.current.disabled&&((n=t.dataRef.current.textValue)==null?void 0:n.startsWith(a))}),s=l?e.options.indexOf(l):-1;return s===-1||s===e.activeOptionIndex?{...e,searchQuery:a}:{...e,searchQuery:a,activeOptionIndex:s,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,o)=>{let i={id:o.id,dataRef:o.dataRef},a=K(e,l=>[...l,i]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(o.dataRef.current.value)&&(a.activeOptionIndex=a.options.indexOf(i)),{...e,...a}},6:(e,o)=>{let i=K(e,a=>{let l=a.findIndex(s=>s.id===o.id);return l!==-1&&a.splice(l,1),a});return{...e,...i,activationTrigger:1}},7:(e,o)=>({...e,labelId:o.id})},X=c.createContext(null);X.displayName="ListboxActionsContext";function M(e){let o=c.useContext(X);if(o===null){let i=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,M),i}return o}let Y=c.createContext(null);Y.displayName="ListboxDataContext";function F(e){let o=c.useContext(Y);if(o===null){let i=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,F),i}return o}function _e(e,o){return E(o.type,Qe,e,o)}let Ue=c.Fragment;function ze(e,o){let{value:i,defaultValue:a,form:l,name:s,onChange:t,by:n=(u,p)=>u===p,disabled:d=!1,horizontal:f=!1,multiple:h=!1,...I}=e;const w=f?"horizontal":"vertical";let T=q(o),[b=h?[]:void 0,O]=me(i,t,a),[x,r]=c.useReducer(_e,{dataRef:c.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),m=c.useRef({static:!1,hold:!1}),D=c.useRef(null),k=c.useRef(null),C=c.useRef(null),S=v(typeof n=="string"?(u,p)=>{let R=n;return(u==null?void 0:u[R])===(p==null?void 0:p[R])}:n),P=c.useCallback(u=>E(g.mode,{1:()=>b.some(p=>S(p,u)),0:()=>S(b,u)}),[b]),g=c.useMemo(()=>({...x,value:b,disabled:d,mode:h?1:0,orientation:w,compare:S,isSelected:P,optionsPropsRef:m,labelRef:D,buttonRef:k,optionsRef:C}),[b,d,h,x]);U(()=>{x.dataRef.current=g},[g]),Pe([g.buttonRef,g.optionsRef],(u,p)=>{var R;r({type:1}),ke(p,Ce.Loose)||(u.preventDefault(),(R=g.buttonRef.current)==null||R.focus())},g.listboxState===0);let ae=c.useMemo(()=>({open:g.listboxState===0,disabled:d,value:b}),[g,d,b]),ne=v(u=>{let p=g.options.find(R=>R.id===u);p&&G(p.dataRef.current.value)}),oe=v(()=>{if(g.activeOptionIndex!==null){let{dataRef:u,id:p}=g.options[g.activeOptionIndex];G(u.current.value),r({type:2,focus:$.Specific,id:p})}}),le=v(()=>r({type:0})),ie=v(()=>r({type:1})),se=v((u,p,R)=>u===$.Specific?r({type:2,focus:$.Specific,id:p,trigger:R}):r({type:2,focus:u,trigger:R})),ue=v((u,p)=>(r({type:5,id:u,dataRef:p}),()=>r({type:6,id:u}))),de=v(u=>(r({type:7,id:u}),()=>r({type:7,id:null}))),G=v(u=>E(g.mode,{0(){return O==null?void 0:O(u)},1(){let p=g.value.slice(),R=p.findIndex(B=>S(B,u));return R===-1?p.push(u):p.splice(R,1),O==null?void 0:O(p)}})),ce=v(u=>r({type:3,value:u})),pe=v(()=>r({type:4})),fe=c.useMemo(()=>({onChange:G,registerOption:ue,registerLabel:de,goToOption:se,closeListbox:ie,openListbox:le,selectActiveOption:oe,selectOption:ne,search:ce,clearSearch:pe}),[]),be={ref:T},A=c.useRef(null),ve=z();return c.useEffect(()=>{A.current&&a!==void 0&&ve.addEventListener(A.current,"reset",()=>{O==null||O(a)})},[A,O]),Q.createElement(X.Provider,{value:fe},Q.createElement(Y.Provider,{value:g},Q.createElement(Le,{value:E(g.listboxState,{0:H.Open,1:H.Closed})},s!=null&&b!=null&&ge({[s]:b}).map(([u,p],R)=>Q.createElement(qe,{features:Ve.Hidden,ref:R===0?B=>{var Z;A.current=(Z=B==null?void 0:B.closest("form"))!=null?Z:null}:void 0,...Ie({key:u,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,name:u,value:p})})),V({ourProps:be,theirProps:I,slot:ae,defaultTag:Ue,name:"Listbox"}))))}let He="button";function We(e,o){var i;let a=W(),{id:l=`headlessui-listbox-button-${a}`,...s}=e,t=F("Listbox.Button"),n=M("Listbox.Button"),d=q(t.buttonRef,o),f=z(),h=v(x=>{switch(x.key){case y.Space:case y.Enter:case y.ArrowDown:x.preventDefault(),n.openListbox(),f.nextFrame(()=>{t.value||n.goToOption($.First)});break;case y.ArrowUp:x.preventDefault(),n.openListbox(),f.nextFrame(()=>{t.value||n.goToOption($.Last)});break}}),I=v(x=>{switch(x.key){case y.Space:x.preventDefault();break}}),w=v(x=>{if(Ee(x.currentTarget))return x.preventDefault();t.listboxState===0?(n.closeListbox(),f.nextFrame(()=>{var r;return(r=t.buttonRef.current)==null?void 0:r.focus({preventScroll:!0})})):(x.preventDefault(),n.openListbox())}),T=re(()=>{if(t.labelId)return[t.labelId,l].join(" ")},[t.labelId,l]),b=c.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),O={ref:d,id:l,type:ye(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(i=t.optionsRef.current)==null?void 0:i.id,"aria-expanded":t.listboxState===0,"aria-labelledby":T,disabled:t.disabled,onKeyDown:h,onKeyUp:I,onClick:w};return V({ourProps:O,theirProps:s,slot:b,defaultTag:He,name:"Listbox.Button"})}let Ge="label";function Ke(e,o){let i=W(),{id:a=`headlessui-listbox-label-${i}`,...l}=e,s=F("Listbox.Label"),t=M("Listbox.Label"),n=q(s.labelRef,o);U(()=>t.registerLabel(a),[a]);let d=v(()=>{var h;return(h=s.buttonRef.current)==null?void 0:h.focus({preventScroll:!0})}),f=c.useMemo(()=>({open:s.listboxState===0,disabled:s.disabled}),[s]);return V({ourProps:{ref:n,id:a,onClick:d},theirProps:l,slot:f,defaultTag:Ge,name:"Listbox.Label"})}let Je="ul",Xe=ee.RenderStrategy|ee.Static;function Ye(e,o){var i;let a=W(),{id:l=`headlessui-listbox-options-${a}`,...s}=e,t=F("Listbox.Options"),n=M("Listbox.Options"),d=q(t.optionsRef,o),f=z(),h=z(),I=$e(),w=I!==null?(I&H.Open)===H.Open:t.listboxState===0;c.useEffect(()=>{var r;let m=t.optionsRef.current;m&&t.listboxState===0&&m!==((r=De(m))==null?void 0:r.activeElement)&&m.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let T=v(r=>{switch(h.dispose(),r.key){case y.Space:if(t.searchQuery!=="")return r.preventDefault(),r.stopPropagation(),n.search(r.key);case y.Enter:if(r.preventDefault(),r.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:m}=t.options[t.activeOptionIndex];n.onChange(m.current.value)}t.mode===0&&(n.closeListbox(),J().nextFrame(()=>{var m;return(m=t.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})}));break;case E(t.orientation,{vertical:y.ArrowDown,horizontal:y.ArrowRight}):return r.preventDefault(),r.stopPropagation(),n.goToOption($.Next);case E(t.orientation,{vertical:y.ArrowUp,horizontal:y.ArrowLeft}):return r.preventDefault(),r.stopPropagation(),n.goToOption($.Previous);case y.Home:case y.PageUp:return r.preventDefault(),r.stopPropagation(),n.goToOption($.First);case y.End:case y.PageDown:return r.preventDefault(),r.stopPropagation(),n.goToOption($.Last);case y.Escape:return r.preventDefault(),r.stopPropagation(),n.closeListbox(),f.nextFrame(()=>{var m;return(m=t.buttonRef.current)==null?void 0:m.focus({preventScroll:!0})});case y.Tab:r.preventDefault(),r.stopPropagation();break;default:r.key.length===1&&(n.search(r.key),h.setTimeout(()=>n.clearSearch(),350));break}}),b=re(()=>{var r;return(r=t.buttonRef.current)==null?void 0:r.id},[t.buttonRef.current]),O=c.useMemo(()=>({open:t.listboxState===0}),[t]),x={"aria-activedescendant":t.activeOptionIndex===null||(i=t.options[t.activeOptionIndex])==null?void 0:i.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":b,"aria-orientation":t.orientation,id:l,onKeyDown:T,role:"listbox",tabIndex:0,ref:d};return V({ourProps:x,theirProps:s,slot:O,defaultTag:Je,features:Xe,visible:w,name:"Listbox.Options"})}let Ze="li";function et(e,o){let i=W(),{id:a=`headlessui-listbox-option-${i}`,disabled:l=!1,value:s,...t}=e,n=F("Listbox.Option"),d=M("Listbox.Option"),f=n.activeOptionIndex!==null?n.options[n.activeOptionIndex].id===a:!1,h=n.isSelected(s),I=c.useRef(null),w=je(I),T=we({disabled:l,value:s,domRef:I,get textValue(){return w()}}),b=q(o,I);U(()=>{if(n.listboxState!==0||!f||n.activationTrigger===0)return;let S=J();return S.requestAnimationFrame(()=>{var P,g;(g=(P=I.current)==null?void 0:P.scrollIntoView)==null||g.call(P,{block:"nearest"})}),S.dispose},[I,f,n.listboxState,n.activationTrigger,n.activeOptionIndex]),U(()=>d.registerOption(a,T),[T,a]);let O=v(S=>{if(l)return S.preventDefault();d.onChange(s),n.mode===0&&(d.closeListbox(),J().nextFrame(()=>{var P;return(P=n.buttonRef.current)==null?void 0:P.focus({preventScroll:!0})}))}),x=v(()=>{if(l)return d.goToOption($.Nothing);d.goToOption($.Specific,a)}),r=Oe(),m=v(S=>r.update(S)),D=v(S=>{r.wasMoved(S)&&(l||f||d.goToOption($.Specific,a,0))}),k=v(S=>{r.wasMoved(S)&&(l||f&&d.goToOption($.Nothing))}),C=c.useMemo(()=>({active:f,selected:h,disabled:l}),[f,h,l]);return V({ourProps:{id:a,ref:b,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":h,disabled:void 0,onClick:O,onFocus:x,onPointerEnter:m,onMouseEnter:m,onPointerMove:D,onMouseMove:D,onPointerLeave:k,onMouseLeave:k},theirProps:t,slot:C,defaultTag:Ze,name:"Listbox.Option"})}let tt=j(ze),rt=j(We),at=j(Ke),nt=j(Ye),ot=j(et),N=Object.assign(tt,{Button:rt,Label:at,Options:nt,Option:ot});const te=({options:e,defaultValue:o,placeholder:i="Selecciona una opción",size:a="lg",className:l="",disabled:s=!1,error:t,label:n,readOnly:d=!1,type:f="normal",required:h=!1,...I})=>{const w={value:"",label:`${i}`},T=[{...w},...e],[b,O]=c.useState(o??T[0]),x=()=>O(w);return L.jsx("div",{className:"relative z-0 w-full",children:L.jsx(N,{value:b,onChange:O,disabled:s||d,defaultValue:o,...I,children:({open:r})=>L.jsxs(L.Fragment,{children:[!!n&&L.jsxs(N.Label,{className:_("text-gray-10 mb-2 text-base font-normal",{"block leading-6":f==="normal","absolute text-xl duration-300 transform -translate-y-6 scale-75 top-0 origin-[0]":f==="underline"}),children:[L.jsx("label",{className:"text-red-500 mr-1",children:h&&"*"}),n&&`${n}`]}),L.jsxs("div",{className:"w-full flex items-center align-middle justify-center",children:[L.jsxs(N.Button,{className:_("relative w-full text bg-white truncate text-left pl-3 ring-1 ring-inset pr-8",{"h-6 text-sm":a==="sm","h-8 text-base":a==="md","h-10 text-lg":a==="lg","h-12 text-lg":a==="xl","cursor-not-allowed ring-gray-5 bg-gray-4 text-gray-6":s,"text-gray-6":!b.value,"ring-gray-7":!s,"\n                rounded-lg\n                font-normal focus-visible:outline-none\n                focus:ring-primary-blue ":f==="normal","block\n                  w-full\n                  ring-transparent\n                  border-b-2 border-gray-300\n                focus:border-primary-blue\n                  focus-visible:outline-none bg-transparent\n                  appearance-none\n                ":f==="underline","ring-red-400 border-red-400 focus:ring-red-600 focus:border-red-600":t&&!s,"cursor-not-allowed text-primary-blue":d,[l]:l}),children:[b.label,!b.value&&L.jsx("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4",children:L.jsx(he,{className:"h-5 w-5","aria-hidden":"true"})})]}),!!b.value&&L.jsx("span",{className:_("absolute right-0 flex items-center pr-4 text-gray-6",{"cursor-not-allowed":s||d,"text-primary-blue":d,"hover:text-gray-8 z-50 cursor-pointer transition-all duration-100 ease-linear":!s&&!d}),children:L.jsx(xe,{className:"h-5 w-5","aria-hidden":"true",onClick:()=>!s&&!d&&x()})})]}),L.jsx(Te,{show:r,as:c.Fragment,...Re,children:L.jsx(N.Options,{className:`
            bg-white
            absolute w-full
            overflow-auto
            rounded-lg
            text-base
            shadow-md
            ring-black/5
            focus:outline-none
            z-50
            p-1`,children:e.map((m,D)=>L.jsx(N.Option,{className:({active:k,selected:C})=>_("relative w-100 py-2 select-none px-4 rounded-lg cursor-pointer",{"bg-gray-4":!C&&k,"bg-tints-Blue-90 font-bold":C||C&&k}),value:m,children:m.label},`${D}_-_${n}`))})})]})})})};try{te.displayName="Select",te.__docgenInfo={description:"",displayName:"Select",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"TOption[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"TOption"}},placeholder:{defaultValue:{value:"Selecciona una opción"},description:"",name:"placeholder",required:!1,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},type:{defaultValue:{value:"normal"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"underline"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"Record<string, ReactNode>"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{te as S};