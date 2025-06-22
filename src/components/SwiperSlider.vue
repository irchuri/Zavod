<template>
  <swiper
    :modules="[Pagination]"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
    class="mySwiper"
  >
    <swiper-slide>Слайд 1</swiper-slide>
    <swiper-slide>Слайд 2</swiper-slide>
    <swiper-slide>Слайд 3</swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css'; // сюда подтягивается весь CSS
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 300px;
  background: #444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
