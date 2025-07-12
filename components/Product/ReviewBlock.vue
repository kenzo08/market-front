<script setup lang="ts">


const reviews = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum',
    author: 'Daniella Doe',
    profileImage: 'https://randomuser.me/api/portraits/women/14.jpg',
    publishedDate: '01.06.2024',
    ratingMark: 4
  },
  {
    id: 2,
    text: 'Lorem earum ipsa doloribus nostrum minus libero aspernatur earum ipsa doloribus nostrum minus libero aspernatur  earum ipsa doloribus nostrum minus libero aspernatur  cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum, Lorem earum ipsa doloribus nostrum minus libero aspernatur earum ipsa doloribus nostrum minus libero aspernatur  earum ipsa doloribus nostrum minus libero aspernatur  cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum',
    author: 'Daniella Doe',
    profileImage: 'https://randomuser.me/api/portraits/women/19.jpg',
    publishedDate: '01.06.2024',
    ratingMark: 4
  },
  {
    id: 3,
    text: 'aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum',
    author: 'Marke Yu',
    profileImage: 'https://randomuser.me/api/portraits/women/18.jpg',
    publishedDate: '01.06.2024',
    ratingMark: 4
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum',
    author: 'Yanndy Doe',
    profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    publishedDate: '01.06.2024',
    ratingMark: 4
  },
  {
    id: 5,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum',
    author: 'Daniella Doe',
    profileImage: 'https://randomuser.me/api/portraits/women/14.jpg',
    publishedDate: '01.06.2024',
    ratingMark: 4
  },
  {
    id: 6,
    text: 'Lorem earum ipsa doloribus nostrum minus libero aspernatur earum ipsa doloribus nostrum minus libero aspernatur  earum ipsa doloribus nostrum minus libero aspernatur  cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum, Lorem earum ipsa doloribus nostrum minus libero aspernatur earum ipsa doloribus nostrum minus libero aspernatur  earum ipsa doloribus nostrum minus libero aspernatur  cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum',
    author: 'Daniella Doe',
    profileImage: 'https://randomuser.me/api/portraits/women/19.jpg',
    publishedDate: '01.06.2024',
    ratingMark: 4
  },
  {
    id: 7,
    text: 'aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum',
    author: 'Marke Yu',
    profileImage: 'https://randomuser.me/api/portraits/women/18.jpg',
    publishedDate: '01.06.2024',
    ratingMark: 4
  },
  {
    id: 8,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum',
    author: 'Yanndy Doe',
    profileImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    publishedDate: '01.06.2024',
    ratingMark: 4
  },
]
</script>

<template>
   <div class="max-w-7xl mx-auto flex flex-col gap-8 px-6 md:px-12 xl:px-6">
      <h2 class="text-center text-2xl font-bold md:text-4xl mb-6">
         Отзывы наших посетителей
        </h2>
     <div class="md:columns-2 lg:columns-3 gap-6">
        <ProductReviewItem
            v-for="review in reviews"
            :key="review.id"
            v-bind="review"
            class="mb-6 break-inside-avoid"
        />
      </div>
   </div>
</template>
