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
  <div class="mainText d-flex justify-content-lg-center align-items-lg-center text-lg-start">
    <h1 class="myh1 border-end border-lg border-white" data-aos="fade-right">
      成為最強的<br />寶可夢訓練家吧!
    </h1>
    <div class="myh4">
      不管你是牌組裡缺了一張強力單卡、懶得收牌想要一副現成的主流牌、羨慕對手美美的卡套、或者單純想當個收藏家，這裡通通可以滿足你的需求。
    </div>
  </div>
  <div class="myh3" data-aos="fade-down">商品列表</div>
  <div
    class="cardList container d-flex flex-column flex-lg-row justify-content-between align-items-center"
  >
    <div class="card" type="button" @click="toGetCategory('單卡')">
      <img src="../assets/image/product1.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">單卡</p>
      </div>
    </div>
    <div class="card" type="button" @click="toGetCategory('牌組')">
      <img src="../assets/image/product2.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">牌組</p>
      </div>
    </div>
    <div class="card" type="button" @click="toGetCategory('禮盒')">
      <img src="../assets/image/product3.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">禮盒</p>
      </div>
    </div>
    <div class="card" type="button" @click="toGetCategory('周邊')">
      <img src="../assets/image/product4.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">周邊</p>
      </div>
    </div>
  </div>
  <div
    class="moreProductBtn d-flex align-items-center justify-content-center"
    type="button"
    @click="toGetCategory('全部商品')"
  >
    <img src="../assets/image/pan_tool_alt.png" alt="" />
    <div>選擇以查看更多</div>
  </div>
  <div class="deckWrap d-flex flex-column flex-xxl-row justify-content-center">
    <div
      class="deckDescribe d-flex flex-column align-items-center align-items-xxl-start"
      data-aos="fade-right"
    >
      <h2 class="myh2">牌組構築</h2>
      <p class="deckDescribeP1 text-start">
        想要玩主流牌但不知道該怎麼組?<br />
        組好牌卻不知道該怎麼運作?<br />
        對於環境中的牌不懂得如何應對?
      </p>
      <p class="deckDescribeP2">這裡提供最完整的教學資訊!</p>
      <button><p>查看教學</p></button>
    </div>
    <div class="deckcontent d-flex flex-column align-items-center">
      <div class="myh3" data-aos="fade-down">熱門牌組</div>

      <div class="deckAll">
        <div
          class="deckGroup1 d-flex flex-column flex-lg-row justify-content-between"
        >
          <div
            class="deckCard deck1"
            type="button"
            @click="todeck('夢幻Vmax')"
            style=""
          >
            <div class="deckName text-start">夢幻Vmax</div>
            <div class="deckList d-flex justify-content-between flex-column">
              <div class="d-flex">
                <div class="d-flex text-white">牌組強度</div>
                <div class="d-flex align-items-center text-white ms-3">
                  <i
                    v-for="index in 5"
                    :key="index"
                    :class="{
                      'fa-solid fa-star': index <= deck1[0],
                      'fa-regular fa-star': index > deck1[0],
                    }"
                  ></i>
                </div>
              </div>
              <div class="d-flex">
                <div class="d-flex text-white">操作難度</div>
                <div class="d-flex align-items-center text-white ms-3">
                  <i
                    v-for="index in 5"
                    :key="index"
                    :class="{
                      'fa-solid fa-star': index <= deck1[1],
                      'fa-regular fa-star': index > deck1[1],
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
                      'fa-solid fa-star': index <= deck1[2],
                      'fa-regular fa-star': index > deck1[2],
                    }"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div
            class="deckCard deck2"
            type="button"
            @click="todeck('索羅亞克Vstar')"
          >
            <div class="deckName text-start">索羅亞克Vstar</div>
            <div class="deckList d-flex justify-content-between flex-column">
              <div class="d-flex">
                <div class="d-flex text-white">牌組強度</div>
                <div class="d-flex align-items-center text-white ms-3">
                  <i
                    v-for="index in 5"
                    :key="index"
                    :class="{
                      'fa-solid fa-star': index <= deck2[0],
                      'fa-regular fa-star': index > deck2[0],
                    }"
                  ></i>
                </div>
              </div>
              <div class="d-flex">
                <div class="d-flex text-white">操作難度</div>
                <div class="d-flex align-items-center text-white ms-3">
                  <i
                    v-for="index in 5"
                    :key="index"
                    :class="{
                      'fa-solid fa-star': index <= deck2[1],
                      'fa-regular fa-star': index > deck2[1],
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
                      'fa-solid fa-star': index <= deck2[2],
                      'fa-regular fa-star': index > deck2[2],
                    }"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="deckGroup2 d-flex flex-column flex-lg-row justify-content-between"
        >
          <div
            class="deckCard deck3"
            type="button"
            @click="todeck('放逐鬼龍')"
            style=""
          >
            <div class="deckName text-start">放逐鬼龍</div>
            <div class="deckList d-flex justify-content-between flex-column">
              <div class="d-flex">
                <div class="d-flex text-white">牌組強度</div>
                <div class="d-flex align-items-center text-white ms-3">
                  <i
                    v-for="index in 5"
                    :key="index"
                    :class="{
                      'fa-solid fa-star': index <= deck3[0],
                      'fa-regular fa-star': index > deck3[0],
                    }"
                  ></i>
                </div>
              </div>
              <div class="d-flex">
                <div class="d-flex text-white">操作難度</div>
                <div class="d-flex align-items-center text-white ms-3">
                  <i
                    v-for="index in 5"
                    :key="index"
                    :class="{
                      'fa-solid fa-star': index <= deck3[1],
                      'fa-regular fa-star': index > deck3[1],
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
                      'fa-solid fa-star': index <= deck3[2],
                      'fa-regular fa-star': index > deck3[2],
                    }"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div
            class="deckCard deck4"
            type="button"
            @click="todeck('鳳王V')"
            style=""
          >
            <div class="deckName text-start">鳳王V</div>
            <div class="deckList d-flex justify-content-between flex-column">
              <div class="d-flex">
                <div class="d-flex text-white">牌組強度</div>
                <div class="d-flex align-items-center text-white ms-3">
                  <i
                    v-for="index in 5"
                    :key="index"
                    :class="{
                      'fa-solid fa-star': index <= deck4[0],
                      'fa-regular fa-star': index > deck4[0],
                    }"
                  ></i>
                </div>
              </div>
              <div class="d-flex">
                <div class="d-flex text-white">操作難度</div>
                <div class="d-flex align-items-center text-white ms-3">
                  <i
                    v-for="index in 5"
                    :key="index"
                    :class="{
                      'fa-solid fa-star': index <= deck4[1],
                      'fa-regular fa-star': index > deck4[1],
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
                      'fa-solid fa-star': index <= deck4[2],
                      'fa-regular fa-star': index > deck4[2],
                    }"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="moreDeck">更多牌組</div>
    </div>
  </div>
  <div class="news" data-aos="fade-up">
    <div class="newsImgItem">
      <img class="newsImg" src="../assets/image/image34.png" alt="" />
      <div class="newsImgText d-none d-xxl-block">圖為2022台北聯盟賽現場</div>
    </div>
    <div class="newsText d-flex flex-column align-items-center align-items-xxl-start" data-aos="fade-right">
      <h2 class="myh2">最新消息</h2>
      <span
        >官方商品發售消息， 大大小小
        比賽資訊，一個個都別錯過！</span
      >
    </div>
    <div class="d-flex flex-column flex-xxl-row justify-content-between newsCards">
      <div class="newsCard">
        <img
          src="../assets/image/SV1_TWHK_THUMBNAIL_before.png"
          class="newsCardImg"
          alt="..."
        />
        <div class="text-start newsCardContent d-flex flex-column">
          <p class="newsCardClass">&lt;商品&gt;</p>
          <p class="newsCardTitle">朱&紫補充包發售</p>
          <p class="newsCardTime">預定發售日2023/02/03</p>
        </div>
      </div>
      <div class="newsCard">
        <div class="newsImg1">
          <img
            style="max-width: 206px; max-height: 206px"
            src="../assets/image/tw_product_Deck_Shield_93431981.png"
            class="newsCardImg"
            alt="..."
          />
        </div>
        <div class="text-start newsCardContent d-flex flex-column">
          <p class="newsCardClass">&lt;商品&gt;</p>
          <p class="newsCardTitle">寶可夢造型卡套</p>
          <p class="newsCardTime">預定發售日2023/03/03</p>
        </div>
      </div>
      <div class="newsCard">
        <div class="newsImg2">
          <img
            style="max-width: 134px; max-height: 154px"
            src="../assets/image/PTCGleague.png"
            class="newsCardImg"
            alt="..."
          />
        </div>
        <div class="text-start newsCardContent d-flex flex-column">
          <p class="newsCardClass">&lt;比賽&gt;</p>
          <p class="newsCardTitle text-truncate">
            2022-2023賽季地區聯盟賽—台北站
          </p>
          <p class="newsCardTime">比賽日期2023/05/31</p>
        </div>
      </div>
    </div>
    <button class="newsBtn" type="button" @click="toNews"><span>更多消息</span></button>
  </div>
  <div class="official " data-aos="fade-up">
    <div class="officialText">
      <p>官方頻道</p>
      <div class="border"></div>
    </div>
    <div class="officialItem d-flex flex-column flex-lg-row">
      <a href="https://asia.pokemon-card.com/tw/"
        ><div class="officialWeb">
          <img
            style="width: 195px; height: 100px"
            src="../assets/image/ptcg.png"
            alt=""
          /></div
      ></a>

      <a href="https://www.facebook.com/Pokemon.TCG.Official.Taiwan"
        ><div
          class="officialFB d-flex justify-content-center align-items-center"
        >
          <img
            style="width: 228px; height: 46px"
            src="../assets/image/fb.png"
            alt=""
          /></div
      ></a>
      <a href="https://www.youtube.com/@pokemontcgtw"
        ><div
          class="officialYT d-flex justify-content-center align-items-center"
        >
          <img
            style="width: 240px; height: 54px"
            src="../assets/image/yt.png"
            alt=""
          /></div
      ></a>
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
.mainText {
  padding: 0 80px;

  /* width: 1296px; */
  height: 192px;
  margin: 80px auto 0 ;
}
.myh1 {
  width: 636px;
  height: 192px;

  /* border-right: 1px solid #ffffff; */

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 150%;

  color: #ff6915;
}
.myh2 {
  width: 320px;
  height: 96px;
  margin-bottom: 32px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 120%;
  /* identical to box height, or 96px */

  text-align: center;

  color: #ffffff;
}
.myh4 {
  margin-left: 50px;

  width: 572px;
  height: 108px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 150%;
  /* or 36px */

  color: #ffffff;
}
.myh3 {
  width: 480px;
  height: 144px;
  margin: 120px auto 0 auto;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 120px;
  line-height: 120%;

  text-align: center;

  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.75);
  background-color: #121110;
  color: #121110;
}
.cardList {
  padding: 0px;
  gap: 24px;

  /* width: 1295px; */
  height: 368px;
  margin: -40px auto 0;
}
.card {
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  width: 305.75px;
  height: 368px;

  background: #1c1a19;
  border: 1px solid #333333;
  /* shadow */

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.48);
  border-radius: 16px;
}
.card .card-text {
  width: 56px;
  height: 34px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 120%;
  color: #ff6915;
}
.card:hover {
  transform: translate(0, -8px);
  border: 1px solid #ff6915;
}
.card img {
  align-items: center;
  padding: 0px 0px 8px;
  gap: 10px;

  width: 200px;
  height: 200px;
}
.moreProductBtn {
  margin: 48px auto 0;
  width: 140px;
  height: 24px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 150%;

  text-align: center;

  color: rgba(255, 255, 255, 0.75);
}
.moreProductBtn img {
  padding: 3px 4.03px;
  width: 24px;
  height: 24px;
}
.deckWrap {
  margin: 264px auto 160px ;
}
.deckDescribe {
  padding: 32px;

  width: 416px;
  height: 434px;
}
.deckDescribeP1 {
  box-sizing: border-box;

  padding-left: 14px;
  margin-bottom: 32px;

  width: 306px;
  height: 90px;

  /* font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400; */
  font-size: 20px;
  line-height: 150%;

  color: rgba(255, 255, 255, 0.75);

  border-left: 2px solid #ff6915;
}
.deckDescribeP2 {
  width: 248px;
  height: 36px;

  margin-bottom: 32px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 180%;

  color: #ffffff;
}
.deckDescribe button {
  box-sizing: border-box;

  /* Auto layout */

  padding: 8px 48px;
  gap: 10px;

  width: 176px;
  height: 52px;

  background-color: #121110;
  border: 1px solid #ff6915;
  border-radius: 8px;
}
.deckDescribe button p {
  width: 80px;
  height: 36px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 180%;

  color: #ff6915;
}
.deckcontent {
  margin: 64px 0 0 24px;

  padding: 0 48px;

  width: 855px;
  height: 462px;
  background-color: #0a0a09;
}
.deckcontent .myh3 {
  margin: -168px auto 0;
}

