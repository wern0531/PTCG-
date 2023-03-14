<template>
  <div class="container">
    <div class="row my-3 align-items-stretch">
      <div class="col-3">
        <div class="step" :class="{'nowStep': currentPath === '/cart'}">
          <div
            class="d-flex align-items-center justify-content-center flex-column"
          >
            商品確認
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="step" :class="{'nowStep': currentPath === '/cart/information'}">
          <div
            class="d-flex align-items-center justify-content-center flex-column"
          >
          填寫資料
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="step" :class="{'nowStep': currentPath === '/cart/checkOrder'}">
          <div
            class="d-flex align-items-center justify-content-center flex-column"
          >
          確認訂單
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="step" :class="{'nowStep': currentPath === '/cart/completeOrder'}">
          <div
            class="d-flex align-items-center justify-content-center flex-column"
          >
          完成訂單
          </div>
        </div>
      </div>
    </div>
    <div v-if="currentPath === '/cart'">
        <div class="" v-for="cart in carts" :key="cart.id">
      <div
        class="row p-3 mb-2 border border-btnBg rounded-3 d-flex align-items-center"
      >
        <div class="col-2">
          <img style="width: 100px" :src="cart.product.imageUrl" alt="" />
        </div>
        <div class="col-3">{{ cart.product.title }}</div>
        <div class="col-2">
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
        <div class="col-3">$NT{{ cart.total }}</div>
        <div class="col-2 delBtn">
          <span type="button" class="material-symbols-outlined"> delete </span>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="row d-flex align-items-center">
        <div class="col-2">
          <button type="button" class="btn text-myColor">繼續選購</button>
        </div>
        <div class="col-3 ms-auto">
          總計: $NT{{ calculateFinalTotal(carts) }}
        </div>
        <div class="col-2">
            <button type="button" class="btn text-myColor" @click="nextStep">確認訂單</button>
        </div>
      </div>
    </div>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script>
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
    getCarts () {
      this.$http.get(`${VITE_URL}v2/api/${VITE_PATH}/cart`).then((res) => {
        this.carts = res.data.data.carts
        console.log(this.carts)
      })
    },
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
    calculateFinalTotal (carts) {
      return carts.reduce((acc, cur) => acc + cur.total, 0)
    },
    nextStep () {
      this.$router.push('/cart/information')
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
    console.log(this.carts)
  }
}
</script>

<style scoped>
.container {
  width: 900px;
  color: white;
}
.step {
  width: 100px;
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
.btn {
  box-sizing: border-box;
  padding: 8px;

  background-color: #121110;
  border: 1px solid #ff6915;
  border-radius: 8px;
}
.btn:hover {
  background-color: #ffdbc7;
}
.delBtn:hover {
  color: red;
}
</style>
