import{_ as d,c as u,b as e,u as i,v as l,s as m,F as p,o as c}from"./index-f8112734.js";const{VITE_URL:f}={VITE_URL:"https://vue3-course-api.hexschool.io/",VITE_PATH:"wern",BASE_URL:"/PTCGTrainerWeb/",MODE:"production",DEV:!1,PROD:!0},_={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${f}/v2/admin/signin`,this.user).then(t=>{const{token:s,expired:n}=t.data;document.cookie=`hexToken=${s};expires=${new Date(n)}; path=/`,this.$router.push("/admin")}).catch(t=>{alert(t.response.data.message)})}},mounted(){}},h=e("div",null,"這是登入頁面",-1),w={class:"form-floating mb-3"},b=e("label",{for:"username"},"Email address",-1),g={class:"form-floating"},v=e("label",{for:"password"},"Password",-1),x=e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function E(t,s,n,T,r,a){return c(),u(p,null,[h,e("form",{id:"form",class:"form-signin",onSubmit:s[2]||(s[2]=m((...o)=>a.login&&a.login(...o),["prevent"]))},[e("div",w,[i(e("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=o=>r.user.username=o)},null,512),[[l,r.user.username]]),b]),e("div",g,[i(e("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":s[1]||(s[1]=o=>r.user.password=o)},null,512),[[l,r.user.password]]),v]),x],32)],64)}const k=d(_,[["render",E]]);export{k as default};