.deckAll {
  position: relative;
  margin: -64px auto 0;
}
.deckGroup1 {
  width: 760px;

  margin-bottom: 24px;
}
.deckGroup2 {
  width: 760px;
}
.deckcontent .deckCard {
  padding: 32px;

  width: 368px;
  height: 203px;

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
  height: 34px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 120%;

  text-align: center;

  color: #ffffff;
}
.deckcontent .deckList {
  margin-top: 16px;

  width: 304px;
  height: 89px;
}
.deckcontent span {
  width: 72px;
  height: 27px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;

  color: rgba(255, 255, 255, 0.75);
}
.deckCard:hover {
  border: 1px solid #ff6915;
}
.moreDeck {
  margin: 24px auto 0 auto;

  width: 68px;
  height: 24px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;

  color: #ff6915;
}
.news {
  position: relative;
  background-color: #0a0a09;
  background: linear-gradient(
    90deg,
    #0a0a09 0%,
    rgba(10, 10, 9, 0.5) 47.4%,
    rgba(255, 105, 21, 0.08) 100%
  );
  /* width: 1920px; */
  height: 942px;
}
.newsImgItem {
  position: relative;
}
.newsImg {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 551px;
}
.newsImgText {
  position: absolute;
  /* margin-top: 64px;
  margin-right: 360px; */
  top: 64px;
  right: 20%;
  /* z-index: 1; */
  width: 183px;
  height: 29px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 180%;

  color: rgba(255, 255, 255, 0.75);
}
.newsText {
  padding: 64px 48px 0px;

  width: 35%;
  height: 316px;
  margin-left: 16%;
}
.newsText span {
  display: block;
  text-align: left;
  /* width: 540px; */
  height: 120px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 150%;
  /* or 60px */

  color: rgba(255, 255, 255, 0.75);
}
.newsCards {
  margin: 100px auto;

  width: 1296px;
  height: 334px;
}
.newsCard:hover .newsCardClass {
  color: #ffdbc7;
}
.newsCard:hover .newsCardTitle {
  color: #ff6915;
}
.newsCard {
  position: relative;
  z-index: 1;

  padding: 0px 48px;

  width: 416px;
  height: 334px;
}
.newsCardImg {
  width: 320px;
  height: 206px;
}
.newsImg1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}
.newsImg2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  height: 206px;
}
.newsCardClass {
  margin-top: 24px;

  width: 46px;
  height: 21px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  color: #ff6915;
}
.newsCardTitle {
  /* width: 188px; */
  height: 43px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 180%;
  /* or 43px */

  color: #ffffff;
}
.newsCardTime {
  /* width: 166px; */
  height: 24px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  color: rgba(255, 255, 255, 0.75);
}
.newsBtn {
  box-sizing: border-box;

  padding: 8px 48px;

  width: 176px;
  height: 52px;
  margin: 0 auto;

  border: 1px solid #ff6915;
  border-radius: 8px;

  background-color: #0a0a09;
}
.newsBtn span {
  display: inline-block;

  width: 80px;
  height: 36px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 180%;

  color: #ff6915;
}
.official {
  padding: 80px 0px;

  width: 1296px;
  height: 363px;
  margin: 160px auto 160px ;

  background: #1c1a19;
  border-radius: 24px;
}
.officialText {
  width: 96px;
  height: 63px;

  margin: 0 auto;
}
.officialText p {
  width: 96px;
  height: 43px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 180%;

  color: #ffffff;
}
.border {
  width: 48px;
  height: 4px;

  margin: auto;

  background: #ff6915;
}
.officialItem {
  margin: 40px auto 0;
  height: 100px;
}
.officialWeb {
  box-sizing: border-box;

  width: 432px;
  height: 100px;

  border-right: 2px solid #333333;
}
.officialFB {
  box-sizing: border-box;

  width: 432px;
  height: 100px;

  border-right: 2px solid #333333;
}
.officialYT {
  width: 432px;
  height: 100px;
}

