<template>
  <div class="flex flex-col items-center justify-center mb-16">
    <span class="text-gray mb-4">{{ subtitle }}</span>
    <h2 class="text-white">{{ title }}</h2>
    <AnimationBar v-if="animated" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  animated?: boolean
}

withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  animated: true
})
</script>

<style lang="scss" scoped></style>
