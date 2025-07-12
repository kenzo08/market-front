<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { VueFinalModal } from 'vue-final-modal'

interface Props {
  hideOverlay?: boolean
  interactive?: boolean
  removeOverflow?: boolean
  modalId?: string
  transition?: 'vfm-fade' | 'vfm-slide-down' | 'vfm-slide-up' | 'vfm-slide-right' | 'vfm-slide-left'
  closeBtnStyle?: string
  containerWidth?: string
  isHeightFull?: string
}

withDefaults(defineProps<Props>(),{
  containerWidth: '440px'
})
defineEmits(['update:modelValue'])

const { lg } = useBreakpoints(breakpointsTailwind, { ssrWidth: 768 })
</script>

<template>
  <VueFinalModal
      :modal-id="modalId"
      :content-style="{width: lg ? containerWidth : '100%'}"
      :content-class="[
      transition === 'vfm-slide-right' ? 'max-h-[100%] h-full' : 'max-h-[80%]',
      'fixed bottom-0 shadow-2xl bg-base-300 flex flex-col lg:right-0 lg:h-full lg:max-h-none',
    ]"
      :hide-overlay="hideOverlay"
      :swipe-to-close="lg || transition !== 'vfm-slide-down' ? 'none' : 'down'"
      :content-transition="transition || (lg ? 'vfm-slide-right' : 'vfm-slide-down')"
      :background="interactive ? 'interactive' : 'non-interactive'"
      overlay-transition="vfm-fade"
      overlay-class="glass"
      v-bind="$attrs"
      @update:model-value="val => $emit('update:modelValue', val)"
  >
    <span v-if="transition !== 'vfm-slide-right'" class="absolute left-2/4 top-1.5 h-1 w-[27px] -translate-x-2/4 rounded-xl bg-base-700 lg:hidden" />
    <button
        aria-label="Закрыть"
        :style="closeBtnStyle ?? ''"
        class="absolute right-2 top-2 z-10 flex size-6 glass text-white shadow-2xl items-center justify-center lg:right-2 lg:top-3 lg:size-10 lg:text-base-700"
        @click="$emit('update:modelValue', false)"
    >
      <Icon name="close" />
    </button>
    <div class="w-full" :class="{'h-full': isHeightFull}">
      <slot />
    </div>
  </VueFinalModal>
</template>
