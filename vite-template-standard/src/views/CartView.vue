<template>
  <div class="container">
    <div class="row my-5 align-items-stretch">
      <div class="col-lg-3">
        <div class="d-none d-lg-block"><img src="../assets/image/town_league.png" alt=""></div>
        <div class="step mt-3" :class="{'nowStep': currentPath === '/cart'}">
          <div
            class="d-flex align-items-center justify-content-center flex-column"
          >
            商品確認
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="d-none d-lg-block"><img src="../assets/image/regional_league.png" alt=""></div>
        <div class="step mt-3" :class="{'nowStep': currentPath === '/cart/information'}">
          <div
            class="d-flex align-items-center justify-content-center flex-column"
          >
          填寫資料
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="d-none d-lg-block"><img src="../assets/image/championships.png" alt=""></div>
        <div class="step mt-3" :class="{'nowStep': isCurrentPath('/cart/checkOrder')}">
          <div
            class="d-flex align-items-center justify-content-center flex-column"
          >
          確認訂單
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="d-none d-lg-block"><img class="mb-2" src="../assets/image/wcs.png" alt=""></div>
        <div class="step mt-3" :class="{'nowStep': currentPath === '/cart/completeOrder'}">
          <div
            class="d-flex align-items-center justify-content-center flex-column"
          >
          完成訂單
          </div>
        </div>
      </div>
    </div>
    <div v-if="currentPath === '/cart'">
    <div class="" v-for="cart in cartsData" :key="cart.id">
      <div
        class="row p-3 mx-0 mb-2 border border-btnBg rounded-3 d-flex align-items-center"
      >
        <div class="col-lg-2">
          <img style="width: 100px" :src="cart.product.imageUrl" alt="" />
        </div>
        <div class="mt-2 mt-lg-0 col-lg-3">{{ cart.product.title }}</div>
        <div class="mt-2 mt-lg-0 col-lg-2">
          <div class="input-group">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="updateQty(cart.product_id, cart.qty, cart.id, 'reduce')"
              :disabled="cart.product.id === loadingItem"
            >
              -
            </button>
            <input
              type="text"
              class="btn form-control text-center"
              v-model.number="cart.qty"
              min="0"
              disabled
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="updateQty(cart.product_id, cart.qty, cart.id, 'add')"
              :disabled="cart.product.id === loadingItem"
            >
              +
            </button>
          </div>
        </div>
        <div class="mt-2 mt-lg-0 col-lg-3">$NT{{ cart.total }}</div>
        <div class="mt-2 mt-lg-0 col-lg-2 delBtn" @click="delCart(cart.id, cart.product.title)">
          <span type="button" class="material-symbols-outlined"> delete </span>
        </div>
      </div>
    </div>
      <div class="mt-3 mx-0 row d-flex align-items-center">
        <div class="col-lg-2">
          <router-link type="button" class="btn d-flex btn-myBgMain" :to="'/products/全部商品'">
            <div class="material-symbols-outlined">arrow_back</div>
            <div>繼續選購</div>
          </router-link>
        </div>
        <div class="col-lg-5 d-flex ms-auto align-items-center">
          <div class="col-lg-6">
          總計: $NT{{ calculateFinalTotal(cartsData) }}
        </div>
        <div class="col-lg-4 ms-auto">
            <button type="button" class="btn text-myColor border-myColor btn-hover" @click="nextStep">確認訂單</button>
        </div>
        </div>

      </div>

    </div>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { cartStore } from '../../src/stores/cart'
import { RouterView } from 'vue-router'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      carts: [],
      loadingItem: '',
      currentPath: '/cart'
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'delCart']),
    updateQty (productId, qty, id, status) {
      let data = {}
      if (status === 'add') {
        data = {
          product_id: productId,
          qty: (qty += 1)
        }
      } else if (status === 'reduce') {
        data = {
          product_id: productId,
          qty: (qty -= 1)
        }
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
    calculateFinalTotal (cartsData) {
      return cartsData.reduce((acc, cur) => acc + cur.total, 0)
    },
    nextStep () {
      this.$router.push('/cart/information')
    },
    isCurrentPath (path) { // 確認當前路徑是否包含path,是的話就回傳True
      return this.currentPath.includes(path)
    }
  },
  computed: {
    cartsData () {
      const store = this.$pinia.state.value
      return store.cart.carts
    }
  },
  watch: {
    $route: function (to, from) {
      this.currentPath = to.path
    }
  },
  components: {
    RouterView
  },
  mounted () {
    this.getCarts()
  }
}
</script>

<style scoped>
.container {
  max-width: 900px;
  min-height: 100%;
  color: white;
  flex-grow: 1;
}
.step {
  height: 40px;
  margin: auto;
  display: flex;
  justify-content: center;
  border: 1px solid #ff6915;
  border-radius: 8px;
}
.nowStep{
    background-color: #ff6915;
}
.btn-hover:hover {
  background-color: #ffdbc7;
}
.delBtn:hover {
  color: red;
}
@media (max-width: 991.5px){
  .step{
    width: 50%;
    margin-bottom: 5px;
  }
}
</style>
