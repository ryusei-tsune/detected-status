(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{376:function(t,e,n){"use strict";n.r(e);n(221);var o={components:{},middleware:[],props:{index:{type:Number,required:!0}},data:function(){return{isOpen:!1,newName:""}},watch:{},computed:{},created:function(){},beforeMount:function(){},mounted:function(){},beforeDestroy:function(){},methods:{EditName:function(){this.$emit("EditName",this.newName,this.index),this.isOpen=!1}}},c=n(78),l=n(102),r=n.n(l),d=n(377),v=n(328),m=n(321),f=n(423),w=n(438),h=n(359),x=n(428),_=n(435),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,c=e.attrs;return[n("v-card-text",{staticClass:"d-flex justify-end"},[n("v-btn",t._g(t._b({attrs:{"x-small":""}},"v-btn",c,!1),o),[n("v-icon",{attrs:{small:""}},[t._v("mdi-pencil")])],1)],1)]}}]),model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[t._v(" "),n("v-card",{attrs:{width:"600",height:"100"}},[n("v-row",{staticClass:"ma-0",attrs:{justify:"end"}},[n("v-btn",{attrs:{icon:"",tile:""},on:{click:function(e){t.isOpen=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"9"}},[n("v-text-field",{attrs:{outlined:"",dense:"","hide-details":"auto",label:"New name"},model:{value:t.newName,callback:function(e){t.newName=e},expression:"newName"}})],1),t._v(" "),n("v-col",{attrs:{cols:"3"}},[n("div",{staticClass:"d-flex justify-end pr-4 pt-1"},[n("v-btn",{attrs:{small:""},on:{click:function(e){return t.EditName()}}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-autorenew")])],1)],1)])],1)],1)],1)],1)}),[],!1,null,"0842c29c",null);e.default=component.exports;r()(component,{VBtn:d.a,VCard:v.a,VCardText:m.a,VCol:f.a,VDialog:w.a,VIcon:h.a,VRow:x.a,VTextField:_.a})}}]);