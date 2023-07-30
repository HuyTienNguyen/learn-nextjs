import { Container, Stack, Link as MuiLink, Box } from '@mui/material';
import * as React from 'react';
import { ROUTE_LIST } from './routes';
import Link from 'next/link';

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
  return (
    <Box display={{ xs: 'none', lg: 'block' }}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} href={route.path} passHref>
              {route.label}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
