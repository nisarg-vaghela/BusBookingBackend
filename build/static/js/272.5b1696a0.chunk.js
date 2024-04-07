"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[272],{3272:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(4165),a=r(5861),c=r(9439),s=r(2791),l=r(9434),o=r(1044),i=r(5014),u=r(3695),d=r(6106),f=r(914),p=r(7689),x=r(3433),m=r(184);var h=function(e){var t=e.selectedSeats,r=e.setSelectedSeats,n=e.bus,a=n.capacity;return(0,m.jsx)("div",{className:"m-5",children:(0,m.jsx)("div",{className:"w-[300px] border-2 text-xl font-bold border-blue-500 rounded p-[10px]",children:(0,m.jsx)(d.Z,{gutter:[10,10],children:Array.from(Array(a).keys()).map((function(e,a){var c="btn btn-circle btn-outline bg-white cursor-pointer hover:bg-blue-600";return t.includes(e+1),t.includes(e+1)?c="btn btn-circle btn-outline bg-blue-500 cursor-pointer ":n.seatsBooked.includes(e+1)&&(c="btn btn-circle btn-outline bg-red-500 pointer-events-none cursor-not-allowed"),(0,m.jsx)(f.Z,{span:6,children:(0,m.jsx)("div",{className:"flex justify-center items-center",children:(0,m.jsx)("div",{className:"border-[1px] text-black p-3 ".concat(c),onClick:function(){var n;n=e+1,t.includes(n)?r(t.filter((function(e){return e!==n}))):r([].concat((0,x.Z)(t),[n]))},children:e+1})})},a)}))})})})},b=r(4270),v=r(2426),Z=r.n(v);var g=function(){var e=(0,p.s0)(),t=(0,s.useState)([]),r=(0,c.Z)(t,2),x=r[0],v=r[1],g=(0,p.UO)(),j=(0,l.I0)(),y=(0,s.useState)(null),N=(0,c.Z)(y,2),w=N[0],k=N[1],C=(0,s.useCallback)((0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j((0,i.YC)()),e.next=4,o.Z.get("/api/buses/".concat(g.id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:t=e.sent,j((0,i.Ir)()),t.data.success?k(t.data.data):u.ZP.error(t.data.message),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),j((0,i.Ir)()),u.ZP.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),[j,g.id]),S=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,j((0,i.YC)()),t.next=4,o.Z.post("/api/bookings/book-seat/".concat(localStorage.getItem("user_id")),{bus:w._id,seats:x},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 4:r=t.sent,j((0,i.Ir)()),r.data.success?(u.ZP.success(r.data.message),e("/bookings")):u.ZP.error(r.data.message),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),j((0,i.Ir)()),u.ZP.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return(0,s.useEffect)((function(){C()}),[C]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b.q,{children:(0,m.jsx)("title",{children:"Book Now"})}),(0,m.jsx)("div",{children:w&&(0,m.jsxs)(d.Z,{className:"m-3 p-5",gutter:[30,30],children:[(0,m.jsxs)(f.Z,{lg:12,xs:24,sm:24,children:[(0,m.jsx)("h1",{className:"font-extrabold text-2xl text-blue-500",children:w.name}),(0,m.jsxs)("h1",{className:"text-2xl font-bold",children:[w.from," - ",w.to]}),(0,m.jsx)("hr",{className:"border-black"}),(0,m.jsxs)("div",{className:"flex flex-col gap-1 ",children:[(0,m.jsxs)("h1",{className:"text-lg",children:[(0,m.jsx)("b",{className:"text-blue-600 italic",children:"Journey Date : "}),(0,m.jsx)("span",{className:"",children:w.journeyDate})]}),(0,m.jsxs)("h1",{className:"text-lg",children:[(0,m.jsx)("b",{className:"text-blue-600 italic",children:"Price :"})," INR ",w.price," ","/-"]}),(0,m.jsxs)("h1",{className:"text-lg",children:[(0,m.jsx)("b",{className:"text-blue-600 italic",children:"Departure Time"})," :"," ",Z()(w.departure,"HH:mm").format("hh:mm A")]}),(0,m.jsxs)("h1",{className:"text-lg",children:[(0,m.jsx)("b",{className:"text-blue-600 italic",children:"Arrival Time"})," :"," ",Z()(w.arrival,"HH:mm").format("hh:mm A")]})]}),(0,m.jsx)("hr",{className:"border-black"}),(0,m.jsxs)("div",{className:"flex w-60 flex-col ",children:[(0,m.jsxs)("h1",{className:"text-lg mt-2 font-bold",children:[(0,m.jsx)("span",{className:"text-blue-600 italic",children:"Capacity : "})," ",(0,m.jsx)("p",{children:w.capacity})]}),(0,m.jsxs)("h1",{className:"text-lg font-bold",children:[(0,m.jsx)("span",{className:"text-blue-600 italic",children:"Seats Left : "})," ",(0,m.jsx)("p",{children:w.capacity-w.seatsBooked.length})]})]}),(0,m.jsx)("hr",{className:"border-black"}),(0,m.jsxs)("div",{className:"flex flex-col gap-2 w-48 ",children:[(0,m.jsxs)("h1",{className:"text-xl",children:[(0,m.jsx)("b",{className:"text-blue-600 italic",children:"Selected Seats : "})," ",x.join(", ")]}),(0,m.jsxs)("h1",{className:"text-xl mt-2 mb-3",children:[(0,m.jsx)("b",{className:"text-blue-600 italic",children:" Price :"})," INR"," ",w.price*x.length]}),(0,m.jsx)("button",{className:"".concat(0===x.length?"animate-none cursor-not-allowed btn btn-primary py-2 px-5 rounded-full btn-disabled text-white":"animate-bounce btn btn-primary py-2 px-5 rounded-full bg-blue-600 hover:bg-blue-800 hover:duration-300 text-white"),onClick:S,children:"Pay Now"})]})]}),(0,m.jsx)(f.Z,{lg:12,xs:24,sm:24,children:(0,m.jsx)(h,{selectedSeats:x,setSelectedSeats:v,bus:w})})]})})]})}},6096:function(e,t,r){r.d(t,{fk:function(){return s},jD:function(){return c}});var n,a=r(4937),c=function(){return(0,a.Z)()&&window.document.documentElement},s=function(){if(!c())return!1;if(void 0!==n)return n;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=1===e.scrollHeight,document.body.removeChild(e),n}},914:function(e,t,r){var n=r(9752);t.Z=n.Z},9426:function(e,t,r){var n=(0,r(2791).createContext)({});t.Z=n},9752:function(e,t,r){var n=r(4942),a=r(7462),c=r(1002),s=r(1694),l=r.n(s),o=r(2791),i=r(1929),u=r(9426),d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};var f=["xs","sm","md","lg","xl","xxl"],p=o.forwardRef((function(e,t){var r,s=o.useContext(i.E_),p=s.getPrefixCls,x=s.direction,m=o.useContext(u.Z),h=m.gutter,b=m.wrap,v=m.supportFlexGap,Z=e.prefixCls,g=e.span,j=e.order,y=e.offset,N=e.push,w=e.pull,k=e.className,C=e.children,S=e.flex,O=e.style,P=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),E=p("col",Z),A={};f.forEach((function(t){var r,s={},l=e[t];"number"===typeof l?s.span=l:"object"===(0,c.Z)(l)&&(s=l||{}),delete P[t],A=(0,a.Z)((0,a.Z)({},A),(r={},(0,n.Z)(r,"".concat(E,"-").concat(t,"-").concat(s.span),void 0!==s.span),(0,n.Z)(r,"".concat(E,"-").concat(t,"-order-").concat(s.order),s.order||0===s.order),(0,n.Z)(r,"".concat(E,"-").concat(t,"-offset-").concat(s.offset),s.offset||0===s.offset),(0,n.Z)(r,"".concat(E,"-").concat(t,"-push-").concat(s.push),s.push||0===s.push),(0,n.Z)(r,"".concat(E,"-").concat(t,"-pull-").concat(s.pull),s.pull||0===s.pull),(0,n.Z)(r,"".concat(E,"-rtl"),"rtl"===x),r))}));var I=l()(E,(r={},(0,n.Z)(r,"".concat(E,"-").concat(g),void 0!==g),(0,n.Z)(r,"".concat(E,"-order-").concat(j),j),(0,n.Z)(r,"".concat(E,"-offset-").concat(y),y),(0,n.Z)(r,"".concat(E,"-push-").concat(N),N),(0,n.Z)(r,"".concat(E,"-pull-").concat(w),w),r),k,A),B={};if(h&&h[0]>0){var R=h[0]/2;B.paddingLeft=R,B.paddingRight=R}if(h&&h[1]>0&&!v){var D=h[1]/2;B.paddingTop=D,B.paddingBottom=D}return S&&(B.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(S),!1!==b||B.minWidth||(B.minWidth=0)),o.createElement("div",(0,a.Z)({},P,{style:(0,a.Z)((0,a.Z)({},B),O),className:I,ref:t}),C)}));t.Z=p},590:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(7462),a=r(4942),c=r(1002),s=r(9439),l=r(1694),o=r.n(l),i=r(2791),u=r(1929),d=r(6096),f=r(8295),p=r(9393),x=r(9426),m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};(0,p.b)("top","middle","bottom","stretch"),(0,p.b)("start","end","center","space-around","space-between","space-evenly");var h=i.forwardRef((function(e,t){var r,l=e.prefixCls,p=e.justify,h=e.align,b=e.className,v=e.style,Z=e.children,g=e.gutter,j=void 0===g?0:g,y=e.wrap,N=m(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=i.useContext(u.E_),k=w.getPrefixCls,C=w.direction,S=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),O=(0,s.Z)(S,2),P=O[0],E=O[1],A=function(){var e=i.useState(!1),t=(0,s.Z)(e,2),r=t[0],n=t[1];return i.useEffect((function(){n((0,d.fk)())}),[]),r}(),I=i.useRef(j);i.useEffect((function(){var e=f.ZP.subscribe((function(e){var t=I.current||0;(!Array.isArray(t)&&"object"===(0,c.Z)(t)||Array.isArray(t)&&("object"===(0,c.Z)(t[0])||"object"===(0,c.Z)(t[1])))&&E(e)}));return function(){return f.ZP.unsubscribe(e)}}),[]);var B=k("row",l),R=function(){var e=[void 0,void 0];return(Array.isArray(j)?j:[j,void 0]).forEach((function(t,r){if("object"===(0,c.Z)(t))for(var n=0;n<f.c4.length;n++){var a=f.c4[n];if(P[a]&&void 0!==t[a]){e[r]=t[a];break}}else e[r]=t})),e}(),D=o()(B,(r={},(0,a.Z)(r,"".concat(B,"-no-wrap"),!1===y),(0,a.Z)(r,"".concat(B,"-").concat(p),p),(0,a.Z)(r,"".concat(B,"-").concat(h),h),(0,a.Z)(r,"".concat(B,"-rtl"),"rtl"===C),r),b),H={},G=null!=R[0]&&R[0]>0?R[0]/-2:void 0,T=null!=R[1]&&R[1]>0?R[1]/-2:void 0;if(G&&(H.marginLeft=G,H.marginRight=G),A){var _=(0,s.Z)(R,2);H.rowGap=_[1]}else T&&(H.marginTop=T,H.marginBottom=T);var F=(0,s.Z)(R,2),L=F[0],z=F[1],W=i.useMemo((function(){return{gutter:[L,z],wrap:y,supportFlexGap:A}}),[L,z,y,A]);return i.createElement(x.Z.Provider,{value:W},i.createElement("div",(0,n.Z)({},N,{className:D,style:(0,n.Z)((0,n.Z)({},H),v),ref:t}),Z))}))},6106:function(e,t,r){var n=r(590);t.Z=n.Z}}]);
//# sourceMappingURL=272.5b1696a0.chunk.js.map