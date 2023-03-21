import{_ as b,a as f,c as n,e as a,w as u,b as t,t as c,u as C,v as I,F as _,j as w,r as p,o as r,p as x,f as P}from"./index-f8112734.js";import{c as T}from"./cart-a3fc69e1.js";import{_ as k}from"./pikachu_gif-ecacffd9.js";import"./sweetalert2.all-b66c0e8e.js";const{VITE_URL:h,VITE_PATH:m}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},L={data(){return{isLoading:!1,qty:1,products:[],product:{},category:"",loadingItem:""}},methods:{...f(T,["addToCart"]),getProducts(e){this.products=[],this.$http.get(`${h}/v2/api/${m}/products`).then(o=>{o.data.products.forEach(d=>{d.category===e&&d.id!==this.product.id&&this.products.push(d)}),this.isLoading=!1})},getProduct(){this.isLoading=!0;const{id:e}=this.$route.params;this.$http.get(`${h}/v2/api/${m}/product/${e}`).then(o=>{this.product=o.data.product,this.category=this.product.category,this.getProducts(this.category)})}},computed:{filteredProducts(){return this.products.slice(0,4)}},watch:{"$route.params":{handler(){this.getProduct()}}},mounted(){this.getProduct()}},l=e=>(x("data-v-5d7a7db1"),e=e(),P(),e),V=l(()=>t("div",{class:"loadingGif"},[t("img",{src:k,alt:""})],-1)),E={class:"container pt-5"},q={class:"pt-5 d-flex align-items-center"},B={class:"mainImg"},S=["src"],U={class:"ms-5 text-start"},D={class:"my-4"},A={class:"row mb-4"},M=l(()=>t("div",{class:"col-4"},"商品說明:",-1)),R={class:"col-8"},N={class:"row"},F=l(()=>t("div",{class:"col-4"},"商品描述:",-1)),G={class:"col-8"},H={class:"row mt-4 align-items-end"},O={class:"col-6"},j={class:"input-group"},z=["disabled"],W=["disabled"],J={class:"col-4"},K={class:"my-4 text-center"},Q={class:"row d-flex"},X=["src"],Y={class:"mt-2"},Z=["onClick"];function $(e,o,d,tt,s,v){const g=p("LoadingItem"),y=p("router-link");return r(),n(_,null,[a(g,{active:s.isLoading,"z-index":1060},{default:u(()=>[V]),_:1},8,["active"]),t("div",E,[t("div",q,[t("div",B,[t("img",{class:"w-100",src:s.product.imageUrl,alt:""},null,8,S)]),t("div",U,[t("h1",null,c(s.product.title),1),t("div",D,"$NT"+c(s.product.price),1),t("div",A,[M,t("div",R,c(s.product.content),1)]),t("div",N,[F,t("div",G,c(s.product.description),1)]),t("div",H,[t("div",O,[t("div",j,[t("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[0]||(o[0]=i=>s.qty>1?s.qty-=1:null),disabled:s.product.id===s.loadingItem}," - ",8,z),C(t("input",{type:"text",class:"form-control text-center","onUpdate:modelValue":o[1]||(o[1]=i=>s.qty=i),min:"0",disabled:""},null,512),[[I,s.qty,void 0,{number:!0}]]),t("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[2]||(o[2]=i=>s.qty+=1),disabled:s.product.id===s.loadingItem}," + ",8,W)])]),t("div",J,[t("button",{class:"btn btn-myBgMain text-myColor border-myColor",onClick:o[3]||(o[3]=i=>e.addToCart(s.product.id,s.product.title))}," 加入購物車 ")])])])]),t("div",K,"選購更多"+c(s.product.category),1),t("div",Q,[(r(!0),n(_,null,w(v.filteredProducts,i=>(r(),n("div",{class:"col-3 moreImg",key:i.id},[a(y,{to:`/product/${i.id}`,class:"hover-pointer"},{default:u(()=>[t("img",{class:"w-100",src:i.imageUrl,alt:""},null,8,X)]),_:2},1032,["to"]),t("div",Y,[t("button",{class:"btn btn-myBgMain text-myColor border-myColor",onClick:st=>e.addToCart(i.id,i.title)},"加入購物車",8,Z)])]))),128))])])],64)}const dt=b(L,[["render",$],["__scopeId","data-v-5d7a7db1"]]);export{dt as default};
