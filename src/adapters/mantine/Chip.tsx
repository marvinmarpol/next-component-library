import { Chip as MantineChip } from '@mantine/core';
import type { ChipProps } from '@/components/ui/Chip';

const COLOR_MAP: Record<NonNullable<ChipProps['color']>, string> = {
  primary: 'brand',
  success: 'success',
  warning: 'warning',
  danger:  'error',
};

const SIZE_MAP: Record<NonNullable<ChipProps['size']>, string> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export function Chip({
  children,
  checked,
  defaultChecked,
  onChange,
  variant = 'outline',
  size = 'md',
  disabled,
  color = 'primary',
}: ChipProps) {
  return (
    <MantineChip
      checked={checked}
      defaultChecked={defaultChecked}
      onChange={onChange}
      variant={variant}
      size={SIZE_MAP[size]}
      disabled={disabled}
      color={COLOR_MAP[color]}
    >
      {children}
    </MantineChip>
  );
}
