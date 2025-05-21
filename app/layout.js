import { Public_Sans, Rubik } from 'next/font/google';
import '../styles/globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-public-sans',
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-rubik',
});

export const metadata = {
  title: 'AL Ittihad',
  description:
    'Official website of AL Ittihad Football Club – get the latest news, match updates, player profiles, fixtures, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" foxified="">
      <body className={`${publicSans.variable} ${rubik.variable} antialiased min-h-screen flex flex-col font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
