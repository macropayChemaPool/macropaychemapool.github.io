import{j as r}from"./jsx-runtime-CKrituN3.js";import"./index-CBqU2yxZ.js";import{S as p}from"./done-C82prHqh.js";import{c as t}from"./classNames-DY9r7t_J.js";const N=({id:a,name:l,status:e,href:n})=>{const s=t("flex h-6 w-6 items-center justify-center rounded-full",{"border border-primary-blue":e==="COMPLETE","bg-primary-blue":e==="CURRENT","border border-gray-6":e==="PENDING"}),i=t("text-sm font-medium",{"text-primary-blue":e==="CURRENT","text-gray-6":e==="PENDING"}),m=t("text-sm font-medium",{"text-white":e==="CURRENT","text-gray-6":e==="PENDING"});return r.jsxs("a",{href:n,className:"flex gap-2 text-sm font-medium items-center",children:[r.jsx("span",{className:s,children:e==="COMPLETE"?r.jsx(p,{className:"h-8 w-8 text-primary-blue","aria-hidden":"true"}):r.jsx("span",{className:m,children:a})}),r.jsx("span",{className:i,children:l})]})};try{stepFlowMap.displayName="stepFlowMap",stepFlowMap.__docgenInfo={description:"",displayName:"stepFlowMap",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"enum",value:[{value:'"COMPLETE"'},{value:'"CURRENT"'},{value:'"PENDING"'},{value:'"UPCOMING"'}]}}}}}catch{}export{N as S};