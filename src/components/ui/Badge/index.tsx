export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outline' | 'light' | 'dot';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  fullWidth?: boolean;
  /** Renders as a circle — useful for single-character count badges */
  circle?: boolean;
}

export { Badge } from '@/adapters';
