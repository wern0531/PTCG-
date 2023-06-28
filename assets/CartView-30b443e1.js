import{_ as b,a as x,R as C,c as n,b as t,q as d,F as y,l as k,e as u,w as T,t as m,s as B,r as p,o as h,v as L,x as P,p as S,g as V,n as v}from"./index-2608ed9d.js";import{c as M}from"./cart-0de88aed.js";import{S as g}from"./sweetalert2.all-f75d4200.js";const z="/PTCGTrainerWeb/assets/town_league-efac9861.png",D="/PTCGTrainerWeb/assets/regional_league-4b79f9c4.png",I="/PTCGTrainerWeb/assets/championships-075c3d46.png",R="/PTCGTrainerWeb/assets/wcs-4667db09.png";const{VITE_URL:E,VITE_PATH:q}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},N={data(){return{carts:[],loadingItem:"",currentPath:"/cart"}},methods:{...x(M,["getCarts","delCart"]),updateQty(e,i,c,_){let a={};_==="add"?a={product_id:e,qty:i+=1}:_==="reduce"&&(a={product_id:e,qty:i-=1}),this.loadingItem=e,this.$http.put(`${E}v2/api/${q}/cart/${c}`,{data:a}).then(o=>{this.getCarts(),this.loadingItem=""}).catch(o=>{g.fire({backdrop:!1,icon:"error",title:"Oops...",text:`${o.response.data.message}`})})},calculateFinalTotal(e){return e.reduce((i,c)=>i+c.total,0)},nextStep(){this.$router.push("/cart/information")},isCurrentPath(e){return this.currentPath.includes(e)}},computed:{cartsData(){return this.$pinia.state.value.cart.carts},isDisable(){return this.$pinia.state.value.cart.isDisable}},watch:{$route:function(e,i){this.currentPath=e.path},cartsData:function(e){this.$route.path==="/cart"&&e.length===0&&g.fire({backdrop:!1,icon:"warning",title:"您的購物車空啦~",text:"來去看看其他商品吧!!"}).then(()=>{this.$router.push("/products/全部商品")})}},components:{RouterView:C},mounted(){this.getCarts()}},l=e=>(S("data-v-327f585c"),e=e(),V(),e),U={class:"container"},G={class:"row my-5 align-items-stretch"},O={class:"col-6 col-md-3"},W=l(()=>t("div",{class:"d-none d-md-block"},[t("img",{src:z,alt:"購物流程步驟一"})],-1)),$=v('<div class="me-2" data-v-327f585c>商品確認</div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-327f585c><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-327f585c></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-327f585c><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-327f585c></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-327f585c><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-327f585c></path></svg>',4),j=[$],A={class:"col-6 col-md-3"},F=l(()=>t("div",{class:"d-none d-md-block"},[t("img",{src:D,alt:"購物流程步驟二"})],-1)),Q=v('<div class="me-2" data-v-327f585c>填寫資料</div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-327f585c><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-327f585c></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-327f585c><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-327f585c></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-327f585c><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-327f585c></path></svg>',4),H=[Q],J={class:"col-6 col-md-3"},K=l(()=>t("div",{class:"d-none d-md-block"},[t("img",{src:I,alt:"購物流程步驟三"})],-1)),X=v('<div class="me-2" data-v-327f585c>確認訂單</div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-327f585c><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-327f585c></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-327f585c><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-327f585c></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-327f585c><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-327f585c></path></svg>',4),Y=[X],Z={class:"col-6 col-md-3"},tt=l(()=>t("div",{class:"d-none d-md-block"},[t("img",{class:"mb-2",src:R,alt:"購物流程步驟四"})],-1)),et=v('<div class="me-2" data-v-327f585c>完成訂單</div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-327f585c><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-327f585c></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-327f585c><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-327f585c></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" data-v-327f585c><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" data-v-327f585c></path></svg>',4),st=[et],ot={key:0},at={class:"row py-3 mx-0 mb-2 border border-btnBg rounded-3 d-flex align-items-center"},it={class:"col-md-4 mb-3 mb-md-0"},lt=["src"],dt={class:"col-md-8"},ct={class:"row align-items-center"},rt={class:"col-8 col-md-8"},nt={class:"row align-items-center"},ht={class:"col-md-6 col-lg-8 mb-3 mb-md-0"},vt={class:"fs-5"},_t={class:"col-md-6 col-lg-4 mx-auto"},mt={class:"input-group"},ut=["onClick","disabled"],pt=["onUpdate:modelValue"],gt=["onClick","disabled"],wt={class:"col-4 col-md-4"},ft={class:"row align-items-center"},bt={class:"col-md-8 mb-3 mb-md-0"},xt={class:"col-md-4 p-0"},Ct=["onClick"],yt=l(()=>t("span",{class:"material-symbols-outlined"}," delete ",-1)),kt=[yt],Tt={class:"mt-3 d-flex align-items-start align-items-md-center"},Bt=l(()=>t("div",{class:"material-symbols-outlined"},"arrow_back",-1)),Lt=l(()=>t("div",null,"繼續選購",-1)),Pt={class:"ms-auto d-flex flex-column flex-md-row align-items-end align-items-md-center"},St={class:"mb-2 mb-md-0"},Vt={class:"ms-3"};function Mt(e,i,c,_,a,o){const w=p("RouterLink"),f=p("RouterView");return h(),n("div",U,[t("div",G,[t("div",O,[W,t("div",{class:d(["border border-myColor rounded-3 p-2 mt-3 d-flex align-items-center justify-content-center",{nowStep:a.currentPath==="/cart"}])},j,2)]),t("div",A,[F,t("div",{class:d(["border border-myColor rounded-3 p-2 mt-3 d-flex align-items-center justify-content-center",{nowStep:a.currentPath==="/cart/information"}])},H,2)]),t("div",J,[K,t("div",{class:d(["border border-myColor rounded-3 p-2 mt-3 d-flex align-items-center justify-content-center",{nowStep:o.isCurrentPath("/cart/checkOrder")}])},Y,2)]),t("div",Z,[tt,t("div",{class:d(["border border-myColor rounded-3 p-2 mt-3 d-flex align-items-center justify-content-center",{nowStep:a.currentPath==="/cart/completeOrder"}])},st,2)])]),a.currentPath==="/cart"?(h(),n("div",ot,[(h(!0),n(y,null,k(o.cartsData,s=>(h(),n("div",{key:s.id},[t("div",at,[t("div",it,[t("img",{class:"w-100",src:s.product.imageUrl,alt:"商品圖片"},null,8,lt)]),t("div",dt,[t("div",ct,[t("div",rt,[t("div",nt,[t("div",ht,[t("div",vt,m(s.product.title),1)]),t("div",_t,[t("div",mt,[t("button",{class:"btn btn-outline-secondary",type:"button",onClick:r=>s.qty>1?o.updateQty(s.product_id,s.qty,s.id,"reduce"):null,disabled:s.product.id===a.loadingItem}," - ",8,ut),L(t("input",{type:"text",class:"btn form-control text-center","onUpdate:modelValue":r=>s.qty=r,min:"0",disabled:""},null,8,pt),[[P,s.qty,void 0,{number:!0}]]),t("button",{class:"btn btn-outline-secondary",type:"button",onClick:r=>o.updateQty(s.product_id,s.qty,s.id,"add"),disabled:s.product.id===a.loadingItem}," + ",8,gt)])])])]),t("div",wt,[t("div",ft,[t("div",bt,"$NT"+m(s.total),1),t("div",xt,[t("button",{type:"button",class:d([{disabled:o.isDisable},"btn border-0 text-white text-center delBtn"]),onClick:r=>e.delCart(s.id,s.product.title)},kt,10,Ct)])])])])])])]))),128)),t("div",Tt,[t("div",null,[u(w,{type:"button",class:"p-0 btn d-flex btn-myBgMain",to:"/products/全部商品"},{default:T(()=>[Bt,Lt]),_:1})]),t("div",Pt,[t("div",St,"總計: $NT"+m(o.calculateFinalTotal(o.cartsData)),1),t("div",Vt,[t("button",{type:"button",class:"px-3 btn text-myColor border-myColor btn-hover",onClick:i[0]||(i[0]=(...s)=>o.nextStep&&o.nextStep(...s))}," 確認訂單 ")])])])])):B("",!0),u(f)])}const Rt=b(N,[["render",Mt],["__scopeId","data-v-327f585c"]]);export{Rt as default};
