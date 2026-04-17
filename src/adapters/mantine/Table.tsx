import { Table as MantineTable, Skeleton, Text, Stack } from '@mantine/core';
import type { TableProps } from '@/components/composite/Table';

const SKELETON_ROWS = 5;

export function Table<T extends object>({
  columns,
  data,
  isLoading = false,
  emptyMessage = 'No data available.',
  rowKey,
}: TableProps<T>) {
  const header = (
    <MantineTable.Thead>
      <MantineTable.Tr>
        {columns.map((col) => (
          <MantineTable.Th key={col.key} style={{ width: col.width }}>
            {col.header}
          </MantineTable.Th>
        ))}
      </MantineTable.Tr>
    </MantineTable.Thead>
  );

  if (isLoading) {
    return (
      <MantineTable highlightOnHover>
        {header}
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

  if (data.length === 0) {
    return (
      <Stack align="center" py="xl">
        <Text c="dimmed" size="sm">{emptyMessage}</Text>
      </Stack>
    );
  }

  return (
    <MantineTable highlightOnHover>
      {header}
      <MantineTable.Tbody>
        {data.map((row) => {
          const record = row as Record<string, unknown>;
          return (
            <MantineTable.Tr key={String(record[rowKey as string])}>
              {columns.map((col) => (
                <MantineTable.Td key={col.key}>
                  {col.render
                    ? col.render(record[col.key], row)
                    : String(record[col.key] ?? '')}
                </MantineTable.Td>
              ))}
            </MantineTable.Tr>
          );
        })}
      </MantineTable.Tbody>
    </MantineTable>
  );
}
