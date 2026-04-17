import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps } from '@/components/ui/Button';

const VARIANT_MAP: Record<NonNullable<ButtonProps['variant']>, { variant: string; color?: string }> = {
  primary:   { variant: 'filled',  color: 'Blue' },
  secondary: { variant: 'outline', color: 'Blue' },
  ghost:     { variant: 'subtle',  color: 'Blue' },
  danger:    { variant: 'filled',  color: 'red' },
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
  children,
  onClick,
}: ButtonProps) {
  const { variant: mantineVariant, color } = VARIANT_MAP[variant];

  return (
    <MantineButton
      variant={mantineVariant}
      color={color}
      size={SIZE_MAP[size]}
      loading={isLoading}
      leftSection={leftIcon}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </MantineButton>
  );
}
