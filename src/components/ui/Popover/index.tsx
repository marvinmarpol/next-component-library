export interface PopoverProps {
  /** Single element that triggers the popover */
  trigger: React.ReactElement;
  /** Content rendered inside the popover */
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  withArrow?: boolean;
  width?: number;
  shadow?: 'sm' | 'md' | 'lg';
  /** Controlled open state */
  opened?: boolean;
  onChange?: (opened: boolean) => void;
}

export { Popover } from '@/adapters';
