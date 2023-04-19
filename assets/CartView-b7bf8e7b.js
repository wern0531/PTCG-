import{_ as b,a as x,R as C,c as n,b as t,q as r,F as y,l as T,e as p,w as k,t as _,s as B,r as u,o as h,v as L,x as P,p as S,g as V,n as v}from"./index-d1288f53.js";import{c as M}from"./cart-8fd4dae5.js";import{S as m}from"./sweetalert2.all-4b980b76.js";const z="/PTCGTrainerWeb/assets/town_league-efac9861.png",I="/PTCGTrainerWeb/assets/regional_league-4b79f9c4.png",R="/PTCGTrainerWeb/assets/championships-075c3d46.png",D="/PTCGTrainerWeb/assets/wcs-4667db09.png";const{VITE_URL:E,VITE_PATH:q}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},N={data(){return{carts:[],loadingItem:"",currentPath:"/cart"}},methods:{...x(M,["getCarts","delCart"]),updateQty(s,o,l,g){let a={};g==="add"?a={product_id:s,qty:o+=1}:g==="reduce"&&(a={product_id:s,qty:o-=1}),this.loadingItem=s,this.$http.put(`${E}v2/api/${q}/cart/${l}`,{data:a}).then(c=>{this.getCarts(),this.loadingItem=""}).catch(c=>{m.fire({icon:"error",title:"Oops...",text:`${c.response.data.message}`})})},calculateFinalTotal(s){return s.reduce((o,l)=>o+l.total,0)},nextStep(){this.$router.push("/cart/information")},isCurrentPath(s){return this.currentPath.includes(s)}},computed:{cartsData(){return this.$pinia.state.value.cart.carts}},watch:{$route:function(s,o){this.currentPath=s.path},cartsData:function(s){this.$route.path==="/cart"&&s.length===0&&m.fire({icon:"warning",title:"您的購物車空啦~",text:"來去看看其他商品吧!!"}).then(()=>{this.$router.push("/products/全部商品")})}},components:{RouterView:C},mounted(){this.getCarts()}},i=s=>(S("data-v-fc8decc6"),s=s(),V(),s),U={class:"container"},G={class:"row my-5 align-items-stretch"},O={class:"col-lg-3"},W=i(()=>t("div",{class:"d-none d-lg-block"},[t("img",{src:z,alt:"購物流程步驟一"})],-1)),$=v('<div class="me-2" data-v-fc8decc6>商品確認</div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-fc8decc6><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-fc8decc6></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-fc8decc6><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-fc8decc6></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-fc8decc6><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-fc8decc6></path></svg>',4),A=[$],F={class:"col-lg-3"},Q=i(()=>t("div",{class:"d-none d-lg-block"},[t("img",{src:I,alt:"購物流程步驟二"})],-1)),H=v('<div class="me-2" data-v-fc8decc6>填寫資料</div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-fc8decc6><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-fc8decc6></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-fc8decc6><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-fc8decc6></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-fc8decc6><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-fc8decc6></path></svg>',4),j=[H],J={class:"col-lg-3"},K=i(()=>t("div",{class:"d-none d-lg-block"},[t("img",{src:R,alt:"購物流程步驟三"})],-1)),X=v('<div class="me-2" data-v-fc8decc6>確認訂單</div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-fc8decc6><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-fc8decc6></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-fc8decc6><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-fc8decc6></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-fc8decc6><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-fc8decc6></path></svg>',4),Y=[X],Z={class:"col-lg-3"},tt=i(()=>t("div",{class:"d-none d-lg-block"},[t("img",{class:"mb-2",src:D,alt:"購物流程步驟四"})],-1)),et=v('<div class="me-2" data-v-fc8decc6>完成訂單</div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-fc8decc6><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-fc8decc6></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-fc8decc6><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-fc8decc6></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-fc8decc6><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-fc8decc6></path></svg>',4),st=[et],ct={key:0},at={class:"row p-3 mx-0 mb-2 border border-btnBg rounded-3 d-flex align-items-center"},ot={class:"col-lg-2"},it=["src"],lt={class:"mt-2 mt-lg-0 col-lg-3"},dt={class:"mt-2 mt-lg-0 col-lg-2"},nt={class:"input-group"},rt=["onClick","disabled"],ht=["onUpdate:modelValue"],vt=["onClick","disabled"],gt={class:"mt-2 mt-lg-0 col-lg-3"},_t=["onClick"],pt=i(()=>t("span",{type:"button",class:"material-symbols-outlined"}," delete ",-1)),ut=[pt],mt={class:"mt-3 mx-0 row d-flex align-items-center"},wt={class:"col-lg-2"},ft=i(()=>t("div",{class:"material-symbols-outlined"},"arrow_back",-1)),bt=i(()=>t("div",null,"繼續選購",-1)),xt={class:"col-lg-5 d-flex ms-auto align-items-center"},Ct={class:"col-lg-6"},yt={class:"col-lg-4 ms-auto"};function Tt(s,o,l,g,a,c){const w=u("RouterLink"),f=u("RouterView");return h(),n("div",U,[t("div",G,[t("div",O,[W,t("div",{class:r(["step mt-3 d-flex align-items-center",{nowStep:a.currentPath==="/cart"}])},A,2)]),t("div",F,[Q,t("div",{class:r(["step mt-3 d-flex align-items-center",{nowStep:a.currentPath==="/cart/information"}])},j,2)]),t("div",J,[K,t("div",{class:r(["step mt-3 d-flex align-items-center",{nowStep:c.isCurrentPath("/cart/checkOrder")}])},Y,2)]),t("div",Z,[tt,t("div",{class:r(["step mt-3 d-flex align-items-center",{nowStep:a.currentPath==="/cart/completeOrder"}])},st,2)])]),a.currentPath==="/cart"?(h(),n("div",ct,[(h(!0),n(y,null,T(c.cartsData,e=>(h(),n("div",{key:e.id},[t("div",at,[t("div",ot,[t("img",{style:{width:"100px"},src:e.product.imageUrl,alt:"商品圖片"},null,8,it)]),t("div",lt,_(e.product.title),1),t("div",dt,[t("div",nt,[t("button",{class:"btn btn-outline-secondary",type:"button",onClick:d=>e.qty>1?c.updateQty(e.product_id,e.qty,e.id,"reduce"):null,disabled:e.product.id===a.loadingItem}," - ",8,rt),L(t("input",{type:"text",class:"btn form-control text-center","onUpdate:modelValue":d=>e.qty=d,min:"0",disabled:""},null,8,ht),[[P,e.qty,void 0,{number:!0}]]),t("button",{class:"btn btn-outline-secondary",type:"button",onClick:d=>c.updateQty(e.product_id,e.qty,e.id,"add"),disabled:e.product.id===a.loadingItem}," + ",8,vt)])]),t("div",gt,"$NT"+_(e.total),1),t("div",{class:"mt-2 mt-lg-0 col-lg-2 delBtn",onClick:d=>s.delCart(e.id,e.product.title)},ut,8,_t)])]))),128)),t("div",mt,[t("div",wt,[p(w,{type:"button",class:"btn d-flex btn-myBgMain",to:"/products/全部商品"},{default:k(()=>[ft,bt]),_:1})]),t("div",xt,[t("div",Ct," 總計: $NT"+_(c.calculateFinalTotal(c.cartsData)),1),t("div",yt,[t("button",{type:"button",class:"btn text-myColor border-myColor btn-hover",onClick:o[0]||(o[0]=(...e)=>c.nextStep&&c.nextStep(...e))}," 確認訂單 ")])])])])):B("",!0),p(f)])}const Pt=b(N,[["render",Tt],["__scopeId","data-v-fc8decc6"]]);export{Pt as default};
