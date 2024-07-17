import{j as s}from"./jsx-runtime-CKrituN3.js";import{r as w}from"./index-CBqU2yxZ.js";import{c as V}from"./classNames-DY9r7t_J.js";const C={default:{bgColor:"bg-primary-blue hover:bg-shades-Blue-30",color:"text-white"},primary:{bgColor:"bg-primary-yellow text-primary-blue hover:bg-shades-Yellow-10",color:"text-primary-blue"},secondary:{bgColor:"bg-white text-primary-blue transitions-all easy-out duration-300 border border-primary-blue",color:"text-primary-blue"},text:{bgColor:"border-b-primary-blue border-solid border-b-2 hover:bg-gray-3",color:"text-primary-blue hover:text-primary-blue"},danger:{bgColor:"bg-primary-red hover:bg-shades-Red-10",color:"text-white"},empty:{bgColor:"",color:""}},p={sm:"w-auto h-6 text-sm px-[15px] rounded",md:"w-auto h-8 py-1 text-sm px-[15px] rounded-md",lg:" h-10 py-[7px] text-base px-[15px] rounded-lg",xl:"h-12 py-[11px] text-base px-[15px] rounded-lg"},m={sm:"size-6 text-sm rounded",md:"size-8 p-1 text-sm rounded-md",lg:"size-10 p-[7px] text-base rounded-lg",xl:"size-12 p-[11px] text-base rounded-lg"},c=e=>Object.entries(e).map(([t,a])=>a.split(" ").map(r=>`${t}:${r}`).join(" ")).join(" "),_=(e,t)=>t?e?m[t]:p[t]:c(e?m:p),b=({icon:e,form:t,style:a,onClick:r,children:l,disabled:o,iconPosition:x,size:u="xl",className:i="",type:n="default",htmlType:y="button"})=>{const{bgColor:f,color:g}=C[n],v=`text-center ${g} font-normal`,d=l===void 0&&!!e,h=w.useMemo(()=>_(d,u),[u,d]);return s.jsxs("button",{className:V(`${f} ${v} ${h}`,"disabled:border-zinc-300 disabled:bg-neutral-100 disabled:text-stone-300 disabled:border-none disabled:cursor-not-allowed disabled:shadow-gray-200","focus:outline-none justify-center items-center gap-2 inline-flex shadow-[0_2px_0_0_#0047BA1A]",{"active:scale-95 transition-all duration-300 ease-out":!o,"rounded-none":n==="text","flex-row-reverse":x==="right","shadow-button":n!=="empty",[i]:i}),onClick:o?void 0:r,disabled:o,type:y,...t&&{form:t},style:a,children:[e&&s.jsx("span",{className:"flex-none",children:e}),l&&s.jsx("span",{className:"whitespace-normal",children:l})]})};try{b.displayName="Button",b.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"text"'},{value:'"default"'},{value:'"danger"'},{value:'"empty"'}]}},size:{defaultValue:{value:"xl"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}},htmlType:{defaultValue:{value:"button"},description:"",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{b as B};
