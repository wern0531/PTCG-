import{_ as f,a as y,c as n,e as w,w as x,b as t,t as c,v as C,x as I,q as _,f as u,F as h,l as P,s as L,r as T,o as a,p as k,g as V}from"./index-2608ed9d.js";import{c as B}from"./cart-0de88aed.js";import{S as p}from"./sweetalert2.all-f75d4200.js";import{_ as D}from"./pikachu_gif-ecacffd9.js";const{VITE_URL:g,VITE_PATH:m}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{isready:!1,isLoading:!1,qty:1,products:[],product:{},category:"",loadingItem:""}},methods:{...y(B,["addToCart"]),getProducts(e){this.products=[],this.$http.get(`${g}/v2/api/${m}/products/all`).then(o=>{o.data.products.forEach(r=>{r.category===e&&r.id!==this.product.id&&this.products.push(r)}),this.isready=!0,this.isLoading=!1}).catch(o=>{this.isLoading=!1,p.fire({backdrop:!1,icon:"error",title:"Oops...",text:`${o.response.data.message}`})})},getProduct(){const{id:e}=this.$route.params;this.$http.get(`${g}/v2/api/${m}/product/${e}`).then(o=>{this.product=o.data.product,this.category=this.product.category,this.getProducts(this.category)}).catch(o=>{this.isLoading=!1,p.fire({backdrop:!1,icon:"error",title:"Oops...",text:`${o.response.data.message}`})})},changeProduct(e){this.isready=!1,this.isLoading=!0,this.$router.push(`/product/${e}`).then(()=>{this.getProduct()})}},computed:{filteredProducts(){return this.products.slice(0,4)},isDisable(){return this.$pinia.state.value.cart.isDisable}},mounted(){this.isLoading=!0,this.getProduct()}},l=e=>(k("data-v-148fc86a"),e=e(),V(),e),S=l(()=>t("img",{src:D,alt:"會動的皮卡丘過場圖"},null,-1)),q={key:0,class:"container"},U={class:"pt-5"},A={class:"row flex-column flex-lg-row align-items-center"},M={class:"col-lg-7"},N={class:"mainImg"},O=["src"],R={class:"col-lg-5"},z={class:"ms-lg-5 mt-3 mt-lg-0 text-lg-start"},F={class:"my-4"},H={class:"row mb-4"},G=l(()=>t("div",{class:"col-6 col-lg-4"},"商品說明:",-1)),W={class:"col-6 col-lg-8"},j={class:"row"},J=l(()=>t("div",{class:"col-6 col-lg-4"},"商品描述:",-1)),K={class:"col-6 col-lg-8"},Q={class:"row mt-4"},X={class:"col-6"},Y={class:"input-group mx-auto m-lg-0 w-75"},Z=["disabled"],$=["disabled"],tt={class:"col-6"},st=l(()=>t("div",{class:"text-start ms-5 mt-5"},[u(" 本網站商品皆為正版"),t("br"),u(" 為保障你我權益，貨到拆封請全程錄影"),t("br"),u(" 商品於七日內附上影片方可退貨 ")],-1)),ot={class:"my-4 text-center"},et=l(()=>t("br",null,null,-1)),it=l(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-down-short",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"})],-1)),ct={class:"row d-flex flex-column flex-lg-row align-items-center"},lt=["onClick"],rt=["src"],dt={class:"pt-2 bg-myBgCard"},nt={class:"pt-2 bg-myBgCard rounded-bottom"},at=["onClick"];function ut(e,o,r,_t,s,d){const v=T("LoadingItem");return a(),n(h,null,[w(v,{active:s.isLoading,"z-index":1060,"is-full-page":!1,opacity:0},{default:x(()=>[S]),_:1},8,["active"]),s.isready?(a(),n("div",q,[t("div",U,[t("div",A,[t("div",M,[t("div",N,[t("img",{style:{width:"100%"},src:s.product.imageUrl,alt:"單一產品圖片"},null,8,O)])]),t("div",R,[t("div",z,[t("h1",null,c(s.product.title),1),t("div",F,"NT$ "+c(s.product.price),1),t("div",H,[G,t("div",W,c(s.product.content),1)]),t("div",j,[J,t("div",K,c(s.product.description),1)]),t("div",Q,[t("div",X,[t("div",Y,[t("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[0]||(o[0]=i=>s.qty>1?s.qty-=1:null),disabled:s.product.id===s.loadingItem}," - ",8,Z),C(t("input",{type:"text",class:"form-control text-center","onUpdate:modelValue":o[1]||(o[1]=i=>s.qty=i),min:"0",disabled:""},null,512),[[I,s.qty,void 0,{number:!0}]]),t("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[2]||(o[2]=i=>s.qty+=1),disabled:s.product.id===s.loadingItem}," + ",8,$)])]),t("div",tt,[t("button",{class:_([{disabled:d.isDisable},"btn btn-myBgMain text-myColor border-myColor"]),onClick:o[3]||(o[3]=i=>e.addToCart(s.product.id,s.product.title))}," 加入購物車 ",2)])])]),st])])]),t("div",ot,[u(" 選購更多"+c(s.product.category)+" ",1),et,it]),t("div",ct,[(a(!0),n(h,null,P(d.filteredProducts,i=>(a(),n("div",{class:"col-lg-3 moreImg mb-4 m-lg-0",key:i.id},[t("div",{class:"hover",style:{cursor:"pointer"},onClick:b=>d.changeProduct(i.id)},[t("img",{class:"w-100",src:i.imageUrl,alt:"更多產品圖片"},null,8,rt)],8,lt),t("div",dt,c(i.title),1),t("div",nt,[t("button",{class:_([{disabled:d.isDisable},"w-100 btn btn-myBgMain text-myColor border-myColor"]),onClick:b=>e.addToCart(i.id,i.title)}," 加入購物車 ",10,at)])]))),128))])])):L("",!0)],64)}const vt=f(E,[["render",ut],["__scopeId","data-v-148fc86a"]]);export{vt as default};
