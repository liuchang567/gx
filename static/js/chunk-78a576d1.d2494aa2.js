(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78a576d1"],{"0ccd":function(t,e,i){},"2f71":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"container"},[s("h3",{staticStyle:{"text-align":"center"}},[t._v("欢迎来到"+t._s(t.roomName))]),s("div",{staticClass:"room"},[s("div",{staticClass:"room-box"},[s("img",{staticClass:"img",attrs:{src:i("71d3")}}),s("div",{staticClass:"room-info"},[s("div",[t._v("负责人："+t._s(t.activeroom.teacther))]),s("div",[t._v("项目简介： "+t._s(t.activeroom.desc))]),s("div",[t._v(" 介绍视频 "),s("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary"}},[t._v("点击播放"),s("i",{staticClass:"el-icon-video-play el-icon--right"})]),s("el-button",{attrs:{type:"primary"},on:{click:t.onClick}},[t._v("题库"),s("i",{staticClass:"el-icon-upload el-icon--right"})])],1)])]),t._m(0),s("div",[s("h5",[t._v("课程：")]),s("el-timeline",t._l(t.activities,(function(e,i){return s("el-timeline-item",{key:i,attrs:{icon:e.icon,type:e.type,color:e.color,size:e.size,timestamp:e.timestamp}},[t._v(" "+t._s(e.content)+" "),s("i",{staticClass:"el-icon-video-play",staticStyle:{color:"#409EFF"}})])})),1)],1),t._m(1)])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h5",[t._v("目的意义：")]),i("div",[t._v("目的意义目的意义目的意义目的意目的意义：目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义：目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义目的意义")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h5",[t._v("成员：")]),i("div",[t._v("学员1，学员1，学员2，学员3，学员4，学员5")])])}],c=(i("b0c0"),i("4de4"),i("d3b7"),{data:function(){return{roomName:"",activeroom:{teacther:"",desc:""},list:[{no:"2023001",title:"教研001",author:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",pageviews:30,teacther:"侯芳",school:"左江学院",time:"2023-04-13 20:00:00",desc:"以中华崛起而读书， 富强、民主、文明、和谐 自由、平等、公正、法治 爱国、敬业、诚信、友善 富强 民主 文明 和谐"},{no:"2023002",title:"教研002",author:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",pageviews:50,teacther:"侯芳",school:"三江学院",time:"2023-04-13 20:00:00",desc:"以中华崛起而读书， 富强、民主、文明、和谐 自由、平等、公正、法治 爱国、敬业、诚信、友善 富强 民主 文明 和谐"},{no:"2023003",title:"教研003",author:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",pageviews:30,teacther:"吕立国",school:"左江学院",time:"2023-04-13 20:00:00",desc:"以中华崛起而读书， 富强、民主、文明、和谐 自由、平等、公正、法治 爱国、敬业、诚信、友善 富强 民主 文明 和谐"},{no:"2023004",title:"教研004",author:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",pageviews:30,teacther:"平小平",school:"交通学院",time:"2023-04-13 20:00:00",desc:"以中华崛起而读书， 富强、民主、文明、和谐 自由、平等、公正、法治 爱国、敬业、诚信、友善 富强 民主 文明 和谐"}],activities:[{content:"课1",timestamp:"2018-04-12 20:46",size:"large",type:"primary",icon:"el-icon-more"},{content:"课2",timestamp:"2018-04-13 20:46",color:"#0bbd87"},{content:"课3",timestamp:"2018-04-14 20:46",size:"large"},{content:"课4",timestamp:"2018-04-15 20:46"}]}},created:function(){var t=this;console.log(this.$route),this.fetchData(),this.roomName=this.$route.query.name,this.activeroom=this.list.filter((function(e){return e.title===t.roomName}))[0]},methods:{fetchData:function(t){var e=this;this.listLoading=!0,setTimeout((function(){e.list=e.$options.data().list,e.listLoading=!1}),800)},onAdd:function(){this.form={title:"",pageviews:"",school:""},this.dialogTitle="新增教研室",this.dialogVisible=!0},onEdit:function(t){this.form=t,this.dialogTitle="编辑教研室",this.dialogVisible=!0},onDeatil:function(){this.$alert("功能正在开发中......","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})},onRemove:function(t){var e=this;this.$alert("确定要删除该教研室吗？","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",callback:function(t){e.$message({type:"info",message:"action: ".concat(t)})}})},onClick:function(){this.$router.push({path:"/tableinfolist"})}}}),o=c,n=(i("be27"),i("2877")),r=Object(n["a"])(o,s,a,!1,null,"69211349",null);e["default"]=r.exports},"71d3":function(t,e){t.exports="data:image/png;base64,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"},be27:function(t,e,i){"use strict";i("0ccd")}}]);