import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { Form, FormField, TextInputField, SelectField } from '@/components/composite/Form';
import { Theme } from '@/tokens/theme';

function renderWithMantine(ui: React.ReactElement) {
  return render(<MantineProvider theme={Theme}>{ui}</MantineProvider>);
}

describe('Form', () => {
  it('renders children inside a form element', () => {
    renderWithMantine(
      <Form>
        <p>Form content</p>
      </Form>
    );
    expect(screen.getByText('Form content')).toBeInTheDocument();
    expect(document.querySelector('form')).toBeInTheDocument();
  });

  it('calls onSubmit when form is submitted', () => {
    const onSubmit = vi.fn((e: React.FormEvent) => e.preventDefault());
    renderWithMantine(
      <Form onSubmit={onSubmit}>
        <button type="submit">Submit</button>
      </Form>
    );
    fireEvent.submit(document.querySelector('form')!);
    expect(onSubmit).toHaveBeenCalledOnce();
  });
});

describe('FormField', () => {
  it('renders label and children', () => {
    renderWithMantine(
      <FormField label="Name" name="name">
        <input id="name" />
      </FormField>
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('shows required asterisk', () => {
    renderWithMantine(
      <FormField label="Name" name="name" required>
        <input id="name" />
      </FormField>
    );
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('shows error message', () => {
    renderWithMantine(
      <FormField label="Name" name="name" errorMessage="This field is required.">
        <input id="name" />
      </FormField>
    );
    expect(screen.getByText('This field is required.')).toBeInTheDocument();
  });
});

describe('TextInputField', () => {
  it('renders with label', () => {
    renderWithMantine(
      <TextInputField label="Email" name="email" />
    );
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('calls onChange on input', () => {
    const onChange = vi.fn();
    renderWithMantine(
      <TextInputField label="Email" name="email" onChange={onChange} />
    );
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    expect(onChange).toHaveBeenCalledWith('test@example.com');
  });

  it('shows error message', () => {
    renderWithMantine(
      <TextInputField label="Email" name="email" errorMessage="Invalid email." />
    );
    expect(screen.getByText('Invalid email.')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is set', () => {
    renderWithMantine(
      <TextInputField label="Email" name="email" disabled />
    );
    expect(screen.getByLabelText('Email')).toBeDisabled();
  });
});

describe('SelectField', () => {
  const options = [
    { value: 'savings',  label: 'Savings' },
    { value: 'checking', label: 'Checking' },
  ];

  it('renders with label', () => {
    renderWithMantine(
      <SelectField label="Account Type" name="type" data={options} />
    );
    expect(screen.getByText('Account Type')).toBeInTheDocument();
  });

  it('shows error message', () => {
    renderWithMantine(
      <SelectField label="Account Type" name="type" data={options} errorMessage="Please select a type." />
    );
    expect(screen.getByText('Please select a type.')).toBeInTheDocument();
  });
});
