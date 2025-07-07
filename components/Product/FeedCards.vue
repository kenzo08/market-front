<script setup lang="ts">
interface Props {
  products: Product[];
}


interface Product {
  title: string;
  description: string;
  images: {src: string, active?: boolean }[];
  url: string;
}

defineProps<Props>()
</script>

<template>
  <h2 class="text-2xl font-bold pb-4 uppercase pl-4">
    Мы рекомендуем
  </h2>
  <swiper-container class="w-full h-auto pb-10" :slides-per-view="4.5" :space-between="8">
    <swiper-slide v-for="(product, index) in products" :key="index" >
      <ProductCard v-bind="product"  size="lg"/>
    </swiper-slide>
  </swiper-container>
</template>

<style scoped>

</style>