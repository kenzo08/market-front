<script setup lang="ts">
interface Props {
  id: number | string
  text: string
  author: string
  profileImage: string
  publishedDate: string
  ratingMark: number
}

defineProps<Props>()
</script>

<template>
  <div class="aspect-auto p-8 border border-gray-100 rounded-3xl shadow-2xl">
    <div class="flex gap-4">
      <img class="w-12 h-12 rounded-full" :src="profileImage" alt="user avatar" width="400" height="400" loading="lazy">
      <div class="flex flex-col w-full">
        <h6 class="text-lg font-medium text-gray-700 flex justify-between dark:text-white">
          <span>{{author}}</span>
          <span class="text-[12px] lg:text-[14px]">
            {{publishedDate}}
          </span>
        </h6>
        <p class="text-sm flex gap-4  items-center">
         <span class="flex gap-1">
           <Icon v-for="_ in ratingMark" :key="_" name="24x24/star" size="24"/>
         </span>
          <span>
            4.6
          </span>
        </p>
      </div>
    </div>
    <p class="mt-8">
      {{text}}
    </p>
  </div>
</template>