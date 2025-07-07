<script setup lang="ts">
const route = useRoute()

const productData = ref({
  name: 'Premium Wireless Headphones',
  description: 'Experience premium sound quality and industry-leading noise cancellation with these wireless headphones. Perfect for music lovers and frequent travelers.',
  images: [{
    src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080',
    alt: 'pr1'
  },
    {
      src: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080',
      alt: 'pr2'
    },    {
      src: 'https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080',
      alt: 'pr3'
    },
    {
      src: 'https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080',
      alt: 'pr3'
    },
  ]
})

const mainPhoto = ref(productData.value.images[0])

function changeImage(src) {
  mainPhoto.value = src
}

</script>

<template>
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-wrap -mx-4">

        <div class="w-full md:w-1/2 px-4 mb-8">
          <img :src="mainPhoto.src" :alt="mainPhoto.alt" class="w-full h-auto rounded-lg shadow-md mb-4">

          <div class="flex gap-4 py-4 justify-center overflow-x-auto">
            <img v-for="img in productData.images" :src="img.src" :alt="img.alt"
                 class="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                 @click="changeImage(img)">
          </div>
        </div>


        <div class="w-full md:w-1/2 px-4">
          <h1 class="text-3xl font-bold mb-2">{{productData.name}}</h1>
          <p class="text-gray-600 mb-4">SKU: WH1000XM4</p>
          <div class="mb-4">
            <span class="text-2xl font-bold mr-2">$349.99</span>
            <span class="text-gray-500 line-through">$399.99</span>
          </div>
          <div class="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 class="size-6 text-yellow-500">
              <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 class="size-6 text-yellow-500">
              <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 class="size-6 text-yellow-500">
              <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 class="size-6 text-yellow-500">
              <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                 class="size-6 text-yellow-500">
              <path fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clip-rule="evenodd" />
            </svg>
            <span class="ml-2 text-gray-600">4.5 (120 reviews)</span>
          </div>
          <p class="text-gray-700 mb-6">
            {{productData.description}}
          </p>

          <div class="mb-6">
            <h3 class="text-lg font-semibold mb-2">Color:</h3>
            <div class="flex space-x-2">
              <button
                  class="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
              <button
                  class="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
              <button
                  class="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
            </div>
          </div>

          <div class="mb-6">
            <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" value="1"
                   class="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          </div>

          <div class="flex space-x-4 mb-6">
            <Button icon-size="16" icon-name="16x16/calendar-add">
              Забронировать
            </Button>
            <Button type="accent" icon-name="16x16/favorite" icon-size="16">
              Добавить в избранные
            </Button>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-2">Key Features:</h3>
            <ul class="list-disc list-inside text-gray-700">
              <li>Industry-leading noise cancellation</li>
              <li>30-hour battery life</li>
              <li>Touch sensor controls</li>
              <li>Speak-to-chat technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>

