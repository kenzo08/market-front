<script setup lang="ts">
interface Props{
  images:Image[]
}
const props = defineProps<Props>()

interface Image{
  src: string
}
const mainPhoto = ref(props.images[0])

function changeImage(src: Image) {
  mainPhoto.value = src
}
</script>

<template>
  <div class="w-full md:w-2/3 px-4 mb-8">
    <img :src="mainPhoto.src" alt="" class="w-full h-96 lg:h-[750px] object-cover rounded-lg shadow-md mb-4">
    <div class="flex gap-1 w-full lg:gap-4 py-4 justify-center overflow-x-auto">
      <img v-for="img in images" :src="img.src" alt=""
           class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
           @click="changeImage(img)">
    </div>
  </div>
</template>