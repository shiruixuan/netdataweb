!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="335ba962-d42d-4e69-a700-278204c71375",e._sentryDebugIdIdentifier="sentry-dbid-335ba962-d42d-4e69-a700-278204c71375")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"c87aa722cb3cb6eb3ac10b8f2032443089be80ba"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[8714],{48714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var n=a(96540),l=a(65336),r=a(83084),o=a(74002),s=a(28738),d=a(99739),i=a(67990),c=a(69765),p=a(94177);const u=(0,n.memo)((e=>{let{flavour:t}=e;const a=(0,c.ID)();return n.createElement(l.Flex,{column:!0,overflow:{vertical:"auto"},padding:[0,3,30]},n.createElement(p.A,{testIdPrefix:"node-ids",baseKey:a,extraKey:t,groupProps:{defaultIsOpen:!0}}))}));var m=a(63314),g=a(47767),b=a(71835),f=a(3914),E=a(31629),y=(a(41393),a(81454),a(8711)),v=a(11396);const h=(0,y.default)(l.Box).withConfig({displayName:"templates__Grid",componentId:"sc-1j76vfn-0"})(["display:grid;grid-template-columns:1fr 1fr;gap:8px;"]),I=()=>n.createElement(h,null,[1,2,3,4].map((e=>n.createElement(l.Flex,{key:e,column:!0,round:!0,border:!0,gap:2,padding:[2,4]},n.createElement(l.H3,{as:l.Box,background:"border"}))))),k=e=>{let{onSelect:t}=e;const a=(0,f.vt)(),r=(0,c.ID)(),o=(0,v.bg)(a,r);return n.createElement(h,null,o.map((e=>n.createElement(l.Flex,{key:e.id,column:!0,round:!0,border:!0,onClick:()=>t(e),gap:2,padding:[4,6],cursor:"pointer"},n.createElement(l.H3,null,e.name),n.createElement(l.Text,{color:"textLite"},e.description)))))};a(17333),a(98992),a(54520);const w=(0,a(92155).A)(l.Button),x=e=>{let{onSubmit:t,onClose:a,isLoading:r,template:o,variable:s,selectedValues:d,isLast:i}=e;const[p,u]=(0,n.useState)(null),m=(0,f.vt)(),g=(0,c.ID)(),b=(0,v.qz)(m,g,o.id,s.id,d);return n.createElement(l.Modal,{onClickOutside:a,onEsc:a},n.createElement(l.ModalContent,{background:"dropdown"},n.createElement(l.ModalHeader,null,s.name,n.createElement(l.ModalCloseButton,{testId:"close-button",onClose:a})),n.createElement(l.ModalBody,null,n.createElement(l.Flex,{column:!0,width:80,gap:3},n.createElement(l.Text,{color:"textLite"},s.description),"list"===s.type?b.map((e=>n.createElement(l.Checkbox,{key:e,checked:Array.isArray(p)&&p.includes(e),onChange:()=>u((t=>t?t.includes(e)?t.filter((t=>t!==e)):[...t,e]:[e])),label:e,justifyContent:"start"}))):b.map((e=>n.createElement(l.RadioButton,{key:e,label:`${e}`,checked:p===e,onChange:()=>u(e),value:e}))))),n.createElement(l.ModalFooter,null,n.createElement(w,{disabled:Array.isArray(p)?!p.length:null===p,label:i?"Generate report":"Next",loadingLabel:"Generating...",isLoading:r,onClick:()=>t(s.id,p),"data-testid":"btn-create",payload:{description:"Modal - Create Settings"}}))))};var A=a(84976),_=a(4659);const C=(0,y.default)(l.Box).withConfig({displayName:"reports__Grid",componentId:"sc-197g0l8-0"})(["display:grid;grid-template-columns:1fr 2fr 80px;gap:4px;"]),S=()=>{const e=(0,f.vt)(),t=(0,c.ID)(),a=(0,v.rY)(e,t);return Array.isArray(a)&&a.length?n.createElement(l.Flex,{gap:3,column:!0,padding:[3]},n.createElement(l.H3,null,"Previously Generated Reports"),n.createElement(C,{as:"ul"},a.map(((e,t)=>n.createElement(n.Fragment,{key:t},n.createElement(l.Text,null,new Date(e.date).toLocaleString()),n.createElement(l.Text,null,e.template_name),n.createElement(_.A,{to:e.report_id,as:A.N_},n.createElement(l.Icon,{title:"See Report",name:"goToNode",width:"16px",height:"16px"}))))))):null},$=()=>{const e=(0,f.vt)(),t=(0,c.ID)(),[a,r]=(0,n.useState)(null),[o,d]=(0,n.useState)(null),[i,p]=(0,n.useState)({}),[u,m]=(0,n.useState)(!1),[y,v]=(0,n.useState)(!1),h=(0,g.Zp)(),[,w]=(0,b.A)();return(0,n.useEffect)((()=>{if(!y)return;(async()=>{await(async()=>{try{const n=await E.A.post(`/api/v1/spaces/${e}/rooms/${t}/insights/reports`,{template_id:a.id,model_name:"claude-3-5-sonnet-20240620",provider:"anthropic",space_id:e,room_id:t,variables:i});h(n.report_id)}catch(n){console.log("error generating report content",n),w(n)}})(),v(!1)})()}),[y]),n.createElement(l.Flex,{column:!0,gap:3},y&&n.createElement(l.Layer,{backdrop:!0,full:!0,backdropProps:{backdropBlur:"3px"},alignItems:"center",justifyContent:"center"},n.createElement(s.A,{width:120,height:100,padding:[6],title:"Generating your report, it will be a minute or less..."})),n.createElement(n.Suspense,{fallback:n.createElement(I,null)},n.createElement(k,{onSelect:e=>{r(e),e.variables.length&&(d(e.variables[0]),m(!0))}})),n.createElement(n.Suspense,{fallback:""},n.createElement(S,null)),u?n.createElement(n.Suspense,{fallback:""},n.createElement(x,{key:o?.id,template:a,variable:o,selectedValues:i,isLoading:y,isLast:!1,onSubmit:async(e,t)=>{p((a=>({...a,[e]:t})));const n=a.variables.findIndex((t=>t.id===e));if(n<a.variables.length-1){const e=a.variables[n+1];d(e)}else v(!0)},onClose:()=>m(!1)})):null)},D=(o.kO,()=>{const e=(0,i.CK)(),t=(0,i.nj)();return t?t&&!e.length?n.createElement(m.Ay,{feature:"Inisghts",mode:"NoNodesView"},n.createElement(d.A,null)):n.createElement(m.Ay,{feature:"Inisghts"},n.createElement(r.A,{gap:4,padding:[4],overflow:"auto"},n.createElement(l.Flex,{gap:4},n.createElement($,null)))):n.createElement(s.A,{title:"Loading room insights..."})})},11396:(e,t,a)=>{a.d(t,{bg:()=>o,ef:()=>c,qz:()=>u,rY:()=>d});var n=a(47444),l=a(31629);const r=(0,n.K0)({key:"insightsTemplates",get:e=>{let{spaceId:t,roomId:a}=e;return()=>l.A.get(`/api/v1/spaces/${t}/rooms/${a}/insights/templates`,{}).then((e=>{let{data:t}=e;return t}))}}),o=(e,t)=>(0,n.vc)(r({spaceId:e,roomId:t})),s=(0,n.K0)({key:"insightsReports",get:e=>{let{spaceId:t,roomId:a}=e;return()=>l.A.get(`/api/v1/spaces/${t}/rooms/${a}/insights/reports`).then((e=>{let{data:t}=e;return t.reports.sort(((e,t)=>new Date(t.date)-new Date(e.date)))}))}}),d=(e,t)=>(0,n.vc)(s({spaceId:e,roomId:t})),i=(0,n.K0)({key:"insightsReport",get:e=>{let{spaceId:t,roomId:a,id:n}=e;return()=>new Promise((e=>{setTimeout((()=>{e()}),1e3)})).then((()=>l.A.get(`/api/v1/spaces/${t}/rooms/${a}/insights/reports/${n}`))).then((e=>{let{data:t}=e;return t}))}}),c=(e,t,a)=>(0,n.vc)(i({spaceId:e,roomId:t,id:a})),p=(0,n.K0)({key:"insightsVariableValues",get:e=>{let{spaceId:t,roomId:a,templateId:n,variableId:r,variables:o}=e;return()=>l.A.post(`/api/v1/spaces/${t}/rooms/${a}/insights/templates/${n}/variables/${r}/values`,{variables:o},{}).then((e=>{let{data:t}=e;return t.values}))}}),u=(e,t,a,l,r)=>(0,n.vc)(p({spaceId:e,roomId:t,templateId:a,variableId:l,variables:r}))}}]);