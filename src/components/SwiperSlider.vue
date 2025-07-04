<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import { Mousewheel } from 'swiper/modules'


defineProps<{
  slides: string[]
}>()
</script>

<template>
  <swiper
      :modules="[Pagination, Mousewheel]"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      navigation
      mousewheel
      class="mySwiper"
  >
    <swiper-slide v-for="(slide, i) in slides" :key="i">
      <img :src="slide" alt="slide image" />
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
.mySwiper {
  width: 1000px;
  border-radius: 1rem;
  height: 500px; /* или по твоему желанию */
  background: #444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* чтоб не было полос прокрутки */
}

:deep(.swiper-slide) {
  height: 100%; // или 300px — как ты хочешь
  display: flex;
  align-items: center;
  justify-content: center;
}


.mySwiper img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* чтобы картинка занимала весь контейнер */
  border-radius: 1rem;
  display: block; /* убрать лишние отступы */
}

</style>

