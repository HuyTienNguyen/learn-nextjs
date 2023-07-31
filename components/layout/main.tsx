import { LayoutProps } from '@/models/index';
import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';
import { useEffect } from 'react';
import { Footer, Header } from '../common';

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('MainLayout mounting');

    return () => console.log('MainLayout unmounting');
  }, []);

  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}
