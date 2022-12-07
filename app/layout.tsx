import { Poppins } from '@next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className={poppins.variable}>
        <body>{children}</body>
      </html>
    </>
  );
}