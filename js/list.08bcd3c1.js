(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{"1a33":function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{attrs:{id:"list"}},[n("div",{staticClass:"p-2 h-auto m-auto"},[n("div",{staticClass:"row flex-nowrap container-fluid"},[n("b-form-input",{attrs:{placeholder:"...輸入代辦事項"},on:{keydown:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.addTodo(o)}},model:{value:t.newtodo,callback:function(o){t.newtodo=o},expression:"newtodo"}}),n("b-btn",{attrs:{id:"btn-add"},on:{click:t.addTodo}},[t._v("新增")])],1)]),n("b-table-simple",[n("b-thead",[n("b-tr",[n("b-th",[t._v("事項")]),n("b-th",[t._v("動作")])],1)],1),n("draggable",t._b({attrs:{tag:"tbody"},model:{value:t.todos,callback:function(o){t.todos=o},expression:"todos"}},"draggable",t.dragOption,!1),[0==t.todos.lenght?n("b-tr",[n("b-td",{attrs:{colspan:"2"}},[t._v("沒有資料")])],1):t._e(),t._l(t.todos,(function(o,e){return n("b-tr",{key:e},[n("b-td",[o.edit?n("b-form-input",{model:{value:o.model,callback:function(n){t.$set(o,"model",n)},expression:"todo.model"}}):t._e(),o.edit?n("b-btn",{staticClass:"text-danger",attrs:{variant:"link"},on:{click:function(o){return t.cancelTodo(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","undo"]}})],1):t._e(),o.edit?n("b-btn",{staticClass:"text-success",attrs:{variant:"link"},on:{click:function(o){return t.saveTodo(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","save"]}})],1):n("span",[t._v(t._s(o.name))])],1),n("b-td",[n("b-btn",{staticClass:"text-primary",attrs:{variant:"link"},on:{click:function(o){return t.editTodo(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","pen"]}})],1),n("b-btn",{staticClass:"text-danger",attrs:{variant:"link"},on:{click:function(o){return t.delTodo(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","times"]}})],1)],1)],1)}))],2)],1)],1)},a=[],s={data:function(){return{newtodo:"",dragOption:{animation:200}}},methods:{addTodo:function(){this.$store.commit("addTodo",this.newtodo),this.newtodo=""},delTodo:function(t){this.$store.commit("delTodo",t)},editTodo:function(t){this.$store.commit("editTodo",t)},cancelTodo:function(t){this.$store.commit("cancelTodo",t)},saveTodo:function(t){this.$store.commit("saveTodo",t)}},computed:{todos:{get:function(){return this.$store.getters.todos},set:function(t){this.$store.commit("dragTodo",t)}}}},i=s,d=n("2877"),c=Object(d["a"])(i,e,a,!1,null,null,null);o["default"]=c.exports}}]);
//# sourceMappingURL=list.08bcd3c1.js.map