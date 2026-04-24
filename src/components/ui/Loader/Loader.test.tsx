import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { Loader } from '@/components/ui/Loader';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Loader', () => {
  it('renders a loader element', () => {
    const { container } = wrap(<Loader />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it.each([['spinner'], ['dots'], ['bars']] as const)(
    'renders %s variant without errors',
    (variant) => {
      const { container } = wrap(<Loader variant={variant} />);
      expect(container.firstChild).toBeInTheDocument();
    }
  );

  it.each([['sm'], ['md'], ['lg']] as const)('renders %s size without errors', (size) => {
    const { container } = wrap(<Loader size={size} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it.each([['primary'], ['success'], ['warning'], ['danger']] as const)(
    'renders %s color without errors',
    (color) => {
      const { container } = wrap(<Loader color={color} />);
      expect(container.firstChild).toBeInTheDocument();
    }
  );
});
