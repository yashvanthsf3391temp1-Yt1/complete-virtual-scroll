import{j as a}from"./index-DlC1yEB1.js";import{r as b}from"./index-D5jfS-9e.js";import{S as P,D as F,W as _,M as G}from"./agenda-view-dL467uGC.js";import{h as Q,D as W}from"./recurrence-editor-byJWIIef.js";import{t as Y}from"./dataSource-BQKtoYBq.js";import"./index-lf5wH9A6.js";const le={title:"Scheduler/Timezone Support",component:P,parameters:{layout:"fullscreen"}},p={parameters:{controls:{disable:!0}},render:()=>{const[e,i]=b.useState("Atlantic/South_Georgia"),r={dataSource:Y},t=n=>{i(n==null?void 0:n.value)},s=Q.getTimezoneData();return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"control-section",children:[a.jsx("div",{style:{padding:"10px",marginBottom:"10px"},children:a.jsx(W,{dataSource:s,fields:{text:"text",value:"value"},value:e,style:{width:"300px"},placeholder:"Select timezone",labelMode:"Always",onChange:t})}),a.jsx("div",{className:"scheduler-control",children:a.jsxs(P,{height:"550px",width:"100%",timezone:e,defaultSelectedDate:new Date(2026,5,17),eventSettings:r,showTimeIndicator:!0,children:[a.jsx(F,{}),a.jsx(_,{}),a.jsx(G,{})]})})]})})}},M={};function X(e){return M[e]||(M[e]=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"})),M[e]}function j(e,i){var u;const t=((u=X(i).formatToParts(e).find(m=>m.type==="timeZoneName"))==null?void 0:u.value)||"";if(t==="GMT")return 0;const s=t.match(/GMT([+-])(\d+):(\d\d)/);if(!s)return 0;const[n,d,o,c]=s,T=parseInt(o,10)*60+parseInt(c,10);return d==="+"?T:-T}function D(e,i){var d,o;const t=new Intl.DateTimeFormat("en-US",{timeZone:i,month:"short",day:"2-digit"}).formatToParts(e),s=((d=t.find(c=>c.type==="month"))==null?void 0:d.value)||"",n=((o=t.find(c=>c.type==="day"))==null?void 0:o.value)||"";return`${s} ${n.padStart(2,"0")}`}function g(e,i){const r=(e+24)%24;if(r===0)return i?"00:00 AM":"12:00 AM";if(r===12)return"12:00 PM";const t=r>=12?"PM":"AM";return`${(r%12).toString().padStart(2,"0")}:00 ${t}`}function Z(e,i){const r=Date.UTC(i,0,1,0,0,0),t=Date.UTC(i,11,31,23,59,59),s=j(new Date(r),e);let n=null,d=null,o=null,c=null;const T=720*60*1e3;let u=s;for(let m=r;m<=t;m+=T){const f=j(new Date(m),e);if(f!==u){let h=m-T,l=m;for(;l-h>6e4;){const v=Math.floor((h+l)/2);j(new Date(v),e)===u?h=v:l=v}const x=new Date(l);f>u?(n=x,o={from:u,to:f}):(d=x,c={from:u,to:f}),u=f}}return{dstStart:n,dstEnd:d,startOffsets:o,endOffsets:c}}function ee(e,i){var H,N;const{dstStart:r,dstEnd:t,startOffsets:s,endOffsets:n}=Z(e,i);if(!r||!t||!s||!n)return"";const d=(s.to-s.from)/60,o=(n.to-n.from)/60,c=D(r,e),T=new Intl.DateTimeFormat("en-US",{timeZone:"UTC",hour:"2-digit",hour12:!1}).formatToParts(r),m=(parseInt(((H=T.find(S=>S.type==="hour"))==null?void 0:H.value)||"0",10)+s.to/60+24)%24,f=(m-d+24)%24,h=`${c} (${g(f,!0)} to ${g(m,!0)})`,l=D(t,e),x=new Intl.DateTimeFormat("en-US",{timeZone:"UTC",hour:"2-digit",hour12:!1}).formatToParts(t),w=(parseInt(((N=x.find(S=>S.type==="hour"))==null?void 0:N.value)||"0",10)+n.to/60+24)%24,U=w-o;let y=l,z=l,A=l;if(w===23&&U===24){const S=D(new Date(t.getTime()-864e5),e),J=D(new Date(t.getTime()+1440*60*1e3),e);l===S?(y=l,z=J,A=l):(y=l,z=l,A=S)}const R=U===24?"12:00 AM":g(U,!1),q=g(w,!1),$=`${y} (${z} ${R} to ${A} ${q})`;return t.getTime()<r.getTime()?` DST: ${h} → ${$}`:` DST: ${h} → ${$}`}const C={parameters:{controls:{disable:!0}},render:()=>{const[e,i]=b.useState("Asia/Kolkata"),r={dataSource:Y},t=2026,s=[{value:"Etc/GMT+12",text:"(UTC-12:00) International Date Line West"},{value:"America/Panama",text:"(UTC-05:00) Panama"},{value:"Etc/UTC",text:"(UTC+00:00) Coordinated Universal Time"},{value:"Asia/Kolkata",text:"(UTC+05:30) Kolkata"},{value:"America/Santiago",text:"(UTC-04:00 / DST: UTC-03:00) Santiago"},{value:"America/New_York",text:"(UTC-05:00 / DST: UTC-04:00) New York"},{value:"Africa/Cairo",text:"(UTC+02:00 / DST: UTC+03:00) Cairo"},{value:"Australia/Sydney",text:"(UTC+10:00 / DST: UTC+11:00) Sydney"},{value:"Pacific/Kiritimati",text:"(UTC+14:00) Kiritimati"}],n=b.useMemo(()=>s.map(o=>{let c=ee(o.value,t);return{...o,text:o.text+c}}),[t]),d=o=>{i(o==null?void 0:o.value)};return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"control-section",children:[a.jsx("div",{style:{padding:"10px",marginBottom:"10px"},children:a.jsx(W,{dataSource:n,fields:{text:"text",value:"value"},value:e,placeholder:"Select timezone",labelMode:"Always",onChange:d})}),a.jsx("div",{className:"scheduler-control",children:a.jsxs(P,{height:"550px",width:"100%",timezone:e,defaultSelectedDate:new Date(2026,5,17),eventSettings:r,timezoneDataSource:n,scrollToSettings:{enable:!0},children:[a.jsx(F,{}),a.jsx(_,{}),a.jsx(G,{})]})})]})})}};var k,B,E,I,O;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [timezone, setTimezone] = useState('Atlantic/South_Georgia');
    const eventSettings = {
      dataSource: timeZoneData
    } as EventSettings;
    const handleChange = (args?: ChangeEvent) => {
      setTimezone(args?.value as string);
    };
    const data = Timezone.getTimezoneData();
    return <>\r
        <div className="control-section">\r
          <div style={{
          padding: '10px',
          marginBottom: '10px'
        }}>\r
\r
            <DropDownList dataSource={data} fields={{
            text: 'text',
            value: 'value'
          }} value={timezone} style={{
            width: '300px'
          }} placeholder="Select timezone" labelMode="Always" onChange={handleChange} />\r
          </div>\r
          <div className="scheduler-control">\r
            <Scheduler height={'550px'} width={'100%'} timezone={timezone} defaultSelectedDate={new Date(2026, 5, 17)} eventSettings={eventSettings} showTimeIndicator={true}>\r
              <DayView />\r
              <WeekView />\r
              <MonthView />\r
            </Scheduler>\r
          </div>\r
        </div>\r
      </>;
  }
}`,...(E=(B=p.parameters)==null?void 0:B.docs)==null?void 0:E.source},description:{story:`Display scheduler in UTC timezone.\r
All events show their exact UTC times.\r
Includes timezone selector dropdown to switch between timezones.`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.description}}};var K,L,V;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [timezone, setTimezone] = useState('Asia/Kolkata');
    const eventSettings = {
      dataSource: timeZoneData
    } as EventSettings;
    const year = 2026;
    const baseTimezones = [{
      value: 'Etc/GMT+12',
      text: '(UTC-12:00) International Date Line West'
    }, {
      value: 'America/Panama',
      text: '(UTC-05:00) Panama'
    }, {
      value: 'Etc/UTC',
      text: '(UTC+00:00) Coordinated Universal Time'
    }, {
      value: 'Asia/Kolkata',
      text: '(UTC+05:30) Kolkata'
    }, {
      value: 'America/Santiago',
      text: '(UTC-04:00 / DST: UTC-03:00) Santiago'
    }, {
      value: 'America/New_York',
      text: '(UTC-05:00 / DST: UTC-04:00) New York'
    }, {
      value: 'Africa/Cairo',
      text: '(UTC+02:00 / DST: UTC+03:00) Cairo'
    }, {
      value: 'Australia/Sydney',
      text: '(UTC+10:00 / DST: UTC+11:00) Sydney'
    }, {
      value: 'Pacific/Kiritimati',
      text: '(UTC+14:00) Kiritimati'
    }];
    const customDataSource = useMemo(() => {
      return baseTimezones.map(tz => {
        let dstText = getDSTText(tz.value, year);
        return {
          ...tz,
          text: tz.text + dstText
        };
      });
    }, [year]);
    const handleChange = (args?: ChangeEvent) => {
      setTimezone(args?.value as string);
    };
    return <>\r
        <div className="control-section">\r
          <div style={{
          padding: '10px',
          marginBottom: '10px'
        }}>\r
            <DropDownList dataSource={customDataSource} fields={{
            text: 'text',
            value: 'value'
          }} value={timezone} placeholder="Select timezone" labelMode="Always" onChange={handleChange} />\r
          </div>\r
          <div className="scheduler-control">\r
            <Scheduler height={'550px'} width={'100%'} timezone={timezone} defaultSelectedDate={new Date(2026, 5, 17)} eventSettings={eventSettings} timezoneDataSource={customDataSource} scrollToSettings={{
            enable: true
          }}>\r
              <DayView />\r
              <WeekView />\r
              <MonthView />\r
            </Scheduler>\r
          </div>\r
        </div>\r
      </>;
  }
}`,...(V=(L=C.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};const ce=["BasicUTC","CustomTimezone"];export{p as BasicUTC,C as CustomTimezone,ce as __namedExportsOrder,le as default};
