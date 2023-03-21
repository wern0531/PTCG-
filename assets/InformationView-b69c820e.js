import{S as f}from"./sweetalert2.all-b66c0e8e.js";import{_ as p,c as b,e as t,w as h,r as c,o as v,b as e,n as m,u as V,v as y,p as g,f as x}from"./index-f8112734.js";const{VITE_URL:w,VITE_PATH:k}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},I={data(){return{user:{name:"",email:"",tel:"",address:""},message:"",isclick:!1}},methods:{isPhone(a){return/^(09)[0-9]{8}$/.test(a)?!0:"需要正確的電話號碼"},onSubmit(){this.isclick=!0;const a={user:this.user,message:this.message};this.$http.post(`${w}/v2/api/${k}/order`,{data:a}).then(s=>{this.$router.push(`/cart/checkOrder/${s.data.orderId}`),this.$refs.form.resetForm(),this.isclick=!1,f.fire({position:"top-center",icon:"success",title:"您的訂單已建立",showConfirmButton:!1,timer:1500}),console.log(s)}).catch(s=>{alert(s.response.data.message)})}}},i=a=>(g("data-v-b1a7282c"),a=a(),x(),a),E={class:"my-5 row justify-content-center"},S={class:"mb-3"},T=i(()=>e("label",{for:"email",class:"form-label"},"Email",-1)),U={class:"mb-3"},B=i(()=>e("label",{for:"name",class:"form-label"},"收件人姓名",-1)),C={class:"mb-3"},P=i(()=>e("label",{for:"tel",class:"form-label"},"收件人電話",-1)),D={class:"mb-3"},M=i(()=>e("label",{for:"address",class:"form-label"},"收件人地址",-1)),N={class:"mb-3"},R=i(()=>e("label",{for:"message",class:"form-label"},"留言",-1)),q={class:"d-flex justify-content-between"},A=i(()=>e("div",null,[e("button",{class:"d-flex btn btn-myBgMain"},[e("div",{class:"material-symbols-outlined"},"arrow_back"),e("div",null,"回購物車")])],-1)),L=["disabled"];function O(a,s,j,H,l,u){const n=c("v-field"),r=c("error-message"),_=c("v-form");return v(),b("div",E,[t(_,{ref:"form",class:"col-md-6",onSubmit:u.onSubmit},{default:h(({errors:d})=>[e("div",S,[T,t(n,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":d.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.user.email,"onUpdate:modelValue":s[0]||(s[0]=o=>l.user.email=o)},null,8,["class","modelValue"]),t(r,{name:"email",class:"invalid-feedback"})]),e("div",U,[B,t(n,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":d.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.user.name,"onUpdate:modelValue":s[1]||(s[1]=o=>l.user.name=o)},null,8,["class","modelValue"]),t(r,{name:"姓名",class:"invalid-feedback"})]),e("div",C,[P,t(n,{id:"tel",name:"電話",type:"text",class:m(["form-control",{"is-invalid":d.電話}]),placeholder:"請輸入電話",rules:u.isPhone,modelValue:l.user.tel,"onUpdate:modelValue":s[2]||(s[2]=o=>l.user.tel=o)},null,8,["class","rules","modelValue"]),t(r,{name:"電話",class:"invalid-feedback"})]),e("div",D,[M,t(n,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":d.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.user.address,"onUpdate:modelValue":s[3]||(s[3]=o=>l.user.address=o)},null,8,["class","modelValue"]),t(r,{name:"地址",class:"invalid-feedback"})]),e("div",N,[R,V(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=o=>l.message=o)},null,512),[[y,l.message]])]),e("div",q,[A,e("button",{type:"submit",class:"btn btn-myBgMain border-myColor text-myColor btn-hover",disabled:l.isclick===!0}," 確認資料 ",8,L)])]),_:1},8,["onSubmit"])])}const G=p(I,[["render",O],["__scopeId","data-v-b1a7282c"]]);export{G as default};
