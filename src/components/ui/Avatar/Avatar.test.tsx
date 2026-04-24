import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { Avatar } from '@/components/ui/Avatar';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Avatar', () => {
  it('renders with a src image', () => {
    wrap(<Avatar src="https://example.com/avatar.jpg" alt="Jane" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders initials from a single-word name', () => {
    wrap(<Avatar name="Budi" />);
    expect(screen.getByText('B')).toBeInTheDocument();
  });

  it('renders two-letter initials from a full name', () => {
    wrap(<Avatar name="Ahmad Wijaya" />);
    expect(screen.getByText('AW')).toBeInTheDocument();
  });

  it.each([['sm'], ['md'], ['lg'], ['xl']] as const)('renders %s size without errors', (size) => {
    const { container } = wrap(<Avatar name="Test User" size={size} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it.each([['sm'], ['md'], ['lg'], ['full']] as const)('renders %s radius without errors', (radius) => {
    const { container } = wrap(<Avatar name="Test User" radius={radius} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
