<template>
  <!-- 主圖輪播 -->
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/wern/1676997146858.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gbw08XkxL8gSSVkD2k2Dx6zl%2BCqCfBHn3PXdhQb6GBgke3r8XFYzr3at35VvA%2Fbf64WFwG6Hoztflt1lkIPz1PLhKaEeiyQXFJhI0WopbhvO8cozCBPESdXYPhnJqPNssLx7PH47YUWZUQ38tO8v3Q1iS6xG7x2nRAn8OCN3WaS3rgqFspRrTDyvz7jCxZJ1BJlbbcVFF5OJ9ITmsU3ovhAJrh0KVLMGOHzcU%2FwyBhsZ3WxJkUOuehJkOWYbTI%2F1PAjn9ejjz7QZTmQlmEOtVq8MEmQdsrHTnx5OgRKmf%2Bl1IxVwn9pdzAt3WGg2o7NVxQL3TL74TOjZDmA2i%2FIjFw%3D%3D"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/wern/1676997211541.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=crqqEVGKSmHLfipD0CYAx4qJgOKJOVWuZKPpv70a0NwQbmhX%2BXhzIvjuhZej1ygzdnAmDtH0X04xJRcTWyJEFmUF91H04b1KyL1QgqtKSzIiy536H1Kr35gobUL4TjkoaWBFcLmKJHqYEewyMagR5Rm%2FtntwzW9obA6YfzScVss9o4qF188FsIZc2LlIUx%2Fh2IcNkpSzs3YXpjHWPRs%2BlfU9zLfQ1W60OC58EPbe47o2wzDh3ZOq7XliDWDcTcQishrY6ZuxP0DdHt5rQ4CDT4DKNaCqYJeBGhg%2BUbGNWkX2prEaAIYYbB9Yelrv559dguQo93QepG%2BbRrkGhg6GzA%3D%3D"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/wern/1676997253280.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=O10Bx07BIRJV1JFWSgxWM6%2B0YZ%2FK2aprFXUbn38D2Sp0iWjVRLXZSVzKaV7en5DuGE%2F8TQLR5ITKu%2BYdciGMJHJPJMgdpJDIzs%2Fq6A9crD7fVkKBx4YEyTjB8br5Dbvs1UcaVrrPLwq%2B40y2FHbedA2XHzS8%2BPwTQO%2BGnSaDgenbtZBjN7bYkBdq1hSrsQ0N6bp3%2BrKcAm03aAJsc3fVWzK8Gn2NH2Y4otSyDj2DX%2B7VS3MpE7wzjl%2Fa%2Bx%2BqfvrPTHz0StzVVxAB8K5udCVNVSzwXeP2MKTZNtpF1hcUnFENNWPi9QofbZ9iCgOvU9auquo%2BPfTzPLek4sXFsge%2BIQ%3D%3D"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- 上方標題 -->
  <div class="container mt-5">
    <div class="row mx-auto">
      <div
        class="mx-auto col-12 col-lg-6 border-end d-flex justify-content-center align-items-center"
      >
        <h1 class="myh1 text-myColor text-lg-start" data-aos="fade-right">
          成為最強的<br />寶可夢訓練家吧!
        </h1>
      </div>
      <div
        class="mx-auto col-11 col-lg-6 d-flex justify-content-center align-items-center"
      >
        <h2 class="myh4 px-sm-0 px-xl-5 text-white text-lg-start">
          不管你是牌組裡缺了一張強力單卡、懶得收牌想要一副現成的主流牌、羨慕對手美美的卡套、或者單純想當個收藏家，這裡通通可以滿足你的需求。
        </h2>
      </div>
    </div>
  </div>
  <!-- 商品列表 -->
  <div class="container">
    <div
      class="myh3 mb-n3 mb-lg-n5 bg-myBgMain text-myBgMain"
      data-aos="fade-down"
    >
      商品列表
    </div>
    <div class="row">
      <div class="col-10 col-md-6 col-lg-3 mb-3 mb-lg-0 mx-auto">
        <div
          class="card productCard bg-myBgCard align-items-center"
          type="button"
          @click="toGetCategory('單卡')"
        >
          <img
            src="../assets/image/product1.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text mb-3 text-myColor">單卡</p>
          </div>
        </div>
      </div>
      <div class="col-10 col-md-6 col-lg-3 mb-3 mb-lg-0 mx-auto">
        <div
          class="card productCard bg-myBgCard align-items-center"
          type="button"
          @click="toGetCategory('牌組')"
        >
          <img
            src="../assets/image/product2.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text mb-3 text-myColor">牌組</p>
          </div>
        </div>
      </div>
      <div class="col-10 col-md-6 col-lg-3 mb-3 mb-lg-0 mx-auto">
        <div
          class="card productCard bg-myBgCard align-items-center"
          type="button"
          @click="toGetCategory('禮盒')"
        >
          <img
            src="../assets/image/product3.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text mb-3 text-myColor">禮盒</p>
          </div>
        </div>
      </div>
      <div class="col-10 col-md-6 col-lg-3 mb-3 mb-lg-0 mx-auto">
        <div
          class="card productCard bg-myBgCard align-items-center"
          type="button"
          @click="toGetCategory('周邊')"
        >
          <img
            src="../assets/image/product4.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text mb-3 text-myColor">周邊</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="moreProductBtn mt-5 d-flex align-items-center justify-content-center"
      type="button"
      @click="toGetCategory('全部商品')"
    >
      <img src="../assets/image/pan_tool_alt.png" alt="" />
      <div>選擇以查看更多</div>
    </div>
  </div>
  <!-- 熱門牌組 -->
  <div class="container deckwrap">
    <div class="row">
      <div class="col-12 col-lg-4 p-4">
        <div class="deckDescribe" data-aos="fade-right">
          <h2 class="myh2 text-white text-center text-lg-start mb-4">
            牌組構築
          </h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <p
              class="deckDescribeP1 ps-3 text-start border-start border-2 border-myColor"
            >
              想要玩主流牌但不知道該怎麼組?<br />
              組好牌卻不知道該怎麼運作?<br />
              對於環境中的牌不懂得如何應對?
            </p>
          </div>
          <p class="deckDescribeP2 text-center text-lg-start text-white">
            這裡提供最完整的教學資訊!
          </p>
          <router-link to="/deck/夢幻Vmax" class="btn py-1 px-4 border-myColor rounded-2 bg-myBgMain text-myColor">
            查看教學</router-link>
        </div>
      </div>
      <div class="col-12 col-lg-8 flex-column align-items-center">
        <div class="deckcontent">
          <div class="row justify-content-center">
            <div class="hartdeck" data-aos="fade-down">熱門牌組</div>
          </div>

          <div class="deckAll">
            <div class="row px-5">
              <div class="col-12 col-md-6 mb-4">
                <div
                  class="deckCard deck1 p-4"
                  type="button"
                  @click="todeck('夢幻Vmax')"
                  style=""
                >
                  <div class="deckName text-white text-start">夢幻Vmax</div>
                  <div
                    class="deckList mt-3 d-flex justify-content-between flex-column"
                  >
                    <div class="d-flex">
                      <div class="d-flex">牌組強度</div>
                      <div
                        class="d-flex align-items-center text-myColor ms-auto"
                      >
                        <i
                          v-for="index in 5"
                          :key="index"
                          :class="{
                            'fa-solid fa-star text-myColor': index <= deck1[0],
                            'fa-solid fa-star text-white': index > deck1[0],
                          }"
                        ></i>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="d-flex">操作難度</div>
                      <div
                        class="d-flex align-items-center text-myColor ms-auto"
                      >
                        <i
                          v-for="index in 5"
                          :key="index"
                          :class="{
                            'fa-solid fa-star text-myColor': index <= deck1[1],
                            'fa-solid fa-star text-white': index > deck1[1],
                          }"
                        ></i>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="d-flex">構築價格</div>
                      <div class="d-flex align-items-center ms-auto">
                        <i
                          v-for="index in 5"
                          :key="index"
                          :class="{
                            'fa-solid fa-star text-myColor': index <= deck1[2],
                            'fa-solid fa-star text-white': index > deck1[2],
                          }"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 mb-4">
                <div
                  class="deckCard deck2 p-4"
                  type="button"
                  @click="todeck('索羅亞克Vstar')"
                >
                  <div class="deckName text-white text-start">
                    索羅亞克Vstar
                  </div>
                  <div
                    class="deckList mt-3 d-flex justify-content-between flex-column"
                  >
                    <div class="d-flex">
                      <div class="d-flex">牌組強度</div>
                      <div
                        class="d-flex align-items-center text-myColor ms-auto"
                      >
                        <i
                          v-for="index in 5"
                          :key="index"
                          :class="{
                            'fa-solid fa-star text-myColor': index <= deck2[0],
                            'fa-solid fa-star text-white': index > deck2[0],
                          }"
                        ></i>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="d-flex">操作難度</div>
                      <div
                        class="d-flex align-items-center text-myColor ms-auto"
                      >
                        <i
                          v-for="index in 5"
                          :key="index"
                          :class="{
                            'fa-solid fa-star text-myColor': index <= deck2[1],
                            'fa-solid fa-star text-white': index > deck2[1],
                          }"
                        ></i>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="d-flex">構築價格</div>
                      <div class="d-flex align-items-center ms-auto">
                        <i
                          v-for="index in 5"
                          :key="index"
                          :class="{
                            'fa-solid fa-star text-myColor': index <= deck2[2],
                            'fa-solid fa-star text-white': index > deck2[2],
                          }"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 mb-4 mb-md-0">
                <div
                  class="deckCard deck3 p-4"
                  type="button"
                  @click="todeck('放逐鬼龍')"
                  style=""
                >
                  <div class="deckName text-white text-start">放逐鬼龍</div>
                  <div
                    class="deckList mt-3 d-flex justify-content-between flex-column"
                  >
                    <div class="d-flex">
                      <div class="d-flex">牌組強度</div>
                      <div
                        class="d-flex align-items-center text-myColor ms-auto"
                      >
                        <i
                          v-for="index in 5"
                          :key="index"
                          :class="{
                            'fa-solid fa-star text-myColor': index <= deck3[0],
                            'fa-solid fa-star text-white': index > deck3[0],
                          }"
                        ></i>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="d-flex">操作難度</div>
                      <div
                        class="d-flex align-items-center text-myColor ms-auto"
                      >
                        <i
                          v-for="index in 5"
                          :key="index"
                          :class="{
                            'fa-solid fa-star text-myColor': index <= deck3[1],
                            'fa-solid fa-star text-white': index > deck3[1],
                          }"
                        ></i>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="d-flex">構築價格</div>
                      <div class="d-flex align-items-center ms-auto">
                        <i
                          v-for="index in 5"
                          :key="index"
                          :class="{
                            'fa-solid fa-star text-myColor': index <= deck3[2],
                            'fa-solid fa-star text-white': index > deck3[2],
                          }"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div
                  class="deckCard deck4 p-4"
                  type="button"
                  @click="todeck('鳳王V')"
                  style=""
                >
                  <div class="deckName text-white text-start">鳳王V</div>
                  <div
                    class="deckList mt-3 d-flex justify-content-between flex-column"
                  >
                    <div class="d-flex">
                      <div class="d-flex">牌組強度</div>
                      <div
                        class="d-flex align-items-center text-myColor ms-auto"
                      >
                        <i
                          v-for="index in 5"
                          :key="index"
                          :class="{
                            'fa-solid fa-star text-myColor': index <= deck4[0],
                            'fa-solid fa-star text-white': index > deck4[0],
                          }"
                        ></i>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="d-flex">操作難度</div>
                      <div
                        class="d-flex align-items-center text-myColor ms-auto"
                      >
                        <i
                          v-for="index in 5"
                          :key="index"
                          :class="{
                            'fa-solid fa-star text-myColor': index <= deck4[1],
                            'fa-solid fa-star text-white': index > deck4[1],
                          }"
                        ></i>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="d-flex">構築價格</div>
                      <div class="d-flex align-items-center ms-auto">
                        <i
                          v-for="index in 5"
                          :key="index"
                          :class="{
                            'fa-solid fa-star text-myColor': index <= deck4[2],
                            'fa-solid fa-star text-white': index > deck4[2],
                          }"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="moreDeck text-myColor">更多牌組</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 最新消息 -->
  <div class="newswrap">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 g-0">
          <div
            class="newsText text-center text-lg-start mx-auto ms-lg-0"
            data-aos="fade-right"
          >
            <h2 class="text-white">最新消息</h2>
            <span>官方商品發售消息， 大大小小 比賽資訊，一個個都別錯過！</span>
          </div>
        </div>
        <div class="col-6">
          <div class="newsImgText d-none d-lg-block">
            圖為2022台北聯盟賽現場
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 col-sm-7 col-xl-4 mx-auto newsCard">
          <router-link to="/news" >
            <img
            src="../assets/image/SV1_TWHK_THUMBNAIL_before.png"
            class="newsCardImg w-100"
            alt="..."
          />
          </router-link>
          <div class="mt-3 text-start newsCardContent d-flex flex-column">
            <p class="newsCardClass text-myColor">&lt;商品&gt;</p>
            <p class="newsCardTitle text-white">朱&紫補充包發售</p>
            <p class="newsCardTime">預定發售日2023/02/03</p>
          </div>
        </div>
        <div class="col-12 col-sm-7 col-xl-4 mx-auto newsCard">
          <router-link to="/news">
            <div
            class="d-flex justify-content-center align-items-center bg-white"
          >
            <img
              style="max-width: 206px; max-height: 206px"
              src="../assets/image/tw_product_Deck_Shield_93431981.png"
              class="newsCardImg"
              alt="..."
            />
          </div>
          </router-link>
          <div class="mt-3 text-start newsCardContent d-flex flex-column">
            <p class="newsCardClass text-myColor">&lt;商品&gt;</p>
            <p class="newsCardTitle text-white">寶可夢造型卡套</p>
            <p class="newsCardTime">預定發售日2023/03/03</p>
          </div>
        </div>
        <div class="col-12 col-sm-7 col-xl-4 mx-auto newsCard">
          <router-link to="/news">
            <div
            class="d-flex justify-content-center align-items-center"
            style="height: 206px; background: black"
          >
            <img
              style="max-width: 134px; max-height: 154px"
              src="../assets/image/PTCGleague.png"
              class="newsCardImg w-100"
              alt="..."
            />
          </div>
          </router-link>
          <div class="mt-3 text-start newsCardContent d-flex flex-column">
            <p class="newsCardClass text-myColor">&lt;比賽&gt;</p>
            <p class="newsCardTitle text-white text-truncate">
              2022-2023賽季地區聯盟賽—台北站
            </p>
            <p class="newsCardTime">比賽日期2023/05/31</p>
          </div>
        </div>
      </div>
      <button
        class="my-5 py-1 px-4 border-myColor rounded-2 bg-myBgMain text-myColor"
        type="button"
        @click="toNews"
      >
        更多消息
      </button>
    </div>
  </div>
  <!-- 官方頻道 -->
  <div class="container official bg-myBgCard" data-aos="fade-up">
    <div class="officialText mx-auto text-white">
      <p>官方頻道</p>
      <div class="border"></div>
    </div>
    <div class="row mt-4">
      <div class="col-12 col-sm-8 col-lg-4 mx-auto">
        <a href="https://asia.pokemon-card.com/tw/"
          >
            <img
              style="width: 195px; height: 100px"
              src="../assets/image/ptcg.png"
              alt=""
            /></a>
      </div>
      <div class="col-12 col-sm-8 col-lg-4 mx-auto mt-4 mt-lg-0 d-flex justify-content-center align-items-center officialFB">
        <a href="https://www.facebook.com/Pokemon.TCG.Official.Taiwan"
          >
            <img
              style="width: 228px; height: 46px"
              src="../assets/image/fb.png"
              alt=""
            />
        </a>
      </div>
      <div class="col-12 col-sm-8 col-lg-4 mx-auto mt-5 mt-lg-0 d-flex justify-content-center align-items-center officialYT">
        <a href="https://www.youtube.com/@pokemontcgtw"
          >
            <img
              style="width: 240px; height: 54px"
              src="../assets/image/yt.png"
              alt=""
            /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      deck1: [5, 3, 4],
      deck2: [4, 2, 2],
      deck3: [5, 5, 4],
      deck4: [3, 2, 2]
    }
  },
  methods: {
    toGetCategory (category) {
      this.$router.push({
        name: 'products',
        params: {
          category
        }
      })
    },
    todeck (name) {
      this.$router.push(`/deck/${name}`)
    },
    toNews () {
      this.$router.push('/news')
    }
  },
  components: {}
}
</script>

