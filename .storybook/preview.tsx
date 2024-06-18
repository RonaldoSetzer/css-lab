import React from "react";
import type { Preview } from "@storybook/react";
import { GlobalStyle } from "../src/styles/global";

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
};

export default preview;

