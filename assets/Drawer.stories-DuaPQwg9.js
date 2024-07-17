import{j as r}from"./jsx-runtime-CKrituN3.js";import{D as a}from"./index-AKvBJBpT.js";import{r as u}from"./index-CBqU2yxZ.js";import"./index-BSZ6HaKa.js";import"./index-CD_jVu0m.js";import{B as h}from"./index-BVZLexmJ.js";import"./index-p0jS0Vkr.js";import"./index-DIwAYYUA.js";import"./index-DwLwwla0.js";import"./index-DJej9ukk.js";import"./index-mky2RytA.js";import"./index-DXEnVRSn.js";import"./index-IKkC8jR6.js";import"./index-DXlDdgoQ.js";import"./index-BjNHhc96.js";import"./index-BNMX3XEH.js";import"./index-C3Z1soji.js";import"./index-vBKB_eRL.js";import"./index-zRcuZCV5.js";import"./index-6XZfZBOw.js";import"./index-CuDHkTr1.js";import"./index-CJ33g0_J.js";import"./index-DMpQw-vB.js";import"./index-Ci0M9How.js";import"./index-D8M4WgYd.js";import{S as f}from"./index-_uA0Iphp.js";import"./index-C5U_xphb.js";import"./index-DqBp58f5.js";import"./index-C-QEOkfH.js";import"./index-D0CEKIh4.js";import"./index-B9uoawT1.js";import"./index-DEBQXPbV.js";import"./index-Cgph5szl.js";import"./index-MLE72NiV.js";import"./index-xkUtCLJl.js";import"./index-gq-3YsZg.js";import"./index-BS1-a123.js";import"./index-C2YwbafU.js";import"./index-DoOvTBki.js";import"./index-DODEPqAU.js";import"./index-GnvDTAUE.js";import"./index-BmpHqVfh.js";import"./index-B2lXgc8S.js";import"./index-BuFebpyZ.js";import"./index-B6Zrd_5s.js";import"./index-Dmv3E6R1.js";import"./index-BN-jaSRk.js";import"./index-BBeAxNTk.js";import"./classNames-DY9r7t_J.js";import"./clsx-B-dksMZM.js";import"./store-Co352TV1.js";import"./index-Fp_I180m.js";import"./transition-BDdlExqH.js";import"./index.browser-DP16PUbO.js";import"./useTranslation-GCZZtW1t.js";import"./context-DPnKhrhb.js";import"./keyboard-B5upkSX_.js";import"./use-owner-BuQqy2kA.js";import"./use-text-value-DqQEW2an.js";import"./use-tree-walker-B-9c0BuR.js";import"./MX-1k0A0kB5.js";import"./index-DHzGF3Q-.js";import"./close-rI1dvE4l.js";import"./dialog-VZvtz3bU.js";import"./active-element-history-DM4WbiwA.js";import"./hidden-CN1vEaDl.js";import"./index-BtM5VmRH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./arrow-mp-CrGFeibr.js";import"./info-circle-TApl4-4t.js";import"./check-B5O8_k_f.js";import"./done-C82prHqh.js";import"./info-BN42PO8v.js";import"./slicedToArray-B2FWUPQC.js";import"./extends-CF3RwP-h.js";import"./down-CBhbPet_.js";import"./form-DdjUVvU2.js";import"./index-CT_AGQEv.js";import"./motion-C2-VAH6j.js";import"./index-Pd4Qji_3.js";import"./index-L-zI6vNv.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BGn3u_Cr.js";const Mr={title:"Components/CustomDrawer",component:a,tags:["autodocs"],parameters:{layout:"centered",deepControls:{enabled:!1}},argTypes:{},args:{buttonOk:{icon:r.jsx(f,{}),iconPosition:"right",children:"Continuar con solicitud"}}},e={args:{isOpen:!1,children:r.jsx("div",{className:"h-[80rem]",children:'"Estas apunto de generar el contrato. ¿El cliente está de acuerdo con la firma del contrato?"'}),title:"Firma de contrato"},render:function(t){const[i,o]=u.useState(t.isOpen);return r.jsxs(r.Fragment,{children:[r.jsx(h,{onClick:()=>o(!0),children:"Show Drawer"}),r.jsx(a,{...t,isOpen:i,buttonCancel:{children:"Agregar otro financiamiento",onClick(){o(!1)}}})]})}},n={args:{isOpen:!1,children:r.jsx("div",{className:"h-[70rem] bg-purple-3",children:'"Estas apunto de generar el contrato. ¿El cliente está de acuerdo con la firma del contrato?"'}),title:"Firma de contrato"},render:function(t){const[i,o]=u.useState(t.isOpen);return r.jsxs(r.Fragment,{children:[r.jsx(h,{onClick:()=>o(!0),children:"Show Drawer"}),r.jsx(a,{...t,isOpen:i,onClose:()=>o(!1),buttonCancel:{children:"Agregar otro financiamiento"}})]})}};var s,m,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const Qr=["Primary","Scroll"];export{e as Primary,n as Scroll,Qr as __namedExportsOrder,Mr as default};
