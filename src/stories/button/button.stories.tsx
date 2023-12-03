// Basic Story

/* 
import type { Meta, StoryObj } from "@storybook/react";
import { SearchOutlined } from "@ant-design/icons";

import { Button } from "../../components/button/button"; //import your component

const meta: Meta<typeof Button> = {
  component: Button, //define your component
  tags: ["autodocs"], // If you want to create docs automatically via storybook and
  //  covers all your stories
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  // Declare a variable of type 'Story'.
  // This variable name will be the name of your story and will appear with this name
  // in your browser window. Each capital letter writes a space before it.
  // Don't forget to export it,
  // otherwise you're not able to see your story in your browser
  args: {
    type: "primary",
  },
};
export const PrimaryWithIcon: Story = {
  //as you can see you can create multiple storeis in your file
  //and render them with diffrent props
  args: {
    type: "primary",
    icon: <SearchOutlined />,
  },
};
export const LinkButton: Story = {
  args: {
    type: "link",
  },
};
export const DashedButton: Story = {
  args: {
    type: "dashed",
  },
};
*/

//Args, Controls, Params
import type { Meta, StoryObj } from "@storybook/react";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "../../components/button/button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  title: "My Components/Button Component", //You can give a title to your story file
  parameters: {
    // You can add parameters to your story file
    layout: "centered", //center component on window
    backgrounds: {
      //You can define background colors to your components
      default: "pink",
      values: [
        { name: "pink", value: "#FF4785" },
        { name: "grey", value: "#eeeeee" },
      ],
    },
  },
  argTypes: {
    //You can enter the values taken by component as props and
    // set how they will appear.
    type: {
      options: ["primary", "link", "dashed"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const MyButton: Story = {
  args: {
    type: "primary",
  },
};
export const MyButtonWithIcon: Story = {
  args: {
    type: "primary",
    icon: <SearchOutlined />,
  },
};
