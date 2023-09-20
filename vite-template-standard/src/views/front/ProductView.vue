<template>
  <LoadingComponent :is-loading="isLoading"></LoadingComponent>
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
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="col-6">
                <button
                  :class="{ disabled: isDisable }"
                  class="btn btn-myBgMain text-myColor border-myColor"
                  @click="addToCart(product.id, product.title, qty)"
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
    <div class="row d-flex flex-column flex-md-row align-items-center">
      <div
        class="col-md-6 col-lg-3 mb-4 m-lg-0"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <!-- <div style="cursor: pointer" @click="getProduct(product.id)">
          <img class="w-100" :src="product.imageUrl" alt="更多產品圖片" />
        </div>
        <div class="pt-2 bg-myBgCard">{{ product.title }}</div> -->
        <RouterLink style="cursor: pointer" :to="`/product/${product.id}`">
          <img class="w-100" :src="product.imageUrl" alt="更多產品圖片" />
          <div class="pt-2 bg-myBgCard">{{ product.title }}</div>
        </RouterLink>
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

<script setup>
import LoadingComponent from '../../components/LoadingComponent.vue'
import { ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { cartStore } from '@/stores/cart.js'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useRoute } from 'vue-router'

const qty = ref(1)
const cart = cartStore()
const { addToCart } = cart
const { isDisable } = storeToRefs(cart)

const isready = ref(false)
const isLoading = ref(false)
const products = ref([])
const product = ref({})
const category = ref('')
const { VITE_URL, VITE_PATH } = import.meta.env
const currentRoute = useRoute()
const id = ref(currentRoute.params.id)
watch(
  () => currentRoute.params.id,
  () => {
    getProduct()
  }
)
const getProduct = () => {
  isLoading.value = true
  // isready.value = false
  axios
    .get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id.value}`)
    .then((res) => {
      window.scrollTo(0, 0)
      product.value = res.data.product
      category.value = product.value.category
      getProducts(category)
    })
    .catch((err) => {
      isLoading.value = false
      Swal.fire({
        backdrop: false,
        icon: 'error',
        title: 'Oops...',
        text: `${err.response.data.message}`
      })
    })
}
getProduct()

const getProducts = (category) => {
  products.value = []
  axios
    .get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
    .then((res) => {
      res.data.products.forEach((item) => {
        if (item.category === category.value && item.id !== product.value.id) {
          products.value.push(item)
        }
      })
      isready.value = true
      isLoading.value = false
    })
    .catch((err) => {
      isLoading.value = false
      Swal.fire({
        backdrop: false,
        icon: 'error',
        title: 'Oops...',
        text: `${err.response.data.message}`
      })
    })
}

const filteredProducts = computed(() => {
  return products.value.slice(0, 4) // 取前四筆資料
})
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
