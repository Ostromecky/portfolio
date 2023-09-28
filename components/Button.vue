<template>
  <button
    class="bg-primary p-4 active:bg-primaryShadowed"
    :class="rounded ? 'rounded-full' : 'rounded-lg'"
    @click="handleClick()"
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
    rounded: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Array,
      default: null
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped></style>
