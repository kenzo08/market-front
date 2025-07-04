<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { VueFinalModal } from 'vue-final-modal'

interface Props {
  hideOverlay?: boolean
  interactive?: boolean
  removeOverflow?: boolean
  modalId?: string
  subtitleClass?: string
  transition?: 'vfm-fade' | 'vfm-slide-down' | 'vfm-slide-up' | 'vfm-slide-right' | 'vfm-slide-left'
  closeBtnStyle?: string
}

defineProps<Props>()
defineEmits(['update:modelValue'])

const { lg } = useBreakpoints(breakpointsTailwind)
</script>

<template>
  <VueFinalModal
      :modal-id="modalId"
      :content-class="[
      transition === 'vfm-slide-right' ? 'max-h-[100%] h-full' : 'max-h-[80%]',
      'fixed bottom-0 bg-base-300 flex w-full flex-col lg:right-0 lg:h-full lg:max-h-none lg:w-110',
    ]"
      :hide-overlay="hideOverlay"
      :swipe-to-close="lg ? 'none' : 'down'"
      :content-transition="transition || (lg ? 'vfm-slide-right' : 'vfm-slide-down')"
      :background="interactive ? 'interactive' : 'non-interactive'"
      overlay-transition="vfm-fade"
      v-bind="$attrs"
      @update:model-value="val => $emit('update:modelValue', val)"
  >
    <span v-if="transition !== 'vfm-slide-right'" class="absolute left-2/4 top-1.5 h-1 w-[27px] -translate-x-2/4 rounded-xl bg-base-700 lg:hidden" />
    <button
        aria-label="Закрыть"
        :style="closeBtnStyle ?? ''"
        class="absolute right-2 top-2 z-10 flex size-6 items-center justify-center lg:right-2 lg:top-3 lg:size-10 lg:text-base-700"
        @click="$emit('update:modelValue', false)"
    >
      <Icon name="close" />
    </button>
    <div class="w-full pb-10">
      <slot />
    </div>
  </VueFinalModal>
</template>
