import type { ReactNode } from 'react';
import { FloatingActions, Footer, Header } from './Chrome';

export function PageShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <Header />
    <main id="main" className={className}>{children}</main>
    <Footer />
    <FloatingActions />
  </>;
}
