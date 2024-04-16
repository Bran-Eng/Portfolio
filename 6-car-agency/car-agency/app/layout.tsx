import { Navbar, Footer } from '@/components';

export const metadata = {
  title: 'Car Agency',
  description: 'Discover the best deals in the market.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
