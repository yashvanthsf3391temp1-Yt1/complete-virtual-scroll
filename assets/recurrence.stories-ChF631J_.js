import{j as t}from"./index-DlC1yEB1.js";import{r as M}from"./index-D5jfS-9e.js";import{S as w,D as E,W as f,a as R,M as v,A as T}from"./agenda-view-dL467uGC.js";import"./recurrence-editor-byJWIIef.js";/* empty css               */import"./index-lf5wH9A6.js";const F=()=>{const e=new Date;return[{Id:1,Subject:"Daily Scrum Meeting",StartTime:new Date(e.getFullYear(),e.getMonth(),e.getDate(),9,0),EndTime:new Date(e.getFullYear(),e.getMonth(),e.getDate(),9,30),IsAllDay:!1,RecurrenceRule:"FREQ=DAILY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR;COUNT=30",Description:"Daily team standup at 9 AM"},{Id:2,Subject:"Weekly Team Sync",StartTime:new Date(e.getFullYear(),e.getMonth(),e.getDate()+(1-e.getDay()),14,0),EndTime:new Date(e.getFullYear(),e.getMonth(),e.getDate()+(1-e.getDay()),15,0),IsAllDay:!1,RecurrenceRule:"FREQ=WEEKLY;BYDAY=MO;COUNT=12",Description:"Weekly team synchronization"},{Id:3,Subject:"Bi-weekly Sprint Planning",StartTime:new Date(e.getFullYear(),e.getMonth(),e.getDate()+(3-e.getDay()),10,0),EndTime:new Date(e.getFullYear(),e.getMonth(),e.getDate()+(3-e.getDay()),11,30),IsAllDay:!1,RecurrenceRule:"FREQ=WEEKLY;INTERVAL=2;BYDAY=WE;COUNT=6",Description:"Sprint planning session every other Wednesday"},{Id:4,Subject:"Monthly Review Meeting",StartTime:new Date(e.getFullYear(),e.getMonth(),1,15,0),EndTime:new Date(e.getFullYear(),e.getMonth(),1,16,0),IsAllDay:!1,RecurrenceRule:"FREQ=MONTHLY;BYMONTHDAY=1;COUNT=12",Description:"Monthly performance review"},{Id:5,Subject:"Friday Fun Meeting",StartTime:new Date(e.getFullYear(),e.getMonth(),e.getDate()+(5-e.getDay()),17,0),EndTime:new Date(e.getFullYear(),e.getMonth(),e.getDate()+(5-e.getDay()),18,0),IsAllDay:!1,RecurrenceRule:"FREQ=WEEKLY;BYDAY=FR;COUNT=16",Description:"Weekly fun session with team"}]},k=({editFollowingEvents:e=!1})=>{const o={dataSource:F(),editFollowingEvents:e,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly",recurrenceRule:"RecurrenceRule",recurrenceID:"RecurrenceID",followingId:"FollowingId"}},l=new Date;return t.jsxs("div",{className:"control-section",children:[t.jsx("p",{children:"Manage your recurring meetings and events with complete flexibility. Edit a single occurrence, reschedule all upcoming events, or update the entire series. Perfect for handling team standups, weekly syncs, and repeating tasks efficiently."}),t.jsx("div",{className:"scheduler-control",children:t.jsxs(w,{height:"550px",width:"100%",defaultSelectedDate:l,defaultView:"Week",eventSettings:o,startHour:"08:00",children:[t.jsx(E,{}),t.jsx(f,{}),t.jsx(R,{}),t.jsx(v,{}),t.jsx(T,{})]})})]})},A=({editFollowingEvents:e=!1})=>{const d=F(),[o,l]=M.useState(d),S={dataSource:o,editFollowingEvents:e,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly",recurrenceRule:"RecurrenceRule",recurrenceID:"RecurrenceID",followingId:"FollowingId"}},I=r=>{r&&l(b=>{var u;const x=b.filter(n=>{var a;return((a=r.deletedRecords)==null?void 0:a.find(c=>c.Id===n.Id))===void 0}).map(n=>{var a;return((a=r.changedRecords)==null?void 0:a.find(c=>c.Id===n.Id))||n}),Y=((u=r.addedRecords)==null?void 0:u.map(n=>Object.assign({},n)))||[];return[...x,...Y]})},j=new Date;return t.jsxs("div",{className:"control-section",children:[t.jsx("p",{children:"Manage your recurring meetings and events with complete state control. Add, edit, or delete events and watch the data source update in real-time using onDataChangeStart callback for efficient CRUD operations."}),t.jsx("div",{className:"scheduler-control",children:t.jsxs(w,{height:"550px",width:"100%",defaultSelectedDate:j,defaultView:"Week",eventSettings:S,onDataChangeStart:I,startHour:"08:00",children:[t.jsx(E,{}),t.jsx(f,{}),t.jsx(R,{}),t.jsx(v,{}),t.jsx(T,{})]})})]})},V={title:"Scheduler/Recurrence",parameters:{layout:"padded"},tags:["autodocs"]},s={render:e=>t.jsx(k,{...e}),args:{editFollowingEvents:!1},parameters:{controls:{include:["editFollowingEvents"]},docs:{description:{story:"This sample demonstrates recurring events with Edit Following Events feature. Events repeat daily, weekly, bi-weekly, or monthly. Edit individual occurrences, Edit Following Events to change this and all future events, or edit the entire series."}}},argTypes:{editFollowingEvents:{control:"boolean",description:"Enable/disable Edit Following Events feature"}}},i={render:e=>t.jsx(A,{...e}),args:{editFollowingEvents:!1},parameters:{controls:{include:["editFollowingEvents"]},docs:{description:{story:"This sample demonstrates recurring events with state-managed CRUD operations. Uses onDataChangeStart callback to handle add, edit, and delete operations efficiently. The component maintains a controlled state that updates in real-time as users modify events."}}},argTypes:{editFollowingEvents:{control:"boolean",description:"Enable/disable Edit Following Events feature"}}};var g,m,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <RecurrenceSample {...args} />,
  args: {
    editFollowingEvents: false
  },
  parameters: {
    controls: {
      include: ['editFollowingEvents']
    },
    docs: {
      description: {
        story: 'This sample demonstrates recurring events with Edit Following Events feature. Events repeat daily, weekly, bi-weekly, or monthly. Edit individual occurrences, Edit Following Events to change this and all future events, or edit the entire series.'
      }
    }
  },
  argTypes: {
    editFollowingEvents: {
      control: 'boolean',
      description: 'Enable/disable Edit Following Events feature'
    }
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,D,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <RecurrenceWithCrudSample {...args} />,
  args: {
    editFollowingEvents: false
  },
  parameters: {
    controls: {
      include: ['editFollowingEvents']
    },
    docs: {
      description: {
        story: 'This sample demonstrates recurring events with state-managed CRUD operations. Uses onDataChangeStart callback to handle add, edit, and delete operations efficiently. The component maintains a controlled state that updates in real-time as users modify events.'
      }
    }
  },
  argTypes: {
    editFollowingEvents: {
      control: 'boolean',
      description: 'Enable/disable Edit Following Events feature'
    }
  }
}`,...(y=(D=i.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const H=["Recurrence","RecurrenceWithCrud"];export{s as Recurrence,i as RecurrenceWithCrud,H as __namedExportsOrder,V as default};