<style scoped>
/* 主圖輪播 */
.mainImg {
  widows: 1920px;
  height: 710px;
  object-fit: cover;
}
.carousel-indicators button {
  width: 64px;
  height: 8px;
  border-radius: 4px;
}
.carousel-indicators .active {
  background-color: #ff6915;
}
/* 上方標題 */
.myh1 {
  font-weight: 900;
  font-size: 64px;
  line-height: 150%;
}
.myh2 {
  font-weight: 900;
  font-size: 80px;
  line-height: 120%;
}
.myh4 {
  font-weight: 900;
  font-size: 24px;
  line-height: 150%;
}
/* 商品列表 */
.myh3 {
  margin-top: 120px;
  font-weight: 900;
  font-size: 120px;
  line-height: 120%;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.75);
}
.productCard {
  border: 1px solid #333333;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.48);
  border-radius: 16px;
}
.productCard .card-text {
  font-weight: 900;
  font-size: 28px;
  line-height: 120%;
}
.productCard:hover {
  transform: translate(0, -8px);
  border: 1px solid #ff6915;
}
.productCard img {
  align-items: center;
  padding: 0px 0px 8px;
  width: 200px;
  height: 200px;
}
.moreProductBtn {
  font-weight: 900;
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.75);
}
.moreProductBtn img {
  padding: 3px 4.03px;
  width: 24px;
  height: 24px;
}
/* 熱門牌組 */
.deckwrap {
  margin-top: 264px;
}
.deckDescribeP1 {
  box-sizing: border-box;
  font-size: 20px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.75);
}
.deckDescribeP2 {
  font-weight: 900;
  font-size: 20px;
  line-height: 180%;
}
.deckDescribe button {
  font-weight: 700;
  font-size: 20px;
  line-height: 180%;
}

