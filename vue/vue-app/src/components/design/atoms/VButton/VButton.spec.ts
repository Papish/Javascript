import { test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import VButton from "./VButton.vue";

test("Button can be clicked when used in a component", async () => {
  const fn = vi.fn();
  const btn = mount({
    components: { VButton },
    methods: {
      fn,
    },
    template: `<VButton @clicked="fn">Click</VButton>`,
  });

  await btn.findComponent({ name: "VButton" }).trigger("click");
  expect(fn).toBeCalled();
  expect(fn).toBeCalledTimes(1);
});

test("Button emit event", async () => {
  const btn = mount(VButton, {
    props: {
      id: "button",
    },
  });

  await btn.find("#button").trigger("click");
  expect(btn.emitted("clicked")).toBeTruthy();
});
