<!-- 學習如何將modal元件化 -->
<template>
  <div class="modal fade" id="checkCardModal" ref="checkCardModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'

export default {
  data () {
    return {
      checkCardModal: ''
    }
  },
  emits: ['opencheck-carts-modal'],
  methods: {
    opencheckCartsModal () {
      this.checkCardModal.show()
    }
  },
  mounted () {
    this.checkCardModal = new Modal(this.$refs.checkCardModal, {
      keyboard: false
    })
  }
}
</script>
