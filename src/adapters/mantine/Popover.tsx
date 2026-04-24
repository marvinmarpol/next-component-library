import { Popover as MantinePopover } from '@mantine/core';
import type { PopoverProps } from '@/components/ui/Popover';

export function Popover({
  trigger,
  content,
  position = 'bottom',
  withArrow = true,
  width = 220,
  shadow = 'md',
  opened,
  onChange,
}: PopoverProps) {
  return (
    <MantinePopover
      position={position}
      withArrow={withArrow}
      width={width}
      shadow={shadow}
      opened={opened}
      onChange={onChange}
    >
      <MantinePopover.Target>{trigger}</MantinePopover.Target>
      <MantinePopover.Dropdown>{content}</MantinePopover.Dropdown>
    </MantinePopover>
  );
}
