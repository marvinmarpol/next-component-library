import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { HoverCard } from '@/components/ui/HoverCard';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('HoverCard', () => {
  it('renders the trigger element', () => {
    wrap(
      <HoverCard
        trigger={<button>Hover me</button>}
        content={<div>Card content</div>}
      />
    );
    expect(screen.getByRole('button', { name: 'Hover me' })).toBeInTheDocument();
  });

  it.each([['top'], ['bottom'], ['left'], ['right']] as const)(
    'renders %s position without errors',
    (position) => {
      wrap(
        <HoverCard
          trigger={<button>Trigger</button>}
          content={<div>Content</div>}
          position={position}
        />
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
    }
  );
});
