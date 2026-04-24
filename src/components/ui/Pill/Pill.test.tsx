import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { Pill } from '@/components/ui/Pill';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Pill', () => {
  it('renders children', () => {
    wrap(<Pill>React</Pill>);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders remove button element in DOM when withRemoveButton is true', () => {
    // Mantine v9 renders the remove button as aria-hidden; query DOM directly
    const { container } = wrap(<Pill withRemoveButton onRemove={vi.fn()}>TypeScript</Pill>);
    expect(container.querySelector('button')).toBeInTheDocument();
  });

  it('calls onRemove when remove button is clicked', () => {
    const onRemove = vi.fn();
    const { container } = wrap(<Pill withRemoveButton onRemove={onRemove}>Tag</Pill>);
    fireEvent.click(container.querySelector('button')!);
    expect(onRemove).toHaveBeenCalledOnce();
  });

  it.each([['sm'], ['md'], ['lg']] as const)('renders %s size without errors', (size) => {
    wrap(<Pill size={size}>Pill</Pill>);
    expect(screen.getByText('Pill')).toBeInTheDocument();
  });
});
