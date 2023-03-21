import{_ as u}from"./pikachu_gif-ecacffd9.js";import{_ as p,c as a,e as v,w as g,b as e,t as _,F as c,j as n,q as x,r as L,o as l,n as d,p as w,f as y}from"./index-f8112734.js";const{VITE_URL:h,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},I={data(){return{isready:!1,isLoading:!1,article:{},starLevel:4,title:"",id:""}},methods:{getArticles(){this.$http.get(`${h}v2/api/${f}/articles`).then(t=>{t.data.articles.forEach(r=>{r.title===this.title&&(this.id=r.id)}),this.getArticle()}).catch(t=>{alert(t.response.data.message)})},getArticle(){this.$http.get(`${h}v2/api/${f}/article/${this.id}`).then(t=>{this.article=t.data.article,this.isready=!0,this.isLoading=!1}).catch(t=>{alert(t.response.data.message)})}},mounted(){this.isLoading=!0,this.title=this.$route.params.name,this.getArticles()}},o=t=>(w("data-v-00f64123"),t=t(),y(),t),b=o(()=>e("div",{class:"loadingGif"},[e("img",{src:u,alt:""})],-1)),k={key:0,class:"container p-3"},T={class:"d-flex flex-column flex-lg-row",style:{"margin-top":"63px"}},V=["src"],E={class:"ms-3 text-start text-white d-flex flex-column justify-content-center"},A={class:"mb-3"},D={class:"mb-3 mb-md-5"},C={class:"deckList d-flex justify-content-between flex-column"},S={class:"d-flex mb-1"},B=o(()=>e("div",{class:"d-flex text-white"},"牌組強度",-1)),H={class:"d-flex align-items-center text-white ms-3"},P={class:"d-flex mb-1"},R=o(()=>e("div",{class:"d-flex text-white"},"操作難度",-1)),j={class:"d-flex align-items-center text-white ms-3"},M={class:"d-flex"},N=o(()=>e("div",{class:"d-flex text-white"},"構築價格",-1)),U={class:"d-flex align-items-center text-white ms-3"},z=["innerHTML"];function F(t,r,G,O,s,q){const m=L("LoadingItem");return l(),a(c,null,[v(m,{active:s.isLoading,"z-index":1060},{default:g(()=>[b]),_:1},8,["active"]),s.isready?(l(),a("div",k,[e("div",T,[e("div",null,[e("img",{class:"deckImg",src:s.article.image,alt:""},null,8,V)]),e("div",E,[e("span",A,_(s.article.description),1),e("h1",D,_(s.article.title),1),e("div",null,[e("div",C,[e("div",S,[B,e("div",H,[(l(),a(c,null,n(5,i=>e("i",{key:i,class:d({"fa-solid fa-star":i<=s.starLevel,"fa-regular fa-star":i>s.starLevel})},null,2)),64))])]),e("div",P,[R,e("div",j,[(l(),a(c,null,n(5,i=>e("i",{key:i,class:d({"fa-solid fa-star":i<=s.starLevel,"fa-regular fa-star":i>s.starLevel})},null,2)),64))])]),e("div",M,[N,e("div",U,[(l(),a(c,null,n(5,i=>e("i",{key:i,class:d({"fa-solid fa-star":i<=s.starLevel,"fa-regular fa-star":i>s.starLevel})},null,2)),64))])])])])])]),e("div",{innerHTML:s.article.content,class:"mt-3 p-3 text-white text-start border border-white"},null,8,z)])):x("",!0)],64)}const K=p(I,[["render",F],["__scopeId","data-v-00f64123"]]);export{K as default};
