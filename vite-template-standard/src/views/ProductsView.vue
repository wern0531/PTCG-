<template>
  <LoadingItem :active="isLoading" :z-index="1060">
    <div class="loadingGif">
      <img src="../assets/image/pikachu_gif.gif" alt="" />
    </div>
  </LoadingItem>
  <img
    class="d-block w-100"
    src="https://storage.googleapis.com/vue-course-api.appspot.com/wern/1676997146858.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gbw08XkxL8gSSVkD2k2Dx6zl%2BCqCfBHn3PXdhQb6GBgke3r8XFYzr3at35VvA%2Fbf64WFwG6Hoztflt1lkIPz1PLhKaEeiyQXFJhI0WopbhvO8cozCBPESdXYPhnJqPNssLx7PH47YUWZUQ38tO8v3Q1iS6xG7x2nRAn8OCN3WaS3rgqFspRrTDyvz7jCxZJ1BJlbbcVFF5OJ9ITmsU3ovhAJrh0KVLMGOHzcU%2FwyBhsZ3WxJkUOuehJkOWYbTI%2F1PAjn9ejjz7QZTmQlmEOtVq8MEmQdsrHTnx5OgRKmf%2Bl1IxVwn9pdzAt3WGg2o7NVxQL3TL74TOjZDmA2i%2FIjFw%3D%3D"
    alt=""
  />
  <div class="container">
    <div class="row">
      <div class="col-3">
        <ul class="w-100 pt-3 text-center d-flex flex-column productBtnList">
          <li type="button" class="btn" @click="getProducts('全部商品')">
            <p>全部商品</p>
          </li>
          <li type="button" class="btn" @click="getProducts('單卡')">
            <p>單卡</p>
          </li>
          <li type="button" class="btn" @click="getProducts('牌組')">
            <p>牌組</p>
          </li>
          <li type="button" class="btn" @click="getProducts('禮盒')">
            <p>禮盒</p>
          </li>
          <li type="button" class="btn" @click="getProducts('周邊')">
            <p>周邊</p>
          </li>
        </ul>
      </div>
      <div class="col-9">
        <div class="pt-3 text-start d-flex">全部商品<div v-if="category">/</div> {{ category }}</div>
        <div class="row">
          <div
            class="col-4 p-3"
            v-for="product in productCategory"
            :key="product.id"
          >
            <div class="pt-3 card productCard">
              <div class="text-center">
                <img
                  style="max-width: 70%; height: auto"
                  :src="product.imageUrl"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="py-3" style="width: 176px; margin: 0 auto">
                <div class="pb-3 text-start text-white">
                  {{ product.title }}
                </div>
                <div class="pb-3 text-start text-white">
                  $NT{{ product.price }}
                </div>
                <button class="btn"><p>加入購物車</p></button>
              </div>
            </div>
          </div>
        </div>
        <Pagination
          v-if="!category"
          :pages="pagination"
          @emit-pages="getProducts"
        ></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
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
    getProducts (category, page = 1) {
      this.isLoading = true
      this.page = page
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/products/?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          if (category === '全部商品') {
            this.category = category
            this.productCategory = this.products
          } else {
            this.getCategory(category)
          }
          this.isLoading = false
        })
    },
    getCategory (category) {
      this.category = category
      this.productCategory = []
      this.products.forEach((item) => {
        if (item.category === category) {
          this.productCategory.push(item)
        }
      })
    }
  },
  components: {
    Pagination
  },
  mounted () {
    console.log(this.$route.params)
    this.category = this.$route.params.category
    this.getProducts(this.category)
  }

}
</script>

<style scoped>
div {
  color: red;
}
.loadingGif {
  width: 283px;
  height: 283px;
}
.productBtnList {
  margin-top: 40px;
}
.btn {
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 10px;

  width: 176px;
  height: 52px;

  background-color: #121110;
  border: 1px solid #ff6915;
  border-radius: 8px;
}
.btn:hover {
  background-color: #ffdbc7;
}
.btn p {
  margin: 0 auto;
  width: 100px;
  height: 36px;
  /* font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700; */
  font-size: 20px;
  line-height: 180%;
  color: #ff6915;
}
.productCard {
  background: #1c1a19;
  text-align: center;
  border-radius: 16px;
}
.productCard:hover {
  transform: translateY(-8px);
  border: 1px solid rgba(255, 105, 21, 0.48);
}
.productCard img:hover {
  max-width: 80%;
}
</style>
