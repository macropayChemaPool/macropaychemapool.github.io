import{j as r}from"./jsx-runtime-CKrituN3.js";import{D as a}from"./index-7Ft9nnNq.js";import{r as u}from"./index-CBqU2yxZ.js";import"./index-C2Z7O5rZ.js";import"./index-DG7Q3Dq3.js";import{B as h}from"./index-VmM7UL7m.js";import"./index-BP4EyUq5.js";import"./index-DIwAYYUA.js";import"./index-C_nx0Xlk.js";import"./index-Bn1I-lXV.js";import"./index-DXEnVRSn.js";import"./index-CIRioFQb.js";import"./index-CyUlHOnJ.js";import"./index-BUGg538s.js";import"./index-zSCZygLW.js";import"./index-C3Z1soji.js";import"./index-D5CLxqWJ.js";import"./index-BDojC_u0.js";import"./index-CUpT5qUY.js";import"./index-CDg6f_6u.js";import"./index-ClyCz-ee.js";import"./index-BZJOXXw0.js";import"./index-DjFSr5zk.js";import"./index-Dt3erTFN.js";import{S as f}from"./index-DvTq1sih.js";import"./index-C_yO6Xh5.js";import"./index-Btse5Dbq.js";import"./index-Crespr8y.js";import"./index-b-oseSN6.js";import"./index-BfHBh7J_.js";import"./index-DVLFP1dO.js";import"./index-CIfHFUhB.js";import"./index-cgZVANQY.js";import"./index-D6azOPdI.js";import"./index-Das4PGPV.js";import"./index-DorKUY0W.js";import"./index-sNF4Zf4l.js";import"./index-D1j_YUYJ.js";import"./index-BkRF9wFY.js";import"./index-CTpwdEGh.js";import"./index-qbg5EmaA.js";import"./index-DFqD8mfM.js";import"./classNames-CoONMu-Z.js";import"./store-Co352TV1.js";import"./index-QaoBqWcy.js";import"./transition-BDdlExqH.js";import"./index.browser-DP16PUbO.js";import"./useTranslation-DXU8A8CY.js";import"./context-DPnKhrhb.js";import"./keyboard-B5upkSX_.js";import"./use-owner-BuQqy2kA.js";import"./use-text-value-DqQEW2an.js";import"./use-tree-walker-B-9c0BuR.js";import"./MX-CCeM61H4.js";import"./index-D0VCqKhc.js";import"./close-rI1dvE4l.js";import"./dialog-VZvtz3bU.js";import"./active-element-history-DM4WbiwA.js";import"./hidden-CN1vEaDl.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./done-C82prHqh.js";import"./info-1Xie4BZq.js";import"./check-B5O8_k_f.js";import"./extends-CCbyfPlC.js";import"./form-BsJ3P7Gw.js";import"./index-BC713UYR.js";import"./index-CucCv4Fq.js";const Ar={title:"Components/CustomDrawer",component:a,tags:["autodocs"],parameters:{layout:"centered",deepControls:{enabled:!1}},argTypes:{},args:{buttonOk:{icon:r.jsx(f,{}),iconPosition:"right",children:"Continuar con solicitud"}}},e={args:{isOpen:!1,children:r.jsx("div",{className:"h-[80rem]",children:'"Estas apunto de generar el contrato. ¿El cliente está de acuerdo con la firma del contrato?"'}),title:"Firma de contrato"},render:function(t){const[i,o]=u.useState(t.isOpen);return r.jsxs(r.Fragment,{children:[r.jsx(h,{onClick:()=>o(!0),children:"Show Drawer"}),r.jsx(a,{...t,isOpen:i,buttonCancel:{children:"Agregar otro financiamiento",onClick(){o(!1)}}})]})}},n={args:{isOpen:!1,children:r.jsx("div",{className:"h-[70rem] bg-purple-3",children:'"Estas apunto de generar el contrato. ¿El cliente está de acuerdo con la firma del contrato?"'}),title:"Firma de contrato"},render:function(t){const[i,o]=u.useState(t.isOpen);return r.jsxs(r.Fragment,{children:[r.jsx(h,{onClick:()=>o(!0),children:"Show Drawer"}),r.jsx(a,{...t,isOpen:i,onClose:()=>o(!1),buttonCancel:{children:"Agregar otro financiamiento"}})]})}};var s,m,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const yr=["Primary","Scroll"];export{e as Primary,n as Scroll,yr as __namedExportsOrder,Ar as default};
