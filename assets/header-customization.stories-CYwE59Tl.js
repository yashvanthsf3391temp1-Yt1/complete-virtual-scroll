import{j as e}from"./index-DlC1yEB1.js";import{S as l,D as h,W as u,a as m,M as p,A as x,e as S,O as j,f as F,i as Z}from"./agenda-view-dL467uGC.js";import"./index-D5jfS-9e.js";import{c as A,V as a,T as E,B as _,S as $}from"./recurrence-editor-byJWIIef.js";import{s as g}from"./dataSource-BQKtoYBq.js";/* empty css               */import{a as q,A as G}from"./arrow-tail-fill-C1EQLf5X.js";import"./index-lf5wH9A6.js";const J=e.jsx("path",{d:"M12 2.16638L23.1448 12H20V22H13V15H11V22H4V12H0.855225L12 2.16638ZM6 10.1277V20H9V13H15V20H18V10.1277L12 4.83363L6 10.1277Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),K=A(J),Q=e.jsx("path",{d:"M14.0648 14.1412C12.069 16.1523 8.83305 16.1523 6.8372 14.1412C4.84135 12.1302 4.84135 8.86973 6.8372 6.85871C8.83305 4.8477 12.069 4.8477 14.0648 6.85871C16.0607 8.86973 16.0607 12.1302 14.0648 14.1412ZM14.5554 16.3427C11.7822 18.3255 7.91356 18.0649 5.42835 15.5608C2.65442 12.7658 2.65442 8.23417 5.42835 5.43916C8.20229 2.64414 12.6997 2.64414 15.4737 5.43916C18.2476 8.23417 18.2476 12.7658 15.4737 15.5608C15.425 15.6098 15.3759 15.6579 15.3262 15.7052L15.6089 15.9901L16.2756 15.9547L21.3284 21.0459L19.9249 22.4601L14.8721 17.369L14.9072 16.6972L14.5554 16.3427Z",fillRule:"evenodd",clipRule:"evenodd",fill:"currentcolor"}),U=A(Q),X=({})=>{const r={dataSource:g},o=({startDate:c,endDate:k})=>e.jsxs("span",{children:[c.toDateString()," - ",k.toDateString()]}),t=c=>e.jsx(S,{...c,overflowMode:j.Scrollable,todayProps:{icon:e.jsx(K,{}),disabled:!0},previousProps:{icon:e.jsx(G,{}),variant:a.Outlined},nextProps:{icon:e.jsx(q,{}),variant:a.Outlined},dateRangeProps:{variant:a.Outlined},dateRangeTemplate:o,viewSwitcherProps:{variant:a.Filled},children:c.children});return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(l,{height:"550px",width:"100%",defaultSelectedDate:new Date(2021,0,10),eventSettings:r,header:t,children:[e.jsx(h,{}),e.jsx(u,{}),e.jsx(m,{}),e.jsx(p,{}),e.jsx(x,{})]})})})},Y=({})=>{const r={dataSource:g},o=t=>e.jsxs(S,{...t,overflowMode:j.Scrollable,children:[t.previous,t.dateRange,t.next,t.viewSwitcher,t.today]});return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(l,{height:"550px",width:"100%",defaultSelectedDate:new Date(2021,0,10),eventSettings:r,header:o,children:[e.jsx(h,{}),e.jsx(u,{}),e.jsx(m,{}),e.jsx(p,{}),e.jsx(x,{})]})})})},ee=({})=>{const r={dataSource:g},o=t=>e.jsxs(S,{...t,overflowMode:j.Scrollable,children:[t.today,t.previous,t.dateRange,t.next,e.jsx(F,{children:e.jsx(E,{placeholder:"Type to search",variant:a.Outlined,suffix:e.jsx(_,{variant:a.Standard,icon:e.jsx(U,{}),"aria-label":"search-button",title:"Search",size:$.Small})})}),e.jsx(Z,{}),t.viewSwitcher]});return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(l,{height:"550px",width:"100%",defaultSelectedDate:new Date(2021,0,10),eventSettings:r,header:o,children:[e.jsx(h,{}),e.jsx(u,{}),e.jsx(m,{}),e.jsx(p,{}),e.jsx(x,{})]})})})},te=({})=>{const r={dataSource:g},o=t=>e.jsx(S,{...t,overflowMode:j.Scrollable,todayProps:null,viewSwitcherProps:null,children:t.children});return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(l,{height:"550px",width:"100%",defaultSelectedDate:new Date(2021,0,10),eventSettings:r,header:o,children:[e.jsx(h,{}),e.jsx(u,{}),e.jsx(m,{}),e.jsx(p,{}),e.jsx(x,{})]})})})},le={title:"Scheduler/HeaderCustomization",parameters:{layout:"padded",docs:{description:{component:"Meta configuration for the Storybook stories"}}},tags:["autodocs"]},s={render:()=>e.jsx(X,{}),args:{},parameters:{docs:{description:{story:"This story demonstrates the default header configuration using props.children to render the default header structure and customize the today button icon."}}}},n={render:()=>e.jsx(Y,{}),args:{},parameters:{docs:{description:{story:"This story demonstrates how to customize the header by manually arranging individual button components such as previous, dateRange, next view, and today buttons."}}}},d={render:()=>e.jsx(ee,{}),args:{},parameters:{docs:{description:{story:"This story demonstrates how to integrate a custom search TextBox component with an icon button into the scheduler header for enhanced user interaction."}}}},i={render:()=>e.jsx(te,{}),args:{},parameters:{docs:{description:{story:"This story demonstrates a customized header with a hide the default toolbar buttons."}}}};var f,w,v,y,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <DefaultHeaderSample />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the default header configuration using props.children to render the default header structure and customize the today button icon.'
      }
    }
  }
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source},description:{story:`Story 1: Default Header with Children\r
Displays the standard header using props.children`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var H,T,D,C,I;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <ReorderToolbarItemsSample />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates how to customize the header by manually arranging individual button components such as previous, dateRange, next view, and today buttons.'
      }
    }
  }
}`,...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.source},description:{story:`Story 2: Individual Button Components\r
Shows how to manually arrange individual toolbar button components in the header`,...(I=(C=n.parameters)==null?void 0:C.docs)==null?void 0:I.description}}};var R,V,M,z,L;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <HeaderWithSearchSample />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates how to integrate a custom search TextBox component with an icon button into the scheduler header for enhanced user interaction.'
      }
    }
  }
}`,...(M=(V=d.parameters)==null?void 0:V.docs)==null?void 0:M.source},description:{story:`Story 3: Header with Search Box Integration\r
Features a custom search textbox integrated into the header toolbar`,...(L=(z=d.parameters)==null?void 0:z.docs)==null?void 0:L.description}}};var B,N,W,O,P;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <HideDefaultToolbarItem />,
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates a customized header with a hide the default toolbar buttons.'
      }
    }
  }
}`,...(W=(N=i.parameters)==null?void 0:N.docs)==null?void 0:W.source},description:{story:`Story 4: Header with Hide the particular button\r
Hide the default toolbar buttons`,...(P=(O=i.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};const he=["CutomizeDefaultButton","ReorderToolbarItemsSamples","HeaderWithCustomToolbar","HideDefaultToolbarItems"];export{s as CutomizeDefaultButton,d as HeaderWithCustomToolbar,i as HideDefaultToolbarItems,n as ReorderToolbarItemsSamples,he as __namedExportsOrder,le as default};
