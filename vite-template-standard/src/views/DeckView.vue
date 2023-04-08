<template>
  <LoadingItem :active="isLoading" :z-index="1060">
    <div class="loadingGif">
      <img src="../assets/image/pikachu_gif.gif" alt="" />
    </div>
  </LoadingItem>
  <div class="container p-3" v-if="isready">
    <div class="d-flex flex-column flex-lg-row" style="margin-top: 63px;">
      <div>
        <img class="deckImg"  :src="article.image" alt="" />
      </div>
      <div class="ms-3 text-start text-white d-flex flex-column justify-content-center">
        <span class="mb-3">{{ article.description }}</span>
        <h1 class="mb-3 mb-md-5">{{ article.title }}</h1>
        <div>
            <div class="deckList d-flex justify-content-between flex-column">
                <div class="d-flex mb-1">
                  <div class="d-flex text-white">牌組強度</div>
                  <div class="d-flex align-items-center text-white ms-3">
                    <i
                      v-for="index in 5"
                      :key="index"
                      :class="{
                        'fa-solid fa-star': index <= starLevel,
                        'fa-regular fa-star': index > starLevel,
                      }"
                    ></i>
                  </div>
                </div>
                <div class="d-flex mb-1">
                  <div class="d-flex text-white">操作難度</div>
                  <div class="d-flex align-items-center text-white ms-3">
                    <i
                      v-for="index in 5"
                      :key="index"
                      :class="{
                        'fa-solid fa-star': index <= starLevel,
                        'fa-regular fa-star': index > starLevel,
                      }"
                    ></i>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="d-flex text-white">構築價格</div>
                  <div class="d-flex align-items-center text-white ms-3">
                    <i
                      v-for="index in 5"
                      :key="index"
                      :class="{
                        'fa-solid fa-star': index <= starLevel,
                        'fa-regular fa-star': index > starLevel,
                      }"
                    ></i>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
    <div v-html="article.content" class="mt-3 p-3 text-white text-start border border-white">
    </div>
  </div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      isready: false,
      isLoading: false,
      article: {},
      starLevel: 4,
      title: '',
      id: ''
    }
  },
  methods: {
    getArticles () {
      this.$http
        .get(`${VITE_URL}v2/api/${VITE_PATH}/articles`)
        .then((res) => {
          res.data.articles.forEach(item => {
            if (item.title === this.title) {
              this.id = item.id
            }
          })
          this.getArticle()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    getArticle () {
      this.$http
        .get(`${VITE_URL}v2/api/${VITE_PATH}/article/${this.id}`)
        .then((res) => {
          this.article = res.data.article
          this.isready = true
          this.isLoading = false
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
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
.container{
    max-width: 900px;
    flex-grow: 1;
}
.deckImg{
  width: 600px;
}
.deckImg:hover{
  transform: scale(1.15);
}
@media (max-width: 768px){
  .deckImg{
    width: 343px;
  }
}
</style>
