(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{388:function(n,t){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},389:function(n,t,o){var r=o(30),v="["+o(388)+"]",c=RegExp("^"+v+v+"*"),f=RegExp(v+v+"*$"),a=function(n){return function(t){var o=String(r(t));return 1&n&&(o=o.replace(c,"")),2&n&&(o=o.replace(f,"")),o}};n.exports={start:a(1),end:a(2),trim:a(3)}},390:function(n,t,o){"use strict";var r=o(1),v=o(389).trim;r({target:"String",proto:!0,forced:o(392)("trim")},{trim:function(){return v(this)}})},392:function(n,t,o){var r=o(3),v=o(388);n.exports=function(n){return r((function(){return!!v[n]()||"​᠎"!="​᠎"[n]()||v[n].name!==n}))}},400:function(n,t,o){var r=o(5),v=o(122);n.exports=function(n,t,o){var c,f;return v&&"function"==typeof(c=t.constructor)&&c!==o&&r(f=c.prototype)&&f!==o.prototype&&v(n,f),n}},402:function(n,t,o){"use strict";var r=o(9),v=o(4),c=o(121),f=o(14),a=o(7),i=o(23),s=o(400),e=o(58),l=o(3),d=o(39),p=o(84).f,_=o(31).f,u=o(10).f,g=o(389).trim,h=v.Number,w=h.prototype,b="Number"==i(d(w)),m=function(n){var t,o,r,v,c,f,a,i,s=e(n,!1);if("string"==typeof s&&s.length>2)if(43===(t=(s=g(s)).charCodeAt(0))||45===t){if(88===(o=s.charCodeAt(2))||120===o)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:r=2,v=49;break;case 79:case 111:r=8,v=55;break;default:return+s}for(f=(c=s.slice(2)).length,a=0;a<f;a++)if((i=c.charCodeAt(a))<48||i>v)return NaN;return parseInt(c,r)}return+s};if(c("Number",!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var N,y=function(n){var t=arguments.length<1?0:n,o=this;return o instanceof y&&(b?l((function(){w.valueOf.call(o)})):"Number"!=i(o))?s(new h(m(t)),o,y):m(t)},E=r?p(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;E.length>I;I++)a(h,N=E[I])&&!a(y,N)&&u(y,N,_(h,N));y.prototype=w,w.constructor=y,f(v,"Number",y)}},421:function(n,t,o){},422:function(n,t,o){},423:function(n,t,o){},470:function(n,t,o){"use strict";var r=o(421);o.n(r).a},471:function(n,t,o){"use strict";var r=o(422);o.n(r).a},472:function(n,t,o){"use strict";var r=o(423);o.n(r).a},488:function(n,t,o){"use strict";o.r(t);o(57),o(82),o(390),o(119),o(402),o(120);var r={name:"fliRow",props:{gutter:{type:[Number,String]}},computed:{rowStyle:function(){var n=this.gutter;return{marginLeft:-n/2+"px",marginRight:-n/2+"px"}}},mounted:function(){var n=this;this.$children.forEach((function(t){t.gutter=n.gutter}))}},v=(o(470),o(56)),c=Object(v.a)(r,(function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"row",style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"34208b6c",null).exports,f=(o(224),o(220),o(123),o(54)),a=function(n){var t=Object.keys(n),o=!0;return t.forEach((function(n){["span","offset"].includes(n)||(o=!1)})),o},i={name:"fliCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},iPad:{type:Object,validator:a},narrowPc:{type:Object,validator:a},pc:{type:Object,validator:a},widePc:{type:Object,validator:a}},data:function(){return{gutter:0}},methods:{createClasses:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!n)return[];var o=[];return n.span&&o.push("col-".concat(t).concat(n.span)),n.offset&&o.push("offset-".concat(t).concat(n.offset)),o}},computed:{colClass:function(){var n=this.span,t=this.offset,o=this.iPad,r=this.narrowPc,v=this.pc,c=this.widePc,a=this.createClasses;return[].concat(Object(f.a)(a({span:n,offset:t})),Object(f.a)(a(o,"iPad-")),Object(f.a)(a(r,"narrowPc-")),Object(f.a)(a(v,"pc-")),Object(f.a)(a(c,"widePc-")))},colStyle:function(){return{paddingRight:this.gutter/2+"px",paddingLeft:this.gutter/2+"px"}}}},s=(o(471),{components:{"f-row":c,"f-col":Object(v.a)(i,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[t("div",[this._t("default")],2)])}),[],!1,null,"066048a4",null).exports},data:function(){return{content:'\n    * {\n    box-sizing: border-box;\n     }\n    <f-row align="center">\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n    </f-row>\n    <f-row align="center">\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n    </f-row>\n    <f-row align="center">\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n    </f-row>\n    <f-row align="center">\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n    </f-row>\n  '.replace(/\s{2,}/,"").trim(),content1:'\n     <f-row align="center" gutter="10">\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n    </f-row>\n    <f-row align="center" gutter="10">\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6">\n            <div>6</div>\n        </f-col>\n    </f-row>'.replace(/\s{2,}/,"").trim(),content2:'\n            <f-row gutter="10" align="center">\n        <f-col span="8">\n            <div>8</div>\n        </f-col>\n        <f-col span="8" offset="8">\n            <div>8</div>\n        </f-col>\n    </f-row>\n    <f-row gutter="10" align="center">\n        <f-col span="6" offset="6">\n            <div>6</div>\n        </f-col>\n        <f-col span="6" offset="6">\n            <div>6</div>\n        </f-col>\n    </f-row>\n    <f-row gutter="10" align="center">\n        <f-col span="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4" offset="4">\n            <div>4</div>\n        </f-col>\n        <f-col span="4" offset="8">\n            <div>4</div>\n        </f-col>\n    </f-row>\n    <f-row gutter="10" align="center">\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2" offset="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2" offset="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2" offset="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2">\n            <div>2</div>\n        </f-col>\n        <f-col span="2" offset="2">\n            <div>2</div>\n        </f-col>\n    </f-row>\n            '.replace(/\s{2,}/,"").trim()}}}),e=(o(472),Object(v.a)(s,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("h3",[n._v("24网格")]),n._v(" "),o("hr"),n._v(" "),o("f-row",{attrs:{align:"center"}},[o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])]),n._v(" "),o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])]),n._v(" "),o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])])],1),n._v(" "),o("f-row",{attrs:{align:"center"}},[o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])])],1),n._v(" "),o("f-row",{attrs:{align:"center"}},[o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])])],1),n._v(" "),o("f-row",{attrs:{align:"center"}},[o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])])],1),n._v(" "),o("h4",[n._v("代码")]),n._v(" "),o("pre",[o("code",[n._v(n._s(n.content))])]),n._v(" "),o("br"),n._v(" "),o("h3",[n._v("设置 gutter")]),n._v(" "),o("hr"),n._v(" "),o("h4",[n._v("预览")]),n._v(" "),o("f-row",{attrs:{gutter:"10",align:"center"}},[o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])]),n._v(" "),o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])]),n._v(" "),o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])])],1),n._v(" "),o("f-row",{attrs:{gutter:"10",align:"center"}},[o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6"}},[o("div",[n._v("6")])])],1),n._v(" "),o("h4",[n._v("代码")]),n._v(" "),o("pre",[o("code",[n._v(n._s(n.content1))])]),n._v(" "),o("br"),n._v(" "),o("h3",[n._v("设置 空隙")]),n._v(" "),o("hr"),n._v(" "),o("h4",[n._v("预览")]),n._v(" "),o("f-row",{attrs:{gutter:"10",align:"center"}},[o("f-col",{attrs:{span:"8"}},[o("div",[n._v("8")])]),n._v(" "),o("f-col",{attrs:{span:"8",offset:"8"}},[o("div",[n._v("8")])])],1),n._v(" "),o("f-row",{attrs:{gutter:"10",align:"center"}},[o("f-col",{attrs:{span:"6",offset:"6"}},[o("div",[n._v("6")])]),n._v(" "),o("f-col",{attrs:{span:"6",offset:"6"}},[o("div",[n._v("6")])])],1),n._v(" "),o("f-row",{attrs:{gutter:"10",align:"center"}},[o("f-col",{attrs:{span:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4",offset:"4"}},[o("div",[n._v("4")])]),n._v(" "),o("f-col",{attrs:{span:"4",offset:"8"}},[o("div",[n._v("4")])])],1),n._v(" "),o("f-row",{attrs:{gutter:"10",align:"center"}},[o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2",offset:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2",offset:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2",offset:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2"}},[o("div",[n._v("2")])]),n._v(" "),o("f-col",{attrs:{span:"2",offset:"2"}},[o("div",[n._v("2")])])],1),n._v(" "),o("h4",[n._v("代码")]),n._v(" "),o("pre",[o("code",[n._v(n._s(n.content2))])])],1)}),[],!1,null,null,null));t.default=e.exports}}]);