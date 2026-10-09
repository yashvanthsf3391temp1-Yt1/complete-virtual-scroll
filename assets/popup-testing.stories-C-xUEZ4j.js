import{j as e}from"./index-DlC1yEB1.js";import{BasicSample as l}from"./basic.stories-C2cnOpen.js";import"./index-D5jfS-9e.js";import"./index-lf5wH9A6.js";import"./agenda-view-dL467uGC.js";import"./recurrence-editor-byJWIIef.js";import"./dataSource-BQKtoYBq.js";import"./thanksgiving-day-D937gSiR.js";import"./weather-rain-B7MQ2mWe.js";/* empty css               */const S={title:"Scheduler/Popup & Scroller Testing",component:l,parameters:{layout:"padded"}},t={render:r=>e.jsx("div",{style:{height:"450px",width:"100%",overflow:"auto",border:"1px solid #ccc",resize:"both",minHeight:"300px",minWidth:"400px",marginTop:"100px"},children:e.jsx("div",{style:{marginTop:"90px"},children:e.jsx(l,{...r})})}),args:{view:"Week",firstDayOfWeek:0,showWeekNumber:!1,showWeekend:!0,workDays:[1,2,3,4,5],height:"550px",width:"100%",showTimeIndicator:!0,startHour:"08:00",endHour:"18:00",timeFormat:"h:mm a",dateFormat:"M/d/yyyy",eventOverlap:!0,showQuickInfoPopup:!0,header:!0,rowAutoHeight:!1,eventResize:!0,keyboardNavigation:!0,eventDrag:!0,start:"09:00",end:"18:00",highlight:!1,readonly:!1,allowDeleting:!0,allowEditing:!0,allowAdding:!0,enableIndicator:!1,ignoreWhitespace:!1,template:!1,cell:!1,dateHeader:!1,spannedEventPlacement:"AllDayRow",enable:!0,interval:60,majorSlotEnabled:!1,minorSlotEnabled:!1,slotCount:6,weekRule:"FirstDay"}},o=({height:r=1200,label:u="Page content above scheduler"})=>e.jsx("div",{style:{height:`${r}px`,background:"linear-gradient(180deg, #f5f5f5 0%, #e8e8e8 100%)",border:"1px dashed #bbb",borderRadius:4,padding:16,marginBottom:24,display:"flex",alignItems:"center",justifyContent:"center",color:"#666",fontFamily:"system-ui, sans-serif",fontSize:14},children:u}),a={render:r=>e.jsxs("div",{style:{width:"100%"},children:[e.jsx(o,{height:1200,label:"Scroll the page — the scheduler is below"}),e.jsx(l,{...r}),e.jsx(o,{height:1200,label:"Page content below scheduler"})]}),args:{view:"Week"},parameters:{layout:"fullscreen"}};var i,s,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div style={{
    height: '450px',
    width: '100%',
    overflow: 'auto',
    border: '1px solid #ccc',
    resize: 'both',
    minHeight: '300px',
    minWidth: '400px',
    marginTop: '100px'
  }}>   \r
            <div style={{
      marginTop: "90px"
    }}>\r
                <BasicSample {...args} />\r
            </div>\r
        </div>,
  args: {
    view: 'Week',
    firstDayOfWeek: 0,
    showWeekNumber: false,
    showWeekend: true,
    workDays: [1, 2, 3, 4, 5],
    height: '550px',
    width: '100%',
    showTimeIndicator: true,
    startHour: '08:00',
    endHour: '18:00',
    timeFormat: 'h:mm a',
    dateFormat: 'M/d/yyyy',
    eventOverlap: true,
    showQuickInfoPopup: true,
    header: true,
    rowAutoHeight: false,
    eventResize: true,
    keyboardNavigation: true,
    eventDrag: true,
    start: '09:00',
    end: '18:00',
    highlight: false,
    readonly: false,
    allowDeleting: true,
    allowEditing: true,
    allowAdding: true,
    enableIndicator: false,
    ignoreWhitespace: false,
    template: false,
    cell: false,
    dateHeader: false,
    spannedEventPlacement: 'AllDayRow',
    enable: true,
    interval: 60,
    majorSlotEnabled: false,
    minorSlotEnabled: false,
    slotCount: 6,
    weekRule: 'FirstDay'
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var d,h,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '100%'
  }}>\r
            <PageFiller height={1200} label="Scroll the page — the scheduler is below" />\r
            <BasicSample {...args} />\r
            <PageFiller height={1200} label="Page content below scheduler" />\r
        </div>,
  args: {
    view: 'Week'
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...(p=(h=a.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const W=["ScrollerContainer","ScrollerWindow"];export{t as ScrollerContainer,a as ScrollerWindow,W as __namedExportsOrder,S as default};
