<script setup lang="ts">
</script>

<template>
  <div class="flex h-full min-h-screen flex-col">
  <Header/>
  <div class="flex-auto">
    <slot />
  </div>
  <Footer/>
  </div>
</template>