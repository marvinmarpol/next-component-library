import { LoadingOverlay as MantineLoadingOverlay } from '@mantine/core';
import type { LoadingOverlayProps } from '@/components/ui/LoadingOverlay';

const LOADER_TYPE_MAP: Record<NonNullable<LoadingOverlayProps['loaderProps']>['variant'] & string, string> = {
  spinner: 'oval',
  dots:    'dots',
  bars:    'bars',
};

export function LoadingOverlay({
  visible,
  zIndex = 200,
  blur = 2,
  overlayOpacity = 0.3,
  loaderProps,
}: LoadingOverlayProps) {
  return (
    <MantineLoadingOverlay
      visible={visible}
      zIndex={zIndex}
      overlayProps={{ blur, backgroundOpacity: overlayOpacity }}
      loaderProps={
        loaderProps
          ? {
              size: loaderProps.size,
              type: (LOADER_TYPE_MAP[loaderProps.variant ?? 'spinner'] ?? 'oval') as 'oval' | 'dots' | 'bars',
            }
          : undefined
      }
    />
  );
}
