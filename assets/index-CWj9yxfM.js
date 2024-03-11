import{j as a}from"./jsx-runtime-CKrituN3.js";import{r as h}from"./index-CBqU2yxZ.js";import{c as C}from"./classNames-DY9r7t_J.js";const V={default:{bgColor:"bg-primary-blue hover:bg-shades-Blue-30",color:"text-white"},primary:{bgColor:"bg-primary-yellow text-primary-blue hover:bg-shades-Yellow-10",color:"text-primary-blue"},secondary:{bgColor:"bg-white text-primary-blue transitions-all easy-out duration-300 border border-primary-blue",color:"text-primary-blue"},text:{bgColor:"border-b-primary-blue border-solid border-b-2 hover:bg-gray-3",color:"text-primary-blue hover:text-primary-blue"},danger:{bgColor:"bg-primary-red hover:bg-shades-Red-10",color:"text-white"},empty:{bgColor:"",color:""}},u={sm:"w-auto h-6 text-sm px-[15px] rounded-[4px]",md:"w-auto h-8 py-1 text-sm px-[15px] rounded-[6px]",lg:" h-10 py-[7px] text-base px-[15px] rounded-[8px]",xl:"h-12 py-[11px] text-base px-[15px] rounded-[8px]"},d={sm:"size-6 text-sm",md:"size-8 p-1 text-sm",lg:"size-10 p-[7px] text-base",xl:"size-12 p-[11px] text-base"},p=t=>Object.entries(t).map(([e,r])=>r.split(" ").map(l=>`${e}:${l}`).join(" ")).join(" "),j=(t,e)=>e?t?d[e]:u[e]:p(t?d:u),m=({className:t="",children:e,icon:r,onClick:l,isDisabled:n,size:s="xl",iconPosition:c,type:o="default",htmlType:x="button",style:b})=>{const{bgColor:y,color:f}=V[o],v=`text-center ${f} font-normal`,i=e===void 0&&!!r,g=h.useMemo(()=>j(i,s),[s,i]);return a.jsxs("button",{className:C(`${y} ${v} ${g} active:scale-95 disabled:border-zinc-300 disabled:bg-neutral-100 disabled:text-stone-300 justify-center items-center gap-2 inline-flex transition-all duration-300 ease-out`,{"rounded-none":o==="text","flex-row-reverse":c==="right","shadow-button":o!=="empty",[t]:t}),onClick:n?void 0:l,disabled:n,type:x,style:b,children:[r&&a.jsx(a.Fragment,{children:r}),e&&a.jsx(a.Fragment,{children:e})]})};try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"secondary"'},{value:'"text"'},{value:'"danger"'},{value:'"empty"'}]}},size:{defaultValue:{value:"xl"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},htmlType:{defaultValue:{value:"button"},description:"",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{m as B};
