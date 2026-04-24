import { Pill as MantinePill } from '@mantine/core';
import type { PillProps } from '@/components/ui/Pill';

const SIZE_MAP: Record<NonNullable<PillProps['size']>, string> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export function Pill({
  children,
  size = 'md',
  withRemoveButton,
  onRemove,
  disabled,
}: PillProps) {
  return (
    <MantinePill
      size={SIZE_MAP[size]}
      withRemoveButton={withRemoveButton}
      onRemove={onRemove}
      disabled={disabled}
    >
      {children}
    </MantinePill>
  );
}
