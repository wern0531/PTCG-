<template>
  <nav class="navbar my-navbar fixed-top navbar-expand-lg bg-myBgMain">
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
          <div class="shoppingCart position-relative"></div>
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
        <ul class="navbar-nav ms-auto">
          <li class="nav-item p-3 p-lg-0" @click="hideMenu">
            <RouterLink
              to="/products/全部商品"
              active-class="active-link"
              class="nav-link my-nav-item text-white d-block"
              href="#"
              >商品列表</RouterLink
            >
          </li>
          <li class="nav-item p-3 p-lg-0 ms-lg-4" @click="hideMenu">
            <RouterLink
              to="/news"
              active-class="active-link"
              class="nav-link my-nav-item text-white"
              href="#"
              >最新消息</RouterLink
            >
          </li>
          <li class="nav-item p-3 p-lg-0 ms-lg-4" @click="hideMenu">
            <RouterLink
              to="/deck/夢幻Vmax"
              active-class="active-link"
              class="nav-link my-nav-item text-white"
              href="#"
              >牌組介紹</RouterLink
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
              <div class="shoppingCart position-relative"></div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { cartStore } from '@/stores/cart'
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
        backdrop: false,
        position: 'top-end',
        icon: 'warning',
        title: '您的購物車是空的唷~',
        text: '來去逛逛商品吧!!'
      }).then(() => {
        this.$router.push('/products/全部商品')
      })
    },
    hideMenu () {
      this.$refs.collapse.classList.remove('show')
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
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.48);
}
.nav-item {
  position: relative;
  display: block;
}
.nav-item {
  font-weight: 900;
}
.my-nav-item::after {
  content: "";
  width: 0;
  height: 4px;
  background-color: #ff6915 !important;
  position: absolute;
  top: 100%;
  left: 50%;
  transition: all 0.8s;
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
@media (min-width: 992px) {
  .my-nav-item:hover::after {
    width: 100%;
    left: 0;
  }
}
</style>
