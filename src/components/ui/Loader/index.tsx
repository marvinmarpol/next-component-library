export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  /** Spinner shape */
  variant?: 'spinner' | 'dots' | 'bars';
  color?: 'primary' | 'success' | 'warning' | 'danger';
}

export { Loader } from '@/adapters';
