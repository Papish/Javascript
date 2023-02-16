<script setup lang="ts">
defineEmits({
  changed: () => true,
  "update:modelValue": () => true,
});

defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div>
    <button type="button" @click="$emit('changed')">Button</button>
  </div>
</template>

<style></style>
