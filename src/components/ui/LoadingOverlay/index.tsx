export interface LoadingOverlayProps {
  /** Whether the overlay is visible */
  visible: boolean;
  zIndex?: number;
  /** Background blur in px */
  blur?: number;
  overlayOpacity?: number;
  loaderProps?: {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'spinner' | 'dots' | 'bars';
  };
}

export { LoadingOverlay } from '@/adapters';
