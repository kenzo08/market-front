<script setup lang="ts">
import type Swiper from 'swiper';

interface Props {
  title: string;
  description: string;
  images: {src: string, active: boolean }[];
  url: string;
  isSwiperImg?: boolean;
  size?: 'xl' |'lg' | 'md' | 'sm' | 'xs'
}

const props =  withDefaults(defineProps<Props>(), {
  size: 'md',
  isSwiperImg: false,
});
const slides = ref(props.images)

function handleSwiper(el: Swiper){
  const [swiper] = el.detail;
  slides.value[swiper.activeIndex].active = true
}
</script>

<template>
  <NuxtLink
      :to="url"
      class="card max-w-96 relative shadow-lg bg-base-300"
      :class="[
          {'card-xl ': size === 'xl'},
          {'card-lg ': size === 'lg'},
          {'card-md ': size === 'md'},
          {'card-sm ': size === 'sm'},
          {'card-xs ': size === 'xs'},
      ]"
  >
    <figure :class="[
        {'h-50': size === 'md'},
        {'h-70': size === 'lg'},
        ]">
      <swiper-container v-if="isSwiperImg" class="w-full h-50 relative" :loop="true" :pagination="true" @swiperslidechange="handleSwiper">
        <swiper-slide v-for="(image, index) in slides" :key="index">
          <div class="w-full h-full bg-base-200 flex absolute justify-center -z-1 items-center">
            <span class="loading loading-spinner text-primary loading-xl"/>
          </div>
          <img
              :src="index === 0 || image.active ? image.src : ''"
              alt="product"
              loading="lazy"
              class="object-cover h-full w-full"
          />
        </swiper-slide>
      </swiper-container>
      <img v-else :src="slides[0].src" alt="product" class="w-full h-full object-cover" loading="lazy">
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{title}}</h2>
      <p>
        {{description}}
      </p>
      <div class="flex items-center mb-4">
        <svg class="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
          </path>
        </svg>
        <span class="text-shadow-gray-300 ml-1">
          4.9 (128 отзывов)
        </span>
      </div>
      <div class="card-actions justify-end">
        <Button icon-size="16" icon-name="16x16/calendar-add">
          Забронировать
        </Button>
      </div>
    </div>
  </NuxtLink>
</template>