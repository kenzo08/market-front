<script setup lang="ts">
import type Swiper from 'swiper';

interface Props {
  images: {src: string, active?: boolean} []
}

const props = defineProps<Props>()

const slides = ref(props.images)

function handleSwiper(el: Swiper){
  const [swiper] = el.detail;
  slides.value[swiper.activeIndex].active = true
}
</script>

<template>
  <swiper-container :slides-per-view="1" :keyboard="true" :navigation="true" class="size-full relative" :loop="true" :pagination="true" @swiperslidechange="handleSwiper">
    <swiper-slide v-for="(image, index) in slides" :key="index">
      <div class="w-full h-full bg-base-200 flex absolute justify-center -z-1 items-center">
        <span class="loading loading-spinner text-primary loading-xl"/>
      </div>
      <img
          :src="index === 0 || image.active ? image.src : ''"
          alt="product"
          loading="lazy"
          class="object-cover h-full w-full relative"
      />
    </swiper-slide>
  </swiper-container>
</template>