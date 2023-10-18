<template>
  <div class="textarea">
    <textarea
      class="textarea__control"
      :placeholder="placeholder"
      :rows="rows"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target! as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ modelValue: string; placeholder: string; rows: number }>(),
  {
    modelValue: '',
    placeholder: '',
    rows: 3
  }
)
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.textarea {
  &__control {
    @apply outline-0 w-full border-b text-gray bg-borderGray border-b-borderGray focus:border-b-primary focus:ring-primary rounded-t;
    @apply py-2 px-3 mb-4;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
}
</style>
