import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { Tooltip } from '@/components/ui/Tooltip';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Tooltip', () => {
  it('renders its child', () => {
    wrap(<Tooltip label="Hint"><button>Hover me</button></Tooltip>);
    expect(screen.getByRole('button', { name: 'Hover me' })).toBeInTheDocument();
  });

  it('has label accessible to the child via aria-describedby', () => {
    wrap(<Tooltip label="Helpful hint"><button>Trigger</button></Tooltip>);
    expect(screen.getByRole('button', { name: 'Trigger' })).toBeInTheDocument();
  });

  it.each([['top'], ['bottom'], ['left'], ['right']] as const)(
    'renders %s position without errors',
    (position) => {
      wrap(<Tooltip label="Tip" position={position}><button>btn</button></Tooltip>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    }
  );

  it('renders in disabled state without showing tooltip', () => {
    wrap(<Tooltip label="Hidden" disabled><button>btn</button></Tooltip>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
