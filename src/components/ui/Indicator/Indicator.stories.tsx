import type { Meta, StoryObj } from '@storybook/nextjs';
import { Indicator } from '@/components/ui/Indicator';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Indicator> = {
  title: 'UI/Indicator',
  component: Indicator,
  tags: ['autodocs'],
  argTypes: {
    color:    { control: 'select', options: ['primary', 'success', 'warning', 'danger'] },
    position: { control: 'select', options: ['top-start', 'top-end', 'bottom-start', 'bottom-end'] },
  },
};

export default meta;
type Story = StoryObj<typeof Indicator>;

export const Default: Story = {
  args: {
    children: <Avatar name="John Doe" />,
    color: 'success',
    size: 12,
  },
};

export const WithCount: Story = {
  args: {
    children: <Button variant="ghost">Notifications</Button>,
    count: 4,
    color: 'danger',
  },
};

export const Processing: Story = {
  args: {
    children: <Avatar name="Rina K" />,
    processing: true,
    color: 'success',
    size: 12,
  },
};

export const WithBorder: Story = {
  args: {
    children: <Avatar name="Budi S" />,
    color: 'danger',
    withBorder: true,
    size: 14,
  },
};

export const Disabled: Story = {
  args: {
    children: <Avatar name="Offline" />,
    disabled: true,
    size: 12,
  },
};
