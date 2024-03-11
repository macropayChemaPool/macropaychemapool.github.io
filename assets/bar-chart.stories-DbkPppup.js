import{j as y}from"./jsx-runtime-CKrituN3.js";import{C,a as B,L as P,B as E,p as V,b as w,c as z,d as A}from"./index-DaOMi393.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const o=6,j={elements:{bar:{borderWidth:0,borderRadius:o}},responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!1}},scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,grid:{display:!1}}}},k={vertical:"x",horizontal:"y"},q={backgroundColor:"#0047ba",barPercentage:.8,categoryPercentage:.8,data:[]},f=(e,a)=>{const{x:t,y:r,w:s,h:i,radius:c}=a;e.beginPath(),e.fillStyle="#EDF2F7",e.roundRect(t,r,s,i,c),e.fill()},F=e=>e.options.indexAxis==="y",R={id:"progressBar",beforeDatasetsDraw(e){const{ctx:a,data:t,chartArea:{width:r,height:s,left:i,top:c},scales:{x:p,y:b}}=e;a.save();const l=t.datasets[0],u=(l==null?void 0:l.barPercentage)??0,g=(l==null?void 0:l.categoryPercentage)??0,m=r/p.ticks.length*u*g,L=s/b.ticks.length*u*g;t.datasets[0].data.forEach((S,h)=>{if(F(e)){f(a,{x:i,y:b.getPixelForValue(h)-L/2,w:r,h:L,radius:[0,o,o,0]});return}f(a,{x:p.getPixelForValue(h)-m/2,y:c,w:m,h:s,radius:[o,o,0,0]})})}};C.register(B,P,E,V,w,z);const d=({labels:e,values:a=[],tooltipLabel:t,type:r="horizontal"})=>{const s={labels:e,datasets:[{...q,label:t,data:a}]};return y.jsx("div",{className:"h-[500px]",children:y.jsx(A,{options:{...j,indexAxis:k[r]},data:s,plugins:[R]})})};try{d.displayName="BarChart",d.__docgenInfo={description:"",displayName:"BarChart",props:{labels:{defaultValue:null,description:"",name:"labels",required:!1,type:{name:"string[]"}},values:{defaultValue:{value:"[]"},description:"",name:"values",required:!1,type:{name:"number[]"}},tooltipLabel:{defaultValue:null,description:"",name:"tooltipLabel",required:!1,type:{name:"string"}},type:{defaultValue:{value:"horizontal"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}}}catch{}const W={title:"Components/Charts/BarChart",component:d,tags:["autodocs"],argTypes:{}},n={args:{values:[1,2,3,4,5,4,2,3,2,6,6,9,6,2],labels:["Label 1","Label 2","Label 3","Label 4","Label 5","Label 6","Label 7","Label 8","Label 9","Label 10","Label 11","Label 12","Label 13","Label 14"]}};var x,v,_;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    values: [1, 2, 3, 4, 5, 4, 2, 3, 2, 6, 6, 9, 6, 2],
    labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6", "Label 7", "Label 8", "Label 9", "Label 10", "Label 11", "Label 12", "Label 13", "Label 14"]
  }
}`,...(_=(v=n.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const D=["Example"];export{n as Example,D as __namedExportsOrder,W as default};
