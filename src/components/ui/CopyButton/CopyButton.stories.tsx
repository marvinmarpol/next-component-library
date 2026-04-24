import type { Meta, StoryObj } from '@storybook/nextjs';
import { CopyButton } from '@/components/ui/CopyButton';

const meta: Meta<typeof CopyButton> = {
  title: 'UI/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  args: {
    value: 'Hello, world!',
    children: 'Copy text',
  },
};

export const CopyUrl: Story = {
  args: {
    value: 'https://example.com/share/abc123',
    children: 'Copy link',
    copiedLabel: 'Link copied!',
    variant: 'secondary',
  },
};

export const CopyCode: Story = {
  args: {
    value: 'npm install @your-org/ui',
    children: 'Copy install command',
    variant: 'ghost',
    size: 'sm',
  },
};

export const CustomTimeout: Story = {
  args: {
    value: 'Copied for 5 seconds',
    children: 'Copy (5s feedback)',
    timeout: 5000,
  },
};
