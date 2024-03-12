import{j as l}from"./jsx-runtime-CKrituN3.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as _}from"./index-CBqU2yxZ.js";const b=({type:e="normal",htmlType:d="text",defaultValue:x="",startIcon:t,maxlength:g,name:y,error:u,disabled:r,readOnly:o=!1,required:i,placeholder:h,size:n="xl",className:m="",clearOnFocus:v=!1,onChange:s,label:c="",...V})=>{const[q,N]=_.useState(x),j=p("block w-full p-2 focus:outline-none text-black",{"border border-gray-7 focus:border-2 focus:border-tints-Blue-90 rounded-lg focus:ring-1 focus:ring-Blue-30 focus:ring-inset":e==="normal"&&!r,"bg-transparent border-b border-gray-7 focus:border-tints-blue-90":e==="underline"||e==="underline bold","ps-8":!!t,"h-8 text-sm":n==="sm","h-9 text-base":n==="md","h-10 text-base":n==="lg","h-12 text-lg":n==="xl","text-black border-2 border-red-300 ring-1 ring-red-500 ring-inset focus:border-2 focus:border-red-300 focus:ring-1 focus:ring-red-500 focus:ring-inset":u&&!r,"cursor-not-allowed bg-gray-3 border border-gray-5 text-gray-6 rounded-lg":e==="normal"&&r,"cursor-not-allowed border-gray-5 text-gray-6":e==="underline"&&r||e==="underline bold"&&r,"cursor-not-allowed text-primary-blue":o,"[&::-webkit-outer-spin-button]:hidden [&::-webkit-inner-spin-button]:hidden":d==="number",[m]:m}),w=p("text-gray-10 text-base",{"block leading-6":e==="normal","text-base":e==="underline","font-bold":e==="underline bold"});return l.jsxs("div",{children:[!!c&&l.jsxs("label",{className:w,children:[l.jsx("label",{className:"text-red-500 mr-1",children:i&&"*"}),c]}),l.jsxs("div",{className:"relative flex flex-grow items-stretch focus-within:z-10 mt-2",children:[l.jsx("div",{className:" absolute inset-y-0 left-0 flex items-center pl-2",children:!!t&&l.jsx("div",{children:t})}),l.jsx("input",{name:y,disabled:r,placeholder:h,required:i,type:d,maxLength:g,className:j,value:q,onChange:a=>{var f;o||(s==null||s(a),N((f=a==null?void 0:a.target)==null?void 0:f.value))},onFocus:a=>{a==null||a.preventDefault(),v&&(a.target.value="")},...V})]}),u&&l.jsx("p",{className:"text-sm text-red-600",children:u})]})};try{b.displayName="InputText",b.__docgenInfo={description:"",displayName:"InputText",props:{type:{defaultValue:{value:"normal"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"underline"'},{value:'"underline bold"'}]}},htmlType:{defaultValue:{value:"text"},description:"",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"password"'},{value:'"email"'}]}},defaultValue:{defaultValue:{value:""},description:"",name:"defaultValue",required:!1,type:{name:"string"}},size:{defaultValue:{value:"xl"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},maxlength:{defaultValue:null,description:"",name:"maxlength",required:!1,type:{name:"number"}},minlength:{defaultValue:null,description:"",name:"minlength",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},clearOnFocus:{defaultValue:{value:"false"},description:"",name:"clearOnFocus",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLElement>) => void)"}}}}}catch{}export{b as I};