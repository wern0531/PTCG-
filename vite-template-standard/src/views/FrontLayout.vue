<template>
  <nav class="navbar my-navbar navbar-expand-lg bg-myBgMain">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/image/logo.png" alt="" />
      </a>
      <button class="navbar-toggler ms-auto" type="button">
        <RouterLink
          v-if="cartsData.length > 0"
          to="/cart"
          type="button"
          class="nav-link ms-4 d-flex align-items-center"
        >
          <div class="shoppingCart position-relative">
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >{{ getCartNum }}</span
            >
          </div>
        </RouterLink>
        <button
          v-else
          type="button"
          class="btn nav-link ms-4 d-flex align-items-center"
          @click="noCarts"
        >
          <div class="shoppingCart position-relative">
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >{{ getCartNum }}</span
            >
          </div>
        </button>
      </button>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img class="d-flex" src="../assets/image/menu.png" alt="">
      </button>
      <div :class="{ hide: ishide }" class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-lg-auto">
          <li class="nav-item" @click="hideMenu">
            <RouterLink
              to="/home"
              active-class="active-link"
              class="nav-link my-nav-item text-white active"
              aria-current="page"
              href="#"
              ><span>首頁</span></RouterLink
            >
          </li>
          <li class="nav-item" @click="hideMenu">
            <RouterLink
              to="/products/全部商品"
              active-class="active-link"
              class="nav-link my-nav-item ms-lg-4 text-white"
              href="#"
              ><span>商品列表</span></RouterLink
            >
          </li>
          <li class="nav-item" @click="hideMenu">
            <RouterLink
              to="/news"
              active-class="active-link"
              class="nav-link my-nav-item ms-lg-4 text-white"
              href="#"
              ><span>最新消息</span></RouterLink
            >
          </li>
          <li class="nav-item" @click="hideMenu">
            <RouterLink
              to="/deck/夢幻Vmax"
              active-class="active-link"
              class="nav-link my-nav-item ms-lg-4 text-white"
              href="#"
              ><span>牌組介紹</span></RouterLink
            >
          </li>
          <li class="nav-item d-none d-lg-block">
            <RouterLink
              v-if="cartsData.length > 0"
              to="/cart"
              type="button"
              class="nav-link ms-4 d-flex align-items-center"
            >
              <div class="shoppingCart position-relative">
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >{{ getCartNum }}</span
                >
              </div>
            </RouterLink>
            <button
              v-else
              type="button"
              class="btn nav-link ms-4 d-flex align-items-center"
              @click="noCarts"
            >
              <div class="shoppingCart position-relative">
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >{{ getCartNum }}</span
                >
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView/>
  <div
    class="footer my-footer d-flex justify-content-center justify-content-md-between align-items-center"
  >
    <div class="footerText">©2023 PTCG 本網站為個人作品使用，非商業用途</div>
    <button
      type="button"
      class="footerBtn py-1 bg-myBgCard rounded text-myColor d-none d-md-block"
      @click="toAdmin"
    >
      後台登入
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { cartStore } from '../../src/stores/cart'
import { RouterView } from 'vue-router'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      checkCardModal: '',
      loadingItem: '',
      ishide: false
    }
  },
  computed: {
    ...mapState(cartStore, ['getCartNum', 'carts']),
    cartsData () {
      return this.carts || []
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'delCart']),
    handleScroll () {
      if (window.pageYOffset > 710) {
        this.$refs.navbar.classList.remove('bg-opacity-50')
      } else {
        this.$refs.navbar.classList.add('bg-opacity-50')
      }
    },
    updateQty (productId, qty, id) {
      const data = {
        product_id: productId,
        qty
      }
      this.loadingItem = productId
      this.$http
        .put(`${VITE_URL}v2/api/${VITE_PATH}/cart/${id}`, { data })
        .then((res) => {
          this.getCarts()
          this.loadingItem = ''
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    noCarts () {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: '您的購物車是空的唷~'
      })
    },
    toAdmin () {
      this.$router.push('/login')
    },
    hideMenu () {
      this.ishide = !this.ishide
    },
    checkScreenHeight () {
      const screenHeight = window.screen.height
      if (screenHeight > 1000) {
        console.log(screenHeight)
        this.isFixed = false
      }
    }
  },
  components: {
    RouterView
  },
  created () {
    if (this.$route.path !== '/') {
      this.$router.push('/')
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>

<style scoped>
.my-navbar {
  box-sizing: border-box;
  padding: 10px 16.25%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.48);
}
.my-nav-item:hover {
  color: #ff6915 !important;
}
.shoppingCart {
  background-image: url(../assets/image/shopping_cart.svg);
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease-in-out;
  background-repeat: no-repeat;
}
.shoppingCart:hover {
  transform: scale(1.3);
}
.active-link {
  border-top: 4px solid #ff6915;
  margin-top: -4px;
}
.my-footer {
  padding: 16px 16.25%;
  height: 69px;
  background: #000000;
  flex-grow: 0;
    flex-shrink: 0;
}
.footerText {
  font-weight: 500;
  font-size: 14px;
  line-height: 180%;

  color: rgba(255, 255, 255, 0.75);
}
.footerBtn {
  width: 88px;
  height: 37px;
}

.delBtn:hover {
  color: red;
}
/* rwd */
@media (max-width: 375.5px) {
  .my-navbar {
    padding: 10px 0;
  }
  .my-footer {
    padding: 16px 12px;
    height: 57px;
  }
}
</style>
