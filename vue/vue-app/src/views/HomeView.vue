<script setup lang="ts">
import { ref } from "vue";
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

const form = ref({
  country: "",
});
</script>

<template>
  <form>
    <VButton id="button" @clicked="fn">Click</VButton>
    <br />
    <VSelect label="Country" v-model="form.country" :options="options" />
  </form>
</template>

<style></style>
