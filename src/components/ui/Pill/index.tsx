export interface PillProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  withRemoveButton?: boolean;
  onRemove?: () => void;
  disabled?: boolean;
}

export { Pill } from '@/adapters';
