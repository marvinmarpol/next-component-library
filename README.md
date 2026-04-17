# Design System — Storybook Component Library

A shared design system built with Storybook, used across all frontend products (web app, internal tools, marketing pages).

## Tech Stack

- **Framework**: Next.js 16 + TypeScript (App Router)
- **UI Library (adapter)**: Mantine v8
- **Styling**: Mantine's CSS variables + `@mantine/core` theming — no Tailwind
- **Component Docs**: Storybook 10 (with `@storybook/nextjs`)
- **Testing**: Vitest + React Testing Library + Storybook interaction tests

## Architecture

The design system is built in two layers:

1. **Design Tokens + Component API** — stable public interface, never changes regardless of underlying library
2. **UI Adapter** — currently Mantine v8, swappable without touching consumer code

Consumer code always imports from this repository, never directly from Mantine or any other library.

```
Consumer code
     ↓  imports from this repository only
[ Component API ]   ← stable public interface (our props, our types)
     ↓  internally uses
[ UI Adapter ]      ← currently: Mantine. Tomorrow: shadcn, MUI, or none.
     ↓  styled with
[ Design Tokens ]   ← colors, spacing, typography — always ours
```

## Project Structure

```
src/
  components/
    ui/               ← Primitive/base components (Button, Input, Badge, etc.)
    composite/        ← Composed components (Card, Modal, Form, etc.)
    layout/           ← Layout components (Container, Grid, Stack, etc.)
    banking/          ← Bank-specific components (BalanceCard, TransactionItem, etc.)

  adapters/
    mantine/          ← Mantine implementations, maps our props → Mantine props
      index.ts        ← Re-exports all adapter implementations
    index.ts          ← Points to active adapter (change this one line to switch libraries)

  tokens/
    colors.ts         ← Brand color tokens (source of truth)
    typography.ts     ← Font scale and weights
    spacing.ts        ← Spacing scale
    theme.ts          ← MantineTheme built from tokens

  hooks/              ← Shared hooks (wrappers around Mantine hooks)
  utils/              ← Formatting helpers (formatIDR, maskAccountNumber, etc.)

  index.ts            ← Public API: exports only component interfaces + implementations
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run Storybook:

```bash
npm run storybook
```

Run tests:

```bash
npm run test
```

Run the Next.js dev server:

```bash
npm run dev
```

## Adding a New Component

1. Define the interface in `src/components/{category}/{ComponentName}/index.tsx` — no Mantine types in public props
2. Implement the adapter in `src/adapters/mantine/{ComponentName}.tsx`
3. Export from `src/adapters/mantine/index.ts`
4. Create a story: `src/components/{category}/{ComponentName}/{ComponentName}.stories.tsx`
5. Create a test: `src/components/{category}/{ComponentName}/{ComponentName}.test.tsx`
6. Export from the category barrel and root `src/index.ts`
7. Update `CHANGELOG.md`

## Switching UI Libraries

To migrate away from Mantine:

1. Create `src/adapters/{new-library}/` and implement each component mapping
2. Install the new library, add its provider to `.storybook/decorators.tsx`
3. Update `src/tokens/theme.ts` to build the new library's theme from our tokens
4. Change **one line** in `src/adapters/index.ts`: `export * from './{new-library}'`
5. Run `npm run storybook` — all stories should render with zero changes
6. Run `npm run test` — all tests should pass
7. Delete `src/adapters/mantine/` once stable

Consumer code and stories never change. Only the adapter layer does.

## Design Tokens

**Brand colors** (`src/tokens/colors.ts`):

| Token | Value | Usage |
|---|---|---|
| `-blue-500` | `#0057FF` | Primary action |
| `-navy-500` | `#0A1628` | Dark surfaces |
| `-success-500` | `#00B982` | Success states |
| `-warning-500` | `#F5A623` | Warnings |
| `-danger-500` | `#E8333A` | Errors / destructive |

**Spacing**: 4px base unit — `xs=4px`, `sm=8px`, `md=16px`, `lg=24px`, `xl=32px`

**Typography**: Plus Jakarta Sans, base 16px/1.6, scale from 12px to 30px.

## Banking-Specific Rules

- **Account numbers**: always masked as `•••• •••• 1234` using `maskAccountNumber()`
- **Currency**: always IDR, formatted as `Rp 1.250.000` using `formatIDR()`
- **Balance visibility**: components showing balance must support `isHidden` prop
- **Loading states**: all data-fetching components must have a `Skeleton`-based loading variant
- **Error states**: all form components must support `errorMessage` prop

## Component Conventions

Every component must have:

- TypeScript interface in `src/components/{category}/` — no Mantine types exposed
- Adapter implementation in `src/adapters/mantine/`
- Storybook story — imports from `@-te-ui`, not from adapter directly
- Unit test — tests our behavior, not Mantine internals
- `index.ts` export from category barrel and root `src/index.ts`