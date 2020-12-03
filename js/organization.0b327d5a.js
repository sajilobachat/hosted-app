(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["organization"],{"92af":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{on:{submit:function(a){return a.preventDefault(),t.onFormSubmit(a)}}},[e("ForeShadow",{attrs:{visible:t.loading}},[e("SimpleBar",{staticClass:"modal-form-wrapper"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 col-12 d-flex justify-content-center"},[e("div",{staticClass:"h-100 p-3",staticStyle:{width:"280px","min-height":"300px"}},[e("ImageUpload",{attrs:{url:t.input.logo_url,icon:"fa fa-building-o",loading:t.isUploadingImage},on:{upload:t.onImageUpload,remove:t.removeImage}})],1)]),e("div",{staticClass:"col-md-6 col-12 order-md-first"},[e("InputText",{attrs:{title:"Name",required:""},model:{value:t.input.name,callback:function(a){t.$set(t.input,"name",a)},expression:"input.name"}}),e("InputText",{attrs:{title:"Email",required:""},model:{value:t.input.email,callback:function(a){t.$set(t.input,"email",a)},expression:"input.email"}}),e("InputText",{attrs:{title:"Location",required:""},model:{value:t.input.location,callback:function(a){t.$set(t.input,"location",a)},expression:"input.location"}}),e("InputText",{attrs:{type:"tel",title:"Phone",required:""},model:{value:t.input.phone,callback:function(a){t.$set(t.input,"phone",a)},expression:"input.phone"}}),t.isSuper?e("InputSelect",{attrs:{title:"Use customer app",info:"This will alter how transaction will be validated and if a customer can use the application or not.",required:"","option-text":"name","option-value":"id",options:[{id:0,name:"False"},{id:1,name:"True"}]},model:{value:t.input.use_customer_app,callback:function(a){t.$set(t.input,"use_customer_app",a)},expression:"input.use_customer_app"}}):t._e()],1)])]),e("div",{staticClass:"py-3 d-flex justify-content-start"},[t.editMode?e("Button",{attrs:{type:"submit",disabled:t.isUploadingImage,loading:t.loading,color:"primary"}},[t._v(" Update ")]):e("Button",{attrs:{type:"submit",disabled:t.isUploadingImage,color:"primary"}},[e("span",{staticClass:"mr-2"},[t._v("Next")]),e("i",{staticClass:"fa fa-chevron-right"})])],1)],1)],1)},n=[],s=e("5530"),o=e("8d3b"),r=e("d368"),l=e("d855"),c=e("7fb4"),u=e("ad4f"),d=e("f67a"),h=e("0af5"),g={name:"Basic",components:{InputSelect:h["a"],ForeShadow:l["a"],InputText:c["a"],Button:u["a"],ImageUpload:d["a"],SimpleBar:o["a"]},props:{value:{type:Object,default:()=>({})},editMode:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},isSuper:{type:Boolean}},data(){return{input:{},isUploadingImage:!1}},watch:{value:{handler(t){this.input=Object(s["a"])({logo_url:""},t)},immediate:!0}},methods:{onFormSubmit(){this.$emit("input",this.input),this.$emit("submit",this.input)},onImageUpload(t){this.isUploadingImage=!0;const a=new FormData;a.append("file",t),Object(r["j"])(a).then(({filename:t,url:a})=>{this.input.logo=t,this.input.logo_url=a}).catch(()=>{this.$toast.error("There was an error whilst uploading image.")}).finally(()=>{this.isUploadingImage=!1})},removeImage(){this.input.logo_url="",this.input.logo=null}}},p=g,m=e("2877"),f=Object(m["a"])(p,i,n,!1,null,null,null);a["a"]=f.exports},d368:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"e",(function(){return o})),e.d(a,"f",(function(){return r})),e.d(a,"h",(function(){return l})),e.d(a,"d",(function(){return c})),e.d(a,"i",(function(){return u})),e.d(a,"j",(function(){return d})),e.d(a,"g",(function(){return h})),e.d(a,"a",(function(){return g}));var i=e("9819");function n(t){return Object(i["a"])({url:"organizations",method:"post",data:t})}function s(t){return Object(i["a"])({url:"organization/store-from-token",method:"post",data:t})}function o(t){return Object(i["a"])({url:"organizations/"+t,method:"get"})}function r(t){return Object(i["a"])({url:"organizations",method:"get",params:t,cancelPrevious:!0})}function l(t,a){return Object(i["a"])({url:"organizations/"+t,method:"patch",data:a})}function c(t){return Object(i["a"])({url:"organizations/"+t,method:"delete"})}function u(t,a){return Object(i["a"])({url:`organizations/${t}/status`,method:"patch",data:{is_active:a?1:0}})}function d(t){return Object(i["a"])({url:"/upload/logo",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function h(t){return Object(i["a"])({url:"organization/subscribe",method:"post",data:{email:t}})}function g(t){return Object(i["a"])({url:"organization/check-token",method:"post",data:{token:t}})}},f52b:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("ContentHeader",[t._v(" Organization "),e("template",{slot:"extra"},[e("button",{staticClass:"btn btn-primary ml-2 btn-noborder",on:{click:function(a){t.isCreateModalShown=!0}}},[t._v(" Create Organization ")])])],2),e("CreateOrganization",{attrs:{visible:t.isCreateModalShown},on:{close:function(a){t.isCreateModalShown=!1}}}),e("UpdateOrganization",{attrs:{visible:t.isUpdateModalShown,"organization-id":t.targetOrganization.id},on:{close:function(a){t.isUpdateModalShown=!1}}}),e("OrganizationTable",{on:{delete:t.onDelete,edit:t.onEdit}}),e("DeleteOrganization",{attrs:{visible:t.isDeleteModalShown,organization:t.targetOrganization},on:{close:function(a){t.isDeleteModalShown=!1}}})],1)},n=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Modal",{attrs:{title:"Create Organization","hide-controls":"",visible:t.visible},on:{close:t.close,closed:t.reset}},[t.isCurrent("organization")?e("BasicOrganization",{staticClass:"fade-in",on:{submit:function(a){return t.nextStep("organization")}},model:{value:t.organization,callback:function(a){t.organization=a},expression:"organization"}}):t.isCurrent("user")?e("User",{staticClass:"fade-in",attrs:{loading:t.isLoading,"show-back-button":""},on:{back:function(a){return t.backTrack("user")},submit:t.createOrganization},model:{value:t.user,callback:function(a){t.user=a},expression:"user"}}):t._e()],1)},o=[],r=e("5530"),l=e("78b5"),c=e("92af"),u=e("47a4"),d=e("d368"),h={name:"CreateOrganization",components:{Modal:l["a"],BasicOrganization:c["a"],User:u["a"]},props:{visible:{type:Boolean,default:!1}},data(){return{isLoading:!1,currentForm:"organization",steps:["organization","user"],organization:{},user:{}}},methods:{isCurrent(t){return this.currentForm===t},close(){this.isLoading||this.$emit("close")},reset(){this.currentForm="organization",this.isLoading=!1,this.organization={},this.user={}},nextStep(t){this.currentForm=this.steps[this.steps.indexOf(t)+1]},backTrack(t){this.currentForm=this.steps[this.steps.indexOf(t)-1]},createOrganization(){this.isLoading=!0;const{user:t,organization:a}=this,{first_name:e,last_name:i}=t;Object(d["b"])(Object(r["a"])(Object(r["a"])({},a),{},{user:Object(r["a"])(Object(r["a"])({},t),{},{fullname:`${e} ${i}`})})).then(()=>{this.$toast.success("Organization Successfully Created"),this.$bus.emit("reload-organization-table"),this.isLoading=!1,this.close()}).catch(t=>{this.$toast.error(t,{duration:1e4}),this.isLoading=!1})}}},g=h,p=e("2877"),m=Object(p["a"])(g,s,o,!1,null,null,null),f=m.exports,b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mb-4"},[e("UpdateStatus",{attrs:{organization:t.targetOrganization,status:t.targetOrganization.status,visible:t.isStatusModalShown},on:{success:t.setStatus,close:function(a){t.isStatusModalShown=!1}}}),e("CardBase",{staticClass:"p-4 mb-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("InputSelect",{attrs:{title:"Status","option-value":"value","option-text":"name",options:t.statuses},on:{select:function(a){return t.fetchData()}},model:{value:t.dataFilters.status,callback:function(a){t.$set(t.dataFilters,"status",a)},expression:"dataFilters.status"}})],1),e("div",{staticClass:"col-md-3"}),e("div",{staticClass:"col-md-6"},[e("Search",{staticClass:"mt-4 pt-1",attrs:{debounce:500},on:{change:function(a){return t.fetchData()}},model:{value:t.dataFilters.keyword,callback:function(a){t.$set(t.dataFilters,"keyword",a)},expression:"dataFilters.keyword"}})],1)])]),e("CardLoader",{attrs:{"is-loading":t.loading}},[e("CardBase",{staticClass:"table-responsive"},[t.organizations.length?e("table",{staticClass:"table table-vcenter m-0"},[e("thead",{staticClass:"bg-gray-lighter"},[e("tr",[e("th",{staticClass:"text-center"},[t._v(" # ")]),e("th"),e("th",{staticClass:"pl-4"},[t._v(" Name ")]),e("th",[t._v(" Balance ")]),e("th",{staticClass:"text-center"},[t._v(" Customers ")]),e("th",[t._v(" Location ")]),e("th",[t._v(" Phone ")]),e("th",{staticClass:"text-center"},[t._v(" Use App ")]),e("th",{staticClass:"text-center"},[t._v(" Status ")]),e("th",{staticStyle:{width:"130px"}})])]),e("tbody",t._l(t.organizations,(function(a,i){return e("tr",{key:a.id},[e("td",{staticClass:"text-center"},[t._v(" "+t._s(i+1)+" ")]),e("td",[e("ImageColumn",{attrs:{url:a.logo_url,icon:"fa fa-building-o"}})],1),e("td",[t._v(" "+t._s(a.name)+" ")]),e("td",[t._v(" "+t._s(t._f("formatCurrency")(a.billing.remain))+" ")]),e("td",{staticClass:"text-center"},[t._v(" "+t._s(a.customer_count)+" ")]),e("td",[t._v(" "+t._s(a.location)+" ")]),e("td",[t._v(" "+t._s(a.phone)+" ")]),e("td",{staticClass:"text-center"},[a.use_customer_app?e("Icon",{staticClass:"text-success",attrs:{name:"check",size:"large"}}):e("Icon",{staticClass:"text-danger",attrs:{name:"times",size:"large"}})],1),e("td",{staticClass:"text-center"},[e("StatusColumn",{attrs:{status:a.is_active},on:{change:function(e){return t.onStatusUpdate(a,e)}}})],1),e("td",[e("div",{staticClass:"d-flex flex-row justify-content-around"},[e("button",{staticClass:"btn btn-sm btn-success btn-noborder",attrs:{title:"edit"},on:{click:function(e){return t.$emit("edit",a)}}},[e("i",{staticClass:"si si-note"})]),e("button",{staticClass:"btn btn-sm btn-danger btn-noborder",attrs:{title:"delete"},on:{click:function(e){return t.$emit("delete",a)}}},[e("i",{staticClass:"si si-trash"})])])])])})),0)]):e("div",{staticClass:"min-height-300 d-flex flex-row justify-content-center align-items-center"},[e("h4",{staticClass:"text-gray-dark font-w300"},[t._v(" No Organization Found ")])])])],1),e("div",{staticClass:"d-flex justify-content-between align-items-center flex-wrap"},[e("div",[t._v(" "+t._s(t.pagination.message)+" ")]),e("div",{staticClass:"d-flex justify-content-center"},[e("InputSelect",{attrs:{options:[5,15,25,50,100]},on:{select:function(a){return t.fetchData()}},model:{value:t.pagination.perPage,callback:function(a){t.$set(t.pagination,"perPage",a)},expression:"pagination.perPage"}}),e("Pagination",{attrs:{length:t.pagination.pages,current:t.pagination.current},on:{change:t.changePagination}})],1)])],1)},v=[],z=e("2ef0"),O=e("ab74"),C=e("020b"),_=e("c2cd"),S=e("0af5"),w=e("9c4f"),x=e("9a1a"),y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Modal",{attrs:{title:"Confirmation",loading:t.isUpdatingStatus,visible:t.visible},on:{success:t.updateStatus,close:t.close}},[t._v(" Are you sure you want to change status of "+t._s(t.organization.name)+"? ")])},$=[],j={name:"UpdateOrgStatus",components:{Modal:l["a"]},props:{visible:{type:Boolean,default:!1},organization:{type:Object,default:()=>({})},status:{type:Boolean,default:!1}},data(){return{isUpdatingStatus:!1}},methods:{close(t=!1){!t&&this.isUpdatingStatus||this.$emit("close")},updateStatus(){this.isUpdatingStatus=!0,Object(d["i"])(this.organization.id,this.status).then(()=>{this.$toast.success("Status successfully updated"),this.$emit("success"),this.close(!0)}).catch(()=>{this.$toast.error("There was an error while updating organization status.")}).finally(()=>{this.isUpdatingStatus=!1})}}},k=j,U=Object(p["a"])(k,y,$,!1,null,null,null),I=U.exports,D=e("0f8e"),M=e("31e6"),F=e("5d35"),B={name:"OrganizationTable",components:{Icon:F["a"],ImageColumn:M["a"],CardBase:C["a"],InputSelect:S["a"],Search:w["a"],CardLoader:_["a"],Pagination:D["a"],UpdateStatus:I,StatusColumn:x["a"]},data(){return{loading:!1,isStatusModalShown:!1,targetOrganization:{},statuses:[{name:"All",value:""},{name:"Active",value:1},{name:"Inactive",value:0}],dataFilters:{status:"",keyword:""},pagination:{pages:1,current:1,perPage:15},organizations:[]}},created(){this.$bus.on("reload-organization-table",this.fetchData),this.fetchData()},beforeDestroy(){this.$bus.removeAllListeners("reload-organization-table")},mounted(){this.$bus.on("router-link-clicked",()=>{this.loading||this.fetchData()})},methods:{setStatus(){const t=this.targetOrganization,a=Object(z["findIndex"])(this.organizations,["id",t.id]);this.organizations[a].is_active=t.status?1:0},onStatusUpdate(t,a){this.targetOrganization=Object(r["a"])(Object(r["a"])({},t),{},{status:a}),this.isStatusModalShown=!0},fetchData(t=null){this.loading=!0;const{status:a,keyword:e}=this.dataFilters;Object(d["f"])({page:t,is_active:a||null,keyword:e||null,per_page:this.pagination.perPage}).then(({data:t,meta:a})=>{this.organizations=t,this.pagination=Object(O["f"])(a),this.loading=!1}).catch(t=>{"request-cancel"!==t&&(this.$toast.error("There was an error while fetching data."),this.loading=!1)})},changePagination(t){this.pagination.current=t,this.fetchData(t)}}},T=B,L=Object(p["a"])(T,b,v,!1,null,null,null),P=L.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Modal",{attrs:{title:"Delete Organization",visible:t.visible,loading:t.loading},on:{close:t.close,success:t.deleteCustomer}},[t._v(" Are you sure you want to delete "+t._s(t.organization.name)+"? ")])},q=[],A={name:"DeleteOrganization",components:{Modal:l["a"]},props:{visible:{type:Boolean,default:!1},organization:{type:Object,default:()=>({})}},data(){return{loading:!1}},methods:{onClose(){this.loading||this.$emit("close")},deleteCustomer(){this.loading=!0,Object(d["d"])(this.organization.id).then(()=>{this.$toast.success("Successfully Deleted!"),this.$bus.emit("reload-organization-table")}).catch(t=>{t?this.$toast.error(t):this.$toast.error("There was an error while deleting customer!")}).finally(()=>{this.isLoading=!1,this.close()})},close(){this.isLoading||this.$emit("close")}}},N=A,H=Object(p["a"])(N,E,q,!1,null,null,null),J=H.exports,G=e("1a1f"),K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Modal",{attrs:{title:"Edit Organization",visible:t.visible,"hide-controls":""},on:{close:t.close,closed:t.reset}},[e("CardLoader",{attrs:{"is-loading":t.isFetchingData}},[e("Basic",{staticClass:"fade-in",attrs:{loading:t.isSubmitting,"edit-mode":"","is-super":!0},on:{submit:t.updateOrganization},model:{value:t.organization,callback:function(a){t.organization=a},expression:"organization"}})],1)],1)},Q=[],R=e("a1be"),V={name:"UpdateOrganization",components:{Modal:l["a"],CardLoader:_["a"],Basic:c["a"]},props:{visible:{type:Boolean,default:!1},organizationId:{type:Number,default:null}},data(){return{isSubmitting:!1,isFetchingData:!1,organization:{}}},watch:{visible(t){t&&this.fetchData()}},methods:{fetchData(){this.isFetchingData=!0,Object(d["e"])(this.organizationId).then(t=>{this.organization=Object(R["c"])(t),this.isFetchingData=!1}).catch(()=>{this.$toast.error("There was an error while fetching data"),this.close()})},updateOrganization(){this.isSubmitting=!0,Object(d["h"])(this.organizationId,this.organization).then(()=>{this.$toast.success("Successfully Updated Organization"),this.$bus.emit("reload-organization-table"),this.isSubmitting=!1,this.close()}).catch(t=>{this.$toast.error(t,{duration:1e4}),this.isSubmitting=!1})},close(){this.isSubmitting||this.$emit("close")},reset(){this.isSubmitting=!1,this.isFetchingData=!1,this.organization={}}}},W=V,X=Object(p["a"])(W,K,Q,!1,null,null,null),Y=X.exports,Z={name:"Organization",components:{OrganizationTable:P,DeleteOrganization:J,ContentHeader:G["a"],CreateOrganization:f,UpdateOrganization:Y},data(){return{isCreateModalShown:!1,isDeleteModalShown:!1,isUpdateModalShown:!1,targetOrganization:{}}},methods:{onDelete(t){this.targetOrganization=t,this.isDeleteModalShown=!0},onEdit(t){this.targetOrganization=t,this.isUpdateModalShown=!0}}},tt=Z,at=Object(p["a"])(tt,i,n,!1,null,null,null);a["default"]=at.exports}}]);