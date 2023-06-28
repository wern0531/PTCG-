<template>
  <LoadingItem :active="isLoading" :z-index="1060" :opacity="0">
    <img src="@/assets/image/pikachu_gif.gif" alt="會動的皮卡丘過場圖" />
  </LoadingItem>
  <div class="container" v-if="isready">
    <div class="row pt-5 d-flex flex-column flex-md-row">
      <div class="col-md-3">
        <ul
          class="p-0 text-center d-flex flex-md-column justify-content-between flex-wrap"
        >
          <li
            type="button"
            class="btn border-white bg-myBgCard text-myColor mb-2 fs-4 productList"
            :class="category === '全部商品' ? 'text-myColor' : 'text-white'"
            @click="getProducts('全部商品')"
          >
            全部商品
          </li>
          <li
            type="button"
            class="btn border-white bg-myBgCard mb-2 fs-4 productList"
            :class="category === '單卡' ? 'text-myColor' : 'text-white'"
            @click="getProducts(undefined, '單卡')"
          >
            單卡
          </li>
          <li
            type="button"
            class="btn border-white bg-myBgCard mb-2 fs-4 productList"
            :class="category === '牌組' ? 'text-myColor' : 'text-white'"
            @click="getProducts(undefined, '牌組')"
          >
            牌組
          </li>
          <li
            type="button"
            class="btn border-white bg-myBgCard mb-2 fs-4 productList"
            :class="category === '禮盒' ? 'text-myColor' : 'text-white'"
            @click="getProducts(undefined, '禮盒')"
          >
            禮盒
          </li>
          <li
            type="button"
            class="btn border-white bg-myBgCard mb-2 fs-4 productList"
            :class="category === '周邊' ? 'text-myColor' : 'text-white'"
            @click="getProducts(undefined, '周邊')"
          >
            周邊
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
            v-for="product in productCategory"
            :key="product.id"
          >
            <div class="card bg-myBgCard productCard">
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
import { cartStore } from '@/stores/cart'
import Swal from 'sweetalert2'
import Pagination from '@/components/PaginationComponent.vue'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      isready: false,
      isLoading: false,
      fullPage: false,
      products: [],
      productCategory: [],
      category: '',
      pagination: {},
      page: 1
    }
  },
  computed: {
    isDisable () {
      const store = this.$pinia.state.value
      return store.cart.isDisable
    }
  },
  methods: {
    ...mapActions(cartStore, ['addToCart']),
    getProducts (page = 1, category = '全部商品') {
      this.page = page
      this.category = category
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/products/?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
          if (category === '全部商品') {
            this.productCategory = this.products
            this.isready = true
            this.isLoading = false
          } else {
            this.getCategory(category)
          }
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
    getCategory (category) {
      this.$http
        .get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.productCategory = []
          res.data.products.forEach((item) => {
            if (item.category === category) {
              this.productCategory.push(item)
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
    }
  },
  components: {
    Pagination
  },
  mounted () {
    this.isLoading = true
    this.category = this.$route.params.category
    this.getProducts(undefined, this.category)
  }
}
</script>

<style scoped>
/* .productBtnList {
  margin-top: 40px;
}
.productsList {
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 10px;
  width: 176px;
  height: 52px;
  background-color: #1c1a19;
  border: 1px solid #ff6915;
  border-radius: 8px;
}
.productList {
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 10px;

  width: 176px;
  height: 52px;

  border-radius: 8px;
} */
.productList:hover {
  color: #ff6915 !important;
  border: 1px solid #ff6915 !important;
}
/* .productBtn {
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 10px;
  width: 176px;
  height: 52px;
  background-color: #1c1a19;
  border: 1px solid #ff6915;
  border-radius: 8px;
} */
/* img{
  max-width: 100%;
  height: auto;
  object-fit: cover
} */
.productBtn:hover {
  background-color: #ffdbc7 !important;
}
/* .productsList p,
.productList p,
.productBtn p {
  margin: 0 auto;
  width: 100px;
  height: 36px;
  font-size: 20px;
  line-height: 180%;
} */
/* .productCard {
  background: #1c1a19;
  text-align: center;
  border-radius: 16px;
} */
.productCard:hover {
  transform: translateY(-12px);
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
}
/* .productCard:hover img {
  transform: scale(1.08);
  border: 2px solid transparent;
  box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
} */
.hover-pointer:hover {
  cursor: zoom-in;
}
@media (max-width: 991.5px) {
  /* .productBtnList {
    width: 350px;
    margin: 0 auto;
    padding-left: 0;
    display: flex;
    align-items: center;
  }
  .productsList {
    box-sizing: border-box;
    padding: 8px;
    margin-bottom: 10px;
    width: 320px;
    height: 52px;
    background-color: #1c1a19;
    border: 1px solid #ff6915;
    border-radius: 8px;
  }
  .productList {
    box-sizing: border-box;
    padding: 8px;
    margin-bottom: 10px;
    width: 320px;
    height: 52px;
    border-radius: 8px;
  } */
  /* .productCardWrap {
    width: 350px;
    margin: 0 auto;
  } */
}
</style>
