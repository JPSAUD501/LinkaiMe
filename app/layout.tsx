import { Poppins } from '@next/font/google';
import './global.css';

const poppins = Poppins({
  subsets: [ 'latin' ],
  weight: '100'
});

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className={poppins.className}>
        <body>{children}</body>
      </html>
    </>
  );
}