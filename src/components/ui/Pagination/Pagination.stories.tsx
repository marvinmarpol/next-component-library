import type { Meta, StoryObj } from '@storybook/nextjs';
import { Pagination } from '@/components/ui/Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: { total: 10, defaultValue: 1 },
};

export const WithSiblings: Story = {
  args: { total: 20, defaultValue: 10, siblings: 2 },
};

export const Small: Story = {
  args: { total: 5, size: 'sm', defaultValue: 1 },
};

export const Large: Story = {
  args: { total: 8, size: 'lg', defaultValue: 1 },
};

export const Disabled: Story = {
  args: { total: 10, defaultValue: 3, disabled: true },
};
