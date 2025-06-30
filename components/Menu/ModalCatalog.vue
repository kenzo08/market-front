<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
</script>

<template>
  <VueFinalModal
      content-class="absolute top-16 w-full h-full"
      content-transition="vfm-fade"
      :hide-overlay="true"
      :esc-to-close="true"
  >
    <div class="flex flex-col h-full">
      <div class="bg-base-300 drop-shadow-2xl  rounded-b-[50px]">
        <slot />
      </div>
      <div class="w-full glass pointer-events-none -z-1 flex-1 -mt-10"/>
    </div>
  </VueFinalModal>
</template>