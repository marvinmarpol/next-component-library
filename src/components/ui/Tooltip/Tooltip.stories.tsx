import type { Meta, StoryObj } from '@storybook/nextjs';
import { Tooltip } from '@/components/ui/Tooltip';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    label: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
};

export const Bottom: Story = {
  args: {
    label: 'Tooltip on the bottom',
    position: 'bottom',
    children: <Button variant="secondary">Bottom</Button>,
  },
};

export const NoArrow: Story = {
  args: {
    label: 'No arrow',
    withArrow: false,
    children: <Button variant="ghost">No arrow</Button>,
  },
};

export const Multiline: Story = {
  args: {
    label: 'This tooltip wraps to multiple lines when the content is long enough to need it.',
    multiline: true,
    width: 200,
    children: <Button>Multiline tooltip</Button>,
  },
};
