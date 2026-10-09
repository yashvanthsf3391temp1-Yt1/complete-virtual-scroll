import{j as e}from"./index-DlC1yEB1.js";import{r as a}from"./index-D5jfS-9e.js";import{S as p,D as b,W as g,a as x,M as h}from"./agenda-view-dL467uGC.js";import"./recurrence-editor-byJWIIef.js";import{d as y}from"./dataSource-BQKtoYBq.js";/* empty css               */import"./index-lf5wH9A6.js";const k=({logger:t})=>{const[n,s]=a.useState([]);return a.useEffect(()=>{const r=o=>{const d=o.detail,u=new Date().toLocaleTimeString();s(m=>[`${u} - ${d}`,...m].slice(0,50))};return t.addEventListener("log",r),()=>t.removeEventListener("log",r)},[t]),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[e.jsx("h4",{style:{margin:0},children:"Event trace"}),e.jsx("button",{onClick:()=>s([]),children:"Clear"})]}),e.jsx("div",{id:"event-trace",style:{height:510,overflow:"auto",border:"1px solid #e0e0e0",borderRadius:4,padding:8,background:"#fafafa"},children:n.length===0?e.jsx("div",{style:{color:"#666"},children:"Interact with the scheduler to see events here."}):e.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:n.map((r,o)=>e.jsx("li",{style:{padding:"4px 0",borderBottom:"1px dashed #e5e5e5"},children:r},o))})})]})},B=({enable:t=!0})=>{const n={dataSource:y,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},s=a.useRef(null);return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(p,{ref:s,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,10,1),defaultView:"Week",eventResize:{enable:t},eventSettings:n,children:[e.jsx(b,{}),e.jsx(g,{}),e.jsx(x,{}),e.jsx(h,{})]})})})},I=({})=>{const t=a.useRef(new EventTarget),n=a.useMemo(()=>r=>{t.current.dispatchEvent(new CustomEvent("log",{detail:r}))},[]),s={dataSource:y,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsxs("div",{className:"scheduler-control",style:{display:"grid",gridTemplateColumns:"1fr 320px",gap:"16px"},children:[e.jsxs(p,{height:"550px",width:"100%",defaultSelectedDate:new Date(2017,10,1),defaultView:"Week",eventResize:{enable:!0,interval:10,resizeToZero:!1,startResizable:!0,endResizable:!0,scroll:{enable:!0,scrollBy:10,timeDelay:100}},eventSettings:s,onResizeStart:()=>n("onResizeStart"),onResizing:()=>n("onResizing"),onResizeStop:()=>n("onResizeStop"),children:[e.jsx(b,{}),e.jsx(g,{}),e.jsx(x,{}),e.jsx(h,{})]}),e.jsx(k,{logger:t.current})]})})},C=({enable:t=!0,interval:n=10,resizeToZero:s=!1,startResizable:r=!0,endResizable:o=!0,autoScroll:d=!0,scrollBy:u=10,timeDelay:m=100})=>{const w={dataSource:y,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(p,{height:"550px",width:"100%",defaultSelectedDate:new Date(2017,10,1),defaultView:"Week",eventResize:{enable:t,interval:n,resizeToZero:s,startResizable:r,endResizable:o,scroll:{enable:d,scrollBy:u,timeDelay:m}},eventSettings:w,children:[e.jsx(b,{}),e.jsx(g,{}),e.jsx(x,{}),e.jsx(h,{})]})})})},U={title:"Scheduler/Event Resize",parameters:{layout:"padded",docs:{description:{component:"Meta configuration for the Storybook stories"}}},tags:["autodocs"]},l={render:t=>e.jsx(B,{...t}),args:{enable:!0},parameters:{controls:{include:["enable"]}},argTypes:{enable:{control:"boolean"}}},i={render:t=>e.jsx(C,{...t}),args:{enable:!0,interval:10,resizeToZero:!1,startResizable:!0,endResizable:!0,autoScroll:!0,scrollBy:10,timeDelay:100},parameters:{controls:{include:["enable","interval","resizeToZero","startResizable","endResizable","autoScroll","scrollBy","timeDelay"]}},argTypes:{enable:{control:"boolean"},interval:{control:"number"},resizeToZero:{control:"boolean"},startResizable:{control:"boolean"},endResizable:{control:"boolean"},autoScroll:{control:"boolean"},scrollBy:{control:"number"},timeDelay:{control:"number"}}},c={render:()=>e.jsx(I,{})};var j,v,R;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <EventResizeSample {...args} />,
  args: {
    enable: true
  },
  parameters: {
    controls: {
      include: ['enable']
    }
  },
  argTypes: {
    enable: {
      control: 'boolean'
    }
  }
}`,...(R=(v=l.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var z,S,f;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <CustomizedSample {...args} />,
  args: {
    enable: true,
    interval: 10,
    resizeToZero: false,
    startResizable: true,
    endResizable: true,
    autoScroll: true,
    scrollBy: 10,
    timeDelay: 100
  },
  parameters: {
    controls: {
      include: ['enable', 'interval', 'resizeToZero', 'startResizable', 'endResizable', 'autoScroll', 'scrollBy', 'timeDelay']
    }
  },
  argTypes: {
    enable: {
      control: 'boolean'
    },
    interval: {
      control: 'number'
    },
    resizeToZero: {
      control: 'boolean'
    },
    startResizable: {
      control: 'boolean'
    },
    endResizable: {
      control: 'boolean'
    },
    autoScroll: {
      control: 'boolean'
    },
    scrollBy: {
      control: 'number'
    },
    timeDelay: {
      control: 'number'
    }
  }
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var D,T,E;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ResizeEventsSample />
}`,...(E=(T=c.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const _=["EventResize","Customization","UserEndEvents"];export{i as Customization,l as EventResize,c as UserEndEvents,_ as __namedExportsOrder,U as default};