.deckcontent {
  height: 462px;
  position: relative;
  margin: 64px auto 0;
  background-color: #0a0a09;
}
.hartdeck {
  position: absolute;
  margin: -168px auto 0;
  font-weight: 900;
  font-size: 120px;
  line-height: 120%;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.75);
}

.deckAll {
  position: absolute;
  margin: -64px auto 0;
}
.deckcontent .deckCard {
  border: 1px solid #333333;
  background-position: right;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.48);
  border-radius: 16px;
}
.deck1 {
  background: url("../assets/image/deck1.png"), #1c1a19;
}
.deck2 {
  background: url("../assets/image/deck3.png"), #1c1a19;
}
.deck3 {
  background: url("../assets/image/deck2.png"), #1c1a19;
}
.deck4 {
  background: url("../assets/image/deck4.png"), #1c1a19;
}
.deckcontent .deckName {
  font-weight: 900;
  font-size: 28pofficialx;
  line-height: 120%;
}
.deckcontent .deckList {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.75);
}
.deckCard:hover {
  border: 1px solid #ff6915;
}
.moreDeck {
  position: absolute;
  margin: 390px auto 0;
  font-weight: 900;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
}
/* 最新消息 */
.newswrap {
  margin-top: 160px;
  position: relative;
  background: linear-gradient(
      90deg,
      #0a0a09 0%,
      rgba(10, 10, 9, 0.5) 47.4%,
      rgba(255, 105, 21, 0.08) 100%
    ),
    #0a0a09 url("../assets/image/image34.png") top right/50% no-repeat;
}

