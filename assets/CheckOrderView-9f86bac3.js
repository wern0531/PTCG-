import{_ as v,a as f,c as i,b as e,f as c,t as r,F as h,l as y,s as u,o as l,p as g,g as x}from"./index-2608ed9d.js";import{c as w}from"./cart-0de88aed.js";import{S as n}from"./sweetalert2.all-f75d4200.js";const{VITE_URL:p,VITE_PATH:m}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},I={data(){return{carts:[],order:[],orderId:""}},methods:{...f(w,["getCarts"]),getOrder(){this.$http.get(`${p}v2/api/${m}/order/${this.orderId}`).then(s=>{this.order=s.data.order}).catch(s=>{n.fire({icon:"error",title:"Oops...",text:`${s.response.data.message}`})})},payOrder(){this.$http.post(`${p}v2/api/${m}/pay/${this.orderId}`).then(()=>{n.fire({backdrop:!1,icon:"success",title:"付款完成",showConfirmButton:!0,timer:1500}).then(()=>{this.getCarts(),this.$router.push({path:"/cart/completeOrder",query:{orderId:this.order.id,orderData:JSON.stringify(this.order)}})})}).catch(s=>{this.isLoading=!1,n.fire({backdrop:!1,icon:"error",title:"Oops...",text:`${s}.response.data.message`})})}},created(){this.orderId=this.$route.params.orderId,this.getOrder()},mounted(){window.scrollTo(0,0)}},t=s=>(g("data-v-eae8c8a1"),s=s(),x(),s),O=t(()=>e("div",null,"訂單資訊",-1)),k=t(()=>e("hr",null,null,-1)),T={key:0,class:"container justify-content-center"},C={class:"row"},V={class:"col-lg-6"},b={class:"row"},E=t(()=>e("div",{class:"col-3 text-start"},[c(" 姓名 "),e("hr"),c(" Email "),e("hr"),c(" 電話 "),e("hr"),c(" 地址 "),e("hr"),c(" 付款狀態 ")],-1)),S={class:"col-9 text-start"},$=t(()=>e("hr",null,null,-1)),B=t(()=>e("hr",null,null,-1)),N=t(()=>e("hr",null,null,-1)),j=t(()=>e("hr",null,null,-1)),D={key:0},L={key:1,class:"text-success"},A={class:"col-lg-6 mt-5 mt-lg-0"},P=t(()=>e("div",null,[e("div",{class:"row"},[e("div",{class:"col-4 ms-auto"},"品名"),e("div",{class:"col-3"},"數量"),e("div",{class:"col-2"},"單價")])],-1)),R=t(()=>e("hr",null,null,-1)),U={class:"col-3"},q=["src"],F={class:"col-4 d-flex align-items-center justify-content-center"},H={class:"col-3 d-flex align-items-center justify-content-center"},M={class:"col-2 d-flex align-items-center justify-content-center"},G=t(()=>e("hr",null,null,-1)),J={class:"row"},W=t(()=>e("div",{class:"col-3 ms-auto"},"總計:",-1)),z={class:"col-2 d-flex align-items-center justify-content-center"},K={key:0,class:"text-end mt-3"};function Q(s,a,X,Y,o,_){return l(),i(h,null,[O,k,o.order.id?(l(),i("div",T,[e("div",C,[e("div",V,[e("div",b,[E,e("div",S,[c(r(o.order.user.name)+" ",1),$,c(" "+r(o.order.user.email)+" ",1),B,c(" "+r(o.order.user.tel)+" ",1),N,c(" "+r(o.order.user.address)+" ",1),j,o.order.is_paid?(l(),i("span",L,"付款完成")):(l(),i("span",D,"尚未付款"))])])]),e("div",A,[P,R,e("div",null,[(l(!0),i(h,null,y(o.order.products,d=>(l(),i("div",{class:"row mb-2",key:d.id},[e("div",U,[e("img",{style:{width:"60px"},src:d.product.imageUrl,alt:"商品圖片"},null,8,q)]),e("div",F,r(d.product.title),1),e("div",H,r(d.qty)+"/"+r(d.product.unit),1),e("div",M," $NT"+r(d.final_total),1)]))),128)),G,e("div",J,[W,e("div",z," $NT"+r(o.order.total),1)]),o.order.is_paid===!1?(l(),i("div",K,[e("button",{class:"btn text-myColor btn-myBgMain border-myColor",onClick:a[0]||(a[0]=(...d)=>_.payOrder&&_.payOrder(...d))}," 確認付款去 ")])):u("",!0)])])])])):u("",!0)],64)}const se=v(I,[["render",Q],["__scopeId","data-v-eae8c8a1"]]);export{se as default};
