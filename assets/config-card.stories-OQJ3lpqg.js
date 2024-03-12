import{j as a}from"./jsx-runtime-CKrituN3.js";import{A as x}from"./index-XA9O6txJ.js";import{E as p}from"./index-DXEnVRSn.js";import{S as b}from"./index-Cd_Gb631.js";import{F as _}from"./index-BFP8q0AU.js";import{D as j}from"./index-CqPO378o.js";import{T as y}from"./index-BwXFwy9o.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./classNames-DY9r7t_J.js";import"./index-9fVIejwl.js";import"./index-CzekK4wq.js";const d=({options:i,onChange:s})=>i!=null&&i.length?a.jsx(_,{className:"gap-3",direction:"vertical",children:i.map((e,l)=>{const r=l===i.length-1;return a.jsxs(a.Fragment,{children:[a.jsx(b,{id:e.id,label:e==null?void 0:e.label,tooltip:e==null?void 0:e.tooltip,checked:e==null?void 0:e.checked,disabled:e==null?void 0:e.disabled,onChange:s}),!r&&a.jsx(j,{})]})})}):a.jsx(p,{});try{d.displayName="SwitchOptionList",d.__docgenInfo={description:"",displayName:"SwitchOptionList",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:'Omit<ISwitchOptionProps, "onChange">[]'}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((id: string, checked: boolean) => void)"}}}}}catch{}const C=()=>a.jsx("div",{children:"loading"}),o=({onChange:i,options:s=[],isLoading:e=!1})=>e?a.jsx(C,{}):s.length?a.jsx(x,{items:s==null?void 0:s.map(l=>{const{id:r,title:u,options:f}=l;return{key:r,header:a.jsx(y,{className:"text-xl text-grays",weight:"bold",children:u}),children:a.jsx(d,{options:f,onChange:(g,h)=>i==null?void 0:i(r,g,h)})}})}):a.jsx(p,{});try{o.displayName="ConfigCard",o.__docgenInfo={description:"",displayName:"ConfigCard",props:{options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"IConfigCardItem[]"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((id: string, optionId: string, checked: boolean) => void)"}}}}}catch{}const R={title:"Components/Custom/ConfigCard",component:o,tags:["autodocs"],argTypes:{}},t={args:{options:[{id:"hardware-restriction",title:"Restricciones de hardware",options:[{id:"allow-message",label:"Permitir la aplicación de mensajes cuando el dispositivo está bloqueado",tooltip:"Permitir la aplicación de mensajes cuando el dispositivo está bloqueado",checked:!1,disabled:!1},{id:"allow-call",label:"Permitir llamadas salientes cuando el dispositivo está bloqueado",tooltip:"Permitir llamadas salientes cuando el dispositivo está bloqueado",checked:!1,disabled:!1}]}]}};var n,c,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    options: [{
      id: "hardware-restriction",
      title: "Restricciones de hardware",
      options: [{
        id: "allow-message",
        label: "Permitir la aplicación de mensajes cuando el dispositivo está bloqueado",
        tooltip: "Permitir la aplicación de mensajes cuando el dispositivo está bloqueado",
        checked: false,
        disabled: false
      }, {
        id: "allow-call",
        label: "Permitir llamadas salientes cuando el dispositivo está bloqueado",
        tooltip: "Permitir llamadas salientes cuando el dispositivo está bloqueado",
        checked: false,
        disabled: false
      }]
    }]
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const T=["Example"];export{t as Example,T as __namedExportsOrder,R as default};
