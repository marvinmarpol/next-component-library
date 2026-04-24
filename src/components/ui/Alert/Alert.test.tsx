import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { Alert } from '@/components/ui/Alert';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Alert', () => {
  it('renders children', () => {
    wrap(<Alert>Something happened.</Alert>);
    expect(screen.getByText('Something happened.')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    wrap(<Alert title="Warning">Watch out.</Alert>);
    expect(screen.getByText('Warning')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    wrap(<Alert withCloseButton onClose={onClose}>Alert</Alert>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it.each([['info'], ['success'], ['warning'], ['danger']] as const)(
    'renders %s severity without errors',
    (severity) => {
      wrap(<Alert severity={severity}>{severity} alert</Alert>);
      expect(screen.getByText(`${severity} alert`)).toBeInTheDocument();
    }
  );

  it.each([['light'], ['filled'], ['outline']] as const)(
    'renders %s variant without errors',
    (variant) => {
      wrap(<Alert variant={variant}>Alert</Alert>);
      expect(screen.getByText('Alert')).toBeInTheDocument();
    }
  );
});
