(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{315:function(t,e,n){(function(e){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";function r(){return window.google&&window.google.charts?Promise.resolve(window.google.charts):(l||(l=new Promise((function(t){var script=document.createElement("script");script.type="text/javascript",script.onload=function(){return t(window.google.charts)},script.src=c,document.body.appendChild(script)}))),l)}e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"current",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r().then((function(n){if("object"!==(void 0===e?"undefined":o(e)))throw new Error("Google Charts loader: settings must be an object");var r=t+"_"+JSON.stringify(e,Object.keys(e).sort());if(f.has(r))return f.get(r);var c=new Promise((function(r){n.load(t,e),n.setOnLoadCallback((function(){return r(window.google)}))}));return f.set(r,c),c}))};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c="https://www.gstatic.com/charts/loader.js",l=null,f=new Map},function(t,e,n){var r=n(5)(n(4),n(6),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n){function r(){var d=Date.now()-f;d<e&&d>=0?o=setTimeout(r,e-d):(o=null,n||(h=t.apply(l,c),l=c=null))}var o,c,l,f,h;null==e&&(e=100);var d=function(){l=this,c=arguments,f=Date.now();var d=n&&!o;return o||(o=setTimeout(r,e)),d&&(h=t.apply(l,c),l=c=null),h};return d.clear=function(){o&&(clearTimeout(o),o=null)},d.flush=function(){o&&(h=t.apply(l,c),l=c=null,clearTimeout(o),o=null)},d}},function(t,n,r){"use strict";function o(t){t.component("GChart",f.a)}Object.defineProperty(n,"__esModule",{value:!0}),n.install=o;var c=r(0),l=r(1),f=r.n(l);r.d(n,"loadGoogleCharts",(function(){return c.a})),r.d(n,"GChart",(function(){return f.a}));var h={version:"0.3.3",install:o};n.default=h;var d=null;"undefined"!=typeof window?d=window.Vue:void 0!==e&&(d=e.Vue),d&&d.use(h)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(2),c=n.n(o),l=function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var e=[],n=!0,r=!1,o=void 0;try{for(var c,l=t[Symbol.iterator]();!(n=(c=l.next()).done)&&(e.push(c.value),!i||e.length!==i);n=!0);}catch(t){r=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw o}}return e}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")},f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=null;e.default={name:"GChart",props:{type:{type:String},data:{type:[Array,Object],default:function(){return[]}},options:{type:Object,default:function(){return{}}},version:{type:String,default:"current"},settings:{type:Object,default:function(){return{packages:["corechart","table"]}}},events:{type:Object},createChart:{type:Function},resizeDebounce:{type:Number,default:200}},data:function(){return{chartObject:null}},watch:{data:{deep:!0,handler:function(){this.drawChart()}},options:{deep:!0,handler:function(){this.drawChart()}},type:function(t){this.createChartObject(),this.drawChart()}},mounted:function(){var t=this;n.i(r.a)(this.version,this.settings).then((function(e){h=e;var n=t.createChartObject();t.$emit("ready",n,e),t.drawChart()})),this.resizeDebounce>0&&window.addEventListener("resize",c()(this.drawChart,this.resizeDebounce))},beforeDestroy:function(){this.chartObject&&"function"==typeof this.chartObject.clearChart&&this.chartObject.clearChart()},methods:{drawChart:function(){if(h&&this.chartObject){var data=this.getValidChartData();data&&this.chartObject.draw(data,this.options)}},getValidChartData:function(){return this.data instanceof h.visualization.DataTable||this.data instanceof h.visualization.DataView?this.data:Array.isArray(this.data)?h.visualization.arrayToDataTable(this.data):null!==this.data&&"object"===f(this.data)?new h.visualization.DataTable(this.data):null},createChartObject:function(){var t=this.createChart||function(t,e,n){if(!n)throw new Error("please, provide chart type property");return new e.visualization[n](t)};return this.chartObject=t(this.$refs.chart,h,this.type),this.attachListeners(),this.chartObject},attachListeners:function(){var t=this;this.events&&Object.entries(this.events).forEach((function(e){var n=l(e,2),r=n[0],o=n[1];h.visualization.events.addListener(t.chartObject,r,o)}))}}}},function(t,e){t.exports=function(t,e,n,r){var o,c=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,c=t.default);var f="function"==typeof c?c.options:c;if(e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns),n&&(f._scopeId=n),r){var h=f.computed||(f.computed={});Object.keys(r).forEach((function(t){var e=r[t];h[t]=function(){return e}}))}return{esModule:o,exports:c,options:f}}},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"chart"})},staticRenderFns:[]}}])}).call(this,n(56))},316:function(t,e,n){"use strict";var r=n(315);n.o(r,"GChart")&&n.d(e,"GChart",(function(){return r.GChart}))},318:function(t,e,n){"use strict";n.r(e);var r={components:{GChart:n(316).GChart},middleware:[],props:{data:{type:Array,required:!1,default:[]},chartOptions:{type:Object,required:!1,default:{}}},data:function(){return{chartType:"LineChart"}},watch:{},computed:{},created:function(){},beforeMount:function(){},mounted:function(){},beforeDestroy:function(){},methods:{}},o=n(78),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("GChart",{attrs:{type:t.chartType,data:t.data,options:t.chartOptions,createChart:function(t,e,n){return new e.visualization[n](t)}}})}),[],!1,null,"fc8b1356",null);e.default=component.exports}}]);