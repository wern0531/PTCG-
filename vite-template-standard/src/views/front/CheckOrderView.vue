<template>
  <div>訂單資訊</div>
  <hr />
  <div class="container justify-content-center" v-if="order.id">
    <div class="row">
      <div class="col-lg-6">
        <div class="row">
          <div class="col-3 text-start">
            姓名
            <hr />
            Email
            <hr />
            電話
            <hr />
            地址
            <hr />
            付款狀態
          </div>
          <div class="col-9 text-start">
            {{ order.user.name }}
            <hr />
            {{ order.user.email }}
            <hr />
            {{ order.user.tel }}
            <hr />
            {{ order.user.address }}
            <hr />
            <span v-if="!order.is_paid">尚未付款</span>
            <span v-else class="text-success">付款完成</span>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mt-5 mt-lg-0">
        <div>
          <div class="row">
            <div class="col-4 ms-auto">品名</div>
            <div class="col-3">數量</div>
            <div class="col-2">單價</div>
          </div>
        </div>
        <hr />
        <div>
          <div class="row mb-2" v-for="item in order.products" :key="item.id">
            <div class="col-3">
              <img style="width: 60px" :src="item.product.imageUrl" alt="商品圖片" />
            </div>
            <div class="col-4 d-flex align-items-center justify-content-center">
              {{ item.product.title }}
            </div>
            <div class="col-3 d-flex align-items-center justify-content-center">
              {{ item.qty }}/{{ item.product.unit }}
            </div>
            <div class="col-2 d-flex align-items-center justify-content-center">
              $NT{{ item.final_total }}
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-3 ms-auto">總計:</div>
            <div class="col-2 d-flex align-items-center justify-content-center">
              $NT{{ order.total }}
            </div>
          </div>
          <div class="text-end mt-3" v-if="order.is_paid === false">
            <button
              class="btn text-myColor btn-myBgMain border-myColor"
              @click="payOrder"
            >
              確認付款去
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { cartStore } from '@/stores/cart'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      carts: [],
      order: [],
      orderId: ''
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    getOrder () {
      this.$http
        .get(`${VITE_URL}v2/api/${VITE_PATH}/order/${this.orderId}`)
        .then((res) => {
          this.order = res.data.order
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    },
    payOrder () {
      this.$http
        .post(`${VITE_URL}v2/api/${VITE_PATH}/pay/${this.orderId}`)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: '付款完成',
            showConfirmButton: true,
            timer: 1500
          }).then(() => {
            this.getCarts()
            this.$router.push({
              path: '/cart/completeOrder',
              query: {
                orderId: this.order.id,
                orderData: JSON.stringify(this.order)
              }
            })
          })
        })
        .catch((err) => {
          this.isLoading = false
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err}.response.data.message`
          })
        })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>

<style scoped>
.container {
  max-width: 900px;
  font-weight: 900;
  font-size: 16px;
  line-height: 23px;
}
.container .table td,
.container .table th {
  color: white;
}
@media (max-width: 768px) {
  .container {
    /* width: 375px; */
    font-weight: 700;
    font-size: 14px;
  }
}
</style>
