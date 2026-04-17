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

const columns: TableColumn<User>[] = [
  { key: 'name',   header: 'Name' },
  { key: 'email',  header: 'Email' },
  { key: 'role',   header: 'Role' },
  {
    key: 'status',
    header: 'Status',
    render: (value) => (
      <span style={{
        padding: '2px 8px',
        borderRadius: 12,
        fontSize: 12,
        backgroundColor: value === 'Active' ? '#E6FFF5' : '#FFF0F0',
        color: value === 'Active' ? '#00B982' : '#E8333A',
      }}>
        {String(value)}
      </span>
    ),
  },
];

const data: User[] = [
  { id: 1, name: 'Budi Santoso',    email: 'budi@example.com',    role: 'Admin',  status: 'Active' },
  { id: 2, name: 'Siti Rahayu',     email: 'siti@example.com',    role: 'User',   status: 'Active' },
  { id: 3, name: 'Andi Wijaya',     email: 'andi@example.com',    role: 'Viewer', status: 'Inactive' },
  { id: 4, name: 'Dewi Kusuma',     email: 'dewi@example.com',    role: 'User',   status: 'Active' },
];

const meta: Meta<typeof Table> = {
  title: 'Composite/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => <Table<User> columns={columns} data={data} rowKey="id" />,
};

export const Loading: Story = {
  render: () => <Table<User> columns={columns} data={[]} rowKey="id" isLoading />,
};

export const Empty: Story = {
  render: () => <Table<User> columns={columns} data={[]} rowKey="id" emptyMessage="No users found." />,
};
