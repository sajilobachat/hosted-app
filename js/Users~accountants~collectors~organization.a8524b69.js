(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Users~accountants~collectors~organization"],{"06bc":function(t,e,a){"use strict";var n=a("e064"),i=a.n(n);i.a},"16de":function(t,e,a){},"31e6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image-wrapper bg-gray d-flex justify-content-center align-items-center rounded-circle"},[t.url?a("img",{staticClass:"img-fluid rounded-circle",attrs:{src:t.url}}):a("i",{class:t.icon})])},i=[],s={name:"ImageColumn",props:{url:{type:String,default:""},icon:{type:String,default:"si si-user"}}},l=s,r=(a("cad3"),a("2877")),o=Object(r["a"])(l,n,i,!1,null,"1cbdaccf",null);e["a"]=o.exports},"47a4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.onFormSubmit(e)}}},[a("ForeShadow",{attrs:{visible:t.loading}},[a("SimpleBar",{staticClass:"modal-form-wrapper"},[t.editMode?a("EditForm",{on:{"uploading-image":t.toggleButtonDisable},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}):a("CreateForm",{on:{"uploading-image":t.toggleButtonDisable},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),a("div",{staticClass:"pt-3 d-flex justify-content-between"},[t.showBackButton?a("Button",{attrs:{type:"submit",color:"secondary",disabled:t.disableButton},on:{click:function(e){return t.$emit("back")}}},[a("i",{staticClass:"fa fa-chevron-left"}),a("span",{staticClass:"ml-2"},[t._v("Back")])]):t._e(),a("Button",{attrs:{type:"submit",loading:t.loading,disabled:t.loading||t.disableButton,color:"primary"}},[t._v(" "+t._s(t.editMode?"Update":"Create")+" ")])],1)],1)],1)},i=[],s=a("5530"),l=a("8d3b"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-12 d-flex justify-content-center"},[a("div",{staticClass:"h-100 my-3",staticStyle:{width:"280px","min-height":"300px","max-height":"300px"}},[a("ImageUpload",{attrs:{url:t.input.avatar_url,loading:t.isUploadingImage},on:{upload:t.onImageUpload,remove:t.removeImage}})],1)]),a("div",{staticClass:"col-md-6 col-12 order-md-first"},[a("InputText",{attrs:{title:"First Name",autofocus:"",required:""},on:{input:t.onInput},model:{value:t.input.first_name,callback:function(e){t.$set(t.input,"first_name",e)},expression:"input.first_name"}}),a("InputText",{attrs:{title:"Last Name",required:""},on:{input:t.onInput},model:{value:t.input.last_name,callback:function(e){t.$set(t.input,"last_name",e)},expression:"input.last_name"}}),a("InputUsername",{model:{value:t.input.username,callback:function(e){t.$set(t.input,"username",e)},expression:"input.username"}}),a("InputText",{attrs:{title:"Password",type:"password",required:""},on:{input:t.onInput},model:{value:t.input.password,callback:function(e){t.$set(t.input,"password",e)},expression:"input.password"}})],1),a("div",{staticClass:"col-md-6"},[a("InputText",{attrs:{title:"Phone"},on:{input:t.onInput},model:{value:t.input.phone,callback:function(e){t.$set(t.input,"phone",e)},expression:"input.phone"}})],1),a("div",{staticClass:"col-md-6"},[a("InputText",{attrs:{type:"email",title:"Email"},on:{input:t.onInput},model:{value:t.input.email,callback:function(e){t.$set(t.input,"email",e)},expression:"input.email"}})],1),a("div",{staticClass:"col-12"},[a("InputText",{attrs:{title:"Landmark"},on:{input:t.onInput},model:{value:t.input.landmark,callback:function(e){t.$set(t.input,"landmark",e)},expression:"input.landmark"}})],1)])},o=[],u=a("7fb4"),p=a("a292"),c=a("f67a"),d=a("2612"),m={name:"CreateForm",components:{InputUsername:p["a"],InputText:u["a"],ImageUpload:c["a"]},props:{value:{type:Object,default:()=>({})}},data(){return{isUploadingImage:!1,input:{}}},watch:{value:{handler(t){this.input=Object(s["a"])({avatar_url:""},t)},immediate:!0}},methods:{onInput(){this.$emit("input",this.input)},onImageUpload(t){this.isUploadingImage=!0,this.$emit("uploading-image",!0);const e=new FormData;e.append("file",t),Object(d["p"])(e).then(({filename:t,url:e})=>{this.input.avatar=t,this.input.avatar_url=e,this.onInput(),this.imgUrl=e}).catch(()=>{this.$toast.error("There was an error whilst uploading image.")}).finally(()=>{this.isUploadingImage=!1,this.$emit("uploading-image",!1)})},removeImage(){this.input.avatar_url="",this.input.avatar=null,this.onInput()}}},f=m,h=a("2877"),g=Object(h["a"])(f,r,o,!1,null,null,null),v=g.exports,b=a("ad4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-12 d-flex justify-content-center"},[a("div",{staticClass:"h-100 my-3",staticStyle:{width:"280px","min-height":"300px","max-height":"300px"}},[a("ImageUpload",{attrs:{url:t.input.avatar_url,loading:t.isUploadingImage},on:{upload:t.onImageUpload,remove:t.removeImage}})],1)]),a("div",{staticClass:"col-md-6 col-12 order-md-first"},[a("InputText",{attrs:{title:"First Name",autofocus:"",required:""},on:{input:t.onInput},model:{value:t.input.first_name,callback:function(e){t.$set(t.input,"first_name",e)},expression:"input.first_name"}}),a("InputText",{attrs:{title:"Last Name",required:""},on:{input:t.onInput},model:{value:t.input.last_name,callback:function(e){t.$set(t.input,"last_name",e)},expression:"input.last_name"}}),a("InputUsername",{model:{value:t.input.username,callback:function(e){t.$set(t.input,"username",e)},expression:"input.username"}}),a("InputText",{attrs:{type:"email",title:"Email"},on:{input:t.onInput},model:{value:t.input.email,callback:function(e){t.$set(t.input,"email",e)},expression:"input.email"}})],1),a("div",{staticClass:"col-12"},[a("InputText",{attrs:{title:"Landmark"},on:{input:t.onInput},model:{value:t.input.landmark,callback:function(e){t.$set(t.input,"landmark",e)},expression:"input.landmark"}})],1),a("div",{staticClass:"col-12"},[a("InputTextArea",{attrs:{title:"Description",rows:5},model:{value:t.input.description,callback:function(e){t.$set(t.input,"description",e)},expression:"input.description"}})],1)])},I=[],y=a("c6b1"),C={name:"EditForm",components:{InputTextArea:y["a"],InputUsername:p["a"],InputText:u["a"],ImageUpload:c["a"]},props:{value:{type:Object,default:()=>({})}},data(){return{isUploadingImage:!1,input:{}}},watch:{value:{handler(t){this.input=t},immediate:!0}},methods:{onInput(){this.$emit("input",this.input)},onImageUpload(t){this.isUploadingImage=!0,this.$emit("uploading-image",!0);const e=new FormData;e.append("file",t),Object(d["p"])(e).then(({filename:t,url:e})=>{this.input.avatar=t,this.input.avatar_url=e,this.onInput()}).catch(()=>{this.$toast.error("There was an error whilst uploading image.")}).finally(()=>{this.isUploadingImage=!1,this.$emit("uploading-image",!1)})},removeImage(){this.input.avatar_url="",this.input.avatar=null,this.onInput()}}},w=C,_=Object(h["a"])(w,x,I,!1,null,null,null),k=_.exports,$=a("d855"),S={name:"User",components:{CreateForm:v,Button:b["a"],EditForm:k,ForeShadow:$["a"],SimpleBar:l["a"]},props:{value:{type:Object,default:()=>{}},loading:{type:Boolean,default:!1},editMode:{type:Boolean,default:!1},showBackButton:{type:Boolean,default:!1}},data(){return{input:{},disableButton:!1}},watch:{value:{handler(t){this.input=Object(s["a"])({},t)},immediate:!0}},methods:{onFormSubmit(){this.$emit("input",this.input),this.$emit("submit",this.input)},toggleButtonDisable(t){this.disableButton=t}}},U=S,j=Object(h["a"])(U,n,i,!1,null,null,null);e["a"]=j.exports},"6bad":function(t,e,a){},"9a1a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{class:t.spanClass,attrs:{title:t.textStatus}},[a("Toggle",{attrs:{color:"success"},on:{change:t.onChange},model:{value:t.inputStatus,callback:function(e){t.inputStatus=e},expression:"inputStatus"}})],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"css-control css-control-sm css-switch",class:t.spanClass},[a("input",{ref:"input",staticClass:"css-control-input",attrs:{type:"checkbox"},domProps:{checked:t.value},on:{input:t.onInput}}),a("span",{staticClass:"css-control-indicator"}),t._v(" "+t._s(t.title)+" ")])},l=[],r={name:"Toggle",props:{title:{type:String,default:""},value:{type:Boolean,default:!0},color:{type:String,default:"primary"}},computed:{spanClass(){return this.color?"css-control-"+this.color:""}},methods:{onInput(){const t=this.$refs.input.checked;this.$emit("input",t),this.$emit("change",t)}}},o=r,u=a("2877"),p=Object(u["a"])(o,s,l,!1,null,null,null),c=p.exports,d={name:"StatusColumn",components:{Toggle:c},props:{status:{type:Number,default:0}},data(){return{inputStatus:!1}},computed:{spanClass(){return this.status?"text-success":"text-danger"},textStatus(){return this.status?"active":"inactive"}},watch:{status:{handler(){this.inputStatus=!!this.status},immediate:!0}},methods:{onChange(t){setTimeout(()=>{this.inputStatus=!t,this.$emit("change",t)})}}},m=d,f=Object(u["a"])(m,n,i,!1,null,null,null);e["a"]=f.exports},a292:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("InputBase",{attrs:{title:"Username",error:t.error,required:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.id,i=e.isInvalid;return[a("input",{ref:"input",staticClass:"form-control",class:{"is-invalid":i},attrs:{id:n,type:"text",autocomplete:"off",pattern:t.inputPattern,required:""},domProps:{value:t.value},on:{input:t.onInput}}),t.isLoading?a("div",{staticClass:"inp-icon",staticStyle:{width:"18px"}},[a("Loader")],1):t.isValid?a("div",{staticClass:"text-success inp-icon"},[a("i",{staticClass:"fa fa-check"})]):t._e()]}}])})},i=[],s=a("2ef0"),l=a("2612"),r=a("850b"),o=a("9333"),u={name:"InputUsername",components:{InputBase:r["a"],Loader:o["a"]},props:{value:{type:String,default:""}},data(){return{isLoading:!1,isValid:!1,error:""}},computed:{inputPattern(){return this.error?"$^":".*"}},created(){this.checkAvailability=Object(s["debounce"])(this.checkAvailability,500)},methods:{onInput(){this.isLoading=!0;const{value:t}=this.$refs.input;this.$emit("input",t),this.checkAvailability(t)},updateError(t){this.error=t},checkAvailability(t){if(this.isValid=!1,t.length<5)return this.updateError("The username must be at least 5 characters"),void(this.isLoading=!1);Object(l["b"])(t).then(e=>{if(e)return this.updateError(""),void(this.isValid=!0);this.updateError(t+" is already taken")}).catch(t=>{"request-cancel"!==t&&(this.error=t)}).finally(()=>{this.isLoading=!1})}}},p=u,c=(a("e97d"),a("2877")),d=Object(c["a"])(p,n,i,!1,null,null,null);e["a"]=d.exports},c6b1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("InputBase",{attrs:{title:t.title,required:t.required,error:t.error},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.id,i=e.isInvalid;return[a("textarea",{ref:"input",staticClass:"form-control",class:{"is-invalid":i},attrs:{id:n,cols:t.cols,rows:t.rows,required:t.required,placeholder:t.placeholder},domProps:{value:t.value},on:{change:t.onChange,input:t.updateInput}})]}}])})},i=[],s=a("850b"),l={name:"InputTextArea",components:{InputBase:s["a"]},props:{title:{type:String,default:""},cols:{type:[String,Number],default:30},rows:{type:[String,Number],default:10},onChange:{type:Function,default:()=>[]},value:{type:String,default:""},required:{type:Boolean,default:!1},placeholder:{type:String,default:""},error:{type:String,default:""}},methods:{updateInput(){this.$emit("input",this.$refs.input.value)}}},r=l,o=a("2877"),u=Object(o["a"])(r,n,i,!1,null,"7e79a4cc",null);e["a"]=u.exports},cad3:function(t,e,a){"use strict";var n=a("6bad"),i=a.n(n);i.a},e064:function(t,e,a){},e97d:function(t,e,a){"use strict";var n=a("16de"),i=a.n(n);i.a},f67a:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-wrapper h-100"},[a("div",{staticClass:"h-100 d-flex flex-column"},[t.loading?a("div",{staticClass:"h-100 w-100 d-flex justify-content-center align-items-center"},[a("div",{staticStyle:{width:"30px"}},[a("Loader")],1)]):[t.url?a("div",{staticClass:"d-flex image-wrapper justify-content-center align-items-center flex-grow-1"},[a("img",{staticClass:"d-flex img-fluid",attrs:{src:t.url}})]):a("div",{staticClass:"placeholder d-flex justify-content-center align-items-center flex-grow-1",on:{click:t.openFileExplorer}},[a("i",{staticClass:"fa-4x",class:t.icon})])],a("div",{staticClass:"d-flex pt-2 bg-white"},[a("button",{staticClass:"btn btn-sm btn-success btn-noborder mr-1 flex-grow-1",attrs:{type:"button",disabled:t.loading},on:{click:function(e){return e.preventDefault(),t.openFileExplorer(e)}}},[t._v(" Upload ")]),a("button",{staticClass:"btn btn-sm btn-danger btn-noborder ml-1 flex-grow-1",attrs:{type:"button",disabled:t.loading},on:{click:function(e){return e.preventDefault(),t.$emit("remove")}}},[t._v(" Remove ")])])],2),a("input",{ref:"inpFile",staticClass:"d-none",attrs:{type:"file",accept:"image/png, image/jpeg, image/jpg, image/gif"},on:{change:t.uploadImage}})])},i=[],s=a("9333"),l={name:"ImageUpload",components:{Loader:s["a"]},props:{url:{type:String,default:""},icon:{type:String,default:"si si-user"},loading:{type:Boolean,default:!1}},methods:{openFileExplorer(){this.$refs.inpFile.click()},uploadImage({target:t}){if(!t.files.length)return;const e=t.files[0],a=1e-6*e.size;a>10?this.$toast.error("Image size must be lower than 10mb."):this.$emit("upload",e)}}},r=l,o=(a("06bc"),a("2877")),u=Object(o["a"])(r,n,i,!1,null,"47cb7866",null);e["a"]=u.exports}}]);