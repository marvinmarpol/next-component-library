import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { Badge } from '@/components/ui/Badge';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Badge', () => {
  it('renders children', () => {
    wrap(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it.each([['filled'], ['outline'], ['light'], ['dot']] as const)(
    'renders %s variant without errors',
    (variant) => {
      wrap(<Badge variant={variant}>Badge</Badge>);
      expect(screen.getByText('Badge')).toBeInTheDocument();
    }
  );

  it.each([['primary'], ['success'], ['warning'], ['danger'], ['neutral']] as const)(
    'renders %s color without errors',
    (color) => {
      wrap(<Badge color={color}>Badge</Badge>);
      expect(screen.getByText('Badge')).toBeInTheDocument();
    }
  );

  it.each([['sm'], ['md'], ['lg']] as const)('renders %s size without errors', (size) => {
    wrap(<Badge size={size}>Badge</Badge>);
    expect(screen.getByText('Badge')).toBeInTheDocument();
  });
});
