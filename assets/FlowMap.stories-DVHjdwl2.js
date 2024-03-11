import{j as t}from"./jsx-runtime-CKrituN3.js";import{c as l}from"./clsx-B-dksMZM.js";import{r as m}from"./index-CBqU2yxZ.js";import{S as j}from"./done-C82prHqh.js";import{S as N}from"./left-B3Ial6bo.js";import{S as v}from"./right-BOFpMm8b.js";import"./_commonjsHelpers-BosuxZz1.js";const S=({step:e})=>{const s=l("flex h-6 w-6 items-center justify-center rounded-full",{"border border-primary-blue":e.status==="complete","bg-primary-blue":e.status==="current","border border-gray-6":e.status==="pending"||e.status==="upcoming"}),r=l("text-sm font-medium",{"text-primary-blue":e.status==="current","text-gray-6":e.status==="pending"||e.status==="upcoming"}),a=l("text-sm font-medium",{"text-white":e.status==="current","text-gray-6":e.status==="pending"||e.status==="upcoming"});return t.jsx("a",{href:e.href,children:t.jsxs("span",{className:"flex items-start text-sm font-medium",children:[t.jsxs("span",{className:s,children:[e.status==="complete"&&t.jsx(j,{className:"h-8 w-8 text-primary-blue","aria-hidden":"true"}),e.status!="complete"&&t.jsx("span",{className:a,children:e==null?void 0:e.id})]}),t.jsx("span",{className:"ml-3 mt-0.5",children:t.jsx("span",{className:r,children:e.name})})]})})},c=({steps:e})=>{const[s,r]=m.useState(0),[a,b]=m.useState([]),d=4;m.useEffect(()=>{const n=s,o=Math.min(n+d,e.length);b(e.slice(n,o))},[s,e]);const w=()=>{r(s-1)},y=()=>{r(s+1)},u=s===0,x=s===e.length-d,p="flex h-8 w-8 items-center justify-center rounded-md border disabled:border-zinc-300 disabled:bg-neutral-100 disabled:text-stone-300 shadow-none transition-colors duration-300 ease-linear bg-white border-gray-5 text-gray-4 transitions-all easy-out hover:text-blue-900 hover:border-blue-900";return t.jsxs("div",{className:"sm:flex flex-row items-center w-full justify-between hidden ",children:[t.jsx("div",{className:"flex items-center",children:t.jsx("button",{onClick:w,className:p,disabled:u,children:t.jsx(N,{className:`h-4 w-4 ml-1.5 ${u?"text-gray-6":"text-primary-blue"} `})})}),t.jsx("ol",{className:"flex w-full justify-between sm:mx-1 md:mx-2 lg:mx-4 xl:mx-8",children:a.map((n,o)=>t.jsxs("li",{className:"flex justify-between overflow-hidden",children:[t.jsx(S,{step:n}),o+1!=a.length&&t.jsx("svg",{className:"w-5 h-6 xl:mx-16 lg:mx-8 md:mx-4 sm:mx-2 xs:mx-0.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 12 9",children:t.jsx("path",{stroke:"gray",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:".5",d:"m7 9 4-4-4-4"})})]},n.id))}),t.jsx("div",{className:"flex items-center",children:t.jsx("button",{onClick:y,className:p,disabled:x,children:t.jsx(v,{className:`h-4 w-4 ${x?"text-gray-6":"text-primary-blue"} `})})})]})};try{c.displayName="FlowMap",c.__docgenInfo={description:"",displayName:"FlowMap",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"IContentStep[]"}}}}}catch{}const B={title:"Components/Custom/FlowMap",component:c,tags:["autodocs"],parameters:{layout:"centered",deepControls:{enabled:!1}},argTypes:{}},i={args:{steps:[{id:"01",name:"Referencias personales",href:"#",status:"complete"},{id:"02",name:"Domiciliación",href:"#",status:"complete"},{id:"03",name:"Preview",href:"#",status:"current"},{id:"04",name:"Preview",href:"#",status:"upcoming"},{id:"05",name:"Preview",href:"#",status:"upcoming"},{id:"06",name:"Referencias personales",href:"#",status:"upcoming"}]}};var h,f,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: "01",
      name: "Referencias personales",
      href: "#",
      status: "complete"
    }, {
      id: "02",
      name: "Domiciliación",
      href: "#",
      status: "complete"
    }, {
      id: "03",
      name: "Preview",
      href: "#",
      status: "current"
    }, {
      id: "04",
      name: "Preview",
      href: "#",
      status: "upcoming"
    }, {
      id: "05",
      name: "Preview",
      href: "#",
      status: "upcoming"
    }, {
      id: "06",
      name: "Referencias personales",
      href: "#",
      status: "upcoming"
    }]
  }
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const F=["Example"];export{i as Example,F as __namedExportsOrder,B as default};
