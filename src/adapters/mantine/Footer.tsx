import { Box, Group, Stack, Text, Anchor, Divider, SimpleGrid } from '@mantine/core';
import type { FooterProps } from '@/components/layout/Footer';

export function Footer({ linkGroups, copyright, logo }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      style={{
        backgroundColor: 'var(--mantine-color-gray-0)',
        borderTop: '1px solid var(--mantine-color-gray-2)',
      }}
      py="xl"
      px="md"
    >
      <Box style={{ maxWidth: 1200, margin: '0 auto' }}>
        {(logo || linkGroups) && (
          <>
            <Group justify="space-between" align="flex-start" wrap="wrap" gap="xl">
              {logo && <Box>{logo}</Box>}

              {linkGroups && linkGroups.length > 0 && (
                <SimpleGrid cols={{ base: 2, sm: Math.min(linkGroups.length, 4) }} spacing="xl">
                  {linkGroups.map((group) => (
                    <Stack key={group.title} gap="xs">
                      <Text fw={600} size="sm">
                        {group.title}
                      </Text>
                      {group.links.map((link) => (
                        <Anchor
                          key={link.href}
                          href={link.href}
                          size="sm"
                          c="dimmed"
                          style={{ textDecoration: 'none' }}
                        >
                          {link.label}
                        </Anchor>
                      ))}
                    </Stack>
                  ))}
                </SimpleGrid>
              )}
            </Group>
            <Divider my="lg" />
          </>
        )}

        <Text size="sm" c="dimmed" ta="center">
          {copyright ?? `© ${year} All rights reserved.`}
        </Text>
      </Box>
    </Box>
  );
}
