import{j as e}from"./index-DlC1yEB1.js";import{r as p}from"./index-D5jfS-9e.js";import{S as y,D as R,W as I,a as A,M as C}from"./agenda-view-dL467uGC.js";import"./recurrence-editor-byJWIIef.js";/* empty css               */import"./index-lf5wH9A6.js";const M={id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"},q=t=>({Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:t.Subject??"Untitled",StartTime:t.StartTime??t.startTime,EndTime:t.EndTime??t.endTime,IsAllDay:t.IsAllDay??t.isAllDay,Location:t.Location??t.location,Description:t.Description??t.description}),W=(t,n="")=>{const s=(c,o,a=0)=>new Date(c.getFullYear(),c.getMonth(),c.getDate(),o,a),l=new Date(t);l.setDate(t.getDate()-1);const d=new Date(t);d.setDate(t.getDate()+1);const w=new Date(t);w.setDate(t.getDate()+2);const S=new Date(t);S.setDate(t.getDate()+3);const f=new Date(t);f.setDate(t.getDate()+4);const D=new Date(t);return D.setDate(t.getDate()+5),[{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${n} Offsite (All day)`,StartTime:new Date(l.getFullYear(),l.getMonth(),l.getDate()),EndTime:new Date(l.getFullYear(),l.getMonth(),l.getDate()),IsAllDay:!0,Location:"Offsite",Description:`${n} company offsite - previous day`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${n} Standup`,StartTime:s(d,8),EndTime:s(d,10,30),IsAllDay:!1,Location:"Online",Description:`${n} daily standup`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${n} Deployment`,StartTime:s(t,1),EndTime:s(t,3),IsAllDay:!1,Location:"Data Center",Description:`${n} overnight deployment spanning into next day`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${n} Follow-up`,StartTime:s(d,15),EndTime:s(d,16),IsAllDay:!1,Location:"Headquarters",Description:`${n} post-event follow-up on next day`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${n} Kickoff Meeting`,StartTime:s(l,10),EndTime:s(l,11),IsAllDay:!1,Location:"Conference Room 1",Description:`${n} project kickoff on Oct 29`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${n} Planning Session`,StartTime:s(t,12),EndTime:s(t,13),IsAllDay:!1,Location:"War Room",Description:`${n} sprint planning on Oct 30`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${n} Customer Demo`,StartTime:s(d,11),EndTime:s(d,12),IsAllDay:!1,Location:"Online",Description:`${n} product demo on Oct 31`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${n} Design Review`,StartTime:s(w,14),EndTime:s(w,15,30),IsAllDay:!1,Location:"Design Lab",Description:`${n} design review on Nov 1`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${n} Code Freeze`,StartTime:s(S,16),EndTime:s(S,18),IsAllDay:!1,Location:"Repository",Description:`${n} code freeze preparations on Nov 2`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${n} Retrospective`,StartTime:s(f,10),EndTime:s(f,11,30),IsAllDay:!1,Location:"Conference Room 2",Description:`${n} sprint retrospective on Nov 3`},{Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:`${n} Team Outing`,StartTime:s(D,12),EndTime:s(D,14),IsAllDay:!1,Location:"City Park",Description:`${n} team outing on Nov 4`}]},G=()=>{const t=p.useRef(null),n=p.useRef(null),s=p.useRef(null),l=p.useRef(null),d={dataSource:W(new Date(2017,9,30),"A"),fields:M},w={dataSource:W(new Date(2017,9,30),"B"),fields:M},S=(o,a)=>!!(o.current&&a&&o.current.contains(a)),f=(o,a)=>{var i,x,g,u;const r=a.target;if(!r||!a.data)return;const m=o==="A"?t:n;if(!S(o==="A"?l:s,r))return;const h=a.data.Id??a.data.id;(x=(i=m.current)==null?void 0:i.deleteEvent)==null||x.call(i,h),(u=(g=(o==="A"?n:t).current)==null?void 0:g.addEvent)==null||u.call(g,q(a.data))},D=o=>f("A",o),c=o=>f("B",o);return e.jsxs("div",{className:"control-section",children:[e.jsxs("div",{className:"schedulers-container",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[e.jsxs("div",{ref:s,style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler A"}),e.jsxs(y,{className:"sf-first",ref:t,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container",interval:15},eventSettings:d,onDragStop:D,children:[e.jsx(R,{}),e.jsx(I,{}),e.jsx(A,{}),e.jsx(C,{})]})]}),e.jsxs("div",{ref:l,style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler B"}),e.jsxs(y,{className:"sf-second",ref:n,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container",interval:15},eventSettings:w,onDragStop:c,children:[e.jsx(R,{}),e.jsx(I,{}),e.jsx(A,{}),e.jsx(C,{})]})]})]}),e.jsx("p",{style:{marginTop:12,color:"#555"},children:"Drag events between the two schedulers. When an event is dropped in the other scheduler, it is removed from the source and added to the target."})]})},ne={title:"Scheduler/External Drag & Drop",parameters:{layout:"padded"},tags:["autodocs"]},k={render:()=>e.jsx(G,{})},b={render:()=>{const t=()=>{const n=p.useRef(null),s=p.useRef(null),l=p.useRef(null),d={dataSource:W(new Date(2017,9,30),"A"),fields:M},w={dataSource:W(new Date(2017,9,30),"B"),fields:M},S={dataSource:W(new Date(2017,9,30),"C"),fields:M},f=c=>c?c.closest(".sf-first")?n:c.closest(".sf-second")?s:c.closest(".sf-third")?l:null:null,D=c=>o=>{var h,E,i,x;const a=o.target||null;if(!a||!o.data)return;const r=f(a);if(!r||r===c)return;const m=o.data,j=m.Id??m.id;(E=(h=c.current)==null?void 0:h.deleteEvent)==null||E.call(h,j),(x=(i=r.current)==null?void 0:i.addEvent)==null||x.call(i,q(o.data))};return e.jsx("div",{className:"control-section",children:e.jsxs("div",{className:"schedulers-container",style:{display:"grid",gridTemplateColumns:"1fr",gap:16},children:[e.jsxs("div",{style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler A"}),e.jsxs(y,{className:"sf-first",ref:n,height:"400px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container"},eventSettings:d,onDragStop:D(n),children:[e.jsx(R,{}),e.jsx(I,{}),e.jsx(A,{}),e.jsx(C,{})]})]}),e.jsxs("div",{style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler B"}),e.jsxs(y,{className:"sf-second",ref:s,height:"350px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container"},eventSettings:w,onDragStop:D(s),children:[e.jsx(R,{}),e.jsx(I,{}),e.jsx(A,{}),e.jsx(C,{})]})]}),e.jsxs("div",{style:{minWidth:0},children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler C"}),e.jsxs(y,{className:"sf-third",ref:l,height:"400px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".schedulers-container"},eventSettings:S,onDragStop:D(l),children:[e.jsx(R,{}),e.jsx(I,{}),e.jsx(A,{}),e.jsx(C,{})]})]})]})})};return e.jsx(t,{})}},V={render:()=>{const t=()=>{const n=p.useRef(null),s=p.useRef(null),[l,d]=p.useState([{id:"ext-1",Subject:"Interview",Description:"Candidate interview",Duration:60},{id:"ext-2",Subject:"Lunch",Description:"Team lunch",Duration:60},{id:"ext-3",Subject:"Code Review",Description:"Review PRs",Duration:30}]),[w,S]=p.useState(W(new Date(2017,9,30),"E")),f=(a,r)=>{const m={ExternalId:r.id,Subject:r.Subject,Description:r.Description,Duration:r.Duration,__external:!0};try{a.dataTransfer.setData("application/json",JSON.stringify(m))}catch{}a.dataTransfer.effectAllowed="copy"},D=a=>{var B,$;a.preventDefault(),a.stopPropagation();const r=a.target||null;if(!r||!r.closest(".sf-scheduler"))return;const j=!!r.closest(".sf-all-day-row"),h=!!r.closest(".sf-work-cells"),E=!!r.closest(".sf-month-view");if(!j&&!h&&!E)return;let i=null;try{const v=a.dataTransfer.getData("application/json");v&&(i=JSON.parse(v))}catch{}if(!i)return;const x=i.ExternalId??i.id,g=Number(i.Duration??60);let u=new Date,N=new Date(u.getTime()+g*6e4);if(h){const v=r.closest(".sf-work-cells")??r,T=((B=n.current)==null?void 0:B.getCellDetails(v))??null,L=T==null?void 0:T.startTime;L&&(u=L,N=new Date(u.getTime()+g*6e4))}else if(j||E){const v=r.closest("[data-date]"),T=(($=n.current)==null?void 0:$.getCellDetails(v))??null,L=T==null?void 0:T.startTime;L&&(u=L,N=new Date(u.getFullYear(),u.getMonth(),u.getDate()))}const K={Id:Math.random().toString(36).slice(2)+Date.now().toString(36),Subject:i.Subject??"Untitled",StartTime:u,EndTime:N,IsAllDay:j||E,Location:i.Location??"",Description:i.Description??""};S(v=>[...v,K]),x&&d(v=>v.filter(T=>T.id!==x))},c=a=>{if(!a.data)return;const r=a.data,m=a.target||null;if(s.current&&m&&s.current.contains(m)){const j=r.Id??r.id;S(g=>g.filter(u=>u.Id!==j));const h=r.StartTime??r.startTime??r.start,E=r.EndTime??r.endTime??r.end;let i=60;try{i=Math.max(15,Math.round((new Date(E).getTime()-new Date(h).getTime())/6e4))}catch{}const x={id:"ext-"+Math.random().toString(36).slice(2),Subject:r.subject??r.Subject??"Untitled",Description:r.description??r.Description??"",Duration:i};d(g=>[...g,x]);return}},o={dataSource:w,fields:M};return e.jsx("div",{className:"control-section",onDragOver:a=>{a.preventDefault(),a.stopPropagation()},onDrop:D,children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"220px 1fr",gap:16},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"External Events"}),e.jsx("div",{className:"external-list",ref:s,style:{border:"1px dashed #ccc",padding:8,minHeight:200},children:l.map(a=>e.jsxs("div",{draggable:!0,onDragStart:r=>f(r,a),style:{padding:8,marginBottom:8,background:"#fff",cursor:"grab",border:"1px solid #ddd"},children:[e.jsx("strong",{children:a.Subject}),e.jsx("div",{style:{fontSize:12,color:"#666"},children:a.Description})]},a.id))}),e.jsx("p",{style:{marginTop:12,color:"#555"},children:"Drag items to/from the Scheduler. Events dropped here are removed from the Scheduler."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Scheduler"}),e.jsxs(y,{ref:n,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,9,30),defaultView:"Week",eventDrag:{enable:!0,externalDragAndDrop:!0,eventDragArea:".control-section",interval:15},eventSettings:o,onDragStop:c,children:[e.jsx(R,{}),e.jsx(I,{}),e.jsx(A,{}),e.jsx(C,{})]})]})]})})};return e.jsx(t,{})}};var F,H,O;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <TwoSchedulerExternalDnd />
}`,...(O=(H=k.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var _,U,P;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const ThreeSchedulerExternalDnd: FC = () => {
      const schedulerARef = useRef<IScheduler>(null);
      const schedulerBRef = useRef<IScheduler>(null);
      const schedulerCRef = useRef<IScheduler>(null);
      const schedulerAEventSettings = {
        dataSource: makeEventsForDate(new Date(2017, 9, 30), 'A'),
        fields: SCHEDULER_FIELDS
      };
      const schedulerBEventSettings = {
        dataSource: makeEventsForDate(new Date(2017, 9, 30), 'B'),
        fields: SCHEDULER_FIELDS
      };
      const schedulerCEventSettings = {
        dataSource: makeEventsForDate(new Date(2017, 9, 30), 'C'),
        fields: SCHEDULER_FIELDS
      };
      const getTargetSchedulerRef = (target: HTMLElement | null) => {
        if (!target) {
          return null;
        }
        if (target.closest('.sf-first')) {
          return schedulerARef;
        }
        if (target.closest('.sf-second')) {
          return schedulerBRef;
        }
        if (target.closest('.sf-third')) {
          return schedulerCRef;
        }
        return null;
      };
      const createDragStopHandler = (sourceRef: React.RefObject<IScheduler>) => (args: SchedulerDragEvent): void => {
        const targetEl = args.target as HTMLElement || null;
        if (!targetEl || !args.data) {
          return;
        }
        const targetRef = getTargetSchedulerRef(targetEl);
        if (!targetRef || targetRef === sourceRef) {
          return;
        }
        const raw = args.data as any;
        const id = raw.Id ?? raw.id;
        sourceRef.current?.deleteEvent?.(id as any);
        targetRef.current?.addEvent?.(toSchedulerRecord(args.data));
      };
      return <div className="control-section">\r
          <div className="schedulers-container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 16
        }}>\r
            <div style={{
            minWidth: 0
          }}>\r
              <h4 style={{
              margin: '0 0 8px'
            }}>Scheduler A</h4>\r
              <Scheduler className='sf-first' ref={schedulerARef} height={'400px'} width={'100%'} defaultSelectedDate={new Date(2017, 9, 30)} defaultView={'Week'} eventDrag={{
              enable: true,
              externalDragAndDrop: true,
              eventDragArea: '.schedulers-container'
            }} eventSettings={schedulerAEventSettings} onDragStop={createDragStopHandler(schedulerARef)}>\r
                <DayView />\r
                <WeekView />\r
                <WorkWeekView />\r
                <MonthView />\r
              </Scheduler>\r
            </div>\r
\r
            <div style={{
            minWidth: 0
          }}>\r
              <h4 style={{
              margin: '0 0 8px'
            }}>Scheduler B</h4>\r
              <Scheduler className='sf-second' ref={schedulerBRef} height={'350px'} width={'100%'} defaultSelectedDate={new Date(2017, 9, 30)} defaultView={'Week'} eventDrag={{
              enable: true,
              externalDragAndDrop: true,
              eventDragArea: '.schedulers-container'
            }} eventSettings={schedulerBEventSettings} onDragStop={createDragStopHandler(schedulerBRef)}>\r
                <DayView />\r
                <WeekView />\r
                <WorkWeekView />\r
                <MonthView />\r
              </Scheduler>\r
            </div>\r
\r
            <div style={{
            minWidth: 0
          }}>\r
              <h4 style={{
              margin: '0 0 8px'
            }}>Scheduler C</h4>\r
              <Scheduler className='sf-third' ref={schedulerCRef} height={'400px'} width={'100%'} defaultSelectedDate={new Date(2017, 9, 30)} defaultView={'Week'} eventDrag={{
              enable: true,
              externalDragAndDrop: true,
              eventDragArea: '.schedulers-container'
            }} eventSettings={schedulerCEventSettings} onDragStop={createDragStopHandler(schedulerCRef)}>\r
                <DayView />\r
                <WeekView />\r
                <WorkWeekView />\r
                <MonthView />\r
              </Scheduler>\r
            </div>\r
          </div>\r
        </div>;
    };
    return <ThreeSchedulerExternalDnd />;
  }
}`,...(P=(U=b.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var Y,z,J;V.parameters={...V.parameters,docs:{...(Y=V.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const ExternalListToSchedulerComp: FC = () => {
      const schedulerRef = useRef<IScheduler>(null);
      const externalWrapperRef = useRef<HTMLDivElement>(null);
      const [externalItems, setExternalItems] = useState([{
        id: 'ext-1',
        Subject: 'Interview',
        Description: 'Candidate interview',
        Duration: 60
      }, {
        id: 'ext-2',
        Subject: 'Lunch',
        Description: 'Team lunch',
        Duration: 60
      }, {
        id: 'ext-3',
        Subject: 'Code Review',
        Description: 'Review PRs',
        Duration: 30
      }]);
      const [schedulerEvents, setSchedulerEvents] = useState(makeEventsForDate(new Date(2017, 9, 30), 'E'));
      const onExternalDragStart = (e: React.DragEvent, item: any) => {
        const payload = {
          ExternalId: item.id,
          Subject: item.Subject,
          Description: item.Description,
          Duration: item.Duration,
          __external: true
        };
        try {
          e.dataTransfer.setData('application/json', JSON.stringify(payload));
        } catch {}
        e.dataTransfer.effectAllowed = 'copy';
      };
      const onExternalListDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const targetEl = e.target as HTMLElement || null;
        if (!targetEl) {
          return;
        }
        const isDroppedInScheduler = targetEl.closest('.sf-scheduler');
        if (!isDroppedInScheduler) {
          return;
        }
        const isAllDayCell = !!targetEl.closest('.sf-all-day-row');
        const isTimeSlotCell = !!targetEl.closest('.sf-work-cells');
        const isMonthCell = !!targetEl.closest('.sf-month-view');
        if (!isAllDayCell && !isTimeSlotCell && !isMonthCell) {
          return;
        }
        let droppedData: any = null;
        try {
          const jsonData = e.dataTransfer.getData('application/json');
          if (jsonData) {
            droppedData = JSON.parse(jsonData);
          }
        } catch {}
        if (!droppedData) {
          return;
        }
        const externalId = droppedData.ExternalId ?? droppedData.id;
        const durationMin = Number(droppedData.Duration ?? 60);
        let startTime = new Date();
        let endTime = new Date(startTime.getTime() + durationMin * 60000);
        if (isTimeSlotCell) {
          const cellEl = targetEl.closest('.sf-work-cells') ?? targetEl;
          const cellDetails = schedulerRef.current?.getCellDetails(cellEl) ?? null;
          const cellStartDate = cellDetails?.startTime;
          if (cellStartDate) {
            startTime = cellStartDate;
            endTime = new Date(startTime.getTime() + durationMin * 60000);
          }
        } else if (isAllDayCell || isMonthCell) {
          const cellEl = targetEl.closest('[data-date]');
          const cellDetails = schedulerRef.current?.getCellDetails(cellEl) ?? null;
          const cellStartDate = cellDetails?.startTime;
          if (cellStartDate) {
            startTime = cellStartDate;
            endTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate());
          }
        }
        const record = {
          Id: Math.random().toString(36).slice(2) + Date.now().toString(36),
          Subject: droppedData.Subject ?? 'Untitled',
          StartTime: startTime,
          EndTime: endTime,
          IsAllDay: isAllDayCell || isMonthCell,
          Location: droppedData.Location ?? '',
          Description: droppedData.Description ?? ''
        };
        setSchedulerEvents(prev => [...prev, record]);
        if (externalId) {
          setExternalItems(prev => prev.filter(it => it.id !== externalId));
        }
      };
      const onSchedulerDragStop = (args: SchedulerDragEvent): void => {
        if (!args.data) {
          return;
        }
        const raw = args.data as any;
        const targetEl = args.target as HTMLElement || null;
        if (externalWrapperRef.current && targetEl && externalWrapperRef.current.contains(targetEl)) {
          const id = raw.Id ?? raw.id;
          setSchedulerEvents(prev => prev.filter(evt => evt.Id !== id));
          const start = raw.StartTime ?? raw.startTime ?? raw.start;
          const end = raw.EndTime ?? raw.endTime ?? raw.end;
          let durationMin = 60;
          try {
            durationMin = Math.max(15, Math.round((new Date(end).getTime() - new Date(start).getTime()) / 60000));
          } catch {}
          const newItem = {
            id: 'ext-' + Math.random().toString(36).slice(2),
            Subject: raw.subject ?? raw.Subject ?? 'Untitled',
            Description: raw.description ?? raw.Description ?? '',
            Duration: durationMin
          };
          setExternalItems(prev => [...prev, newItem]);
          return;
        }
      };
      const eventSettings = {
        dataSource: schedulerEvents,
        fields: SCHEDULER_FIELDS
      };
      return <div className="control-section" onDragOver={e => {
        e.preventDefault();
        e.stopPropagation();
      }} onDrop={onExternalListDrop}>\r
          <div style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          gap: 16
        }}>\r
            <div>\r
              <h4 style={{
              margin: '0 0 8px'
            }}>External Events</h4>\r
              <div className="external-list" ref={externalWrapperRef} style={{
              border: '1px dashed #ccc',
              padding: 8,
              minHeight: 200
            }}>\r
                {externalItems.map(it => <div key={it.id} draggable onDragStart={e => onExternalDragStart(e, it)} style={{
                padding: 8,
                marginBottom: 8,
                background: '#fff',
                cursor: 'grab',
                border: '1px solid #ddd'
              }}>\r
                    <strong>{it.Subject}</strong>\r
                    <div style={{
                  fontSize: 12,
                  color: '#666'
                }}>{it.Description}</div>\r
                  </div>)}\r
              </div>\r
              <p style={{
              marginTop: 12,
              color: '#555'
            }}>\r
                Drag items to/from the Scheduler. Events dropped here are removed from the Scheduler.\r
              </p>\r
            </div>\r
\r
            <div>\r
              <h4 style={{
              margin: '0 0 8px'
            }}>Scheduler</h4>\r
              <Scheduler ref={schedulerRef} height={'550px'} width={'100%'} defaultSelectedDate={new Date(2017, 9, 30)} defaultView={'Week'} eventDrag={{
              enable: true,
              externalDragAndDrop: true,
              eventDragArea: '.control-section',
              interval: 15
            }} eventSettings={eventSettings} onDragStop={onSchedulerDragStop}>\r
                <DayView />\r
                <WeekView />\r
                <WorkWeekView />\r
                <MonthView />\r
              </Scheduler>\r
            </div>\r
          </div>\r
        </div>;
    };
    return <ExternalListToSchedulerComp />;
  }
}`,...(J=(z=V.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};const ae=["SchedulerToScheduler","ThreeSchedulersExternalDnd","ExternalListToScheduler"];export{V as ExternalListToScheduler,k as SchedulerToScheduler,b as ThreeSchedulersExternalDnd,ae as __namedExportsOrder,ne as default};
