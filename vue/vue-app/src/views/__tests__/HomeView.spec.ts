import { test } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "../HomeView.vue";

test("Test", async () => {
  console.log(123);
  const wrapper = mount(HomeView);
  const testComponent = wrapper.findComponent({ name: "TestComponent" });
  await testComponent.vm.$emit("changed");
  console.log(testComponent.props());
});
