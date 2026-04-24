import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { Paper } from '@/components/ui/Paper';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Paper', () => {
  it('renders children', () => {
    wrap(<Paper>Card content</Paper>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders with border', () => {
    wrap(<Paper withBorder>With border</Paper>);
    expect(screen.getByText('With border')).toBeInTheDocument();
  });

  it.each([['none'], ['xs'], ['sm'], ['md'], ['lg'], ['xl']] as const)(
    'renders %s shadow without errors',
    (shadow) => {
      wrap(<Paper shadow={shadow}>Content</Paper>);
      expect(screen.getByText('Content')).toBeInTheDocument();
    }
  );

  it.each([['xs'], ['sm'], ['md'], ['lg'], ['xl']] as const)(
    'renders %s padding without errors',
    (padding) => {
      wrap(<Paper padding={padding}>Content</Paper>);
      expect(screen.getByText('Content')).toBeInTheDocument();
    }
  );

  it.each([['sm'], ['md'], ['lg']] as const)('renders %s radius without errors', (radius) => {
    wrap(<Paper radius={radius}>Content</Paper>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
