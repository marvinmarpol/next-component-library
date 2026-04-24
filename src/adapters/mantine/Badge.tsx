import { Badge as MantineBadge } from '@mantine/core';
import type { BadgeProps } from '@/components/ui/Badge';

const COLOR_MAP: Record<NonNullable<BadgeProps['color']>, string> = {
  primary: 'brand',
  success: 'success',
  warning: 'warning',
  danger:  'error',
  neutral: 'gray',
};

const SIZE_MAP: Record<NonNullable<BadgeProps['size']>, string> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export function Badge({
  children,
  variant = 'filled',
  size = 'md',
  color = 'primary',
  fullWidth,
  circle,
}: BadgeProps) {
  return (
    <MantineBadge
      variant={variant}
      size={SIZE_MAP[size]}
      color={COLOR_MAP[color]}
      fullWidth={fullWidth}
      circle={circle}
    >
      {children}
    </MantineBadge>
  );
}
