import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: 'Account Overview',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Account Overview',
    subtitle: 'Manage your bank accounts and transactions.',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Transactions',
    subtitle: 'View and manage your recent activity.',
    actions: (
      <>
        <Button variant="secondary" size="sm">Export</Button>
        <Button variant="primary" size="sm">New Transfer</Button>
      </>
    ),
  },
};

export const WithBackAction: Story = {
  args: {
    title: 'Transfer Details',
    subtitle: 'Transaction ID: TXN-20240417-001',
    backAction: (
      <a href="/transfers" style={{ color: '#0057FF', fontSize: 14, textDecoration: 'none' }}>
        ← Back to Transfers
      </a>
    ),
    actions: (
      <Button variant="danger" size="sm">Cancel Transfer</Button>
    ),
  },
};
