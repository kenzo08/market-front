<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import {breakpointsTailwind} from '@vueuse/core';

const { lg } = useBreakpoints(breakpointsTailwind, { ssrWidth: 768 })

const product = {
  url: '/product/slug1',
  images: [
    {src: '/2.jpg'},
    {src: '/1.jpg'},
    {src: '/2.jpg'},
    {src:'/3.jpg'},
    {src: '/4.jpg'},
  ],
  description: 'Вы можете провести здесь интересно',
  title:'Боулинг Brooklyn Bowler',
}

const filialList = [
  {
    name: 'Ташкент',
    value: 'tashkent',
  },
  {
    name: 'Самарканд',
    value: 'samarkand',
  },
  {
    name: 'Джизак',
    value: 'jizzakh',
  },
  {
    name: 'Фергана',
    value: 'fergana',
  },
  {
    name: 'Андижан',
    value: 'andijan',
  }
]

const selectedFilial = ref();
const date = ref();
const time = ref({ hours: new Date().getHours(), minutes: new Date().getMinutes()});

const now = new Date()
now.setHours(now.getHours() + 1)
now.setMinutes(0)
now.setSeconds(0)

const minTime = {
  hours: now.getHours(),
  minutes: now.getMinutes(),
  seconds: now.getSeconds()
}
</script>

<template>
  <div class="flex flex-col container px-4 mx-auto py-10">
    <h1 class="text-2xl font-bold">Забронировать</h1>
    <BookingSteps
        :list="['Заполнение формы', 'Оплата', 'Подтверждение брони']"
        :current-step="1"
        class="my-5"
    />
    <div class="flex lg:flex-row flex-col gap-6 pt-6">
      <BookingProductPreview v-bind="product" class="h-max mx-auto lg:mx-0"/>

      <form class="flex flex-col gap-2 lg:gap-4 w-full md:w-2/5 px-4 py-8 lg:w-1/2 shadow-xl bg-base-100 border-gray-300 border rounded-lg">
        <Input name="name" placeholder="Имя" :size="lg ? 'lg' : 'md'"/>
        <Input name="guestCount" placeholder="Количество гостей" :size="lg ? 'lg' : 'md'"/>
        <Input name="phone" placeholder="Номер для связи" :size="lg ? 'lg' : 'md'"/>
        <SelectBase v-model="selectedFilial" :size="lg ? 'lg' : 'md'" :items="filialList" placeholder="Выберите филиал заведения" class="!w-full lg:w-max"/>
        <VueDatePicker
            v-model="date"
            placeholder="Выберите дату"
            locale="ru-Ru"
            cancel-text="Закрыть"
            select-text="Выбрать"
            :format="'dd.MM'"
            :preview-format="'dd.MM'"
            :enable-time-picker="false"
            input-class-name="h-12"
            :disable-year-select="true"
            :min-date="new Date()"
        />
        <VueDatePicker
            v-model="time"
            placeholder="Выберете время"
            time-picker
            locale="ru-Ru"
            :format="'HH:mm'"
            cancel-text="Закрыть"
            :min-time="minTime"
            select-text="Выбрать"
        />
        <SelectBase v-model="selectedFilial" :size="lg ? 'lg' : 'md'" :items="filialList" placeholder="Выберите способ оплаты" class="!w-full lg:w-max"/>
        <Input name="comment" placeholder="Дополнительные пожелания" :size="lg ? 'lg' : 'md'"/>
        <Button :size="lg ? 'lg' : 'md'" class="mt-6 lg:w-max">
          Забронировать
        </Button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.dp__main :deep(.dp__theme_light) {
  --dp-highlight-color: rgba(34, 233, 8, 0.993);
  --dp-primary-color: var(--color-primary);
  --dp-primary-text-color: var(--color-primary-content);
}

@media (max-width: 1023px) {
  :deep(.dp__input) {
    padding: 7.5px 40px !important;
  }
}
@media (min-width: 1024px) {
  :deep(.dp__input) {
    padding: 11.5px 40px !important;
  }
}
</style>