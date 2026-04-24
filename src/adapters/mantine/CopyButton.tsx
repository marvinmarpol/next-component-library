import { CopyButton as MantineCopyButton } from '@mantine/core';
import { Button } from './Button';
import type { CopyButtonProps } from '@/components/ui/CopyButton';

export function CopyButton({
  value,
  timeout = 2000,
  variant = 'ghost',
  size = 'md',
  disabled,
  children = 'Copy',
  copiedLabel = 'Copied!',
}: CopyButtonProps) {
  return (
    <MantineCopyButton value={value} timeout={timeout}>
      {({ copied, copy }) => (
        <Button
          variant={copied ? 'primary' : variant}
          size={size}
          disabled={disabled}
          onClick={copy}
        >
          {copied ? copiedLabel : children}
        </Button>
      )}
    </MantineCopyButton>
  );
}
