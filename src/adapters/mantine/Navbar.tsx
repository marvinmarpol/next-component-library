import { Group, Box, NavLink } from '@mantine/core';
import type { NavbarProps } from '@/components/layout/Navbar';

export function Navbar({ items, logo, actions }: NavbarProps) {
  return (
    <Box
      component="nav"
      style={{
        borderBottom: '1px solid var(--mantine-color-gray-2)',
        backgroundColor: 'var(--mantine-color-white)',
      }}
    >
      <Group
        px="md"
        py="sm"
        justify="space-between"
        style={{ maxWidth: 1200, margin: '0 auto' }}
      >
        {logo && (
          <Box style={{ flexShrink: 0 }}>
            {logo}
          </Box>
        )}

        <Group gap="xs" component="ul" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {items.map((item) => (
            <Box component="li" key={item.href}>
              <NavLink
                href={item.href}
                label={item.label}
                leftSection={item.icon}
                active={item.isActive}
                style={{ borderRadius: 'var(--mantine-radius-md)' }}
              />
            </Box>
          ))}
        </Group>

        {actions && (
          <Group gap="sm" style={{ flexShrink: 0 }}>
            {actions}
          </Group>
        )}
      </Group>
    </Box>
  );
}
