import { TextInput as MantineTextInput, Select as MantineSelect, Stack, Box, Text } from '@mantine/core';
import type { FormProps, FormFieldProps, TextInputFieldProps, SelectFieldProps } from '@/components/composite/Form';

export function Form({ onSubmit, children }: FormProps) {
  return (
    <Box component="form" onSubmit={onSubmit}>
      <Stack gap="md">
        {children}
      </Stack>
    </Box>
  );
}

export function FormField({ label, name, required, errorMessage, children }: FormFieldProps) {
  return (
    <Box>
      <Text component="label" htmlFor={name} size="sm" fw={500} mb={4} display="block">
        {label}
        {required && (
          <Text component="span" c="red" ml={2}>*</Text>
        )}
      </Text>
      {children}
      {errorMessage && (
        <Text size="xs" c="red" mt={4}>{errorMessage}</Text>
      )}
    </Box>
  );
}

export function TextInputField({
  label,
  name,
  placeholder,
  required,
  disabled,
  errorMessage,
  value,
  onChange,
}: TextInputFieldProps) {
  return (
    <MantineTextInput
      id={name}
      name={name}
      label={label}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      error={errorMessage}
      value={value}
      onChange={(e) => onChange?.(e.currentTarget.value)}
      withAsterisk={required}
    />
  );
}

export function SelectField({
  label,
  name,
  data,
  placeholder,
  required,
  disabled,
  errorMessage,
  value,
  onChange,
}: SelectFieldProps) {
  return (
    <MantineSelect
      id={name}
      label={label}
      data={data}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      error={errorMessage}
      value={value}
      onChange={onChange}
      withAsterisk={required}
    />
  );
}
