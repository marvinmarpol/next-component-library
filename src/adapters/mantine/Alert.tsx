import { Alert as MantineAlert } from '@mantine/core';
import type { AlertProps } from '@/components/ui/Alert';

const SEVERITY_COLOR: Record<NonNullable<AlertProps['severity']>, string> = {
  info:    'brand',
  success: 'success',
  warning: 'warning',
  danger:  'error',
};

export function Alert({
  children,
  title,
  severity = 'info',
  variant = 'light',
  icon,
  withCloseButton,
  onClose,
}: AlertProps) {
  return (
    <MantineAlert
      title={title}
      color={SEVERITY_COLOR[severity]}
      variant={variant}
      icon={icon}
      withCloseButton={withCloseButton}
      onClose={onClose}
    >
      {children}
    </MantineAlert>
  );
}
