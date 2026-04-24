import type { Meta, StoryObj } from '@storybook/nextjs';
import { Paper } from '@/components/ui/Paper';

const meta: Meta<typeof Paper> = {
  title: 'UI/Paper',
  component: Paper,
  tags: ['autodocs'],
  argTypes: {
    shadow:  { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
    radius:  { control: 'select', options: ['sm', 'md', 'lg'] },
    padding: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  args: { children: <p style={{ margin: 0 }}>Card content goes here.</p> },
};

export const WithBorder: Story = {
  args: { withBorder: true, children: <p style={{ margin: 0 }}>Paper with a border.</p> },
};

export const LargeShadow: Story = {
  args: { shadow: 'lg', children: <p style={{ margin: 0 }}>Elevated card.</p> },
};

export const SmallPadding: Story = {
  args: { padding: 'sm', withBorder: true, children: <p style={{ margin: 0 }}>Compact padding.</p> },
};

export const AccountCard: Story = {
  args: {
    shadow: 'md',
    withBorder: true,
    padding: 'lg',
    children: (
      <div>
        <p style={{ margin: '0 0 4px', fontWeight: 600 }}>Main Account</p>
        <p style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>Rp 12.500.000</p>
      </div>
    ),
  },
};
