import { Modal as MantineModal } from '@mantine/core';
import type { ModalProps } from '@/components/ui/Modal';

export function Modal({
  opened,
  onClose,
  children,
  title,
  size = 'md',
  withCloseButton = true,
  centered,
  fullScreen,
}: ModalProps) {
  return (
    <MantineModal
      opened={opened}
      onClose={onClose}
      title={title}
      size={size === 'full' ? '100%' : size}
      withCloseButton={withCloseButton}
      centered={centered}
      fullScreen={fullScreen}
    >
      {children}
    </MantineModal>
  );
}
