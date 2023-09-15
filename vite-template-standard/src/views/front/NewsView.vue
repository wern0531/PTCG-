<template>
  <LoadingComponent :is-loading="isLoading"></LoadingComponent>
  <div class="container text-white">
    <div class="pt-5">
      <p class="fs-2 mb-4" v-if="articles.pack.length > 0">補充包資訊</p>
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
      <div class="row mx-auto mt-5">
        <div
          class="card col-md-6 col-lg-4 mb-2 bg-myBgMain"
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
      <div class="row mx-auto mt-5">
        <div
          class="card col-md-6 col-lg-4 mb-2 bg-myBgMain"
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import axios from 'axios'
import LoadingComponent from '../../components/LoadingComponent.vue'
const { VITE_URL, VITE_PATH } = import.meta.env

const isLoading = ref(false)
const articles = ref({
  pack: [],
  product: [],
  game: []
})

const getArticles = () => {
  isLoading.value = true
  axios
    .get(`${VITE_URL}v2/api/${VITE_PATH}/articles`)
    .then((res) => {
      res.data.articles.forEach((item) => {
        if (item.tag === '補充包') {
          articles.value.pack.push(item)
        } else if (item.tag === '商品') {
          articles.value.product.push(item)
        } else if (item.tag === '比賽') {
          articles.value.game.push(item)
        }
      })
      isLoading.value = false
    })
    .catch((err) => {
      isLoading.value = false
      Swal.fire({
        backdrop: false,
        icon: 'error',
        title: 'Oops...',
        text: `${err.response.data.message}`
      })
    })
}
getArticles()
</script>

<style scoped>
</style>
