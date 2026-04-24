import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { Modal } from '@/components/ui/Modal';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Modal', () => {
  it('renders content when opened', () => {
    wrap(<Modal opened onClose={vi.fn()}>Modal body</Modal>);
    expect(screen.getByText('Modal body')).toBeInTheDocument();
  });

  it('does not render content when closed', () => {
    wrap(<Modal opened={false} onClose={vi.fn()}>Hidden body</Modal>);
    expect(screen.queryByText('Hidden body')).not.toBeInTheDocument();
  });

  it('renders title when provided', () => {
    wrap(<Modal opened onClose={vi.fn()} title="Confirm">Body</Modal>);
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    wrap(<Modal opened onClose={onClose} title="Dialog">Content</Modal>);
    // The header close button is the only button when no other buttons are in the body
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(onClose).toHaveBeenCalledOnce();
  });

  it.each([['sm'], ['md'], ['lg'], ['xl']] as const)(
    'renders %s size without errors',
    (size) => {
      wrap(<Modal opened onClose={vi.fn()} size={size}>Content</Modal>);
      expect(screen.getByText('Content')).toBeInTheDocument();
    }
  );
});
