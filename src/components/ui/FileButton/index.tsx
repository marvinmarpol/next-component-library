export interface FileButtonProps {
  /**
   * Called when file(s) are selected.
   * Receives File[] when multiple=true, File | null otherwise.
   */
  onChange: (payload: File | File[] | null) => void;
  /** Accepted MIME types or extensions (e.g. "image/*", ".pdf,.docx") */
  accept?: string;
  /** Allow selecting multiple files */
  multiple?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children?: React.ReactNode;
}

export { FileButton } from '@/adapters';
