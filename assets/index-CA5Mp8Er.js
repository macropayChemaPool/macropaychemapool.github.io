import{j as e}from"./jsx-runtime-CKrituN3.js";import{B as u}from"./index-D9TtqhgU.js";import{C as d}from"./index-F_Upynqc.js";import{r as n}from"./index-CBqU2yxZ.js";import{S as I}from"./close-rI1dvE4l.js";import{c as g}from"./classNames-CoONMu-Z.js";import{T as B}from"./index-CIfHFUhB.js";import{F as s}from"./index-i7xSa-B7.js";import{B as k}from"./index-Cm-1nytc.js";import{u as G}from"./useTranslation-DXU8A8CY.js";const x=({itemsMenu:t,title:c})=>{var f;const[l,_]=n.useState(""),[i,p]=n.useState(!1),{t:C}=G(),v=n.useCallback(()=>p(!0),[l]),V=n.useCallback(()=>p(!1),[l]),q=a=>{_(a),v()},r=n.useMemo(()=>t.find(a=>a.idCardItem===l),[l]),m=r==null?void 0:r.Logo;return e.jsxs("div",{className:"inline-flex pt-6 pb-14 px-3 flex-col items-center gap-[50px]",children:[!!c&&e.jsx(B,{children:c}),e.jsx("div",{className:g("grid transition-all duration-500 ease-in-out max-w-[60rem]",{"grid-rows-[1fr] opacity-100":i,"grid-rows-[0fr] opacity-0":!i}),children:e.jsxs(s,{gap:4,align:"center",justify:"center",direction:"vertical",className:"overflow-hidden",children:[m&&e.jsx(m,{className:"text-xl"}),e.jsx(s,{gap:4,wrap:!0,justify:"center",children:(f=r==null?void 0:r.children)==null?void 0:f.map((a,o)=>e.jsx(u,{...a},`${o}_-_${a.text}`))}),e.jsx(k,{type:"secondary",icon:e.jsx(I,{}),onClick:()=>V(),children:C("common.closeMenu")})]})}),e.jsx(s,{wrap:!0,gap:4,justify:"center",className:g("group transition-all duration-300 ease-in-out cursor-pointer",{"scale-50":i}),children:t==null?void 0:t.map(({idCardItem:a,bgCard:o,Logo:h,text:N,href:j,children:S,onClick:y})=>e.jsx(d,{onClick:()=>!!y&&y()||!!S&&q(a),idCardItem:a,bgCard:o,Logo:h,text:N,href:j},a))})]})};try{x.displayName="MenuContent",x.__docgenInfo={description:"",displayName:"MenuContent",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},itemsMenu:{defaultValue:null,description:"",name:"itemsMenu",required:!0,type:{name:'Omit<ICardItem, "onOpenMenu">[]'}}}}}catch{}try{u.displayName="BigButton",u.__docgenInfo={description:"",displayName:"BigButton",props:{Icon:{defaultValue:null,description:"",name:"Icon",required:!0,type:{name:"FC<SVGProps<SVGSVGElement>>"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},direction:{defaultValue:{value:"vertical"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{d.displayName="CardItem",d.__docgenInfo={description:"",displayName:"CardItem",props:{idCardItem:{defaultValue:null,description:"",name:"idCardItem",required:!0,type:{name:"Key"}},Logo:{defaultValue:null,description:"",name:"Logo",required:!0,type:{name:"FC<SVGProps<SVGSVGElement>>"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},bgCard:{defaultValue:null,description:"",name:"bgCard",required:!0,type:{name:"enum",value:[{value:'"Green"'},{value:'"Red"'},{value:'"Purple"'},{value:'"Aqua"'},{value:'"Pink"'},{value:'"Orange"'},{value:'"Blue"'},{value:'"Gray"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{x as M};
