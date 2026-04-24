import { Notification as MantineNotification } from '@mantine/core';
import type { NotificationProps } from '@/components/ui/Notification';

const SEVERITY_COLOR: Record<NonNullable<NotificationProps['severity']>, string> = {
  info:    'brand',
  success: 'success',
  warning: 'warning',
  danger:  'error',
};

export function Notification({
  children,
  title,
  severity = 'info',
  icon,
  withCloseButton = true,
  onClose,
  loading,
}: NotificationProps) {
  return (
    <MantineNotification
      title={title}
      color={SEVERITY_COLOR[severity]}
      icon={icon}
      withCloseButton={withCloseButton}
      onClose={onClose}
      loading={loading}
    >
      {children}
    </MantineNotification>
  );
}
