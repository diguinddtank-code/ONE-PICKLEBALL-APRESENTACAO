import type { Metadata } from 'next';
import { Bebas_Neue, DM_Sans, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  title: 'One Pickleball | Evolua no Pickleball',
  description: 'A arena que transforma jogadores em viciados. Estrutura premium, comunidade forte e o melhor piso de São Paulo.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${dmSans.variable} ${barlowCondensed.variable}`}>
      <body className="bg-[var(--black)] text-[var(--off-white)] antialiased selection:bg-[var(--orange)] selection:text-black" suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
