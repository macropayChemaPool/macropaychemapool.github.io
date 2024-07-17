import{j as e}from"./jsx-runtime-CKrituN3.js";import{T as c}from"./index-DqBp58f5.js";import{r as g}from"./index-CBqU2yxZ.js";import"./classNames-DY9r7t_J.js";import"./clsx-B-dksMZM.js";import"./motion-C2-VAH6j.js";import"./_commonjsHelpers-BosuxZz1.js";const l=[{key:"1",label:e.jsx(e.Fragment,{children:"Información personal"}),content:"Content of Tab Pane 1"},{key:"2",label:"Datos laborales",content:"Content of Tab Pane 2"},{key:"3",label:"Datos del domicilio",content:e.jsx("div",{className:"rounded-md bg-yellow-50 p-4",children:e.jsx("div",{className:"flex",children:e.jsxs("div",{className:"ml-3",children:[e.jsx("h3",{className:"text-sm font-medium text-yellow-800",children:"Attention needed"}),e.jsx("div",{className:"mt-2 text-sm text-yellow-700",children:e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."})})]})})})},{key:"4",label:"Referencias personales",content:"Content of Tab Pane 3",disabled:!0}],N={title:"Components/Tabs",component:c,tags:["autodocs"],argTypes:{}},t={args:{currentActiveKey:"1",type:"segmented",items:l,onChange:()=>{},className:"",activeColorTabs:"primary-blue"}},n={args:{type:"segmented",items:l,className:""},render:function(d){const[p,u]=g.useState("1");return e.jsx(e.Fragment,{children:e.jsx(c,{...d,onChange:b=>{u(b)},currentActiveKey:p})})}};var r,s,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    currentActiveKey: "1",
    type: "segmented",
    items: items,
    onChange: () => {},
    className: "",
    activeColorTabs: "primary-blue"
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var o,m,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: "segmented",
    items: items,
    className: ""
  },
  render: function Render(args) {
    const [currentTab, setCurrentTab] = useState("1");
    return <>\r
        <Tabs {...args} onChange={(key: string) => {
        setCurrentTab(key);
      }} currentActiveKey={currentTab} />\r
      </>;
  }
}`,...(i=(m=n.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const k=["Example","ImplementTab"];export{t as Example,n as ImplementTab,k as __namedExportsOrder,N as default};
