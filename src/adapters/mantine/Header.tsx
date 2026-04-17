import { Box, Group, Stack, Title, Text } from '@mantine/core';
import type { HeaderProps } from '@/components/layout/Header';

export function Header({ title, subtitle, actions, backAction }: HeaderProps) {
  return (
    <Box py="lg" style={{ borderBottom: '1px solid var(--mantine-color-gray-2)' }}>
      <Group justify="space-between" align="flex-start">
        <Stack gap={4}>
          {backAction && (
            <Box mb={4}>{backAction}</Box>
          )}
          <Title order={1} size="h2">
            {title}
          </Title>
          {subtitle && (
            <Text c="dimmed" size="sm">
              {subtitle}
            </Text>
          )}
        </Stack>

        {actions && (
          <Group gap="sm" style={{ flexShrink: 0 }}>
            {actions}
          </Group>
        )}
      </Group>
    </Box>
  );
}
