export interface ButtonProps {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Shows spinner and disables interaction */
  isLoading?: boolean;
  /** Icon placed before label */
  leftIcon?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export { Button } from '@/adapters';
