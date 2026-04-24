import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps } from '@/components/ui/Button';

const VARIANT_MAP: Record<NonNullable<ButtonProps['variant']>, { variant: string; color?: string }> = {
  primary:   { variant: 'filled',  color: 'brand' },
  secondary: { variant: 'outline', color: 'brand' },
  ghost:     { variant: 'subtle',  color: 'brand' },
  danger:    { variant: 'filled',  color: 'error' },
};

const SIZE_MAP: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  disabled,
  type = 'button',
  fullWidth = false,
  href,
  target,
  children,
  onClick,
}: ButtonProps) {
  const { variant: mantineVariant, color } = VARIANT_MAP[variant];

  const linkProps = href
    ? {
        component: 'a' as const,
        href,
        target,
        rel: target === '_blank' ? 'noopener noreferrer' : undefined,
      }
    : {};

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <MantineButton
      variant={mantineVariant}
      color={color}
      size={SIZE_MAP[size]}
      loading={isLoading}
      leftSection={leftIcon}
      disabled={disabled}
      type={href ? undefined : type}
      fullWidth={fullWidth}
      onClick={onClick}
      {...(linkProps as any)}
    >
      {children}
    </MantineButton>
  );
}
