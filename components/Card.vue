<template>
  <div
    class="p-8 bg-blackLighter shadow-lg"
    :class="{ underlined: underlined }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    underlined: { type: Boolean, default: false, required: false }
  }
}
</script>

<style scoped>
.underlined {
  @apply border-b-2;
  @apply border-blackLighter;
  transition: all 0.15s ease-in-out;
}

.underlined:hover {
  @apply border-b-2;
  @apply border-primaryShadowed;
}
</style>
