import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as s}from"./index-CBqU2yxZ.js";import{c}from"./clsx-B-dksMZM.js";import{c as h}from"./classNames-DY9r7t_J.js";import{D as f}from"./index-CqPO378o.js";const m=a=>s.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 14 14",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",...a},s.createElement("g",{clipPath:"url(#clip0_1359_16290)"},s.createElement("path",{d:"M13.422 5.75502L8.37215 10.8048C8.19178 10.9856 7.97752 11.129 7.74166 11.2268C7.50579 11.3246 7.25295 11.375 6.9976 11.375C6.74224 11.375 6.4894 11.3246 6.25353 11.2268C6.01767 11.129 5.80341 10.9856 5.62304 10.8048L0.573244 5.75502C-0.655085 4.52669 0.222293 2.42098 1.95755 2.42098L12.0571 2.42098C13.7924 2.42098 14.6503 4.52669 13.422 5.75502Z"})),s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_1359_16290"},s.createElement("rect",{width:14,height:14,fill:"white",transform:"translate(14 14) rotate(-180)"})))),i=({items:a=[],shadow:d=!0,bodyClassName:t="",showDivider:n=!1})=>{const[l,p]=s.useState(""),u=r=>{p(l===(r==null?void 0:r.currentTarget.id)?"":r==null?void 0:r.currentTarget.id)};return e.jsx("div",{className:"w-full space-y-4",children:a==null?void 0:a.map((r,o)=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:c("bg-white rounded-xl py-6",{"shadow-accordion":d}),children:[e.jsxs("div",{"aria-hidden":!0,id:`accordion-${o+1}`,className:c("flex items-center justify-between w-full gap-[0.625rem] px-6","font-medium rtl:text-right cursor-pointer","border-gray-200 dark:border-gray-700"),onClick:u,children:[e.jsx("span",{className:"w-full flex text-black",children:r.header}),e.jsx(m,{className:c("size-3 shrink-0 transition-all duration-300 ease-in-out",{"rotate-180":l===`accordion-${o+1}`}),fill:"#0047BA"})]}),e.jsx("div",{className:c("grid transition-all duration-300 ease-in-out",{"grid-rows-[1fr] opacity-100":l===`accordion-${o+1}`,"grid-rows-[0fr] opacity-0":l!==`accordion-${o+1}`}),children:e.jsx("div",{className:c("text-gray-500 dark:text-gray-400",{"overflow-visible":l===`accordion-${o+1}`,"overflow-hidden":l!==`accordion-${o+1}`}),children:e.jsx("div",{className:h("pt-4 px-6",{[t]:t}),children:r==null?void 0:r.children})})})]},r==null?void 0:r.key),n&&o!==(a==null?void 0:a.length)-1&&e.jsx("div",{className:"px-5",children:e.jsx(f,{})})]}))})};try{i.displayName="Accordion",i.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"ItemsAccordion[]"}},shadow:{defaultValue:{value:"true"},description:"",name:"shadow",required:!1,type:{name:"boolean"}},showDivider:{defaultValue:{value:"false"},description:"",name:"showDivider",required:!1,type:{name:"boolean"}},bodyClassName:{defaultValue:{value:""},description:"",name:"bodyClassName",required:!1,type:{name:"string"}}}}}catch{}export{i as A,m as S};
