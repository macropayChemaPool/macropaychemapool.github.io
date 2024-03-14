import{j as s}from"./jsx-runtime-CKrituN3.js";import{c as o}from"./classNames-CoONMu-Z.js";import{r as m}from"./index-CBqU2yxZ.js";import{S as y}from"./done-C82prHqh.js";import{S as C,a as E}from"./right-DTg7cvrs.js";import"./_commonjsHelpers-BosuxZz1.js";const j=({step:e})=>{const t=o("flex h-6 w-6 items-center justify-center rounded-full",{"border border-primary-blue":e.status==="COMPLETE","bg-primary-blue":e.status==="CURRENT","border border-gray-6":e.status==="PENDING"}),n=o("text-sm font-medium",{"text-primary-blue":e.status==="CURRENT","text-gray-6":e.status==="PENDING"}),r=o("text-sm font-medium",{"text-white":e.status==="CURRENT","text-gray-6":e.status==="PENDING"});return s.jsx("a",{href:e.href,children:s.jsxs("span",{className:"flex items-start text-sm font-medium",children:[s.jsxs("span",{className:t,children:[e.status==="COMPLETE"&&s.jsx(y,{className:"h-8 w-8 text-primary-blue","aria-hidden":"true"}),e.status!="COMPLETE"&&s.jsx("span",{className:r,children:e==null?void 0:e.id})]}),s.jsx("span",{className:"ml-3 mt-0.5",children:s.jsx("span",{className:n,children:e.name})})]})})},d=({steps:e})=>{const[t,n]=m.useState(0),[r,b]=m.useState([]),c=4;m.useEffect(()=>{const a=t,l=Math.min(a+c,e.length);b(e.slice(a,l))},[t,e]);const g=()=>{n(t-1)},w=()=>{n(t+1)},u=t===0,x=t===e.length-c,h="flex h-8 w-8 items-center justify-center rounded-md border disabled:border-zinc-300 disabled:bg-neutral-100 disabled:text-stone-300 shadow-none transition-colors duration-300 ease-linear bg-white border-gray-5 text-gray-4 transitions-all easy-out hover:text-blue-900 hover:border-blue-900";return s.jsxs("div",{className:"sm:flex flex-row items-center w-full justify-between hidden ",children:[s.jsx("div",{className:"flex items-center",children:s.jsx("button",{onClick:g,className:h,disabled:u,children:s.jsx(C,{className:`h-4 w-4 ml-1.5 ${u?"text-gray-6":"text-primary-blue"} `})})}),s.jsx("ol",{className:"flex w-full justify-between sm:mx-1 md:mx-2 lg:mx-4 xl:mx-8",children:r.map((a,l)=>s.jsxs("li",{className:"flex justify-between overflow-hidden",children:[s.jsx(j,{step:a}),l+1!=r.length&&s.jsx("svg",{className:"w-5 h-6 xl:mx-16 lg:mx-8 md:mx-4 sm:mx-2 xs:mx-0.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 12 9",children:s.jsx("path",{stroke:"gray",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:".5",d:"m7 9 4-4-4-4"})})]},a.id))}),s.jsx("div",{className:"flex items-center",children:s.jsx("button",{onClick:w,className:h,disabled:x,children:s.jsx(E,{className:`h-4 w-4 ${x?"text-gray-6":"text-primary-blue"} `})})})]})};try{d.displayName="FlowMap",d.__docgenInfo={description:"",displayName:"FlowMap",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"IContentStep[]"}}}}}catch{}const O={title:"Components/Custom/FlowMap",component:d,tags:["autodocs"],parameters:{layout:"centered",deepControls:{enabled:!1}},argTypes:{}},i={args:{steps:[{id:"01",name:"Referencias personales",href:"#",status:"COMPLETE"},{id:"02",name:"Domiciliación",href:"#",status:"COMPLETE"},{id:"03",name:"Preview",href:"#",status:"CURRENT"},{id:"04",name:"Preview",href:"#",status:"UPCOMING"},{id:"05",name:"Preview",href:"#",status:"UPCOMING"},{id:"06",name:"Referencias personales",href:"#",status:"UPCOMING"}]}};var f,p,N;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: "01",
      name: "Referencias personales",
      href: "#",
      status: "COMPLETE"
    }, {
      id: "02",
      name: "Domiciliación",
      href: "#",
      status: "COMPLETE"
    }, {
      id: "03",
      name: "Preview",
      href: "#",
      status: "CURRENT"
    }, {
      id: "04",
      name: "Preview",
      href: "#",
      status: "UPCOMING"
    }, {
      id: "05",
      name: "Preview",
      href: "#",
      status: "UPCOMING"
    }, {
      id: "06",
      name: "Referencias personales",
      href: "#",
      status: "UPCOMING"
    }]
  }
}`,...(N=(p=i.parameters)==null?void 0:p.docs)==null?void 0:N.source}}};const T=["Example"];export{i as Example,T as __namedExportsOrder,O as default};
