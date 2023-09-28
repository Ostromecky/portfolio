<template>
  <card>
    <div class="flex flex-grow justify-between items-center mb-4">
      <div class="flex flex-row items-center">
        <div class="w-16 h-16 relative rounded-full overflow-hidden mr-4">
          <img class="absolute" :src="imgSrc" alt="" />
        </div>
        <div>
          <span class="w-100 block">{{ fullName }}</span>
          <span class="w-100 block text-sm text-gray">{{ position }}</span>
        </div>
      </div>
      <font-awesome-icon class="text-6xl text-primaryShadowed" :icon="icon" />
    </div>
    <p class="text-gray">
      {{ content }}
    </p>
  </card>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: {
    content: { type: String, required: true },
    fullName: { type: String, required: true },
    position: { type: String, required: true },
    icon: { type: Array, default: null, required: false },
    imgSrc: { type: String, default: null, required: true }
  }
}
</script>

<style scoped></style>
