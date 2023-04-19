<template>
  <div class="my-5 row justify-content-center">
    <v-form ref="form" class="col-md-6" v-slot="{ errors }" @submit="onSubmit">
      <div class="mb-3">
        <label for="email" class="form-label d-flex">Email*</label>
        <v-field
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email, 例:abc@def.com"
          rules="email|required"
          v-model="user.email"
        ></v-field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label d-flex">收件人姓名*</label>
        <v-field
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
          v-model="user.name"
        ></v-field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label d-flex">收件人電話*</label>
        <v-field
          id="tel"
          name="電話"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話,例:0912345678"
          :rules="isPhone"
          v-model="user.tel"
        ></v-field>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label d-flex">收件人地址*</label>
        <v-field
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址"
          rules="required"
          v-model="user.address"
        ></v-field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label d-flex">留言</label>
        <textarea
          id="message"
          class="form-control"
          cols="30"
          rows="10"
          v-model="message"
        ></textarea>
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <RouterLink to="/cart" class="d-flex btn btn-myBgMain">
          <div class="material-symbols-outlined">arrow_back</div>
          <div>回購物車</div>
          </RouterLink>
        </div>
        <button
          type="submit"
          class="btn btn-myBgMain border-myColor text-myColor btn-hover"
          :disabled="isclick === true"
        >
          確認資料
        </button>
      </div>
    </v-form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { RouterLink } from 'vue-router'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        tel: '',
        address: ''
      },
      message: '',
      isclick: false
    }
  },
  methods: {
    // 驗證用
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    // 送出訂單
    onSubmit () {
      this.isclick = true
      const data = {
        user: this.user,
        message: this.message
      }
      this.$http
        .post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, { data })
        .then((res) => {
          const id = res.data.orderId
          this.$refs.form.resetForm()
          this.isclick = false
          Swal.fire({
            icon: 'success',
            title: '您的訂單已建立',
            showConfirmButton: true,
            timer: 1500
          }).then(() => {
            this.$router.push(`/cart/checkOrder/${id}`)
          })
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    }
  },
  components: { RouterLink }
}
</script>

<style scoped>
.btn-hover:hover{
  background: #ffdbc7;
}
</style>
