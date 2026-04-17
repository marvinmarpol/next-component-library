import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { Header } from '@/components/layout/Header';
import { Theme } from '@/tokens/theme';

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Header', () => {
  it('renders the title', () => {
    renderWithMantine(<Header title="Account Overview" />);
    expect(screen.getByText('Account Overview')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    renderWithMantine(
      <Header title="Account Overview" subtitle="Manage your accounts." />
    );
    expect(screen.getByText('Manage your accounts.')).toBeInTheDocument();
  });

  it('does not render subtitle when omitted', () => {
    renderWithMantine(<Header title="Account Overview" />);
    expect(screen.queryByText('Manage your accounts.')).not.toBeInTheDocument();
  });

  it('renders actions slot', () => {
    renderWithMantine(
      <Header title="Transactions" actions={<button>Export</button>} />
    );
    expect(screen.getByText('Export')).toBeInTheDocument();
  });

  it('renders backAction slot', () => {
    renderWithMantine(
      <Header title="Details" backAction={<a href="/back">Back</a>} />
    );
    expect(screen.getByText('Back')).toBeInTheDocument();
  });

  it('renders title as an h1', () => {
    renderWithMantine(<Header title="Page Title" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Page Title');
  });
});
