import type { Meta, StoryObj } from '@storybook/nextjs';
import { Pill } from '@/components/ui/Pill';

const meta: Meta<typeof Pill> = {
  title: 'UI/Pill',
  component: Pill,
  
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: { children: 'React' },
};

export const WithRemove: Story = {
  args: { children: 'TypeScript', withRemoveButton: true, onRemove: () => alert('Removed') },
};

export const Small: Story = {
  args: { children: 'Small', size: 'sm' },
};

export const Large: Story = {
  args: { children: 'Large', size: 'lg' },
};

export const Disabled: Story = {
  args: { children: 'Disabled', withRemoveButton: true, disabled: true },
};
