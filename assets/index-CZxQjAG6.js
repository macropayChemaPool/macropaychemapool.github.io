import{j as u}from"./jsx-runtime-CKrituN3.js";import{c as s}from"./clsx-B-dksMZM.js";const d=({name:l,value:o,label:r,isDisabled:e,size:a="sm",checked:m=!1,onChange:t})=>{const c=n=>{var i;e||t==null||t((i=n==null?void 0:n.currentTarget)==null?void 0:i.value)};return u.jsxs("div",{className:s("flex peer",{"items-center":r}),children:[u.jsx("input",{disabled:e,value:o,name:l,type:"radio",defaultChecked:m,className:s("accent-primary-blue accent:border-primary-blue",{"w-4 h-4":a==="sm","w-6 h-6":a==="md","w-8 h-8":a==="lg","w-10 h-10":a==="xl","cursor-pointer":!e,"cursor-not-allowed":e}),onClick:c}),!!r&&u.jsx("label",{htmlFor:l,className:"ml-3 block text-base font-medium leading-6 text-gray-900",children:r})]})};try{d.displayName="Radio",d.__docgenInfo={description:"",displayName:"Radio",props:{size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}}}}}catch{}export{d as R};
