import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { Footer } from '@/components/layout/Footer';
import type { FooterLinkGroup } from '@/components/layout/Footer';
import { Theme } from '@/tokens/theme';

const linkGroups: FooterLinkGroup[] = [
  {
    title: 'Products',
    links: [
      { label: 'Savings Account', href: '/products/savings' },
      { label: 'Loans', href: '/products/loans' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
    ],
  },
];

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Footer', () => {
  it('renders a <footer> element', () => {
    renderWithMantine(<Footer />);
    expect(document.querySelector('footer')).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    renderWithMantine(<Footer copyright="© 2024 BankApp." />);
    expect(screen.getByText('© 2024 BankApp.')).toBeInTheDocument();
  });

  it('renders default copyright year when omitted', () => {
    renderWithMantine(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument();
  });

  it('renders logo when provided', () => {
    renderWithMantine(<Footer logo={<span>BankApp</span>} />);
    expect(screen.getByText('BankApp')).toBeInTheDocument();
  });

  it('renders link group titles and links', () => {
    renderWithMantine(<Footer linkGroups={linkGroups} />);
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
    expect(screen.getByText('Savings Account')).toBeInTheDocument();
    expect(screen.getByText('Help Center')).toBeInTheDocument();
  });

  it('renders correct hrefs for links', () => {
    renderWithMantine(<Footer linkGroups={linkGroups} />);
    expect(screen.getByText('Savings Account').closest('a')).toHaveAttribute('href', '/products/savings');
  });
});
