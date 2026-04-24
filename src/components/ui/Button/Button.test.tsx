import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '@/components/ui/Button';
import { Theme } from '@/tokens/theme';

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Button', () => {
  it('renders children', () => {
    renderWithMantine(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    renderWithMantine(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('does not call onClick when disabled', () => {
    const onClick = vi.fn();
    renderWithMantine(<Button disabled onClick={onClick}>Disabled</Button>);
    fireEvent.click(screen.getByText('Disabled'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('shows loading state', () => {
    renderWithMantine(<Button isLoading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('renders as submit button', () => {
    renderWithMantine(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it.each([
    ['primary'],
    ['secondary'],
    ['ghost'],
    ['danger'],
  ] as const)('renders %s variant without errors', (variant) => {
    renderWithMantine(<Button variant={variant}>{variant}</Button>);
    expect(screen.getByText(variant)).toBeInTheDocument();
  });

  it.each([['sm'], ['md'], ['lg']] as const)('renders %s size without errors', (size) => {
    renderWithMantine(<Button size={size}>Button</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders as full width', () => {
    renderWithMantine(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders as anchor when href is provided', () => {
    renderWithMantine(<Button href="https://example.com">Link</Button>);
    const link = screen.getByRole('link', { name: 'Link' });
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('adds rel="noopener noreferrer" when target="_blank"', () => {
    renderWithMantine(
      <Button href="https://example.com" target="_blank">
        External
      </Button>
    );
    const link = screen.getByRole('link', { name: 'External' });
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
