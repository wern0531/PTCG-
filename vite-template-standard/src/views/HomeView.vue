<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="../assets/image/logo.png" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <a class="nav-link active navbarText" aria-current="page" href="#"
            ><span>首頁</span></a
          >
          <a class="nav-link navbarText" href="#"><div>商品列表</div></a>
          <a class="nav-link navbarText" href="#"><div>最新消息</div></a>
          <a class="nav-link navbarText" href="#"><div>牌組介紹</div></a>
          <a class="nav-link" href="#"
            ><img src="../assets/image/shopping_cart.svg" alt=""
          /></a>
        </div>
      </div>
    </div>
  </nav>
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
  <div class="mainText text-start">
    <h1>成為最強的<br />寶可夢訓練家吧!</h1>
    <h4>
      不管你是牌組裡缺了一張強力單卡、懶得收牌想要一副現成的主流牌、羨慕對手美美的卡套、或者單純想當個收藏家，這裡通通可以滿足你的需求。
    </h4>
  </div>
  <h3>商品列表</h3>
  <div class="cardList container d-flex justify-content-between">
    <div class="card">
      <img src="../assets/image/product1.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">單卡</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/image/product2.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">牌組</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/image/product3.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">禮盒</p>
      </div>
    </div>
    <div class="card">
      <img src="../assets/image/product4.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">周邊</p>
      </div>
    </div>
  </div>
  <div class="moreProductBtn">
    <img src="" alt="" />
    <p>選擇以查看更多</p>
  </div>
  <div class="d-flex flex-row">
    <div class="deckDescribe text-start">
      <h2>牌組構築</h2>
      <p2>
        想要玩主流牌但不知道該怎麼組?<br />
        組好牌卻不知道該怎麼運作?<br />
        對於環境中的牌不懂得如何應對?
      </p2>
      <p3>這裡提供最完整的教學資訊!</p3>
      <button><p>查看教學</p></button>
    </div>
    <div class="deckcontent">
      <h3>熱門牌組</h3>
      <div class="deckCardBG">
        <div class="deckAll">
          <div class="deckGroup1 d-flex justify-content-between">
            <div class="deckCard" style="">
              <div class="deckName">夢幻Vmax</div>
              <div class="deckList d-flex justify-content-between flex-column">
                <span>牌組強度</span>
                <span>操作難度</span>
                <span>構築價格</span>
              </div>
            </div>
            <div class="deckCard" style="">
              <div class="deckName">夢幻Vmax</div>
              <div class="deckList d-flex justify-content-between flex-column">
                <span>牌組強度</span>
                <span>操作難度</span>
                <span>構築價格</span>
              </div>
            </div>
          </div>
          <div class="deckGroup2 d-flex justify-content-between">
            <div class="deckCard" style="">
              <div class="deckName">夢幻Vmax</div>
              <div class="deckList d-flex justify-content-between flex-column">
                <span>牌組強度</span>
                <span>操作難度</span>
                <span>構築價格</span>
              </div>
            </div>
            <div class="deckCard" style="">
              <div class="deckName">夢幻Vmax</div>
              <div class="deckList d-flex justify-content-between flex-column">
                <span>牌組強度</span>
                <span>操作難度</span>
                <span>構築價格</span>
              </div>
            </div>
          </div>
        </div>
        <div class="moreDeck">更多牌組</div>
      </div>
    </div>
  </div>
  <div class="news">
    <div class="newsImgItem">
      <img class="newsImg" src="../assets/image/image 34.png" alt="" />
      <div class="newsImgText">圖為2022台北聯盟賽現場</div>
    </div>
    <div class="newsText">
      <h2>最新消息</h2>
      <span
        >官方商品發售消息， 大大小小<br />
        比賽資訊， 一個個都別錯過！</span
      >
    </div>
    <div class="d-flex justify-content-between newsCards">
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
            src="../assets/image/tw_product_Deck_Shield_9343198 1.png"
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
            src="../assets/image/截圖 2023-02-23 下午3.02 1.png"
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
    <button class="newsBtn" type="button"><span>更多消息</span></button>
  </div>
  <div class="official">
    <div class="officialText">
      <p>官方頻道</p>
      <div class="border"></div>
    </div>
    <div class="officialItem d-flex">
      <div class="officialWeb">
        <img
          style="width: 195px; height: 100px"
          src="../assets/image/ptcg.png"
          alt=""
        />
      </div>
      <div class="officialFB d-flex justify-content-center align-items-center">
        <img
          style="width: 228px; height: 46px"
          src="../assets/image/fb.png"
          alt=""
        />
      </div>
      <div class="officialYT d-flex justify-content-center align-items-center">
        <img
          style="width: 240px; height: 54px"
          src="../assets/image/yt.png"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="footer d-flex justify-content-between align-items-center">
    <div class="footerText">©2023 PTCG 本網站為個人作品使用，非商業用途</div>
    <button type="button" class="footerBtn"><p>後台登入</p></button>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.navbar {
  padding: 0px 312px;
  height: 63px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.48);
}
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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;

  /* position: absolute; */
  width: 1296px;
  height: 192px;
  margin: 80px 312px 0 312px;
}
h1 {
  padding: 0 80px;

  width: 634px;
  height: 192px;

  border-right: 1px solid #ffffff;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 64px;
  line-height: 150%;
  /* identical to box height, or 96px */

  color: #ff6915;
}
h2 {
  width: 320px;
  height: 96px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 120%;
  /* identical to box height, or 96px */

  text-align: center;

  color: #ffffff;
}
h4 {
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
h3 {
  /* position: absolute; */
  width: 480px;
  height: 144px;
  margin: 120px auto 0 auto;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 120px;
  line-height: 120%;
  /* identical to box height, or 144px */

  text-align: center;

  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.75);
}
.cardList {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;

  /* position: absolute; */
  width: 1295px;
  height: 368px;
  margin: -40px 312px 0 312px;
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
  width: 112px;
  height: 24px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  text-align: center;

  color: rgba(255, 255, 255, 0.75);
}
.deckDescribe {
  margin: 264px 0 0 312px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 32px;

  position: absolute;
  width: 416px;
  height: 434px;
}
.deckDescribe p2 {
  box-sizing: border-box;

  /* Auto layout */

  padding-left: 15px;

  width: 306px;
  height: 90px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;

  color: rgba(255, 255, 255, 0.75);

  border-left: 2px solid #ff6915;
}
.deckDescribe p3 {
  width: 248px;
  height: 36px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 180%;
  /* identical to box height, or 36px */

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
  /* identical to box height, or 36px */

  color: #ff6915;
}
.deckcontent h3 {
  margin-top: 160px;
  margin-left: 940px;
}
.deckCardBG {
  position: absolute;

  width: 855px;
  height: 462px;
  margin-left: 752px;
  margin-top: 24px;

  background-color: #0a0a09;
}
.deckAll {
  position: relative;

  margin-top: -64px;
}
.deckGroup1 {
  width: 760px;

  margin-left: 48px;
  margin-bottom: 24px;
}
.deckGroup2 {
  width: 760px;

  margin-left: 48px;
}
.deckcontent .deckCard {
  padding: 32px;
  gap: 16px;

  width: 368px;
  height: 203px;

  border: 1px solid #333333;
  /* shadow */
  background: url("../assets/image/deck1.png"), #1c1a19;
  background-position: right;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.48);
  border-radius: 16px;
}
.deckcontent .deckName {
  width: 135px;
  height: 34px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 120%;
  /* identical to box height, or 34px */

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
  /* identical to box height, or 27px */

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
  width: 1920px;
  height: 942px;
  margin-top: 759px;
}
.newsCards {
  margin-top: 100px;
  margin-left: 312px;
}
.newsImgItem {
  position: relative;
}
.newsImg {
  position: absolute;
  top: 0;
  right: 0;
  width: 960px;
  height: 551px;
}
.newsImgText {
  position: absolute;
  margin-top: 64px;
  margin-left: 1377px;
  z-index: 1;
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

  width: 636px;
  height: 316px;
  margin-left: 312px;
}
.newsText span {
  width: 540px;
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
  width: 1296px;
  height: 334px;
  margin-left: 312px;
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
  margin: 80px auto 0 auto;

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
  margin-left: 312px;
  margin-top: 160px;

  background: #1c1a19;
  border-radius: 24px;
}
.officialText {
  width: 96px;
  height: 63px;

  margin-left: 600px;
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
  margin-top: 40px;
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
.footer {
  padding: 16px 312px;

  height: 69px;
  margin-top: 160px;

  background: #000000;
}
.footerText {
  width: 310px;
  height: 25px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 180%;

  color: rgba(255, 255, 255, 0.75);
}
.footerBtn {
  padding: 4px 12px;

  width: 88px;
  height: 37px;

  background: #1c1a19;
  border-radius: 4px;
}
.footerBtn p {
  width: 64px;
  height: 29px;

  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 180%;

  color: #ff6915;
}
</style>
