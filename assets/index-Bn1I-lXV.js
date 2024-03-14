import{j as t}from"./jsx-runtime-CKrituN3.js";import{r as o}from"./index-CBqU2yxZ.js";import{c as s}from"./classNames-CoONMu-Z.js";const f=({disabled:r,label:c="DateRangePicker",layout:i="vertical",onChange:l})=>{const[a,d]=o.useState(["",""]),u=o.useRef(null),p=o.useRef(null),m=s("[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden min-w-16   bg-transparent text-gray-700",{"cursor-pointer":!r,"cursor-not-allowed bg-blue-500 border-gray-5 text-gray-6":r}),y=e=>{var n;return d([(n=e==null?void 0:e.target)==null?void 0:n.value,""])},x=e=>{var n;a.pop(),d([a[0],(n=e==null?void 0:e.target)==null?void 0:n.value])},g=e=>{e.preventDefault()};return o.useEffect(()=>{l==null||l(a)},[a,l]),t.jsxs("div",{className:s("flex",{"gap-2":c,"flex-col":i==="vertical","sm:flex-row sm:space-x-4 sm:items-center sm:space-y-0 flex-col":i==="horizontal"}),children:[t.jsx("label",{className:"block text-base font-medium text-gray-700",htmlFor:"date-range-picker",children:c}),t.jsxs("div",{id:"date-range-picker",className:s("flex p-[7px] w-fit hover:shadow-md transition ease-in-out"," border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",{"bg-white":!r,"cursor-not-allowed bg-gray-3 border-gray-5 text-gray-6":r}),children:[t.jsx("input",{ref:u,disabled:r,className:m,type:"date",name:"startDate",value:a[0],onClick:()=>{var e;(e=u.current)==null||e.showPicker()},onChange:y,onKeyDown:g}),t.jsx("span",{children:"→"}),t.jsx("input",{ref:p,className:s("ml-6",m),type:"date",name:"endDate",disabled:r??a[0]==="",min:a[0],value:a[1],onClick:()=>{var e;(e=p.current)==null||e.showPicker()},onChange:x,onKeyDown:g})]})]})};try{f.displayName="DateRangePicker",f.__docgenInfo={description:"",displayName:"DateRangePicker",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"DateRangePicker"},description:"",name:"label",required:!1,type:{name:"string"}},layout:{defaultValue:{value:"vertical"},description:"",name:"layout",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(dateSelected: DateSelectedTuple) => void"}}}}}catch{}export{f as D};
