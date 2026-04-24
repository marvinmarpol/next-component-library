import { Tabs as MantineTabs } from '@mantine/core';
import type { TabsProps } from '@/components/ui/Tabs';

export function Tabs({
  items,
  defaultValue,
  value,
  onChange,
  variant = 'default',
  orientation = 'horizontal',
  grow,
}: TabsProps) {
  // In uncontrolled mode fall back to the first item; skip when controlled.
  const resolvedDefault = value !== undefined
    ? undefined
    : (defaultValue ?? items[0]?.value);

  return (
    <MantineTabs
      {...(value !== undefined ? { value } : { defaultValue: resolvedDefault })}
      onChange={onChange}
      variant={variant}
      orientation={orientation}
    >
      <MantineTabs.List grow={grow}>
        {items.map((item) => (
          <MantineTabs.Tab
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            leftSection={item.icon}
          >
            {item.label}
          </MantineTabs.Tab>
        ))}
      </MantineTabs.List>

      {items.map((item) => (
        <MantineTabs.Panel key={item.value} value={item.value} pt="sm">
          {item.content}
        </MantineTabs.Panel>
      ))}
    </MantineTabs>
  );
}
