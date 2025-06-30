<script setup lang="ts">
interface Props {
  menu: any
}

const props = defineProps<Props>()
</script>

<template>
<div class="flex justify-center flex-wrap gap-6 lg:p-10">
  <div v-for="item in menu" class="flex gap-2 flex-col">
    <span class="text-xl font-semibold">{{item.name}}</span>
    <span v-for="i in item.children" class="pl-6 textarea-md">
      {{i.name}}
    </span>
  </div>
</div>
</template>

<style scoped>

</style>