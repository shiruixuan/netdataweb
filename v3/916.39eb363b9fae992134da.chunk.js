!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3f2e8a1a-b90f-40b0-98ce-c38e852b2ddb",e._sentryDebugIdIdentifier="sentry-dbid-3f2e8a1a-b90f-40b0-98ce-c38e852b2ddb")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"c87aa722cb3cb6eb3ac10b8f2032443089be80ba"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[916],{70916:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Fe});n(17333),n(41393),n(98992),n(54520),n(81454);var l=n(96540),a=n(65336),r=n(4659),o=n(63450),s=n(58168),i=n(63950),c=n.n(i),u=n(29217),d=n(78940);const m=e=>{let{scope:t,setScope:n=c(),isDisabled:r,...o}=e;return l.createElement(a.Flex,(0,s.A)({gap:3},o),Object.entries(d.Wu).map((e=>{let[o,{text:s,tooltip:i}]=e;return l.createElement(a.RadioButton,{key:o,checked:o===t,onChange:()=>n(o),disabled:r},l.createElement(u.A,{content:i,align:"bottom"},l.createElement(a.TextSmall,{color:"textDescription"},s)))})))};var p=n(83039),g=n(87659);const h=e=>{let{selectedKey:t,selectedValue:n,onAddHostLabel:r=c(),onRemoveHostLabel:o=c(),isDefault:s=!1,showPlaceholder:i=c(),isDisabled:d}=e;const[m,g]=(0,l.useState)(t||""),[h,E]=(0,l.useState)(n||""),b=()=>{m&&h&&(r({[m]:h}),i())};return l.createElement(a.Flex,{gap:2},l.createElement(p.A,{component:"input",onChange:g,onBlur:b,placeholder:"Host key",value:m,disabled:d||!s}),l.createElement(p.A,{component:"input",onChange:E,onBlur:b,placeholder:"Host value",value:h,disabled:d||!s||!m}),s?l.createElement(u.A,{content:"Save label pair",align:"bottom"},l.createElement(a.Button,{flavour:"borderless",disabled:!m||!h},l.createElement(a.Icon,{name:"check",color:"primary",size:"small"}))):l.createElement(u.A,{content:"Remove label pair",align:"bottom"},l.createElement(a.Button,{flavour:"borderless",onClick:()=>o(t)},l.createElement(a.Icon,{name:"x",color:"primary",size:"small"}))))},E=e=>{let{hostLabels:t,onAddHostLabel:n,onRemoveHostLabel:a}=e;return Object.entries(t).map((e=>{let[t,r]=e;return l.createElement(h,{key:t,onAddHostLabel:n,selectedKey:t,selectedValue:r,onRemoveHostLabel:a})}))},b=e=>{let{hostLabels:t,onAddHostLabel:n=c(),onRemoveHostLabel:r=c(),isEdit:o,isDisabled:s}=e;const i=!!Object.entries(t||{}).length,[u,,d]=(0,g.A)(!1);return l.createElement(a.Flex,{column:!0,gap:1},l.createElement(a.TextSmall,{color:"textLite"},"Host labels"),i&&l.createElement(E,{hostLabels:t,onAddHostLabel:n,onRemoveHostLabel:r}),(!i||u)&&l.createElement(h,{key:JSON.stringify(t),onAddHostLabel:n,isDefault:!0,showPlaceholder:d,isDisabled:s}),o&&!u&&i&&l.createElement(a.Flex,{justifyContent:"end"},l.createElement(a.Button,{flavour:"borderless",onClick:d},"Add host label")))};var C=n(99851);function f(){const e=new Date,t=e.getFullYear(),n=e.getMonth(),l=e.getDate(),a=new Date(0);return a.setFullYear(t,n,l+1),a.setHours(0,0,0,0),a}var v=n(51730),D=n(82526),S=n(27467);const x=Object.entries(d.SB).map((e=>{let[t,n]=e;return{label:n,value:t}})),A=f(),y=(0,v.o)((0,D.W)(A,{years:1})),R=e=>{let{duration:t,setDuration:n,setDate:r,endDate:o,isDisabled:s}=e;const i=(0,S.rW)("offset");return l.createElement(a.Flex,{gap:2},l.createElement(p.A,{component:"select",title:"Duration",onChange:n,options:x,placeholder:"Select duration",value:t,isDisabled:s}),"custom"===t.value&&l.createElement(a.Flex,{alignSelf:"end"},l.createElement(C.A,{isSinglePicker:!0,values:{singleDate:o},minDate:A,maxDate:y,utc:i,onChange:r,isPlaying:!1,accessorProps:d.Iv,padding:[4,0],width:"auto",accessorTooltipContent:"Select end date"})))},T=e=>{let{startDate:t,startOfToday:n,onStartDateChange:r,endDate:o,minEndDate:s,onEndDateChange:i,inOneYear:c,offset:u,forceRenderEndDate:m}=e;return l.createElement(a.Flex,{gap:2},l.createElement(a.Flex,{column:!0,gap:2,flex:{grow:1,shrink:1},basis:0},l.createElement(a.TextSmall,null,"Start date"),l.createElement(C.A,{isSinglePicker:!0,values:{singleDate:new Date(t)},minDate:n(),maxDate:c,utc:u,onChange:r,isPlaying:!1,accessorProps:d.Iv,padding:[4,0],width:"auto",accessorTooltipContent:"Select start date"})),l.createElement(a.Flex,{column:!0,gap:2,flex:{grow:1,shrink:1},basis:0},l.createElement(a.TextSmall,null,"End date"),l.createElement(C.A,{key:m,isSinglePicker:!0,values:{singleDate:o?new Date(o):o},minDate:s,maxDate:c,utc:u,onChange:i,isPlaying:!1,accessorProps:d.Iv,padding:[4,0],width:"auto",accessorTooltipContent:"Select end date"})))},k=(0,l.memo)(T);n(3064),n(72577);const I=e=>{let{value:t,onChange:n}=e;const r=(0,l.useMemo)((()=>d.q.find((e=>e.value==t))||""),[t]);return l.createElement(a.Select,{"data-testid":"recurrence-main-selector",value:r,options:d.q,onChange:n,styles:{size:"tiny"},menuPlacement:"auto"})},O=e=>{let{freq:t,interval:n,onFreqChange:r,onIntervalChange:o}=e;const s=(0,l.useMemo)((()=>d.Ws.find((e=>e.value==t))||""),[t]);return l.createElement(a.Flex,{gap:2,alignItems:"center"},l.createElement(a.Text,null,"Repeat every"),l.createElement(a.TextInput,{"data-testid":"rrule-prop-interval",width:20,value:n,onChange:o,type:"number",min:1,step:1,size:"small"}),l.createElement(a.Select,{"data-testid":"rrule-prop-freq",value:s,options:d.Ws,onChange:r,styles:{size:"tiny",minWidth:35}}))};var w=n(87991);const F=f(),L=(0,v.o)((0,D.W)(F,{years:1})),H=e=>{let{option:t,item:n,onChange:r,children:o}=e;const{value:s,label:i}=n,c=t==s,u=(0,l.useCallback)((()=>{r(s)}),[s,r]);return l.createElement(a.Flex,{gap:2,alignItems:"center"},l.createElement(a.RadioButton,{checked:c,onChange:u}),l.createElement(a.TextSmall,null,i),"function"==typeof o?o({isDisabled:!c}):o)},N=e=>{let{option:t,count:n,until:r,onRecurrenceEndChange:o,onEndDateChange:s,onCountChange:i}=e;const c=(0,S.rW)("offset"),u=(0,l.useMemo)((()=>r?`${(0,w.GP)(new Date(r),"dd/MM/yyyy HH:mm")} UTC${c}`:"specific date"),[r,c]);return l.createElement(a.Flex,{column:!0,gap:2},l.createElement(a.TextSmall,null,"Ends"),l.createElement(H,{option:t,item:d.u7.never,onChange:o}),l.createElement(H,{option:t,item:d.u7.on,onChange:o},(e=>{let{isDisabled:t}=e;return t?l.createElement(a.TextSmall,{color:"textLite"},u):l.createElement(C.A,{isSinglePicker:!0,values:{singleDate:r},minDate:F,maxDate:L,utc:c,onChange:s,isPlaying:!1,accessorProps:d.Iv,padding:[4,0],width:"auto",accessorTooltipContent:"Select end date"})})),l.createElement(H,{option:t,item:d.u7.after,onChange:o},(e=>{let{isDisabled:t}=e;return l.createElement(l.Fragment,null,l.createElement(a.TextInput,{"data-testid":"rrule-prop-count",width:20,value:n,onChange:i,type:"number",min:1,step:1,size:"small",disabled:t}),l.createElement(a.TextSmall,null,"occurence(s)"))})))};var q=n(80158);const P=e=>{let{rruleState:t,rruleText:n,rruleHandlers:r}=e;const{simpleFreq:o,freq:s,interval:i,endsOption:c,count:u,until:d}=t||{},{isCustomRule:m,onSimpleFreqChange:p,onFreqChange:g,onIntervalChange:h,onRecurrenceEndChange:E,onEndDateChange:b,onCountChange:C}=r||{};return l.createElement(a.Flex,{column:!0,gap:3},l.createElement(I,{value:o||"",onChange:p}),n?l.createElement(a.Text,{color:"primary"},(0,q.Zr)(n)):null,m?l.createElement(l.Fragment,null,l.createElement(O,{freq:s,interval:i,onFreqChange:g,onIntervalChange:h}),l.createElement(N,{option:c,count:u,until:d,onRecurrenceEndChange:E,onEndDateChange:b,onCountChange:C})):null)};function M(){return(0,v.o)(Date.now())}var U=n(21290);const W=M(),_=f(),j=f(),B=(0,v.o)((0,D.W)(j,{years:1})),Y=e=>{let{start:t,end:n,onChange:a,isEdit:r}=e;const[o,s]=(0,l.useState)(r?"schedule":d.SX),[i,c]=(0,l.useState)(d.DK),[u,m]=(0,l.useState)(0),p=(0,S.rW)("offset"),[g,h]=(0,l.useState)(t?new Date(t):r?null:W),[E,b]=(0,l.useState)(n?new Date(n):r?null:_),[C,f]=(0,l.useState)((0,v.o)((0,D.W)(g,{days:1}))),{utcOffset:x}=(0,U.$j)(g),{utcOffset:A}=(0,U.$j)(E);(0,l.useEffect)((()=>{const e=(0,D.W)(g,{days:1});f(e),!r&&g>=E&&b(e)}),[g]),(0,l.useEffect)((()=>{a({start:g,end:E,scheduleOption:o,duration:i})}),[g,E,o,i]);const y=(0,l.useCallback)(((e,t)=>{h(e),t||m((e=>e+1))}),[h,m]),R=(0,l.useCallback)((e=>{b(e)}),[b]),T=(0,l.useCallback)((e=>{y(Date.now()),R(e)}),[y,R]),k=(0,l.useMemo)((()=>x!=A),[x,A]);return{scheduleOption:o,setScheduleOption:s,duration:i,setDuration:c,setCustomDuration:T,startDate:g,endDate:E,inOneYear:B,offset:p,onStartDateChange:y,onEndDateChange:R,forceRenderEndDate:u,minEndDate:C,dst:k}},$=e=>{let{dst:t}=e;return t?l.createElement(a.Flex,{gap:2,alignItems:"center"},l.createElement(a.Icon,{name:"warning_triangle",color:"warning"}),l.createElement(a.TextSmall,null,"UTC offeset difference exists between selected dates due to Daylight Saving Time (DST).")):null},z=e=>{let{start:t,end:n,rruleState:r,rruleText:o,rruleHandlers:s,onChange:i,isDisabled:c,isEdit:m}=e;const{scheduleOption:p,setScheduleOption:g,duration:h,setDuration:E,setCustomDuration:b,startDate:C,endDate:f,inOneYear:v,offset:D,onStartDateChange:S,onEndDateChange:x,forceRenderEndDate:A,minEndDate:y,dst:T}=Y({start:t,end:n,onChange:i,isEdit:m});return l.createElement(a.Flex,{column:!0,gap:3},l.createElement($,{dst:T}),!m&&l.createElement(a.Flex,{gap:3},Object.entries(d.Yo).map((e=>{let[t,{text:n,tooltip:r}]=e;return l.createElement(a.RadioButton,{key:t,checked:t===p,onChange:()=>g(t),disabled:c},l.createElement(u.A,{content:r,align:"bottom"},l.createElement(a.TextSmall,{color:"textDescription"},n)))}))),"now"===p?l.createElement(R,{duration:h,setDuration:E,setDate:b,endDate:f,isDisabled:c}):l.createElement(a.Flex,{column:!0,gap:2},l.createElement(k,{startDate:C,startOfToday:M,onStartDateChange:S,endDate:f,minEndDate:y,onEndDateChange:x,inOneYear:v,offset:D,forceRenderEndDate:A}),l.createElement(P,{rruleState:r,rruleText:o,rruleHandlers:s})))},V=e=>{let{content:t="Loading alerts..."}=e;return l.createElement(a.Flex,{height:45,alignItems:"center",justifyContent:"center"},l.createElement(a.Text,null,t))};const K=(0,n(82838).VF)(),Z=()=>l.createElement(a.Text,{color:"textLite"},"Timezone: ",K);var G=n(51719),J=(n(14905),n(8872),n(47767)),Q=n(38819),X=n(22292),ee=n(46741),te=n(3914),ne=n(67990),le=n(71856),ae=n(88982),re=n(29848),oe=n(36021),se=n(47444),ie=n(45860);const ce=(0,se.K0)({key:"spaceAlertMetas",get:e=>()=>(0,ie.z5)(e)});var ue=n(64118),de=n(79769),me=n(26770),pe=n(10368),ge=n(57013),he=n(71835),Ee=n(92255);const be=e=>{const t=new Date(e),n=t.getUTCFullYear(),l=t.getUTCMonth()+1,a=t.getUTCDate(),r=t.getUTCHours(),o=t.getUTCMinutes();return(0,Ee.w$)(n,l,a,r,o)},Ce=e=>{if(!e)return e;return(e=>{const t=e.replace(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/,"$1-$2-$3T$4:$5:$6Z");return new Date(t)})(e.replace(/^DTEND:/,""))},fe={simpleFreq:d.hq.value,freq:d.T6.day,interval:1,count:1,until:void 0,endsOption:d.GB},ve={[d.T6.day]:Ee.p3.DAILY,[d.T6.week]:Ee.p3.WEEKLY,[d.T6.month]:Ee.p3.MONTHLY,[d.T6.year]:Ee.p3.YEARLY},De=e=>{let{state:t,startDate:n,endDate:a,onRRuleChange:r,onRRuleTextChange:o,onRRuleStateChange:s}=e;(0,l.useEffect)((()=>{if(t.simpleFreq==d.hq.value)return r(""),void o("");const e=new Ee.p3({freq:ve[t.freq],dtstart:be(n),..."custom"==t.simpleFreq?{interval:t.interval}:{},..."custom"==t.simpleFreq&&t.endsOption==d.Pu.on&&t.until?{until:be(t.until)}:{},..."custom"==t.simpleFreq&&t.endsOption==d.Pu.after&&t.count?{count:t.count}:{}}),l=[e.toString()];if(a){const e=new Ee.p3({dtstart:be(a)}).toString().replace(/^DTSTART/,"DTEND");l.push(e)}r(l.join("\n")),o(e.toText())}),[t,n,a,r,o]);const i=(0,l.useCallback)((e=>{let{value:t}=e;s({simpleFreq:t,freq:"custom"==t?d.T6.day:t})}),[s]),c=(0,l.useCallback)((e=>{let{value:t}=e;s({freq:t})}),[s]),u=(0,l.useCallback)((e=>{let{target:t}=e;s({interval:t?.value})}),[s]),m=(0,l.useCallback)((e=>{s({endsOption:e})}),[s]),p=(0,l.useCallback)((e=>{s({until:e})}),[s]),g=(0,l.useCallback)((e=>{let{target:t}=e;s({count:t?.value})}),[s]);return{isCustomRule:"custom"==t.simpleFreq,onSimpleFreqChange:i,onFreqChange:c,onIntervalChange:u,onRecurrenceEndChange:m,onEndDateChange:p,onCountChange:g}},Se={name:"",rooms:[],nodes:[],hostLabels:null,alertNames:[],alertContexts:[],alertRoles:[],integrationIds:[],startsAt:null,lastsUntil:null,rrule:null,rruleState:fe},xe=e=>{let{id:t,name:n,...l}=e;return{label:n,value:t,...l}},Ae=e=>({label:e,value:e}),ye=e=>{let{rooms:t,nodes:n,hostLabels:l,startsAt:a,lastsUntil:r,...o}=e;const{dtstart:s,dtend:i,...c}=o.rrule?(e=>{if(!e)return null;const t=e.split("\n"),n=t.filter((e=>!e.includes("DTEND"))).join("\n"),l=t.find((e=>e.includes("DTEND"))),a=Ce(l);if(!n)return null;try{const{options:e}=(0,Ee.YI)(n);return{...e,dtend:a,simpleFreq:e.interval&&e.interval>1||e.count||e.until?"custom":Ee.p3.FREQUENCIES[e.freq],freq:Ee.p3.FREQUENCIES[e.freq],interval:e.interval||"",count:e.count||"",until:e.until||"",endsOption:e.until?d.Pu.on:e.count?d.Pu.after:d.Pu.never}}catch(r){return null}})(o.rrule):fe;return{...o,scope:o.accountId?"personal":d._V,canSubmit:!!o?.name?.length,rooms:t?.length?t.map(xe):[le.PT],...n?.length?{nodes:n.map(xe).filter((e=>{let{notAvailable:t}=e;return!t}))}:{},...l?{hostLabels:l}:{},...a?{startsAt:a}:{},...s?{startsAt:s}:{},...r?{lastsUntil:r}:{},...i?{lastsUntil:i}:{},...c?{rruleState:c}:{}}},Re=e=>{let{value:t}=e;return t},Te=(e,t)=>{const{scope:n,rooms:l,nodes:a,hostLabels:r,startsAt:o,lastsUntil:s,scheduleOption:i,duration:c,rrule:u,rruleState:m,rruleText:p,...g}=e,h=l.filter((e=>{let{value:t}=e;return t!==d.jH.value})).map(Re),E=a.map(Re),b=!!Object.keys(r||{}).length,{start:C,end:f}=(e=>{let{startsAt:t,lastsUntil:n,scheduleOption:l,duration:a}=e;if("schedule"==l)return{start:t,end:n};let r,o=Date.now();switch(a){case"oneHour":r=(0,D.W)(o,{hours:1});break;case"sixHours":r=(0,D.W)(o,{hours:6});break;case"twelveHours":r=(0,D.W)(o,{hours:12});break;case"oneDay":r=(0,D.W)(o,{days:1});break;case"custom":r=n}return{start:o,...r?{end:r}:{}}})({startsAt:o,lastsUntil:s,scheduleOption:i,duration:c});return{...g,..."personal"==n?{account_id:t}:{},...h.length?{room_ids:h}:{},...E.length?{node_ids:E}:{},...b?{host_labels:r}:{},...C?{starts_at:new Date(C).toISOString()}:{},...f?{lasts_until:new Date(f).toISOString()}:{},...m.simpleFreq!=d.hq.value?{rrule:u}:{}}},ke=[{label:"CRITICAL",value:"CRITICAL"},{label:"WARNING",value:"WARNING"},{label:"CLEAR",value:"CLEAR"}],Ie=e=>{let{rule:t,onClose:n,isEdit:a}=e;const r=(0,X.NJ)(),o=(0,J.Zp)(),s=(0,te.bq)(),[i,c]=(0,g.A)(),u=(0,ae.A)({all:!0}),m=u.find((e=>{let{label:t}=e;return"All nodes"==t}))?.value,{loaded:p,value:h,hasError:E}=(()=>{const e=(0,te.vt)(),t=(0,se.xf)(ce(e));return{loaded:"loading"!==t.state,value:t.contents?.data||ie.rx,hasError:"hasError"===t.state}})(),b=(0,oe._B)(),C=(0,oe.FU)(),f=a?C:b,v=(0,re.ly)(),D=(0,oe.Lz)(),[,,S]=(0,he.A)(),[x,A]=(0,l.useState)({alertNameOptions:[],alertContextOptions:[],alertRoleOptions:[]}),{alertNameOptions:y,alertContextOptions:R,alertRoleOptions:T}=x,k=(0,te.vt)();(0,de.A)(k,"modal");const[I,O]=(0,l.useState)([]),{loaded:w,loading:F,channels:L,error:H}=(0,me.t5)(k);(0,l.useEffect)((()=>{if(!F&&w&&!H){const e=L.reduce(((e,t)=>{let{enabled:n,integration:l}=t;return[...e,...n?[{value:l.id,label:l.title}]:[]]}),[]);O(e)}}),[F,w,L,H,O]);const[N,q]=(0,l.useState)((()=>({...Se,...ye(t)}))),[P,M]=(0,l.useState)([]),{loaded:U,value:W}=(0,ue.I8)({alertNames:N.alertNames,contexts:N.alertContexts,allowEmptyName:!0});(0,l.useEffect)((()=>{const e=(W||[]).filter((e=>!((N.alertNames||[]).length&&!N.alertNames.includes(e.name))&&(!((N.alertContexts||[]).length&&!N.alertContexts.includes(e.context))&&!((N.nodeIds||[]).length&&!N.nodeIds.includes(e.nodeId))))).map((e=>{let{instance:t,instanceName:n}=e;return{value:t,label:n}}));M(e)}),[U,W,N.alertNames,N.alertContexts,N.nodeIds]);const _=(0,ne.vv)(N.roomIds||[m]),j=(0,l.useCallback)((e=>q((t=>({...t,scope:e})))),[q]),B=(0,l.useCallback)((e=>q((t=>({...t,name:e,canSubmit:!!e?.length})))),[q]),Y=(0,l.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n=(e=>e.length<=1?e:e[e.length-1].value==d.jH.value?[d.jH]:e.filter((e=>{let{value:t}=e;return!!t})))(e),l=n.map((e=>{let{value:t}=e;return t||m})),a=t.length<n.length?n.filter((e=>{let{value:n}=e;return!t.includes(n)}))[0]:null;q((e=>({...e,rooms:n,roomIds:l,lastRoomAdded:a||null})))}),[m,q]),$=(0,l.useCallback)((e=>q((t=>({...t,nodeIds:e.map((e=>{let{value:t}=e;return t})),nodes:e})))),[q]),z=(0,l.useCallback)((e=>q((t=>({...t,hostLabels:{...t.hostLabels,...e}})))),[q]),V=(0,l.useCallback)((e=>q((t=>{const n={...t.hostLabels};return delete n[e],{...t,hostLabels:n}}))),[q]),K=(0,l.useCallback)((e=>t=>q((n=>({...n,[e]:t.map((e=>{let{value:t}=e;return t}))})))),[q]),Z=(0,l.useCallback)((e=>q((t=>({...t,integrationIds:e.map((e=>{let{value:t}=e;return t}))})))),[q]),G=(0,l.useCallback)((e=>{let{start:t,end:n,scheduleOption:l,duration:a}=e;return q((e=>({...e,startsAt:t,lastsUntil:n,scheduleOption:l,duration:a.value})))}),[q]),le=(0,l.useCallback)((e=>{q((t=>({...t,rrule:e})))}),[q]),Ee=(0,l.useCallback)((e=>{q((t=>({...t,rruleText:e})))}),[q]),be=(0,l.useCallback)((e=>{q((t=>({...t,rruleState:{...t.rruleState,...e}})))}),[q]),Ce=(0,l.useCallback)((()=>{c(),f(Te(N,r)).then((()=>{n(),D(),v()})).catch((e=>S((0,pe.H)(e)))).finally(c)}),[N,r]),fe=(0,ge.A)();(0,l.useEffect)((()=>{const e=N.lastRoomAdded?.value||m;let t=null;return e&&(t=fe(e)),()=>!!t?.cancel&&t.cancel()}),[N.roomIds,fe]),(0,l.useEffect)((()=>{if(p){const{contexts:e,names:t,roles:n}=h||{};A({alertNameOptions:t?t.map(Ae):[],alertContextOptions:e?e.map(Ae):[],alertRoleOptions:n?n.map(Ae):[]})}}),[p]),(0,l.useEffect)((()=>{const e=(0,Q.PP)(),t=(()=>{const{silencingRulePrefill:e}=(0,Q.PP)();if(!e)return{};let t={};try{t=JSON.parse(e)}catch(n){}return t})(),{alertName:n,nodeId:l,context:a,instance:r,roomId:o}=t;if(o){const e=u.filter((e=>{let{value:t}=e;return t==o}));e&&Y(e)}if(n&&q((e=>({...e,alertNames:[n]}))),a&&q((e=>({...e,alertContexts:[a]}))),r&&q((e=>({...e,alertInstances:[r]}))),l){const e=_.filter((e=>{let{value:t}=e;return t==l}));e&&$(e)}(0,Q.Z8)({...e,silencingRulePrefill:""})}),[q,K,$,_]);const ve=(0,ee.JT)("space:CreatePersonalSilencingRule"),xe=(0,l.useCallback)((()=>o(`/spaces/${s}/settings/billing`)),[s,o]),Re=De({state:N.rruleState,startDate:N.startsAt,endDate:N.lastsUntil,onRRuleChange:le,onRRuleTextChange:Ee,onRRuleStateChange:be});return{state:N,onScopeChange:j,onRuleNameChange:B,onRoomsSelectionChange:Y,roomOptions:u,onNodesSelectionChange:$,nodesOptions:_,alertMetasLoaded:p,alertMetas:h,alertNameOptions:y,alertContextOptions:R,alertInstancesEnabled:!0,alertInstancesOptions:P,alertRoleOptions:T,alertStatusOptions:ke,channelsOptions:I,alertMetasError:E,onAlertValueChange:K,onIntegrationsValueChange:Z,onAddHostLabel:z,onRemoveHostLabel:V,onDatesChange:G,loading:i,onSave:Ce,spaceCreatePersonalSilencingRule:ve,onUpdateButtonClick:xe,rruleHandlers:Re}},Oe=e=>e?.length?e.map(Ae):[],we=()=>l.createElement(a.Box,{as:"hr",height:"1px",width:"100%",sx:{borderWidth:"1px 0px 0px 0px",borderColor:"borderSecondary",borderStyle:"solid"}}),Fe=e=>{let{rule:t={},onClose:n,isEdit:s}=e;const{state:i,onScopeChange:c,onRuleNameChange:d,onRoomsSelectionChange:g,roomOptions:h,onNodesSelectionChange:E,nodesOptions:C,alertMetasLoaded:f,alertNameOptions:v,alertContextOptions:D,alertInstancesEnabled:S,alertInstancesOptions:x,alertRoleOptions:A,alertStatusOptions:y,channelsOptions:R,onAlertValueChange:T,onIntegrationsValueChange:k,onAddHostLabel:I,onRemoveHostLabel:O,onDatesChange:w,loading:F,onSave:L,spaceCreatePersonalSilencingRule:H,onUpdateButtonClick:N,rruleHandlers:q}=Ie({rule:t,onClose:n,isEdit:s}),P=(0,l.useCallback)((()=>R.filter((e=>{let{value:t}=e;return i.integrationIds.includes(t)}))),[i.integrationIds,R]);return l.createElement(a.Modal,{onEsc:n,backdropProps:{backdropBlur:!0}},l.createElement(o.$m,null,l.createElement(a.ModalHeader,{padding:[6,4,3]},l.createElement(a.Flex,{column:!0,gap:2},l.createElement(a.Flex,{flex:!0,alignItems:"center",justifyContent:"between"},l.createElement(a.H4,null,"Add silencing rule"),n&&l.createElement(o.Oj,{onClose:n})),l.createElement(a.Text,null,"Define an alert notification silencing rule that will apply to all users or just you."," ",l.createElement(r.A,{"data-ga":"alert-silencing::click-link-docs::rule-modal","data-testid":"silencing-rules-doc",href:"https://learn.netdata.cloud/docs/alerts-&-notifications/notifications/centralized-cloud-notifications/manage-alert-notification-silencing-rules",rel:"noopener noreferrer",target:"_blank"},"Learn how to configure silencing rules.")),!H&&l.createElement(G.A,null))),l.createElement(a.ModalBody,{padding:[0],overflow:{vertical:"auto"},style:{maxHeight:"800px"}},l.createElement(o.fn,null,l.createElement(a.Flex,{column:!0,gap:3},l.createElement(m,{scope:i.scope,setScope:c,padding:[0,0,1,0],isDisabled:!H}),l.createElement(p.A,{component:"input",onChange:d,placeholder:"Add rule name",title:"Rule name*",value:i.name,disabled:!H}),l.createElement(p.A,{component:"select",isMulti:!0,onChange:e=>g(e,i.roomIds),options:h,placeholder:"Select rooms",title:"Rooms*",value:i.rooms,isDisabled:!H}),l.createElement(p.A,{component:"select",isMulti:!0,onChange:E,options:C,placeholder:"Select nodes",title:"Nodes",value:i.nodes,isDisabled:!H||!C.length}),l.createElement(b,{hostLabels:i.hostLabels,onAddHostLabel:I,onRemoveHostLabel:O,isEdit:s,isDisabled:!H}),f?l.createElement(l.Fragment,null,l.createElement(we,null),l.createElement(p.A,{component:"select",isMulti:!0,onChange:T("alertNames"),options:v,placeholder:"Select alert name",title:"Alert name",value:Oe(i.alertNames),isDisabled:!H}),l.createElement(p.A,{component:"select",isMulti:!0,onChange:T("alertContexts"),options:D,placeholder:"Select alert context",title:"Alert context",value:Oe(i.alertContexts),isDisabled:!H}),l.createElement(p.A,{component:"select",isMulti:!0,onChange:T("alertInstances"),options:x,placeholder:"Select alert instance",title:"Alert instance",value:Oe(i.alertInstances),isDisabled:!H||!S}),l.createElement(p.A,{component:"select",isMulti:!0,onChange:T("severities"),options:y,placeholder:"Select alert status",title:"Alert status",value:Oe(i.severities),isDisabled:!H}),l.createElement(p.A,{component:"select",isMulti:!0,onChange:T("alertRoles"),options:A,placeholder:"Select alert role",title:"Alert role",value:Oe(i.alertRoles),isDisabled:!H}),l.createElement(p.A,{component:"select",isMulti:!0,onChange:k,options:R,placeholder:"Select notification methods",title:"Notification Methods",value:P(),isDisabled:!H})):l.createElement(V,null),l.createElement(we,null),l.createElement(z,{start:i.startsAt,end:i.lastsUntil,rruleState:i.rruleState,rruleText:i.rruleText,rruleHandlers:q,onChange:w,isEdit:s,isDisabled:!H})))),l.createElement(a.ModalFooter,{alignItems:"center",justifyContent:"between"},l.createElement(Z,null),l.createElement(a.Flex,{gap:4,alignItems:"center"},l.createElement(a.Button,{flavour:"borderless",label:"Cancel",onClick:n,disabled:F}),H?l.createElement(u.A,{content:s?"Update the rule":"Create the rule",align:"bottom"},l.createElement(a.Button,{label:"OK",onClick:L,"data-ga":`alert-silencing::click-save-${s?"edit":"new"}-rule::rule-modal`,"data-testid":"saveRule-button",textTransform:"uppercase",isLoading:F,disabled:F||!i.canSubmit})):l.createElement(u.A,{content:"Update to a paid plan in order to be able to create silencing rules",align:"bottom"},l.createElement(a.Button,{label:"Upgrade!",onClick:N}))))))}},51719:(e,t,n)=>{n.d(t,{A:()=>i});var l=n(58168),a=n(96540),r=n(65336),o=n(54856),s=n(3914);const i=e=>{const t=(0,s.dg)();return a.createElement(r.Flex,(0,l.A)({gap:2,alignItems:"center"},e),a.createElement(r.Icon,{size:"small",color:"warning",name:"warning_triangle"}),a.createElement(r.Text,null,"This feature is only available to paid plans"),t?null:a.createElement(o.A,null))}}}]);