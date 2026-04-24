import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { ActionIcon } from '@/components/ui/ActionIcon';
import { Theme } from '@/tokens/theme';

const Icon = () => <svg data-testid="icon" />;

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('ActionIcon', () => {
  it('renders children', () => {
    wrap(<ActionIcon aria-label="Test"><Icon /></ActionIcon>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('has the correct aria-label', () => {
    wrap(<ActionIcon aria-label="Delete"><Icon /></ActionIcon>);
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    wrap(<ActionIcon aria-label="Click" onClick={onClick}><Icon /></ActionIcon>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('is disabled when disabled prop is set', () => {
    wrap(<ActionIcon aria-label="Disabled" disabled><Icon /></ActionIcon>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it.each([['primary'], ['secondary'], ['ghost'], ['danger']] as const)(
    'renders %s variant without errors',
    (variant) => {
      wrap(<ActionIcon aria-label="v" variant={variant}><Icon /></ActionIcon>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    }
  );
});
