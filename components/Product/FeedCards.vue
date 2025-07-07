<script setup lang="ts">
import {breakpointsTailwind} from '@vueuse/core';

interface Props {
  products: Product[];
}


interface Product {
  title: string;
  description: string;
  images: {src: string, active?: boolean }[];
  url: string;
  active?: boolean;
}

defineProps<Props>()
const { lg } = useBreakpoints(breakpointsTailwind)

const swiperBreakpoints = {
  400:{
    slidesPerView: 1.7,
  },
  720:{
    slidesPerView: 2.5,
  },

  1024: {
    slidesPerView: 3.5,
  },
  1440: {
    slidesPerView: 4.7,
  },
  1920:{
    slidesPerView: 5.2,
  }
}
</script>

<template>
  <h2 class="text-lg lg:text-2xl font-bold pb-4 uppercase pl-4">
    Мы рекомендуем
  </h2>
  <swiper-container
      class="w-full flex h-auto gap-2 pb-10"
      :slides-per-view="4.5"
      :space-between="8"
      :breakpoints="swiperBreakpoints"
  >
    <swiper-slide v-for="(product, index) in products" :key="index" >
      <ProductCard v-bind="product"  :size="lg ? 'lg' : 'sm'"/>
    </swiper-slide>
  </swiper-container>
</template>

<style scoped>

</style>