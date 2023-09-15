<template>
  <LoadingItem class="vld-parent" :active="props.isLoading" :z-index="1060" :opacity="0.5">
    <img src="@/assets/image/pikachu_gif.gif" alt="會動的皮卡丘過場圖" />
  </LoadingItem>
</template>

<script setup>
const props = defineProps(['isLoading'])
</script>
