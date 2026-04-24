export interface AvatarProps {
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Displayed as initials when src is absent */
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Border radius — use "full" for a circle */
  radius?: 'sm' | 'md' | 'lg' | 'full';
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
}

export { Avatar } from '@/adapters';
