import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Drawer } from '@/components/ui/Drawer';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['left', 'right', 'top', 'bottom'] },
    size:     { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Right: Story = {
  render: (args) => {
    const [opened, setOpened] = useState(false);
    return (
      <>
        <Button onClick={() => setOpened(true)}>Open drawer</Button>
        <Drawer {...args} opened={opened} onClose={() => setOpened(false)}>
          <p>Drawer content goes here.</p>
        </Drawer>
      </>
    );
  },
  args: { title: 'Navigation', position: 'right' },
};

export const Left: Story = {
  render: (args) => {
    const [opened, setOpened] = useState(false);
    return (
      <>
        <Button onClick={() => setOpened(true)}>Open left drawer</Button>
        <Drawer {...args} opened={opened} onClose={() => setOpened(false)}>
          <p>Left drawer content.</p>
        </Drawer>
      </>
    );
  },
  args: { title: 'Menu', position: 'left' },
};

export const Large: Story = {
  render: (args) => {
    const [opened, setOpened] = useState(false);
    return (
      <>
        <Button onClick={() => setOpened(true)}>Open large drawer</Button>
        <Drawer {...args} opened={opened} onClose={() => setOpened(false)}>
          <p>Large drawer content.</p>
        </Drawer>
      </>
    );
  },
  args: { title: 'Details', size: 'lg' },
};
