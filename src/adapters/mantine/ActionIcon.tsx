import { ActionIcon as MantineActionIcon } from '@mantine/core';
import type { ActionIconProps } from '@/components/ui/ActionIcon';

const VARIANT_MAP: Record<NonNullable<ActionIconProps['variant']>, { variant: string; color: string }> = {
  primary: { variant: 'filled',  color: 'brand' },
  secondary: { variant: 'outline', color: 'brand' },
  ghost:   { variant: 'subtle',  color: 'brand' },
  danger:  { variant: 'filled',  color: 'error' },
};

const SIZE_MAP: Record<NonNullable<ActionIconProps['size']>, string> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export function ActionIcon({
  'aria-label': ariaLabel,
  variant = 'primary',
  size = 'md',
  disabled,
  isLoading,
  children,
  onClick,
}: ActionIconProps) {
  const { variant: mantineVariant, color } = VARIANT_MAP[variant];

  return (
    <MantineActionIcon
      variant={mantineVariant}
      color={color}
      size={SIZE_MAP[size]}
      disabled={disabled}
      loading={isLoading}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </MantineActionIcon>
  );
}
