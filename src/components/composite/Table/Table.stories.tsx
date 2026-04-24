import type { Meta, StoryObj } from '@storybook/nextjs';
import { Table } from '@/components/composite/Table';
import type { TableColumn } from '@/components/composite/Table';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const StatusBadge = ({ value }: { value: unknown }) => (
  <span style={{
    padding: '2px 8px',
    borderRadius: 12,
    fontSize: 12,
    backgroundColor: value === 'Active' ? '#E6FFF5' : '#FFF0F0',
    color: value === 'Active' ? '#00B982' : '#E8333A',
  }}>
    {String(value)}
  </span>
);

const baseColumns: TableColumn<User>[] = [
  { key: 'name',   header: 'Name' },
  { key: 'email',  header: 'Email' },
  { key: 'role',   header: 'Role' },
  { key: 'status', header: 'Status', render: (value) => <StatusBadge value={value} /> },
];

const data: User[] = [
  { id: 1, name: 'Budi Santoso', email: 'budi@example.com',  role: 'Admin',  status: 'Active' },
  { id: 2, name: 'Siti Rahayu',  email: 'siti@example.com',  role: 'User',   status: 'Active' },
  { id: 3, name: 'Andi Wijaya',  email: 'andi@example.com',  role: 'Viewer', status: 'Inactive' },
  { id: 4, name: 'Dewi Kusuma',  email: 'dewi@example.com',  role: 'User',   status: 'Active' },
  { id: 5, name: 'Rizky Pratama', email: 'rizky@example.com', role: 'Admin', status: 'Inactive' },
];

const meta: Meta<typeof Table> = {
  title: 'Composite/Table',
  component: Table,
  
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => <Table<User> columns={baseColumns} data={data} rowKey="id" />,
};

export const WithSorting: Story = {
  render: () => (
    <Table<User>
      columns={[
        { key: 'name',   header: 'Name',   sortable: true },
        { key: 'email',  header: 'Email',  sortable: true },
        { key: 'role',   header: 'Role',   sortable: true },
        { key: 'status', header: 'Status', sortable: false, render: (value) => <StatusBadge value={value} /> },
      ]}
      data={data}
      rowKey="id"
      enableSorting
    />
  ),
};

export const WithFiltering: Story = {
  render: () => (
    <Table<User>
      columns={[
        { key: 'name',   header: 'Name',   filterable: true },
        { key: 'email',  header: 'Email',  filterable: true },
        { key: 'role',   header: 'Role',   filterable: true },
        { key: 'status', header: 'Status', filterable: false, render: (value) => <StatusBadge value={value} /> },
      ]}
      data={data}
      rowKey="id"
      enableFiltering
    />
  ),
};

export const WithGlobalFilter: Story = {
  render: () => (
    <Table<User>
      columns={baseColumns}
      data={data}
      rowKey="id"
      enableGlobalFilter
    />
  ),
};

export const FullFeatured: Story = {
  render: () => (
    <Table<User>
      columns={[
        { key: 'name',   header: 'Name',   sortable: true,  filterable: true },
        { key: 'email',  header: 'Email',  sortable: true,  filterable: true },
        { key: 'role',   header: 'Role',   sortable: true,  filterable: true },
        { key: 'status', header: 'Status', sortable: false, filterable: false, render: (value) => <StatusBadge value={value} /> },
      ]}
      data={data}
      rowKey="id"
      enableSorting
      enableFiltering
      enableGlobalFilter
    />
  ),
};

export const Loading: Story = {
  render: () => <Table<User> columns={baseColumns} data={[]} rowKey="id" isLoading />,
};

export const Empty: Story = {
  render: () => <Table<User> columns={baseColumns} data={[]} rowKey="id" emptyMessage="No users found." />,
};
