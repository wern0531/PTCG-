<template>
  <nav ref="navbar" class="navbar myNavbar navbar-expand-lg bg-myBgMain">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="../assets/image/logo.png" alt=""
      /></a>
      <div class="d-lg-none ms-auto">
        <router-link
          v-if="cartsData.length > 0"
          to="/cart"
          type="button"
          class="nav-link d-flex align-items-center navbarImg"
        >
          <div class="shoppingCart position-relative">
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >{{ getCartNum }}</span
            >
          </div>
        </router-link>
        <button
          v-else
          type="button"
          class="btn nav-link d-flex align-items-center navbarImg"
          @click="noCarts"
        >
          <div class="shoppingCart position-relative">
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >{{ getCartNum }}</span
            >
          </div>
        </button>
      </div>
      <button
        class="navbar-toggler d-flex justify-content-center align-items-center bg-myBgMain menu"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div
          class="meunIcon d-flex justify-content-center align-items-center"
        ></div>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/home"
              active-class="active-link"
              class="nav-link active navbarHome"
              aria-current="page"
              href="#"
              ><span>首頁</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/products/全部商品"
              active-class="active-link"
              class="nav-link navbarText"
              href="#"
              ><span>商品列表</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/news"
              active-class="active-link"
              class="nav-link navbarText"
              href="#"
              ><span>最新消息</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/deck/夢幻Vmax"
              active-class="active-link"
              class="nav-link navbarText"
              href="#"
              ><span>牌組介紹</span></router-link
            >
          </li>
        </ul>
      </div>
      <div class="d-none d-lg-block">
        <router-link
          v-if="cartsData.length > 0"
          to="/cart"
          type="button"
          class="nav-link d-flex align-items-center navbarImg"
        >
          <div class="shoppingCart position-relative">
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >{{ getCartNum }}</span
            >
          </div>
        </router-link>
        <button
          v-else
          type="button"
          class="btn nav-link d-flex align-items-center navbarImg"
          @click="noCarts"
        >
          <div class="shoppingCart position-relative">
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >{{ getCartNum }}</span
            >
          </div>
        </button>
      </div>
    </div>
  </nav>
  <RouterView></RouterView>
  <div class="footer d-flex justify-content-center justify-content-lg-between align-items-center">
    <div class="footerText">©2023 PTCG 本網站為個人作品使用，非商業用途</div>
    <button type="button" class="footerBtn d-none d-xxl-block" @click="toAdmin">
      <p>後台登入</p>
    </button>
  </div>
  <!-- 購物車modal -->
  <!-- <div
    class="modal fade"
    id="checkCardModal"
    ref="checkCardModal"
    tabindex="-1"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content bg-myBgCard text-white">
        <div class="modal-header">
          <h5 class="modal-title">您的購物車</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table text-white text-center">
            <thead class="row mb-3">
              <th class="col-5">商品</th>
              <th class="col-3">數量</th>
              <th class="col-3">價格</th>
              <th class="col-1"></th>
            </thead>
            <tbody>
              <tr class="row" v-for="cart in cartsData" :key="cart.id">
                <td class="col-5 align-middle text-center">
                  {{ cart.product.title }}
                </td>
                <td class="col-3 align-middle text-center">
                  {{ cart.qty }}
                </td>
                <td class="col-3 align-middle text-center">$NT{{ cart.total }}</td>
                <td class="col-1 align-middle text-center">
                  <div
                    class=" mx-auto delBtn"
                    @click="delCart(cart.id, cart.product.title)"
                  >
                    <span
                      type="button"
                      class="text-center material-symbols-outlined"
                    >
                      delete
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer ms">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            繼續購物
          </button>
          <router-link
            class="btn btn-myColor ms-auto"
            v-if="cartsData.length > 0"
            :to="cart"
            >前往結帳</router-link
          >
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { cartStore } from '../../src/stores/cart'
// import { Modal } from 'bootstrap'
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
      this.$router.push('login')
    }
    // opencheckCartsModal () {
    //   this.getCarts()
    //   const store = this.$pinia.state.value
    //   this.carts = store.cart.carts
    //   if (this.carts.length === 0) {
    //     Swal.fire({
    //       icon: 'warning',
    //       title: 'Oops...',
    //       text: '您的購物車是空的唷~'
    //     })
    //   } else {
    //     this.checkCardModal.show()
    //     console.log(this.carts)
    //   }
    // },
    // delCheckCartsModal () {
    //   this.checkCardModal.hide()
    // },
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
    // if (this.$route.path === '/home') {
    //   window.addEventListener('scroll', this.handleScroll)
    // }
    // this.checkCardModal = new Modal(this.$refs.checkCardModal, {
    //   keyboard: false
    // })
  }
}
</script>

<style scoped>
.myNavbar {
  box-sizing: border-box;
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
.navbarText span:hover,
.navbarHome span:hover {
  color: #ff6915 !important;
}
.navbarImg {
  width: 38px;
  height: 63px;

  margin-left: 24px;
}
.shoppingCart {
  background-image: url(../assets/image/shopping_cart.svg);
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease-in-out;
  background-repeat: no-repeat;
}
.shoppingCart:hover {
  transform: scale(1.4);
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

.delBtn:hover {
  color: red;
}

/* rwd */
@media (max-width: 992px) {
  .myNavbar {
    padding: 0px;
    height: auto;
  }
  .menu {
    width: 40px;
    height: 40px;
  }

  .menu .meunIcon {
    background: url(../assets/image/menu.png);
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    transition: transform 0.2s ease-in-out;
  }
  .meunIcon:hover {
    transform: scale(1.6);
  }
  .navbarHome,
  .navbarText {
    background: #1c1a19;
    width: 100%;
    margin: 0px;
    height: 69px;
  }
  .navbarText:hover,
  .navbarHome:hover {
    color: #ffffff;
    background: #ff6915;
  }
  .navbarText span:hover,
  .navbarHome span:hover {
    color: #ffffff !important;
  }
  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 12px;
  }
}
</style>
