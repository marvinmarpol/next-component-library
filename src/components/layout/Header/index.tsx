import React from 'react';

export interface HeaderProps {
  title: string;
  subtitle?: string;
  /** Right-side action buttons or controls */
  actions?: React.ReactNode;
  /** Back navigation element */
  backAction?: React.ReactNode;
}

export { Header } from '@/adapters';
