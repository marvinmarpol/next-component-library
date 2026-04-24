import type { Meta, StoryObj } from '@storybook/nextjs';
import { Timeline } from '@/components/ui/Timeline';

const TRANSFER_ITEMS = [
  { title: 'Transfer initiated',   description: 'You initiated a transfer of Rp 500.000' },
  { title: 'Verification pending', description: 'Waiting for 2FA confirmation' },
  { title: 'Processing',           description: 'Bank is processing the transaction' },
  { title: 'Completed',            description: 'Funds delivered to recipient' },
];

const meta: Meta<typeof Timeline> = {
  title: 'UI/Timeline',
  component: Timeline,
  
  argTypes: {
    color: { control: 'select', options: ['primary', 'success', 'warning', 'danger'] },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: { items: TRANSFER_ITEMS, active: 1 },
};

export const AllActive: Story = {
  args: { items: TRANSFER_ITEMS, active: 3, color: 'success' },
};

export const Warning: Story = {
  args: {
    items: [
      { title: 'Transfer sent', description: 'Rp 1.000.000 sent' },
      { title: 'Under review',  description: 'Flagged for compliance review' },
      { title: 'Pending',       description: 'Awaiting resolution' },
    ],
    active: 1,
    color: 'warning',
  },
};

export const Large: Story = {
  args: { items: TRANSFER_ITEMS, active: 2, bulletSize: 28, lineWidth: 3 },
};
