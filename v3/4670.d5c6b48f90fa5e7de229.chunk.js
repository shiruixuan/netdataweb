!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e3cde89d-3be9-4c3a-afbe-bae0b0fafe44",e._sentryDebugIdIdentifier="sentry-dbid-e3cde89d-3be9-4c3a-afbe-bae0b0fafe44")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"c87aa722cb3cb6eb3ac10b8f2032443089be80ba"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[4670],{36196:(e,t,n)=>{n.d(t,{A:()=>f});var l=n(58168),a=n(96540),r=n(22332),o=n(10534),i=n(89380),c=n(25369),s=n(39360),u=n(95662),d=n(99891),m=n(49096),p=n(74487),g=n(67504),h=n(64131);const E=(0,a.forwardRef)(((e,t)=>{let{width:n,height:r,...o}=e;return a.createElement(i.ChartWrapper,{width:n,height:r},a.createElement(h.N1,(0,l.A)({hasHeader:!1,hasFilters:!1,hasFooter:!1,width:n,height:r},o,{ref:t})))})),x=(0,a.forwardRef)(((e,t)=>a.createElement(g.Ay,(0,l.A)({hasFilters:!1},e,{ref:t})))),v=(0,o.default)(E,{tile:!0}),b={dygraph:h.Ay,easypiechart:d.Ay,gauge:s.Ay,number:m.Ay,groupBoxes:c.Ay,d3pie:u.Ay,bars:p.Ay,table:x},y=e=>{const t=(0,r.useChart)(),n=(0,r.useAttributeValue)("sparkline"),o=(0,r.useAttributeValue)("chartLibrary"),i=(0,a.useMemo)((()=>t?n?v:b[o]:null),[t,o,n]);return i?a.createElement(i,(0,l.A)({},e,{chart:t})):null},f=(0,r.withChartProvider)((0,a.memo)(y))},40267:(e,t,n)=>{n.d(t,{A:()=>r});var l=n(96540),a=n(65336);const r=e=>{let{flavour:t,icon:n,children:r}=e;return l.createElement(a.Pill,{icon:n,textProps:{textTransform:"capitalize"},flavour:t},r)}},11164:(e,t,n)=>{n.d(t,{A:()=>v});var l=n(96540),a=n(36196),r=n(63950),o=n.n(r),i=n(65336),c=n(57605),s=n(28738),u=n(3914),d=n(13624),m=n(69765),p=n(80925),g=n(47731),h=n(52768);const E=e=>t=>`alert-modal::${e.getAttribute("id")}::${t}`,x={width:"108px",height:"77px"},v=e=>{let{instance:t,context:n,isFormattedValueLoaded:r,nodeId:v,status:b,lastStatusChange:y,formattedLastStatusChangeValue:f,lastUpdated:C,spaceId:A,roomId:w,setChartSelected:I=o()}=e;const T=(0,u.vt)();A=A||T;const F=(0,m.ID)();w=w||F;const S=(0,g.J)(),k=(0,p.eg)(),D=(0,c.A)();(0,l.useEffect)((()=>(D(),D)),[]);const O=(0,d.K)({spaceId:A,roomId:w}),B=(0,l.useMemo)((()=>{if(!r)return;const e=k.makeChart({attributes:{nodeId:v,contextScope:[n],selectedInstances:t&&v?[`${t}@${v}`]:[],id:t,roomId:w,enabledResetRange:!1,overlays:{proceeded:{type:"proceeded"},alarm:{type:"alarm",status:b,value:f,when:y}},host:O,nodesScope:[v],toolboxElements:[],sparkline:S,hasToolbox:!S},makeTrack:E});return k.getRoot().appendChild(e),e}),[t,r]);return(0,h.Vt)({lastUpdated:C,lastStatusChange:y},r),(0,l.useEffect)((()=>(I((e=>({...e,...B}))),()=>{B&&B.destroy(),I(null)})),[B]),l.createElement(i.Flex,{flex:!1,width:"100%",height:75},r&&B?l.createElement(a.A,{"data-chartid":t,chart:B,hasHeader:!S,hasFooter:!S}):l.createElement(s.A,{iconProps:x,title:"Loading chart..."}))}},88497:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Fe});var l=n(96540),a=n(65336),r=n(21875),o=n(87659),i=n(69765),c=n(36196),s=n(80925),u=n(35243);const d=()=>{const e=(0,l.useRef)(),t=(0,r.vX)().getAttribute("id"),n=(0,i.ID)(),o=(0,u.N)(),d=(0,s.eg)(),m=(e=>{const[t,n]=(0,l.useState)(!1),a=(0,l.useMemo)((()=>new IntersectionObserver((e=>{let[t]=e;return n(t.isIntersecting)}))),[e]);return(0,l.useEffect)((()=>(a.observe(e.current),()=>a.disconnect())),[]),t})(e),p=(0,l.useMemo)((()=>{const e=d.makeChart({attributes:{contextScope:[t],height:80,id:t,roomId:n,toolboxElements:[]}});return o.appendChild(e),e}),[o,n,t]);return l.createElement(a.Flex,{ref:e,width:"100%",height:"350px"},m?l.createElement(c.A,{margin:[0,0,2],chart:p,"data-chartid":t,"data-track":p.track("container")}):null)},m=(0,l.memo)(d);var p=n(64118),g=n(11164),h=n(52768),E=n(3914);const x=e=>{let{alertId:t}=e;const n=(0,E.vt)(),o=(0,i.ID)(),[,c]=(0,r.v7)(),{fullyLoaded:s=!1,units:u,lastStatusChangeValue:d,lastStatusChange:m,context:x,instance:v,nodeId:b,status:y,lastUpdated:f,value:C}=(0,p.JL)(t);(0,p.yk)(t,{spaceId:n,roomId:o});const A=(0,h.J4)(C,u),w=(0,h.J4)(d,u);return s?l.createElement(g.A,{id:t,context:x,instance:v,formattedLastValue:A,formattedLastStatusChangeValue:w,lastStatusChange:m,lastUpdated:f,isFormattedValueLoaded:s,nodeId:b,status:y,testid:"alertView",spaceId:n,roomId:o,setChartSelected:c}):l.createElement(a.Flex,{height:"200px"},"Loading chart...")},v=e=>{let{title:t="Chart preview"}=e;const[n,i]=(0,o.A)(!0),c=(0,r.vX)();return l.createElement(a.Flex,{column:!0,gap:2,padding:[2,0]},l.createElement(a.Flex,{gap:1,alignItems:"center",cursor:"pointer",onClick:i},l.createElement(a.Box,null,t),l.createElement(a.Icon,{name:"chevron_down",size:"small",color:"textLite",rotate:n?2:0})),l.createElement(a.Flex,{height:n?"auto":"0px",overflow:"hidden"},c?.alertId?l.createElement(x,{alertId:c.alertId}):l.createElement(m,null)))};var b=n(58168);n(41393),n(81454);const y=e=>{let{title:t="",showAdvanced:n,children:r,...i}=e;const[c,s]=(0,o.A)(!1);return l.createElement(a.Flex,(0,b.A)({column:!0,gap:2,padding:[2,0]},i),l.createElement(a.Flex,{alignItems:"center",justifyContent:"between"},l.createElement(a.Flex,{alignItems:"center",gap:2},l.createElement(a.Icon,{name:"dot",width:"8px",color:"primary"}),l.createElement(a.Text,{strong:!0},t)),n&&l.createElement(a.Checkbox,{label:"Show advanced",checked:c,onChange:s})),l.createElement(a.Flex,{padding:[0,0,0,4]},l.Children.map(r,(e=>l.isValidElement(e)?l.cloneElement(e,{advanced:c}):e))))};var f=n(31248),C=n(83863);const A=()=>{const{detectionMethod:e,setDetectionMethod:t}=(0,r.aR)();return l.createElement(a.Flex,{column:!0,gap:2},l.createElement(a.Flex,null,l.createElement(a.ButtonGroup,{items:C.Hv,checked:e,onChange:t})),l.createElement(a.TextSmall,{color:"textLite"},"An alert is triggered whenever a metric crosses a threshold"))};n(17333),n(98992),n(54520);var w=n(63950),I=n.n(w),T=n(16093);const F=e=>l.createElement(T.c.Option,e,l.createElement(a.Flex,{gap:2},l.createElement(a.Checkbox,{checked:e.isSelected}),l.createElement(a.TextSmall,null,e.label))),S=e=>l.createElement(a.Box,{position:"relative"},l.createElement(a.Select,(0,b.A)({components:{Option:F}},e))),k=function(){let{label:e,value:t={},options:n=[],updateState:r=I(),placeholder:o,defaultOption:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{items:c,expression:s}=t,[u,d]=(0,l.useState)(t);(0,l.useEffect)((()=>{r(u)}),[u]);const m=(0,l.useCallback)((e=>{d((t=>({...t,items:e.filter((e=>{let{value:t}=e;return!!t}))})))}),[u,d]),p=(0,l.useCallback)((e=>{let{target:{value:t}}=e;d((e=>({...e,expression:t})))}),[u,d]);return l.createElement(a.Flex,{column:!0,gap:2},l.createElement(a.Flex,{column:!0,gap:1},e&&l.createElement(a.TextSmall,{strong:!0},e),l.createElement(S,{options:n,value:c?.length?c.filter((e=>{let{value:t}=e;return t})):i,onChange:m,styles:{size:"tiny"},isDisabled:!1,isMulti:!0,closeMenuOnSelect:!1})),l.createElement(a.TextInput,{value:s||"",onChange:p,placeholder:o||"Type an expression",size:"tiny"}))},D=()=>{const[e]=(0,r.v7)(),t=e.getAttribute&&e.getAttribute("nodes")||[],n=Object.entries(t).map((e=>{let[t,{nm:n}]=e;return{label:n,value:t}})),a={label:`${n.length} ${n.length>1?"Nodes":"Node"}`,value:""},o=[a,...n],{metrics:{hosts:i},setHosts:c}=(0,r.BO)();return l.createElement(k,{value:i,options:o,updateState:c,defaultOption:a})},O=()=>{const[e]=(0,r.v7)(),t=e.getAttribute&&e.getAttribute("instances")||[],n=Object.entries(t).map((e=>{let[t,{nm:n}]=e;return{label:n,value:t}})),a={label:`${n.length} ${n.length>1?"Instances":"Instance"}`,value:""},o=[a,...n],{metrics:{charts:i},setCharts:c}=(0,r.BO)();return l.createElement(k,{value:i,options:o,updateState:c,defaultOption:a})},B=()=>{const[e]=(0,r.v7)(),t=e.getAttribute&&e.getAttribute("labels")||[],n=Object.values(t).map((e=>{let{id:t,vl:n=[]}=e;return{label:t,options:n.map((e=>({label:e.id,value:`${t}:${e.id}`})))}})),a={label:`${n.length} ${n.length>1?"Labels":"Label"}`,value:""},o=[a,...n],{metrics:{chartLabels:i},setChartLabels:c}=(0,r.BO)();return l.createElement(k,{value:i,options:o,updateState:c,defaultOption:a})},L=()=>{const{metrics:{os:e},setOs:t}=(0,r.BO)(),n=(0,l.useMemo)((()=>e?.length?e.filter((e=>{let{value:t}=e;return t})):C.Lf),[e]);return l.createElement(S,{options:C.R8,value:n,onChange:t,styles:{size:"tiny"},isDisabled:!1,isMulti:!0,closeMenuOnSelect:!1})};var V=n(32089);const z=e=>{let{children:t,...n}=e;return l.createElement(a.Flex,(0,b.A)({width:{max:70}},n),t)},N=()=>l.createElement(a.Flex,{gap:2},l.createElement(z,null,l.createElement(D,null)),l.createElement(V.A,{vertical:!0}),l.createElement(z,null,l.createElement(O,null)),l.createElement(V.A,{vertical:!0}),l.createElement(z,null,l.createElement(B,null)),l.createElement(V.A,{vertical:!0}),l.createElement(z,null,l.createElement(L,null))),U=e=>{let{advanced:t}=e;const[n]=(0,r.v7)(),o=n.getAttribute?n.getAttribute("id"):"",{setOn:i}=(0,r.BO)();return(0,l.useEffect)((()=>{i(o)}),[]),l.createElement(a.Flex,{column:!0,gap:2},l.createElement(a.Flex,{alignItems:"center",gap:2},l.createElement(a.Box,{width:"200px"},l.createElement(a.TextInput,{value:o,onChange:e=>i(e.target.value),disabled:!0,size:"tiny"})),l.createElement(a.Text,null,t?"from":"on"),!t&&l.createElement(a.TextInput,{value:"each system everywhere",onChange:()=>{},disabled:!0,size:"tiny"})),t&&l.createElement(N,null))},M=()=>{const{metrics:{lookup:e},setLookup:t}=(0,r.BO)(),{aggregation:n}=e||{};return l.createElement(a.Select,{options:C.Bo,value:n,onChange:e=>t({aggregation:e}),styles:{minWidth:"80px",size:"tiny"},isDisabled:!1})},R=()=>{const{metrics:{lookup:e},setLookup:t}=(0,r.BO)(),{denoter:n}=e||{};return l.createElement(a.Select,{options:C.Lm,value:n,onChange:e=>t({denoter:e}),styles:{minWidth:"80px",size:"tiny"},isDisabled:!1})},_=()=>{const[e]=(0,r.v7)(),t=(e.getAttribute&&e.getAttribute("dimensionIds")||[]).map((e=>({label:e,value:e}))),n={label:"All Dimensions",value:""},a=[n,...t],{metrics:{lookup:o},setLookup:i}=(0,r.BO)(),{dimensions:c}=o||{},s=(0,l.useMemo)((()=>c?.length?c.filter((e=>{let{value:t}=e;return t})):n),[c,n.label]);return l.createElement(S,{options:a,value:s,onChange:e=>i({dimensions:e}),styles:{size:"tiny"},isDisabled:!1,isMulti:!0,closeMenuOnSelect:!1})},$=()=>{const{metrics:{lookup:e},setLookup:t}=(0,r.BO)(),{timePeriod:n}=e||{};return l.createElement(a.Select,{options:C.ZE,value:n,onChange:e=>t({timePeriod:e}),styles:{minWidth:"80px",size:"tiny"},isDisabled:!1})},W=()=>{const{metrics:{lookup:e},setLookup:t}=(0,r.BO)(),{options:n}=e||{};return l.createElement(S,{options:C.Ws,value:n,placeholder:"Options",onChange:e=>t({options:e}),styles:{size:"tiny"},isDisabled:!1,isMulti:!0,closeMenuOnSelect:!1})},j=()=>l.createElement(a.Flex,{flexWrap:!0,alignItems:"center",gap:2},l.createElement(a.Text,null,"Evaluate the"),l.createElement(M,null),l.createElement(a.Text,null,"of"),l.createElement(R,null),l.createElement(a.Text,null,"of"),l.createElement(_,null),l.createElement(a.Text,null,"over the last"),l.createElement($,null),l.createElement(W,null)),P=()=>{const{metrics:{calc:e,units:t},setCalcActive:n,setCalcValue:o,setUnitsValue:i}=(0,r.BO)(),{active:c,value:s}=e||{};return l.createElement(a.Flex,{column:!0,gap:2},l.createElement(a.Toggle,{labelRight:"Add formula",colored:!0,checked:c,onChange:e=>n(e.target.checked)}),l.createElement(a.Flex,{gap:2},l.createElement(a.Flex,{column:!0,gap:1},l.createElement(a.Text,null,"Formula"),l.createElement(a.Box,{width:"500px"},l.createElement(a.TextInput,{value:s,placeholder:"$this",onChange:e=>o(e.target.value),size:"tiny",disabled:!c}))),l.createElement(a.Flex,{column:!0,gap:1},l.createElement(a.Text,null,"Units"),l.createElement(a.Box,{width:"80px"},l.createElement(a.TextInput,{value:t,onChange:e=>i(e.target.value),size:"tiny",disabled:!c})))))},J=e=>{let{advanced:t}=e;return l.createElement(a.Flex,{column:!0,gap:3},l.createElement(U,{advanced:t}),l.createElement(j,null),t&&l.createElement(P,null))},G=e=>{let{value:t,onChange:n}=e;return l.createElement(a.Select,{options:C.j8,value:t,onChange:n,styles:{size:"tiny"}})};var H=n(40267),K=n(29217);const Z={denoter:C.jV.thresholds.below,value:75},X=e=>{let{recovery:t,onRecoveryThresholdAdd:n,onValueChange:r}=e;const{value:o}=t||{};return t?l.createElement(a.Flex,{alignItems:"center",gap:2},l.createElement(a.Pill,{flavour:"success",hollow:!0,icon:"reload"},"Recovery Threshold"),l.createElement(a.TextInput,{onChange:e=>r(e.target.value),value:o,type:"number",min:0,size:"tiny",metaShrinked:!0,containerStyles:{width:"80px"}}),l.createElement(K.A,{content:"Remove recovery threshold"},l.createElement(a.Button,{icon:"trashcan",flavour:"borderless",onClick:()=>n(null),iconColor:"textLite",iconSize:"small"}))):l.createElement(a.Button,{label:"Recovery Threshold",icon:"plus",flavour:"borderless",onClick:()=>n(Z)})};var Y=n(80158);const q=()=>()=>{},Q=(ee=e=>{let{isEdit:t,alertingConditions:n,setThreshold:r,setRecoveryThreshold:o,type:i,advanced:c,isDisabled:s}=e;const{denoter:u,value:d,recovery:m}=n[i]||{},p=r(i,"denoter"),g=r(i,"value"),h=r(i,"recovery"),E=o(i,"denoter"),x=o(i,"value");return l.createElement(a.Flex,{alignItems:"center",gap:2,height:"34px"},l.createElement(a.Box,null,l.createElement(H.A,{width:"80px",flavour:i,textSize:"small"},(0,Y.Zr)(i,!0))),t?l.createElement(a.TextInput,{onChange:e=>g(e.target.value),value:d,size:"tiny",containerStyles:{width:"360px"},metaShrinked:!0}):l.createElement(l.Fragment,null,c&&!s?l.createElement(G,{value:u,onChange:p,isDisabled:s}):l.createElement(a.TextInput,{value:u?.label,size:"tiny",containerStyles:{width:"160px"},disabled:!0,metaShrinked:!0}),l.createElement(a.TextInput,{onChange:e=>g(e.target.value),value:d,type:"number",min:0,size:"tiny",metaShrinked:!0,containerStyles:{width:"80px"},disabled:s}),c&&!s&&l.createElement(X,{recovery:m,onRecoveryThresholdAdd:h,onDenoterChange:E,onValueChange:x,disabled:s})))},e=>{const t=(0,r.op)(),{alertingConditions:n,setThreshold:o=q}=t||{},i=o(e.type,"isFormula"),c=o(e.type,"value"),s=!n?.[e.type]?.isFormula,u=!s,d=(0,l.useCallback)((e=>{let{target:{value:t}}=e;return c(t)}),[c]);return!t.isEdit&&e.advanced?l.createElement(a.Flex,{column:!0,gap:2},l.createElement(a.Flex,{alignItems:"center",gap:2},l.createElement(a.RadioButton,{checked:s,onChange:()=>i(!1)}),l.createElement(ee,(0,b.A)({},t,e,{isDisabled:!s}))),l.createElement(a.Flex,{alignItems:"center",gap:2},l.createElement(a.RadioButton,{checked:u,onChange:()=>i(!0)}),l.createElement(a.Flex,{column:!0,gap:1},l.createElement(a.Text,null,"Formula"),l.createElement(a.Box,{width:"500px"},l.createElement(a.TextInput,{value:e.value,placeholder:"$this",onChange:d,size:"tiny",disabled:!u}))))):l.createElement(ee,(0,b.A)({},t,e))});var ee;const te=e=>{let{advanced:t}=e;return l.createElement(a.Flex,{column:!0,gap:2},l.createElement(Q,{type:"critical",advanced:t}),l.createElement(V.A,null),l.createElement(Q,{type:"warning",advanced:t}))},ne=e=>{let{label:t="",value:n,onValueChange:r=I(),unit:o,onUnitChange:i=I(),unitsOptions:c=C.WB,isDisabled:s}=e;return l.createElement(a.Flex,{column:!0,gap:2},l.createElement(a.Text,{color:s?"textLite":"text"},t),l.createElement(a.Flex,{gap:2},l.createElement(a.TextInput,{value:n,onChange:e=>r(e.target.value),type:"number",min:0,size:"tiny",containerStyles:{width:"60px"},disabled:s}),l.createElement(a.Select,{options:c,value:o,onChange:e=>i(e),styles:{size:"tiny"},isDisabled:s})))},le=e=>{let{advanced:t}=e;const{alertingConditions:{interval:{value:n,unit:a}},setIntervalValue:o,setIntervalUnit:i}=(0,r.op)();return l.createElement(ne,{label:"Check interval",value:n,onValueChange:o,unit:a,onUnitChange:i,isDisabled:!t})};var ae=n(8711),re=n(59303);const oe=(0,ae.default)(a.Box).withConfig({displayName:"delayNotification__Grid",componentId:"sc-4dhott-0"})(["display:grid;grid-template-columns:repeat(2,1fr);gap:8px 16px;"]),ie=()=>{const{alertingConditions:{delayNotification:e},setDelayNotificationActive:t,setDelayNotificationUpValue:n,setDelayNotificationUpUnit:o,setDelayNotificationDownValue:i,setDelayNotificationDownUnit:c,setDelayNotificationMaxDelayValue:s,setDelayNotificationMaxDelayUnit:u,setDelayNotificationMultiplier:d}=(0,r.op)(),{active:m,up:p,down:g,multiplier:h,max:E}=e,x=!m,v=(0,re.m8)(t),b=(0,re.L7)(d);return l.createElement(a.Flex,{column:!0,gap:2},l.createElement(a.Toggle,{labelRight:"Delay Notification",colored:!0,checked:m,onChange:v}),l.createElement(oe,null,l.createElement(ne,{label:"Initial Delay on Alert Severity Escalation",value:p?.value,onValueChange:n,unit:p?.unit,onUnitChange:o,isDisabled:x}),l.createElement(a.Flex,{column:!0,gap:2},l.createElement(a.Text,{color:x?"textLite":"text"},"Delay Multiplier on successive delays"),l.createElement(a.TextInput,{value:h,onChange:b,type:"number",min:0,step:.1,size:"tiny",containerStyles:{width:"60px"},disabled:x})),l.createElement(ne,{label:"Initial Delay on Alert Severity De-escalation",value:g?.value,onValueChange:i,unit:g?.unit,onUnitChange:c,isDisabled:x}),l.createElement(ne,{label:"Limit Maximum Delay",value:E?.value,onValueChange:s,unit:E?.unit,onUnitChange:u,isDisabled:x})))},ce=()=>{const{alertingConditions:{agentOptions:e},setAgentOptionsActive:t,setAgentOptionsRepeatNotification:n,setAgentOptionsWarningAlertsDurationValue:o,setAgentOptionsWarningAlertsDurationUnit:i,setAgentOptionsCriticalAlertsDurationValue:c,setAgentOptionsCriticalAlertsDurationUnit:s,setAgentOptionsSendToValue:u,setAgentOptionsSendToClearNotifications:d,setAgentOptionsExecScriptActive:m,setAgentOptionsExecScriptPath:p}=(0,r.op)(),{active:g,off:h,warningAlertsDuration:E,criticalAlertsDuration:x,sendTo:v,execScript:b}=e,y=!g,f=y||h,C=(0,re.m8)(t),A=(0,re.pU)(n,!0),w=(0,re.pU)(d,!0),I=(0,re.L7)(u),T=(0,re.pU)(m),F=(0,re.L7)(p);return l.createElement(a.Flex,{column:!0,gap:2},l.createElement(a.Toggle,{labelRight:"Agent Specific Options",colored:!0,checked:g,onChange:C}),l.createElement(a.Flex,{column:!0,gap:2,width:"100%"},l.createElement(a.Checkbox,{label:"Repeat Alert Notifications",checked:!h,onChange:A,disabled:y}),l.createElement(a.Flex,{gap:4},l.createElement(ne,{label:"Warning Alerts Duration isActive",value:E?.value,onValueChange:o,unit:E?.unit,onUnitChange:i,isDisabled:f}),l.createElement(ne,{label:"Critical Alerts Duration isActive",value:x?.value,onValueChange:c,unit:x?.unit,onUnitChange:s,isDisabled:f})),l.createElement(a.Flex,{column:!0,gap:1},l.createElement(a.Text,{color:y?"textLite":"text"},"Send to"),l.createElement(K.A,{content:"Insert space separated roles (already defined on the agent)",align:"top"},l.createElement(a.Flex,{alignItems:"center",gap:2},l.createElement(a.TextInput,{value:v?.value,placeholder:"Roles",onChange:I,disabled:y,size:"tiny"}),l.createElement(a.Checkbox,{label:"Don't send Clear notifications",checked:!v?.clearNotifications,onChange:w,disabled:y})))),l.createElement(a.Flex,{alignItems:"center",gap:4},l.createElement(a.Checkbox,{label:"Custom Exec Script",checked:b?.active,onChange:T,disabled:y}),l.createElement(a.Box,{width:"500px"},l.createElement(a.TextInput,{value:b?.path,placeholder:"/path/to/script",onChange:F,disabled:y,size:"tiny"})))))},se=e=>{let{advanced:t}=e;const{alertingConditions:{denoter:n},setMainDenoter:o}=(0,r.op)();return l.createElement(a.Flex,{column:!0,gap:4},l.createElement(a.Flex,{alignItems:"center",gap:2},l.createElement(a.Text,null,"Trigger when the evaluated value is"),l.createElement(G,{value:n,onChange:o}),l.createElement(a.Text,null,"the threshold")),l.createElement(te,{advanced:t}),l.createElement(le,{advanced:t}),t&&l.createElement(l.Fragment,null,l.createElement(ie,null),l.createElement(ce,null)))},ue=()=>{const{templateName:e,templateDescription:t,summary:n,setTemplateName:o,setTemplateDescription:i,setSummary:c}=(0,r.I8)();return l.createElement(a.Flex,{column:!0,gap:2,width:"100%"},l.createElement(a.Flex,{column:!0,gap:1,width:"100%"},l.createElement(a.Text,null,"Alert template Name"),l.createElement(a.TextInput,{value:e,onChange:e=>o(e.target.value),size:"tiny"})),l.createElement(a.Flex,{column:!0,gap:1,width:"100%"},l.createElement(a.Text,null,"Alert template Description"),l.createElement(a.TextInput,{value:t,onChange:e=>i(e.target.value),size:"tiny"}),l.createElement(a.TextSmall,{color:"textLite"},"Select an appropriate Template Description")),l.createElement(a.Flex,{column:!0,gap:1,width:"100%"},l.createElement(a.Text,null,"Alert summary"),l.createElement(a.TextInput,{value:n,onChange:e=>c(e.target.value),size:"tiny",placeholder:"Alert summary ${label:label_name} can be added"}),l.createElement(a.TextSmall,{color:"textLite"},"Add a custom title to receive Alert notifications")))},de=ae.default.div.withConfig({displayName:"styled__StyledTerminalCommand",componentId:"sc-jb3u29-0"})(["display:flex;position:relative;flex-direction:column;color:",";background:",";border:1px solid ",";border-radius:4px;cursor:pointer;overflow-wrap:anywhere;white-space:pre-wrap;padding:16px 16px 24px;width:100%;height:100%;font-family:monospace;font-weight:bold;letter-spacing:0.09px;line-height:18px;font-size:14px;word-break:break-word;overflow-y:auto;"],(0,a.getColor)("primary"),(0,a.getColor)("terminalGreen"),(0,a.getColor)("primary")),me=(0,ae.default)(a.Icon).withConfig({displayName:"styled__StyledIcon",componentId:"sc-jb3u29-1"})(["display:flex;align-self:flex-end;cursor:pointer;position:absolute;bottom:16px;right:16px;"]);var pe=n(18682);const ge=()=>{const[e]=(0,r.$h)(),t=(0,l.useMemo)((()=>(0,re.sS)(e)),[e]);return l.createElement(de,{onClick:(0,pe.C)(t,{text:"Config copied to your clipboard."})},t,l.createElement(me,{name:"copy",size:"small",color:"textLite",onClick:(0,pe.C)(t,{text:"Config copied to your clipboard."})}))};var he=n(54856),Ee=n(4659),xe=n(22292),ve=n(19673),be=n(42728),ye=n(37618),fe=n(68741);const Ce=()=>l.createElement(a.Flex,{column:!0,gap:2,width:"100%",height:"100%",alignItems:"center",justifyContent:"center"},l.createElement(a.Flex,{flexWrap:!0,gap:2,alignItems:"center",justifyContent:"center"},l.createElement(a.Icon,{color:"warning",name:"warning_triangle",height:"16px"}),l.createElement(a.TextBig,null,"This feature is only available to paid plans"),l.createElement(he.A,{Component:a.TextBig})),l.createElement(a.Text,null,"Take a quick look at"," ",l.createElement(Ee.A,{href:"https://learn.netdata.cloud/docs/live-demo",target:"_blank",rel:"noopener noreferrer",Component:a.Text},"one of the demo spaces"),"."),l.createElement(a.Text,null,l.createElement(Ee.A,{href:"https://learn.netdata.cloud/docs/alerting/creating-alerts-with-the-alerts-configuration-manager",target:"_blank",rel:"noopener noreferrer",Component:a.Text},"Checkout the docs")," ","for more information.")),Ae=e=>{let{isAnonymous:t}=e;return l.createElement(a.Flex,{column:!0,gap:2,width:"100%",height:"100%",alignItems:"center",justifyContent:"center",padding:[0,8]},t?l.createElement(l.Fragment,null,l.createElement(a.TextBig,{textAlign:"center"},"Please sign in to unlock this feature"),l.createElement(fe.default,null)):l.createElement(a.TextBig,{textAlign:"center"},"Please go to a space that is on Business plan to unlock this feature."))},we=e=>{let{canViewConfiguration:t}=e;return t?l.createElement(a.Flex,{width:"100%",column:!0,gap:3},l.createElement(a.Text,null,"Configuration"),l.createElement(ge,null)):l.createElement(Ce,null)},Ie=(e=>t=>{const{value:n}=(0,ve.JN)(),{slug:a}=n||{},r=!(0,be.Kj)(a);return l.createElement(e,(0,b.A)({canViewConfiguration:r},t))})(we),Te=e=>{const t=(0,xe.uW)("isAnonymous"),n=(0,E.vt)();return(0,ye.ES)(n)?l.createElement(Ae,{isAnonymous:t}):t?l.createElement(we,(0,b.A)({canViewConfiguration:!0},e)):l.createElement(Ie,e)},Fe=()=>l.createElement(a.Flex,{gap:3,height:"100%"},l.createElement(a.Flex,{width:"70%",height:"100%",column:!0,gap:2,padding:[2,2,2,0],overflow:{vertical:"auto"}},l.createElement(v,null),l.createElement(f.A,null),l.createElement(y,{title:"Select the Detection Method"},l.createElement(A,null)),l.createElement(f.A,null),l.createElement(y,{title:"Select and define the metric to alert on",showAdvanced:!0},l.createElement(J,null)),l.createElement(f.A,null),l.createElement(y,{title:"Define alerting conditions",showAdvanced:!0},l.createElement(se,null)),l.createElement(f.A,null),l.createElement(y,{title:"Description"},l.createElement(ue,null))),l.createElement(f.A,{isVertical:!0}),l.createElement(a.Flex,{width:"30%",padding:[2,0]},l.createElement(Te,null)))},31248:(e,t,n)=>{n.d(t,{A:()=>o});var l=n(58168),a=n(96540),r=n(65336);const o=e=>{let{isVertical:t,...n}=e;return a.createElement(r.Box,(0,l.A)({as:"hr",height:t?"100%":"1px",width:t?"1px":"100%",sx:{borderWidth:t?"0px 0px 0px 1px":"1px 0px 0px 0px",borderColor:"borderSecondary",borderStyle:"solid"}},n))}},54856:(e,t,n)=>{n.d(t,{A:()=>u});var l=n(58168),a=n(96540),r=n(84976),o=n(65336),i=n(4659),c=n(46741),s=n(27994);const u=function(){let{containerProps:e={},...t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=(0,c.JT)("billing:ReadAll"),{url:u}=(0,s.A)();return u?a.createElement(o.Flex,(0,l.A)({background:"sideBarMini",border:{side:"all",color:"border"},padding:[1,2],round:!0},e),a.createElement(i.A,(0,l.A)({align:"bottom",as:r.N_,color:"text",Component:o.TextMicro,content:n?"Upgrade your plan in order to use this feature":"You have no permissions to manage billing",disabled:!n,hoverColor:"textFocus",showToolTip:!0,strong:!0,to:u},t),"Upgrade now!")):null}},35243:(e,t,n)=>{n.d(t,{G:()=>i,N:()=>o});n(3064),n(98992),n(72577);var l=n(47444),a=n(80925);const r=(0,l.eU)({key:"currentChartsContainerKey",default:null}),o=()=>{const e=(0,a.eg)(),t=(0,l.vc)(r);return e&&e.getRoot().getChildren().find((e=>e.match({id:t})))},i=()=>(0,l.lZ)(r)}}]);