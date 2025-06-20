<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  images: string[];
  url: string;
}

defineProps<Props>()
</script>

<template>
  <NuxtLink :to="url" class="card max-w-96 shadow-lg bg-base-300">
    <figure>
      <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          loading="lazy"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Card Title</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Добавить в корзину</button>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>