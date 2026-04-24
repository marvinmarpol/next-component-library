import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { Drawer } from '@/components/ui/Drawer';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Drawer', () => {
  it('renders content when opened', () => {
    wrap(<Drawer opened onClose={vi.fn()}>Drawer body</Drawer>);
    expect(screen.getByText('Drawer body')).toBeInTheDocument();
  });

  it('does not render content when closed', () => {
    wrap(<Drawer opened={false} onClose={vi.fn()}>Hidden body</Drawer>);
    expect(screen.queryByText('Hidden body')).not.toBeInTheDocument();
  });

  it('renders title when provided', () => {
    wrap(<Drawer opened onClose={vi.fn()} title="Navigation">Content</Drawer>);
    expect(screen.getByText('Navigation')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    wrap(<Drawer opened onClose={onClose} title="Nav">Content</Drawer>);
    // The header close button is the only button when no other buttons are in the body
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(onClose).toHaveBeenCalledOnce();
  });

  it.each([['left'], ['right'], ['top'], ['bottom']] as const)(
    'renders %s position without errors',
    (position) => {
      wrap(<Drawer opened onClose={vi.fn()} position={position}>Content</Drawer>);
      expect(screen.getByText('Content')).toBeInTheDocument();
    }
  );
});