.newsImgText {
  position: absolute;
  top: 5%;
  right: 20%;
  font-weight: 900;
  font-size: 16px;
  line-height: 180%;
  color: rgba(255, 255, 255, 0.75);
}
.newsText {
  padding: 64px 48px 0px;
}
.newsText h2 {
  font-weight: 900;
  font-size: 80px;
  line-height: 120%;
}
.newsText span {
  display: block;
  font-weight: 500;
  font-size: 40px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.75);
}
.newsCard:hover .newsCardClass {
  color: #ffdbc7 !important;
}
.newsCard:hover .newsCardTitle {
  color: #ff6915 !important;;
}
.newsCard {
  padding: 0px 48px;

}
.newsCardImg {
  width: auto;
  height: 206px;
  object-fit: cover;
}
.newsCardClass {
  font-weight: 900;
  font-size: 14px;
  line-height: 150%;
}
.newsCardTitle {
  font-weight: 900;
  font-size: 24px;
  line-height: 180%;
}
.newsCardTime {
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.75);
}
.newswrap button {
  font-weight: 700;
  font-size: 20px;
  line-height: 180%;
}
/* 官方頻道 */
.official {
  padding: 80px 0px;
  margin: 160px auto 0;
  border-radius: 24px;
}
.officialText {
  font-weight: 900;
  font-size: 24px;
  line-height: 180%;
}
.border {
  width: 48px;
  height: 4px;
  margin: auto;
  background: #ff6915;
}
.officialFB {
  box-sizing: border-box;
  border-left: 2px solid #333333;
}
.officialYT{
  box-sizing: border-box;
  border-left: 2px solid #333333;
}

