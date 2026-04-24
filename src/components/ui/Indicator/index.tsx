export interface IndicatorProps {
  children: React.ReactNode;
  /** Custom label inside the indicator */
  label?: React.ReactNode;
  /** Numeric count; shown when > 0 or when showZero is true */
  count?: number;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  /** Dot size in px */
  size?: number;
  position?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
  disabled?: boolean;
  /** Animated pulse — use to signal new activity */
  processing?: boolean;
  showZero?: boolean;
  withBorder?: boolean;
}

export { Indicator } from '@/adapters';
