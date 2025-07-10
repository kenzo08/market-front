<script setup lang="ts">
import {breakpointsTailwind} from '@vueuse/core';

const colorMode = useColorMode();

const isDark = computed(()=>colorMode.preference === 'dark');
const { lg } = useBreakpoints(breakpointsTailwind, { ssrWidth: 768 })

const handleThemeChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  colorMode.preference = target.checked ? 'dark' : 'light'
};
</script>

<template>
  <label class="swap swap-rotate">
    <ClientOnly>
      <input
          type="checkbox"
          class="theme-controller"
          :value="isDark"
          @change="handleThemeChange"
          :checked="isDark"
      />
    </ClientOnly>
    <Icon name="24x24/sun" :size="lg ? '40' : '24'" class="swap-off size-7 lg:size-10 fill-current"/>
    <Icon name="24x24/moon" :size="lg ? '40' : '24'" class="swap-on size-7 lg:size-10 fill-current"/>
  </label>
</template>