export interface TimelineItem {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Custom bullet element */
  bullet?: React.ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
  /** Index of the last active item (0-based) */
  active?: number;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  bulletSize?: number;
  lineWidth?: number;
  align?: 'left' | 'right';
  reverseActive?: boolean;
}

export { Timeline } from '@/adapters';
