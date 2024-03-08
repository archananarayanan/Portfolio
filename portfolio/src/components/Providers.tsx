'use client';

import { ThemeProvider } from 'next-themes'; // This should be the Redux provider


export function Providers({ children }) {
  return (
    <ThemeProvider attribute='class'>
        {children}
    </ThemeProvider>
  );
}