<template>
  <nav class="my-navbar fixed-top bg-myBgMain py-2 py-lg-4">
    <div class="container">
      <div class="d-flex align-items-center">
        <a class="" href="#">
          <img src="../assets/image/logo.png" alt="PTCGTrainerWeb" />
        </a>
        <ul
          class="d-none d-lg-flex mb-0 align-items-center ms-auto text-white list-unstyled"
        >
          <li class="me-lg-4">
            <RouterLink
              to="/products/全部商品"
              class="link-item py-2 text-white text-decoration-none"
              href="#"
              >商品列表</RouterLink
            >
          </li>
          <li class="h-100 me-lg-4">
            <RouterLink
              to="/news"
              class="link-item py-2 text-white text-decoration-none"
              href="#"
              >最新消息</RouterLink
            >
          </li>
          <li class="me-lg-4">
            <RouterLink
              to="/deck/夢幻Vmax"
              class="link-item py-2 text-white text-decoration-none"
              href="#"
              >牌組介紹</RouterLink
            >
          </li>
        </ul>
        <!-- 購物車Btn -->
        <button
          type="button"
          class="btn ms-auto ms-lg-0"
          @click="carts.length > 0 ? $router.push('/cart') : noCarts()"
        >
          <div class="shoppingCart position-relative">
            <span
              v-if="carts.length > 0"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >{{ getCartNum }}</span
            >
          </div>
        </button>
        <!-- 漢堡選單按鈕 -->
        <button
          class="d-block d-lg-none text-white btn-myBgMain btn ms-4"
          @click="toggleMenu"
        >
          <img
            class="menuBtnImg bg-myBgMain"
            src="../assets/image/menu.png"
            alt="菜單"
          />
        </button>
      </div>
    </div>
    <!-- 漢堡選單 -->
    <ul
      class="menu mb-0 ps-0 bg-myBgMain w-100 fs-3 list-unstyled border-bottom"
      :style="{ height: menuHeight + 'px' }"
    >
      <div class="container">
        <li class="mb-3 text-start" @click="toggleMenu">
          <RouterLink
            to="/products/全部商品"
            class="link-item py-2 text-white text-decoration-none"
            href="#"
            >商品列表</RouterLink
          >
        </li>
        <li class="mb-3 text-start" @click="toggleMenu">
          <RouterLink
            to="/news"
            class="link-item py-2 text-white text-decoration-none"
            href="#"
            >最新消息</RouterLink
          >
        </li>
        <li class="mb-3 text-start" @click="toggleMenu">
          <RouterLink
            to="/deck/夢幻Vmax"
            class="link-item py-2 text-white text-decoration-none"
            href="#"
            >牌組介紹</RouterLink
          >
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { cartStore } from '@/stores/cart.js'
import router from '../router/index'
import Swal from 'sweetalert2'

export default {
  setup () {
    const cart = cartStore()

    const { getCarts } = cart
    onMounted(() => {
      getCarts()
    })

    const { carts, getCartNum } = storeToRefs(cart) // 取得購物車數量

    const noCarts = () => {
      // 購物車沒東西跳出提示轉往商品頁
      Swal.fire({
        backdrop: false,
        position: 'top-end',
        icon: 'warning',
        title: '您的購物車是空的唷~',
        text: '來去逛逛商品吧!!'
      }).then(() => {
        router.push('/products/全部商品')
      })
    }

    const menuHeight = ref(0)
    const toggleMenu = () => {
      menuHeight.value = menuHeight.value === 153 ? 0 : 153
    }

    return {
      getCartNum,
      carts,
      getCarts,
      noCarts,
      menuHeight,
      toggleMenu
    }
  }
}
</script>

<style scoped>
.my-navbar {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.48);
}
.link-item {
  position: relative;
  font-weight: 900;
}
.link-item::after {
  /* li hover效果偽元素 */
  content: "";
  width: 0;
  height: 4px;
  background-color: #ff6915;
  position: absolute;
  top: 100%;
  left: 50%;
  transition: all 0.5s;
}
.shoppingCart {
  background-image: url(../assets/image/shopping_cart.svg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease-in-out;
}
.shoppingCart:hover {
  transform: scale(1.3);
}
.link-item:hover::after {
  width: 100%;
  left: 0;
}
.menuBtnImg {
  width: 30px;
  height: 30px;
}
.menu {
  position: absolute;
  top: 100%;
  left: 0;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
}
</style>
