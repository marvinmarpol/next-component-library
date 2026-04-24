import { Paper as MantinePaper } from '@mantine/core';
import type { PaperProps } from '@/components/ui/Paper';

export function Paper({
  children,
  shadow = 'sm',
  radius = 'md',
  withBorder,
  padding = 'md',
}: PaperProps) {
  return (
    <MantinePaper
      shadow={shadow === 'none' ? undefined : shadow}
      radius={radius}
      withBorder={withBorder}
      p={padding}
    >
      {children}
    </MantinePaper>
  );
}
