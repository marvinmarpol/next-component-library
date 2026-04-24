import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Footer } from '@/components/layout/Footer';
import type { FooterLinkGroup } from '@/components/layout/Footer';

const linkGroups: FooterLinkGroup[] = [
  {
    title: 'Products',
    links: [
      { label: 'Savings Account', href: '/products/savings' },
      { label: 'Checking Account', href: '/products/checking' },
      { label: 'Loans', href: '/products/loans' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Security', href: '/security' },
    ],
  },
];

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    copyright: '© 2024 BankApp. All rights reserved.',
  },
};

export const WithLinks: Story = {
  args: {
    linkGroups,
    copyright: '© 2024 BankApp. All rights reserved.',
  },
};

export const WithLogo: Story = {
  args: {
    logo: (
      <span style={{ fontWeight: 700, fontSize: 20, color: '#0057FF' }}>
        BankApp
      </span>
    ),
    linkGroups,
    copyright: '© 2024 BankApp. Regulated by OJK. All rights reserved.',
  },
};
