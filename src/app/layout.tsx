import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KeyMart E-Commerce',
  description: 'KeyMart E-Commerce - NextJS',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <link rel="shortcut icon" href="./favicon.ico"></link>
      <body className={inter.className}>
        <Navbar />
        <main className='bg-slate-700 h-screen p-16'>{children}</main>
      </body>
    </html>
  );
}