import{j as r}from"./jsx-runtime-CKrituN3.js";import{r as c}from"./index-CBqU2yxZ.js";import{F as b}from"./index-CIRioFQb.js";import{S as _}from"./close-rI1dvE4l.js";import{c as N}from"./classNames-CoONMu-Z.js";import{S}from"./progress-activity-BInxmABt.js";import"./_commonjsHelpers-BosuxZz1.js";const l=({closable:o=!1,color:s="default",icon:g,tag:f,onClick:n,isShow:a=!0,className:u="",style:v})=>{const[y,i]=c.useState(a),t=s==="default"?"neutral":s,x=()=>{i(!1),n&&n()};return c.useEffect(()=>i(a),[a]),y&&r.jsxs(b,{gap:1,align:"center",className:N(`border rounded-[4px] py-[1px] px-2 w-fit bg-${t}-1 border-${t}-3 text-${t}-6`,{[u]:u}),style:v,children:[g,f,o&&r.jsx(_,{className:"text-gray-7 hover:text-gray-10 cursor-pointer",onClick:x})]})};try{l.displayName="Tag",l.__docgenInfo={description:"",displayName:"Tag",props:{color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"red"'},{value:'"purple"'},{value:'"geekblue"'},{value:'"blue"'},{value:'"cyan"'},{value:'"green"'},{value:'"lime"'},{value:'"gold"'},{value:'"orange"'},{value:'"volcano"'},{value:'"magenta"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:{value:"false"},description:"",name:"closable",required:!1,type:{name:"boolean"}},tag:{defaultValue:null,description:"",name:"tag",required:!0,type:{name:"string"}},isShow:{defaultValue:{value:"true"},description:"",name:"isShow",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const k={title:"Components/Tag ",component:l,tags:["autodocs"],argTypes:{}},e={args:{closable:!0,color:"magenta",icon:r.jsx(S,{className:"animate-spin"}),tag:"text"}};var m,p,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    closable: true,
    color: "magenta",
    icon: <ProgressActivityIcon className="animate-spin" />,
    tag: "text"
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const w=["Example"];export{e as Example,w as __namedExportsOrder,k as default};
