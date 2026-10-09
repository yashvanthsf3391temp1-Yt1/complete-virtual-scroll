import{j as g}from"./index-DlC1yEB1.js";import{S as C,T as L,b as y,h as M,c as F}from"./agenda-view-dL467uGC.js";import"./index-D5jfS-9e.js";import{d as A,W as k}from"./recurrence-editor-byJWIIef.js";import"./index-lf5wH9A6.js";const J={title:"Scheduler/Timeline/Virtualization Options",parameters:{layout:"padded"},tags:["autodocs"]},f=[0,2,4,5,8,10,12,15,18,20,22],T=["Daily standup","Sprint review","Release check","Design sync","QA validation","Support triage","Product backlog","Client briefing","Incident review","Planning board"],I=(e,t,n)=>{const l=Array.from({length:e},(o,s)=>s+1).filter(o=>{const s=o%7;return o<=2||o===4||o===6||o===8||o===10||o===13||o===15||o===16||o===19||o===20||o===22||o===23||o===25||o===26||o===27||o===28||o===29||o===30||o===31||s===0||s===2||s===4});return Array.from({length:n},(o,s)=>l[(s*2+t)%l.length]??(s+t)%e+1)},w=["Operations","Support","Engineering","Security","Finance","Marketing","Customer Success","Infrastructure","Analytics","Compliance","Product","QA","HR","Sales","Design","Legal","Data","Field Support","Training","Procurement"],V=e=>[{name:"Teams",field:"TeamId",title:"Team",textField:"TeamText",idField:"Id",colorField:"TeamColor",dataSource:Array.from({length:e},(t,n)=>({Id:n+1,TeamText:`${w[n%w.length]} ${Math.floor(n/w.length)+1}`,TeamColor:n%2===0?"#ffaa00":"#7499e1"}))}],z=(e,t)=>{const n=new Date(2025,0,1),l=new Date(2025,1,0).getDate(),o=e*t;return Array.from({length:o},(s,R)=>{const a=R%e+1,r=Math.floor(R/e)+1,c=I(l,a+r,t),i=c[(r-1)%c.length]??1,u=new Date(n.getFullYear(),n.getMonth(),i),d=f[(a+r+i)%f.length],m=(a*17+r*13+i)%60,h=1+(a+r+i)%3,v=Math.min(23,d+h);return{Id:R+1,Subject:`${T[(a+r)%T.length]} • ${w[(a+r)%w.length]}`,StartTime:new Date(u.getFullYear(),u.getMonth(),u.getDate(),d,m),EndTime:new Date(u.getFullYear(),u.getMonth(),u.getDate(),v,(m+30)%60),TeamId:a,IsAllDay:!1,Description:`Resource ${a} • event ${r} • ${u.toDateString()} • ${d}:00 slot`}})},$=e=>{const t=Math.max(4,Math.ceil(e/6)),n=Math.max(1,Math.ceil(e/t));return[{name:"Rooms",field:"RoomId",title:"Room",textField:"RoomText",idField:"Id",colorField:"RoomColor",dataSource:Array.from({length:n},(l,o)=>({Id:o+1,RoomText:`Room ${o+1}`,RoomColor:o%2===0?"#d328bc":"#531df7"}))},{name:"Owners",field:"OwnerId",title:"Owner",textField:"OwnerText",idField:"Id",groupIDField:"RoomGroupId",colorField:"OwnerColor",dataSource:Array.from({length:e},(l,o)=>({Id:o+1,OwnerText:`Owner ${o+1}`,RoomGroupId:Math.floor(o/t)+1,OwnerColor:o%2===0?"#ffaa00":"#7499e1"}))}]},H=(e,t)=>{const n=e*t,l=new Date(2025,0,1),o=new Date(2025,1,0).getDate(),s=Math.max(4,Math.ceil(e/6));return Array.from({length:n},(R,a)=>{const r=a%e+1,c=Math.floor(a/e)+1,i=Math.floor((r-1)/s)+1,u=I(o,r+c,t),d=u[(c-1)%u.length]??1,m=new Date(l.getFullYear(),l.getMonth(),d),h=f[(r+c+d)%f.length],v=(r*19+c*11+d)%60,x=1+(r+c+d)%2,E=Math.min(23,h+x);return{Id:a+1,Subject:`${T[(r+c)%T.length]} • ${i}`,StartTime:new Date(m.getFullYear(),m.getMonth(),m.getDate(),h,v),EndTime:new Date(m.getFullYear(),m.getMonth(),m.getDate(),E,(v+30)%60),RoomId:i,OwnerId:r,IsAllDay:!1,Description:`Room ${i} • owner ${r} • ${m.toDateString()} • event ${c}`}})},O=[{name:"Resources",field:"ResourceId",title:"Resource",textField:"ResourceText",idField:"Id",colorField:"ResourceColor",dataSource:Array.from({length:1e3},(e,t)=>({Id:t+1,ResourceText:`Resource ${t+1}`,ResourceColor:t%2===0?"#ffaa00":"#7499e1"}))}],j=[{name:"Rooms",field:"RoomId",title:"Room",textField:"RoomText",idField:"Id",colorField:"RoomColor",dataSource:Array.from({length:10},(e,t)=>({Id:t+1,RoomText:`Room ${t+1}`,RoomColor:t%2===0?"#d328bc":"#531df7"}))},{name:"Resources",field:"ResourceId",title:"Resource",textField:"ResourceText",idField:"Id",groupIDField:"RoomGroupId",colorField:"ResourceColor",dataSource:Array.from({length:1e3},(e,t)=>({Id:t+1,ResourceText:`Resource ${t+1}`,RoomGroupId:Math.floor(t/100)+1,ResourceColor:t%2===0?"#ffaa00":"#7499e1"}))}],P=new A({url:"https://services.syncfusion.com/react/production/api/VirtualEventData",adaptor:new k,crossDomain:!0}),_={dataSource:P,fields:{id:"Id",subject:"Subject",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly",location:"Location",description:"Description"}},W=e=>{Array.isArray(e.result)&&e.result.forEach(t=>{t.RoomId=Math.floor((Number(t.ResourceId)-1)/100)+1})},N=e=>{const t=e.scenario==="Remote flat resources"||e.scenario==="Remote resource tree",n=e.scenario==="Remote resource tree",l=e.scenario==="Expandable resource groups",o=V(e.resourceRowCount),s=z(e.resourceRowCount,e.eventsPerRow),R=$(e.resourceRowCount),a=H(e.resourceRowCount,e.eventsPerRow),r=n?j:l?R:t?O:o,c=n?["Rooms","Resources"]:l?["Rooms","Owners"]:t?["Resources"]:["Teams"],i=t?_:{dataSource:l?a:s};return g.jsx("div",{className:"control-section",children:g.jsx("div",{className:"scheduler-control",children:g.jsxs(C,{height:"600px",width:"100%",defaultView:e.view,defaultSelectedDate:t?new Date(2023,3,1):new Date(2025,0,20),eventSettings:i,resources:r,group:{resources:c},rowAutoHeight:e.rowAutoHeight,onDataBind:n?W:void 0,children:[g.jsx(L,{allowVirtualScrolling:e.allowVirtualScrolling,overscanCount:e.overscanCount,maxEventsStack:e.maxEventsStack,enableLazyLoading:e.enableLazyLoading}),g.jsx(y,{allowVirtualScrolling:e.allowVirtualScrolling,overscanCount:e.overscanCount,maxEventsStack:e.maxEventsStack,enableLazyLoading:e.enableLazyLoading}),g.jsx(M,{allowVirtualScrolling:e.allowVirtualScrolling,overscanCount:e.overscanCount,maxEventsStack:e.maxEventsStack,enableLazyLoading:e.enableLazyLoading}),g.jsx(F,{allowVirtualScrolling:e.allowVirtualScrolling,overscanCount:e.overscanCount,maxEventsStack:e.maxEventsStack,enableLazyLoading:e.enableLazyLoading})]},`${e.scenario}-${e.view}-${e.resourceRowCount}-${e.eventsPerRow}`)})})},S={render:e=>g.jsx(N,{...e}),args:{scenario:"Local flat resources",view:"TimelineMonth",allowVirtualScrolling:!0,overscanCount:3,maxEventsStack:1,enableLazyLoading:!1,rowAutoHeight:!1,resourceRowCount:80,eventsPerRow:4},parameters:{controls:{include:["scenario","view","allowVirtualScrolling","overscanCount","maxEventsStack","enableLazyLoading","rowAutoHeight","resourceRowCount","eventsPerRow"]}},argTypes:{scenario:{control:"select",options:["Local flat resources","Expandable resource groups","Remote flat resources","Remote resource tree"]},view:{control:"select",options:["TimelineDay","TimelineWeek","TimelineWorkWeek","TimelineMonth"]},allowVirtualScrolling:{control:"boolean"},overscanCount:{control:{type:"number",min:0,max:12,step:1}},maxEventsStack:{control:{type:"number",min:1,max:10,step:1}},enableLazyLoading:{control:"boolean"},rowAutoHeight:{control:"boolean"},resourceRowCount:{control:"select",options:[100,200,500,1e3,2e3,3e3,4e3,5e3]},eventsPerRow:{control:"select",options:[1,2,3,4,5,6,7,8,9,10]}}};var b,p,D;S.parameters={...S.parameters,docs:{...(b=S.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <CustomizableVirtualizationDemo {...args} />,
  args: {
    scenario: 'Local flat resources',
    view: 'TimelineMonth',
    allowVirtualScrolling: true,
    overscanCount: 3,
    maxEventsStack: 1,
    enableLazyLoading: false,
    rowAutoHeight: false,
    resourceRowCount: 80,
    eventsPerRow: 4
  },
  parameters: {
    controls: {
      include: ['scenario', 'view', 'allowVirtualScrolling', 'overscanCount', 'maxEventsStack', 'enableLazyLoading', 'rowAutoHeight', 'resourceRowCount', 'eventsPerRow']
    }
  },
  argTypes: {
    scenario: {
      control: 'select',
      options: ['Local flat resources', 'Expandable resource groups', 'Remote flat resources', 'Remote resource tree']
    },
    view: {
      control: 'select',
      options: ['TimelineDay', 'TimelineWeek', 'TimelineWorkWeek', 'TimelineMonth']
    },
    allowVirtualScrolling: {
      control: 'boolean'
    },
    overscanCount: {
      control: {
        type: 'number',
        min: 0,
        max: 12,
        step: 1
      }
    },
    maxEventsStack: {
      control: {
        type: 'number',
        min: 1,
        max: 10,
        step: 1
      }
    },
    enableLazyLoading: {
      control: 'boolean'
    },
    rowAutoHeight: {
      control: 'boolean'
    },
    resourceRowCount: {
      control: 'select',
      options: [100, 200, 500, 1000, 2000, 3000, 4000, 5000]
    },
    eventsPerRow: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}`,...(D=(p=S.parameters)==null?void 0:p.docs)==null?void 0:D.source}}};const K=["CustomizableVirtualizationOptions"];export{S as CustomizableVirtualizationOptions,K as __namedExportsOrder,J as default};
