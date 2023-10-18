<template>
  <div class="form-field">
    <input
      class="form-field__control"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target! as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ modelValue: string; placeholder: string; type?: string }>(),
  {
    modelValue: '',
    placeholder: '',
    type: 'text'
  }
)
</script>

<style lang="scss" scoped>
.form-field {
  &__control {
    @apply outline-0 w-full border-b text-gray bg-borderGray border-b-borderGray focus:border-b-primary focus:ring-primary rounded-t;
    @apply py-2 px-3 mb-4;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
}
</style>
