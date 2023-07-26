import { LayoutProps } from '@/models/index';
import Link from 'next/link';

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Admin layout</h1>
      <div>Sidebar</div>
      <Link href="/"> Home</Link>
      <Link href="/about"> About</Link>
      <div>{children}</div>
    </div>
  );
}
