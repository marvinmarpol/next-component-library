import type { Meta, StoryObj } from '@storybook/nextjs';
import { Badge } from '@/components/ui/Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['filled', 'outline', 'light', 'dot'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
    color:   { control: 'select', options: ['primary', 'success', 'warning', 'danger', 'neutral'] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: { children: 'New', color: 'primary' },
};

export const Success: Story = {
  args: { children: 'Active', color: 'success' },
};

export const Warning: Story = {
  args: { children: 'Pending', color: 'warning' },
};

export const Danger: Story = {
  args: { children: 'Failed', color: 'danger' },
};

export const Outline: Story = {
  args: { children: 'Outline', variant: 'outline', color: 'primary' },
};

export const Light: Story = {
  args: { children: 'Light', variant: 'light', color: 'success' },
};

export const Dot: Story = {
  args: { children: 'With dot', variant: 'dot', color: 'danger' },
};

export const Circle: Story = {
  args: { children: '9', circle: true, color: 'danger' },
};
