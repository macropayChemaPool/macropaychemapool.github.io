import{j as e}from"./jsx-runtime-CKrituN3.js";import{C as i}from"./index-Dm4Jnftg.js";import{r as c}from"./index-CBqU2yxZ.js";import"./index-C2Z7O5rZ.js";import"./index-DG7Q3Dq3.js";import{B as p}from"./index-Cm-1nytc.js";import"./index-CCum9fWa.js";import"./index-DIwAYYUA.js";import"./index-DaoiOeFi.js";import"./index-Bn1I-lXV.js";import"./index-DXEnVRSn.js";import{F as o}from"./index-i7xSa-B7.js";import"./index-BLy0g1ad.js";import"./index-BkwOAgeV.js";import"./index-CiyNFN-L.js";import"./index-C3Z1soji.js";import"./index-D5CLxqWJ.js";import"./index-CepYZON4.js";import"./index-B2jq0DfR.js";import"./index-Bqu_3ca7.js";import"./index-C1_8NDev.js";import"./index-CHqnKCx1.js";import{S as w}from"./index-Bf6tOQrm.js";import"./index-Dt3erTFN.js";import"./index-C5BVibZe.js";import"./index-C_yO6Xh5.js";import"./index-BFPcUoQK.js";import"./index-BXHdNaKW.js";import"./index-DF4eC9sC.js";import"./index-BfHBh7J_.js";import"./index-BRUWGrjJ.js";import{T as v}from"./index-CIfHFUhB.js";import"./index-cgZVANQY.js";import{A as O}from"./index-Br4uTIDo.js";import"./index-DorKUY0W.js";import"./index-sNF4Zf4l.js";import"./index-D1j_YUYJ.js";import"./index-BkRF9wFY.js";import"./index-Cuh57XkP.js";import{S as j}from"./done-C82prHqh.js";import{S as k}from"./info-1Xie4BZq.js";import"./index-5hrGCBLB.js";import"./index-CW2oqz23.js";import"./classNames-CoONMu-Z.js";import"./store-Co352TV1.js";import"./index-QaoBqWcy.js";import"./transition-BDdlExqH.js";import"./useTranslation-DXU8A8CY.js";import"./context-DPnKhrhb.js";import"./keyboard-B5upkSX_.js";import"./use-owner-BuQqy2kA.js";import"./use-text-value-DqQEW2an.js";import"./use-tree-walker-B-9c0BuR.js";import"./close-rI1dvE4l.js";import"./dialog-VZvtz3bU.js";import"./active-element-history-DM4WbiwA.js";import"./hidden-CN1vEaDl.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./MX-DsE3TAjU.js";import"./index-Dad2cknx.js";import"./check-B5O8_k_f.js";import"./extends-CCbyfPlC.js";import"./form-BsJ3P7Gw.js";import"./index-Cs5dbDNZ.js";import"./index-dLRENnvr.js";const ze={title:"Components/Modal",component:i,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["default","success","error","warning","info"]},titleAlign:{options:["center","right"]}},parameters:{deepControls:{enabled:!0}}},a={args:{isOpen:!1,type:"info",titleAlign:"right",children:"Estas apunto de generar el contrato. ¿El cliente está de acuerdo con la firma del contrato?",title:"Firma de contrato"},render:function(t){const[n,r]=c.useState(t.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>r(!0),children:"Show Modal"}),e.jsx(i,{...t,buttonOk:{children:"Aceptar",onClick(){r(!1)}},isOpen:n})]})}},s={args:{isOpen:!1,type:"warning",titleAlign:"right",children:"Para cerrar este modal deberás dar click fuera del recuadro o con la tecla ESC",title:"Firma de contrato"},render:function(t){const[n,r]=c.useState(t.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>r(!0),children:"Show Modal"}),e.jsx(i,{...t,buttonCancel:{children:"Cancelar"},buttonOk:{children:"Aceptar"},isOpen:n,onClose:()=>r(!1)})]})}},l={args:{isOpen:!1,type:"default",titleAlign:"right"},render:function(t){const[n,r]=c.useState(t.isOpen);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>r(!0),children:"Show Modal"}),e.jsx(i,{...t,buttonCancel:{children:"Cancelar",onClick(){r(!1)}},buttonOk:{children:"Aceptar"},isOpen:n,children:e.jsxs(o,{direction:"vertical",gap:4,align:"center",children:[e.jsx(O,{size:"xl",icon:e.jsx(j,{}),bgClassName:"bg-gray-3",colorClassName:"text-primary-blue"}),e.jsxs(o,{gap:4,children:[e.jsx(o,{align:"center",justify:"center",className:"mx-auto h-7 w-7 flex-shrink-0 rounded-full text-white bg-info",children:e.jsx(k,{})}),e.jsxs(o,{gap:2,direction:"vertical",children:[e.jsx(v,{level:4,weight:"bold",className:"text-gray-12",children:"modalStore.title"}),e.jsx("span",{className:"text-gray-11",children:"Para acceder a las opciones del sistema, es necesario que selecciones la sucursal en la que te encuentras."})]})]}),e.jsx(w,{required:!0,label:"Sucursal",options:[{value:"test 1",label:"test 1"},{value:"test 2",label:"test 2"},{value:"test 3",label:"test 3"},{value:"test 4",label:"test 4"},{value:"test 5",label:"test 5"},{value:"test 6",label:"test 6"},{value:"test 7",label:"test 7"},{value:"test 8",label:"test 8"},{value:"test 9",label:"test 9"},{value:"test 10",label:"test 10"}]})]})})]})}};var u,d,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    type: "info",
    titleAlign: "right",
    children: "Estas apunto de generar el contrato. ¿El cliente está de acuerdo con la firma del contrato?",
    title: "Firma de contrato"
  },
  render: function Render(args) {
    const [show, setShow] = useState(args.isOpen);
    return <>\r
        <Button onClick={() => setShow(true)}>Show Modal</Button>\r
        <CustomModal {...args} buttonOk={{
        children: "Aceptar",
        onClick() {
          setShow(false);
        }
      }} isOpen={show} />\r
      </>;
  }
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,f,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    type: "warning",
    titleAlign: "right",
    children: "Para cerrar este modal deberás dar click fuera del recuadro o con la tecla ESC",
    title: "Firma de contrato"
  },
  render: function Render(args) {
    const [show, setShow] = useState(args.isOpen);
    return <>\r
        <Button onClick={() => setShow(true)}>Show Modal</Button>\r
        <CustomModal {...args} buttonCancel={{
        children: "Cancelar"
      }} buttonOk={{
        children: "Aceptar"
      }} isOpen={show} onClose={() => setShow(false)} />\r
      </>;
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,S,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    type: "default",
    titleAlign: "right"
  },
  render: function Render(args) {
    const [show, setShow] = useState(args.isOpen);
    return <>\r
        <Button onClick={() => setShow(true)}>Show Modal</Button>\r
        <CustomModal {...args} buttonCancel={{
        children: "Cancelar",
        onClick() {
          setShow(false);
        }
      }} buttonOk={{
        children: "Aceptar"
      }} isOpen={show}>\r
          <Flex direction="vertical" gap={4} align={"center"}>\r
            <Avatar size="xl" icon={<DoneIcon />} bgClassName="bg-gray-3" colorClassName="text-primary-blue" />\r
            <Flex gap={4}>\r
              <Flex align={"center"} justify={"center"} className="mx-auto h-7 w-7 flex-shrink-0 rounded-full text-white bg-info">\r
                <InfoIcon />\r
              </Flex>\r
              <Flex gap={2} direction="vertical">\r
                <Title level={4} weight="bold" className="text-gray-12">\r
                  {"modalStore.title"}\r
                </Title>\r
                <span className="text-gray-11">\r
                  {"Para acceder a las opciones del sistema, es necesario que selecciones la sucursal en la que te encuentras."}\r
                </span>\r
              </Flex>\r
            </Flex>\r
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
          </Flex>\r
        </CustomModal>\r
      </>;
  }
}`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const De=["Info","onCloseModal","WithChildren"];export{a as Info,l as WithChildren,De as __namedExportsOrder,ze as default,s as onCloseModal};
