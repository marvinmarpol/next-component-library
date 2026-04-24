import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { Indicator } from '@/components/ui/Indicator';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Indicator', () => {
  it('renders children', () => {
    wrap(<Indicator><button>Inbox</button></Indicator>);
    expect(screen.getByRole('button', { name: 'Inbox' })).toBeInTheDocument();
  });

  it('shows count label when count > 0', () => {
    wrap(<Indicator count={5}><button>Inbox</button></Indicator>);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('hides count when count is 0 and showZero is false', () => {
    wrap(<Indicator count={0}><button>Inbox</button></Indicator>);
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });

  it('shows count when count is 0 and showZero is true', () => {
    wrap(<Indicator count={0} showZero><button>Inbox</button></Indicator>);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('shows custom label over count', () => {
    wrap(<Indicator label="New" count={9}><button>Inbox</button></Indicator>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders as disabled without errors', () => {
    wrap(<Indicator disabled count={3}><button>Inbox</button></Indicator>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
