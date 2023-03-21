<template>
  <LoadingItem :active="isLoading" :z-index="1060">
    <div class="loadingGif">
      <img src="../assets/image/pikachu_gif.gif" alt="" />
    </div>
  </LoadingItem>
  <!-- <img
    class="d-block w-100"
    src="https://storage.googleapis.com/vue-course-api.appspot.com/wern/1676997146858.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gbw08XkxL8gSSVkD2k2Dx6zl%2BCqCfBHn3PXdhQb6GBgke3r8XFYzr3at35VvA%2Fbf64WFwG6Hoztflt1lkIPz1PLhKaEeiyQXFJhI0WopbhvO8cozCBPESdXYPhnJqPNssLx7PH47YUWZUQ38tO8v3Q1iS6xG7x2nRAn8OCN3WaS3rgqFspRrTDyvz7jCxZJ1BJlbbcVFF5OJ9ITmsU3ovhAJrh0KVLMGOHzcU%2FwyBhsZ3WxJkUOuehJkOWYbTI%2F1PAjn9ejjz7QZTmQlmEOtVq8MEmQdsrHTnx5OgRKmf%2Bl1IxVwn9pdzAt3WGg2o7NVxQL3TL74TOjZDmA2i%2FIjFw%3D%3D"
    alt=""
  /> -->
  <div class="container">
    <div class="row d-flex flex-column flex-lg-row">
      <div class="col-lg-3">
        <ul class="w-100 pt-3 text-center d-flex flex-column productBtnList">
          <li type="button" class="btn text-myColor productsList" @click="getProducts('全部商品')">
            <p>全部商品</p>
          </li>
          <li type="button" class="btn border-white productList" :class="category === '單卡' ? 'text-myColor' : 'text-white'" @click="getProducts(undefined,'單卡')">
            <p>單卡</p>
          </li>
          <li type="button" class="btn border-white productList" :class="category === '牌組' ? 'text-myColor' : 'text-white'" @click="getProducts(undefined,'牌組')">
            <p>牌組</p>
          </li>
          <li type="button" class="btn border-white productList" :class="category === '禮盒' ? 'text-myColor' : 'text-white'" @click="getProducts(undefined,'禮盒')">
            <p>禮盒</p>
          </li>
          <li type="button" class="btn border-white productList" :class="category === '周邊' ? 'text-myColor' : 'text-white'" @click="getProducts(undefined,'周邊')">
            <p>周邊</p>
          </li>
        </ul>
      </div>
      <div class="col-lg-9">
        <div class="pt-3 d-flex justify-content-center justify-content-lg-start text-white">
          全部商品
          <div v-if="category!=='全部商品'">/{{ category }}</div>
        </div>
        <div class="row  productCardWrap">
            <div
            class="col-lg-4 p-3"
            v-for="product in productCategory"
            :key="product.id"
          >
            <div class="pt-3 card productCard">
              <router-link :to="`/product/${product.id}`" class="hover-pointer">
                <div class="text-center">
                  <img
                    style="max-width: 70%; height: auto"
                    :src="product.imageUrl"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </router-link>
              <div class="py-3" style="width: 176px; margin: 0 auto">
                <div class="pb-3 text-start text-white">
                  {{ product.title }}
                </div>
                <div class="pb-3 text-start text-white">
                  $NT{{ product.price }}
                </div>
                <button
                  class="btn text-myColor productBtn"
                  @click="addToCart(product.id, product.title)"
                >
                  <p>加入購物車</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Pagination
          v-if="category == '全部商品'"
          :pages="pagination"
          @emit-pages="getProducts"
        ></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { cartStore } from '../../src/stores/cart'
import Pagination from '../components/PaginationView.vue'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      products: [],
      productCategory: [],
      category: '',
      pagination: {},
      page: 1
    }
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    getProducts (page = 1, category = '全部商品') {
      this.isLoading = true
      this.page = page
      this.category = category
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/products/?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          if (category === '全部商品') {
            this.productCategory = this.products
            this.isLoading = false
          } else {
            this.getCategory(category)
          }
        })
    },
    getCategory (category) {
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then(res => {
          console.log(res.data.products)
          this.productCategory = []
          res.data.products.forEach((item) => {
            if (item.category === category) {
              this.productCategory.push(item)
            }
          })
          this.isLoading = false
        })
    }
  },
  components: {
    Pagination
  },
  mounted () {
    this.category = this.$route.params.category
    this.getProducts(undefined, this.category)
  }
}
</script>

<style scoped>
.loadingGif {
  width: 283px;
  height: 283px;
}
.productBtnList {
  margin-top: 40px;
}
.productsList{
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 10px;

  width: 176px;
  height: 52px;

  background-color: #1C1A19;
  border: 1px solid #ff6915;
  border-radius: 8px;

}
.productList{
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 10px;

  width: 176px;
  height: 52px;

  border-radius: 8px;

}
.productList:hover{
  color: #ff6915 !important
}
.productBtn {
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 10px;

  width: 176px;
  height: 52px;

  background-color: #1C1A19;
  border: 1px solid #ff6915;
  border-radius: 8px;
}
.productBtn:hover {
  background-color: #ffdbc7;
}
.productsList p,
.productList p,
.productBtn p {
  margin: 0 auto;
  width: 100px;
  height: 36px;
  font-size: 20px;
  line-height: 180%;
}
.productCard {
  background: #1c1a19;
  text-align: center;
  border-radius: 16px;
}
.productCard:hover {
  transform: translateY(-12px);
}
.productCard:hover img {
  transform: scale(1.08);
  border: 2px solid transparent;
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
}
.hover-pointer:hover {
  cursor: zoom-in;
}
@media (max-width: 992px){
  .productBtnList {
    width: 350px;
  margin: 0 auto;
  padding-left: 0;
  display: flex;
  align-items: center;
}
.productsList{
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 10px;

  width: 320px;
  height: 52px;

  background-color: #1C1A19;
  border: 1px solid #ff6915;
  border-radius: 8px;

}
.productList{
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 10px;

  width: 320px;
  height: 52px;

  border-radius: 8px;

}
  .productCardWrap {
    width: 350px;
  margin: 0 auto;
}
}
</style>
