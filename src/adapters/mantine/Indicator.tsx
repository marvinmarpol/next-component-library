import { Indicator as MantineIndicator } from '@mantine/core';
import type { IndicatorProps } from '@/components/ui/Indicator';

const COLOR_MAP: Record<NonNullable<IndicatorProps['color']>, string> = {
  primary: 'brand',
  success: 'success',
  warning: 'warning',
  danger:  'error',
};

export function Indicator({
  children,
  label,
  count,
  color = 'primary',
  size = 10,
  position = 'top-end',
  disabled,
  processing,
  showZero,
  withBorder,
}: IndicatorProps) {
  const displayLabel =
    label ?? (count !== undefined && (count > 0 || showZero) ? String(count) : undefined);

  return (
    <MantineIndicator
      label={displayLabel}
      color={COLOR_MAP[color]}
      size={size}
      position={position}
      disabled={disabled}
      processing={processing}
      withBorder={withBorder}
      inline
    >
      {children}
    </MantineIndicator>
  );
}
