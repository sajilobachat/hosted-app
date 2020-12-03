(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Signup"],{"16de":function(t,e,n){},"87de":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t.isCurrent("email")?n("EmailForm",{attrs:{loading:t.isLoading},on:{submit:t.subscribeEmail}}):t.isCurrent("code")?n("CodeForm",{staticClass:"animated fadeInRight",attrs:{loading:t.isLoading,error:t.errors.code},on:{submit:t.validateToken}}):t.isCurrent("signup")?n("SignupForm",{staticClass:"animated fadeInRight",attrs:{loading:t.isLoading},on:{submit:t.createOrganization}}):t._e()],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-3 d-flex justify-content-start"},[n("h3",[t._v(" Sign Up ")])])}],o=(n("99af"),n("d3b7"),n("5530")),r=n("2f62"),s=n("d368"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"email-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._m(0),n("ForeShadow",{attrs:{visible:t.loading}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("InputText",{attrs:{type:"email",size:"lg",placeholder:"Enter your email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),n("div",{staticClass:"mt-3"},[n("Button",{staticClass:"btn-block btn-hero",attrs:{type:"submit",loading:t.loading,color:"primary",size:"lg"}},[t._v(" Submit ")])],1)])],1),n("div",{staticClass:"m-4 d-flex justify-content-around flex-wrap"},[n("router-link",{staticClass:"link-effect mb-3",attrs:{to:"login"}},[n("i",{staticClass:"si si-login mr-5"}),t._v(" Back to Login ")]),n("router-link",{staticClass:"link-effect",attrs:{to:"forget-password"}},[n("i",{staticClass:"fa fa-warning mr-5"}),t._v(" Forget Password ")])],1)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-start"},[n("p",{staticClass:"mb-3",staticStyle:{"font-size":"17px"}},[t._v(" Enter your email below to sign up ")])])}],l=n("7fb4"),d=n("d855"),m=n("ad4f"),f={name:"EmailForm",components:{InputText:l["a"],ForeShadow:d["a"],Button:m["a"]},props:{loading:{type:Boolean,default:!1}},data:function(){return{email:""}},methods:{onSubmit:function(){this.$emit("submit",this.email)}}},p=f,h=n("2877"),b=Object(h["a"])(p,u,c,!1,null,null,null),v=b.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ForeShadow",{attrs:{visible:t.loading}},[n("form",{staticClass:"code-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("div",{staticClass:"d-flex justify-content-start"},[n("p",{staticClass:"mb-3",staticStyle:{"font-size":"17px"}},[t._v(" We've sent you an email containing code. Please enter the code below to verify your email ")])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("InputText",{attrs:{placeholder:"Enter Code",error:t.error,size:"lg",required:""},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1)]),n("div",{staticClass:"mt-3"},[n("Button",{staticClass:"btn-block btn-hero",attrs:{type:"submit",color:"primary",loading:t.loading,size:"lg"}},[t._v(" Submit ")])],1)])])},C=[],y={name:"CodeForm",components:{InputText:l["a"],ForeShadow:d["a"],Button:m["a"]},props:{loading:{type:Boolean,default:!1},error:{type:String,default:""}},data:function(){return{code:""}},methods:{onSubmit:function(){this.$emit("submit",this.code)}}},x=y,_=Object(h["a"])(x,g,C,!1,null,null,null),j=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ForeShadow",{attrs:{visible:t.loading}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("InputText",{attrs:{title:"First Name",required:""},model:{value:t.input.user.first_name,callback:function(e){t.$set(t.input.user,"first_name",e)},expression:"input.user.first_name"}})],1),n("div",{staticClass:"col-md-6"},[n("InputText",{attrs:{title:"Last Name",required:""},model:{value:t.input.user.last_name,callback:function(e){t.$set(t.input.user,"last_name",e)},expression:"input.user.last_name"}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("InputUsername",{model:{value:t.input.user.username,callback:function(e){t.$set(t.input.user,"username",e)},expression:"input.user.username"}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("InputText",{attrs:{title:"Password",type:"password",required:""},model:{value:t.input.user.password,callback:function(e){t.$set(t.input.user,"password",e)},expression:"input.user.password"}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("InputText",{attrs:{title:"Organization Name",required:""},model:{value:t.input.name,callback:function(e){t.$set(t.input,"name",e)},expression:"input.name"}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("InputText",{attrs:{title:"Location",required:""},model:{value:t.input.location,callback:function(e){t.$set(t.input,"location",e)},expression:"input.location"}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("InputText",{attrs:{title:"Phone",required:""},model:{value:t.input.phone,callback:function(e){t.$set(t.input,"phone",e)},expression:"input.phone"}})],1)]),n("div",{staticClass:"py-3 d-flex justify-content-between"},[n("Button",{staticClass:"btn-block btn-hero",attrs:{type:"submit",color:"primary",loading:t.loading}},[t._v(" Sign Up ")])],1)])])},k=[],O=n("a292"),z={name:"SignupForm",components:{Button:m["a"],InputText:l["a"],ForeShadow:d["a"],InputUsername:O["a"]},props:{loading:{type:Boolean,default:!1}},data:function(){return{input:{user:{}}}},methods:{onSubmit:function(){this.$emit("submit",this.input)}}},S=z,L=Object(h["a"])(S,w,k,!1,null,null,null),$=L.exports,I={name:"Signup",components:{EmailForm:v,CodeForm:j,SignupForm:$},data:function(){return{currentLayout:"email",isLoading:!1,organization:{user:{}},errors:{code:""}}},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])(["login"])),{},{isCurrent:function(t){return this.currentLayout===t},changeLayout:function(t){this.currentLayout=t},subscribeEmail:function(t){var e=this;this.isLoading=!0,Object(s["g"])(t).then((function(){e.organization.email=t,e.organization.user.email=t,e.changeLayout("code")})).catch((function(t){e.$toast.error(t)})).finally((function(){e.isLoading=!1}))},validateToken:function(t){var e=this;this.errors.code="",this.isLoading=!0,Object(s["a"])(t).then((function(n){if(n)return e.organization.token=t,void e.changeLayout("signup");e.errors.code="The token that you entered is not valid."})).catch((function(t){e.$toast.error(t)})).finally((function(){e.isLoading=!1}))},createOrganization:function(t){var e=this;this.isLoading=!0,this.organization=Object(o["a"])(Object(o["a"])(Object(o["a"])({},this.organization),t),{},{user:Object(o["a"])(Object(o["a"])(Object(o["a"])({},this.organization.user),t.user),{},{fullname:"".concat(t.user.first_name," ").concat(t.user.last_name)})}),Object(s["c"])(this.organization).then((function(){var t=e.organization.user;return e.login({username:t.username,password:t.password})})).then((function(){e.$router.push("/")})).catch((function(t){e.$toast.error(t)})).finally((function(){e.isLoading=!1}))}})},E=I,F=Object(h["a"])(E,i,a,!1,null,null,null);e["default"]=F.exports},a292:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("InputBase",{attrs:{title:"Username",error:t.error,required:""},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.id,a=e.isInvalid;return[n("input",{ref:"input",staticClass:"form-control",class:{"is-invalid":a},attrs:{id:i,type:"text",autocomplete:"off",pattern:t.inputPattern,required:""},domProps:{value:t.value},on:{input:t.onInput}}),t.isLoading?n("div",{staticClass:"inp-icon",staticStyle:{width:"18px"}},[n("Loader")],1):t.isValid?n("div",{staticClass:"text-success inp-icon"},[n("i",{staticClass:"fa fa-check"})]):t._e()]}}])})},a=[],o=(n("d3b7"),n("2ef0")),r=n("2612"),s=n("850b"),u=n("9333"),c={name:"InputUsername",components:{InputBase:s["a"],Loader:u["a"]},props:{value:{type:String,default:""}},data:function(){return{isLoading:!1,isValid:!1,error:""}},computed:{inputPattern:function(){return this.error?"$^":".*"}},created:function(){this.checkAvailability=Object(o["debounce"])(this.checkAvailability,500)},methods:{onInput:function(){this.isLoading=!0;var t=this.$refs.input.value;this.$emit("input",t),this.checkAvailability(t)},updateError:function(t){this.error=t},checkAvailability:function(t){var e=this;if(this.isValid=!1,t.length<5)return this.updateError("The username must be at least 5 characters"),void(this.isLoading=!1);Object(r["b"])(t).then((function(n){if(n)return e.updateError(""),void(e.isValid=!0);e.updateError("".concat(t," is already taken"))})).catch((function(t){"request-cancel"!==t&&(e.error=t)})).finally((function(){e.isLoading=!1}))}}},l=c,d=(n("e97d"),n("2877")),m=Object(d["a"])(l,i,a,!1,null,null,null);e["a"]=m.exports},d368:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return s})),n.d(e,"h",(function(){return u})),n.d(e,"d",(function(){return c})),n.d(e,"i",(function(){return l})),n.d(e,"j",(function(){return d})),n.d(e,"g",(function(){return m})),n.d(e,"a",(function(){return f}));var i=n("9819");function a(t){return Object(i["a"])({url:"organizations",method:"post",data:t})}function o(t){return Object(i["a"])({url:"organization/store-from-token",method:"post",data:t})}function r(t){return Object(i["a"])({url:"organizations/".concat(t),method:"get"})}function s(t){return Object(i["a"])({url:"organizations",method:"get",params:t,cancelPrevious:!0})}function u(t,e){return Object(i["a"])({url:"organizations/".concat(t),method:"patch",data:e})}function c(t){return Object(i["a"])({url:"organizations/".concat(t),method:"delete"})}function l(t,e){return Object(i["a"])({url:"organizations/".concat(t,"/status"),method:"patch",data:{is_active:e?1:0}})}function d(t){return Object(i["a"])({url:"/upload/logo",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function m(t){return Object(i["a"])({url:"organization/subscribe",method:"post",data:{email:t}})}function f(t){return Object(i["a"])({url:"organization/check-token",method:"post",data:{token:t}})}},e97d:function(t,e,n){"use strict";var i=n("16de"),a=n.n(i);a.a}}]);