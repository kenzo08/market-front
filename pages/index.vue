<script setup lang="ts">
import {useLogged} from '~/composables/states';

const isLogged = useLogged()
const refreshToken = useCookie('refreshToken')
</script>

<template>
  <div class="my-10 flex flex-col">
    <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-4">
      <ProductCard url="/"/>
      <ProductCard url="/"/>
      <ProductCard url="/"/>
      <ProductCard url="/"/>
      <ProductCard url="/"/>
      <ProductCard url="/"/>
      <ProductCard url="/"/>
      <ProductCard url="/"/>
      <ProductCard url="/"/>
      <ProductCard url="/"/>
      <ProductCard url="/"/>
    </div>
  </div>
</template>