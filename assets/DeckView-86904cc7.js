import{_ as L,r as s,c as o,e as $,x as k,y as V,d as e,F as r,v as u,t as h,l as T,b as c,A as m,p as C,i as S}from"./index-b331433f.js";import{S as D}from"./sweetalert2.all-4b6d70ac.js";import{_ as A}from"./LoadingComponent-40c94dbf.js";import"./pikachu_gif-ecacffd9.js";const p=d=>(C("data-v-0bebda38"),d=d(),S(),d),B={class:"container"},M={class:"d-flex pt-5 flex-column flex-md-row"},R=["onClick"],H={class:"container mt-5 p-3"},O={class:"row align-items-center"},P={class:"col-lg-9"},j=["src"],U={class:"col-lg-3"},F={class:"ms-3 text-start text-white"},N={class:"row align-items-center my-3 my-mb-5 my-lg-0"},z={class:"col-md-6 col-lg-12 mb-4 mb-md-0 text-center text-md-start"},G={class:"mb-3"},W={class:"mb-0 mb-lg-5"},q={class:"col-md-6 col-lg-12"},J={class:"deckList d-flex justify-content-between flex-column"},K={class:"d-flex mb-1 mx-auto mx-md-0"},Q=p(()=>e("div",{class:"text-white"},"牌組強度",-1)),X={class:"d-flex align-items-center text-white ms-3"},Y={class:"d-flex mb-1 mx-auto mx-md-0"},Z=p(()=>e("div",{class:"text-white"},"操作難度",-1)),ee={class:"d-flex align-items-center text-white ms-3"},te={class:"d-flex mx-auto mx-md-0"},se=p(()=>e("div",{class:"text-white"},"構築價格",-1)),ae={class:"d-flex align-items-center text-white ms-3"},le=["innerHTML"],oe={__name:"DeckView",setup(d){const{VITE_URL:x,VITE_PATH:g}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},_=s(!1),v=s(!1),b=s(!1),i=s({}),a=s(4),w=s(""),f=s([]),y=(l="夢幻Vmax")=>{_.value=!1,v.value=!0,T.get(`${x}v2/api/${g}/articles`).then(n=>{f.value.length<1&&(f.value=n.data.articles.filter(t=>t.tag==="牌組").map(t=>t.title)),n.data.articles.forEach(t=>{t.title===l&&(w.value=t.id)}),E()}).catch(n=>{D.fire({backdrop:!1,icon:"error",title:"Oops...",text:`${n.response.data.message}`})})};y();const E=()=>{T.get(`${x}v2/api/${g}/article/${w.value}`).then(l=>{i.value=l.data.article,_.value=!0,v.value=!1,b.value=!1}).catch(l=>{D.fire({backdrop:!1,icon:"error",title:"Oops...",text:`${l.response.data.message}`})})};return(l,n)=>(c(),o(r,null,[$(A,{"is-loading":v.value},null,8,["is-loading"]),k(e("div",B,[e("div",M,[(c(!0),o(r,null,u(f.value,(t,I)=>(c(),o("div",{class:"mb-2 mb-lg-0 d-flex justify-content-start justify-content-lg-center",key:I},[e("button",{class:m([{disabled:b.value},"deckBtn btn btn-myBgMain text-myColor fs-6 fs-md-3"]),onClick:ce=>y(t)},h(t),11,R)]))),128))])],512),[[V,_.value]]),k(e("div",H,[e("div",O,[e("div",P,[e("img",{class:"deckImg",src:i.value.image,alt:"牌組圖片"},null,8,j)]),e("div",U,[e("div",F,[e("div",N,[e("div",z,[e("p",G,h(i.value.description),1),e("h1",W,h(i.value.title),1)]),e("div",q,[e("div",J,[e("div",K,[Q,e("div",X,[(c(),o(r,null,u(5,t=>e("i",{key:t,class:m({"fa-solid fa-star text-myColor":t<=a.value,"fa-regular fa-star":t>a.value})},null,2)),64))])]),e("div",Y,[Z,e("div",ee,[(c(),o(r,null,u(5,t=>e("i",{key:t,class:m({"fa-solid fa-star text-myColor":t<=a.value,"fa-regular fa-star":t>a.value})},null,2)),64))])]),e("div",te,[se,e("div",ae,[(c(),o(r,null,u(5,t=>e("i",{key:t,class:m({"fa-solid fa-star text-myColor":t<=a.value,"fa-regular fa-star":t>a.value})},null,2)),64))])])])])])])])]),e("div",{innerHTML:i.value.content,class:"mt-3 p-3 text-white text-start border border-white"},null,8,le)],512),[[V,_.value]])],64))}},_e=L(oe,[["__scopeId","data-v-0bebda38"]]);export{_e as default};
