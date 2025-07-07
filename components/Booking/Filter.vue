<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import SelectBase from '~/components/SelectBase.vue';
import {breakpointsTailwind} from '@vueuse/core';


const date = ref();
const { lg } = useBreakpoints(breakpointsTailwind, { ssrWidth: 768 })
const menuStore = useMenuStore()
const { menuHeader } = storeToRefs(menuStore)

const categorySelector = menuHeader.value.map(el=>{
  return {
    name: el.name,
    value: el.value,
  }
})

const selectedCity = ref();

const time = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes()
});

const now = new Date()
now.setHours(now.getHours() + 1)
now.setMinutes(0)
now.setSeconds(0)

const minTime = {
  hours: now.getHours(),
  minutes: now.getMinutes(),
  seconds: now.getSeconds()
}

const citiList = [
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
</script>

<template>
<div class="flex lg:flex-row flex-col gap-2 w-full lg:w-max shadow-base-300">
  <SelectBase v-model="selectedCity" :size="lg ? 'lg' : 'md'" :items="citiList" placeholder="Выберите город" class="!w-full lg:w-max"/>
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
  <SelectBase v-model="selectedCity" :size="lg ? 'lg' : 'md'" :items="categorySelector" placeholder="Выберите категорию" class="!w-full lg:w-max"/>
  <Button class="mt-4 lg:mt-0" :size="lg ? 'lg' : 'md'">
    Применить фильтры
  </Button>
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