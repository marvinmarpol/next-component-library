import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CopyButton } from '@/components/ui/CopyButton';
import { Theme } from '@/tokens/theme';

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('CopyButton', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
  });

  it('renders children', () => {
    renderWithMantine(<CopyButton value="test">Copy text</CopyButton>);
    expect(screen.getByText('Copy text')).toBeInTheDocument();
  });

  it('renders default label when no children provided', () => {
    renderWithMantine(<CopyButton value="test" />);
    expect(screen.getByText('Copy')).toBeInTheDocument();
  });

  it('shows copied label after click', async () => {
    renderWithMantine(<CopyButton value="hello">Copy</CopyButton>);
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.getByText('Copied!')).toBeInTheDocument();
    });
  });

  it('uses custom copiedLabel', async () => {
    renderWithMantine(
      <CopyButton value="hello" copiedLabel="Done!">
        Copy
      </CopyButton>
    );
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(screen.getByText('Done!')).toBeInTheDocument();
    });
  });

  it('copies value to clipboard', async () => {
    renderWithMantine(<CopyButton value="secret-token">Copy</CopyButton>);
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('secret-token');
    });
  });

  it('is disabled when disabled prop is set', () => {
    renderWithMantine(
      <CopyButton value="test" disabled>
        Copy
      </CopyButton>
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
