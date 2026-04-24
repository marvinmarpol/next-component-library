import type { Meta, StoryObj } from '@storybook/nextjs';
import { FileButton } from '@/components/ui/FileButton';

const meta: Meta<typeof FileButton> = {
  title: 'UI/FileButton',
  component: FileButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileButton>;

export const Default: Story = {
  args: {
    onChange: (file) => console.log('Selected:', file),
    children: 'Choose file',
  },
};

export const ImageUpload: Story = {
  args: {
    onChange: (file) => console.log('Image selected:', file),
    accept: 'image/*',
    children: 'Upload image',
    variant: 'primary',
  },
};

export const PdfUpload: Story = {
  args: {
    onChange: (file) => console.log('PDF selected:', file),
    accept: '.pdf',
    children: 'Attach PDF',
    variant: 'ghost',
  },
};

export const MultipleFiles: Story = {
  args: {
    onChange: (files) => console.log('Files selected:', files),
    multiple: true,
    children: 'Choose files',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    onChange: () => {},
    disabled: true,
    children: 'Upload disabled',
  },
};
