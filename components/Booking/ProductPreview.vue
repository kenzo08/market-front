<script setup lang="ts">

import type Swiper from 'swiper';

interface Props{
  title:string
  description:string
  images: {src: string, active?: boolean}[]
}

const props = defineProps<Props>()

const slides = ref(props.images)

function handleSwiper(el: Swiper){
  const [swiper] = el.detail;
  slides.value[swiper.activeIndex].active = true
}
</script>

<template>
  <div class="card bg-base-100 w-full md:w-auto max-w-96 shadow-xl border-gray-300 border rounded-lg">
    <div class="card-body">
      <h2 class="card-title">{{title}}</h2>
      <p> {{description}}</p>
    </div>
    <figure class="h-[200px]">
      <ClientOnly>
        <swiper-container :slides-per-view="1" class="w-full h-[200px] relative" :loop="true" :pagination="true" effect="cube" @swiperslidechange="handleSwiper">
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
        <template #fallback>
          <div class="w-full bg-base-200 flex h-full absolute justify-center -z-1 items-center">
            <span class="loading loading-spinner text-primary loading-xl"/>
          </div>
        </template>
      </ClientOnly>
    </figure>
  </div>
</template>