<template>
  <div class="footer mt-auto bg-black d-flex justify-content-center align-items-center">
    <div class="footerText">
      本網站為個人作品使用，非商業用途 |
      <svg
        type="button"
        @click="toAdmin"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-postcard"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z"
        />
      </svg>
      <br />
      ©2023 PTCG TrainerWeb
    </div>
  </div>
</template>

<script setup>
import router from '../router/index'

const toAdmin = () => {
  router.push('/login')
}
</script>
<style scoped>
.footer {
  padding: 16px 16.25%;
  height: 69px;
}
.footerText {
  font-weight: 500;
  font-size: 14px;
  line-height: 180%;
  color: rgba(255, 255, 255, 0.75);
}
.footerBtn {
  width: 88px;
  height: 37px;
}
/* rwd */
@media (max-width: 375.5px) {
  .my-footer {
    padding: 16px 12px;
    height: 57px;
  }
}
</style>
