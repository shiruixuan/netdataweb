!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5e2bb2ba-cfcd-42b4-90a4-b3f86e3f2e8e",e._sentryDebugIdIdentifier="sentry-dbid-5e2bb2ba-cfcd-42b4-90a4-b3f86e3f2e8e")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"c87aa722cb3cb6eb3ac10b8f2032443089be80ba"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[6008],{86008:(e,t,r)=>{r.d(t,{A:()=>se});var n=r(58168),a=r(96540),o=r(8711),i=r(65336),d=r(86652),s=r(38257),l=r(45463),c=r(62302),u=(r(17333),r(3064),r(41393),r(14905),r(98992),r(54520),r(72577),r(81454),r(8872),r(45467)),g=r(65570),m=r(40961),h=r(43375),p=r(43627),f=r(34604),b=r(44554),I=r(42629),y=r(74979),x=r(13692);const E=e=>(0,p.uU)({...e,wasDragging:!0}),C=e=>{let{id:t,items:r,containerWidth:o,rowHeight:i,gutter:d,Component:s,isSortingContainer:l,onRemove:c,onItemRemove:u,Item:g,gridTracks:m,transforming:h,containerDndProps:f,itemProps:I,dragOverlay:C,rootId:v,...w}=e;const{active:k,attributes:A,isDragging:S,listeners:D,over:P,setNodeRef:R,transition:_,transform:T}=(0,p.gl)({id:C?`dragOverlay-${t}`:t,disabled:C,data:{rootId:v,isContainer:!0,items:r,containerId:t,dropArea:!0,...f},animateLayoutChanges:E}),O=!!P&&(t===P.id&&"container"!==k?.data.current?.type||r.includes(P.id)),B=(0,b.Hp)(r),H=B*i+(B-1)*d+"px";return a.createElement(s,(0,n.A)({ref:R,style:C?{width:o,height:H}:{transition:_,transform:y.Ks.Translate.toString(T),opacity:S?.5:void 0,width:o,height:H},hover:O,onRemove:c,attributes:A,listeners:D},w,{itemProps:I,id:t,dragOverlay:C}),r.map(((e,s)=>a.createElement(x.A,(0,n.A)({disabled:l,key:e.id},e,{index:s,containerId:t,Item:g,onRemove:u,draggable:!0,containerWidth:o,rowHeight:i,gridTracks:m,gutter:d,transformed:h?r[s]:null,itemProps:I,containerDragOverlay:C,rootId:v,containerDndProps:f,draggableProps:e})))))},v=e=>{let{containers:t,Container:r,containerWidth:n,isSortingContainer:o,items:i,Item:d,transforming:s,onContainerRemove:l,onRemove:c,rowHeight:u,gridTracks:g,gutter:m,containerDndProps:h,itemProps:p,rootId:f}=e;return t.map((e=>a.createElement(C,{key:e,id:e,items:i[e],onRemove:()=>l(e),containerWidth:n,rowHeight:u,gridTracks:g,gutter:m,Component:r,Item:d,isSortingContainer:o,transforming:s,onItemRemove:c,containerDndProps:h,itemProps:p,rootId:f})))},w={sideEffects(e){let{active:t}=e;t.node.animate([{opacity:0},{opacity:1}],{easing:"ease-in",duration:250})}},k="TRASH_ID",A="PLACEHOLDER_ID",S=e=>{let{id:t}=e;const{setNodeRef:r,isOver:n}=(0,h.zM)({id:t,data:{dropArea:!0,isTrash:!0}});return a.createElement("div",{ref:r,style:{display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",left:"50%",marginLeft:-150,bottom:20,width:300,height:60,borderRadius:5,border:"1px solid",borderColor:n?"red":"#DDD"}},"Drop here to delete")},D=e=>{let{rootId:t,items:r,containers:o,trashable:i=!0,onRemove:d,Item:s,containerWidth:l=800,rowHeight:c=40,gridTracks:y=12,gutter:E=4,allowOverlap:D=!1,compactType:P="vertical",maxRows:R=3e5,Container:_=f.A,onDragEnd:T,containerDndProps:O,itemProps:B,updateOnNewProps:H=!1,rearrangeable:N=!0}=e;const{active:L}=(0,h.fF)(),F=(0,a.useRef)(null),[W,$]=(0,a.useState)((()=>(o||Object.keys(r)).reduce(((e,t)=>(e[t]=(0,b.oE)((0,b.Su)(r[t]),P,y),e)),{})),{}),[M,j]=(0,a.useState)((()=>o||Object.keys(W)));(0,u.A)((()=>{$((o||Object.keys(r)).reduce(((e,t)=>(e[t]=(0,b.oE)((0,b.Su)(r[t]),P,y),e)),{}))}),[y]),(0,u.A)((()=>{H&&((0,g.Ay)(r,W)||($((o||Object.keys(r)).reduce(((e,t)=>(e[t]=(0,b.oE)((0,b.Su)(r[t]),P,y),e)),{})),j(o)))}),[o,r]);const z=L?.isContainer,[G,U]=(0,a.useState)(null),[q,J]=(0,a.useState)(null),Z=(0,a.useRef)(null),K=e=>e in W?e:null,Q=()=>{G&&$(G),U(null),J(null),Z.current=null},Y=()=>{const e=Object.keys(W),t=e[e.length-1];return String.fromCharCode(t.charCodeAt(0)+1)},V=e=>{let{active:t}=e;const{isContainer:r}=t.data.current;U(W),r||J(W)};return(0,a.useLayoutEffect)((()=>{if(L)return V({active:L}),Q}),[]),(0,h.E5)({onDragStart:V,onDragMove:e=>{let{active:t,over:r,collisions:n}=e;const{isResizer:a,isContainer:o,itemId:i,itemContainerId:d}=t.data.current;if(o||!q)return;const{initial:s,translated:u}=t.rect.current;let g=(0,b.Su)(q[d]);const m=!q[d],h=(0,b.GN)(m?q:g,i,m)||(0,b.lc)(t.data.current);if(!h||!h.width)return;const p=r?.id;if(a){if(!p)return;const e=r.rect.width+(u.right-s.right),t=r.rect.height+(u.bottom-s.bottom);let{width:a,height:o}=(0,I.tr)({gutter:E,maxRows:R,gridTracks:y,rowHeight:c,containerWidth:l},e,t,h);if(h.width===a&&h.height===o)return;if(!n)return;return g=g.map((e=>e.id===h.id?{...h,width:a,height:o}:e)),n=n.filter((e=>e.id!==h.id)),g=(0,b.oE)(g,P,y),Z.current={...h,itemContainerId:d},void J((e=>({...e,[d]:[...g]})))}if(p===k)return void J(G);if(!N)return;const f=K(d),x=K(p)||r&&K(r.data.current.itemContainerId)||f;if(!x)return;if(x&&x===f||(g=[...q[x],h]),!n)return;const C=n.find((e=>e.id===x));if(!C)return;let{left:v,top:w}=(0,I.zA)({gutter:E,maxRows:R,gridTracks:y,rowHeight:c,containerWidth:l},u.top-C.data.droppableContainer.rect.current.top,u.left-C.data.droppableContainer.rect.current.left,h);if(h.top===w&&h.left===v&&f===x)return;g=(0,b.Pe)(g,h,v,w,!0,!1,P,y,D),g=(0,b.oE)(g,P,y);const A=x!==f;A&&(F.current=t.itemContainerId),Z.current={...h,itemContainerId:x},J((e=>({...e,[x]:g.filter((e=>!!e)),...A&&!!e[d]&&{[d]:(0,b.oE)(e[d].filter((e=>e.id!==h.id)),P,y)}})))},onDragEnd:e=>{let{active:t,over:r}=e;if(!q)return;const{isResizer:n,isItem:a}=t.data.current,o=r?.id;if(null===o)return void J(null);if(o===k)return $((e=>({...e,[t.containerId]:(0,b.oE)(e[t.containerId].filter((e=>{let{id:r}=e;return r!==t.itemId})),P,y)}))),void J(null);if(a||n)return q&&$(q),J(null),void T(q,Z.current,M);t.id in W&&r?.id&&j((e=>{const n=e.indexOf(t.id),a=e.indexOf(r.id),o=(0,p.be)(e,n,a);return T(q,Z.current,o),o}));const i=K(t.id);if(i)if(o!==A)q&&$(q),J(null),T(q,Z.current,M);else{const e=Y();(0,m.unstable_batchedUpdates)((()=>{j((t=>[...t,e])),$((r=>({...r,[i]:r[i].filter((e=>e!==t.itemId)),[e]:[t.id]})))}))}},onDragCancel:Q}),q||W?a.createElement(a.Fragment,null,a.createElement(p.gB,{items:[...M,A],strategy:p._G},a.createElement(v,{rootId:t,containers:M,Container:_,containerWidth:l,isSortingContainer:z,items:q||W,transforming:null!==q,Item:s,onContainerRemove:e=>{j((t=>t.filter((t=>t!==e))))},onRemove:d,rowHeight:c,gridTracks:y,gutter:E,itemProps:B,containerDndProps:O})),(0,m.createPortal)(a.createElement(h.Hd,{adjustScale:!1,dropAnimation:w},L&&L.data.current.rootId===t?L.data.current.isContainer?(X=L.data.current,a.createElement(C,{rootId:t,id:X,items:q||W,containerWidth:l,rowHeight:c,gutter:E,Component:_,Item:s,gridTracks:y,containerDndProps:O,itemProps:B,dragOverlay:!0})):L.data.current.isItem?(e=>{const r=(q||W)[e.itemContainerId];if(!r)return null;const o=r.find((t=>t.id===e.itemId));return o?a.createElement(x.A,(0,n.A)({rootId:t},o,{containerId:e.itemContainerId,Item:s,onRemove:d,draggable:!0,containerWidth:l,rowHeight:c,gridTracks:y,gutter:E,dragOverlay:!0,itemProps:B})):null})(L.data.current):null:null),document.body),i&&L&&(L.isContainer||L.isItem)?a.createElement(S,{id:k}):null):null;var X},P=o.default.div.withConfig({displayName:"gridLayout__Div",componentId:"sc-jna1fu-0"})(["position:relative;"]),R=(0,a.forwardRef)(((e,t)=>{let{id:r,onRemove:o,children:s,attributes:l,listeners:c,itemProps:u={},itemProps:{dashboardId:g},style:m,dragOverlay:h,...p}=e;(0,d.QZ)(g,r);return a.createElement(i.Flex,(0,n.A)({},p,{ref:t,column:!0,flex:!0,round:!0,background:"mainBackground",padding:[3],gap:2}),a.createElement(P,{style:m},s))})),_=e=>{let{id:t,Component:r,containerWidth:o,onActiveMenuId:u,...g}=e;const[m,h]=(0,d.B1)(t),[p,f]=(0,d.Ix)(t),b=(0,l.A)("(max-width: 767px)"),I=(0,s.A)(),y=(0,a.useRef)(),x=(0,a.useMemo)((()=>(y.current&&y.current.cancel(),y.current=(0,c.A)(),()=>{})),[m,u]);return a.createElement(i.Flex,{ref:I,column:!0,overflow:{vertical:"auto"},flex:"1","data-testid":"dashboardGrid",height:"100%",onScroll:x},a.createElement(D,(0,n.A)({rootId:t,key:t,Container:R,onDragEnd:(e,t,r)=>{h(e),f(r)},containers:p,items:m,containerWidth:o-(b?16:26)},g,{Item:r,gridTracks:12,itemProps:{dashboardId:t},containerDndProps:{droppable:!0},updateOnNewProps:!0})))};var T=r(27078),O=r(58388),B=r(28973),H=r(80925);const N=(0,o.default)(i.Flex).attrs((e=>({height:"100%",background:"mainChartBg",round:!0,...e}))).withConfig({displayName:"container__Card",componentId:"sc-esi601-0"})(["",""],(e=>{let{dragging:t,theme:r}=e;return t&&`\n    &:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-color: ${(0,i.getRgbColor)("primary",.2)({theme:r})};\n      z-index: 10;\n      backdrop-filter: blur(3px);\n    }\n\n  `}));var L=r(4967),F=r(36196);const W={},$=(0,a.memo)((e=>{let{dashboardId:t,id:r,handleProps:o,listeners:i,attributes:d,style:s,dragging:l,dragOverlay:c,...g}=e;const m=(0,H.eg)(),{nodesScope:h,contextScope:p,...f}=(0,O.bE)(t,r)||W,b=(0,O.v_)(t,r),I=(0,a.useMemo)((()=>{const e=(0,T.My)(m,t);let n=e.getNode({id:c?`dragOverlay-${r}`:r});if(n)return n;const[a]=p||[];return a?(n=m.makeChart({attributes:{...(0,L.L)(a),id:c?`dragOverlay-${r}`:r,cardId:r,dashboardId:t,contextScope:p,...f,...!!f.nodeId&&!h&&{nodesScope:[f.nodeId]},toolboxProps:{drag:{...o,...i,...d}}},makeTrack:T.qh}),e.appendChild(n),n):null}),[t,r]);return(0,u.A)((()=>{I&&(I.updateAttributes({height:s.height,width:s.width}),I.trigger("resize"))}),[I,s.height,s.width]),(0,u.A)((()=>{I&&I.updateAttributes({toolboxProps:{drag:{...o,...i,...d,dragging:l}}})}),[l]),(0,a.useLayoutEffect)((()=>{if(I)return(0,B.unregister)(I.onAttributesChange(["aggregationMethod","groupBy","groupByLabel","postAggregationMethod","postGroupBy","postGroupByLabel","groupingMethod","groupingTime","chartType","chartLibrary","selectedDimensions","selectedLabels","selectedNodes","selectedInstances","sparkline","selectedLegendDimensions","showingInfo","dimensionsSortBy","instancesSortBy","nodesSortBy","groupBySortBy","labelsSortBy","dimensionsSort","nodesExpanded","groupByExpanded","labelsExpanded","expanded","staticZones","title","description","showPostAggregations"],((e,t,r)=>b((t=>({...t,[r]:e}))))))}),[I,b]),(0,u.A)((()=>{I&&I.updateAttributes(f)}),[f]),I?a.createElement(N,(0,n.A)({"data-testid":`chartCard-${(f.contextScope||[]).join(",")}`,height:s.height,width:"100%"},g,{dragging:l}),a.createElement(F.A,{chart:I,"data-chartid":c?`dragOverlay-${r}`:r,"data-track":I.track("container"),height:s.height,width:"100%"})):null})),M=$;var j=r(46741),z=r(58384),G=r(67544);const U="text",q="customDashboard",J=e=>{let{dashboardId:t,id:r,onClick:n}=e;const o=(0,O.bE)(t,r,"editing"),i=(0,O.v_)(t,r,"editing");return a.createElement(z.t,{icon:"pencilSolid",onClick:()=>{n(),i(!0)},"data-ga":`${U}-reset::${q}`,"data-testid":"textCard-edit",disabled:o},"Edit")},Z=e=>{let{dashboardId:t,id:r}=e;const n=(0,G.c6)(t,r);return a.createElement(z.t,{icon:"trashcan",onClick:n,"data-ga":`${U}-reset::${q}`,"data-testid":"textCard-remove"},"Remove")},K=e=>{let{dashboardId:t,id:r,children:o,...i}=e;return a.createElement(a.Fragment,null,a.createElement(z.A,(0,n.A)({category:U,context:q,testId:"chartTextDropdown"},i),(e=>{let{close:n}=e;return a.createElement(a.Fragment,null,a.createElement(J,{dashboardId:t,id:r,onClick:n}),a.createElement(Z,{dashboardId:t,id:r}))})),o)},Q=(0,o.default)(i.Flex).attrs({as:"form",column:!0,flex:!0,gap:2,height:"100%",padding:[0,0,2],onMouseDown:e=>e.stopPropagation()}).withConfig({displayName:"form__CardContent",componentId:"sc-3tcqxu-0"})(["cursor:auto;"]),Y=(0,o.default)(i.Box).attrs((e=>({as:"textarea",background:"inputBg",height:"100%",round:!0,border:!0,padding:[2],...e}))).withConfig({displayName:"form__Textarea",componentId:"sc-3tcqxu-1"})(["resize:none;font-size:12px;color:",";"],(0,i.getColor)("text")),V=(0,a.memo)((e=>{let{dashboardId:t,id:r}=e;const n=(0,O.bE)(t,r,"text"),o=(0,O.v_)(t,r,"editing"),d=(0,O.v_)(t,r,"text"),[s,l]=(0,a.useState)(n);return a.createElement(Q,{"data-testid":"textCardForm"},a.createElement(Y,{placeholder:"Add some text",value:s.replace(/<\/?[^>]+(>|$)/g,""),onChange:e=>l(e.target.value)}),a.createElement(i.Flex,{position:"absolute",right:"24px",bottom:0,gap:1},a.createElement(i.IconButton,{icon:"check",small:!0,padding:[0],onClick:()=>{d(s),o(!1)},"data-testid":"textCardForm-cancel",neutral:!1,flavour:"default"}),a.createElement(i.IconButton,{icon:"x",small:!0,padding:[0],onClick:()=>o(!1),"data-testid":"textCardForm-done",flavour:"default"})))})),X={h1:i.H2,h2:i.H4,text:i.Text,micro:i.TextNano},ee=e=>{let{dashboardId:t,id:r}=e;const n=(0,O.bE)(t,r,"text")||"",o=(0,O.bE)(t,r,"textType"),d=X[o]||X.text;return a.createElement(i.Box,{"data-testid":"textCardContent"},a.createElement(d,{whiteSpace:"pre-wrap"},n.replace(/<\/?[^>]+(>|$)/g,"")))},te=(0,o.default)(i.Flex).attrs({column:!0}).withConfig({displayName:"text__StyledOptions",componentId:"sc-1f67m9f-0"})([""]),re=e=>{let{dragging:t,...r}=e;const o=(0,j.JT)("dashboard:Update");return a.createElement(i.IconButton,(0,n.A)({position:"absolute",top:0,right:0,padding:[0],width:"12px",height:"12px",icon:"rearrange",title:"Drag & drop","data-testid":"text-drag",disabled:!o,cursor:t?"grabbing":"grab"},r))},ne=["h1","h2","text","micro"],ae=e=>{let{id:t,dashboardId:r}=e;const n=(0,j.JT)("dashboard:Update"),o=(0,O.bE)(r,t,"textType")||"text",d=(0,O.v_)(r,t,"textType");return a.createElement(i.IconButton,{padding:[0],width:"12px",height:"12px",icon:"text_add",title:"Change text component","data-testid":"text-component",disabled:!n,onClick:()=>{const e=ne.findIndex((e=>e===o)),t=ne[e>ne.length-2?0:e+1];d(t)}})},oe=(0,o.default)(N).withConfig({displayName:"text__StyledCard",componentId:"sc-1f67m9f-1"})(["","{opacity:0;}&:hover{border:1px solid ",";}&:hover ","{opacity:1;}"],te,(0,i.getColor)("border"),te),ie={chart:M,text:(0,a.memo)((e=>{let{dashboardId:t,id:r,listeners:o,handleProps:i,dragging:d}=e;const s=(0,O.bE)(t,r,"editing");return a.createElement(oe,{"data-testid":"textCard",alignItems:"start",overflow:"hidden",dragging:d},a.createElement(te,null,a.createElement(K,{dashboardId:t,id:r}),a.createElement(ae,{dashboardId:t,id:r})),s&&a.createElement(V,{dashboardId:t,id:r}),!s&&a.createElement(ee,{dashboardId:t,id:r}),a.createElement(re,(0,n.A)({},o,i,{dragging:d})))})),placeholder:(0,a.memo)((()=>a.createElement(N,{column:!0,"data-testid":"placeholderCard",background:"secondaryHighlight",width:"100%"})))},de=(0,a.forwardRef)(((e,t)=>{let{dashboardId:r,id:o,attributes:i,style:d,resizeHandle:s,...l}=e;const c=(0,O.bE)(r,o,"type")||"placeholder",u=ie[c]||ie.chart;return a.createElement("div",(0,n.A)({ref:t},i,{style:d}),a.createElement(u,(0,n.A)({dashboardId:r,id:o,style:d},l)),s)})),se=(0,a.memo)((e=>{let{id:t,...r}=e;return(0,T.Ay)(t),a.createElement(_,(0,n.A)({id:t,Component:de},r))}))}}]);