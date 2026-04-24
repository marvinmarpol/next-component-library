import type { Meta, StoryObj } from '@storybook/nextjs';
import { ActionIcon } from '@/components/ui/ActionIcon';

const meta: Meta<typeof ActionIcon> = {
  title: 'UI/ActionIcon',
  component: ActionIcon,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof ActionIcon>;

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export const Primary: Story = {
  args: { variant: 'primary', 'aria-label': 'Favourite', children: <StarIcon /> },
};

export const Secondary: Story = {
  args: { variant: 'secondary', 'aria-label': 'Favourite', children: <StarIcon /> },
};

export const Ghost: Story = {
  args: { variant: 'ghost', 'aria-label': 'Favourite', children: <StarIcon /> },
};

export const Danger: Story = {
  args: { variant: 'danger', 'aria-label': 'Delete', children: <StarIcon /> },
};

export const Loading: Story = {
  args: { variant: 'primary', isLoading: true, 'aria-label': 'Loading', children: <StarIcon /> },
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true, 'aria-label': 'Disabled', children: <StarIcon /> },
};
