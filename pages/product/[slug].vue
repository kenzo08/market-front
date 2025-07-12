<script setup lang="ts">
import Breadcrumbs from '~/components/Breadcrumbs.vue';
import {useModal, useModalSlot} from 'vue-final-modal';
import {LazyModalTemplate, LazyProductPhotoFullScreen} from '#components';

const route = useRoute()

const productData = ref({
  name: 'Brooklyn Bowler',
  price: 300,
  oldPrice: 500,
  rating: 5,
  reviewCount: 23,
  description: 'Experience premium sound quality and industry-leading noise cancellation with these wireless headphones. Perfect for music lovers and frequent travelers.',
  images: [
      {
        src: '/1.jpg',
        alt: 'pr1'
      },
    {
      src: '/2.jpg',
      alt: 'pr2'
    },
    {
      src: '/3.jpg',
      alt: 'pr3'
    },
    {
      src: '/4.jpg',
      alt: 'pr3'
    },
    {
      src: '/1.jpg',
      alt: 'pr1'
    },
    {
      src: '/2.jpg',
      alt: 'pr2'
    },
    {
      src: '/3.jpg',
      alt: 'pr3'
    },
    {
      src: '/4.jpg',
      alt: 'pr3'
    },
  ]
})

const photoModal = useModal({
  component: LazyModalTemplate,
  attrs: {
    transition: 'vfm-slide-right',
    containerWidth: '100%',
    isHeightFull: true,
  },
  slots: {
    default: useModalSlot({
      component: LazyProductPhotoFullScreen,
      attrs:{
        images: productData.value.images,
        onClose(){
          photoModal.close()
        }
      }
    })
  }
})
</script>

<template>
    <div class="container mx-auto px-4 pb-8">
      <Breadcrumbs class="pb-8 pt-4"/>
      <div class="flex gap-6 lg:flex-row flex-col">
        <ProductPhotoBlock v-bind="productData" @handle-main-photo-click="photoModal.open"/>
        <ProductInfoBar v-bind="productData"/>
      </div>
      <div class="divider my-6 lg:my-10"></div>
      <ProductReviewBlock/>
    </div>
</template>

