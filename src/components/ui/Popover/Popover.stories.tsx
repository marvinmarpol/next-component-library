import type { Meta, StoryObj } from '@storybook/nextjs';
import { Popover } from '@/components/ui/Popover';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Popover> = {
  title: 'UI/Popover',
  component: Popover,
  
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    shadow:   { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <Button variant="secondary">Click to open</Button>,
    content: <div style={{ padding: 8 }}>Popover content goes here.</div>,
  },
};

export const TopPosition: Story = {
  args: {
    trigger: <Button variant="ghost">Opens above</Button>,
    content: <div style={{ padding: 8 }}>Above the trigger.</div>,
    position: 'top',
  },
};

export const Wide: Story = {
  args: {
    trigger: <Button>Wide popover</Button>,
    content: (
      <div style={{ padding: 8 }}>
        <strong>Account details</strong>
        <p style={{ margin: '4px 0 0' }}>This popover is wider for displaying more information.</p>
      </div>
    ),
    width: 360,
  },
};
