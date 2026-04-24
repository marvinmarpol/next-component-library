import type { Meta, StoryObj } from '@storybook/nextjs';
import { Chip } from '@/components/ui/Chip';

const meta: Meta<typeof Chip> = {
  title: 'UI/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outline', 'light'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
    color:   { control: 'select', options: ['primary', 'success', 'warning', 'danger'] },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { children: 'Option A', defaultChecked: false },
};

export const Checked: Story = {
  args: { children: 'Selected', defaultChecked: true },
};

export const Filled: Story = {
  args: { children: 'Filled chip', variant: 'filled', defaultChecked: true },
};

export const Light: Story = {
  args: { children: 'Light chip', variant: 'light', defaultChecked: true },
};

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
};

export const Success: Story = {
  args: { children: 'Active', color: 'success', defaultChecked: true },
};
