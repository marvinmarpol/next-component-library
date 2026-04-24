import type { Meta, StoryObj } from '@storybook/nextjs';
import { Notification } from '@/components/ui/Notification';

const meta: Meta<typeof Notification> = {
  title: 'UI/Notification',
  component: Notification,
  
  argTypes: {
    severity: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Info: Story = {
  args: { severity: 'info', title: 'Update available', children: 'A new version is ready to install.' },
};

export const Success: Story = {
  args: { severity: 'success', title: 'Payment received', children: 'Rp 1.500.000 credited to your account.' },
};

export const Warning: Story = {
  args: { severity: 'warning', title: 'Low balance', children: 'Your balance is below Rp 50.000.' },
};

export const Danger: Story = {
  args: { severity: 'danger', title: 'Login failed', children: 'Too many attempts. Account temporarily locked.' },
};

export const Loading: Story = {
  args: { title: 'Processing transfer…', children: 'Please wait.', loading: true },
};

export const NoCloseButton: Story = {
  args: { severity: 'info', title: 'Info', children: 'No close button.', withCloseButton: false },
};
