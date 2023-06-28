<template>
  <div class="container">
    <div class="row my-5 align-items-stretch">
      <div class="col-6 col-md-3">
        <div class="d-none d-md-block">
          <img src="@/assets/image/town_league.png" alt="購物流程步驟一" />
        </div>
        <div
          class="border border-myColor rounded-3 p-2 mt-3 d-flex align-items-center justify-content-center"
          :class="{ nowStep: currentPath === '/cart' }"
        >
          <div class="me-2">商品確認</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="d-none d-md-block">
          <img src="@/assets/image/regional_league.png" alt="購物流程步驟二" />
        </div>
        <div
          class="border border-myColor rounded-3 p-2 mt-3 d-flex align-items-center justify-content-center"
          :class="{ nowStep: currentPath === '/cart/information' }"
        >
          <div class="me-2">填寫資料</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="d-none d-md-block">
          <img src="@/assets/image/championships.png" alt="購物流程步驟三" />
        </div>
        <div
          class="border border-myColor rounded-3 p-2 mt-3 d-flex align-items-center justify-content-center"
          :class="{ nowStep: isCurrentPath('/cart/checkOrder') }"
        >
          <div class="me-2">確認訂單</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="d-none d-md-block">
          <img class="mb-2" src="@/assets/image/wcs.png" alt="購物流程步驟四" />
        </div>
        <div
          class="border border-myColor rounded-3 p-2 mt-3 d-flex align-items-center justify-content-center"
          :class="{ nowStep: currentPath === '/cart/completeOrder' }"
        >
          <div class="me-2">完成訂單</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div v-if="currentPath === '/cart'">
      <div v-for="cart in cartsData" :key="cart.id">
        <div
          class="row py-3 mx-0 mb-2 border border-btnBg rounded-3 d-flex align-items-center"
        >
          <div class="col-md-4 mb-3 mb-md-0">
            <img class="w-100" :src="cart.product.imageUrl" alt="商品圖片" />
          </div>
          <div class="col-md-8">
            <div class="row align-items-center">
              <div class="col-8 col-md-8">
                <div class="row align-items-center">
                  <div class="col-md-6 col-lg-8 mb-3 mb-md-0">
                    <div class="fs-5">{{ cart.product.title }}</div>
                  </div>
                  <div class="col-md-6 col-lg-4 mx-auto">
                    <div class="input-group">
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="
                          cart.qty > 1
                            ? updateQty(
                                cart.product_id,
                                cart.qty,
                                cart.id,
                                'reduce'
                              )
                            : null
                        "
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
                        @click="
                          updateQty(cart.product_id, cart.qty, cart.id, 'add')
                        "
                        :disabled="cart.product.id === loadingItem"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4 col-md-4">
                <div class="row align-items-center">
                  <div class="col-md-8 mb-3 mb-md-0">$NT{{ cart.total }}</div>
                  <div class="col-md-4 p-0">
                    <button
                      type="button"
                      :class="{ disabled: isDisable }"
                      class="btn border-0 text-white text-center delBtn"
                      @click="delCart(cart.id, cart.product.title)"
                    >
                      <span class="material-symbols-outlined"> delete </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 d-flex align-items-start align-items-md-center">
        <div>
          <RouterLink
            type="button"
            class="p-0 btn d-flex btn-myBgMain"
            :to="'/products/全部商品'"
          >
            <div class="material-symbols-outlined">arrow_back</div>
            <div>繼續選購</div>
          </RouterLink>
        </div>
        <div class="ms-auto d-flex flex-column flex-md-row align-items-end align-items-md-center">
          <div class="mb-2 mb-md-0">總計: $NT{{ calculateFinalTotal(cartsData) }}</div>
          <div class="ms-3">
            <button
              type="button"
              class="px-3 btn text-myColor border-myColor btn-hover"
              @click="nextStep"
            >
              確認訂單
            </button>
          </div>
        </div>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { cartStore } from '@/stores/cart'
import { RouterView } from 'vue-router'
import Swal from 'sweetalert2'
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
          Swal.fire({
            backdrop: false,
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    },
    calculateFinalTotal (cartsData) {
      return cartsData.reduce((acc, cur) => acc + cur.total, 0)
    },
    nextStep () {
      this.$router.push('/cart/information')
    },
    isCurrentPath (path) {
      // 確認當前路徑是否包含path,是的話就回傳True
      return this.currentPath.includes(path)
    }
  },
  computed: {
    cartsData () {
      const store = this.$pinia.state.value
      return store.cart.carts
    },
    isDisable () {
      const store = this.$pinia.state.value
      return store.cart.isDisable
    }
  },
  watch: {
    $route: function (to, from) {
      this.currentPath = to.path
    },
    cartsData: function (arr) {
      if (this.$route.path === '/cart' && arr.length === 0) {
        Swal.fire({
          backdrop: false,
          icon: 'warning',
          title: '您的購物車空啦~',
          text: '來去看看其他商品吧!!'
        }).then(() => {
          this.$router.push('/products/全部商品')
        })
      }
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
  color: white;
}
.nowStep {
  color: black;
  background-color: #ff6915;
}
.btn-hover:hover {
  background-color: #ffdbc7;
}
.delBtn:hover {
  color: red !important;
}
</style>
