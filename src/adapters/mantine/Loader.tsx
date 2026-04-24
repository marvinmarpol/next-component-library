import { Loader as MantineLoader } from '@mantine/core';
import type { LoaderProps } from '@/components/ui/Loader';

const TYPE_MAP: Record<NonNullable<LoaderProps['variant']>, string> = {
  spinner: 'oval',
  dots:    'dots',
  bars:    'bars',
};

const COLOR_MAP: Record<NonNullable<LoaderProps['color']>, string> = {
  primary: 'brand',
  success: 'success',
  warning: 'warning',
  danger:  'error',
};

const SIZE_MAP: Record<NonNullable<LoaderProps['size']>, string> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export function Loader({
  size = 'md',
  variant = 'spinner',
  color = 'primary',
}: LoaderProps) {
  return (
    <MantineLoader
      size={SIZE_MAP[size]}
      type={TYPE_MAP[variant] as 'oval' | 'dots' | 'bars'}
      color={COLOR_MAP[color]}
    />
  );
}
