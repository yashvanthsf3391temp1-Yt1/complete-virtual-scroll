import{j as e}from"./index-DlC1yEB1.js";import{S as K,b as c,T as L,c as J}from"./agenda-view-dL467uGC.js";import"./index-D5jfS-9e.js";import"./recurrence-editor-byJWIIef.js";import"./index-lf5wH9A6.js";const ee={title:"Scheduler/Timeline/Header Rows",component:K,tags:["autodocs"]},t=[{Id:1,Subject:"Planning",StartTime:new Date(2026,0,5,10,0),EndTime:new Date(2026,0,5,11,0)},{Id:2,Subject:"Review",StartTime:new Date(2026,0,10,14,0),EndTime:new Date(2026,0,10,15,30)},{Id:3,Subject:"Discussion",StartTime:new Date(2026,1,15,9,0),EndTime:new Date(2026,1,15,10,0)}],a={args:{height:"550px",width:"100%",defaultSelectedDate:new Date(2026,0,1),eventSettings:{dataSource:t},headerRows:[{option:"Year"},{option:"Month"},{option:"Week"},{option:"Date"},{option:"Hour"}],children:e.jsx(c,{startHour:"08:00",endHour:"12:00",timeScale:{enable:!0,slotCount:2,interval:30}})}},n={args:{height:"550px",width:"100%",defaultSelectedDate:new Date(2026,0,1),eventSettings:{dataSource:t},headerRows:[{option:"Year"},{option:"Month"}],children:e.jsx(J,{interval:12})}},r={args:{height:"550px",width:"100%",defaultSelectedDate:new Date(2026,0,1),eventSettings:{dataSource:t},headerRows:[{option:"Week"},{option:"Date"},{option:"Hour"}],children:e.jsx(c,{})}},o={args:{height:"550px",width:"100%",defaultSelectedDate:new Date(2026,0,1),eventSettings:{dataSource:t},headerRows:[{option:"Year",template:p=>e.jsxs("div",{className:"custom-year-header",children:["📅 ",p.text]})},{option:"Month",template:p=>e.jsx("div",{className:"custom-month-header",children:p.text})},{option:"Date"}],children:e.jsx(c,{})}},s={args:{height:"550px",width:"100%",defaultSelectedDate:new Date(2026,0,1),eventSettings:{dataSource:t},headerRows:[{option:"Month"},{option:"Date"}],children:e.jsx(J,{})}},i={args:{height:"550px",width:"100%",defaultSelectedDate:new Date(2026,0,5),eventSettings:{dataSource:t},headerRows:[{option:"Date"},{option:"Hour"}],children:e.jsx(L,{})}},d={args:{height:"550px",width:"100%",defaultSelectedDate:new Date(2026,0,1),eventSettings:{dataSource:t},children:e.jsx(c,{})}};var l,h,m,u,w;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    height: '550px',
    width: '100%',
    defaultSelectedDate: new Date(2026, 0, 1),
    eventSettings: {
      dataSource: sampleEvents
    },
    headerRows: [{
      option: 'Year'
    }, {
      option: 'Month'
    }, {
      option: 'Week'
    }, {
      option: 'Date'
    }, {
      option: 'Hour'
    }],
    children: <TimelineWeekView startHour="08:00" endHour="12:00" timeScale={{
      enable: true,
      slotCount: 2,
      interval: 30
    }} />
  }
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source},description:{story:"All header rows with default rendering",...(w=(u=a.parameters)==null?void 0:u.docs)==null?void 0:w.description}}};var S,D,g,v,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    height: '550px',
    width: '100%',
    defaultSelectedDate: new Date(2026, 0, 1),
    eventSettings: {
      dataSource: sampleEvents
    },
    headerRows: [{
      option: 'Year'
    }, {
      option: 'Month'
    }],
    children: <TimelineMonthView interval={12} />
  }
}`,...(g=(D=n.parameters)==null?void 0:D.docs)==null?void 0:g.source},description:{story:"Year and Month header rows only (full year view)",...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var R,T,H,f,M;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    height: '550px',
    width: '100%',
    defaultSelectedDate: new Date(2026, 0, 1),
    eventSettings: {
      dataSource: sampleEvents
    },
    headerRows: [{
      option: 'Week'
    }, {
      option: 'Date'
    }, {
      option: 'Hour'
    }],
    children: <TimelineWeekView />
  }
}`,...(H=(T=r.parameters)==null?void 0:T.docs)==null?void 0:H.source},description:{story:"Week and Date header rows",...(M=(f=r.parameters)==null?void 0:f.docs)==null?void 0:M.description}}};var W,y,j,V,E;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    height: '550px',
    width: '100%',
    defaultSelectedDate: new Date(2026, 0, 1),
    eventSettings: {
      dataSource: sampleEvents
    },
    headerRows: [{
      option: 'Year',
      template: (props: HeaderRowRenderProps) => <div className="custom-year-header">\r
                        📅 {props.text}\r
                    </div>
    }, {
      option: 'Month',
      template: (props: HeaderRowRenderProps) => <div className="custom-month-header">\r
                        {props.text}\r
                    </div>
    }, {
      option: 'Date'
    }],
    children: <TimelineWeekView />
  }
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source},description:{story:"Custom template for header rows",...(E=(V=o.parameters)==null?void 0:V.docs)==null?void 0:E.description}}};var k,Y,b,N,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    height: '550px',
    width: '100%',
    defaultSelectedDate: new Date(2026, 0, 1),
    eventSettings: {
      dataSource: sampleEvents
    },
    headerRows: [{
      option: 'Month'
    }, {
      option: 'Date'
    }],
    children: <TimelineMonthView />
  }
}`,...(b=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:b.source},description:{story:"Timeline Month with multiple header rows",...(C=(N=s.parameters)==null?void 0:N.docs)==null?void 0:C.description}}};var A,I,P,_,O;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    height: '550px',
    width: '100%',
    defaultSelectedDate: new Date(2026, 0, 5),
    eventSettings: {
      dataSource: sampleEvents
    },
    headerRows: [{
      option: 'Date'
    }, {
      option: 'Hour'
    }],
    children: <TimelineDayView />
  }
}`,...(P=(I=i.parameters)==null?void 0:I.docs)==null?void 0:P.source},description:{story:"Timeline Day view with header rows",...(O=(_=i.parameters)==null?void 0:_.docs)==null?void 0:O.description}}};var q,z,B,F,G;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    height: '550px',
    width: '100%',
    defaultSelectedDate: new Date(2026, 0, 1),
    eventSettings: {
      dataSource: sampleEvents
    },
    children: <TimelineWeekView />
  }
}`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source},description:{story:"Without header rows (default behavior)",...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};const te=["AllHeaderRows","YearMonthView","WeekDateView","CustomHeaderTemplate","TimelineMonthWithHeaderRows","TimelineDayWithHeaderRows","NoHeaderRows"];export{a as AllHeaderRows,o as CustomHeaderTemplate,d as NoHeaderRows,i as TimelineDayWithHeaderRows,s as TimelineMonthWithHeaderRows,r as WeekDateView,n as YearMonthView,te as __namedExportsOrder,ee as default};
