import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Form, FormField, TextInputField, SelectField } from '@/components/composite/Form';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Form> = {
  title: 'Composite/Form',
  component: Form,
  
};

export default meta;
type Story = StoryObj<typeof Form>;

export const BasicForm: Story = {
  render: () => {
    const [name, setName] = useState('');
    const [role, setRole] = useState<string | null>(null);

    return (
      <Form onSubmit={(e) => e.preventDefault()}>
        <TextInputField
          label="Full Name"
          name="name"
          placeholder="Enter your name"
          required
          value={name}
          onChange={setName}
        />
        <SelectField
          label="Role"
          name="role"
          data={[
            { value: 'admin', label: 'Administrator' },
            { value: 'user', label: 'User' },
            { value: 'viewer', label: 'Viewer' },
          ]}
          placeholder="Select a role"
          value={role}
          onChange={setRole}
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  },
};

export const WithErrors: Story = {
  render: () => (
    <Form>
      <TextInputField
        label="Email"
        name="email"
        placeholder="you@example.com"
        required
        errorMessage="Please enter a valid email address."
      />
      <SelectField
        label="Account Type"
        name="accountType"
        data={[
          { value: 'savings', label: 'Savings' },
          { value: 'checking', label: 'Checking' },
        ]}
        errorMessage="Please select an account type."
      />
    </Form>
  ),
};

export const DisabledFields: Story = {
  render: () => (
    <Form>
      <TextInputField
        label="Account Number"
        name="accountNumber"
        value="•••• •••• 1234"
        disabled
      />
      <SelectField
        label="Currency"
        name="currency"
        data={[{ value: 'idr', label: 'IDR' }]}
        value="idr"
        disabled
      />
    </Form>
  ),
};

export const WithFormField: Story = {
  render: () => (
    <Form>
      <FormField label="Custom Field" name="custom" required errorMessage="This field is required.">
        <input
          id="custom"
          name="custom"
          style={{ border: '1px solid #ccc', borderRadius: 4, padding: '8px 12px', width: '100%' }}
          placeholder="Custom input"
        />
      </FormField>
    </Form>
  ),
};
