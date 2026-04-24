import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { Popover } from '@/components/ui/Popover';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Popover', () => {
  it('renders the trigger element', () => {
    wrap(
      <Popover
        trigger={<button>Open</button>}
        content={<div>Popover content</div>}
      />
    );
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
  });

  it('renders content when opened is true', () => {
    wrap(
      <Popover
        trigger={<button>Open</button>}
        content={<div>Popover body</div>}
        opened
      />
    );
    expect(screen.getByText('Popover body')).toBeInTheDocument();
  });

  it.each([['top'], ['bottom'], ['left'], ['right']] as const)(
    'renders %s position without errors',
    (position) => {
      wrap(
        <Popover
          trigger={<button>T</button>}
          content={<div>C</div>}
          position={position}
        />
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
    }
  );
});
