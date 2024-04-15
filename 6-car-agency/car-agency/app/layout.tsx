import './globals.css';

export const metadata = {
  title: 'Car Agency',
  description: 'Discover the best deals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='relative'>{children}</body>
    </html>
  );
}
