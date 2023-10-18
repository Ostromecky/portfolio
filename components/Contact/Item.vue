<template>
  <div class="contact-item flex flex-row flex-nowrap">
    <ClientOnly>
      <div class="w-14 flex">
        <font-awesome-icon class="text-4xl text-primaryShadowed" :icon="icon" />
      </div>
    </ClientOnly>
    <div
      class="contact-item__content px-6 pb-6 border-l-2 border-borderGray flex-col"
    >
      <div>
        <strong>{{ title }}</strong>
        <a class="text-gray block">{{ subtitle }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  icon?: [string, string]
}

withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  icon: () => ['fas', 'location-dot']
})
</script>

<style scoped lang="scss">
.contact-item {
  &:last-child {
    .contact-item__content {
      padding-bottom: 0;
    }
  }
}
</style>
