<script setup lang="ts">
import type { PropType } from "vue";
import { computed } from "vue";

export interface Option {
  label: string;
  value: string;
}

const props = defineProps({
  label: {
    type: String,
    default: "",
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

const emit = defineEmits({
  "update:modelValue": (arg: any) => arg,
});

const data = computed(() => props.modelValue);

function update(opt: Option) {
  emit("update:modelValue", opt.value);
}
</script>

<template>
  <div>
    <div>{{ label }}</div>
    <div class="select-wrapper">
      <div>
        <input id="id" :value="data" />
      </div>
      <div v-for="(opt, i) in options" :key="i" @click="update(opt)">
        {{ opt.label }}
      </div>
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
input {
  border: none;
  outline: none;
}
</style>
