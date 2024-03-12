import{j as r}from"./jsx-runtime-CKrituN3.js";import{D as a}from"./index-yAGdueCI.js";import{r as u}from"./index-CBqU2yxZ.js";import"./index-XA9O6txJ.js";import"./index-CiUhjnxo.js";import{B as h}from"./index-CAg3X06L.js";import"./index-D6jeTGqA.js";import"./index-De_bymGm.js";import"./index-C2R2afit.js";import"./index-BuzNCIiI.js";import"./index-DXEnVRSn.js";import"./index-BFP8q0AU.js";import"./index-oZ4giORx.js";import"./index-B8r7332h.js";import"./index-BSHD8Omk.js";import"./index-C3Z1soji.js";import"./index-BHX4XRWY.js";import"./index-DAuMGSig.js";import"./index-COwV-0hp.js";import"./index-Cd1HzHtJ.js";import"./index-fA6U7qy9.js";import"./index-BGdDK-Yy.js";import"./index-BxHLHjKq.js";import"./index-DSdNpNqs.js";import{S as f}from"./index-BPpSj1_A.js";import"./index-9fVIejwl.js";import"./index-CcVT9h2o.js";import"./index-DY7ht11z.js";import"./index-LGBCSjlU.js";import"./index-B9YemcL6.js";import"./index-B70qEzGO.js";import"./index-BwXFwy9o.js";import"./index-CzekK4wq.js";import"./index-spCptGEP.js";import"./index-CqPO378o.js";import"./index-DhVZgb1q.js";import"./index-CR85iHN9.js";import"./index-CZxQjAG6.js";import"./index-B8Oc0hay.js";import"./index-lnTLM7Dd.js";import"./clsx-B-dksMZM.js";import"./useTranslation-BtJcBoU7.js";import"./context-DPnKhrhb.js";import"./index-QaoBqWcy.js";import"./transition-BDdlExqH.js";import"./keyboard-B5upkSX_.js";import"./use-owner-BuQqy2kA.js";import"./use-text-value-DqQEW2an.js";import"./use-tree-walker-B-9c0BuR.js";import"./close-rI1dvE4l.js";import"./done-C82prHqh.js";import"./info-1Xie4BZq.js";import"./dialog-VZvtz3bU.js";import"./active-element-history-DM4WbiwA.js";import"./hidden-CN1vEaDl.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./MX-CqWhJTXN.js";import"./index-RrYVSrlt.js";import"./classNames-DY9r7t_J.js";import"./extends-CCbyfPlC.js";import"./form-BsJ3P7Gw.js";import"./index-CdsSOEpR.js";const Br={title:"Components/CustomDrawer",component:a,tags:["autodocs"],parameters:{layout:"centered",deepControls:{enabled:!1}},argTypes:{},args:{buttonOk:{icon:r.jsx(f,{}),iconPosition:"right",children:"Continuar con solicitud"}}},e={args:{isOpen:!1,children:r.jsx("div",{className:"h-[80rem]",children:'"Estas apunto de generar el contrato. ¿El cliente está de acuerdo con la firma del contrato?"'}),title:"Firma de contrato"},render:function(t){const[i,o]=u.useState(t.isOpen);return r.jsxs(r.Fragment,{children:[r.jsx(h,{onClick:()=>o(!0),children:"Show Drawer"}),r.jsx(a,{...t,isOpen:i,buttonCancel:{children:"Agregar otro financiamiento",onClick(){o(!1)}}})]})}},n={args:{isOpen:!1,children:r.jsx("div",{className:"h-[70rem] bg-purple-3",children:'"Estas apunto de generar el contrato. ¿El cliente está de acuerdo con la firma del contrato?"'}),title:"Firma de contrato"},render:function(t){const[i,o]=u.useState(t.isOpen);return r.jsxs(r.Fragment,{children:[r.jsx(h,{onClick:()=>o(!0),children:"Show Drawer"}),r.jsx(a,{...t,isOpen:i,onClose:()=>o(!1),buttonCancel:{children:"Agregar otro financiamiento"}})]})}};var s,m,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    children: <div className="h-[80rem]">\r
        "Estas apunto de generar el contrato. ¿El cliente está de acuerdo con la\r
        firma del contrato?"\r
      </div>,
    title: "Firma de contrato"
  },
  render: function Render(args) {
    const [show, setShow] = useState(args.isOpen);
    return <>\r
        <Button onClick={() => setShow(true)}>Show Drawer</Button>\r
        <Drawer {...args} isOpen={show}
      // onClose={() => setShow(false)}
      buttonCancel={{
        children: "Agregar otro financiamiento",
        onClick() {
          setShow(false);
        }
      }} />\r
      </>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    children: <div className="h-[70rem] bg-purple-3">\r
        "Estas apunto de generar el contrato. ¿El cliente está de acuerdo con la\r
        firma del contrato?"\r
      </div>,
    title: "Firma de contrato"
  },
  render: function Render(args) {
    const [show, setShow] = useState(args.isOpen);
    return <>\r
        <Button onClick={() => setShow(true)}>Show Drawer</Button>\r
        <Drawer {...args} isOpen={show} onClose={() => setShow(false)} buttonCancel={{
        children: "Agregar otro financiamiento"
      }} />\r
      </>;
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const Fr=["Primary","Scroll"];export{e as Primary,n as Scroll,Fr as __namedExportsOrder,Br as default};
