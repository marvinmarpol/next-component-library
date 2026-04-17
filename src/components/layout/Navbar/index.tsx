import React from 'react';

export interface NavbarItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

export interface NavbarProps {
  items: NavbarItem[];
  logo?: React.ReactNode;
  /** Right-side actions (e.g., login button, profile menu) */
  actions?: React.ReactNode;
}

export { Navbar } from '@/adapters';
