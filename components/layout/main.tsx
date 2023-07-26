import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import React, { useEffect } from 'react';

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('MainLayout mounting');

    return () => console.log('MainLayout unmounting');
  }, []);

  return (
    <div>
      <h1>Main layout</h1>
      <Link href="/"> Home</Link>
      <Link href="/about"> About</Link>
      <div>{children}</div>
    </div>
  );
}
