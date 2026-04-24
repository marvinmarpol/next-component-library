import { Timeline as MantineTimeline, Text } from '@mantine/core';
import type { TimelineProps } from '@/components/ui/Timeline';

const COLOR_MAP: Record<NonNullable<TimelineProps['color']>, string> = {
  primary: 'brand',
  success: 'success',
  warning: 'warning',
  danger:  'error',
};

export function Timeline({
  items,
  active,
  color = 'primary',
  bulletSize = 20,
  lineWidth = 2,
  align = 'left',
  reverseActive,
}: TimelineProps) {
  return (
    <MantineTimeline
      active={active}
      color={COLOR_MAP[color]}
      bulletSize={bulletSize}
      lineWidth={lineWidth}
      align={align}
      reverseActive={reverseActive}
    >
      {items.map((item, index) => (
        <MantineTimeline.Item key={index} title={item.title} bullet={item.bullet}>
          {item.description && (
            <Text size="sm" c="dimmed" mt={4}>
              {item.description}
            </Text>
          )}
        </MantineTimeline.Item>
      ))}
    </MantineTimeline>
  );
}
