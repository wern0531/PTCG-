import{g as n,h as a}from"./index-92a9ee6d.js";import{S as c}from"./sweetalert2.all-87c625b6.js";const{VITE_URL:r,VITE_PATH:o}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},l=n("cart",{state:()=>({carts:[]}),getters:{getCartNum(t){return t.carts.length}},actions:{getCarts(){a.get(`${r}v2/api/${o}/cart`).then(t=>{this.carts=t.data.data.carts,console.log(this.carts)})},addToCart(t,s){const e={product_id:t,qty:1};a.post(`${r}/v2/api/${o}/cart`,{data:e}).then(i=>{console.log(i),this.getCarts(),c.fire({position:"top-center",icon:"success",title:`${s} 已成功選購`,showConfirmButton:!1,timer:1500})})},delCart(t,s){a.delete(`${r}/v2/api/${o}/cart/${t}`).then(e=>{this.getCarts(),c.fire({position:"top-center",icon:"success",title:`商品 ${s} 已刪除`,showConfirmButton:!1,timer:1500})}).catch(e=>{alert(e.response.data.message)})}}});export{l as c};