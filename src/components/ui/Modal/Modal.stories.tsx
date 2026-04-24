import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [opened, setOpened] = useState(false);
    return (
      <>
        <Button onClick={() => setOpened(true)}>Open modal</Button>
        <Modal {...args} opened={opened} onClose={() => setOpened(false)}>
          <p>Modal body content goes here. Confirm the action below.</p>
          <div style={{ display: 'flex', gap: 8, marginTop: 16, justifyContent: 'flex-end' }}>
            <Button variant="ghost" onClick={() => setOpened(false)}>Cancel</Button>
            <Button onClick={() => setOpened(false)}>Confirm</Button>
          </div>
        </Modal>
      </>
    );
  },
  args: { title: 'Confirm transfer' },
};

export const Centered: Story = {
  render: (args) => {
    const [opened, setOpened] = useState(false);
    return (
      <>
        <Button onClick={() => setOpened(true)}>Open centered</Button>
        <Modal {...args} opened={opened} onClose={() => setOpened(false)}>
          <p>This modal is vertically centered.</p>
        </Modal>
      </>
    );
  },
  args: { title: 'Centered modal', centered: true },
};

export const Large: Story = {
  render: (args) => {
    const [opened, setOpened] = useState(false);
    return (
      <>
        <Button onClick={() => setOpened(true)}>Open large modal</Button>
        <Modal {...args} opened={opened} onClose={() => setOpened(false)}>
          <p>Large modal with more content space.</p>
        </Modal>
      </>
    );
  },
  args: { title: 'Statement', size: 'lg' },
};
