import { Avatar as MantineAvatar } from '@mantine/core';
import type { AvatarProps } from '@/components/ui/Avatar';

const SIZE_MAP: Record<NonNullable<AvatarProps['size']>, string> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

const RADIUS_MAP: Record<NonNullable<AvatarProps['radius']>, string> = {
  sm:   'sm',
  md:   'md',
  lg:   'lg',
  full: 'xl',
};

const COLOR_MAP: Record<NonNullable<AvatarProps['color']>, string> = {
  primary: 'brand',
  success: 'success',
  warning: 'warning',
  danger:  'error',
  neutral: 'gray',
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  radius = 'full',
  color = 'primary',
}: AvatarProps) {
  return (
    <MantineAvatar
      src={src}
      alt={alt}
      size={SIZE_MAP[size]}
      radius={RADIUS_MAP[radius]}
      color={COLOR_MAP[color]}
    >
      {!src && name ? getInitials(name) : undefined}
    </MantineAvatar>
  );
}
