import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as r}from"./classNames-CoONMu-Z.js";import{r as i}from"./index-CBqU2yxZ.js";const g={top:"bottom-full left-[50%] -translate-x-[50%]",right:"left-full",bottom:"top-full left-[50%] -translate-x-[50%]",left:"right-full"},p=({content:s="Default Text Tooltip",position:t="right",trigger:o="hover",children:f,className:m="bg-gray-9",arrowColor:d="fill-gray-9"})=>{const l=i.useRef(null),[u,n]=i.useState(!1);return i.useEffect(()=>{typeof window<"u"&&(window.onclick=a=>{var c;if((c=l==null?void 0:l.current)!=null&&c.contains(a==null?void 0:a.target)&&(a==null?void 0:a.target)!==(l==null?void 0:l.current)){n(!0);return}n(!1)})},[]),e.jsx("div",{className:"w-fit",children:e.jsxs("span",{className:"group relative h-[100%]",children:[e.jsx("div",{className:r("absolute w-auto transition-all duration-300 z-40",{"invisible opacity-0 group-hover:visible group-hover:opacity-100":o==="hover","invisible opacity-0":o==="click"&&!u,"visible opacity-100":o==="click"&&u},g[t]),children:e.jsxs("div",{className:r("h-full flex",{"flex-col items-center":t==="top","flex-col-reverse items-center":t==="bottom","flex-row-reverse":t==="right"}),children:[e.jsx("div",{role:"tooltip",className:r(`${m}`,"h-full bottom-full right-0 rounded-lg px-3 py-2 w-auto shadow-sm items-center","text-sm font-medium text-white"),children:s}),e.jsx("span",{children:e.jsx("svg",{className:r(`fill-${d}`,"h-3 border-0",{"-rotate-90 relative top-3":t==="left","rotate-180 ":t==="bottom","rotate-90 relative top-3":t==="right"}),x:"0px",y:"0px",viewBox:"0 0 255 255",children:e.jsx("polygon",{points:"0,0 127.5,127.5 255,0"})})})]})}),e.jsx("div",{ref:l,children:f})]})})};try{p.displayName="Tooltip",p.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:{value:"Default Text Tooltip"},description:"",name:"content",required:!1,type:{name:"string | Element"}},position:{defaultValue:{value:"right"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},trigger:{defaultValue:{value:"hover"},description:"",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'}]}},arrowColor:{defaultValue:null,description:"",name:"arrowColor",required:!1,type:{name:"string"}},className:{defaultValue:{value:"bg-gray-9"},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{p as T};
