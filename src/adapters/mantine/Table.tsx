import { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import {
  Table as MantineTable,
  Skeleton,
  Text,
  Stack,
  TextInput,
  Group,
  UnstyledButton,
} from '@mantine/core';
import type { TableProps } from '@/components/composite/Table';

const SKELETON_ROWS = 5;

const SortIcon = ({ direction }: { direction: 'asc' | 'desc' | false }) => (
  <Text component="span" size="xs" c={direction ? 'brand' : 'dimmed'} ml={4}>
    {direction === 'asc' ? '▲' : direction === 'desc' ? '▼' : '⇅'}
  </Text>
);

export function Table<T extends object>({
  columns,
  data,
  isLoading = false,
  emptyMessage = 'No data available.',
  rowKey,
  enableSorting = false,
  enableFiltering = false,
  enableGlobalFilter = false,
}: TableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const mrtColumns: ColumnDef<T>[] = columns.map((col) => ({
    id: col.key,
    accessorKey: col.key,
    header: col.header,
    size: col.width ? Number(col.width) : undefined,
    enableSorting: col.sortable ?? enableSorting,
    enableColumnFilter: col.filterable ?? enableFiltering,
    cell: col.render
      ? ({ getValue, row }) => col.render!(getValue(), row.original)
      : ({ getValue }) => String(getValue() ?? ''),
  }));

  const table = useReactTable({
    data,
    columns: mrtColumns,
    state: { sorting, columnFilters, globalFilter },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getRowId: (row) => String((row as Record<string, unknown>)[rowKey as string]),
  });

  if (isLoading) {
    return (
      <MantineTable highlightOnHover>
        <MantineTable.Thead>
          <MantineTable.Tr>
            {columns.map((col) => (
              <MantineTable.Th key={col.key} style={{ width: col.width }}>
                {col.header}
              </MantineTable.Th>
            ))}
          </MantineTable.Tr>
        </MantineTable.Thead>
        <MantineTable.Tbody>
          {Array.from({ length: SKELETON_ROWS }).map((_, i) => (
            <MantineTable.Tr key={i}>
              {columns.map((col) => (
                <MantineTable.Td key={col.key}>
                  <Skeleton height={16} radius="sm" />
                </MantineTable.Td>
              ))}
            </MantineTable.Tr>
          ))}
        </MantineTable.Tbody>
      </MantineTable>
    );
  }

  const rows = table.getRowModel().rows;

  return (
    <Stack gap="sm">
      {enableGlobalFilter && (
        <TextInput
          placeholder="Search…"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.currentTarget.value)}
          style={{ maxWidth: 320 }}
        />
      )}
      <MantineTable highlightOnHover>
        <MantineTable.Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <MantineTable.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const canSort = header.column.getCanSort();
                return (
                  <MantineTable.Th
                    key={header.id}
                    style={{ width: header.getSize() }}
                  >
                    {canSort ? (
                      <UnstyledButton
                        onClick={header.column.getToggleSortingHandler()}
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        <SortIcon direction={header.column.getIsSorted()} />
                      </UnstyledButton>
                    ) : (
                      flexRender(header.column.columnDef.header, header.getContext())
                    )}
                  </MantineTable.Th>
                );
              })}
            </MantineTable.Tr>
          ))}
          {enableFiltering && (
            <MantineTable.Tr>
              {table.getHeaderGroups()[0].headers.map((header) => (
                <MantineTable.Th key={header.id} style={{ paddingTop: 4, paddingBottom: 4 }}>
                  {header.column.getCanFilter() && (
                    <TextInput
                      size="xs"
                      placeholder={`Filter…`}
                      value={(header.column.getFilterValue() as string) ?? ''}
                      onChange={(e) => header.column.setFilterValue(e.currentTarget.value)}
                    />
                  )}
                </MantineTable.Th>
              ))}
            </MantineTable.Tr>
          )}
        </MantineTable.Thead>
        <MantineTable.Tbody>
          {rows.length === 0 ? (
            <MantineTable.Tr>
              <MantineTable.Td colSpan={columns.length}>
                <Group justify="center" py="xl">
                  <Text c="dimmed" size="sm">{emptyMessage}</Text>
                </Group>
              </MantineTable.Td>
            </MantineTable.Tr>
          ) : (
            rows.map((row) => (
              <MantineTable.Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <MantineTable.Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </MantineTable.Td>
                ))}
              </MantineTable.Tr>
            ))
          )}
        </MantineTable.Tbody>
      </MantineTable>
    </Stack>
  );
}
