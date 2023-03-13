<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="../assets/image/logo.png" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link
            to="/home"
            active-class="active-link"
            class="nav-link active navbarHome"
            aria-current="page"
            href="#"
            ><span>首頁</span></router-link
          >
          <router-link
            to="/products/全部商品"
            active-class="active-link"
            class="nav-link navbarText"
            href="#"
            ><span>商品列表</span></router-link
          >
          <router-link
            to="/news"
            active-class="active-link"
            class="nav-link navbarText"
            href="#"
            ><span>最新消息</span></router-link
          >
          <router-link
            to="/deck"
            active-class="active-link"
            class="nav-link navbarText"
            href="#"
            ><span>牌組介紹</span></router-link
          >
          <router-link
            to="/cart"
            active-class="active-link"
            class="nav-link d-flex align-items-center navbarImg"
            href="#"
            ><img
              class="shoppingCart"
              src="../assets/image/shopping_cart.svg"
              alt=""
          /></router-link>
        </div>
      </div>
    </div>
  </nav>
  <RouterView></RouterView>
  <div class="footer d-flex justify-content-between align-items-center">
    <div class="footerText">©2023 PTCG 本網站為個人作品使用，非商業用途</div>
    <button type="button" class="footerBtn"><p>後台登入</p></button>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    RouterView
  },
  created () {
    if (this.$route.path !== '/') {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 0px 312px;
  height: 63px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.48);
}
.navbarHome {
  margin-left: 24px;
  padding: 20px 12px;

  width: 56px;
  height: 63px;
}
.navbarText {
  margin-left: 24px;
  padding: 20px 12px;

  width: 88px;
  height: 63px;
}
.navbarHome span {
  width: 32px;
  height: 23px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 23px;

  color: #ffffff;
}
.navbarText span {
  width: 64px;
  height: 23px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 23px;

  color: #ffffff;
}
.navbarText:hover,
.navbarHome:hover {
  color: #ff6915;
}
.navbarImg {
  width: 32px;
  height: 63px;

  margin-left: 24px;
}
.shoppingCart {
  width: 24px;
  height: 24px;
}
.active-link {
  border-top: 4px solid #ff6915;
}
.footer {
  padding: 16px 312px;

  height: 69px;

  background: #000000;
}
.footerText {
  width: 312px;
  height: 25px;
/*
  font-family: "Noto Sans TC";
  font-style: normal; */
  font-weight: 500;
  font-size: 14px;
  line-height: 180%;

  color: rgba(255, 255, 255, 0.75);
}
.footerBtn {
  padding: 4px 12px;

  width: 88px;
  height: 37px;

  background: #1c1a19;
  border-radius: 4px;
}
.footerBtn p {
  width: 64px;
  height: 29px;

  /* font-family: "Noto Sans TC";
  font-style: normal; */
  font-weight: 500;
  font-size: 16px;
  line-height: 180%;

  color: #ff6915;
}
</style>
