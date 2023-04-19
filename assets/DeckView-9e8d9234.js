import{S as m}from"./sweetalert2.all-4b980b76.js";import{_ as k}from"./pikachu_gif-ecacffd9.js";import{_ as y,c as l,e as L,w as b,b as t,F as o,l as n,t as h,s as w,r as C,o as c,q as f,p as I,g as E}from"./index-d1288f53.js";const{VITE_URL:u,VITE_PATH:p}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},T={data(){return{isready:!1,isLoading:!1,article:{},starLevel:4,title:"",id:"",deckmenu:[]}},methods:{getArticles(i=!0){this.$http.get(`${u}v2/api/${p}/articles`).then(a=>{i===!0&&a.data.articles.forEach(_=>{_.tag==="牌組"&&this.deckmenu.push(_.title)}),a.data.articles.forEach(r=>{r.title===this.title&&(this.id=r.id)}),this.getArticle()}).catch(a=>{m.fire({icon:"error",title:"Oops...",text:`${a.response.data.message}`})})},getArticle(){this.$http.get(`${u}v2/api/${p}/article/${this.id}`).then(i=>{this.article=i.data.article,this.isready=!0}).then(()=>{this.isLoading=!1}).catch(i=>{m.fire({icon:"error",title:"Oops...",text:`${i.response.data.message}`})})},getDeck(i){this.isLoading=!0,this.title=i,this.getArticles(!1)}},mounted(){this.isLoading=!0,this.title=this.$route.params.name,this.getArticles()}},d=i=>(I("data-v-318bbc90"),i=i(),E(),i),V=d(()=>t("div",{class:"loadingGif"},[t("img",{src:k,alt:"會動的皮卡丘過場圖"})],-1)),A={class:"container mt-5"},D={class:"d-flex flex-column flex-md-row"},S=["onClick"],B={key:0,class:"container mt-5 p-3"},j=["src"],H={class:"ms-3 text-center text-white d-flex flex-column justify-content-center"},M={class:"my-3"},O={class:"mb-3 mb-md-5"},P={class:"deckList d-flex justify-content-between flex-column"},R={class:"d-flex mb-1"},N=d(()=>t("div",{class:"d-flex text-white"},"牌組強度",-1)),U={class:"d-flex align-items-center text-white ms-3"},z={class:"d-flex mb-1"},F=d(()=>t("div",{class:"d-flex text-white"},"操作難度",-1)),G={class:"d-flex align-items-center text-white ms-3"},q={class:"d-flex"},W=d(()=>t("div",{class:"d-flex text-white"},"構築價格",-1)),$={class:"d-flex align-items-center text-white ms-3"},J=["innerHTML"];function K(i,a,r,_,s,v){const g=C("LoadingItem");return c(),l(o,null,[L(g,{active:s.isLoading,"z-index":1060},{default:b(()=>[V]),_:1},8,["active"]),t("div",A,[t("div",D,[(c(!0),l(o,null,n(s.deckmenu,(e,x)=>(c(),l("div",{class:"mb-2 mb-lg-0 d-flex justify-content-start justify-content-lg-center",key:x},[t("button",{class:"deckBtn btn btn-myBgMain text-myColor fs-6 fs-md-3",onClick:Q=>v.getDeck(e)},h(e),9,S)]))),128))])]),s.isready?(c(),l("div",B,[t("div",null,[t("div",null,[t("img",{class:"deckImg",src:s.article.image,alt:"牌組圖片"},null,8,j)]),t("div",H,[t("span",M,h(s.article.description),1),t("h1",O,h(s.article.title),1),t("div",null,[t("div",P,[t("div",R,[N,t("div",U,[(c(),l(o,null,n(5,e=>t("i",{key:e,class:f({"fa-solid fa-star text-myColor":e<=s.starLevel,"fa-regular fa-star":e>s.starLevel})},null,2)),64))])]),t("div",z,[F,t("div",G,[(c(),l(o,null,n(5,e=>t("i",{key:e,class:f({"fa-solid fa-star text-myColor":e<=s.starLevel,"fa-regular fa-star":e>s.starLevel})},null,2)),64))])]),t("div",q,[W,t("div",$,[(c(),l(o,null,n(5,e=>t("i",{key:e,class:f({"fa-solid fa-star text-myColor":e<=s.starLevel,"fa-regular fa-star":e>s.starLevel})},null,2)),64))])])])])])]),t("div",{innerHTML:s.article.content,class:"mt-3 p-3 text-white text-start border border-white"},null,8,J)])):w("",!0)],64)}const tt=y(T,[["render",K],["__scopeId","data-v-318bbc90"]]);export{tt as default};
