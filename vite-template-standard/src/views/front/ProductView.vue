<template>
  <LoadingItem :active="isLoading" :z-index="1060">
    <div class="loadingGif">
      <img src="@/assets/image/pikachu_gif.gif" alt="會動的皮卡丘過場圖" />
    </div>
  </LoadingItem>
  <div class="container pt-5">
    <div class="pt-5 d-flex flex-column flex-lg-row align-items-center">
      <div class="mainImg">
        <img style="width: 100%" :src="product.imageUrl" alt="單一產品圖片" />
      </div>
      <div class="ms-5 mt-3 mt-md-0 text-start">
        <h1>{{ product.title }}</h1>
        <div class="my-4">NT$ {{ product.price }}</div>
        <div class="row mb-4">
          <div class="col-4">商品說明:</div>
          <div class="col-8">{{ product.content }}</div>
        </div>
        <div class="row">
          <div class="col-4">商品描述:</div>
          <div class="col-8">{{ product.description }}</div>
        </div>
        <div class="row mt-4 align-items-end">
          <div class="col-5 col-lg-6">
            <div class="input-group">
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
          <div class="col-5 col-lg-4">
            <button
              class="btn btn-myBgMain text-myColor border-myColor"
              @click="addToCart(product.id, product.title)"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-start my-4">
      本網站商品皆為正版<br />
      為保障你我權益，貨到拆封請全程錄影<br />
      商品於七日內附上影片方可退貨
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
        class="col-lg-3 moreImg"
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
        <div class="mt-2">{{ product.title }}</div>
        <div class="mt-2">
          <button
            class="btn btn-myBgMain text-myColor border-myColor"
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
        })
        .then((this.isLoading = false))
        .catch((err) => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    },
    getProduct () {
      this.isLoading = true
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
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    },
    changeProduct (id) {
      this.$router.push(`/product/${id}`).then(() => {
        this.getProduct()
      })
    }
  },
  computed: {
    filteredProducts () {
      return this.products.slice(0, 4) // 取前四筆資料
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style scoped>
.container {
  max-width: 900px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
  min-height: 100%;
  flex-grow: 1;
}
.mainImg {
  width: 450px;
}
.moreImg {
  width: 25%;
  box-sizing: border-box;
  padding: 5px;
}
@media (max-width: 992px) {
  .container {
    width: 375px;
  }
  .mainImg {
    width: 350px;
  }
  .moreImg {
    width: 350px;
  }
}
</style>
