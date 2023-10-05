<template>
  <div class="flex flex-col relative">
    <h4>{{ title }}</h4>
    <Card v-for="item in items" :key="item" class="item" :underlined="false">
      <span class="item-arrow"></span>
      <!-- <template> -->
      <slot :item="item"></slot>
      <!-- </template> -->
    </Card>
  </div>
</template>

<script setup lang="ts">
interface Props<T> {
  title?: string
  items: Array<T>
}

withDefaults(defineProps<Props>(), {
  title: '',
  items: () => []
})
</script>

<style lang="scss" scoped>
.item {
  @apply px-12;
  @apply border-l-2;
  @apply border-l-primary;
  @apply border-b;
  @apply border-b-borderGray;

  &-arrow {
    left: 0;
    margin-top: 4px;
    position: absolute;
    &::before {
      @apply bg-primary;
      height: 16px;
      left: 0;
      width: 16px;
      content: '';
      display: block;
      position: absolute;
    }

    &::after {
      border: 8px solid transparent;
      @apply border-l-primary;
      left: 16px;
      content: '';
      display: block;
      position: absolute;
    }
  }
}
</style>
