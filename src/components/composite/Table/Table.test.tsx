import React from 'react';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect } from 'vitest';
import { Table } from '@/components/composite/Table';
import type { TableColumn } from '@/components/composite/Table';
import { Theme } from '@/tokens/theme';

interface User {
  id: number;
  name: string;
  role: string;
}

const columns: TableColumn<User>[] = [
  { key: 'name', header: 'Name' },
  { key: 'role', header: 'Role' },
];

const data: User[] = [
  { id: 1, name: 'Budi Santoso', role: 'Admin' },
  { id: 2, name: 'Siti Rahayu',  role: 'User' },
];

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Table', () => {
  it('renders column headers', () => {
    renderWithMantine(
      <Table<User> columns={columns} data={data} rowKey="id" />
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
  });

  it('renders all data rows', () => {
    renderWithMantine(
      <Table<User> columns={columns} data={data} rowKey="id" />
    );
    expect(screen.getByText('Budi Santoso')).toBeInTheDocument();
    expect(screen.getByText('Siti Rahayu')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('User')).toBeInTheDocument();
  });

  it('renders empty message when data is empty', () => {
    renderWithMantine(
      <Table<User> columns={columns} data={[]} rowKey="id" emptyMessage="No users found." />
    );
    expect(screen.getByText('No users found.')).toBeInTheDocument();
  });

  it('renders default empty message', () => {
    renderWithMantine(
      <Table<User> columns={columns} data={[]} rowKey="id" />
    );
    expect(screen.getByText('No data available.')).toBeInTheDocument();
  });

  it('renders skeleton rows when loading', () => {
    renderWithMantine(
      <Table<User> columns={columns} data={[]} rowKey="id" isLoading />
    );
    // Column headers still render in loading state
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    // Data rows should not render
    expect(screen.queryByText('Budi Santoso')).not.toBeInTheDocument();
  });

  it('uses custom render function for cell', () => {
    const columnsWithRender: TableColumn<User>[] = [
      { key: 'name', header: 'Name' },
      {
        key: 'role',
        header: 'Role',
        render: (value) => <span data-testid="custom-cell">{String(value).toUpperCase()}</span>,
      },
    ];
    renderWithMantine(
      <Table<User> columns={columnsWithRender} data={data} rowKey="id" />
    );
    expect(screen.getAllByTestId('custom-cell')[0]).toHaveTextContent('ADMIN');
  });
});
