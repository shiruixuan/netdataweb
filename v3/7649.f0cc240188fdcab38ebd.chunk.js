!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c767f6ef-74fc-4f73-82b4-a3026e443bf6",e._sentryDebugIdIdentifier="sentry-dbid-c767f6ef-74fc-4f73-82b4-a3026e443bf6")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"c87aa722cb3cb6eb3ac10b8f2032443089be80ba"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[7649],{31248:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(58168),l=n(96540),o=n(65336);const r=e=>{let{isVertical:t,...n}=e;return l.createElement(o.Box,(0,a.A)({as:"hr",height:t?"100%":"1px",width:t?"1px":"100%",sx:{borderWidth:t?"0px 0px 0px 1px":"1px 0px 0px 0px",borderColor:"borderSecondary",borderStyle:"solid"}},n))}},77649:(e,t,n)=>{n.r(t),n.d(t,{default:()=>xe});var a=n(58168),l=n(96540),o=n(65336),r=n(63314),i=n(47130);const c=(0,i.A)(o.Button),s="rows",d="grid",u=e=>t=>e==s&&t||e==d&&!t?{flavour:"hollow"}:{},m=e=>{let{showGrid:t,toggleLayout:n}=e;return l.createElement(o.Flex,{alignItems:"center"},l.createElement(c,(0,a.A)({small:!0,groupFirst:!0,icon:"list",onClick:n,tooltip:"Show in rows"},u(s)(t))),l.createElement(c,(0,a.A)({small:!0,groupLast:!0,icon:"grid",onClick:n,tooltip:"Show in grid"},u(d)(t))))};n(3064),n(98992),n(72577);var g=n(31629);var p=n(3914),f=n(18061),E=n(47444);const h={items:[],error:"",id:null,loading:!0,loaded:!1,oidcID:null},b=(0,E.Iz)({key:"spaceOIDCKey",default:0}),v=(0,E.Iz)({key:"spaceOIDC",default:e=>(e=>({...h,id:e}))(e)}),C=(0,E.Iz)({key:"spaceOIDCConfiguration",default:null}),k=(0,E.K0)({key:"spaceOIDCState",get:e=>{let{id:t,key:n}=e;return e=>{let{get:a}=e;const l=a(v(t));return n?l[n]:l}},set:e=>{let{id:t,key:n}=e;return(e,a)=>{let{set:l}=e;l(v(t),(e=>n?{...e,[n]:a}:{...e,...a}))}}}),A=e=>((e,t)=>(0,E.vc)(k({id:e,key:t})))((0,p.vt)(),e),y=e=>(0,E.L4)(C(e)),w=e=>{const t=(0,p.vt)(),[n,a]=y(t),o=(0,l.useCallback)((function(){return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g.A.post(`/api/v3/spaces/${e}/oidc`,{...t})}(t,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}),[t]),r=(0,l.useCallback)((function(){return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return g.A.patch(`/api/v3/spaces/${t}/oidc/${e}`,n)}(e,t,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}),[e,t]),i=(0,l.useCallback)((()=>((e,t)=>g.A.delete(`/api/v3/spaces/${t}/oidc/${e}`))(e,t).then((()=>(a(null),Promise.resolve())))),[e,t,a]);return{config:n,isEdit:!!e,save:e?r:o,remove:i}},x=()=>{const e=(0,p.vt)(),t=((e,t)=>(0,E.lZ)(k({id:e,key:t})))(e),n=(()=>{const e=(0,p.vt)();return(0,E.vc)(b(e))})();(0,f.A)((()=>({enabled:!!e,fetch:()=>(e=>g.A.get(`/api/v3/spaces/${e}/oidc`))(e),onFail:e=>t({...h,error:e?.response?.data||e}),onSettle:()=>t({loading:!1,loaded:!0}),onSuccess:e=>{const{oidcID:n}=e.find((e=>{let{oidcID:t}=e;return!!t}))||{};t((t=>({...t,items:e,oidcID:n})))}})),[n,e])};n(17333),n(41393),n(54520),n(81454);var D=n(28738),S=n(4659),I=n(98496),F=n(12602);const L={ErrForbidden:{title:"No permissions",Content:()=>l.createElement(l.Fragment,null,l.createElement(o.Text,null,"You don't have permissions to view the authentication methods."),l.createElement(o.Text,null,"Please contact the Space administrators if this is unexpected."))},ErrNotAvailable:{title:"No available integrations",Content:()=>l.createElement(l.Fragment,null,l.createElement(o.Text,null,"No available single sign-on integrations found."),l.createElement(o.Text,null,"To enable this feature, please"," ",l.createElement(F.A,null,l.createElement(o.Text,{color:"primary"},"upgrade to the Business plan")),"."))},default:{title:"Error",Content:()=>l.createElement(l.Fragment,null,l.createElement(o.Text,null,"Something went wrong, please check again later."),l.createElement(o.Text,null,"If the problem persists feel free to contact us with a"," ",l.createElement(S.A,{href:"https://github.com/netdata/netdata-cloud/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},"ticket")))}},T=function(){let{error:e={},logProps:t={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{errorMsgKey:n}=e,{title:i,Content:c}=L[n]||L.default;return l.createElement(r.DL,(0,a.A)({errorMsgKey:n},t),l.createElement(I.A,{title:i},l.createElement(o.Flex,{column:!0,gap:1},l.createElement(c,null))))},M={flexWrap:!0},$={column:!0},B=e=>{let{loading:t,loaded:n,items:r=[],oidcID:i,error:c,showGrid:s,CardComponent:d,errorViewProps:u={},noLoader:m}=e;const g=r.filter((e=>{let{available:t}=e;return!!t})),p=(0,l.useMemo)((()=>({width:"100%",gap:4,...s?M:$})),[s]),f=(0,l.useMemo)((()=>s?{height:37,width:75,margin:[0,0,4,0]}:{}),[s]);return!n&&t?m?null:l.createElement(D.A,{title:"Loading..."}):n?c?l.createElement(T,(0,a.A)({error:c},u)):g.length?d?l.createElement(o.Flex,p,g.map((e=>l.createElement(d,(0,a.A)({key:e.id,configuredItemExists:!!i},f,e))))):null:l.createElement(T,(0,a.A)({error:{errorMsgKey:"ErrNotAvailable"}},u)):l.createElement(T,(0,a.A)({error:"Something went wrong"},u))};var P=n(87659);n(74648),n(23215);const R=e=>{const t=(0,p.vt)(),[,n]=y(t);(0,f.A)((()=>({enabled:!!t,fetch:()=>((e,t)=>e?g.A.get(`/api/v3/spaces/${t}/oidc/${e}`):Promise.resolve({data:null}))(e,t),onSuccess:e=>{n(e)}})),[t,e])},U={okta:{name:"okta",color:"bright"},"auth-server":{name:"openid",color:"bright"}},_=e=>{let{title:t,onConfirm:n,onDecline:a,isConfirmLoading:r}=e;return l.createElement(o.ConfirmationDialog,{confirmLabel:"Yes, delete",handleConfirm:n,handleDecline:a,message:l.createElement(l.Fragment,null,"You are about to delete ",l.createElement("strong",null,t)," configuration.",l.createElement("br",null),"Are you sure you want to continue?"),title:"Delete configuration",isConfirmLoading:r})};var O=n(46741),j=n(92155),q=n(50876);const z=(0,i.A)((0,j.A)(o.Button)),N=e=>{let{title:t,isLoading:n,isEditable:a,validFields:r,onSave:i,onConfirmDelete:c}=e;const[s,,d,u]=(0,P.A)(),m=(0,O.JT)("oidc:Manage"),{sendLog:g}=(0,q.A)(),p=(0,l.useCallback)((()=>{c(),u(),g({feature:"OidcModalConfirmDeleteButton",title:t})}),[c,u]),f=(0,l.useMemo)((()=>({feature:"OidcModalSaveButton",label:"Save",onClick:i,disabled:!r||!m||n,tooltip:m?r?"Save the configuration":"Please provide values to the required fields":"You don't have permission to manage single sign-on configurations."})),[i,r,m,n]),E=(0,l.useMemo)((()=>({feature:"OidcModalDeleteButton",label:"Delete",flavour:"hollow",danger:!0,onClick:d,disabled:!m||n,tooltip:m?"Delete the configuration":"You don't have permission to manage single sign-on configurations."})),[d,n,m]);return l.createElement(l.Fragment,null,l.createElement(o.ModalFooter,{gap:2},a?l.createElement(z,E):null,l.createElement(z,f)),s?l.createElement(_,{title:t,onConfirm:p,onDecline:u,isConfirmLoading:n}):null)},G={string:e=>{let{propKey:t,title:n,setFormData:r,...i}=e;const c=(0,l.useCallback)((e=>{let{target:n}=e;r((e=>({...e,[t]:n.value})))}),[t,r]);return l.createElement(o.TextInput,(0,a.A)({label:n,onChange:c},i))},default:()=>null},K=e=>{let{propKey:t,type:n,setFormData:o,...r}=e;const i=G[n]||G.default,c=(0,l.useCallback)((e=>{let{target:n}=e;o((e=>({...e,initialData:!1,[t]:n.value})))}),[o]);return l.createElement(i,(0,a.A)({onChange:c},r))},Y=e=>{let{properties:t={},errors:n={},formData:r,required:i,setFormData:c}=e;return l.createElement(o.Flex,{column:!0,gap:2},Object.entries(t).map((e=>{let[t,o]=e;return l.createElement(K,(0,a.A)({key:t,propKey:t,isRequired:i.includes(t)},o,{value:r[t]||"",setFormData:c,error:n[t]}))})))};var V=n(71835);n(14905),n(8872);const H={string:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{format:n}=t;return"uri"!=n||(e=>{try{const{host:t}=new URL(e);return/^(?!-)[a-zA-Z0-9-]{1,63}(?<!-)(\.[a-zA-Z0-9]{1,63})+$/.test(t)}catch{return!1}})(e)?null:"Invalid URL format"},default:()=>null},Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.entries(e).reduce(((e,n)=>{let[a,l]=n;const o=t[a]||{},r=(H[o.type]||H.default)(l,o);return r&&(e[a]=r),e}),{})},W=e=>{let{id:t,oidcID:n,title:a,slug:i,description:c,properties:s={},required:d=[],isEditable:u,docsUrl:m,onClose:g,openDnsRecord:f}=e;R(n);const{config:h,isEdit:v,save:C,remove:k}=w(n),[A,y]=(0,l.useState)({}),[x,,I,F]=(0,P.A)(),L=(()=>{const e=(0,p.vt)(),t=(0,E.lZ)(b(e));return(0,l.useCallback)((()=>t((e=>e+1))),[t])})(),[T,M]=(0,V.A)(),[$,B]=(0,l.useState)({}),_=d.every((e=>!!A[e]));(0,l.useEffect)((()=>{y(h||{})}),[h]),(0,l.useEffect)((()=>{B(Z(A,s))}),[A,s,B]);const O=(0,l.useCallback)((()=>{I(),C({...v?{}:{integrationID:t},...A}).then((function(){let{data:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};T({header:"Success",text:`Successfully configured ${a}`}),g(),L(),e?.dnsRecordValue&&f()})).catch(M).finally((()=>{F()}))}),[C,A,v,T,M,g,L,I,F]),j=(0,l.useCallback)((()=>{I(),k().then((()=>{T({header:"Success",text:`Successfully deleted ${a} configuration`}),g(),L()})).catch(M).finally((()=>{F()}))}),[k,T,M,g,L,I,F]);return l.createElement(r.Ay,{feature:"AuthModal",title:a},l.createElement(o.Modal,{backdropProps:{backdropBlur:!0},onEsc:g},l.createElement(o.ModalContent,{width:{min:100,base:140}},l.createElement(o.ModalHeader,{border:{side:"bottom",color:"disabled"},column:!0,gap:.5,padding:[6,4,3]},l.createElement(o.Flex,{alignItems:"center"},l.createElement(o.Flex,{gap:1,alignItems:"center"},l.createElement(o.Icon,U[i]||{}),l.createElement(o.H3,null,a)),g&&l.createElement(o.ModalCloseButton,{onClose:g,tooltip:"Close modal"})),l.createElement(o.TextSmall,{as:o.Box},c,m?l.createElement(l.Fragment,null,"\xa0",l.createElement(S.A,{Component:o.TextSmall,href:m,target:"_blank",whiteSpace:"nowrap"},"Learn how to configure it.")):null)),l.createElement(o.ModalBody,{height:{min:60,base:60},overflow:{vertical:"auto"}},x?l.createElement(D.A,{height:60,title:"Loading..."}):l.createElement(Y,{formData:A,required:d,setFormData:y,properties:s,errors:$})),l.createElement(N,{title:a,isLoading:x,isEditable:u,validFields:_||!!Object.keys($).length,onSave:O,onConfirmDelete:j}))))};var X=n(87292);const J=e=>{let{oidcID:t,title:n,slug:a,onClose:i}=e;R(t);const{config:c}=w(t);return c?.dnsRecordValue?l.createElement(r.Ay,{feature:"AuthDnsRecord",title:n},l.createElement(o.Modal,{backdropProps:{backdropBlur:!0},onEsc:i},l.createElement(o.ModalContent,{width:{min:100,base:140}},l.createElement(o.ModalHeader,{border:{side:"bottom",color:"disabled"},column:!0,gap:.5,padding:[6,4,3]},l.createElement(o.Flex,{alignItems:"center"},l.createElement(o.Flex,{gap:1,alignItems:"center"},l.createElement(o.Icon,U[a]||{}),l.createElement(o.H3,null,"Create a new TXT record in the DNS settings")),i&&l.createElement(o.ModalCloseButton,{onClose:i,tooltip:"Close modal"}))),l.createElement(o.ModalBody,{height:{min:60,base:60},overflow:{vertical:"auto"}},l.createElement(o.Flex,{column:!0,gap:2,padding:[4]},l.createElement(o.Text,null,"In your domain's DNS settings, create a new TXT record and use the code below as its' value."),l.createElement(X.Ay,{"data-testid":"dnsRecordValue"},c.dnsRecordValue),l.createElement(S.A,{Component:o.TextSmall,href:"https://learn.netdata.cloud/docs/netdata-cloud/authentication-&-authorization/enterprise-sso-authentication#how-to-authenticate-to-netdata",target:"_blank",whiteSpace:"nowrap"},"Learn how to configure DNS TXT records")))))):null};var Q=n(29217),ee=n(63450);const te=e=>{let{title:t,isEditable:n,isDisabled:a,onClick:o}=e;return a?null:l.createElement(Q.A,{align:"bottom",content:n?`Edit ${t} configuration`:`Configure ${t}`,plain:!0},l.createElement(ee.ro,{label:n?"Edit":"Configure",icon:"gear",small:!0,onClick:o}))},ne=e=>{let{id:t,slug:n,title:r,description:i,"data-testid":c="card",configuredItemExists:s,oidcID:d,schema:u={},loading:m,...g}=e;const p=U[n],[f,,E,h]=(0,P.A)(),[b,,v,C]=(0,P.A)(),k=s&&!d,A=s&&!!d,{annotations:y={},properties:w={},required:x=[]}=u,{docsUrl:D}=y;return l.createElement(l.Fragment,null,l.createElement(o.Flex,(0,a.A)({background:"elementBackground",column:!0,"data-testid":c,justifyContent:"between",flex:!1,padding:[3,2,2,3],position:"relative",overflow:"hidden",round:.5},g),l.createElement(ee.MU,(0,a.A)({"data-testid":`${c}-blurredIcon`},p)),l.createElement(o.Flex,{column:!0,"data-testid":`${c}-details`,gap:3,margin:[0,0,3,0]},l.createElement(o.Flex,{"data-testid":`${c}-header`,justifyContent:"between"},l.createElement(o.Flex,{alignItems:"center","data-testid":`${c}-titleContainer`,gap:1},l.createElement(o.Icon,(0,a.A)({"data-testid":`${c}-icon`},p)),l.createElement(o.Text,{"data-testid":`${c}-title`},r)),l.createElement(o.Flex,{gap:1},A&&l.createElement(ee.ro,{label:"DNS TXT record",icon:"serviceDNS",small:!0,onClick:v,neutral:!0}),l.createElement(te,{title:r,isEditable:A,isDisabled:k,onClick:E}))),l.createElement(o.TextSmall,{color:"textDescription","data-testid":`${c}-description`},i," ",D&&l.createElement(S.A,{Component:ee.W6,"data-testid":`${c}-docsLink`,href:D,target:"_blank",whiteSpace:"nowrap"},"Learn more.")))),f&&l.createElement(W,{id:t,oidcID:d,slug:n,title:r,description:i,docsUrl:D,properties:w,required:x,onClose:h,isEditable:A,openDnsRecord:v}),b&&l.createElement(J,{oidcID:d,slug:n,title:r,onClose:C}))},ae=e=>{let{showGrid:t}=e;x();const n=A();return l.createElement(B,(0,a.A)({showGrid:t,CardComponent:ne,errorViewProps:{logProps:{feature:"AuthenticationIntegrationError"}}},n))},le={items:[],error:"",id:null,loading:!0,loaded:!1},oe=(0,E.Iz)({key:"spaceScimKey",default:0}),re=(0,E.Iz)({key:"spaceScim",default:e=>(e=>({...le,id:e}))(e)}),ie=(0,E.Iz)({key:"spaceScimIntegration",default:null}),ce=(0,E.K0)({key:"spaceScimState",get:e=>{let{id:t,key:n}=e;return e=>{let{get:a}=e;const l=a(re(t));return n?l[n]:l}},set:e=>{let{id:t,key:n}=e;return(e,a)=>{let{set:l}=e;l(re(t),(e=>n?{...e,[n]:a}:{...e,...a}))}}}),se=e=>((e,t)=>(0,E.vc)(ce({id:e,key:t})))((0,p.vt)(),e),de=e=>(0,E.L4)(ie(e)),ue=e=>{const t=(0,p.vt)(),[n,a]=de(t);return{integration:n,create:(0,l.useCallback)((function(){return((e,t)=>g.A.post(`/api/v3/spaces/${e}/scim`,t))(t,{integrationID:e,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}})}),[t]),update:(0,l.useCallback)((function(){return((e,t,n)=>g.A.patch(`/api/v3/spaces/${t}/scim/${e}`,n))(e,t,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}),[e,t]),remove:(0,l.useCallback)((()=>((e,t)=>g.A.delete(`/api/v3/spaces/${t}/scim/${e}`))(e,t).then((()=>(a(null),Promise.resolve())))),[e,t,a]),rotateToken:(0,l.useCallback)((()=>((e,t)=>e?g.A.post(`/api/v3/spaces/${t}/scim/${e}/rotate-token`):Promise.resolve({data:null}))(e,t)),[e,t])}},me=()=>{const e=(0,p.vt)(),t=((e,t)=>(0,E.lZ)(ce({id:e,key:t})))(e),n=(()=>{const e=(0,p.vt)();return(0,E.vc)(oe(e))})();(0,f.A)((()=>({enabled:!!e,fetch:()=>(e=>g.A.get(`/api/v3/spaces/${e}/scim`))(e),onFail:e=>t({...le,error:e?.response?.data||e}),onSettle:()=>t({loading:!1,loaded:!0}),onSuccess:e=>{t({...le,items:e})}})),[n,e])},ge=e=>{const t=(0,p.vt)(),[,n]=de(t);(0,f.A)((()=>({enabled:!!t,fetch:()=>((e,t)=>e?g.A.get(`/api/v3/spaces/${t}/scim/${e}`):Promise.resolve({data:null}))(e,t),onSuccess:e=>{n(e)}})),[t])},pe=e=>{let{title:t,onConfirm:n,onDecline:a,isConfirmLoading:r}=e;return l.createElement(o.ConfirmationDialog,{confirmLabel:"Yes, delete",handleConfirm:n,handleDecline:a,message:l.createElement(l.Fragment,null,"You are about to delete ",l.createElement("strong",null,t)," integration.",l.createElement("br",null),"Are you sure you want to continue?"),title:"Delete integration",isConfirmLoading:r})},fe=(0,i.A)((0,j.A)(o.Button)),Ee=e=>{let{title:t,isLoading:n,isEditable:a,isDirty:r,credentials:i,validFields:c,onActivate:s,onUpdate:d,onRotateToken:u,onConfirmDelete:m,onClose:g}=e;const[p,,f,E]=(0,P.A)(),h=(0,O.JT)("oidc:Manage"),{sendLog:b}=(0,q.A)(),v=(0,l.useCallback)((()=>{m(),E(),b({feature:"ScimModalConfirmDeleteButton",title:t})}),[m,E]),C=(0,l.useMemo)((()=>({feature:"ScimModalSaveButton",label:"Save",onClick:d,disabled:!r||!c||!h||n,tooltip:h?c?"Save the integration":"Please provide values to the required fields":"You don't have permission to manage scim integrations."})),[d,r,c,h,n]),k=(0,l.useMemo)((()=>({feature:"ScimModalDeleteButton",label:"Delete",flavour:"hollow",danger:!0,onClick:f,disabled:!h||n,tooltip:h?"Delete the integration":"You don't have permission to manage scim integrations."})),[f,n,h]);return l.createElement(l.Fragment,null,l.createElement(o.ModalFooter,{gap:2,justifyContent:"between"},a&&!i?l.createElement(fe,k):l.createElement("div",null),l.createElement(o.Flex,{gap:2},i?l.createElement(fe,{label:"Done",onClick:g}):a?l.createElement(l.Fragment,null,l.createElement(fe,{label:"Regenerate token",flavour:"hollow",onClick:u}),l.createElement(fe,C)):l.createElement(fe,{label:"Activate",onClick:s}))),p?l.createElement(pe,{title:t,onConfirm:v,onDecline:E,isConfirmLoading:n}):null)};var he=n(5332);const be=e=>{let{baseURL:t,token:n}=e;return l.createElement(o.Flex,{column:!0,gap:2},l.createElement(o.Flex,{column:!0,gap:1},l.createElement(o.Text,{as:"label"},"Base URL"),l.createElement(he.A,{logProps:{feature:"CopyScimBaseURL"},padding:[2],noMargin:!0},t)),l.createElement(o.Flex,{column:!0,gap:1},l.createElement(o.Text,{as:"label"},"Token"),l.createElement(he.A,{logProps:{feature:"CopyScimToken"},padding:[2],noMargin:!0},n)))},ve="Loading...",Ce=e=>{let{id:t,scimID:n,title:a,slug:i,description:c,properties:s={},required:d=[],docsUrl:u,onClose:m}=e;ge(n);const g=(0,l.useRef)(),{integration:f,create:h,update:b,remove:v,rotateToken:C}=ue(n||t),k=(()=>{const e=(0,p.vt)(),t=(0,E.lZ)(oe(e));return(0,l.useCallback)((()=>t((e=>e+1))),[t])})(),[A,,y]=(0,P.A)(),[w,x]=(0,l.useState)({}),{isLoading:I,loadingText:F,startLoading:L,startLoadingToken:T,stopLoading:M}=(()=>{const[e,,t,n]=(0,P.A)(),[a,o]=(0,l.useState)(ve),r=(0,l.useCallback)((()=>{o("Generating token..."),t()}),[t,o]),i=(0,l.useCallback)((()=>{n(),o(ve)}),[n,o]);return{isLoading:e,loadingText:a,startLoading:t,startLoadingToken:r,stopLoading:i}})(),[$,B]=(0,V.A)(),[R,_]=(0,l.useState)({}),O=d.every((e=>!!w[e])),[j,q]=(0,l.useState)();(0,l.useEffect)((()=>{if(Object.keys(f||{}).length){const e={...f,initialData:!0};x(e)}}),[f]),(0,l.useEffect)((()=>{_(Z(w,s))}),[w,s,_]),(0,l.useEffect)((()=>{Object.keys(w).length&&!w.initialData&&(g.current=!0)}),[w]);const z=(0,l.useCallback)((()=>{A&&k(),m()}),[A,k,m]),N=(0,l.useCallback)((()=>{const{scimToken:e}=w||{};T(),h({scimToken:e}).then((e=>{let{data:t}=e;q(t),y()})).catch((e=>{B(e)})).finally((()=>M()))}),[t,w,h,y,q,T,M,B]),G=(0,l.useCallback)((()=>{const{scimToken:e}=w||{};L(),b({scimToken:e}).then((()=>{$("Successfully updated integration")})).catch(B).finally(M)}),[w,b,L,M,$,B]),K=(0,l.useCallback)((()=>{T(),C().then((e=>{let{data:t}=e;q(t),y()})).catch((e=>{B(e)})).finally((()=>M()))}),[C,T,M,q,y,B]),H=(0,l.useCallback)((()=>{L(),v().then((()=>{$({header:"Success",text:`Successfully deleted ${a} integration`}),k(),z()})).catch(B).finally((()=>{M()}))}),[v,k,$,B,z,L,M]);return l.createElement(r.Ay,{feature:"AuthModal",title:a},l.createElement(o.Modal,{backdropProps:{backdropBlur:!0},onEsc:z},l.createElement(o.ModalContent,{width:{min:100,base:140}},l.createElement(o.ModalHeader,{border:{side:"bottom",color:"disabled"},column:!0,gap:.5,padding:[6,4,3]},l.createElement(o.Flex,{alignItems:"center"},l.createElement(o.Flex,{gap:1,alignItems:"center"},l.createElement(o.Icon,U[i]||{}),l.createElement(o.H3,null,a)),m&&l.createElement(o.ModalCloseButton,{onClose:z,tooltip:"Close modal"})),l.createElement(o.TextSmall,{as:o.Box},c,u?l.createElement(l.Fragment,null,"\xa0",l.createElement(S.A,{Component:o.TextSmall,href:u,target:"_blank",whiteSpace:"nowrap"},"Learn how to configure it.")):null)),l.createElement(o.ModalBody,{height:{min:40,base:60},overflow:{vertical:"auto"}},I?l.createElement(D.A,{height:40,title:F}):j?l.createElement(be,j):l.createElement(Y,{formData:w,required:d,setFormData:x,properties:s,errors:R})),l.createElement(Ee,{title:a,isLoading:I,isEditable:!!n,isDirty:g?.current,credentials:j,validFields:O||!!Object.keys(R).length,onActivate:N,onUpdate:G,onRotateToken:K,onConfirmDelete:H,onClose:z}))))},ke=e=>{let{title:t,isActive:n,onClick:a}=e;const{tooltipContent:o,buttonLabel:r,icon:i}=(0,l.useMemo)((()=>({tooltipContent:n?`Configure ${t}`:`Activate ${t}`,buttonLabel:n?"Configure":"Activate",icon:n?"gear":null})),[n]);return l.createElement(Q.A,{align:"bottom",content:o,plain:!0},l.createElement(ee.ro,{label:r,icon:i,small:!0,onClick:a}))},Ae=e=>{let{id:t,slug:n,title:r,description:i,"data-testid":c="card",schema:s={},SCIMID:d,...u}=e;const[m,,g,p]=(0,P.A)(),f=!!d,{annotations:E={},properties:h={},required:b=[]}=s,{docsUrl:v}=E;return l.createElement(l.Fragment,null,l.createElement(o.Flex,(0,a.A)({background:"elementBackground",column:!0,"data-testid":c,justifyContent:"between",flex:!1,padding:[3,2,2,3],position:"relative",overflow:"hidden",round:.5},u),l.createElement(ee.MU,{"data-testid":`${c}-blurredIcon`}),l.createElement(o.Flex,{column:!0,"data-testid":`${c}-details`,gap:3,margin:[0,0,3,0]},l.createElement(o.Flex,{"data-testid":`${c}-header`,justifyContent:"between"},l.createElement(o.Text,{"data-testid":`${c}-title`},r),l.createElement(ke,{title:r,onClick:g,isActive:f})),l.createElement(o.TextSmall,{color:"textDescription","data-testid":`${c}-description`},i," ",v&&l.createElement(S.A,{Component:ee.W6,"data-testid":`${c}-docsLink`,href:v,target:"_blank",whiteSpace:"nowrap"},"Learn more.")))),m&&l.createElement(Ce,{id:t,scimID:d,slug:n,title:r,description:i,docsUrl:v,properties:h,required:b,onClose:p}))},ye=e=>{let{showGrid:t}=e;me();const n=se();return l.createElement(B,(0,a.A)({showGrid:t,CardComponent:Ae,errorViewProps:{logProps:{feature:"AuthorizationIntegrationError"}}},n,{noLoader:!0}))};var we=n(31248);const xe=e=>{const[t,n]=(0,P.A)(),i=(0,l.useMemo)((()=>t?{margin:[-4,0,0,0]}:{}),[t]);return l.createElement(r.Ay,{tab:"AuthenticationAndAuthorization"},l.createElement(o.Flex,(0,a.A)({column:!0,gap:4,height:"100%",overflow:{vertical:"auto"},flex:"grow",padding:[2,4,0,4]},e),l.createElement(o.Flex,{alignItems:"center",justifyContent:"between"},l.createElement(o.TextBig,{margin:[1,0,3]},"See the available single sign-on, authorization, and authentication integrations and configure the ones that your company supports."),l.createElement(m,{showGrid:t,toggleLayout:n})),l.createElement(ae,{showGrid:t}),l.createElement(we.A,i),l.createElement(ye,{showGrid:t})))}}}]);