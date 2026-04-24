import type { Meta, StoryObj } from '@storybook/nextjs';
import { Tabs } from '@/components/ui/Tabs';

const ITEMS = [
  { value: 'overview',     label: 'Overview',     content: 'Overview content goes here.' },
  { value: 'transactions', label: 'Transactions',  content: 'Transaction history goes here.' },
  { value: 'settings',     label: 'Settings',      content: 'Account settings go here.' },
];

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant:     { control: 'select', options: ['default', 'outline', 'pills'] },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: { items: ITEMS },
};

export const Outline: Story = {
  args: { items: ITEMS, variant: 'outline' },
};

export const Pills: Story = {
  args: { items: ITEMS, variant: 'pills' },
};

export const Grow: Story = {
  args: { items: ITEMS, grow: true },
};

export const Vertical: Story = {
  args: { items: ITEMS, orientation: 'vertical' },
};

export const WithDisabledTab: Story = {
  args: {
    items: [
      ...ITEMS.slice(0, 2),
      { value: 'settings', label: 'Settings', content: 'Settings', disabled: true },
    ],
  },
};
