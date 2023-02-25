<script setup lang="ts">
import VButton from "@/components/design/atoms/VButton/VButton.vue";
import VSelect from "@/components/design/atoms/VSelect/VSelect.vue";

const fn = () => {
  console.log("--- File: HomeView.vue --- line no: 5: ", 123);
};

const options = [
  {
    label: "Asia",
    value: "as",
  },
  {
    label: "Pacific",
    value: "pa",
  },
];
</script>

<template>
  <div>
    <VButton id="button" @clicked="fn">Click</VButton>
  </div>
  <div>
    <VSelect :options="options" />
  </div>
</template>

<style></style>
