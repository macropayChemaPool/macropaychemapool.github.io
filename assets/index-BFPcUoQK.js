import{j as a}from"./jsx-runtime-CKrituN3.js";import{c as l}from"./classNames-CoONMu-Z.js";const m=({currentActiveKey:s,type:e="default",items:u=[],onChange:g,className:c="",activeColorTabs:t="blue-600"})=>{const x=l({"text-sm font-normal":e==="default"||e==="pills","text-center text-gray-500 border-b border-gray-200 font-normal text-sm":e==="underline","border-b border-gray-200 text-lg font-semibold":e==="with-icon","bg-gray-100 p-1 text-lg text-grays-Macropay-07 font-normal":e==="segmented",[c]:c}),f=l("select-none",{"flex flex-wrap text-center text-gray-500 border-b border-gray-200 font-normal":e==="default","flex flex-wrap -mb-px":e==="underline","flex flex-wrap -mb-px font-normal text-sm text-center text-gray-500":e==="with-icon","flex flex-wrap text-lg font-medium text-center text-gray-500":e==="pills","grid grid-flow-col justify-stretch text-lg font-medium text-center p-1 text-lg":e==="segmented"}),b=l({[`font-bold text-${t} bg-gray-100`]:e==="default",[`text-${t} border-b-2 border-${t}`]:e==="underline"||e==="with-icon",[`text-white bg-${t}`]:e==="pills",[`bg-white font-bold text-${t} hover:text-${t} hover:bg-white`]:e==="segmented"}),p=l({"inline-block p-3 py-3 rounded-t-lg hover:text-gray-500 hover:bg-gray-50":e==="default","inline-block p-3 py-3 border-b-2 rounded-t-lg hover:text-gray-300 hover:border-gray-300":e==="underline","inline-flex items-center justify-center p-3 border-b-2 rounded-t-lg hover:text-gray-300 hover:border-gray-300":e==="with-icon","inline-block px-4 py-3 rounded-t-lg hover:text-gray-900 hover:bg-gray-100":e==="pills","inline-block p-3 py-3 rounded-md hover:text-gray-500 hover:bg-gray-300 min-w-full":e==="segmented"}),h=(r,i)=>{const d=i?"text-gray-300 pointer-events-none":r===s&&b;return p+" "+d},v=r=>{g(r)},n=u.find(({key:r})=>r===s),y=(n==null?void 0:n.content)??(n==null?void 0:n.label)??"";return a.jsxs("div",{children:[a.jsx("div",{className:x,children:a.jsx("ul",{className:f,children:u.map(({key:r,label:i,href:d,disabled:o=!1})=>a.jsx("li",{"aria-hidden":!0,className:l("me-2",{"cursor-pointer":!o,"cursor-not-allowed":o}),onClick:()=>{!o&&v(r)},children:a.jsx("a",{href:d,"aria-current":"page",className:h(r,o),children:i})},r))})}),a.jsx("div",{className:"min-w-full mt-1 rounded-sm",children:y})]})};try{m.displayName="Tabs",m.__docgenInfo={description:"",displayName:"Tabs",props:{currentActiveKey:{defaultValue:null,description:"",name:"currentActiveKey",required:!0,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"underline"'},{value:'"with-icon"'},{value:'"pills"'},{value:'"segmented"'}]}},items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"ITabItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(currentActiveKey: string) => void"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},activeColorTabs:{defaultValue:{value:"blue-600"},description:"",name:"activeColorTabs",required:!1,type:{name:"string"}}}}}catch{}export{m as T};