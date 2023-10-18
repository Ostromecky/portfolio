<template>
  <button
    :type="type"
    class="bg-primary p-4 active:bg-primaryShadowed"
    :class="rounded ? 'rounded-full' : 'rounded-lg'"
  >
    <font-awesome-icon v-if="icon" class="text-2xl" :icon="icon" />
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'button',
      required: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped></style>
