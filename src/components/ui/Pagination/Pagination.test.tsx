import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { Pagination } from '@/components/ui/Pagination';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Pagination', () => {
  it('renders page number buttons', () => {
    wrap(<Pagination total={5} defaultValue={1} />);
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '5' })).toBeInTheDocument();
  });

  it('calls onChange when a page is clicked', () => {
    const onChange = vi.fn();
    wrap(<Pagination total={5} defaultValue={1} onChange={onChange} />);
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it('renders in disabled state without errors', () => {
    const { container } = wrap(<Pagination total={5} defaultValue={1} disabled />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it.each([['sm'], ['md'], ['lg']] as const)('renders %s size without errors', (size) => {
    const { container } = wrap(<Pagination total={3} size={size} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
