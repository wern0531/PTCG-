import{S as p}from"./sweetalert2.all-765ce1d7.js";import{_ as h}from"./pikachu_gif-e9cb6898.js";import{_ as g,c,e as u,w as m,b as s,F as d,j as n,q as x,r as v,o,t as e,p as w,f as y}from"./index-243987ec.js";const{VITE_URL:f,VITE_PATH:b}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/production-sub-path/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{isready:!1,isLoading:!1,articles:{pack:[],product:[],game:[]}}},methods:{getArticles(){this.$http.get(`${f}v2/api/${b}/articles`).then(a=>{a.data.articles.forEach(i=>{i.tag==="補充包"?this.articles.pack.push(i):i.tag==="商品"?this.articles.product.push(i):i.tag==="比賽"&&this.articles.game.push(i)}),this.isready=!0,this.isLoading=!1}).catch(a=>{p.fire({icon:"error",title:"Oops...",text:`${a}.response.data.message`})})}},mounted(){this.isLoading=!0,this.getArticles()}},l=a=>(w("data-v-ca698a48"),a=a(),y(),a),C=l(()=>s("div",{class:"loadingGif"},[s("img",{src:h,alt:"會動的皮卡丘過場圖"})],-1)),I={key:0,class:"container text-white"},L={class:"row newsCardWrap",style:{"margin-top":"63px"}},V=l(()=>s("h1",{class:"my-lg-3"},"補充包資訊",-1)),E=["src"],B={class:"mt-1 text-white"},S={class:"text-start pb-1"},T={class:"text-start pb-1"},A={class:"text-start pb-1"},N={class:"row newsCardWrap"},D=l(()=>s("h1",{class:"my-lg-3"},"商品資訊",-1)),R={class:"row"},j={class:"d-flex justify-content-center align-items-center;",style:{"background-color":"black"}},O=["src"],P={class:"mt-1 text-white"},U={class:"text-start pb-1"},W={class:"text-start pb-1"},$={class:"text-start pb-1"},F={class:"row newsCardWrap"},H=l(()=>s("h1",{class:"my-lg-3"},"比賽資訊",-1)),q={class:"row"},z={class:"d-flex justify-content-center align-items-center;",style:{"background-color":"black"}},G=["src"],M={class:"mt-1 text-white"},J={class:"text-start pb-1"},K={class:"text-start pb-1"},Q={class:"text-start pb-1"};function X(a,i,Y,Z,r,ss){const _=v("LoadingItem");return o(),c(d,null,[u(_,{active:r.isLoading,"z-index":1060},{default:m(()=>[C]),_:1},8,["active"]),r.isready?(o(),c("div",I,[s("div",L,[V,(o(!0),c(d,null,n(r.articles.pack,t=>(o(),c("div",{class:"col-lg-6 newsCard card mb-2 p-2 bg-myBgCard",key:t.id},[s("img",{src:t.image,class:"card-img-top",alt:"..."},null,8,E),s("div",B,[s("div",S,"<"+e(t.tag)+">",1),s("div",T,e(t.title),1),s("div",A,e(t.description),1)])]))),128))]),s("div",N,[D,s("div",R,[(o(!0),c(d,null,n(r.articles.product,t=>(o(),c("div",{class:"col-lg-6 newsCard card mb-2 p-2 bg-myBgCard",style:{width:"442px"},key:t.id},[s("div",j,[s("img",{style:{"max-width":"134px","max-height":"154px"},src:t.image,class:"card-img-top",alt:"..."},null,8,O)]),s("div",P,[s("div",U,"<"+e(t.tag)+">",1),s("div",W,e(t.title),1),s("div",$,e(t.description),1)])]))),128))])]),s("div",F,[H,s("div",q,[(o(!0),c(d,null,n(r.articles.game,t=>(o(),c("div",{class:"col-lg-6 newsCard card mb-2 p-2 bg-myBgCard",style:{width:"442px"},key:t.id},[s("div",z,[s("img",{style:{"max-width":"134px","max-height":"154px"},src:t.image,class:"card-img-top",alt:"..."},null,8,G)]),s("div",M,[s("div",J,"<"+e(t.tag)+">",1),s("div",K,e(t.title),1),s("div",Q,e(t.description),1)])]))),128))])])])):x("",!0)],64)}const cs=g(k,[["render",X],["__scopeId","data-v-ca698a48"]]);export{cs as default};
