(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Signup"],{"16de":function(t,e,i){},"87de":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t.isCurrent("email")?i("EmailForm",{attrs:{loading:t.isLoading},on:{submit:t.subscribeEmail}}):t.isCurrent("code")?i("CodeForm",{staticClass:"animated fadeInRight",attrs:{loading:t.isLoading,error:t.errors.code},on:{submit:t.validateToken}}):t.isCurrent("signup")?i("SignupForm",{staticClass:"animated fadeInRight",attrs:{loading:t.isLoading},on:{submit:t.createOrganization}}):t._e()],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-3 d-flex justify-content-start"},[i("h3",[t._v(" Sign Up ")])])}],s=i("5530"),r=i("2f62"),o=i("d368"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("form",{staticClass:"email-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._m(0),i("ForeShadow",{attrs:{visible:t.loading}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("InputText",{attrs:{type:"email",size:"lg",placeholder:"Enter your email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),i("div",{staticClass:"mt-3"},[i("Button",{staticClass:"btn-block btn-hero",attrs:{type:"submit",loading:t.loading,color:"primary",size:"lg"}},[t._v(" Submit ")])],1)])],1),i("div",{staticClass:"m-4 d-flex justify-content-around flex-wrap"},[i("router-link",{staticClass:"link-effect mb-3",attrs:{to:"login"}},[i("i",{staticClass:"si si-login mr-5"}),t._v(" Back to Login ")]),i("router-link",{staticClass:"link-effect",attrs:{to:"forget-password"}},[i("i",{staticClass:"fa fa-warning mr-5"}),t._v(" Forget Password ")])],1)])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex justify-content-start"},[i("p",{staticClass:"mb-3",staticStyle:{"font-size":"17px"}},[t._v(" Enter your email below to sign up ")])])}],c=i("7fb4"),d=i("d855"),m=i("ad4f"),p={name:"EmailForm",components:{InputText:c["a"],ForeShadow:d["a"],Button:m["a"]},props:{loading:{type:Boolean,default:!1}},data(){return{email:""}},methods:{onSubmit(){this.$emit("submit",this.email)}}},h=p,f=i("2877"),b=Object(f["a"])(h,u,l,!1,null,null,null),g=b.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ForeShadow",{attrs:{visible:t.loading}},[i("form",{staticClass:"code-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("div",{staticClass:"d-flex justify-content-start"},[i("p",{staticClass:"mb-3",staticStyle:{"font-size":"17px"}},[t._v(" We've sent you an email containing code. Please enter the code below to verify your email ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("InputText",{attrs:{placeholder:"Enter Code",error:t.error,size:"lg",required:""},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1)]),i("div",{staticClass:"mt-3"},[i("Button",{staticClass:"btn-block btn-hero",attrs:{type:"submit",color:"primary",loading:t.loading,size:"lg"}},[t._v(" Submit ")])],1)])])},C=[],y={name:"CodeForm",components:{InputText:c["a"],ForeShadow:d["a"],Button:m["a"]},props:{loading:{type:Boolean,default:!1},error:{type:String,default:""}},data(){return{code:""}},methods:{onSubmit(){this.$emit("submit",this.code)}}},x=y,_=Object(f["a"])(x,v,C,!1,null,null,null),j=_.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ForeShadow",{attrs:{visible:t.loading}},[i("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("InputText",{attrs:{title:"First Name",required:""},model:{value:t.input.user.first_name,callback:function(e){t.$set(t.input.user,"first_name",e)},expression:"input.user.first_name"}})],1),i("div",{staticClass:"col-md-6"},[i("InputText",{attrs:{title:"Last Name",required:""},model:{value:t.input.user.last_name,callback:function(e){t.$set(t.input.user,"last_name",e)},expression:"input.user.last_name"}})],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("InputUsername",{model:{value:t.input.user.username,callback:function(e){t.$set(t.input.user,"username",e)},expression:"input.user.username"}})],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("InputText",{attrs:{title:"Password",type:"password",required:""},model:{value:t.input.user.password,callback:function(e){t.$set(t.input.user,"password",e)},expression:"input.user.password"}})],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("InputText",{attrs:{title:"Organization Name",required:""},model:{value:t.input.name,callback:function(e){t.$set(t.input,"name",e)},expression:"input.name"}})],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("InputText",{attrs:{title:"Location",required:""},model:{value:t.input.location,callback:function(e){t.$set(t.input,"location",e)},expression:"input.location"}})],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("InputText",{attrs:{title:"Phone",required:""},model:{value:t.input.phone,callback:function(e){t.$set(t.input,"phone",e)},expression:"input.phone"}})],1)]),i("div",{staticClass:"py-3 d-flex justify-content-between"},[i("Button",{staticClass:"btn-block btn-hero",attrs:{type:"submit",color:"primary",loading:t.loading}},[t._v(" Sign Up ")])],1)])])},k=[],O=i("a292"),z={name:"SignupForm",components:{Button:m["a"],InputText:c["a"],ForeShadow:d["a"],InputUsername:O["a"]},props:{loading:{type:Boolean,default:!1}},data(){return{input:{user:{}}}},methods:{onSubmit(){this.$emit("submit",this.input)}}},S=z,$=Object(f["a"])(S,w,k,!1,null,null,null),L=$.exports,I={name:"Signup",components:{EmailForm:g,CodeForm:j,SignupForm:L},data(){return{currentLayout:"email",isLoading:!1,organization:{user:{}},errors:{code:""}}},methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["login"])),{},{isCurrent(t){return this.currentLayout===t},changeLayout(t){this.currentLayout=t},subscribeEmail(t){this.isLoading=!0,Object(o["g"])(t).then(()=>{this.organization.email=t,this.organization.user.email=t,this.changeLayout("code")}).catch(t=>{this.$toast.error(t)}).finally(()=>{this.isLoading=!1})},validateToken(t){this.errors.code="",this.isLoading=!0,Object(o["a"])(t).then(e=>{if(e)return this.organization.token=t,void this.changeLayout("signup");this.errors.code="The token that you entered is not valid."}).catch(t=>{this.$toast.error(t)}).finally(()=>{this.isLoading=!1})},createOrganization(t){this.isLoading=!0,this.organization=Object(s["a"])(Object(s["a"])(Object(s["a"])({},this.organization),t),{},{user:Object(s["a"])(Object(s["a"])(Object(s["a"])({},this.organization.user),t.user),{},{fullname:`${t.user.first_name} ${t.user.last_name}`})}),Object(o["c"])(this.organization).then(()=>{const{user:t}=this.organization;return this.login({username:t.username,password:t.password})}).then(()=>{this.$router.push("/")}).catch(t=>{this.$toast.error(t)}).finally(()=>{this.isLoading=!1})}})},E=I,F=Object(f["a"])(E,a,n,!1,null,null,null);e["default"]=F.exports},a292:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("InputBase",{attrs:{title:"Username",error:t.error,required:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.id,n=e.isInvalid;return[i("input",{ref:"input",staticClass:"form-control",class:{"is-invalid":n},attrs:{id:a,type:"text",autocomplete:"off",pattern:t.inputPattern,required:""},domProps:{value:t.value},on:{input:t.onInput}}),t.isLoading?i("div",{staticClass:"inp-icon",staticStyle:{width:"18px"}},[i("Loader")],1):t.isValid?i("div",{staticClass:"text-success inp-icon"},[i("i",{staticClass:"fa fa-check"})]):t._e()]}}])})},n=[],s=i("2ef0"),r=i("2612"),o=i("850b"),u=i("9333"),l={name:"InputUsername",components:{InputBase:o["a"],Loader:u["a"]},props:{value:{type:String,default:""}},data(){return{isLoading:!1,isValid:!1,error:""}},computed:{inputPattern(){return this.error?"$^":".*"}},created(){this.checkAvailability=Object(s["debounce"])(this.checkAvailability,500)},methods:{onInput(){this.isLoading=!0;const{value:t}=this.$refs.input;this.$emit("input",t),this.checkAvailability(t)},updateError(t){this.error=t},checkAvailability(t){if(this.isValid=!1,t.length<5)return this.updateError("The username must be at least 5 characters"),void(this.isLoading=!1);Object(r["b"])(t).then(e=>{if(e)return this.updateError(""),void(this.isValid=!0);this.updateError(t+" is already taken")}).catch(t=>{"request-cancel"!==t&&(this.error=t)}).finally(()=>{this.isLoading=!1})}}},c=l,d=(i("e97d"),i("2877")),m=Object(d["a"])(c,a,n,!1,null,null,null);e["a"]=m.exports},d368:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"e",(function(){return r})),i.d(e,"f",(function(){return o})),i.d(e,"h",(function(){return u})),i.d(e,"d",(function(){return l})),i.d(e,"i",(function(){return c})),i.d(e,"j",(function(){return d})),i.d(e,"g",(function(){return m})),i.d(e,"a",(function(){return p}));var a=i("9819");function n(t){return Object(a["a"])({url:"organizations",method:"post",data:t})}function s(t){return Object(a["a"])({url:"organization/store-from-token",method:"post",data:t})}function r(t){return Object(a["a"])({url:"organizations/"+t,method:"get"})}function o(t){return Object(a["a"])({url:"organizations",method:"get",params:t,cancelPrevious:!0})}function u(t,e){return Object(a["a"])({url:"organizations/"+t,method:"patch",data:e})}function l(t){return Object(a["a"])({url:"organizations/"+t,method:"delete"})}function c(t,e){return Object(a["a"])({url:`organizations/${t}/status`,method:"patch",data:{is_active:e?1:0}})}function d(t){return Object(a["a"])({url:"/upload/logo",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function m(t){return Object(a["a"])({url:"organization/subscribe",method:"post",data:{email:t}})}function p(t){return Object(a["a"])({url:"organization/check-token",method:"post",data:{token:t}})}},e97d:function(t,e,i){"use strict";var a=i("16de"),n=i.n(a);n.a}}]);