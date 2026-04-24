import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { Tabs } from '@/components/ui/Tabs';
import { Theme } from '@/tokens/theme';

const ITEMS = [
  { value: 'a', label: 'Tab A', content: 'Content A' },
  { value: 'b', label: 'Tab B', content: 'Content B' },
  { value: 'c', label: 'Tab C', content: 'Content C', disabled: true },
];

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Tabs', () => {
  it('renders all tab labels', () => {
    wrap(<Tabs items={ITEMS} />);
    expect(screen.getByText('Tab A')).toBeInTheDocument();
    expect(screen.getByText('Tab B')).toBeInTheDocument();
    expect(screen.getByText('Tab C')).toBeInTheDocument();
  });

  it('shows the first tab content by default', () => {
    wrap(<Tabs items={ITEMS} />);
    expect(screen.getByText('Content A')).toBeVisible();
  });

  it('switches content when a tab is clicked', () => {
    wrap(<Tabs items={ITEMS} />);
    fireEvent.click(screen.getByText('Tab B'));
    expect(screen.getByText('Content B')).toBeVisible();
  });

  it('calls onChange when tab is selected', () => {
    const onChange = vi.fn();
    wrap(<Tabs items={ITEMS} onChange={onChange} />);
    fireEvent.click(screen.getByText('Tab B'));
    expect(onChange).toHaveBeenCalledWith('b');
  });

  it('disabled tab is not clickable', () => {
    wrap(<Tabs items={ITEMS} />);
    expect(screen.getByRole('tab', { name: 'Tab C' })).toBeDisabled();
  });

  it.each([['default'], ['outline'], ['pills']] as const)(
    'renders %s variant without errors',
    (variant) => {
      wrap(<Tabs items={ITEMS.slice(0, 2)} variant={variant} />);
      expect(screen.getByText('Tab A')).toBeInTheDocument();
    }
  );
});
