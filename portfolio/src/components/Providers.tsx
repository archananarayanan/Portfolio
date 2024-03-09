'use client';

import { ThemeProvider } from 'next-themes'; // This should be the Redux provider

export interface ProvideProps {
    children: React.ReactNode;
}

export function Providers(param: ProvideProps) {
  return (
    <ThemeProvider attribute='class'>
        {param.children}
    </ThemeProvider>
  );
}