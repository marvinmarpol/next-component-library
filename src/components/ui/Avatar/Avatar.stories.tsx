import type { Meta, StoryObj } from '@storybook/nextjs';
import { Avatar } from '@/components/ui/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  
  argTypes: {
    size:   { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    radius: { control: 'select', options: ['sm', 'md', 'lg', 'full'] },
    color:  { control: 'select', options: ['primary', 'success', 'warning', 'danger', 'neutral'] },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: { src: 'https://i.pravatar.cc/150?img=3', alt: 'Jane Doe' },
};

export const WithName: Story = {
  args: { name: 'Budi Santoso' },
};

export const TwoWordName: Story = {
  args: { name: 'Ahmad Wijaya', color: 'success' },
};

export const Square: Story = {
  args: { name: 'Rina Kusuma', radius: 'md' },
};

export const Large: Story = {
  args: { name: 'Dewi Putri', size: 'xl', color: 'warning' },
};

export const Danger: Story = {
  args: { name: 'Error User', size: 'lg', color: 'danger' },
};
