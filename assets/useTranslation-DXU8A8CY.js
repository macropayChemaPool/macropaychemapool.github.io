import{r as l}from"./index-CBqU2yxZ.js";import{I as k,R as A,g as F,a as M}from"./context-DPnKhrhb.js";function P(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const S={};function C(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];typeof e[0]=="string"&&S[e[0]]||(typeof e[0]=="string"&&(S[e[0]]=new Date),P(...e))}const z=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}};function R(t,e,n){t.loadNamespaces(e,z(t,n))}function v(t,e,n,r){typeof n=="string"&&(n=[n]),n.forEach(i=>{t.options.ns.indexOf(i)<0&&t.options.ns.push(i)}),t.loadLanguages(e,z(t,r))}function j(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=e.languages[0],i=e.options?e.options.fallbackLng:!1,s=e.languages[e.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const c=(w,m)=>{const o=e.services.backendConnector.state[`${w}|${m}`];return o===-1||o===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!c(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(r,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||c(r,t)&&(!i||c(s,t)))}function B(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(C("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,s)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!s(i.isLanguageChangingTo,t))return!1}}):j(t,e,n)}const J=(t,e)=>{const n=l.useRef();return l.useEffect(()=>{n.current=e?n.current:t},[t,e]),n.current};function E(t,e,n,r){return t.getFixedT(e,n,r)}function O(t,e,n,r){return l.useCallback(E(t,e,n,r),[t,e,n,r])}function H(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:n}=e,{i18n:r,defaultNS:i}=l.useContext(k)||{},s=n||r||M();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new A),!s){C("You will need to pass in an i18next instance by using initReactI18next");const a=(g,u)=>typeof u=="string"?u:u&&typeof u=="object"&&typeof u.defaultValue=="string"?u.defaultValue:Array.isArray(g)?g[g.length-1]:g,f=[a,{},!1];return f.t=a,f.i18n={},f.ready=!1,f}s.options.react&&s.options.react.wait!==void 0&&C("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const c={...F(),...s.options.react,...e},{useSuspense:w,keyPrefix:m}=c;let o=t||i||s.options&&s.options.defaultNS;o=typeof o=="string"?[o]:o||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(o);const p=(s.isInitialized||s.initializedStoreOnce)&&o.every(a=>B(a,s,c)),$=O(s,e.lng||null,c.nsMode==="fallback"?o:o[0],m),x=()=>$,y=()=>E(s,e.lng||null,c.nsMode==="fallback"?o:o[0],m),[I,h]=l.useState(x);let N=o.join();e.lng&&(N=`${e.lng}${N}`);const L=J(N),d=l.useRef(!0);l.useEffect(()=>{const{bindI18n:a,bindI18nStore:f}=c;d.current=!0,!p&&!w&&(e.lng?v(s,e.lng,o,()=>{d.current&&h(y)}):R(s,o,()=>{d.current&&h(y)})),p&&L&&L!==N&&d.current&&h(y);function g(){d.current&&h(y)}return a&&s&&s.on(a,g),f&&s&&s.store.on(f,g),()=>{d.current=!1,a&&s&&a.split(" ").forEach(u=>s.off(u,g)),f&&s&&f.split(" ").forEach(u=>s.store.off(u,g))}},[s,N]);const T=l.useRef(!0);l.useEffect(()=>{d.current&&!T.current&&h(x),T.current=!1},[s,m]);const b=[I,s,p];if(b.t=I,b.i18n=s,b.ready=p,p||!p&&!w)return b;throw new Promise(a=>{e.lng?v(s,e.lng,o,()=>a()):R(s,o,()=>a())})}export{H as u};
