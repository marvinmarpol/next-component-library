export interface HoverCardProps {
  /** Single element that triggers the hover card */
  trigger: React.ReactElement;
  /** Content rendered inside the card */
  content: React.ReactNode;
  width?: number;
  position?: 'top' | 'bottom' | 'left' | 'right';
  withArrow?: boolean;
  shadow?: 'sm' | 'md' | 'lg';
  openDelay?: number;
  closeDelay?: number;
}

export { HoverCard } from '@/adapters';
