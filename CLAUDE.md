# Design System Example — Storybook Boilerplate

## Project Purpose
This is a shared design system example built with Storybook, used across all frontend products (web app, internal tools, marketing pages).

The design system is built in **two layers**:
1. **Design Tokens + Component API** — our own, stable, never changes regardless of underlying library
2. **UI Adapter** — currently Mantine v8, swappable without touching consumer code

Consumer code always imports from this repository, never directly from Mantine or any other library.

---

## Tech Stack
- **Framework**: Next.js 16 + TypeScript (App Router)
- **UI Library (adapter)**: Mantine v8
- **Styling**: Mantine's CSS variables + `@mantine/core` theming — no Tailwind
- **Component Docs**: Storybook 10 (with @storybook/nextjs)
- **Testing**: Vitest + React Testing Library + Storybook interaction tests
- **Package**: Publishable as internal npm registry

---

## Architecture: The Abstraction Layer

This is the most important concept in this repo. Every component follows a 3-layer model:

```
Consumer code
     ↓  imports from this repository only
[ Component API ]   ← stable public interface (our props, our types)
     ↓  internally uses
[ UI Adapter ]           ← currently: Mantine. Tomorrow: shadcn, MUI, or none.
     ↓  styled with
[ Design Tokens ]   ← colors, spacing, typography — always ours
```

### Why this matters
If we ever need to replace Mantine (major version break, license change, bundle size, etc.),
we only change files inside `src/adapters/mantine/`. All consumer code and all stories stay untouched.

### The golden rule
> **Never let Mantine types leak into the public component API.**

```tsx
// ✅ CORRECT — -owned props, Mantine is an internal detail
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  children: React.ReactNode;
}

// ❌ WRONG — Mantine's ButtonProps leaking into public API
export interface ButtonProps extends MantineButtonProps {
  isLoading?: boolean;
}
```

---

## Project Structure

```
src/
  components/
    ui/               ← Primitive/base components (Button, Input, Badge, etc.)
    composite/        ← Composed components (Card, Modal, Form, etc.)
    layout/           ← Layout components (Container, Grid, Stack, etc.)
    banking/          ← Bank-specific components (BalanceCard, TransactionItem, etc.)

  adapters/
    mantine/          ← Mantine implementations of components
      Button.tsx      ← Uses Mantine <Button> internally, maps props → Mantine props
      Input.tsx
      ...
      index.ts        ← Re-exports all adapter implementations
    index.ts          ← Points to active adapter: export * from './mantine'
                         To switch library: change this one line.

  tokens/
    colors.ts         ← brand color tokens (source of truth)
    typography.ts     ← Font scale and weights
    spacing.ts        ← Spacing scale
    theme.ts          ← Mantine MantineTheme built from tokens

  hooks/              ← Shared hooks (useDisclosure, useClipboard wrappers, etc.)
  utils/              ← Formatting helpers (currency, date, masks)

  index.ts            ← Public API: exports only  component interfaces + implementations
```

---

## Adapter Pattern — How to Implement a Component

### Step 1 — Define the component interface (in `src/components/ui/`)

```tsx
// src/components/ui/Button/index.tsx

export interface ButtonProps {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Shows spinner and disables interaction */
  isLoading?: boolean;
  /** Icon placed before label */
  leftIcon?: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// Re-export the implementation from the active adapter
export { Button } from '@/adapters';
export type { ButtonProps };
```

### Step 2 — Implement the Mantine adapter (in `src/adapters/mantine/`)

```tsx
// src/adapters/mantine/Button.tsx

import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps } from '@/components/ui/Button';

// Map  variant → Mantine variant + color
const VARIANT_MAP: Record<NonNullable<ButtonProps['variant']>, {
  variant: string; color?: string;
}> = {
  primary:   { variant: 'filled',  color: 'Blue' },
  secondary: { variant: 'outline', color: 'Blue' },
  ghost:     { variant: 'subtle',  color: 'Blue' },
  danger:    { variant: 'filled',  color: 'red' },
};

const SIZE_MAP: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  disabled,
  children,
  onClick,
}: ButtonProps) {
  const { variant: mantineVariant, color } = VARIANT_MAP[variant];

  return (
    <MantineButton
      variant={mantineVariant}
      color={color}
      size={SIZE_MAP[size]}
      loading={isLoading}
      leftSection={leftIcon}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </MantineButton>
  );
}
```

### Step 3 — Switch the adapter (when migrating libraries)

```ts
// src/adapters/index.ts  ← ONLY FILE THAT CHANGES during a library migration

// Current adapter:
export * from './mantine';

// To switch to shadcn tomorrow:
// export * from './shadcn';

// To switch to a fully custom implementation:
// export * from './custom';
```

---

## Mantine-Specific Setup

### Theme file — always extend from tokens

```ts
// src/tokens/theme.ts
import { createTheme, MantineColorsTuple } from '@mantine/core';
import { colors } from './colors';

const Blue: MantineColorsTuple = [
  colors['-blue-50'],
  colors['-blue-100'],
  // ... through [9]
  colors['-blue-900'],
];

export const Theme = createTheme({
  colors: { Blue },
  primaryColor: 'Blue',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  defaultRadius: 'md',
  spacing: { xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '32px' },
});
```

### Storybook decorator — wrap all stories with MantineProvider

```tsx
// .storybook/decorators.tsx
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Theme } from '../src/tokens/theme';

export const withMantine = (Story: React.FC) => (
  <MantineProvider theme={Theme}>
    <Story />
  </MantineProvider>
);
```

