import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const { VITE_URL, VITE_PATH } = import.meta.env

export const cartStore = defineStore('cart', {
  state: () => ({
    carts: [],
    isDisable: false
  }),
  getters: {
    getCartNum (state) {
      return state.carts.length
    }
  },
  actions: {
    getCarts () {
      axios.get(`${VITE_URL}v2/api/${VITE_PATH}/cart`).then((res) => {
        this.carts = res.data.data.carts
      }).catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.response.data.message}`
        })
      })
    },
    addToCart (id, title) {
      this.isDisable = true
      const data = {
        product_id: id,
        qty: 1
      }
      axios
        .post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data })
        .then((res) => {
          this.getCarts()
          Swal.fire({
            icon: 'success',
            title: `${title} 已成功選購`,
            showConfirmButton: true,
            timer: 1500
          })
        }).then(() => {
          this.isDisable = false
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    },
    delCart (cartId, title) {
      this.isDisable = true
      axios
        .delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${cartId}`)
        .then((res) => {
          this.getCarts()
          Swal.fire({
            icon: 'success',
            title: `商品 ${title} 已刪除`,
            showConfirmButton: true,
            timer: 1500
          })
        }).then(() => {
          this.isDisable = false
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    }

  }
})
