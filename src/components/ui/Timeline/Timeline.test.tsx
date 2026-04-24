import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { Timeline } from '@/components/ui/Timeline';
import { Theme } from '@/tokens/theme';

const ITEMS = [
  { title: 'Step one',   description: 'First thing happened' },
  { title: 'Step two',   description: 'Second thing happened' },
  { title: 'Step three' },
];

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Timeline', () => {
  it('renders all item titles', () => {
    wrap(<Timeline items={ITEMS} />);
    expect(screen.getByText('Step one')).toBeInTheDocument();
    expect(screen.getByText('Step two')).toBeInTheDocument();
    expect(screen.getByText('Step three')).toBeInTheDocument();
  });

  it('renders item descriptions', () => {
    wrap(<Timeline items={ITEMS} />);
    expect(screen.getByText('First thing happened')).toBeInTheDocument();
    expect(screen.getByText('Second thing happened')).toBeInTheDocument();
  });

  it('renders without description for items that omit it', () => {
    wrap(<Timeline items={ITEMS} />);
    expect(screen.queryByText('undefined')).not.toBeInTheDocument();
  });

  it.each([['primary'], ['success'], ['warning'], ['danger']] as const)(
    'renders %s color without errors',
    (color) => {
      wrap(<Timeline items={ITEMS} color={color} active={1} />);
      expect(screen.getByText('Step one')).toBeInTheDocument();
    }
  );
});
