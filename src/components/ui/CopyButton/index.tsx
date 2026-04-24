export interface CopyButtonProps {
  /** Text to copy to clipboard */
  value: string;
  /** Duration in ms before label resets to children (default: 2000) */
  timeout?: number;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Label shown before copying */
  children?: React.ReactNode;
  /** Label shown after a successful copy */
  copiedLabel?: React.ReactNode;
}

export { CopyButton } from '@/adapters';