/* rwd */
@media (max-width: 1399px){
  .deckWrap{
    margin: 40px auto 0px;
  }
  .deckDescribe {
    margin: 0 auto 0;
    padding: 0;

    position: none;
    width: 346px;
    height: 302px;
  }
  .deckcontent {
  margin: 300px auto 0 ;

  padding: 0 48px;

  width: 855px;
  height: 462px;
  background-color: #0a0a09;
}
.news {
  /* position: relative; */
  background-color: #0a0a09;
  background: linear-gradient(
    90deg,
    #0a0a09 0%,
    rgba(10, 10, 9, 0.5) 47.4%,
    rgba(255, 105, 21, 0.08) 100%
  );
  width: 800px;
  height: 1500px;
  margin: 120px auto 0;
}
.newsImgItem {
  position: absolute;
  width: 800px;
height: 249.63px;
}
.newsImg {
  position: absolute;
  top: 22.62px;
  /* right: 107.5; */
  width: 375px;
  height: 215px;
}
.newsText {
  padding: 64px 48px 0px;

  width: 351px;
  height: 208px;
  margin: 0 12px;
}
.newsText .myh2 {
  width: 160px;
  height:48px;
  margin-bottom: 16px;

  font-size: 40px;
}
.newsText span {
  display: inline;
  height: 60px;

  font-size: 20px;
}
.newsCards {
  margin: 61px auto 0;
  width: 351px;
  height: 1113px;
}
.newsCard {
  position: relative;
  z-index: 1;

  padding: 0;
  margin-bottom: 24px;

  width: 351px;
  heignoneht: 354px;
}
.newsCardImg {
  width: 351px;
  height: 226px;
}
.newsBtn{
  margin-top: 25px;
}
.official {
  padding: 48px 0;

  width: 90vw;
  margin: 80px auto 0;

}
.officialText {
  width: 96px;
  height: 63px;

  margin: 0 auto 48px;
}
.officialItem {
  margin: 0 auto;
}
.officialWeb ,
.officialFB,
.officialYT
{
  width: 30vw;
  height: 100px;

  border-right: none;
}
}

