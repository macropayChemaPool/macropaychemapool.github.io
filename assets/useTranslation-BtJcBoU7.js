import{r as i}from"./index-CBqU2yxZ.js";import{I as M,R as Z,g as $,a as k}from"./context-DPnKhrhb.js";const U=n=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",width:"1em",fill:"currentColor",viewBox:"0 -960 960 960",...n},i.createElement("path",{d:"M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Zm-38-240h556-556Zm0 0h556l-24-120H226l-24 120Z"}));function A(){if(console&&console.warn){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const L={};function y(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];typeof e[0]=="string"&&L[e[0]]||(typeof e[0]=="string"&&(L[e[0]]=new Date),A(...e))}const E=(n,e)=>()=>{if(n.isInitialized)e();else{const t=()=>{setTimeout(()=>{n.off("initialized",t)},0),e()};n.on("initialized",t)}};function T(n,e,t){n.loadNamespaces(e,E(n,t))}function R(n,e,t,s){typeof t=="string"&&(t=[t]),t.forEach(u=>{n.options.ns.indexOf(u)<0&&n.options.ns.push(u)}),n.loadLanguages(e,E(n,s))}function F(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const s=e.languages[0],u=e.options?e.options.fallbackLng:!1,r=e.languages[e.languages.length-1];if(s.toLowerCase()==="cimode")return!0;const f=(b,m)=>{const o=e.services.backendConnector.state[`${b}|${m}`];return o===-1||o===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!f(e.isLanguageChangingTo,n)?!1:!!(e.hasResourceBundle(s,n)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||f(s,n)&&(!u||f(r,n)))}function P(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(y("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(n,{lng:t.lng,precheck:(u,r)=>{if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&u.services.backendConnector.backend&&u.isLanguageChangingTo&&!r(u.isLanguageChangingTo,n))return!1}}):F(n,e,t)}const j=(n,e)=>{const t=i.useRef();return i.useEffect(()=>{t.current=e?t.current:n},[n,e]),t.current};function z(n,e,t,s){return n.getFixedT(e,t,s)}function B(n,e,t,s){return i.useCallback(z(n,e,t,s),[n,e,t,s])}function G(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:t}=e,{i18n:s,defaultNS:u}=i.useContext(M)||{},r=t||s||k();if(r&&!r.reportNamespaces&&(r.reportNamespaces=new Z),!r){y("You will need to pass in an i18next instance by using initReactI18next");const a=(g,c)=>typeof c=="string"?c:c&&typeof c=="object"&&typeof c.defaultValue=="string"?c.defaultValue:Array.isArray(g)?g[g.length-1]:g,l=[a,{},!1];return l.t=a,l.i18n={},l.ready=!1,l}r.options.react&&r.options.react.wait!==void 0&&y("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const f={...$(),...r.options.react,...e},{useSuspense:b,keyPrefix:m}=f;let o=n||u||r.options&&r.options.defaultNS;o=typeof o=="string"?[o]:o||["translation"],r.reportNamespaces.addUsedNamespaces&&r.reportNamespaces.addUsedNamespaces(o);const p=(r.isInitialized||r.initializedStoreOnce)&&o.every(a=>P(a,r,f)),H=B(r,e.lng||null,f.nsMode==="fallback"?o:o[0],m),x=()=>H,v=()=>z(r,e.lng||null,f.nsMode==="fallback"?o:o[0],m),[C,h]=i.useState(x);let w=o.join();e.lng&&(w=`${e.lng}${w}`);const S=j(w),d=i.useRef(!0);i.useEffect(()=>{const{bindI18n:a,bindI18nStore:l}=f;d.current=!0,!p&&!b&&(e.lng?R(r,e.lng,o,()=>{d.current&&h(v)}):T(r,o,()=>{d.current&&h(v)})),p&&S&&S!==w&&d.current&&h(v);function g(){d.current&&h(v)}return a&&r&&r.on(a,g),l&&r&&r.store.on(l,g),()=>{d.current=!1,a&&r&&a.split(" ").forEach(c=>r.off(c,g)),l&&r&&l.split(" ").forEach(c=>r.store.off(c,g))}},[r,w]);const I=i.useRef(!0);i.useEffect(()=>{d.current&&!I.current&&h(x),I.current=!1},[r,m]);const N=[C,r,p];if(N.t=C,N.i18n=r,N.ready=p,p||!p&&!b)return N;throw new Promise(a=>{e.lng?R(r,e.lng,o,()=>a()):T(r,o,()=>a())})}export{U as S,G as u};