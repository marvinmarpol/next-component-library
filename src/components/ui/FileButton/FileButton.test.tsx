import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { FileButton } from '@/components/ui/FileButton';
import { Theme } from '@/tokens/theme';

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('FileButton', () => {
  it('renders children', () => {
    renderWithMantine(<FileButton onChange={vi.fn()}>Upload</FileButton>);
    expect(screen.getByText('Upload')).toBeInTheDocument();
  });

  it('renders default label when no children provided', () => {
    renderWithMantine(<FileButton onChange={vi.fn()} />);
    expect(screen.getByText('Choose file')).toBeInTheDocument();
  });

  it('renders a button', () => {
    renderWithMantine(<FileButton onChange={vi.fn()}>Select</FileButton>);
    expect(screen.getByRole('button', { name: 'Select' })).toBeInTheDocument();
  });

  it('is disabled when disabled prop is set', () => {
    renderWithMantine(
      <FileButton onChange={vi.fn()} disabled>
        Upload
      </FileButton>
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it.each([['sm'], ['md'], ['lg']] as const)('renders %s size without errors', (size) => {
    renderWithMantine(
      <FileButton onChange={vi.fn()} size={size}>
        Upload
      </FileButton>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
