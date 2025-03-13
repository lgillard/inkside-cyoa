<template>
  <input
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      type="color"
  />
</template>

<script setup lang="ts">
  const props = defineProps(['modelValue'])
  const emit = defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
input[type="color" i] {
  border-radius: 50%;
  border: none;
}

/* Affects the inner circle, i.e. the current color selection */
input[type="color" i]::-webkit-color-swatch {
  border-radius: 50%;
}

input[type="color" i]::-moz-color-swatch {
  border-radius: 50%;
}
</style>
