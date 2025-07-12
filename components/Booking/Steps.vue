<script setup lang="ts">
interface Props{
  list: string []
  currentStep: number | string
}

defineProps<Props>()
</script>

<template>
  <ul class="steps">
    <li
        v-for="(step, index) in list"
        :key="index"
        class="step"
        :class="{'step-primary': Number(currentStep) >= (index+1) }"
    >
      {{step}}
    </li>
  </ul>
</template>