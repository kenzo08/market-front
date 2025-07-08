<script setup lang="ts">
import {breakpointsTailwind} from '@vueuse/core';

interface Props {
  products: Product[];
  title?: string;
}


interface Product {
  title: string;
  description: string;
  images: {src: string, active?: boolean }[];
  url: string;
  active?: boolean;
}

defineProps<Props>()

const { lg } = useBreakpoints(breakpointsTailwind, { ssrWidth: 768 })

const swiperBreakpoints = {
  350:{
    slidesPerView: 1.7,
  },
  500: {
    slidesPerView: 2.3,
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
  <div class="min-h-96">
    <h2 class="text-lg lg:text-2xl font-bold pb-4 uppercase pl-4">
      {{title || ' Мы рекомендуем' }}
    </h2>
    <swiper-container
        class="w-full flex h-auto gap-2 pb-10"
        :space-between="8"
        :slides-per-view="2"
        mousewheel-force-to-axis="true"
        :breakpoints="swiperBreakpoints"
    >
      <swiper-slide v-for="(product, index) in products" :key="index">
        <ProductCard v-bind="product"  :size="lg ? 'lg' : 'sm'"/>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped>
swiper-slide{
  max-width: max-content
}
</style>