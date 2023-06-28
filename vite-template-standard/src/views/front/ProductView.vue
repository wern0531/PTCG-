<template>
  <LoadingItem
    :active="isLoading"
    :z-index="1060"
    :is-full-page="false"
    :opacity="0"
  >
      <img src="@/assets/image/pikachu_gif.gif" alt="會動的皮卡丘過場圖" />
  </LoadingItem>
  <div class="container" v-if="isready">
    <div class="pt-5">
      <div class="row flex-column flex-lg-row align-items-center">
        <div class="col-lg-7">
          <div class="mainImg">
            <img
              style="width: 100%"
              :src="product.imageUrl"
              alt="單一產品圖片"
            />
          </div>
        </div>
        <div class="col-lg-5">
          <div class="ms-lg-5 mt-3 mt-lg-0 text-lg-start">
            <h1>{{ product.title }}</h1>
            <div class="my-4">NT$ {{ product.price }}</div>
            <div class="row mb-4">
              <div class="col-6 col-lg-4">商品說明:</div>
              <div class="col-6 col-lg-8">{{ product.content }}</div>
            </div>
            <div class="row">
              <div class="col-6 col-lg-4">商品描述:</div>
              <div class="col-6 col-lg-8">{{ product.description }}</div>
            </div>
            <div class="row mt-4">
              <div class="col-6">
                <div class="input-group mx-auto m-lg-0 w-75">
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="qty > 1 ? (qty -= 1) : null"
                    :disabled="product.id === loadingItem"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    class="form-control text-center"
                    v-model.number="qty"
                    min="0"
                    disabled
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="qty += 1"
                    :disabled="product.id === loadingItem"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="col-6">
                <button
                  :class="{ disabled: isDisable }"
                  class="btn btn-myBgMain text-myColor border-myColor"
                  @click="addToCart(product.id, product.title)"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
          <div class="text-start ms-5 mt-5">
            本網站商品皆為正版<br />
            為保障你我權益，貨到拆封請全程錄影<br />
            商品於七日內附上影片方可退貨
          </div>
        </div>
      </div>
    </div>
    <div class="my-4 text-center">
      選購更多{{ product.category }} <br />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-down-short"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
        />
      </svg>
    </div>
    <div class="row d-flex flex-column flex-lg-row align-items-center">
      <div
        class="col-lg-3 moreImg mb-4 m-lg-0"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <div
          class="hover"
          style="cursor: pointer"
          @click="changeProduct(product.id)"
        >
          <img class="w-100" :src="product.imageUrl" alt="更多產品圖片" />
        </div>
        <div class="pt-2 bg-myBgCard">{{ product.title }}</div>
        <div class="pt-2 bg-myBgCard rounded-bottom">
          <button
            :class="{ disabled: isDisable }"
            class="w-100 btn btn-myBgMain text-myColor border-myColor"
            @click="addToCart(product.id, product.title)"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { cartStore } from '@/stores/cart'
import Swal from 'sweetalert2'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      isready: false,
      isLoading: false,
      qty: 1,
      products: [],
      product: {},
      category: '',
      loadingItem: ''
    }
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    getProducts (category) {
      this.products = []
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then((res) => {
          res.data.products.forEach((item) => {
            if (item.category === category && item.id !== this.product.id) {
              this.products.push(item)
            }
          })
          this.isready = true
          this.isLoading = false
        })
        .catch((err) => {
          this.isLoading = false
          Swal.fire({
            backdrop: false,
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    },
    getProduct () {
      const { id } = this.$route.params
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
          this.category = this.product.category
          this.getProducts(this.category)
        })
        .catch((err) => {
          this.isLoading = false
          Swal.fire({
            backdrop: false,
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    },
    changeProduct (id) {
      this.isready = false
      this.isLoading = true
      this.$router.push(`/product/${id}`).then(() => {
        this.getProduct()
      })
    }
  },
  computed: {
    filteredProducts () {
      return this.products.slice(0, 4) // 取前四筆資料
    },
    isDisable () {
      const store = this.$pinia.state.value
      return store.cart.isDisable
    }
  },
  mounted () {
    this.isLoading = true
    this.getProduct()
  }
}
</script>

<style scoped>
.container {
  font-weight: 900;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
  flex-grow: 1;
}
</style>
