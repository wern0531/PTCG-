<template>
    <LoadingItem :active="isLoading" :z-index="1060">
    <div class="loadingGif">
      <img src="../assets/image/pikachu_gif.gif" alt="" />
    </div>
  </LoadingItem>
  <div class="container text-white" v-if="isready">

    <div class="row newsCardWrap" style="margin-top: 63px">
      <h1 class="my-lg-3" >補充包資訊</h1>
      <div class="col-lg-6 newsCard card mb-2 p-2 bg-myBgCard" v-for="item in articles.pack" :key="item.id">
        <img
          :src="item.image"
          class="card-img-top"
          alt="..."
        />
        <div class="mt-1  text-white">
          <div class="text-start pb-1">&lt;{{item.tag}}&gt;</div>
          <div class="text-start pb-1">{{ item.title }}</div>
          <div class="text-start pb-1">{{ item.description }}</div>
        </div>
      </div>
    </div>
    <div class="row newsCardWrap">
      <h1 class="my-lg-3">商品資訊</h1>
      <div class="row">
        <div class=" col-lg-6 newsCard card mb-2 p-2 bg-myBgCard" style="width: 442px" v-for="item in articles.product" :key="item.id">
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

          <div class="mt-1  text-white">
            <div class="text-start pb-1">&lt;{{item.tag}}&gt;</div>
            <div class="text-start pb-1">{{ item.title }}</div>
            <div class="text-start pb-1">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row newsCardWrap">
      <h1 class="my-lg-3">比賽資訊</h1>
      <div class="row">
        <div class="col-lg-6 newsCard card mb-2 p-2 bg-myBgCard" style="width: 442px" v-for="item in articles.game" :key="item.id">
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

          <div class="mt-1  text-white">
            <div class="text-start pb-1">&lt;{{item.tag}}&gt;</div>
            <div class="text-start pb-1">{{ item.title }}</div>
            <div class="text-start pb-1">{{ item.description }}</div>
          </div>
        </div>
      </div>
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
          res.data.articles.forEach(item => {
            if (item.tag === '補充包') {
              this.articles.pack.push(item)
            } else if (item.tag === '商品') {
              this.articles.product.push(item)
            } else if (item.tag === '比賽') {
              this.articles.game.push(item)
            }
          })
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
    this.getArticles()
  }
}
</script>

<style scoped>
.container {
  width: 900px;
}

@media (max-width: 991.5px){
  h1{
    padding: 0;
  }
  .container{
    width: 375px;
  }
  .newsCardWrap{
    width: 350px;
    margin: 0 auto;
  }
.newsCard{
  width: 350px;
  margin: 0 auto;
}
}

</style>
