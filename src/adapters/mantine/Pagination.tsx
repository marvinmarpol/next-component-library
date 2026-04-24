import { Pagination as MantinePagination } from '@mantine/core';
import type { PaginationProps } from '@/components/ui/Pagination';

const SIZE_MAP: Record<NonNullable<PaginationProps['size']>, string> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export function Pagination({
  total,
  value,
  defaultValue,
  onChange,
  disabled,
  siblings = 1,
  boundaries = 1,
  size = 'md',
}: PaginationProps) {
  return (
    <MantinePagination
      total={total}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      disabled={disabled}
      siblings={siblings}
      boundaries={boundaries}
      size={SIZE_MAP[size]}
      color="brand"
    />
  );
}
