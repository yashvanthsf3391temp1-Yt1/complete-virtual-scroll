import{j as e}from"./index-DlC1yEB1.js";import{r as l}from"./index-D5jfS-9e.js";import{S as ce,D as me,W as he,a as ue,M as ge,A as pe}from"./agenda-view-dL467uGC.js";import{f as i}from"./recurrence-editor-byJWIIef.js";import{c as ve}from"./dataSource-BQKtoYBq.js";import{n as we,t as ye,g as fe}from"./thanksgiving-day-D937gSiR.js";import{c as d,a as x,r as D,b as be}from"./weather-rain-B7MQ2mWe.js";/* empty css               */import"./index-lf5wH9A6.js";const a=({view:o="Month",firstDayOfWeek:E=0,showWeekNumber:R=!0,showWeekend:F=!0,workDays:M=[1,2,3,4,5],height:I="550px",width:A="100%",showTimeIndicator:P=!0,startHour:O,endHour:B,timeFormat:V="h:mm a",dateFormat:z="M/d/yyyy",start:c="09:00",end:m="18:00",highlight:h=!1,eventOverlap:L=!0,showQuickInfoPopup:Q=!0,header:U=!0,rowAutoHeight:_=!1,eventResize:$=!0,keyboardNavigation:q=!0,eventDrag:G=!0,readonly:J=!1,allowAdding:u=!0,allowDeleting:g=!0,allowEditing:p=!0,enableIndicator:v=!1,ignoreWhitespace:w=!1,spannedEventPlacement:y="AllDayRow",template:f=!1,cell:K=!1,dateHeader:X=!1,enable:b=!0,interval:k=60,majorSlotEnabled:Y=!1,minorSlotEnabled:Z=!1,slotCount:S=6,weekRule:ee="FirstDay"})=>{const te=l.useMemo(()=>({dataSource:ve,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"},allowAdding:u,allowDeleting:g,allowEditing:p,enableIndicator:v,ignoreWhitespace:w,spannedEventPlacement:y,template:f?t=>e.jsxs("div",{children:[e.jsx("div",{children:t.subject??"Untitled"}),e.jsx("div",{children:t!=null&&t.Location?`@ ${t.Location}`:""})]}):void 0}),[u,g,p,v,w,y,f]),ae=l.useMemo(()=>({start:c,end:m,highlight:h}),[c,m,h]),n=Y?t=>e.jsx("div",{children:i(t.date,{skeleton:"Hm"})}):void 0,s=Z?t=>e.jsx("div",{children:i(t.date,{skeleton:"ms"}).replace(":00","")}):void 0,re=l.useMemo(()=>({enable:b,interval:k,slotCount:S,...n&&{majorSlot:n},...s&&{minorSlot:s}}),[b,k,S,n,s]),oe=t=>{switch(t.getDay()){case 0:return e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"weather-image",src:x,alt:"Clear weather"}),e.jsx("div",{className:"weather-text",children:"25°C"})]});case 1:return e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"weather-image",src:d,alt:"Clouds weather"}),e.jsx("div",{className:"weather-text",children:"18°C"})]});case 2:return e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"weather-image",src:D,alt:"Rain weather"}),e.jsx("div",{className:"weather-text",children:"10°C"})]});case 3:return e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"weather-image",src:d,alt:"Clouds weather"}),e.jsx("div",{className:"weather-text",children:"16°C"})]});case 4:return e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"weather-image",src:D,alt:"Rain weather"}),e.jsx("div",{className:"weather-text",children:"8°C"})]});case 5:return e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"weather-image",src:x,alt:"Clear weather"}),e.jsx("div",{className:"weather-text",children:"27°C"})]});case 6:return e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"weather-image",src:d,alt:"Clouds weather"}),e.jsx("div",{className:"weather-text",children:"17°C"})]});default:return""}},ne=t=>[1,6].indexOf(t.getDay())>=0?e.jsx("img",{src:we}):"",se=t=>t.getDate()===30||t.getDate()===5?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:ye,alt:"Thanksgiving day"}),e.jsx("div",{className:"caption",children:"Thanksgiving day"})]}):t.getDate()===9||t.getDate()===15?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:fe,alt:"Party time"}),e.jsx("div",{className:"caption",children:"Party time"})]}):t.getDate()===13||t.getDate()===23?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:be,alt:"Birthday"}),e.jsx("div",{className:"caption",children:"Birthday"})]}):"",le=K?t=>t.type==="workCell"?e.jsx("div",{className:"templatewrap",children:ne(t.date)}):t.type==="monthCell"?e.jsx("div",{className:"templatewrap",children:se(t.date)}):null:void 0,ie=t=>i(t,{skeleton:"Ed"}),de=X?t=>e.jsxs("div",{className:"custom-date-header",children:[e.jsx("div",{children:ie(t.date)}),e.jsx("div",{className:"date-text",children:oe(t.date)})]}):void 0;return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(ce,{view:o,firstDayOfWeek:E,showWeekNumber:R,showWeekend:F,workDays:M,height:I,width:A,showTimeIndicator:P,startHour:O,endHour:B,timeFormat:V,dateFormat:z,timeScale:re,workHours:ae,eventOverlap:L,showQuickInfoPopup:Q,header:U,rowAutoHeight:_,eventResize:$,keyboardNavigation:q,eventDrag:G,readOnly:J,defaultSelectedDate:new Date(2025,6,14),weekRule:ee,eventSettings:te,cell:le,dateHeader:de,children:[e.jsx(me,{}),e.jsx(he,{}),e.jsx(ue,{}),e.jsx(ge,{}),e.jsx(pe,{})]})})})},Ee={title:"Scheduler/Default",component:a,parameters:{layout:"padded",docs:{description:{component:"Meta configuration for the Storybook stories"}}},tags:["autodocs"],argTypes:{height:{control:"text",description:"Height of the scheduler component"},width:{control:"text",description:"Width of the scheduler component"},startHour:{control:"text",description:"Start hour of the scheduler (format: HH:mm)"},endHour:{control:"text",description:"End hour of the scheduler (format: HH:mm)"},showWeekNumber:{control:"boolean",description:"Whether to show week numbers"},showWeekend:{control:"boolean",description:"Whether to show weekends"},showTimeIndicator:{control:"boolean",description:"Whether to show the current time indicator"},eventOverlap:{control:"boolean",description:"Whether to allow events to overlap"},showQuickInfoPopup:{control:"boolean",description:"Open quick preview popup with or without full event editor"},header:{control:"boolean",description:"Controls the visibility of the header bar"},rowAutoHeight:{control:"boolean",description:"Automatically adjusts cell heights based on the number of events in each time slot"},eventResize:{control:"boolean",description:"Controls the events resize"},keyboardNavigation:{control:"boolean",description:"Whether to allow keyboard navigation or not"},eventDrag:{control:"boolean",description:"Controls the events drag action"},cell:{control:"boolean",description:"Toggle a simple cell template (fills each cell with a subtle background)"},dateHeader:{control:"boolean",description:"Toggle a simple date header template (bold weekday + date)"},readonly:{control:"boolean",description:"Controls the events iteraction"},view:{control:"select",options:["Day","Week","WorkWeek","Month","Agenda"],description:"controlled mode to set view property"},firstDayOfWeek:{control:"select",options:[0,1,2,3,4,5,6],description:"First day of the week (0 for Sunday, 1 for Monday, etc.)"},timeFormat:{control:"select",options:["h:mm a","HH:mm"],description:"Time format (12-hour or 24-hour)"},dateFormat:{control:"select",options:["dd/M/yyyy","M/d/yyyy","yyyy/M/d","yy/M/dd","dd-M-yy","M-d-yyyy","yy-M-d"],description:"Date format for the scheduler"},workDays:{control:"object",description:"Work days to display in the work week view (0 for Sunday, 1 for Monday, etc.) as array of numbers [1,2,3,4,5]",table:{type:{summary:"number[]"}}},allowAdding:{control:"boolean",description:"Enable/disable adding events via UI",table:{category:"eventSettings"}},allowDeleting:{control:"boolean",description:"Enable/disable deleting events via UI",table:{category:"eventSettings"}},allowEditing:{control:"boolean",description:"Enable/disable editing events via UI",table:{category:"eventSettings"}},enableIndicator:{control:"boolean",description:"Show/hide indicator when applicable",table:{category:"eventSettings"}},ignoreWhitespace:{control:"boolean",description:"Ignore whitespace during text processing",table:{category:"eventSettings"}},template:{control:"boolean",description:"Enable a basic event template. When true, a simple template is rendered; when false, default rendering is used.",table:{category:"eventSettings"}},spannedEventPlacement:{control:"select",options:["AllDayRow","TimeSlot"],description:"How to render spanned events",table:{category:"eventSettings"}},start:{control:"text",description:"Work hours start time",table:{category:"workHours"}},end:{control:"text",description:"Work hours end time",table:{category:"workHours"}},highlight:{control:"boolean",description:"Highlight work hours range in the view",table:{category:"workHours"}},enable:{control:"boolean",description:"Enable/disable the time scale (time slots)",table:{category:"timeScale"}},interval:{control:{type:"number",min:1,step:1},description:"Minutes per major slot",table:{category:"timeScale"}},slotCount:{control:{type:"number",min:1,step:1},description:"Number of minor slots per major slot",table:{category:"timeScale"}},majorSlotEnabled:{control:"boolean",description:"Toggle major slot label template",table:{category:"timeScale"}},minorSlotEnabled:{control:"boolean",description:"Toggle minor slot label template",table:{category:"timeScale"}},weekRule:{control:"select",options:["FirstDay","FirstFourDayWeek","FirstFullWeek"],description:"Specifies the rule for defining the first week of the year.",table:{type:{summary:"WeekRule"},defaultValue:{summary:"FirstDay"}}}}},r={render:o=>e.jsx(a,{...o}),args:{view:"Week",firstDayOfWeek:0,showWeekNumber:!1,showWeekend:!0,workDays:[1,2,3,4,5],height:"550px",width:"100%",showTimeIndicator:!0,startHour:"08:00",endHour:"18:00",timeFormat:"h:mm a",dateFormat:"M/d/yyyy",eventOverlap:!0,showQuickInfoPopup:!0,header:!0,rowAutoHeight:!1,eventResize:!0,keyboardNavigation:!0,eventDrag:!0,start:"09:00",end:"18:00",highlight:!1,readonly:!1,allowDeleting:!0,allowEditing:!0,allowAdding:!0,enableIndicator:!1,ignoreWhitespace:!1,template:!1,cell:!1,dateHeader:!1,spannedEventPlacement:"AllDayRow",enable:!0,interval:60,majorSlotEnabled:!1,minorSlotEnabled:!1,slotCount:6,weekRule:"FirstDay"}};var j,N,W;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`({
  view = 'Month',
  firstDayOfWeek = 0,
  showWeekNumber = true,
  showWeekend = true,
  workDays = [1, 2, 3, 4, 5],
  height = '550px',
  width = '100%',
  showTimeIndicator = true,
  startHour,
  endHour,
  timeFormat = 'h:mm a',
  dateFormat = 'M/d/yyyy',
  start = '09:00',
  end = '18:00',
  highlight = false,
  eventOverlap = true,
  showQuickInfoPopup = true,
  header = true,
  rowAutoHeight = false,
  eventResize = true,
  keyboardNavigation = true,
  eventDrag = true,
  readonly = false,
  allowAdding = true,
  allowDeleting = true,
  allowEditing = true,
  enableIndicator = false,
  ignoreWhitespace = false,
  spannedEventPlacement = 'AllDayRow',
  template = false,
  cell = false,
  dateHeader = false,
  enable = true,
  interval = 60,
  majorSlotEnabled = false,
  minorSlotEnabled = false,
  slotCount = 6,
  weekRule = 'FirstDay'
}) => {
  const computedEventSettings = useMemo(() => ({
    dataSource: combinedEvents,
    fields: {
      id: 'Id',
      subject: 'Subject',
      location: 'Location',
      description: 'Description',
      startTime: 'StartTime',
      endTime: 'EndTime',
      isAllDay: 'IsAllDay',
      isBlock: 'IsBlock',
      isReadonly: 'IsReadonly'
    },
    allowAdding,
    allowDeleting,
    allowEditing,
    enableIndicator,
    ignoreWhitespace,
    spannedEventPlacement,
    template: template ? (props: EventModel) => <div>\r
                        <div>{props.subject ?? 'Untitled'}</div>\r
                        <div>{props?.Location ? \`@ \${props.Location}\` : ''}</div>\r
                    </div> : undefined
  }), [allowAdding, allowDeleting, allowEditing, enableIndicator, ignoreWhitespace, spannedEventPlacement, template]);
  const computedWorkHours = useMemo<WorkHoursControl>(() => ({
    start: start,
    end: end,
    highlight: highlight
  }), [start, end, highlight]);
  const majorSlotTemplateRenderer = majorSlotEnabled ? (props: TimeSlotProps) => <div>{formatDate(props.date, {
      skeleton: 'Hm'
    })}</div> : undefined;
  const minorSlotTemplateRenderer = minorSlotEnabled ? (props: TimeSlotProps) => <div>{formatDate(props.date, {
      skeleton: 'ms'
    }).replace(':00', '')}</div> : undefined;
  const computedTimeScale: TimeScaleProps = useMemo(() => ({
    enable,
    interval,
    slotCount,
    ...(majorSlotTemplateRenderer && {
      majorSlot: majorSlotTemplateRenderer
    }),
    ...(minorSlotTemplateRenderer && {
      minorSlot: minorSlotTemplateRenderer
    })
  }), [enable, interval, slotCount, majorSlotTemplateRenderer, minorSlotTemplateRenderer]);
  const getWeather = (date: Date) => {
    switch (date.getDay()) {
      case 0:
        return <>\r
                        <img className="weather-image" src={clearSvg} alt="Clear weather" />\r
                        <div className="weather-text">25°C</div>\r
                    </>;
      case 1:
        return <>\r
                        <img className="weather-image" src={cloudsSvg} alt="Clouds weather" />\r
                        <div className="weather-text">18°C</div>\r
                    </>;
      case 2:
        return <>\r
                        <img className="weather-image" src={rainSvg} alt="Rain weather" />\r
                        <div className="weather-text">10°C</div>\r
                    </>;
      case 3:
        return <>\r
                        <img className="weather-image" src={cloudsSvg} alt="Clouds weather" />\r
                        <div className="weather-text">16°C</div>\r
                    </>;
      case 4:
        return <>\r
                        <img className="weather-image" src={rainSvg} alt="Rain weather" />\r
                        <div className="weather-text">8°C</div>\r
                    </>;
      case 5:
        return <>\r
                        <img className="weather-image" src={clearSvg} alt="Clear weather" />\r
                        <div className="weather-text">27°C</div>\r
                    </>;
      case 6:
        return <>\r
                        <img className="weather-image" src={cloudsSvg} alt="Clouds weather" />\r
                        <div className="weather-text">17°C</div>\r
                    </>;
      default:
        return '';
    }
  };
  const getWorkCellText = (date: Date) => {
    let weekEnds: number[] = [1, 6];
    if (weekEnds.indexOf(date.getDay()) >= 0) {
      return <img src={newyearSvg} />;
    }
    return '';
  };
  const getMonthCellContent = (date: Date) => {
    if (date.getDate() === 30 || date.getDate() === 5) {
      return <>\r
                    <img src={thanksgivingdaySvg} alt="Thanksgiving day" />\r
                    <div className="caption">Thanksgiving day</div>\r
                </>;
    } else if (date.getDate() === 9 || date.getDate() === 15) {
      return <>\r
                    <img src={getTogetherSvg} alt="Party time" />\r
                    <div className="caption">Party time</div>\r
                </>;
    } else if (date.getDate() === 13 || date.getDate() === 23) {
      return <>\r
                    <img src={birthdaySvg} alt="Birthday" />\r
                    <div className="caption">Birthday</div>\r
                </>;
    } else {
      return '';
    }
  };
  const cellTemplate = cell ? (props: SchedulerCellProps) => {
    if (props.type === 'workCell') {
      return <div className="templatewrap">\r
                        {getWorkCellText(props.date)}\r
                    </div>;
    }
    if (props.type === 'monthCell') {
      return <div className="templatewrap">\r
                        {getMonthCellContent(props.date)}\r
                    </div>;
    }
    return null;
  } : undefined;
  const getDateHeaderText = (value: Date): string => {
    return formatDate(value, {
      skeleton: 'Ed'
    });
  };
  const dateHeaderTemplate = dateHeader ? (props: SchedulerDateHeaderProps) => <div className="custom-date-header">\r
                <div>{getDateHeaderText(props.date)}</div>\r
                <div className="date-text">{getWeather(props.date)}</div>\r
            </div> : undefined;
  return <div className="control-section">\r
            <div className="scheduler-control">\r
                <Scheduler view={view} firstDayOfWeek={firstDayOfWeek} showWeekNumber={showWeekNumber} showWeekend={showWeekend} workDays={workDays} height={height} width={width} showTimeIndicator={showTimeIndicator} startHour={startHour} endHour={endHour} timeFormat={timeFormat} dateFormat={dateFormat} timeScale={computedTimeScale} workHours={computedWorkHours} eventOverlap={eventOverlap} showQuickInfoPopup={showQuickInfoPopup} header={header} rowAutoHeight={rowAutoHeight} eventResize={eventResize} keyboardNavigation={keyboardNavigation} eventDrag={eventDrag} readOnly={readonly} defaultSelectedDate={new Date(2025, 6, 14)} weekRule={weekRule} eventSettings={computedEventSettings} cell={cellTemplate} dateHeader={dateHeaderTemplate}>\r
                    <DayView />\r
                    <WeekView />\r
                    <WorkWeekView />\r
                    <MonthView />\r
                    <AgendaView />\r
                </Scheduler>\r
            </div>\r
        </div>;
}`,...(W=(N=a.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var T,H,C;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <BasicSample {...args} />,
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
}`,...(C=(H=r.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};const Re=["BasicSample","BasicDemo"];export{r as BasicDemo,a as BasicSample,Re as __namedExportsOrder,Ee as default};
