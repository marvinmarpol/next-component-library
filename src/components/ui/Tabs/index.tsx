export interface TabItem {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  /** Uncontrolled default selected tab (defaults to first item) */
  defaultValue?: string;
  /** Controlled selected tab */
  value?: string;
  onChange?: (value: string | null) => void;
  variant?: 'default' | 'outline' | 'pills';
  orientation?: 'horizontal' | 'vertical';
  /** Stretch tabs to fill the tab list */
  grow?: boolean;
}

export { Tabs } from '@/adapters';
