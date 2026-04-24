export interface DrawerProps {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: React.ReactNode;
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  withCloseButton?: boolean;
  withOverlay?: boolean;
}

export { Drawer } from '@/adapters';
