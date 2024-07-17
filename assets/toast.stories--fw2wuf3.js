import{j as e}from"./jsx-runtime-CKrituN3.js";import{C as p}from"./index-DJej9ukk.js";import{r as m}from"./index-CBqU2yxZ.js";import{B as r}from"./index-BVZLexmJ.js";import{F as c}from"./index-IKkC8jR6.js";import"./done-C82prHqh.js";import"./info-BN42PO8v.js";import"./close-rI1dvE4l.js";import"./classNames-DY9r7t_J.js";import"./clsx-B-dksMZM.js";import"./index-Cgph5szl.js";import"./transition-BDdlExqH.js";import"./_commonjsHelpers-BosuxZz1.js";const E={title:"Components/CustomToast",component:p,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["default","success","error","warning","info"]}},parameters:{deepControls:{enabled:!0}}},o={args:{isOpen:!1,children:"Lorem ipsum dolor sit amet.",type:"info",title:"Toast title",isClosable:!0},render:function(s){const[l,t]=m.useState(s.isOpen);return setTimeout(()=>{t(!1)},500*1e3),e.jsxs(e.Fragment,{children:[e.jsxs(c,{gap:4,children:[e.jsx(r,{onClick:()=>t(!0),children:"Show Toast"}),e.jsx(r,{onClick:()=>t(!1),type:"secondary",children:"Hidden Toast"})]}),e.jsx(p,{...s,isOpen:l,onClose:()=>t(!1)})]})}};var n,a,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    children: "Lorem ipsum dolor sit amet.",
    type: "info",
    title: "Toast title",
    isClosable: true
  },
  render: function Render(args) {
    const [show, setShow] = useState(args.isOpen);
    setTimeout(() => {
      setShow(false);
    }, 500 * 1000);
    return <>\r
        <Flex gap={4}>\r
          <Button onClick={() => setShow(true)}>Show Toast</Button>\r
          <Button onClick={() => setShow(false)} type="secondary">\r
            Hidden Toast\r
          </Button>\r
        </Flex>\r
        <CustomToast {...args} isOpen={show} onClose={() => setShow(false)} />\r
      </>;
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const F=["Example"];export{o as Example,F as __namedExportsOrder,E as default};
