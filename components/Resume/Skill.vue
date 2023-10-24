<template>
  <div class="mb-6 sm:mb-12">
    <div class="flex justify-between mb-2">
      <span class="text-gray">{{ name }}</span>
      <span class="text-gray">{{ value }}%</span>
    </div>
    <div class="progress">
      <div class="progress-bar" :style="{ width: `${value}%` }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ name: string; value: number }>(), {
  name: '',
  value: 0
})
</script>

<style lang="scss" scoped>
.progress {
  @apply bg-borderGray h-3 rounded-sm;
  &-bar {
    @apply bg-primary h-full rounded-sm;
  }
}
</style>