/* rwd */
@media (max-width: 1400px) {

  .newsText h2 {
    font-size: 40px;
  }
  .newsText span {
    font-size: 20px;
  }
}
@media (max-width: 1200px) {
  .myh1 {
    font-size: 50px;
  }
  .myh2{
    font-size: 50px;
  }
}
@media (max-width: 991.5px) {
  .myh1 {
    font-size: 40px;
  }
  .myh4 {
    font-size: 20px;
    line-height: 180%;
  }
  .deckwrap {
    margin: 80px auto;
  }
  .myh2 {
    font-size: 40px;
  }

  .deckDescribeP1 {
    font-size: 18px;
  }
  .deckDescribeP2 {
    font-size: 18px;
  }
  .deckDescribe button {
    font-size: 16px;
  }

  .deckcontent {
    margin: 200px auto 0;
  }

  .newswrap {
    position: relative;
    background: #0a0a09 url("../assets/image/image34.png") top/100% no-repeat;
  }

  .official {
    padding: 48px 0;
    margin: 80px auto 0;
  }
  .officialFB,
  .officialYT {
    border: none;
  }
}
@media (max-width: 767.5px) {
  .moreDeck {
    margin: 750px auto 0;
  }
  .newswrap {
    margin-top: 400px;
  }
}
@media (max-width: 375.5px){
  .myh3 {
    font-size: 60px;
  }
  .hartdeck{
    margin-top: -120px;
    font-size: 60px;
  }
}
</style>
