import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { LoadingOverlay } from '@/components/ui/LoadingOverlay';
import { Theme } from '@/tokens/theme';

function wrap(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('LoadingOverlay', () => {
  it('renders without errors when visible', () => {
    const { container } = wrap(
      <div style={{ position: 'relative' }}>
        <LoadingOverlay visible />
      </div>
    );
    expect(container).toBeInTheDocument();
  });

  it('renders without errors when hidden', () => {
    const { container } = wrap(
      <div style={{ position: 'relative' }}>
        <LoadingOverlay visible={false} />
      </div>
    );
    expect(container).toBeInTheDocument();
  });

  it.each([['spinner'], ['dots'], ['bars']] as const)(
    'renders %s loader variant without errors',
    (variant) => {
      const { container } = wrap(
        <div style={{ position: 'relative' }}>
          <LoadingOverlay visible loaderProps={{ variant }} />
        </div>
      );
      expect(container).toBeInTheDocument();
    }
  );
});
