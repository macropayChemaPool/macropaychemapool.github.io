import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as c}from"./index-CBqU2yxZ.js";import{S as u}from"./done-C82prHqh.js";import{a as f,S as x}from"./info-1Xie4BZq.js";import{S as n}from"./close-rI1dvE4l.js";import{c as a}from"./clsx-B-dksMZM.js";import{q as p}from"./transition-BDdlExqH.js";const l=({children:t,isOpen:i,type:s="default",isClosable:o=!1,title:m="",onClose:d=()=>{},position:r=0})=>e.jsx("div",{"aria-live":"assertive",className:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6",children:e.jsx("div",{className:a("flex w-full flex-col items-center space-y-4 sm:items-end",{"pt-0":r===0,"pt-[5.25rem]":r===1,"pt-[10.25rem]":r===2,"pt-[15.25rem]":r===3,"pt-[20.25rem]":r===4,"pt-[25.25rem]":r===5}),children:e.jsx(p,{show:i,as:c.Fragment,enter:"transform ease-out duration-300 transition",enterFrom:"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",enterTo:"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:a("pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5",{"border-error border-2":s==="error","border-success border-2":s==="success","border-warning border-2":s==="warning","border-info border-2":s==="info"}),children:e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:s!=="default"&&e.jsxs("div",{className:a("mx-auto flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-6 sm:w-6 text-white",{"bg-error":s==="error","bg-success":s==="success","bg-warning":s==="warning","bg-info":s==="info"}),children:[s==="error"&&e.jsx(n,{}),s==="success"&&e.jsx(u,{}),s==="warning"&&e.jsx(f,{}),s==="info"&&e.jsx(x,{})]})}),e.jsxs("div",{className:"ml-3 w-0 flex-1 pt-0.5",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900",children:m}),e.jsx("p",{className:"mt-1 text-sm text-gray-900",children:t})]}),e.jsx("div",{className:"ml-4 flex flex-shrink-0",children:e.jsxs("button",{type:"button",className:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:d,children:[e.jsx("span",{className:"sr-only",children:"Close"}),o&&e.jsx(n,{className:"h-5 w-5","aria-hidden":"true"})]})})]})})})})})});try{l.displayName="CustomToast",l.__docgenInfo={description:"",displayName:"CustomToast",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'}]}},isClosable:{defaultValue:{value:"false"},description:"",name:"isClosable",required:!1,type:{name:"boolean"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},onClose:{defaultValue:{value:"() => {}"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},position:{defaultValue:{value:"0"},description:"",name:"position",required:!1,type:{name:"number"}}}}}catch{}export{l as C};
