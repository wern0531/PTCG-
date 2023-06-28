<template>
  <LoadingItem
    :active="isLoading"
    :z-index="1060"
    :opacity="0"
  >
    <div class="loadingGif">
      <img src="@/assets/image/pikachu_gif.gif" alt="會動的皮卡丘過場圖" />
    </div>
  </LoadingItem>
  <div class="container text-white">
    <p class="fs-2 my-4" v-if="articles.pack.length > 0">補充包資訊</p>
    <div class="row mx-auto mt-5">
      <div
        class="card col-md-6 col-lg-4 mb-2 bg-myBgMain"
        v-for="item in articles.pack"
        :key="item.id"
      >
        <img :src="item.image" class="card-img-top w-100" alt="..." />
        <div class="px-4 py-2 text-white bg-myBgCard">
          <p class="text-start my-2">&lt;{{ item.tag }}&gt;</p>
          <p class="text-start my-2">{{ item.title }}</p>
          <p class="text-start my-2">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <p class="fs-2 my-4" v-if="articles.product.length > 0">商品資訊</p>
    <div class="row">
      <div
        class="card col-md-6 col-lg-4 mb-2 bg-myBgMain"
        style="width: 442px"
        v-for="item in articles.product"
        :key="item.id"
      >
        <div
          class="d-flex justify-content-center align-items-center;"
          style="background-color: black"
        >
          <img
            style="max-width: 134px; max-height: 154px"
            :src="item.image"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="px-4 py-2 text-white bg-myBgCard">
          <p class="text-start my-2">&lt;{{ item.tag }}&gt;</p>
          <p class="text-start my-2">{{ item.title }}</p>
          <p class="text-start my-2">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <p class="fs-2 my-4" v-if="articles.game.length > 0">比賽資訊</p>
    <div class="row">
      <div
        class="card col-md-6 col-lg-4 mb-2 bg-myBgMain"
        style="width: 442px"
        v-for="item in articles.game"
        :key="item.id"
      >
        <div
          class="d-flex justify-content-center align-items-center;"
          style="background-color: black"
        >
          <img
            style="max-width: 134px; max-height: 154px"
            :src="item.image"
            class="card-img-top"
            alt="..."
          />
        </div>

        <div class="px-4 py-2 text-white bg-myBgCard">
          <p class="text-start my-2">&lt;{{ item.tag }}&gt;</p>
          <p class="text-start my-2">{{ item.title }}</p>
          <p class="text-start my-2">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      isLoading: false,
      articles: {
        pack: [],
        product: [],
        game: []
      }
    }
  },
  methods: {
    getArticles () {
      this.$http
        .get(`${VITE_URL}v2/api/${VITE_PATH}/articles`)
        .then((res) => {
          res.data.articles.forEach((item) => {
            if (item.tag === '補充包') {
              this.articles.pack.push(item)
            } else if (item.tag === '商品') {
              this.articles.product.push(item)
            } else if (item.tag === '比賽') {
              this.articles.game.push(item)
            }
          })
          this.isLoading = false
        })
        .catch((err) => {
          Swal.fire({
            backdrop: false,
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    }
  },
  mounted () {
    this.isLoading = true
    this.getArticles()
  }
}
</script>

<style scoped>
/* @media (max-width: 991.5px) {
  h1 {
    padding: 0;
  }
  .container {
    width: 375px;
  }
  .newsCardWrap {
    width: 350px;
    margin: 0 auto;
  }
  .newsCard {
    width: 350px;
    margin: 0 auto;
  }
} */
</style>
