<template>
  <LoadingComponent :is-loading="isLoading"></LoadingComponent>
  <div class="container" v-show="isReady">
    <div class="row w-100 pt-5 d-flex flex-column flex-md-row">
      <div class="col-md-3">
        <ul
          class="p-0 text-center d-flex flex-md-column justify-content-between flex-wrap"

        >
          <li
            type="button"
            class="btn border-white bg-myBgCard mb-2 fs-4 productList"
            v-for="thisCategory in allCategory"
          :key="thisCategory"
            :class="category === thisCategory ? 'text-myColor' : 'text-white'"
            @click="getProducts(thisCategory)"
          >
            {{ thisCategory }}
          </li>
        </ul>
      </div>
      <div class="col-md-9">
        <div
          class="p-1 d-flex justify-content-center justify-content-lg-start text-white fs-5 bg-myBgCard"
        >
          全部商品
          <div v-if="category !== '全部商品'">/{{ category }}</div>
        </div>
        <div class="row productCardWrap">
          <div
            class="col-md-6 col-lg-4 p-3"
            v-for="product in products"
            :key="product.id"
          >
            <div class="card bg-myBgCard productCard overflow-hidden">
              <RouterLink
                :to="`/product/${product.id}`"
                class="hover-pointer text-decoration-none"
              >
                <img
                  :src="product.imageUrl"
                  class="card-img-top"
                  alt="商品圖片"
                />
                <div class="p-3">
                  <div class="pb-3 text-start text-white">
                    {{ product.title }}
                  </div>
                  <div class="text-start text-white">
                    NT$ {{ product.price }}
                  </div>
                </div>
              </RouterLink>
              <div class="d-flex justify-content-center">
                <button
                  :class="{ disabled: isDisable }"
                  class="w-100 btn border-myColor bg-myBgCard text-myColor px-5 productBtn"
                  @click.prevent="addToCart(product.id, product.title)"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
        <Pagination
          v-if="totalPage>1"
          :pages="pagination"
          @emit-pages="changePage"
        ></Pagination>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { cartStore } from '@/stores/cart.js'
import axios from 'axios'
import Swal from 'sweetalert2'
import LoadingComponent from '../../components/LoadingComponent.vue'
import Pagination from '@/components/PaginationComponent.vue'

const { VITE_URL, VITE_PATH } = import.meta.env
const isLoading = ref(false)
const isReady = ref(false)
const products = ref([])
const category = ref('')
const pagination = ref({})
const totalPage = ref('')

const cart = cartStore()
const { isDisable } = storeToRefs(cart)
const { addToCart } = cart

// 取得購物車所有商品
const getProducts = (nowCategory = '全部商品') => {
  isReady.value = false
  isLoading.value = true
  category.value = nowCategory
  if (nowCategory === '全部商品') {
    axios
      .get(`${VITE_URL}v2/api/${VITE_PATH}/products`)
      .then((res) => {
        products.value = res.data.products
        pagination.value = res.data.pagination
        totalPage.value = res.data.pagination.total_pages
        isReady.value = true
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
  } else {
    getCategory(nowCategory)
  }
}
getProducts()

// 取得購物車特定標籤商品
const getCategory = (nowCategory) => {
  axios
    .get(`${VITE_URL}v2/api/${VITE_PATH}/products?category=${encodeURIComponent(nowCategory)}`)
    .then((res) => {
      products.value = res.data.products
      pagination.value = res.data.pagination
      totalPage.value = res.data.pagination.total_pages
      isReady.value = true
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

// 切換pagination頁數
const changePage = (nowPage) => {
  isLoading.value = true
  if (category.value === '全部商品') {
    axios
      .get(`${VITE_URL}v2/api/${VITE_PATH}/products?page=${nowPage}`)
      .then((res) => {
        window.scrollTo(0, 0)
        pagination.value = res.data.pagination
        products.value = res.data.products
        isReady.value = true
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
  } else {
    axios
      .get(`${VITE_URL}v2/api/${VITE_PATH}/products?page=${nowPage}&category=${encodeURIComponent(category.value)}`)
      .then((res) => {
        window.scrollTo(0, 0)
        pagination.value = res.data.pagination
        products.value = res.data.products
        isReady.value = true
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
}

// 取得所有不同的category,並額外加入'全部商品'
const allCategory = ref([])
const checkAllCategory = () => {
  axios.get(`${VITE_URL}v2/api/${VITE_PATH}/products/all`).then(res => {
    allCategory.value = ['全部商品', ...new Set(res.data.products.map((item) => item.category))]
  })
}
checkAllCategory()
</script>

<style scoped>
.productList:hover {
  color: #ff6915 !important;
  border: 1px solid #ff6915 !important;
}
.productBtn:hover {
  background-color: #ffdbc7 !important;
}
.productCard:hover {
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
}
.productCard:hover img {
  transform: scale(1.1);
}
.hover-pointer:hover {
  cursor: zoom-in;
}
</style>