### Allowed Mantine imports (adapter files only)

```ts
// ✅ OK — inside src/adapters/mantine/ only
import { Button, TextInput, Select } from '@mantine/core';
import { useDisclosure, useClipboard } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

// ❌ NEVER in src/components/, src/banking/, or consumer code
import { Button } from '@mantine/core';
```

---

## Component Conventions

### Every component must have:
1. ** TypeScript interface** — in `src/components/{category}/`, no Mantine types
2. **Adapter implementation** — in `src/adapters/mantine/`, maps  → Mantine props
3. **Storybook story** — imports from `@-te-ui`, not from adapter directly
4. **Unit test** — tests  behavior, not Mantine internals
5. **index.ts export** — exported from category barrel and root `src/index.ts`

### Naming
- PascalCase for all component files: `Button.tsx`, `BalanceCard.tsx`
- Story files co-located: `Button.stories.tsx`
- Test files co-located: `Button.test.tsx`

### DO follow these rules:
- All colors must reference  tokens — never hardcode hex or Mantine color strings
- All text supports i18n via `next-intl` — no hardcoded strings in components
- Interactive components must have `aria-*` attributes (Mantine provides many; verify they're set)
- Money/currency values must use `formatIDR()` util — never format inline
- Wrap Mantine hooks (`useDisclosure`, `useClipboard`) in  hooks under `src/hooks/` — never expose Mantine hooks directly to consumers

### DO NOT:
- Import Mantine anywhere outside `src/adapters/mantine/` and `src/tokens/theme.ts`
- Extend Mantine's prop types in the public component interface
- Use `any` type
- Use Mantine's `sx` prop — use the theme's CSS variables instead
- Write components longer than ~150 lines — split into subcomponents
- Skip the story — if there's no story, it doesn't exist in the design system

---

## Design Tokens

### Brand Colors (`src/tokens/colors.ts`)
```ts
export const colors = {
  // Primary brand
  '-blue-50':  '#E6EEFF',
  '-blue-500': '#0057FF',  // ← primary action color
  '-blue-900': '#001A4D',

  // Dark surfaces
  '-navy-500': '#0A1628',
  '-navy-700': '#060E1A',

  // Semantic
  '-success-500': '#00B982',
  '-warning-500': '#F5A623',
  '-danger-500':  '#E8333A',
  '-info-500':    '#3378FF',

  // Neutral
  '-gray-50':  '#F4F6FA',
  '-gray-500': '#7A8FA8',
  '-gray-900': '#0D1117',
} as const;
```

### Typography Scale
```
text-xs:   12px / 1.5
text-sm:   14px / 1.5
text-base: 16px / 1.6  ← body default
text-lg:   18px / 1.5
text-xl:   20px / 1.4
text-2xl:  24px / 1.3
text-3xl:  30px / 1.2
```

### Spacing
4px base unit. All spacing multiples of 4px (xs=4, sm=8, md=16, lg=24, xl=32).

---

## Banking-Specific Rules
- **Account numbers**: always masked as `•••• •••• 1234` using `maskAccountNumber()` util
- **Currency**: Always IDR, formatted as `Rp 1.250.000` using `formatIDR()`
- **Sensitive state**: Components showing balance must support `isHidden` prop (eye toggle)
- **Loading states**: All data-fetching components must have a Mantine `Skeleton`-based loading variant
- **Error states**: All form components must support `errorMessage` prop
- **OTP/2FA inputs**: Use Mantine's `PinInput` via adapter — never bypass auth UI components

---

## Storybook Setup Notes
- Uses `@storybook/nextjs` adapter — no separate webpack config needed
- Global decorators in `.storybook/decorators.tsx`: `withMantine`, `withIntl`, `withMockRouter`
- Must import `@mantine/core/styles.css` in `.storybook/preview.ts`
- A11y testing via `@storybook/addon-a11y` — all stories must pass
- Design token visualization via `storybook-design-token` addon

---

## How to Switch UI Libraries (Future)

When the team decides to migrate away from Mantine:

1. Create `src/adapters/{new-library}/` and implement each component mapping
2. Install the new library, add its provider to `.storybook/decorators.tsx`
3. Update `src/tokens/theme.ts` to build the new library's theme from  tokens
4. Change **one line** in `src/adapters/index.ts`: `export * from './{new-library}'`
5. Run `pnpm storybook` — all stories should render with zero changes to story files
6. Run `pnpm test` — all tests should pass since they test  behavior, not library internals
7. Delete `src/adapters/mantine/` once stable

**The consumer code and stories never change. Only the adapter layer does.**

---

## When Adding a New Component

1. Define  interface in `src/components/{category}/{ComponentName}/index.tsx`
2. Implement adapter in `src/adapters/mantine/{ComponentName}.tsx`
3. Export from `src/adapters/mantine/index.ts`
4. Create story: `src/components/{category}/{ComponentName}/{ComponentName}.stories.tsx`
   - Always import from `@-te-ui`, not from adapter directly
5. Create test: `src/components/{category}/{ComponentName}/{ComponentName}.test.tsx`
6. Export from `src/components/{category}/index.ts` and root `src/index.ts`
7. Run `pnpm storybook` — verify stories render
8. Run `pnpm test` — verify tests pass
9. Update `CHANGELOG.md`

---

## Session Context
This repo is used as a **live demo** during 's internal sharing session on Storybook and component standardization. Audience includes frontend devs, backend devs, and designers. Keep examples practical and relatable to banking UI problems.