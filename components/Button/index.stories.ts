import Button from "./index.vue";

import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof Button> = {
  title: "button",
  component: Button,
  tags: ["autodocs"], // docsが不要だったら削除してOK
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">ボタン</Button>',
  }),
  argTypes: {
    color: {
      control: {
        type: "inline-radio",
      },
      options: ["green", "red", undefined],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Component: Story = {
  args: {
    color: "green",
  },
};
