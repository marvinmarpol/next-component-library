export interface TooltipProps {
  /** Tooltip text or content */
  label: React.ReactNode;
  /** Single element that triggers the tooltip */
  children: React.ReactElement;
  position?: 'top' | 'bottom' | 'left' | 'right';
  withArrow?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  /** Max width in px when multiline */
  width?: number;
}

export { Tooltip } from '@/adapters';
