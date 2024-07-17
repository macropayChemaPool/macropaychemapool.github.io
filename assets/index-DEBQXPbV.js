import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as m}from"./index-CBqU2yxZ.js";import{c as f}from"./classNames-DY9r7t_J.js";import{E as g}from"./index-DXEnVRSn.js";const v=a=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",width:"1em",fill:"currentColor",viewBox:"0 -960 960 960",...a},m.createElement("path",{d:"M480-80 240-320l57-57 183 183 183-183 57 57L480-80ZM298-584l-58-56 240-240 240 240-58 56-182-182-182 182Z"})),u=({data:a,columns:l,isLoading:x=!1,columnColor:d})=>{const[o,h]=m.useState({key:null,direction:"asc"}),y=r=>{h(s=>s.key===r?{...s,direction:s.direction==="asc"?"desc":"asc"}:{key:r,direction:"asc"})},c=a?[...a].sort((r,s)=>{const t=o.key;if(t){const i=r[t],n=s[t];if(typeof i=="string"&&typeof n=="string"){const p=i.localeCompare(n);return o.direction==="asc"?p:-p}else return o.direction==="asc"?i-n:n-i}return 0}):[];return e.jsx(e.Fragment,{children:x?e.jsx("div",{className:"loading-message text-center",children:"Cargando..."}):e.jsx(e.Fragment,{children:!a||(a==null?void 0:a.length)===0?e.jsx(g,{}):e.jsx("div",{className:"w-full px-4",children:e.jsx("div",{className:"flow-root",children:e.jsx("div",{className:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 align-middle",children:e.jsx("div",{className:"relative",children:e.jsxs("table",{className:"min-w-full table-fixed divide-y divide-gray-300",children:[e.jsx("thead",{children:e.jsx("tr",{children:l==null?void 0:l.map(r=>e.jsx("th",{className:"pl-2 py-4 cursor-pointer bg-gray-1 divide-x divide-gray-400 text-sm text-gray-10",onClick:()=>y(r.key),children:e.jsxs("span",{className:"flex gap-2 items-center mr-1 border-r-2",children:[r.label,e.jsx(v,{className:"text-lg"})]})},r.key))})}),e.jsx("tbody",{className:"divide-y divide-gray-200 bg-white text-sm",children:c==null?void 0:c.map((r,s)=>e.jsx("tr",{children:l.map((t,i)=>e.jsx("td",{scope:"row",className:f("pl-2 py-4 font-medium",{"text-primary-blue":d==null?void 0:d.includes(t.key)}),children:t.render?t.render(r):r[t.key]},i))},s))})]})})})})})})})})};try{u.displayName="TableWithSort",u.__docgenInfo={description:"",displayName:"TableWithSort",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"TData[]"}},showIdRow:{defaultValue:null,description:"",name:"showIdRow",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},columnColor:{defaultValue:null,description:"",name:"columnColor",required:!1,type:{name:"string[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ITableColumn<TData>[]"}},handleSort:{defaultValue:null,description:"",name:"handleSort",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((selectedRows: TData[]) => void)"}}}}}catch{}export{v as S,u as T};
