"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[164],{640:function(e,t,s){s(2791);var r=s(184);t.Z=function(e){var t=e.title;return(0,r.jsx)("div",{children:(0,r.jsx)("h1",{className:"text-xl",children:t})})}},1781:function(e,t,s){s.d(t,{b:function(){return r}});var r=s(1044).Z.create({headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}})},1164:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var r=s(4165),a=s(5861),l=s(9439),n=s(2791),i=s(9434),u=s(3695),o=s(478),c=s(1095),d=s(6106),x=s(914),b=s(1781),m=s(5014),p=s(184);var h=function(e){var t=e.showBusForm,s=e.setShowBusForm,h=e.type,f=void 0===h?"add":h,g=e.getData,j=e.selectedBus,v=e.setSelectedBus,Z=(0,i.I0)(),w=(0,n.useState)([]),y=(0,l.Z)(w,2),N=y[0],k=y[1],I=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,Z((0,m.YC)()),a=null,"add"!==f){e.next=9;break}return e.next=6,b.b.post("/api/buses/add-bus",t);case 6:a=e.sent,e.next=12;break;case 9:return e.next=11,b.b.put("/api/buses/".concat(j._id),t);case 11:a=e.sent;case 12:a.data.success?u.ZP.success(a.data.message):u.ZP.error(a.data.message),g(),s(!1),v(null),Z((0,m.Ir)()),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),u.ZP.error(e.t0.message),Z((0,m.Ir)());case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){b.b.get("/api/cities/get-all-cities").then((function(e){k(e.data.data)}))}),[]),(0,p.jsx)(o.Z,{width:800,title:"add"===f?"Add Bus":"Update Bus",visible:t,onCancel:function(){v(null),s(!1)},footer:!1,children:(0,p.jsxs)(c.Z,{layout:"vertical",onFinish:I,initialValues:j,children:[(0,p.jsxs)(d.Z,{gutter:[10,10],children:[(0,p.jsx)(x.Z,{lg:24,xs:24,children:(0,p.jsx)(c.Z.Item,{label:"Bus Name",name:"name",rules:[{required:!0,message:"Please enter bus name"}],children:(0,p.jsx)("input",{type:"text",className:"block border border-blue-500 w-full p-3 rounded-lg mb-4"})})}),(0,p.jsx)(x.Z,{lg:12,xs:24,children:(0,p.jsx)(c.Z.Item,{label:"Bus Number",name:"busNumber",rules:[{required:!0,message:"Please input bus number!"}],children:(0,p.jsx)("input",{type:"text",className:"block border border-blue-500 w-full p-3 rounded-lg mb-4"})})}),(0,p.jsx)(x.Z,{lg:12,xs:24,children:(0,p.jsx)(c.Z.Item,{label:"Capacity",name:"capacity",rules:[{required:!0,message:"Please input bus capacity!"}],children:(0,p.jsx)("input",{type:"number",className:"block border border-blue-500 w-full p-3 rounded-lg mb-4"})})}),(0,p.jsx)(x.Z,{lg:12,xs:24,children:(0,p.jsx)(c.Z.Item,{label:"From",name:"from",rules:[{required:!0,message:"Please Choose an option",validateTrigger:"onSubmit"}],children:(0,p.jsxs)("select",{className:"block border border-blue-500 w-full p-3 rounded-lg mb-4",children:[(0,p.jsx)("option",{value:"",children:"From"}),N.map((function(e,t){return(0,p.jsx)("option",{value:e.ville,children:e.ville},t)}))]})})}),(0,p.jsx)(x.Z,{lg:12,xs:24,children:(0,p.jsx)(c.Z.Item,{label:"To",name:"to",rules:[{required:!0,message:"Please Choose an option",validateTrigger:"onSubmit"}],children:(0,p.jsxs)("select",{className:"block border border-blue-500 w-full p-3 rounded-lg mb-4",children:[(0,p.jsx)("option",{value:"",children:"To"}),N.map((function(e,t){return(0,p.jsx)("option",{value:e.ville,children:e.ville},t)}))]})})}),(0,p.jsx)(x.Z,{lg:8,xs:24,children:(0,p.jsx)(c.Z.Item,{label:"Journey Date",name:"journeyDate",rules:[{required:!0,message:"Please input journey date!",validateTrigger:"onSubmit"}],children:(0,p.jsx)("input",{min:(new Date).toISOString().split("T")[0],type:"date",className:"block border border-blue-500 w-full p-3 rounded-lg mb-4"})})}),(0,p.jsx)(x.Z,{lg:8,xs:24,children:(0,p.jsx)(c.Z.Item,{label:"Departure",name:"departure",rules:[{required:!0,message:"Please input departure time!",validateTrigger:"onSubmit"}],children:(0,p.jsx)("input",{type:"time",className:"block border border-blue-500 w-full p-3 rounded-lg mb-4"})})}),(0,p.jsx)(x.Z,{lg:8,xs:24,children:(0,p.jsx)(c.Z.Item,{label:"Arrival",name:"arrival",rules:[{required:!0,message:"Please input arrival time!",validateTrigger:"onSubmit"}],children:(0,p.jsx)("input",{type:"time",className:"block border border-blue-500 w-full p-3 rounded-lg mb-4"})})}),(0,p.jsx)(x.Z,{lg:12,xs:24,children:(0,p.jsx)(c.Z.Item,{label:"Price",name:"price",rules:[{required:!0,message:"Please input price!"}],children:(0,p.jsx)("input",{type:"number",className:"block border border-blue-500 w-full p-3 rounded-lg mb-4"})})}),(0,p.jsx)(x.Z,{lg:12,xs:24,children:(0,p.jsx)(c.Z.Item,{label:"Status",name:"status",rules:[{required:!0,validateTrigger:"onSubmit"}],children:(0,p.jsxs)("select",{className:"block border border-blue-500 w-full p-3 rounded-lg mb-4",name:"status",id:"status",selected:"Yet to start",children:[(0,p.jsx)("option",{value:"Yet to start",selected:!0,children:"Yet To Start"}),(0,p.jsx)("option",{value:"Running",children:"Running"}),(0,p.jsx)("option",{value:"Completed",children:"Completed"})]})})})]}),(0,p.jsx)("div",{className:"flex justify-end",children:(0,p.jsxs)("button",{type:"submit",className:"relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-bold rounded-full group",children:[(0,p.jsx)("span",{className:"w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"}),(0,p.jsx)("span",{className:"absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-600 opacity-100 group-hover:-translate-x-8"}),(0,p.jsx)("span",{className:"relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white",children:"Save"}),(0,p.jsx)("span",{className:"absolute inset-0 border-2 border-blue-600 rounded-full"})]})})]})})},f=s(640),g=s(6079),j=s(4270);var v=function(){var e=(0,i.I0)(),t=(0,n.useState)(!1),s=(0,l.Z)(t,2),o=s[0],c=s[1],d=(0,n.useState)([]),x=(0,l.Z)(d,2),v=x[0],Z=x[1],w=(0,n.useState)(null),y=(0,l.Z)(w,2),N=y[0],k=y[1],I=(0,n.useCallback)((0,a.Z)((0,r.Z)().mark((function t(){var s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e((0,m.YC)()),t.next=4,b.b.post("/api/buses/get-all-buses",{});case 4:s=t.sent,e((0,m.Ir)()),s.data.success?Z(s.data.data):u.ZP.error(s.data.message),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),e((0,m.Ir)()),u.ZP.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,9]])}))),[e]),S=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(s){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e((0,m.YC)()),t.next=4,b.b.delete("/api/buses/".concat(s),{});case 4:a=t.sent,e((0,m.Ir)()),a.data.success?(u.ZP.success(a.data.message),I()):u.ZP.error(a.data.message),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),e((0,m.Ir)()),u.ZP.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),P=[{title:"Name",dataIndex:"name"},{title:"Bus Number",dataIndex:"busNumber"},{title:"From",dataIndex:"from"},{title:"To",dataIndex:"to"},{title:"Journey Date",dataIndex:"journeyDate"},{title:"Status",dataIndex:"status",render:function(e){return"Completed"===e?(0,p.jsx)("span",{className:"text-red-500",children:e}):"running"===e?(0,p.jsx)("span",{className:"text-yellow-500",children:e}):(0,p.jsx)("span",{className:"text-green-500",children:e})}},{title:"Action",dataIndex:"action",render:function(e,t){return(0,p.jsxs)("div",{className:"flex gap-3",children:[(0,p.jsx)("i",{className:"ri-delete-bin-line cursor-pointer text-red-500 text-xl",onClick:function(){return S(t._id)}}),(0,p.jsx)("i",{className:"ri-pencil-line cursor-pointer text-xl",onClick:function(){k(t),c(!0)}})]})}}];return(0,n.useEffect)((function(){I()}),[I]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(j.q,{children:(0,p.jsx)("title",{children:"Buses"})}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("div",{className:"flex justify-between p-7",children:[(0,p.jsx)(f.Z,{title:"Buses"}),(0,p.jsxs)("button",{type:"submit",className:"relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-bold rounded-full group",onClick:function(){return c(!0)},children:[(0,p.jsx)("span",{className:"w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"}),(0,p.jsx)("span",{className:"absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-600 opacity-100 group-hover:-translate-x-8"}),(0,p.jsx)("span",{className:"relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white",children:"Add Bus"}),(0,p.jsx)("span",{className:"absolute inset-0 border-2 border-blue-600 rounded-full"})]})]}),(0,p.jsxs)("div",{className:"p-7",children:[(0,p.jsx)(g.Z,{columns:P,dataSource:v,pagination:{pageSize:7}}),o&&(0,p.jsx)(h,{showBusForm:o,setShowBusForm:c,type:N?"edit":"add",selectedBus:N,setSelectedBus:k,getData:I})]})]})]})}}}]);
//# sourceMappingURL=164.11f8ca7f.chunk.js.map