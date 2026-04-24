import type { Meta, StoryObj } from '@storybook/nextjs';
import { Loader } from '@/components/ui/Loader';

const meta: Meta<typeof Loader> = {
  title: 'UI/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['spinner', 'dots', 'bars'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
    color:   { control: 'select', options: ['primary', 'success', 'warning', 'danger'] },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Spinner: Story = {
  args: { variant: 'spinner' },
};

export const Dots: Story = {
  args: { variant: 'dots' },
};

export const Bars: Story = {
  args: { variant: 'bars' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const Success: Story = {
  args: { color: 'success' },
};

export const Danger: Story = {
  args: { color: 'danger', variant: 'dots' },
};
