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
  /** Stretches button to fill container width */
  fullWidth?: boolean;
  /** Renders as anchor tag — use for navigation */
  href?: string;
  /** Link target; automatically adds rel="noopener noreferrer" when "_blank" */
  target?: '_blank' | '_self' | '_parent' | '_top';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export { Button } from '@/adapters';