@media (max-width: 992px) {
  .mainText {
    width: 351px;
    height: 288px;
    margin: 40px auto 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .myh1 {
    width: 351px;
    height: 120px;
    font-size: 40px;
    margin-bottom: 24px;
  }
  .myh4 {
    margin: 0 auto;
    width: 351px;
    height: 144px;

    font-size: 20px;
    line-height: 180%;

    text-align: center;
  }
  .myh3 {
    width: 240px;
    height: 72px;
    margin: 80px auto 0;

    font-size: 60px;
  }
  .cardList {
    width: 342px;
    height: 1544px;
    margin: -16px auto 0;
  }
  .moreProductBtn {
    margin: 64px auto 0;
    width: 140px;
    height: 29px;

    line-height: 180%;
  }
  .deckWrap {
    margin: 0;
  }
  .deckDescribe {
    margin: 80px auto 0;
    padding: 0;

    position: none;
    width: 346px;
    height: 302px;
  }
  .myh2 {
    width: 160px;
    height: 48px;

    font-size: 40px;
  }
  .deckDescribeP1 {
    width: 277px;
    height: 81px;

    font-size: 18px;
  }
  .deckDescribeP2 {
    width: 224px;
    height: 32px;

    font-size: 18px;
  }
  .deckDescribe button {
    width: 160px;
    height: 45px;
  }
  .deckDescribe button p {
    width: 64px;
    height: 29px;

    font-size: 16px;
  }
  .deckcontent {
    position: relative;
    margin: 200px auto 0;
    width: 351px;
    height: 932px;
  }
  .deckcontent .myh3{
  margin: -120px auto 0;
}
  .deckAll {
    position: absolute;
    margin: -64px auto 0;
  }
  .deckGroup1 {
  width: 319px;
  height: 430px;

  margin-bottom: 24px;
}
.deckGroup2 {
  width: 319px;
  height: 430px;
}
  .deckcontent .deckCard {
  width: 319px;
  height: 203px;

  background-position: right;
  }
  .moreDeck {
  position: absolute;
  margin: 844px auto 0 auto;

}
  .news {
  /* position: relative; */
  background-color: #0a0a09;
  background: linear-gradient(
    90deg,
    #0a0a09 0%,
    rgba(10, 10, 9, 0.5) 47.4%,
    rgba(255, 105, 21, 0.08) 100%
  );
  width: 375px;
  height: 1449px;
  margin: 120px auto 0;
}
.newsImgItem {
  position: absolute;
  width: 374.95px;
height: 249.63px;
}
.newsImg {
  position: absolute;
  top: 22.62px;
  /* right: 107.5; */
  width: 375px;
  height: 215px;
}
.newsText {
  padding: 64px 48px 0px;

  width: 351px;
  height: 208px;
  margin: 0 12px;
}
.newsText .myh2 {
  width: 160px;
  height:48px;
  margin-bottom: 16px;

  font-size: 40px;
}
.newsText span {
  width: 351px;
  height: 60px;

  font-size: 20px;
}
.newsCards {
  margin: 61px auto 0;
  width: 351px;
  height: 1113px;
}
.newsCard {
  position: relative;
  z-index: 1;

  padding: 0;
  margin-bottom: 24px;

  width: 351px;
  height: 354px;
}
.newsCardImg {
  width: 351px;
  height: 226px;
}
.newsBtn{
  margin-top: 10px;
}
.official {
  padding: 48px 0;

  width: 351px;
  height: 500px;
  margin: 80px auto 0;

}
.officialText {
  width: 96px;
  height: 63px;

  margin: 0 auto 48px;
}
.officialItem {
  margin: 0;
}
.officialWeb ,
.officialFB,
.officialYT
{
  width: 351px;
  height: 100px;

  border-right: none;
}
}
</style>
