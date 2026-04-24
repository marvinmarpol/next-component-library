export interface NotificationProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  severity?: 'info' | 'success' | 'warning' | 'danger';
  icon?: React.ReactNode;
  withCloseButton?: boolean;
  onClose?: () => void;
  loading?: boolean;
}

export { Notification } from '@/adapters';
