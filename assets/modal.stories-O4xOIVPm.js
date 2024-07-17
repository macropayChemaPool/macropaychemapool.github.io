import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as r}from"./index-gq-3YsZg.js";import{r as c}from"./index-CBqU2yxZ.js";import{B as u}from"./index-BVZLexmJ.js";import{S as k}from"./index-Ci0M9How.js";import{S as E}from"./shopping-cart-DX0N4_CH.js";import{A as M}from"./index-BS1-a123.js";import{a as j}from"./index-_uA0Iphp.js";import{s as A}from"./index-DsEXr8CQ.js";import"./classNames-DY9r7t_J.js";import"./clsx-B-dksMZM.js";import"./close-rI1dvE4l.js";import"./done-C82prHqh.js";import"./info-BN42PO8v.js";import"./index-IKkC8jR6.js";import"./index-Fp_I180m.js";import"./transition-BDdlExqH.js";import"./index-Cgph5szl.js";import"./dialog-VZvtz3bU.js";import"./use-owner-BuQqy2kA.js";import"./keyboard-B5upkSX_.js";import"./active-element-history-DM4WbiwA.js";import"./hidden-CN1vEaDl.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./down-CBhbPet_.js";import"./form-DdjUVvU2.js";import"./use-text-value-DqQEW2an.js";import"./index-CT_AGQEv.js";import"./index.browser-DP16PUbO.js";import"./squares-CzYWx29c.js";const oe={title:"Components/Modal",component:r,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["default","success","error","warning","info"]},titleAlign:{options:["center","right"]}},parameters:{deepControls:{enabled:!0}}},a={args:{isOpen:!1,type:"info",titleAlign:"right",message:"Estas apunto de generar el contrato. ¿El cliente está de acuerdo con la firma del contrato?",title:"Firma de contrato"},render:function(t){const[s,n]=c.useState(t.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Show Modal"}),e.jsx(r,{...t,buttonOk:{children:"Aceptar",onClick(){n(!1)}},isOpen:s})]})}},o={args:{isOpen:!1,type:"warning",titleAlign:"right",message:"Para cerrar este modal deberás dar click fuera del recuadro o con la tecla ESC",title:"Firma de contrato"},render:function(t){const[s,n]=c.useState(t.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Show Modal"}),e.jsx(r,{...t,buttonCancel:{children:"Cancelar"},buttonOk:{children:"Aceptar"},isOpen:s,onClose:()=>n(!1)})]})}},l={args:{isOpen:!1,type:"info",titleAlign:"right"},render:function(t){const[s,n]=c.useState(t.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Show Modal"}),e.jsx(r,{...t,buttonCancel:{children:"Cancelar",onClick(){n(!1)}},buttonOk:{children:"Aceptar"},isOpen:s,title:"Continuar solicitud después",message:"Selecciona el motivo por el cual el cliente desea continuar después con la solicitud de tu financiamiento.",header:e.jsx(M,{size:"xl",icon:e.jsx(E,{}),bgClassName:"bg-gray-3",colorClassName:"text-primary-blue"}),children:e.jsx(k,{required:!0,label:"Sucursal",options:[{value:"test 1",label:"test 1"},{value:"test 2",label:"test 2"},{value:"test 3",label:"test 3"},{value:"test 4",label:"test 4"},{value:"test 5",label:"test 5"},{value:"test 6",label:"test 6"},{value:"test 7",label:"test 7"},{value:"test 8",label:"test 8"},{value:"test 9",label:"test 9"},{value:"test 10",label:"test 10"}]})})]})}},i={args:{isOpen:!1,type:"info",titleAlign:"right",className:"max-w-6xl"},render:function(t){const[s,n]=c.useState(t.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>n(!0),children:"Show Modal"}),e.jsx(r,{...t,isOpen:s,title:"Continuar solicitud después",message:"Selecciona el motivo por el cual el cliente desea continuar después con la solicitud de tu financiamiento.",children:e.jsx(j,{steps:A})})]})}};var d,m,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    type: "info",
    titleAlign: "right",
    message: "Estas apunto de generar el contrato. ¿El cliente está de acuerdo con la firma del contrato?",
    title: "Firma de contrato"
  },
  render: function Render(args) {
    const [show, setShow] = useState(args.isOpen);
    return <>\r
        <Button onClick={() => setShow(true)}>Show Modal</Button>\r
        <Modal {...args} buttonOk={{
        children: "Aceptar",
        onClick() {
          setShow(false);
        }
      }} isOpen={show} />\r
      </>;
  }
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,S,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    type: "warning",
    titleAlign: "right",
    message: "Para cerrar este modal deberás dar click fuera del recuadro o con la tecla ESC",
    title: "Firma de contrato"
  },
  render: function Render(args) {
    const [show, setShow] = useState(args.isOpen);
    return <>\r
        <Button onClick={() => setShow(true)}>Show Modal</Button>\r
        <Modal {...args} buttonCancel={{
        children: "Cancelar"
      }} buttonOk={{
        children: "Aceptar"
      }} isOpen={show} onClose={() => setShow(false)} />\r
      </>;
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var C,b,w;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    type: "info",
    titleAlign: "right"
  },
  render: function Render(args) {
    const [show, setShow] = useState(args.isOpen);
    return <>\r
        <Button onClick={() => setShow(true)}>Show Modal</Button>\r
        <Modal {...args} buttonCancel={{
        children: "Cancelar",
        onClick() {
          setShow(false);
        }
      }} buttonOk={{
        children: "Aceptar"
      }} isOpen={show} title="Continuar solicitud después" message="Selecciona el motivo por el cual el cliente desea continuar después con la solicitud de tu financiamiento." header={<Avatar size="xl" icon={<ShoppingCartIcon />} bgClassName="bg-gray-3" colorClassName="text-primary-blue" />}>\r
          <Select required label="Sucursal" options={[{
          value: "test 1",
          label: "test 1"
        }, {
          value: "test 2",
          label: "test 2"
        }, {
          value: "test 3",
          label: "test 3"
        }, {
          value: "test 4",
          label: "test 4"
        }, {
          value: "test 5",
          label: "test 5"
        }, {
          value: "test 6",
          label: "test 6"
        }, {
          value: "test 7",
          label: "test 7"
        }, {
          value: "test 8",
          label: "test 8"
        }, {
          value: "test 9",
          label: "test 9"
        }, {
          value: "test 10",
          label: "test 10"
        }]} />\r
        </Modal>\r
      </>;
  }
}`,...(w=(b=l.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var x,O,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    type: "info",
    titleAlign: "right",
    className: "max-w-6xl"
  },
  render: function Render(args) {
    const [show, setShow] = useState(args.isOpen);
    return <>\r
        <Button onClick={() => setShow(true)}>Show Modal</Button>\r
        <Modal {...args} isOpen={show} title="Continuar solicitud después" message="Selecciona el motivo por el cual el cliente desea continuar después con la solicitud de tu financiamiento.">\r
          <Steps steps={stepsTest} />\r
        </Modal>\r
      </>;
  }
}`,...(v=(O=i.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};const le=["Info","onCloseModal","ExampleWithChildren1","ExampleWithChildren2"];export{l as ExampleWithChildren1,i as ExampleWithChildren2,a as Info,le as __namedExportsOrder,oe as default,o as onCloseModal};
