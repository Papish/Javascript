<script setup lang="ts">
import TestComponent from "@/components/TestComponent.vue";

const updated = () => {
  console.log("called");
};
</script>

<template>
  <div>
    <TestComponent @changed="updated" />
  </div>
</template>

<style></style>
