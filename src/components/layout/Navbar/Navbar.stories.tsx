import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import type { NavbarItem } from '@/components/layout/Navbar';

const navItems: NavbarItem[] = [
  { label: 'Dashboard', href: '/dashboard', isActive: true },
  { label: 'Accounts',  href: '/accounts' },
  { label: 'Transfers', href: '/transfers' },
  { label: 'History',   href: '/history' },
];

const meta: Meta<typeof Navbar> = {
  title: 'Layout/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    items: navItems,
  },
};

export const WithLogo: Story = {
  args: {
    items: navItems,
    logo: (
      <span style={{ fontWeight: 700, fontSize: 18, color: '#0057FF' }}>
        BankApp
      </span>
    ),
  },
};

export const WithActions: Story = {
  args: {
    items: navItems,
    logo: (
      <span style={{ fontWeight: 700, fontSize: 18, color: '#0057FF' }}>
        BankApp
      </span>
    ),
    actions: (
      <>
        <Button variant="ghost" size="sm">Sign In</Button>
        <Button variant="primary" size="sm">Open Account</Button>
      </>
    ),
  },
};
