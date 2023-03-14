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
          <!-- <router-link
            to="/cart"
            active-class="active-link"
            class="nav-link d-flex align-items-center navbarImg"
            href="#"
            ><img
              class="shoppingCart"
              src="../assets/image/shopping_cart.svg"
              alt=""
          /></router-link> -->
          <div
            type="button"
            @click="opencheckCartsModal"
            class="nav-link d-flex align-items-center navbarImg"
          >
            <img
              class="shoppingCart"
              src="../assets/image/shopping_cart.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
  <RouterView></RouterView>
  <div class="footer d-flex justify-content-between align-items-center">
    <div class="footerText">©2023 PTCG 本網站為個人作品使用，非商業用途</div>
    <button type="button" class="footerBtn"><p>後台登入</p></button>
  </div>
  <!-- 購物車modal -->
  <div
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
            <thead class="row">
              <th class="col-5">商品</th>
              <th class="col-3">數量</th>
              <th class="col-2">價格</th>
              <th class="col-2">刪除</th>
            </thead>
            <tbody class="row">
              <tr class="" v-for="cart in carts" :key="cart.id">
                <td class="col-5 align-middle text-center">
                  {{ cart.product.title }}
                </td>
                <td class="col-3 align-middle text-center align-items-center">
                  <div class="d-flex justify-content-center">
                    <div class="input-group input-group-sm">
                      <div class="input-group mb-3">
                        <input
                          min="1"
                          type="number"
                          class="form-control"
                          v-model.number="cart.qty"
                          :disabled="cart.product.id === loadingItem"
                          @change="
                            updateQty(cart.product_id, cart.qty, cart.id)
                          "
                        />
                        <span class="input-group-text" id="basic-addon2">{{
                          cart.product.unit
                        }}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="col-2 align-middle text-center">{{ cart.total }}</td>
                <td class="col-2 align-middle text-center"></td>
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
            to="/cart"
            @click="delCheckCartsModal"
            >前往結帳</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
import { RouterView } from 'vue-router'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      checkCardModal: '',
      carts: [],
      loadingItem: ''
    }
  },
  methods: {
    getCarts () {
      this.$http.get(`${VITE_URL}v2/api/${VITE_PATH}/cart`).then((res) => {
        this.carts = res.data.data.carts
        console.log(this.carts)
      })
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
    opencheckCartsModal () {
      this.getCarts()
      this.checkCardModal.show()
      console.log(this.carts)
    },
    delCheckCartsModal () {
      this.checkCardModal.hide()
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
    this.checkCardModal = new Modal(this.$refs.checkCardModal, {
      keyboard: false
    })
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
