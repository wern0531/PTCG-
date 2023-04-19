<template>
  <div class="d-flex justify-content-center">
    <RouterLink to="/admin/products">後臺產品列表</RouterLink> |
    <RouterLink to="/admin/orders">後臺訂單列表</RouterLink> |
    <RouterLink to="/admin/articles">後臺文章列表</RouterLink> |
    <RouterLink to="/">回前台</RouterLink> |
    <a href="#" @click.prevent="logout">登出</a>
  </div>
  <hr />
  <RouterView v-if="isCheck"/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      isCheck: false
    }
  },
  components: {
    RouterView,
    RouterLink
  },
  methods: {
    logout () {
      document.cookie = 'hexToken=;expires='
      this.$http.post(`${VITE_URL}v2/logout`).then((res) => {
        alert('已登出,返回前台頁面')
        this.$router.push('/')
      })
    },
    checkAdmin () {
      // 取出 Token(google取得)
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      // 將token放入headers,只需發送一次(google取得)
      this.$http.defaults.headers.common.Authorization = token

      // 驗證使用者是否有登入(有登入取得商品資訊，沒有則返回登入頁面)
      const api = `${VITE_URL}/v2/api/user/check`
      this.$http.post(api).then((res) => {
        if (!res.data.success) {
          this.$router.push('login')
        }
        this.isCheck = true
      })
    }
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>
