(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ce36794"],{"1dde":function(t,e,c){var n=c("d039"),o=c("b622"),r=c("2d00"),i=o("species");t.exports=function(t){return r>=51||!n((function(){var e=[],c=e.constructor={};return c[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"6be2":function(t,e,c){"use strict";var n=function(t){return{all:t=t||new Map,on:function(e,c){var n=t.get(e);n?n.push(c):t.set(e,[c])},off:function(e,c){var n=t.get(e);n&&(c?n.splice(n.indexOf(c)>>>0,1):t.set(e,[]))},emit:function(e,c){var n=t.get(e);n&&n.slice().map((function(t){t(c)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,c)}))}}},o=n();e["a"]=o},7901:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o=Object(n["createElementVNode"])("h2",null,"這是單一產品列表",-1),r={class:"row"},i={class:"col-6"},a=["src"],d={class:"col-6 text-start"},l={key:0},u={class:"text-danger"},s={key:1},p={class:"input-group"},b=["disabled"],f=["value"],O={key:0,class:"spinner-border spinner-border-sm",role:"status"},g=Object(n["createElementVNode"])("span",{class:"visually-hidden"},"Loading...",-1),h=[g],m=Object(n["createTextVNode"])(" 加入購物車 ");function v(t,e,c,g,v,j){var y=Object(n["resolveComponent"])("Loading");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[o,Object(n["createVNode"])(y,{active:v.isLoading},null,8,["active"]),Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("img",{src:v.product.imageUrl,height:"300",alt:""},null,8,a)]),Object(n["createElementVNode"])("div",d,[Object(n["createElementVNode"])("h3",null,Object(n["toDisplayString"])(v.product.title),1),v.product.origin_price!==v.product.price?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[Object(n["createElementVNode"])("p",u,"$ "+Object(n["toDisplayString"])(v.product.price)+" / "+Object(n["toDisplayString"])(v.product.unit),1),Object(n["createElementVNode"])("del",null,"$ "+Object(n["toDisplayString"])(v.product.origin_price)+" / "+Object(n["toDisplayString"])(v.product.unit),1)])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("p",s,"$ "+Object(n["toDisplayString"])(v.product.price)+" / "+Object(n["toDisplayString"])(v.product.unit),1)),Object(n["createElementVNode"])("div",p,[Object(n["withDirectives"])(Object(n["createElementVNode"])("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":e[0]||(e[0]=function(t){return v.productQty=t}),disabled:v.spinnerOn},[(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(30,(function(t){return Object(n["createElementVNode"])("option",{key:t,value:t},Object(n["toDisplayString"])(t),9,f)})),64))],8,b),[[n["vModelSelect"],v.productQty]]),Object(n["createElementVNode"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(t){return j.addCart(v.product.id,v.productQty)})},[v.spinnerOn?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",O,h)):Object(n["createCommentVNode"])("",!0),m])])])])],64)}c("99af");var j=c("6be2"),y={data:function(){return{product:{},productId:"",isLoading:!1,productQty:1,spinnerOn:!1}},methods:{getProduct:function(){var t=this,e=this.$route.params.id;this.productId=e;var c="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("gillchin","/product/").concat(e);this.$http.get(c).then((function(e){t.product=e.data.product,t.isLoading=!1}))},addCart:function(t){var e=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.spinnerOn=!0;var n="".concat("https://vue3-course-api.hexschool.io/v2/","/api/").concat("gillchin","/cart"),o={product_id:t,qty:c};this.$http.post(n,{data:o}).then((function(t){e.spinnerOn=!1,j["a"].emit("get-cart")})).catch((function(t){console.log(t)}))}},mounted:function(){this.getProduct(),this.isLoading=!0,console.log(this)}},E=c("6b0d"),k=c.n(E);const V=k()(y,[["render",v]]);e["default"]=V},8418:function(t,e,c){"use strict";var n=c("a04b"),o=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var i=n(e);i in t?o.f(t,i,r(0,c)):t[i]=c}},"99af":function(t,e,c){"use strict";var n=c("23e7"),o=c("da84"),r=c("d039"),i=c("e8b5"),a=c("861d"),d=c("7b0b"),l=c("07fa"),u=c("8418"),s=c("65f0"),p=c("1dde"),b=c("b622"),f=c("2d00"),O=b("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",m=o.TypeError,v=f>=51||!r((function(){var t=[];return t[O]=!1,t.concat()[0]!==t})),j=p("concat"),y=function(t){if(!a(t))return!1;var e=t[O];return void 0!==e?!!e:i(t)},E=!v||!j;n({target:"Array",proto:!0,forced:E},{concat:function(t){var e,c,n,o,r,i=d(this),a=s(i,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?i:arguments[e],y(r)){if(o=l(r),p+o>g)throw m(h);for(c=0;c<o;c++,p++)c in r&&u(a,p,r[c])}else{if(p>=g)throw m(h);u(a,p++,r)}return a.length=p,a}})}}]);
//# sourceMappingURL=chunk-3ce36794.22a277a0.js.map