<script setup lang="ts">
import type { PropType } from "vue";

export interface Option {
  label: string;
  value: string;
}

defineProps({
  label: {
    type: String,
    default: "button",
  },
  id: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String || Number,
    default: "",
  },
  options: {
    type: Array as PropType<Array<Option>>,
    default: () => [],
  },
});
</script>

<template>
  <div>
    <div>{{ label }}</div>
    <div class="select-wrapper">
      <div>
        <input id="id" />
      </div>
      <div v-for="(opt, i) in options" :key="i">{{ opt.label }}</div>
    </div>
  </div>
</template>

<style scoped>
.select-wrapper {
  max-width: 300px;
  border: 1px solid blue;
  border-radius: 4px;
  padding: 4px 8px;
}
</style>
