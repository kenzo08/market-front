<script setup lang="ts">
interface Props{
  name:string
  description:string
  reviewCount:number
  price:number
  oldPrice:number,
  rating: number,
}

defineProps<Props>()
</script>

<template>
  <div class="w-full md:w-1/3 px-4">
    <h1 class="text-3xl font-bold mb-2">{{name}}</h1>
    <p class="mb-4">ID предложения: WH1000XM4</p>
    <div class="mb-4">
      <span class="text-2xl font-bold mr-2">{{price}}</span>
      <span class="line-through">{{oldPrice}}</span>
    </div>
    <div class="flex items-center mb-8">
     <span class="mr-2">
       Рейтинг:
     </span>
      <Icon v-for="_ in rating" name="24x24/star" size="24"/>
      <span class="ml-2">
        {{rating}} ({{reviewCount}} отзывов)
      </span>
    </div>
    <p class="mb-8">
      {{description}}
    </p>

    <div class="flex flex-col lg:flex-row gap-4 mb-8">
      <Button icon-size="16" icon-name="16x16/calendar-add">
        Забронировать
      </Button>
      <Button is-outline icon-name="24x24/support-agent" icon-size="16">
        Написать заведению
      </Button>
    </div>

    <div class="my-8">
      <h3 class="text-lg font-semibold mb-2">Ключевые особенности заведения:</h3>
      <ul class="list-disc list-inside">
        <li>Industry-leading noise cancellation</li>
        <li>30-hour battery life</li>
        <li>Touch sensor controls</li>
        <li>Speak-to-chat technology</li>
      </ul>
    </div>
    <div class="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" checked="checked" />
      <div class="collapse-title font-semibold">График работы:</div>
      <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
    </div>
    <div class="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title font-semibold">Что взять с собой?</div>
      <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
    </div>
    <div class="collapse collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-2" />
      <div class="collapse-title font-semibold">Правила и ограничения</div>
      <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
    </div>
  </div>
</template>