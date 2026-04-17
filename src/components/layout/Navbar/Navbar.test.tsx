import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { Navbar } from '@/components/layout/Navbar';
import type { NavbarItem } from '@/components/layout/Navbar';
import { Theme } from '@/tokens/theme';

const navItems: NavbarItem[] = [
  { label: 'Dashboard', href: '/dashboard', isActive: true },
  { label: 'Accounts',  href: '/accounts' },
  { label: 'Transfers', href: '/transfers' },
];

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Navbar', () => {
  it('renders all nav items', () => {
    renderWithMantine(<Navbar items={navItems} />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Accounts')).toBeInTheDocument();
    expect(screen.getByText('Transfers')).toBeInTheDocument();
  });

  it('renders a <nav> element', () => {
    renderWithMantine(<Navbar items={navItems} />);
    expect(document.querySelector('nav')).toBeInTheDocument();
  });

  it('renders logo when provided', () => {
    renderWithMantine(
      <Navbar items={navItems} logo={<span>BankApp</span>} />
    );
    expect(screen.getByText('BankApp')).toBeInTheDocument();
  });

  it('renders action slot when provided', () => {
    renderWithMantine(
      <Navbar items={navItems} actions={<button>Sign In</button>} />
    );
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('renders empty navbar when items is empty', () => {
    renderWithMantine(<Navbar items={[]} />);
    expect(document.querySelector('nav')).toBeInTheDocument();
  });
});
