import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Theme } from '../src/tokens/theme';

export const withMantine = (Story: React.FC) => (
  <MantineProvider theme={Theme}>
    <Story />
  </MantineProvider>
);
