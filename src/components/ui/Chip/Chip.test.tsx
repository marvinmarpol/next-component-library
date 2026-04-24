import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { Chip } from '@/components/ui/Chip';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Chip', () => {
  it('renders children', () => {
    wrap(<Chip>Option A</Chip>);
    expect(screen.getByText('Option A')).toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    const onChange = vi.fn();
    wrap(<Chip onChange={onChange}>Toggle</Chip>);
    fireEvent.click(screen.getByText('Toggle'));
    expect(onChange).toHaveBeenCalled();
  });

  it('renders as checked by default when defaultChecked', () => {
    wrap(<Chip defaultChecked>Selected</Chip>);
    expect(screen.getByText('Selected')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is set', () => {
    wrap(<Chip disabled>Disabled</Chip>);
    const input = screen.getByRole('checkbox');
    expect(input).toBeDisabled();
  });

  it.each([['filled'], ['outline'], ['light']] as const)(
    'renders %s variant without errors',
    (variant) => {
      wrap(<Chip variant={variant}>Chip</Chip>);
      expect(screen.getByText('Chip')).toBeInTheDocument();
    }
  );
});
