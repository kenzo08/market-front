<script setup lang="ts">
interface Props {
  size?: 'xs' |'sm' | 'md' | 'lg' | 'xl'
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' |'link' | 'info' | 'neutral' | 'accent'
  isActive?: boolean
  isOutline?: boolean
  isLoading?: boolean
  iconName?: string
  iconSize?: string
}

withDefaults(defineProps<Props>(),{
  type: 'primary',
  size: 'md'
})
</script>

<template>
  <button
      class="btn flex items-center justify-center"
      :class="[`btn-${size} btn-${type}`, {'btn-active': isActive},  {'btn-outline': isOutline}]">
    <span
        class="absolute self-center"
        :class="[
          {'loading opacity-100 loading-spinner' : isLoading },
         {'opacity-0  pointer-events-none': !isLoading},
         `text-${type}`
         ]"
    />
    <div class="flex items-center gap-1" :class="{'opacity-0': isLoading }">
      <Icon v-if="iconName" :name="iconName" :size="iconSize"/>
      <slot />
    </div>
  </button>
</template>