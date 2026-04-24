import type { Meta, StoryObj } from '@storybook/nextjs';
import { HoverCard } from '@/components/ui/HoverCard';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';

const meta: Meta<typeof HoverCard> = {
  title: 'UI/HoverCard',
  component: HoverCard,
  
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    shadow:   { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  args: {
    trigger: <Button variant="ghost">Hover to see card</Button>,
    content: <div style={{ padding: 8 }}><strong>User profile</strong><p style={{ margin: '4px 0 0' }}>John Doe · Senior Engineer</p></div>,
  },
};

export const WithAvatar: Story = {
  args: {
    trigger: <Avatar name="John Doe" />,
    content: <div style={{ padding: 8 }}><strong>John Doe</strong><p style={{ margin: '4px 0 0', color: '#666' }}>john.doe@example.com</p></div>,
    width: 240,
  },
};

export const NoArrow: Story = {
  args: {
    trigger: <Button variant="secondary">No arrow</Button>,
    content: <div style={{ padding: 8 }}>Card without arrow</div>,
    withArrow: false,
  },
};
