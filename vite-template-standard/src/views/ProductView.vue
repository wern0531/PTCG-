<template>
  <LoadingItem :active="isLoading" :z-index="1060">
    <div class="loadingGif">
      <img src="../assets/image/pikachu_gif.gif" alt="" />
    </div>
  </LoadingItem>
  <div class="container pt-5">
    <div class="pt-5 d-flex flex-column flex-lg-row align-items-center">
      <div class="mainImg">
        <img style="width: 100%;" :src="product.imageUrl" alt="" />
      </div>
      <div class="ms-5 text-start">
        <h1>{{ product.title }}</h1>
        <div class="my-4">$NT{{ product.price }}</div>
        <div class="row mb-4">
          <div class="col-4">商品說明:</div>
          <div class="col-8">{{product.content}}</div>
        </div>
        <div class="row">
          <div class="col-4">商品描述:</div>
          <div class="col-8">{{product.description}}</div>
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
            <button class="btn btn-myBgMain text-myColor border-myColor" @click="addToCart(product.id, product.title)">
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="d-flex">
            <div class="minImg"><img class="w-100" :src="product.imageUrl" alt=""></div>
            <div class="minImg"><img class="w-100" :src="product.imageUrl" alt=""></div>
            <div class="minImg"><img class="w-100" :src="product.imageUrl" alt=""></div>
            <div class="minImg"><img class="w-100" :src="product.imageUrl" alt=""></div>
        </div> -->
    <div class="my-4 text-center">選購更多{{product.category}}</div>
    <div class="row d-flex flex-column flex-lg-row align-items-center">
      <div
        class="col-lg-3 moreImg"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <router-link :to="`/product/${product.id}`" class="hover-pointer">
          <img class="w-100" :src="product.imageUrl" alt="" />
        </router-link>
        <div class="mt-2">
          <button class="btn btn-myBgMain text-myColor border-myColor" @click="addToCart(product.id,product.title)">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { cartStore } from '../../src/stores/cart'
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
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/products`).then((res) => {
        res.data.products.forEach((item) => {
          if (item.category === category && item.id !== this.product.id) {
            this.products.push(item)
          }
        })
        this.isLoading = false
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
    }
  },
  computed: {
    filteredProducts () {
      return this.products.slice(0, 4) // 取前四筆資料
    }
  },
  watch: {
    '$route.params': {
      handler () {
        this.getProduct()
      }
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style scoped>
.container {
  width: 900px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 23px;

  color: #ffffff;
}
.mainImg {
  width: 450px;
}
/* .minImg{
width: 75px;
box-sizing: border-box;
padding: 1px;
margin-top: 4px;
} */
.moreImg {
  width: 25%;
  box-sizing: border-box;
  padding: 5px;
}
@media (max-width: 992px){
  .container{
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
