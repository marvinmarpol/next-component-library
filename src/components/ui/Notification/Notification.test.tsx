import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { Notification } from '@/components/ui/Notification';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Notification', () => {
  it('renders children', () => {
    wrap(<Notification>Message</Notification>);
    expect(screen.getByText('Message')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    wrap(<Notification title="Alert">Body</Notification>);
    expect(screen.getByText('Alert')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    wrap(<Notification withCloseButton onClose={onClose}>Body</Notification>);
    // The close button is the only button in the rendered notification
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('does not render close button when withCloseButton is false', () => {
    wrap(<Notification withCloseButton={false}>Body</Notification>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it.each([['info'], ['success'], ['warning'], ['danger']] as const)(
    'renders %s severity without errors',
    (severity) => {
      wrap(<Notification severity={severity}>Note</Notification>);
      expect(screen.getByText('Note')).toBeInTheDocument();
    }
  );
});
