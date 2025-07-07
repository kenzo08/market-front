<script setup lang="ts">
import {getAllProducts} from '~/composables/product';
import {breakpointsTailwind} from '@vueuse/core';

const { lg } = useBreakpoints(breakpointsTailwind)

const { data } = await useAsyncData(()=>getAllProducts())

const products = [
  {
    url: '/product/slug1',
    images: [
      {src: '/2.jpg'},
      {src: '/1.jpg'},
      {src: '/2.jpg'},
      {src:'/3.jpg'},
      {src: '/4.jpg'},
    ],
    description: 'Вы можете провести здесь интересно',
    title:'Боулинг Brooklyn Bowler',
  },
  {
    url: '/product/slug2',
    images: [
      {src: '/1.jpg'},
      {src: '/2.jpg'},
      {src:'/3.jpg'},
      {src: '/4.jpg'},
    ],
    description: 'Вы можете провести здесь интересно',
    title:'Боулинг Brooklyn Bowler',
  },
  {
    url: '/product/slug3',
    images: [
      {src:'/3.jpg'},
      {src: '/1.jpg'},
      {src: '/2.jpg'},
      {src:'/3.jpg'},
      {src: '/4.jpg'},
    ],
    description: 'Вы можете провести здесь интересно',
    title:'Боулинг Brooklyn Bowler',
  },
  {
    url: '/product/slug4',
    images: [
      {src: '/4.jpg'},
      {src: '/1.jpg'},
      {src: '/2.jpg'},
      {src:'/3.jpg'},
      {src: '/4.jpg'},
    ],
    description: 'Вы можете провести здесь интересно',
    title:'Боулинг Brooklyn Bowler',
  },
]
</script>

<template>
  <div class="my-10 flex flex-col">
    <BookingFilter class="mb-10 mx-auto px-4"/>
    <ProductFeedCards :products="[...products, ...products, ...products]"/>
    <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-4">
      <ProductCard
          v-for="(product, index) in [...products, ...products, ...products]"
          is-swiper-img
          v-bind="product"
          :size="lg ? 'md' : 'sm'"
          :key="index"
      />
    </div>
  </div>
</template>