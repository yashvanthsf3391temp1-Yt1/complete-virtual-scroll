import{j as e}from"./index-DlC1yEB1.js";import{S as D,D as W,W as H,a as V,M,A,T as h,b,h as g,c as y}from"./agenda-view-dL467uGC.js";import"./index-D5jfS-9e.js";import"./recurrence-editor-byJWIIef.js";/* empty css               */import"./index-lf5wH9A6.js";const S=[{Id:1,Subject:"Team Standup",StartTime:new Date(2026,0,6,9,0),EndTime:new Date(2026,0,6,9,30),Location:"Conference Room A",Description:"Daily team sync"},{Id:2,Subject:"Project Kickoff Meeting",StartTime:new Date(2026,0,6,10,0),EndTime:new Date(2026,0,6,11,30),Location:"Boardroom",Description:"Q1 Project Kickoff"},{Id:3,Subject:"Code Review Session",StartTime:new Date(2026,0,6,14,0),EndTime:new Date(2026,0,6,15,0),Location:"Development Room",Description:"Review PR submissions"},{Id:4,Subject:"Client Call - Status Update",StartTime:new Date(2026,0,6,15,30),EndTime:new Date(2026,0,6,16,30),Location:"Phone Booth",Description:"Monthly progress review"},{Id:5,Subject:"Team Meeting",StartTime:new Date(2026,0,7,9,0),EndTime:new Date(2026,0,7,10,0),Location:"Conference Room B",Description:"Project status discussion"},{Id:6,Subject:"Training Session",StartTime:new Date(2026,0,7,11,0),EndTime:new Date(2026,0,7,12,30),Location:"Training Room",Description:"Advanced training on new tools"},{Id:7,Subject:"Design Review",StartTime:new Date(2026,0,8,14,0),EndTime:new Date(2026,0,8,15,30),Location:"Design Studio",Description:"UI/UX review for new features"},{Id:8,Subject:"System Maintenance",StartTime:new Date(2026,0,8,2,0),EndTime:new Date(2026,0,8,4,0),Location:"Data Center",Description:"Database maintenance",IsBlock:!0},{Id:9,Subject:"All-day: Company Meeting",StartTime:new Date(2026,0,10,0,0),EndTime:new Date(2026,0,10,23,59),Location:"Main Auditorium",Description:"All-day strategy session",IsAllDay:!0},{Id:10,Subject:"Quarterly Planning",StartTime:new Date(2026,0,9,8,0),EndTime:new Date(2026,0,11,18,0),Location:"Mountain Resort",Description:"Multi-day planning retreat"}],L=()=>{const n={dataSource:S,fields:{id:"Id",subject:"Subject",startTime:"StartTime",endTime:"EndTime",location:"Location",description:"Description",isAllDay:"IsAllDay",isBlock:"IsBlock"}};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(D,{height:"550px",width:"100%",defaultSelectedDate:new Date(2026,0,6),defaultView:"TimelineDay",eventSettings:n,headerRows:[{option:"Year"},{option:"Month"},{option:"Week"},{option:"Date"},{option:"Hour"}],children:[e.jsx(h,{timeScale:{enable:!0,slotCount:2,interval:30}}),e.jsx(b,{timeScale:{enable:!0,slotCount:2,interval:60},showWeekend:!0}),e.jsx(g,{timeScale:{enable:!0,slotCount:1,interval:60}}),e.jsx(y,{interval:1})]})})})},N=({startHour:n="00:00",endHour:o="24:00",slotCount:T=2,interval:E=60,eventDragEnable:f=!0,eventDragInterval:k=15,eventResizeEnable:C=!0,eventResizeInterval:R=30,showWeekend:j=!0,showHeaderRows:I=!1,dayCount:z=1})=>{const x={dataSource:S,fields:{id:"Id",subject:"Subject",startTime:"StartTime",endTime:"EndTime",location:"Location",description:"Description",isAllDay:"IsAllDay",isBlock:"IsBlock"}},r={enable:!0,slotCount:T,interval:E};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(D,{height:"550px",width:"100%",defaultSelectedDate:new Date(2026,0,6),defaultView:"TimelineDay",eventSettings:x,eventDrag:{enable:f,interval:k},eventResize:{enable:C,interval:R},headerRows:I?[{option:"Year"},{option:"Month"},{option:"Week"},{option:"Date"},{option:"Hour"}]:[],children:[e.jsx(W,{}),e.jsx(H,{}),e.jsx(V,{}),e.jsx(M,{}),e.jsx(A,{}),e.jsx(h,{interval:z,startHour:n,endHour:o,timeScale:r}),e.jsx(b,{startHour:n,endHour:o,timeScale:r,showWeekend:j}),e.jsx(g,{startHour:n,endHour:o,timeScale:r}),e.jsx(y,{interval:1})]})})})},Q={title:"Scheduler/Timeline/Customization",parameters:{layout:"padded",docs:{description:{component:"Storybook metadata"}}},tags:["autodocs"]},t={render:()=>e.jsx(L,{}),parameters:{docs:{description:{story:`
Simple timeline view showing all available timeline view types:
- TimelineDayView (30-minute slots)
- TimelineWeekView (60-minute slots, with weekends)
- TimelineWorkWeekView (60-minute slots, Mon-Fri)
- TimelineMonthView (month overview)

All views include hierarchical header rows (Year, Month, Week, Date, Hour) for better navigation.
        `}}}},i={render:n=>e.jsx(N,{...n}),args:{startHour:"00:00",endHour:"24:00",slotCount:2,interval:60,eventDragEnable:!0,eventDragInterval:15,eventResizeEnable:!0,eventResizeInterval:30,showWeekend:!0,showHeaderRows:!0,dayCount:1},parameters:{controls:{include:["startHour","endHour","slotCount","interval","eventDragEnable","eventDragInterval","eventResizeEnable","eventResizeInterval","showWeekend","showHeaderRows","dayCount"]},docs:{description:{story:`
Interactive timeline view with comprehensive customization options. Use Storybook controls to adjust behavior in real-time.

### Time Configuration
- **Start Hour**: Start time of the timeline (00:00 - 12:00)
- **End Hour**: End time of the timeline (12:00 - 24:00)

### TimeScale Configuration
- **Slot Count**: Number of slots per interval (1-4, higher = finer granularity)
- **Interval**: Minutes per interval (30, 45, 60, 90, 120)

### Event Drag Configuration
- **Event Drag Enable**: Enable/disable event dragging
- **Event Drag Interval**: Drag movement interval in minutes

### Event Resize Configuration
- **Event Resize Enable**: Enable/disable event resizing
- **Event Resize Interval**: Resize movement interval in minutes

### Display Configuration
- **Show Weekend**: Display weekends in week views
- **Show Header Rows**: Display hierarchical header rows (Year, Month, Week, Date, Hour)
- **Day Count**: Number of consecutive days in day view (1-5)
        `}}},argTypes:{startHour:{control:"select",options:["00:00","06:00","07:00","08:00","09:00","12:00"],description:"Start time for the timeline view"},endHour:{control:"select",options:["12:00","14:00","16:00","18:00","20:00","22:00","24:00"],description:"End time for the timeline view"},slotCount:{control:{type:"number",min:1,max:4,step:1},description:"Number of slots per interval"},interval:{control:"select",options:[30,45,60,90,120],description:"Time interval in minutes per slot"},eventDragEnable:{control:"boolean",description:"Enable event dragging functionality"},eventDragInterval:{control:{type:"number",min:5,max:60,step:5},description:"Drag interval in minutes"},eventResizeEnable:{control:"boolean",description:"Enable event resizing functionality"},eventResizeInterval:{control:{type:"number",min:5,max:60,step:5},description:"Resize interval in minutes"},showWeekend:{control:"boolean",description:"Show weekend days in week view"},showHeaderRows:{control:"boolean",description:"Display header rows (Year, Month, Week, Date, Hour)"},dayCount:{control:{type:"number",min:1,max:5,step:1},description:"Number of consecutive days in day view"}}};var a,s,l,c,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <SimpleTimelineView />,
  parameters: {
    docs: {
      description: {
        story: \`
Simple timeline view showing all available timeline view types:
- TimelineDayView (30-minute slots)
- TimelineWeekView (60-minute slots, with weekends)
- TimelineWorkWeekView (60-minute slots, Mon-Fri)
- TimelineMonthView (month overview)

All views include hierarchical header rows (Year, Month, Week, Date, Hour) for better navigation.
        \`
      }
    }
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:"Simple Timeline View - All Views at Default Settings",...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};var d,u,v,p,w;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <CustomizedTimelineView {...args} />,
  args: {
    startHour: '00:00',
    endHour: '24:00',
    slotCount: 2,
    interval: 60,
    eventDragEnable: true,
    eventDragInterval: 15,
    eventResizeEnable: true,
    eventResizeInterval: 30,
    showWeekend: true,
    showHeaderRows: true,
    dayCount: 1
  },
  parameters: {
    controls: {
      include: ['startHour', 'endHour', 'slotCount', 'interval', 'eventDragEnable', 'eventDragInterval', 'eventResizeEnable', 'eventResizeInterval', 'showWeekend', 'showHeaderRows', 'dayCount']
    },
    docs: {
      description: {
        story: \`
Interactive timeline view with comprehensive customization options. Use Storybook controls to adjust behavior in real-time.

### Time Configuration
- **Start Hour**: Start time of the timeline (00:00 - 12:00)
- **End Hour**: End time of the timeline (12:00 - 24:00)

### TimeScale Configuration
- **Slot Count**: Number of slots per interval (1-4, higher = finer granularity)
- **Interval**: Minutes per interval (30, 45, 60, 90, 120)

### Event Drag Configuration
- **Event Drag Enable**: Enable/disable event dragging
- **Event Drag Interval**: Drag movement interval in minutes

### Event Resize Configuration
- **Event Resize Enable**: Enable/disable event resizing
- **Event Resize Interval**: Resize movement interval in minutes

### Display Configuration
- **Show Weekend**: Display weekends in week views
- **Show Header Rows**: Display hierarchical header rows (Year, Month, Week, Date, Hour)
- **Day Count**: Number of consecutive days in day view (1-5)
        \`
      }
    }
  },
  argTypes: {
    startHour: {
      control: 'select',
      options: ['00:00', '06:00', '07:00', '08:00', '09:00', '12:00'],
      description: 'Start time for the timeline view'
    },
    endHour: {
      control: 'select',
      options: ['12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
      description: 'End time for the timeline view'
    },
    slotCount: {
      control: {
        type: 'number',
        min: 1,
        max: 4,
        step: 1
      },
      description: 'Number of slots per interval'
    },
    interval: {
      control: 'select',
      options: [30, 45, 60, 90, 120],
      description: 'Time interval in minutes per slot'
    },
    eventDragEnable: {
      control: 'boolean',
      description: 'Enable event dragging functionality'
    },
    eventDragInterval: {
      control: {
        type: 'number',
        min: 5,
        max: 60,
        step: 5
      },
      description: 'Drag interval in minutes'
    },
    eventResizeEnable: {
      control: 'boolean',
      description: 'Enable event resizing functionality'
    },
    eventResizeInterval: {
      control: {
        type: 'number',
        min: 5,
        max: 60,
        step: 5
      },
      description: 'Resize interval in minutes'
    },
    showWeekend: {
      control: 'boolean',
      description: 'Show weekend days in week view'
    },
    showHeaderRows: {
      control: 'boolean',
      description: 'Display header rows (Year, Month, Week, Date, Hour)'
    },
    dayCount: {
      control: {
        type: 'number',
        min: 1,
        max: 5,
        step: 1
      },
      description: 'Number of consecutive days in day view'
    }
  }
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source},description:{story:`Customizable Timeline View - Interactive Controls\r
Similar to Drag-and-Drop Customization sample`,...(w=(p=i.parameters)==null?void 0:p.docs)==null?void 0:w.description}}};const _=["Simple","Customization"];export{i as Customization,t as Simple,_ as __namedExportsOrder,Q as default};
