import{d as O}from"./index-DrFu-skq.js";import{v as g}from"./v4-CQkTLCs1.js";var T=class extends Error{constructor(){super(...arguments),this.data={},this.documentation=!1,this.fromStorybook=!0}get fullErrorCode(){let t=String(this.code).padStart(4,"0");return`SB_${this.category}_${t}`}get name(){let t=this.constructor.name;return`${this.fullErrorCode} (${t})`}get message(){let t;return this.documentation===!0?t=`https://storybook.js.org/error/${this.fullErrorCode}`:typeof this.documentation=="string"?t=this.documentation:Array.isArray(this.documentation)&&(t=`
${this.documentation.map(e=>`	- ${e}`).join(`
`)}`),`${this.template()}${t!=null?`

More info: ${t}
`:""}`}},N=(t=>(t.PREVIEW_CLIENT_LOGGER="PREVIEW_CLIENT-LOGGER",t.PREVIEW_CHANNELS="PREVIEW_CHANNELS",t.PREVIEW_CORE_EVENTS="PREVIEW_CORE-EVENTS",t.PREVIEW_INSTRUMENTER="PREVIEW_INSTRUMENTER",t.PREVIEW_API="PREVIEW_API",t.PREVIEW_REACT_DOM_SHIM="PREVIEW_REACT-DOM-SHIM",t.PREVIEW_ROUTER="PREVIEW_ROUTER",t.PREVIEW_THEMING="PREVIEW_THEMING",t.RENDERER_HTML="RENDERER_HTML",t.RENDERER_PREACT="RENDERER_PREACT",t.RENDERER_REACT="RENDERER_REACT",t.RENDERER_SERVER="RENDERER_SERVER",t.RENDERER_SVELTE="RENDERER_SVELTE",t.RENDERER_VUE="RENDERER_VUE",t.RENDERER_VUE3="RENDERER_VUE3",t.RENDERER_WEB_COMPONENTS="RENDERER_WEB-COMPONENTS",t))(N||{}),y=class extends T{constructor(t){super(),this.data=t,this.category="PREVIEW_API",this.code=2,this.documentation="https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function"}template(){return O`
      We detected that you use an implicit action arg during ${this.data.phase} of your story.  
      ${this.data.deprecated?`
This is deprecated and won't work in Storybook 8 anymore.
`:""}
      Please provide an explicit spy to your args like this:
        import { fn } from '@storybook/test';
        ... 
        args: {
         ${this.data.name}: fn()
        }
    `}};const{addons:A}=__STORYBOOK_MODULE_PREVIEW_API__,{global:u}=__STORYBOOK_MODULE_GLOBAL__;var P="storybook/actions",V=`${P}/action-event`,D={depth:10,clearOnStoryChange:!0,limit:50},h=(t,e)=>{let r=Object.getPrototypeOf(t);return!r||e(r)?r:h(r,e)},S=t=>!!(typeof t=="object"&&t&&h(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),b=t=>{if(S(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let r=Object.getOwnPropertyDescriptor(e,"view"),o=r==null?void 0:r.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...r,value:Object.create(o.constructor.prototype)}),e}return t},W=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?g():Date.now().toString(36)+Math.random().toString(36).substring(2);function c(t,e={}){let r={...D,...e},o=function(...i){var d,p;if(e.implicit){let l=(d="__STORYBOOK_PREVIEW__"in u?u.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(a=>a.phase==="playing"||a.phase==="rendering");if(l){let a=!((p=window==null?void 0:window.FEATURES)!=null&&p.disallowImplicitActionsInRenderV8),_=new y({phase:l.phase,name:t,deprecated:a});if(a)console.warn(_);else throw _}}let n=A.getChannel(),E=W(),s=5,R=i.map(b),I=i.length>1?R:R[0],f={id:E,count:0,data:{name:t,args:I},options:{...r,maxDepth:s+(r.depth||3),allowFunction:r.allowFunction||!1}};n.emit(V,f)};return o.isAction=!0,o}var m=(t,e)=>typeof e[t]>"u"&&!(t in e),M=t=>{let{initialArgs:e,argTypes:r,id:o,parameters:{actions:i}}=t;if(!i||i.disable||!i.argTypesRegex||!r)return{};let n=new RegExp(i.argTypesRegex);return Object.entries(r).filter(([E])=>!!n.test(E)).reduce((E,[s,R])=>(m(s,e)&&(E[s]=c(s,{implicit:!0,id:o})),E),{})},j=t=>{let{initialArgs:e,argTypes:r,parameters:{actions:o}}=t;return o!=null&&o.disable||!r?{}:Object.entries(r).filter(([i,n])=>!!n.action).reduce((i,[n,E])=>(m(n,e)&&(i[n]=c(typeof E.action=="string"?E.action:n)),i),{})},L=[j,M],w=t=>{let{args:e,parameters:{actions:r}}=t;r!=null&&r.disable||Object.entries(e).filter(([,o])=>typeof o=="function"&&"_isMockFunction"in o&&o._isMockFunction).forEach(([o,i])=>{let n=i.getMockImplementation();if((n==null?void 0:n._actionAttached)!==!0&&(n==null?void 0:n.isAction)!==!0){let E=(...s)=>(c(o)(...s),n==null?void 0:n(...s));E._actionAttached=!0,i.mockImplementation(E)}})},x=[w];export{L as argsEnhancers,x as loaders};
