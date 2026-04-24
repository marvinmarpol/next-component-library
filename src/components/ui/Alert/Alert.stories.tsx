import type { Meta, StoryObj } from '@storybook/nextjs';
import { Alert } from '@/components/ui/Alert';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    severity: { control: 'select', options: ['info', 'success', 'warning', 'danger'] },
    variant:  { control: 'select', options: ['light', 'filled', 'outline'] },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: { severity: 'info', title: 'Information', children: 'Your session will expire in 10 minutes.' },
};

export const Success: Story = {
  args: { severity: 'success', title: 'Transfer complete', children: 'Rp 500.000 has been sent successfully.' },
};

export const Warning: Story = {
  args: { severity: 'warning', title: 'Unusual activity', children: 'We detected a login from a new device.' },
};

export const Danger: Story = {
  args: { severity: 'danger', title: 'Transaction failed', children: 'Insufficient balance. Please top up your account.' },
};

export const Filled: Story = {
  args: { severity: 'info', variant: 'filled', title: 'Filled variant', children: 'This uses the filled style.' },
};

export const Outline: Story = {
  args: { severity: 'success', variant: 'outline', title: 'Outline variant', children: 'This uses the outline style.' },
};

export const WithCloseButton: Story = {
  args: {
    severity: 'warning',
    title: 'Dismissible alert',
    children: 'Click × to dismiss.',
    withCloseButton: true,
  },
};
