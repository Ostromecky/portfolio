<template>
  <card :underlined="true">
    <font-awesome-icon
      v-if="icon"
      class="text-6xl text-primaryShadowed mb-4"
      :icon="icon"
    />
    <h4>{{ title }}</h4>
    <p class="text-gray">{{ content }}</p>
  </card>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: { type: String, default: '', required: false },
    content: { type: String, default: '', required: false },
    icon: { type: Array, default: null, required: false }
  }
}
</script>

<style scoped></style>
