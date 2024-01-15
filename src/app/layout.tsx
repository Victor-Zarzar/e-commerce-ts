import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { Metadata } from 'next';
import clsx from 'clsx';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'KeyMart E-Commerce',
  description: 'KeyMart E-Commerce - NextJS',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="shortcut icon" href="./favicon.ico"></link>
        <body className={clsx(inter.className, "bg-slate-700")}>
          <Navbar />
          <main className='h-screen p-16'>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}