<script setup lang="ts">
import {getAllProducts} from '~/composables/product';


const { data } = await useAsyncData(()=>getAllProducts())

console.log(data.value, 'lel')
const products = [
  {
    url: '/product/slug',
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
    url: '/product/slug',
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
    url: '/product/slug',
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
    url: '/product/slug',
    images: [
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
    <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-4">
      <ProductCard v-for="product in [...products, ...products, ...products]" v-bind="product" :key="product.title" />
    </div>
  </div>
</template>