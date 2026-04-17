import type { Preview } from '@storybook/nextjs';
import { withMantine } from './decorators';

const preview: Preview = {
  decorators: [withMantine],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
