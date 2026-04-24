import { HoverCard as MantineHoverCard } from '@mantine/core';
import type { HoverCardProps } from '@/components/ui/HoverCard';

export function HoverCard({
  trigger,
  content,
  width = 280,
  position = 'bottom',
  withArrow = true,
  shadow = 'md',
  openDelay = 200,
  closeDelay = 400,
}: HoverCardProps) {
  return (
    <MantineHoverCard
      width={width}
      position={position}
      withArrow={withArrow}
      shadow={shadow}
      openDelay={openDelay}
      closeDelay={closeDelay}
    >
      <MantineHoverCard.Target>{trigger}</MantineHoverCard.Target>
      <MantineHoverCard.Dropdown>{content}</MantineHoverCard.Dropdown>
    </MantineHoverCard>
  );
}
