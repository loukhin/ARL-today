(function(t){function e(e){for(var a,l,o=e[0],r=e[1],c=e[2],u=0,m=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&m.push(s[l][0]),s[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,o=1;o<i.length;o++){var r=i[o];0!==s[r]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=i[0]))}return t}var a={},s={app:0},n=[];function l(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=a,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(i,a,function(e){return t[e]}.bind(null,a));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/arl-today/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=r;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0dd2":function(t,e,i){},"2f63":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);var a=i("2b0e"),s=i("5f5b"),n=(i("f9e3"),i("2dd8"),i("8e5f")),l=i.n(n),o=i("8c4f"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isMobileOnly?i("Mobile"):i("Desktop")],1)},c=[],d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container-fluid py-3",attrs:{id:"app-header"}},[i("div",{staticClass:"container text-center mt-4"},[i("h4",{staticClass:"text-white"},[t._v("ARL Today")]),null!=t.trainTo&&null!=t.nextStation?i("div",{staticClass:"my-2"},[i("div",{staticClass:"display-4 font-weight-lighter"},[t._v(t._s(t.schedules[0]))]),i("div",[t._v("Train to "+t._s(t.station.options[t.trainTo-1].text))]),i("div",[t._v("Next station : "+t._s(t.station.options[t.nextStation-1].text))]),i("div",{staticClass:"font-weight-lighter align-self-center mb-2",attrs:{id:"text-price"}},[t._v("Price: "+t._s(t.price)+" THB")])]):t._e(),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mt-2 mb-n5"},[i("div",{staticClass:"bg-light rounded shadow px-4 py-3",attrs:{id:"app-box"}},[i("multiselect",{staticClass:"my-2",attrs:{placeholder:"Current",options:t.originData,label:"text",searchable:!1,"show-labels":!1,allowEmpty:!1},model:{value:t.station.from,callback:function(e){t.$set(t.station,"from",e)},expression:"station.from"}}),i("multiselect",{staticClass:"my-2",attrs:{placeholder:"Destination",options:t.destinationData,label:"text",searchable:!1,"show-labels":!1,allowEmpty:!1},model:{value:t.station.to,callback:function(e){t.$set(t.station,"to",e)},expression:"station.to"}}),i("multiselect",{staticClass:"my-2",attrs:{placeholder:"Time",options:t.time.options,searchable:!1,"show-labels":!1,allowEmpty:!1},model:{value:t.time.selected,callback:function(e){t.$set(t.time,"selected",e)},expression:"time.selected"}}),"Current Time"!==this.time.selected?i("div",{staticClass:"form-check"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.time.isHoliday,expression:"time.isHoliday"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"isHoliday"},domProps:{checked:Array.isArray(t.time.isHoliday)?t._i(t.time.isHoliday,null)>-1:t.time.isHoliday},on:{change:function(e){var i=t.time.isHoliday,a=e.target,s=!!a.checked;if(Array.isArray(i)){var n=null,l=t._i(i,n);a.checked?l<0&&t.$set(t.time,"isHoliday",i.concat([n])):l>-1&&t.$set(t.time,"isHoliday",i.slice(0,l).concat(i.slice(l+1)))}else t.$set(t.time,"isHoliday",s)}}}),i("label",{staticClass:"form-check-label",attrs:{for:"isHoliday"}},[t._v("Holiday")])]):t._e()],1)])])])]),null!==t.trainTo&&null!==t.nextStation?i("div",[t._m(0),t._l(t.schedules,(function(e,a){return i("div",{key:a,staticClass:"container-fluid py-2",class:{"bg-white":t.stripeBackground(a)}},[i("div",{staticClass:"container py-1"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-4"},[i("span",{staticClass:"h2 font-weight-lighter"},[t._v(t._s(e))])]),i("div",{staticClass:"col-8 text-right my-auto"},[i("span",{staticClass:"font-weight-bold text-middle"},[t._v(t._s(t.timeRemaining(e)))]),i("span",[t._v(t._s("--:--"!==e?" Remaining":"No train in 1 hour ahead"))])])])])])}))],2):t._e()])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid pt-5 mb-2"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-uppercase font-weight-bold",attrs:{id:"dashboard-title"}},[t._v("Incoming Train")])])])}],m=i("bc3a"),h=i.n(m),p={data(){return{trainTo:null,nextStation:null,station:{from:"",to:"",options:[{value:1,text:"Suvarnabhumi"},{value:2,text:"Ladkrabang"},{value:3,text:"Ban Thap Chang"},{value:4,text:"Hua Mak"},{value:5,text:"Ramkhamhaeng"},{value:6,text:"Makkasan"},{value:7,text:"Ratchaprarop"},{value:8,text:"Phaya Thai"}]},time:{selected:"Current Time",isHoliday:!1,options:["Current Time","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","00:00"]},schedules:[],price:null}},computed:{originData(){return this.station.options.filter(t=>{if(t.value!==this.station.to.value)return t})},destinationData(){return this.station.options.filter(t=>{if(t.value!==this.station.from.value)return t})}},methods:{doEstimate(){let t=this.station.from.value,e=this.station.to.value;if(t===e)return;e>t?(this.trainTo=8,this.nextStation=t+1):e<t&&(this.trainTo=1,this.nextStation=t-1);let i,a=this.time.isHoliday?"holiday":"weekday",s=this.time.selected;i="Current Time"===s?`https://app.loukhin.com/arl-today/api/get/${t}/${e}/now`:`https://app.loukhin.com/arl-today/api/get/${t}/${e}/${s}/${a}`,h.a.get(i).then(t=>{this.schedules=0!==t.data.time.length?t.data.time:["--:--"],this.price=t.data.price})},timeRemaining(t){if("--:--"===t)return;let e,i=t.split(":")[0],a=t.split(":")[1],s=new Date((new Date).setHours(i,a,0)-(new Date).setSeconds(0));return s.getUTCHours()>=1?(s=s.getUTCHours(),e=`${s} ${s>1?"hours":"hour"}`):(s=s.getMinutes(),e=`${s} ${s>1?"mins":"min"}`),e},stripeBackground(t){return t%2===0}},watch:{station:{handler(){let t=this.station.from.value,e=this.station.to.value;t!==e&&"undefined"!==typeof t&&"undefined"!==typeof e&&this.doEstimate()},deep:!0},time:{handler(){let t=this.station.from.value,e=this.station.to.value;t!==e&&"undefined"!==typeof t&&"undefined"!==typeof e&&this.doEstimate()},deep:!0}}},f=p,v=(i("59ee"),i("8421")),y=Object(v["a"])(f,d,u,!1,null,"74ae5270",null),g=y.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex flex-column justify-content-start",attrs:{id:"app-container"}},[t._m(0),i("div",{staticClass:"container row mx-auto justify-content-center"},[i("div",{staticClass:"col-md-5 row p-0 m-auto m-md-0 mr-md-2"},[null!=t.trainTo&&null!=t.nextStation?i("div",{staticClass:"col-12 d-flex flex-column justify-content-center align-self-center text-white"},[i("div",{staticClass:"display-3 font-weight-lighter align-self-center"},[t._v(t._s(t.schedules[0]))]),i("div",{staticClass:"align-self-center"},[t._v("Train to "+t._s(t.station.options[t.trainTo-1].text))]),i("div",{staticClass:"align-self-center"},[t._v("Next station : "+t._s(t.station.options[t.nextStation-1].text))]),i("div",{staticClass:"font-weight-lighter align-self-center mb-2",attrs:{id:"text-price"}},[t._v("Price: "+t._s(t.price)+" THB")])]):t._e(),i("div",{staticClass:"col-12 p-3 card shadow d-flex align-self-end",attrs:{id:"app-box"}},[i("multiselect",{staticClass:"my-1",attrs:{placeholder:"Current",options:t.originData,label:"text",searchable:!1,"show-labels":!1,allowEmpty:!1},model:{value:t.station.from,callback:function(e){t.$set(t.station,"from",e)},expression:"station.from"}}),i("multiselect",{staticClass:"my-1",attrs:{placeholder:"Destination",options:t.destinationData,label:"text",searchable:!1,"show-labels":!1,allowEmpty:!1},model:{value:t.station.to,callback:function(e){t.$set(t.station,"to",e)},expression:"station.to"}}),i("multiselect",{staticClass:"my-1",attrs:{placeholder:"Time",options:t.time.options,searchable:!1,"show-labels":!1,allowEmpty:!1},model:{value:t.time.selected,callback:function(e){t.$set(t.time,"selected",e)},expression:"time.selected"}}),"Current Time"!==this.time.selected?i("div",{staticClass:"form-check mx-auto"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.time.isHoliday,expression:"time.isHoliday"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"isHoliday"},domProps:{checked:Array.isArray(t.time.isHoliday)?t._i(t.time.isHoliday,null)>-1:t.time.isHoliday},on:{change:function(e){var i=t.time.isHoliday,a=e.target,s=!!a.checked;if(Array.isArray(i)){var n=null,l=t._i(i,n);a.checked?l<0&&t.$set(t.time,"isHoliday",i.concat([n])):l>-1&&t.$set(t.time,"isHoliday",i.slice(0,l).concat(i.slice(l+1)))}else t.$set(t.time,"isHoliday",s)}}}),i("label",{staticClass:"form-check-label",attrs:{for:"isHoliday"}},[t._v("Holiday")])]):t._e()],1)]),i("div",{staticClass:"col-md-6 card shadow p-0 ml-md-2 mt-3 mt-md-0",class:{"align-self-start":null===t.trainTo&&null===t.nextStation}},[t._m(1),t._l(t.schedules,(function(e,a){return i("div",{key:e.index,staticClass:"container-fluid py-2",class:{"bg-light":t.stripeBackground(a)}},[i("div",{staticClass:"container py-1"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-4"},[i("span",{staticClass:"h2 font-weight-lighter"},[t._v(t._s(e))])]),i("div",{staticClass:"col-8 text-right my-auto"},[i("span",{staticClass:"font-weight-bold text-middle"},[t._v(t._s(t.timeRemaining(e)))]),i("span",[t._v(t._s("--:--"!==e?" Remaining":"No train in 1 hour ahead"))])])])])])}))],2)])])},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mb-4 align-self-center"},[i("span",{staticClass:"font-weight-lighter display-4 text-white"},[t._v("ARL Today")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-2 mx-3"},[i("div",{staticClass:"text-uppercase font-weight-bold",attrs:{id:"dashboard-title"}},[t._v("Incoming Train")])])}],C={data(){return{trainTo:null,nextStation:null,station:{from:"",to:"",options:[{value:1,text:"Suvarnabhumi"},{value:2,text:"Ladkrabang"},{value:3,text:"Ban Thap Chang"},{value:4,text:"Hua Mak"},{value:5,text:"Ramkhamhaeng"},{value:6,text:"Makkasan"},{value:7,text:"Ratchaprarop"},{value:8,text:"Phaya Thai"}]},time:{selected:"Current Time",isHoliday:!1,options:["Current Time","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","00:00"]},schedules:[],price:null}},computed:{originData(){return this.station.options.filter(t=>{if(t.value!==this.station.to.value)return t})},destinationData(){return this.station.options.filter(t=>{if(t.value!==this.station.from.value)return t})}},methods:{doEstimate(){let t=this.station.from.value,e=this.station.to.value;if(t===e)return;e>t?(this.trainTo=8,this.nextStation=t+1):e<t&&(this.trainTo=1,this.nextStation=t-1);let i,a=this.time.isHoliday?"holiday":"weekday",s=this.time.selected;i="Current Time"===s?`https://app.loukhin.com/arl-today/api/get/${t}/${e}/now`:`https://app.loukhin.com/arl-today/api/get/${t}/${e}/${s}/${a}`,h.a.get(i).then(t=>{this.schedules=0!==t.data.time.length?t.data.time:["--:--"],this.price=t.data.price})},timeRemaining(t){if("--:--"===t)return;let e,i=t.split(":")[0],a=t.split(":")[1],s=new Date((new Date).setHours(i,a,0)-(new Date).setSeconds(0));return s.getUTCHours()>=1?(s=s.getUTCHours(),e=`${s} ${s>1?"hours":"hour"}`):(s=s.getMinutes(),e=`${s} ${s>1?"mins":"min"}`),e},stripeBackground(t){return t%2===0}},watch:{station:{handler(){let t=this.station.from.value,e=this.station.to.value;t!==e&&"undefined"!==typeof t&&"undefined"!==typeof e&&this.doEstimate()},deep:!0},time:{handler(){let t=this.station.from.value,e=this.station.to.value;t!==e&&"undefined"!==typeof t&&"undefined"!==typeof e&&this.doEstimate()},deep:!0}}},_=C,w=(i("a995"),Object(v["a"])(_,b,x,!1,null,"ceb50730",null)),k=w.exports,T=i("9029"),$={data(){return{isMobileOnly:T["isMobileOnly"]}},components:{Mobile:g,Desktop:k}},H=$,S=Object(v["a"])(H,r,c,!1,null,null,null),E=S.exports;a["default"].use(o["a"]);const D=new o["a"]({mode:"history",base:"arl-today",routes:[{path:"/",name:"dashboard",component:E}]});var O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")},j=[],M=(i("60bc"),i("b0a0"),{}),P=Object(v["a"])(M,O,j,!1,null,null,null),R=P.exports;a["default"].use(s["a"]),a["default"].component("multiselect",l.a),new a["default"]({el:"#app",router:D,render:t=>t(R)})},"59ee":function(t,e,i){"use strict";var a=i("2f63"),s=i.n(a);s.a},"5da5":function(t,e,i){},a995:function(t,e,i){"use strict";var a=i("0dd2"),s=i.n(a);s.a},b0a0:function(t,e,i){"use strict";var a=i("5da5"),s=i.n(a);s.a}});