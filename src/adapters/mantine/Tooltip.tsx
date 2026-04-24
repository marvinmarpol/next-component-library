import { Tooltip as MantineTooltip } from '@mantine/core';
import type { TooltipProps } from '@/components/ui/Tooltip';

export function Tooltip({
  label,
  children,
  position = 'top',
  withArrow = true,
  disabled,
  multiline,
  width,
}: TooltipProps) {
  return (
    <MantineTooltip
      label={label}
      position={position}
      withArrow={withArrow}
      disabled={disabled}
      multiline={multiline}
      w={width}
    >
      {children}
    </MantineTooltip>
  );
}
