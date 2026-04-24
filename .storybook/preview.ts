import type { Preview } from "@storybook/nextjs";
import { withMantine } from "./decorators";

const preview: Preview = {
  decorators: [withMantine],
  parameters: {
    options: {
      storySort: {
        order: ['Introduction', 'UI', 'Composite', 'Layout'],
      },
    },
    docs: {
      codePanel: true,
       state: 'expanded', // Force the code block to be open by default
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
