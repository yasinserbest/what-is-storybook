import type { Meta, StoryObj } from "@storybook/react";
import Cart from "../../components/cart/cart";
import styles from "./../../components/cart/cart.module.scss";

const Story: Meta<typeof Cart> = {
  title: "My Components/cart",
  component: Cart,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    position: {
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
      control: { type: "radio" },
    },
    circle: {
      options: [true, false],
      control: { type: "radio" },
    },
    cart: {
      options: ["vertical", "horizontal"],
      mapping: {
        vertical: <div className={styles.cart__vertical} />,
        horizontal: <div className={styles.cart__horizontal} />,
      },
    },
  },
};

export default Story;
type Story = StoryObj<typeof Cart>;

export const SelectedCart: Story = {
  args: {
    position: "top-right",
    circle: true,
    cart: <div className={styles.cart__horizontal} />,
  },
};
