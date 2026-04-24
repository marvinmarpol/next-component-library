export interface PaginationProps {
  /** Total number of pages */
  total: number;
  /** Controlled current page */
  value?: number;
  defaultValue?: number;
  onChange?: (page: number) => void;
  disabled?: boolean;
  /** Number of sibling pages on each side of the active page */
  siblings?: number;
  /** Number of pages shown at start/end */
  boundaries?: number;
  size?: 'sm' | 'md' | 'lg';
}

export { Pagination } from '@/adapters';
