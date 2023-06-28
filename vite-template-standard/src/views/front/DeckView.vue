<template>
  <LoadingItem :active="isLoading" :z-index="1060" :opacity="0">
    <!-- <div class="loadingGif"> -->
    <img src="@/assets/image/pikachu_gif.gif" alt="會動的皮卡丘過場圖" />
    <!-- </div> -->
  </LoadingItem>
  <div class="container mt-5" v-if="isready">
    <div class="d-flex flex-column flex-md-row">
      <div
        class="mb-2 mb-lg-0 d-flex justify-content-start justify-content-lg-center"
        v-for="(item, index) in deckmenu"
        :key="index"
      >
        <button
          :class="{ disabled: isDisabled }"
          class="deckBtn btn btn-myBgMain text-myColor fs-6 fs-md-3"
          @click="getDeck(item)"
        >
          {{ item }}
        </button>
      </div>
      <!-- 牌組數增加後新增 -->
      <!-- <div class="dropdown ms-5">
        <button
          class="btn btn-light dropdown-toggle text-dark"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          選擇牌組
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li v-for="(item, index) in deckmenu" :key="index">
            <a class="dropdown-item" @click="getDeck(item)">
              {{ item }}
            </a>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
  <div class="container mt-5 p-3" v-if="isready">
    <div class="row align-items-center">
      <div class="col-lg-9">
        <img class="deckImg" :src="article.image" alt="牌組圖片" />
      </div>
      <div class="col-lg-3">
        <div class="ms-3 text-start text-white">
          <div class="row align-items-center my-3 my-mb-5 my-lg-0">
            <div
              class="col-md-6 col-lg-12 mb-4 mb-md-0 text-center text-md-start"
            >
              <p class="mb-3">{{ article.description }}</p>
              <h1 class="mb-0 mb-lg-5">{{ article.title }}</h1>
            </div>
            <div class="col-md-6 col-lg-12">
              <div class="deckList d-flex justify-content-between flex-column">
                <div class="d-flex mb-1 mx-auto mx-md-0">
                  <div class="text-white">牌組強度</div>
                  <div class="d-flex align-items-center text-white ms-3">
                    <i
                      v-for="index in 5"
                      :key="index"
                      :class="{
                        'fa-solid fa-star text-myColor': index <= starLevel,
                        'fa-regular fa-star': index > starLevel,
                      }"
                    ></i>
                  </div>
                </div>
                <div class="d-flex mb-1 mx-auto mx-md-0">
                  <div class="text-white">操作難度</div>
                  <div class="d-flex align-items-center text-white ms-3">
                    <i
                      v-for="index in 5"
                      :key="index"
                      :class="{
                        'fa-solid fa-star text-myColor': index <= starLevel,
                        'fa-regular fa-star': index > starLevel,
                      }"
                    ></i>
                  </div>
                </div>
                <div class="d-flex mx-auto mx-md-0">
                  <div class="text-white">構築價格</div>
                  <div class="d-flex align-items-center text-white ms-3">
                    <i
                      v-for="index in 5"
                      :key="index"
                      :class="{
                        'fa-solid fa-star text-myColor': index <= starLevel,
                        'fa-regular fa-star': index > starLevel,
                      }"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-html="article.content"
      class="mt-3 p-3 text-white text-start border border-white"
    ></div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      isready: false,
      isLoading: false,
      isDisabled: false,
      article: {},
      starLevel: 4,
      title: '',
      id: '',
      deckmenu: []
    }
  },
  methods: {
    getArticles (first = true) {
      this.$http
        .get(`${VITE_URL}v2/api/${VITE_PATH}/articles`)
        .then((res) => {
          if (first === true) {
            const deckdata = res.data.articles
            deckdata.forEach((item) => {
              if (item.tag === '牌組') {
                this.deckmenu.push(item.title)
              }
            })
          }
          res.data.articles.forEach((item) => {
            if (item.title === this.title) {
              this.id = item.id
            }
          })
          this.getArticle()
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
    getArticle () {
      this.$http
        .get(`${VITE_URL}v2/api/${VITE_PATH}/article/${this.id}`)
        .then((res) => {
          this.article = res.data.article
          this.isready = true
        })
        .then(() => {
          this.isLoading = false
          this.isDisabled = false
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
    getDeck (title) {
      this.isLoading = true
      this.isDisabled = true
      this.title = title
      this.getArticles(false)
    }
  },
  mounted () {
    this.isLoading = true
    this.title = this.$route.params.name
    this.getArticles()
  }
}
</script>

<style scoped>
.deckImg {
  max-width: 100%;
  height: auto;
}
.deckBtn:hover {
  background: #ff6915;
  color: black !important;
}
</style>
