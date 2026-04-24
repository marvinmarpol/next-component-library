export interface ModalProps {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  withCloseButton?: boolean;
  centered?: boolean;
  fullScreen?: boolean;
}

export { Modal } from '@/adapters';
