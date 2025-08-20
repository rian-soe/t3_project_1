// src/components/Layout.tsx
import Head from 'next/head';
import Navbar from './Navber';
import type { ReactNode } from 'react'; // Note the 'type' keyword

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title = '' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Rian Soe` : 'Rian Soe'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer className="bg-gray-50 dark:bg-gray-800 py-8 text-center text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Rian Soe. All rights reserved.
      </footer>
    </>
  );
}