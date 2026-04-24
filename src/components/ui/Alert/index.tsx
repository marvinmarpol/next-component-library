export interface AlertProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  severity?: 'info' | 'success' | 'warning' | 'danger';
  /** Visual style — light (default), filled, or outline */
  variant?: 'light' | 'filled' | 'outline';
  icon?: React.ReactNode;
  withCloseButton?: boolean;
  onClose?: () => void;
}

export { Alert } from '@/adapters';
