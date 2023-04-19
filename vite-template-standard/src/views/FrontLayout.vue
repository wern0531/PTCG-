<template>
  <nav class="navbar my-navbar navbar-expand-lg bg-myBgMain">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/image/logo.png" alt="PTCGTrainerWeb" />
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
        <img class="d-flex" src="../assets/image/menu.png" alt="菜單" />
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        ref="collapse"
      >
        <ul class="navbar-nav ms-lg-auto">
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
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
  <div
    class="footer mt-3 my-footer d-flex justify-content-center align-items-center"
  >
    <div class="footerText">
      本網站為個人作品使用，非商業用途  |
      <svg type="button" @click="toAdmin"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-postcard"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z"
        />
      </svg> <br>
      ©2023 PTCG TrainerWeb
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { cartStore } from '@/stores/cart'
import { RouterView } from 'vue-router'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      checkCardModal: '',
      loadingItem: ''
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
        position: 'center',
        icon: 'warning',
        title: '您的購物車是空的唷~',
        text: '來去逛逛商品吧!!'
      }).then(() => {
        this.$router.push('/products/全部商品')
      }
      )
    },
    toAdmin () {
      this.$router.push('/login')
    },
    hideMenu () {
      this.$refs.collapse.classList.remove('show')
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
  /* padding: 10px 16.25%; */
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
