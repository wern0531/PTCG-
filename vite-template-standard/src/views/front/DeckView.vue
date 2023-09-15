<template>
  <LoadingComponent :is-loading="isLoading"></LoadingComponent>
  <div class="container" v-show="isReady">
    <div class="d-flex pt-5 flex-column flex-md-row">
      <div
        class="mb-2 mb-lg-0 d-flex justify-content-start justify-content-lg-center"
        v-for="(item, index) in deckMenu"
        :key="index"
      >
        <button
          :class="{ disabled: isDisabled }"
          class="deckBtn btn btn-myBgMain text-myColor fs-6 fs-md-3"
          @click="getArticles(item)"
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
          <li v-for="(item, index) in deckMenu" :key="index">
            <a class="dropdown-item" @click="getDeck(item)">
              {{ item }}
            </a>
          </li>
        </ul>
      </div> -->
    </div>
  </div>
  <div class="container mt-5 p-3" v-show="isReady">
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

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import axios from 'axios'
import LoadingComponent from '../../components/LoadingComponent.vue'
const { VITE_URL, VITE_PATH } = import.meta.env

const isReady = ref(false)
const isLoading = ref(false)
const isDisabled = ref(false)
const article = ref({})
const starLevel = ref(4)
const id = ref('')
const deckMenu = ref([])

const getArticles = (nowTitle = '夢幻Vmax') => {
  isReady.value = false
  isLoading.value = true
  axios
    .get(`${VITE_URL}v2/api/${VITE_PATH}/articles`)
    .then((res) => {
      if (deckMenu.value.length < 1) {
        deckMenu.value = res.data.articles.filter(item => item.tag === '牌組').map(item => item.title)
      }
      res.data.articles.forEach((item) => {
        if (item.title === nowTitle) {
          id.value = item.id
        }
      })
      getArticle()
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
getArticles()
const getArticle = () => {
  axios
    .get(`${VITE_URL}v2/api/${VITE_PATH}/article/${id.value}`)
    .then((res) => {
      article.value = res.data.article
      isReady.value = true
      isLoading.value = false
      isDisabled.value = false
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
