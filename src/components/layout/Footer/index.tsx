import React from 'react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  linkGroups?: FooterLinkGroup[];
  copyright?: string;
  logo?: React.ReactNode;
}

export { Footer } from '@/adapters';
