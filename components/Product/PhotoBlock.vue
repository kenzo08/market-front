<script setup lang="ts">
interface Props{
  images:Image[]
}

const props = defineProps<Props>()
defineEmits(['handleMainPhotoClick'])

interface Image{
  src: string
}
const mainPhoto = ref(props.images[0])

function changeImage(src: Image) {
  mainPhoto.value = src
}
</script>

<template>
  <div class="w-full lg:w-2/3 mb-8 cursor-pointer">
    <img :src="mainPhoto.src" alt="" class="w-full  h-96 lg:h-[750px] object-cover rounded-lg shadow-md mb-4" @click="$emit('handleMainPhotoClick')">
    <div class="flex gap-1 w-full lg:gap-4 py-4 justify-center overflow-x-auto">
      <img v-for="img in images" :src="img.src" alt=""
           class="size-16 sm:size-20 object-cover rounded-md opacity-60 hover:opacity-100 transition duration-300"
           @click="changeImage(img)">
    </div>
  </div>
</template>