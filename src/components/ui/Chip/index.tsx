export interface ChipProps {
  children: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  variant?: 'filled' | 'outline' | 'light';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  color?: 'primary' | 'success' | 'warning' | 'danger';
}

export { Chip } from '@/adapters';
