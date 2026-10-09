import{j as e}from"./index-DlC1yEB1.js";import{r as i}from"./index-D5jfS-9e.js";import{R as a,P as Ge}from"./recurrence-editor-byJWIIef.js";/* empty css               */import"./index-lf5wH9A6.js";const Ve=({rule:r})=>e.jsx("div",{className:"sf-content-center sf-radius-2",style:{marginBottom:"12px",fontSize:"14px",width:"530px",height:"auto",border:"1px solid #969696",flex:"1"},children:e.jsx("div",{style:{padding:"8px 4px",textAlign:"center",minHeight:"20px",overflow:"hidden",overflowWrap:"break-word"},children:r||e.jsx("em",{style:{color:"#aaa"},children:"No rule generated"})})}),o=({children:r,label:n="Rule Output",rule:t})=>e.jsxs("div",{className:"control-section sf-content-center",style:{flexDirection:"column"},children:[e.jsxs("div",{className:"scheduler-control",children:[e.jsx("label",{className:"mr-2",children:n}),e.jsx(Ve,{rule:t})]}),e.jsx("div",{className:"scheduler-control",style:{maxWidth:"460px"},children:r})]}),_e=({firstDayOfWeek:r=0,direction:n="ltr"})=>{const[t,s]=i.useState(""),c=x=>{s(x.value)};return e.jsx(o,{rule:t,children:e.jsx(Ge,{dir:n,children:e.jsx(a,{value:t,onChange:c,firstDayOfWeek:r,startDate:new Date("Tue May 06 2014 10:00:00"),frequencies:["DAILY","WEEKLY","MONTHLY","YEARLY"],endTypes:["Never","Until","Count"]})})})},ze=({frequency:r="DAILY"})=>{const n={DAILY:"FREQ=DAILY;INTERVAL=1",WEEKLY:"FREQ=WEEKLY;BYDAY=MO,WE,FR",MONTHLY:"FREQ=MONTHLY;BYMONTHDAY=15",YEARLY:"FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=15"},[t,s]=i.useState(n[r]),c=x=>s(x.value);return e.jsx(o,{rule:t,children:e.jsx(a,{value:t,onChange:c,startDate:new Date("Tue May 06 2014 10:00:00")})})},Ze=({frequencies:r=["DAILY","WEEKLY"]})=>{const[n,t]=i.useState("FREQ=DAILY;INTERVAL=1"),s=c=>t(c.value);return e.jsx(o,{rule:n,children:e.jsx(a,{value:n,onChange:s,frequencies:r,startDate:new Date("Tue May 06 2014 10:00:00")})})},Je=({endTypes:r=["Never","Count"]})=>{const[n,t]=i.useState("FREQ=DAILY;COUNT=5"),s=c=>t(c.value);return e.jsx(o,{rule:n,children:e.jsx(a,{value:n,onChange:s,endTypes:r,startDate:new Date("Tue May 06 2014 10:00:00")})})},Xe=()=>{const[r,n]=i.useState("FREQ=DAILY;COUNT=10"),t=s=>n(s.value);return e.jsx(o,{rule:r,children:e.jsx(a,{value:r,onChange:t,startDate:new Date("Tue May 06 2014 10:00:00"),endTypes:["Count"]})})},$e=()=>{const[r,n]=i.useState("FREQ=DAILY;UNTIL=20141231T000000Z"),t=s=>n(s.value);return e.jsx(o,{rule:r,children:e.jsx(a,{value:r,onChange:t,startDate:new Date("Tue May 06 2014 10:00:00"),endTypes:["Until"]})})},er=({firstDayOfWeek:r=0})=>{const[n,t]=i.useState("FREQ=WEEKLY;BYDAY=MO,WE,FR"),s=c=>t(c.value);return e.jsx(o,{rule:n,children:e.jsx(a,{value:n,onChange:s,frequencies:["WEEKLY"],startDate:new Date("Tue May 06 2014 10:00:00"),firstDayOfWeek:r})})},rr=()=>{const[r,n]=i.useState("FREQ=MONTHLY;BYMONTHDAY=15;INTERVAL=1"),t=s=>n(s.value);return e.jsx(o,{rule:r,children:e.jsx(a,{value:r,onChange:t,frequencies:["MONTHLY"],startDate:new Date("Tue May 06 2014 10:00:00")})})},nr=()=>{const[r,n]=i.useState("FREQ=MONTHLY;BYDAY=MO;BYSETPOS=3"),t=s=>n(s.value);return e.jsx(o,{rule:r,children:e.jsx(a,{value:r,onChange:t,frequencies:["MONTHLY"],startDate:new Date("Tue May 06 2014 10:00:00")})})},tr=()=>{const[r,n]=i.useState("FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=15"),t=s=>n(s.value);return e.jsx(o,{rule:r,children:e.jsx(a,{value:r,onChange:t,frequencies:["YEARLY"],startDate:new Date("Tue May 06 2014 10:00:00")})})},sr=({firstDayOfWeek:r=1})=>{const[n,t]=i.useState("FREQ=WEEKLY;BYDAY=MO"),s=c=>t(c.value);return e.jsx(o,{rule:n,children:e.jsx(a,{value:n,onChange:s,frequencies:["WEEKLY"],firstDayOfWeek:r,startDate:new Date("Tue May 06 2014 10:00:00")})})},ar=()=>{const[r,n]=i.useState("FREQ=WEEKLY;BYDAY=MO,WE"),t=s=>n(s.value);return e.jsx(o,{rule:r,children:e.jsx(Ge,{dir:"rtl",children:e.jsx(a,{value:r,onChange:t,startDate:new Date("Tue May 06 2014 10:00:00")})})})},or=({value:r="FREQ=MONTHLY;BYDAY=MO;BYSETPOS=2;COUNT=12"})=>e.jsx(o,{rule:r,children:e.jsx(a,{value:r,startDate:new Date("Tue May 06 2014 10:00:00")})}),cr=()=>e.jsx(o,{rule:"FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=25",children:e.jsx(a,{value:"FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=25",startDate:new Date("Tue May 06 2014 10:00:00")})}),ir=({startDate:r="2025-01-15"})=>{const[n,t]=i.useState("FREQ=MONTHLY;BYMONTHDAY=15"),s=c=>t(c.value);return e.jsx(o,{rule:n,children:e.jsx(a,{value:n,onChange:s,startDate:new Date(r)})})},yr={title:"Scheduler/Recurrence Editor",parameters:{layout:"padded"},tags:["autodocs"]},l={name:"Rule Generation",render:r=>e.jsx(_e,{...r}),args:{firstDayOfWeek:0,direction:"ltr"},parameters:{controls:{include:["firstDayOfWeek","direction"]}},argTypes:{firstDayOfWeek:{control:"select",options:[0,1,2,3,4,5,6],description:"First day of week (0 = Sunday, 1 = Monday, …)"},direction:{control:"select",options:["ltr","rtl"],description:"Text direction"}}},d={name:"Frequency Modes",render:r=>e.jsx(ze,{...r}),args:{frequency:"DAILY"},parameters:{controls:{include:["frequency"]}},argTypes:{frequency:{control:"select",options:["DAILY","WEEKLY","MONTHLY","YEARLY"],description:"Active frequency mode"}}},u={name:"Custom Frequencies",render:r=>e.jsx(Ze,{...r}),args:{frequencies:["DAILY","WEEKLY"]},parameters:{controls:{include:["frequencies"]}},argTypes:{frequencies:{control:"check",options:["DAILY","WEEKLY","MONTHLY","YEARLY"],description:"Subset of frequency options shown in the dropdown"}}},p={name:"Custom End Types",render:r=>e.jsx(Je,{...r}),args:{endTypes:["Never","Count"]},parameters:{controls:{include:["endTypes"]}},argTypes:{endTypes:{control:"check",options:["Never","Until","Count"],description:"Subset of end-type options shown in the end dropdown"}}},m={name:"End By Count",render:()=>e.jsx(Xe,{}),parameters:{controls:{disable:!0}}},y={name:"End By Until Date",render:()=>e.jsx($e,{}),parameters:{controls:{disable:!0}}},D={name:"Weekly – Day Selection",render:r=>e.jsx(er,{...r}),args:{firstDayOfWeek:0},parameters:{controls:{include:["firstDayOfWeek"]}},argTypes:{firstDayOfWeek:{control:"select",options:[0,1,2,3,4,5,6],description:"First day of the week shown in the day-button row"}}},Y={name:"Monthly – By Day of Month",render:()=>e.jsx(rr,{}),parameters:{controls:{disable:!0}}},f={name:"Monthly – By Week Position",render:()=>e.jsx(nr,{}),parameters:{controls:{disable:!0}}},h={name:"Yearly Recurrence",render:()=>e.jsx(tr,{}),parameters:{controls:{disable:!0}}},E={name:"First Day of Week",render:r=>e.jsx(sr,{...r}),args:{firstDayOfWeek:1},parameters:{controls:{include:["firstDayOfWeek"]}},argTypes:{firstDayOfWeek:{control:"select",options:[0,1,2,3,4,5,6],description:"0 = Sunday, 1 = Monday, 6 = Saturday"}}},g={name:"RTL Mode",render:()=>e.jsx(ar,{}),parameters:{controls:{disable:!0}}},T={name:"Controlled Mode",render:r=>e.jsx(or,{...r}),args:{value:"FREQ=MONTHLY;BYDAY=MO;BYSETPOS=2;COUNT=12"},parameters:{controls:{include:["value"]}},argTypes:{value:{control:"text",description:"RRULE string passed as a controlled prop"}}},S={name:"Display Only (No onChange)",render:()=>e.jsx(cr,{}),parameters:{controls:{disable:!0}}},M={name:"Custom Start Date",render:r=>e.jsx(ir,{...r}),args:{startDate:"2025-01-15"},parameters:{controls:{include:["startDate"]}},argTypes:{startDate:{control:"text",description:"ISO date string used as the recurrence start date (YYYY-MM-DD)"}}};var R,O,L,C,W;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Rule Generation',
  render: args => <RuleGenerator {...args} />,
  args: {
    firstDayOfWeek: 0,
    direction: 'ltr'
  },
  parameters: {
    controls: {
      include: ['firstDayOfWeek', 'direction']
    }
  },
  argTypes: {
    firstDayOfWeek: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6],
      description: 'First day of week (0 = Sunday, 1 = Monday, …)'
    },
    direction: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction'
    }
  }
}`,...(L=(O=l.parameters)==null?void 0:O.docs)==null?void 0:L.source},description:{story:"Interactive editor — all props configurable via controls",...(W=(C=l.parameters)==null?void 0:C.docs)==null?void 0:W.description}}};var j,v,k,A,N;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Frequency Modes',
  render: args => <FrequencyModeSample {...args} />,
  args: {
    frequency: 'DAILY'
  },
  parameters: {
    controls: {
      include: ['frequency']
    }
  },
  argTypes: {
    frequency: {
      control: 'select',
      options: ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'],
      description: 'Active frequency mode'
    }
  }
}`,...(k=(v=d.parameters)==null?void 0:v.docs)==null?void 0:k.source},description:{story:"Switch between all four frequency modes to see their unique UI sections",...(N=(A=d.parameters)==null?void 0:A.docs)==null?void 0:N.description}}};var B,w,F,q,b;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Custom Frequencies',
  render: args => <CustomFrequenciesSample {...args} />,
  args: {
    frequencies: ['DAILY', 'WEEKLY']
  },
  parameters: {
    controls: {
      include: ['frequencies']
    }
  },
  argTypes: {
    frequencies: {
      control: 'check',
      options: ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'],
      description: 'Subset of frequency options shown in the dropdown'
    }
  }
}`,...(F=(w=u.parameters)==null?void 0:w.docs)==null?void 0:F.source},description:{story:"Restrict the frequency dropdown to a custom subset of options",...(b=(q=u.parameters)==null?void 0:q.docs)==null?void 0:b.description}}};var H,I,Q,U,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Custom End Types',
  render: args => <CustomEndTypesSample {...args} />,
  args: {
    endTypes: ['Never', 'Count']
  },
  parameters: {
    controls: {
      include: ['endTypes']
    }
  },
  argTypes: {
    endTypes: {
      control: 'check',
      options: ['Never', 'Until', 'Count'],
      description: 'Subset of end-type options shown in the end dropdown'
    }
  }
}`,...(Q=(I=p.parameters)==null?void 0:I.docs)==null?void 0:Q.source},description:{story:"Restrict the end-type dropdown to a custom subset of options",...(K=(U=p.parameters)==null?void 0:U.docs)==null?void 0:K.description}}};var P,G,V,_,z;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'End By Count',
  render: () => <EndByCountSample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(G=m.parameters)==null?void 0:G.docs)==null?void 0:V.source},description:{story:"End recurrence after a fixed number of occurrences",...(z=(_=m.parameters)==null?void 0:_.docs)==null?void 0:z.description}}};var Z,J,X,$,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'End By Until Date',
  render: () => <EndByUntilSample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(J=y.parameters)==null?void 0:J.docs)==null?void 0:X.source},description:{story:"End recurrence on a specific calendar date",...(ee=($=y.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var re,ne,te,se,ae;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Weekly – Day Selection',
  render: args => <WeeklyDaySelectionSample {...args} />,
  args: {
    firstDayOfWeek: 0
  },
  parameters: {
    controls: {
      include: ['firstDayOfWeek']
    }
  },
  argTypes: {
    firstDayOfWeek: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6],
      description: 'First day of the week shown in the day-button row'
    }
  }
}`,...(te=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:te.source},description:{story:"Weekly recurrence with day-of-week toggle buttons",...(ae=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ae.description}}};var oe,ce,ie,le,de;Y.parameters={...Y.parameters,docs:{...(oe=Y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Monthly – By Day of Month',
  render: () => <MonthlyByDaySample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ie=(ce=Y.parameters)==null?void 0:ce.docs)==null?void 0:ie.source},description:{story:"Monthly recurrence pinned to a specific day number of the month",...(de=(le=Y.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var ue,pe,me,ye,De;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Monthly – By Week Position',
  render: () => <MonthlyByWeekPositionSample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(me=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:me.source},description:{story:'Monthly recurrence by a relative week position (e.g. "3rd Monday")',...(De=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:De.description}}};var Ye,fe,he,Ee,ge;h.parameters={...h.parameters,docs:{...(Ye=h.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: 'Yearly Recurrence',
  render: () => <YearlySample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(he=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:he.source},description:{story:"Yearly recurrence on a specific month and day",...(ge=(Ee=h.parameters)==null?void 0:Ee.docs)==null?void 0:ge.description}}};var Te,Se,Me,xe,Re;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'First Day of Week',
  render: args => <FirstDayOfWeekSample {...args} />,
  args: {
    firstDayOfWeek: 1
  },
  parameters: {
    controls: {
      include: ['firstDayOfWeek']
    }
  },
  argTypes: {
    firstDayOfWeek: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6],
      description: '0 = Sunday, 1 = Monday, 6 = Saturday'
    }
  }
}`,...(Me=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:Me.source},description:{story:"Change the starting weekday in the day-button row",...(Re=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:Re.description}}};var Oe,Le,Ce,We,je;g.parameters={...g.parameters,docs:{...(Oe=g.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'RTL Mode',
  render: () => <RTLSample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ce=(Le=g.parameters)==null?void 0:Le.docs)==null?void 0:Ce.source},description:{story:"Right-to-left layout using the Provider dir prop",...(je=(We=g.parameters)==null?void 0:We.docs)==null?void 0:je.description}}};var ve,ke,Ae,Ne,Be;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Controlled Mode',
  render: args => <ControlledModeSample {...args} />,
  args: {
    value: 'FREQ=MONTHLY;BYDAY=MO;BYSETPOS=2;COUNT=12'
  },
  parameters: {
    controls: {
      include: ['value']
    }
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'RRULE string passed as a controlled prop'
    }
  }
}`,...(Ae=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source},description:{story:"Value is fully controlled from outside — no internal state",...(Be=(Ne=T.parameters)==null?void 0:Ne.docs)==null?void 0:Be.description}}};var we,Fe,qe,be,He;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Display Only (No onChange)',
  render: () => <DisplayOnlySample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(qe=(Fe=S.parameters)==null?void 0:Fe.docs)==null?void 0:qe.source},description:{story:"Editor rendered without an onChange handler — display only",...(He=(be=S.parameters)==null?void 0:be.docs)==null?void 0:He.description}}};var Ie,Qe,Ue,Ke,Pe;M.parameters={...M.parameters,docs:{...(Ie=M.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Custom Start Date',
  render: args => <CustomStartDateSample {...args} />,
  args: {
    startDate: '2025-01-15'
  },
  parameters: {
    controls: {
      include: ['startDate']
    }
  },
  argTypes: {
    startDate: {
      control: 'text',
      description: 'ISO date string used as the recurrence start date (YYYY-MM-DD)'
    }
  }
}`,...(Ue=(Qe=M.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source},description:{story:"Change the base start date used for recurrence calculations",...(Pe=(Ke=M.parameters)==null?void 0:Ke.docs)==null?void 0:Pe.description}}};const Dr=["RuleGeneration","FrequencyModes","CustomFrequencies","CustomEndTypes","EndByCount","EndByUntil","WeeklyDaySelection","MonthlyByDay","MonthlyByWeekPosition","YearlyRecurrence","FirstDayOfWeek","RTLMode","ControlledMode","DisplayOnly","CustomStartDate"];export{T as ControlledMode,p as CustomEndTypes,u as CustomFrequencies,M as CustomStartDate,S as DisplayOnly,m as EndByCount,y as EndByUntil,E as FirstDayOfWeek,d as FrequencyModes,Y as MonthlyByDay,f as MonthlyByWeekPosition,g as RTLMode,l as RuleGeneration,D as WeeklyDaySelection,h as YearlyRecurrence,Dr as __namedExportsOrder,yr as default};
