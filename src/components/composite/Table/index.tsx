import React from 'react';

export interface TableColumn<T extends object = object> {
  key: string;
  header: string;
  render?: (value: unknown, row: T) => React.ReactNode;
  width?: string | number;
}

export interface TableProps<T extends object = object> {
  columns: TableColumn<T>[];
  data: T[];
  isLoading?: boolean;
  emptyMessage?: string;
  /** Key in T to use as row identifier */
  rowKey: keyof T;
}

export { Table } from '@/adapters';
