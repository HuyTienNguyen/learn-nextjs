import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export interface AuthProps {
  children: any;
}

export function Auth({ children }: AuthProps) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();
  console.log('1');
  useEffect(() => {
    console.log('2', !firstLoading);
    console.log('2', !profile?.username);
    if (!firstLoading && !profile?.username) {
      router.push('/login');
      console.log('3');
    }
  }, [router, profile, firstLoading]);

  console.log('4');
  if (!profile?.username) return <p>Loading...</p>;
  return <div>{children}</div>;
}
