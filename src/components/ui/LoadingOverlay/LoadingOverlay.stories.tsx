import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { LoadingOverlay } from '@/components/ui/LoadingOverlay';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof LoadingOverlay> = {
  title: 'UI/LoadingOverlay',
  component: LoadingOverlay,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

export const Visible: Story = {
  render: () => (
    <div style={{ position: 'relative', height: 160, border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
      <LoadingOverlay visible />
      <p>Content behind the overlay</p>
    </div>
  ),
};

export const Toggle: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Button onClick={() => setVisible((v) => !v)}>
          {visible ? 'Hide overlay' : 'Show overlay'}
        </Button>
        <div style={{ position: 'relative', height: 120, border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
          <LoadingOverlay visible={visible} />
          <p>Card content goes here.</p>
        </div>
      </div>
    );
  },
};

export const Dots: Story = {
  render: () => (
    <div style={{ position: 'relative', height: 120, border: '1px solid #eee', borderRadius: 8 }}>
      <LoadingOverlay visible loaderProps={{ variant: 'dots' }} />
    </div>
  ),
};
