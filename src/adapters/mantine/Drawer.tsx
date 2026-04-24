import { Drawer as MantineDrawer } from '@mantine/core';
import type { DrawerProps } from '@/components/ui/Drawer';

export function Drawer({
  opened,
  onClose,
  children,
  title,
  position = 'right',
  size = 'md',
  withCloseButton = true,
  withOverlay = true,
}: DrawerProps) {
  return (
    <MantineDrawer
      opened={opened}
      onClose={onClose}
      title={title}
      position={position}
      size={size === 'full' ? '100%' : size}
      withCloseButton={withCloseButton}
      withOverlay={withOverlay}
    >
      {children}
    </MantineDrawer>
  );
}
