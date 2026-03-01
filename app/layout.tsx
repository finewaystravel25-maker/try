import type { Metadata } from 'next';
import { Playfair_Display, Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoaderWrapper from '@/components/PageLoaderWrapper';

export const metadata: Metadata = {
  title: 'Fine Cafe',
  description: 'Enjoy the finest coffee, pastries, and a relaxing atmosphere at Fine Cafe.',
  keywords: 'coffee, cafe, desserts, latte, cappuccino',
  metadataBase: new URL('https://finecafe.com.my'),
  openGraph: {
    title: 'Fine Cafe',
    description: 'Your favorite spot for coffee and desserts.',
    images: [{ url: '/images/cafe.jpg' }],
  },
  icons: { icon: '/favicon.ico' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#d97706',
};

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  weight: ['400','700'], 
  variable: '--font-playfair' 
});

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['400','500','700'], 
  variable: '--font-roboto' 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfair.variable}`}>
      <body className="font-body bg-base text-textBase">
        <Navbar />
        <PageLoaderWrapper>
          {children}
        </PageLoaderWrapper>
        <Footer />
      </body>
    </html>
  );
}
