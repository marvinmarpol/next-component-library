import { FileButton as MantineFileButton } from '@mantine/core';
import { Button } from './Button';
import type { FileButtonProps } from '@/components/ui/FileButton';

export function FileButton({
  onChange,
  accept,
  multiple = false,
  variant = 'secondary',
  size = 'md',
  disabled,
  children = 'Choose file',
}: FileButtonProps) {
  return (
    // Mantine FileButton is generic over multiple; cast to bypass the conditional type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <MantineFileButton onChange={onChange as any} accept={accept} multiple={multiple} disabled={disabled}>
      {(props) => (
        <Button variant={variant} size={size} disabled={disabled} onClick={props.onClick}>
          {children}
        </Button>
      )}
    </MantineFileButton>
  );
}
