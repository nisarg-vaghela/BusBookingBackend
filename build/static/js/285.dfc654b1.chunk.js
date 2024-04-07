"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[285],{285:function(e,r,t){t.r(r);var s=t(9439),a=t(4165),l=t(5861),o=t(2791),n=t(7689),i=t(1087),c=t(3695),u=t(1095),d=t(1044),p=t(9434),x=t(5014),m=t(4270),b=t(184);r.default=function(){var e=(0,n.s0)(),r=(0,p.I0)(),t=function(){var t=(0,l.Z)((0,a.Z)().mark((function t(s){var l;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.password===s.confirmPassword){t.next=3;break}return c.ZP.error("Password and Confirm Password must be same"),t.abrupt("return");case 3:return t.prev=3,r((0,x.YC)()),t.next=7,d.Z.post("/api/auth/create-user",s);case 7:l=t.sent,r((0,x.Ir)()),l.data.success?(c.ZP.success(l.data.message),e("/login")):c.ZP.error(l.data.message),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(3),r((0,x.Ir)()),c.ZP.error(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}(),f=(0,o.useState)(!1),h=(0,s.Z)(f,2),g=h[0],w=h[1],k=function(){w(!g)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.q,{children:(0,b.jsx)("title",{children:"Register"})}),(0,b.jsx)(u.Z,{onFinish:t,children:(0,b.jsxs)("div",{className:"h-screen flex",children:[(0,b.jsx)("div",{className:"hidden lg:flex w-full lg:w-3/4",style:{backgroundSize:"cover",backgroundImage:'url("https://wallpapercave.com/wp/wp6913872.jpg")',backgroundPosition:"center center",backgroundRepeat:"no-repeat"},children:(0,b.jsx)("div",{className:"flex items-center h-full w-full px-20 bg-gray-900 bg-opacity-40"})}),(0,b.jsx)("div",{className:"green bg-gradient-to-r flex w-full lg:w-1/2 justify-center items-center space-y-8",children:(0,b.jsxs)("div",{className:"w-3/4 px-8 md:px-32 lg:px-24",children:[(0,b.jsx)("div",{className:"flex flex-col items-center mb-10",children:(0,b.jsxs)(i.rU,{to:"/",className:"relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out border-2 border-blue-600 rounded-full shadow-md group",children:[(0,b.jsx)("span",{className:"absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease",children:(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})}),(0,b.jsx)("span",{className:"absolute flex items-center justify-center w-full h-full text-blue-600 transition-all duration-300 transform group-hover:translate-x-full ease",children:"Back"}),(0,b.jsx)("span",{className:"relative invisible",children:"Button Text"})]})}),(0,b.jsx)("h1",{className:"mb-8 text-5xl text-center font-bold italic",children:"Register"}),(0,b.jsx)(u.Z.Item,{name:"name",initialValue:"",rules:[{required:!0,message:"Please input your fullname!",validateTrigger:"onSubmit",validateFirst:!0}],children:(0,b.jsxs)("div",{className:"relative z-0 mb-6 w-full group",children:[(0,b.jsx)("input",{type:"text",name:"floating_fullname",id:"floating_fullname",className:"block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-blue-500 dark:focus:border-blue-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),(0,b.jsx)("label",{htmlFor:"floating_fullname",className:"absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Full Name"})]})}),(0,b.jsx)(u.Z.Item,{name:"email",initialValue:"",rules:[{required:!0,message:"Please input your email!",validateTrigger:"onSubmit"}],children:(0,b.jsxs)("div",{className:"relative z-0 mb-6 w-full group",children:[(0,b.jsx)("input",{type:"email",name:"floating_email",className:"block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-blue-500 dark:focus:border-blue-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),(0,b.jsx)("label",{htmlFor:"floating_email",className:"absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Email address"})]})}),(0,b.jsx)(u.Z.Item,{name:"password",initialValue:"",rules:[{required:!0,message:"Please input your password!",min:6,validateTrigger:"onSubmit"}],children:(0,b.jsxs)("div",{className:"relative z-0 mb-6 w-full group",children:[(0,b.jsx)("input",{type:g?"text":"password",name:"floating_password",className:"block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-blue-500 dark:focus:border-blue-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),(0,b.jsx)("label",{htmlFor:"floating_password",className:"absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Password"}),(0,b.jsx)("i",{className:"absolute right-0 top-0 mt-3 mr-4 text-black cursor-pointer",onClick:k,children:g?(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:(0,b.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})}):(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:[(0,b.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),(0,b.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})]})}),(0,b.jsx)(u.Z.Item,{name:"confirmPassword",initialValue:"",rules:[{required:!0,message:"Please input your password again!",min:6,validateTrigger:"onSubmit"}],children:(0,b.jsxs)("div",{className:"relative z-0 mb-6 w-full group",children:[(0,b.jsx)("input",{type:g?"text":"password",name:"floating_password",className:"block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-black dark:border-blue-500 dark:focus:border-blue-700 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),(0,b.jsx)("label",{htmlFor:"floating_password",className:"absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Confirm Password"}),(0,b.jsx)("i",{className:"absolute right-0 top-0 mt-3 mr-4 text-black cursor-pointer",onClick:k,children:g?(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:(0,b.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})}):(0,b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:[(0,b.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),(0,b.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})]})}),(0,b.jsx)("div",{className:"flex justify-center mb-5",children:(0,b.jsxs)("button",{type:"submit",className:"relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-bold rounded-full group",children:[(0,b.jsx)("span",{className:"w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"}),(0,b.jsx)("span",{className:"absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-600 opacity-100 group-hover:-translate-x-8"}),(0,b.jsx)("span",{className:"relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white",children:"Create Account"}),(0,b.jsx)("span",{className:"absolute inset-0 border-2 border-blue-600 rounded-full"})]})}),(0,b.jsxs)("p",{className:"text-center text-base text-gray-600 mt-4",children:["Already have an account?"," ",(0,b.jsx)(i.rU,{to:"/login",className:"text-blue-600 font-bold hover:text-blue-700",children:"Login"})]})]})})]})})]})}}}]);
//# sourceMappingURL=285.dfc654b1.chunk.js.map