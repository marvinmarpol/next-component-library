import React from 'react';

export interface FormFieldProps {
  label: string;
  name: string;
  required?: boolean;
  errorMessage?: string;
  children: React.ReactNode;
}

export interface TextInputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export interface SelectFieldProps {
  label: string;
  name: string;
  data: Array<{ value: string; label: string }>;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  value?: string | null;
  onChange?: (value: string | null) => void;
}

export interface FormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export { Form, FormField, TextInputField, SelectField } from '@/adapters';
