<template>
  <button :id="id" type="button" @click="$emit('clicked')">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  type: {
    type: String,
    default: "button",
  },
  id: {
    type: String,
    default: "",
  },
});
</script>
