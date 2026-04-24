export interface PaperProps {
  children: React.ReactNode;
  shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'sm' | 'md' | 'lg';
  withBorder?: boolean;
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export { Paper } from '@/adapters';
