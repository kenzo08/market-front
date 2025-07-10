<script setup lang="ts">
import {breakpointsTailwind} from '@vueuse/core';

const isOpen = defineModel({default: false})
const { lg } = useBreakpoints(breakpointsTailwind, { ssrWidth: 768 })
</script>

<template>
  <button
      class="btn btn-circle relative size-7 lg:size-10 flex items-center justify-center"
      @click="isOpen = !isOpen"
      aria-label="Меню"
  >
    <Icon
        name="burger"
        :size="lg ? '32' : '24'"
        class="fill-current absolute transition-all duration-300 ease-in-out"
        :class="isOpen ? 'opacity-0 scale-100 rotate-45' : 'opacity-100 scale-100 rotate-0'"
    />
    <Icon
        name="close-big"
        :size="lg ? '32' : '24'"
        class="fill-current absolute transition-all duration-300 ease-in-out"
        :class="isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-100 rotate-45'"
    />
  </button>
</template>