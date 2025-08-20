import { type AppType } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import { api } from '~/utils/api';
import { ThemeProvider } from '~/components/ThemeContext';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         {/* Favicon */}
         <link rel="icon" href="/images/RianSoe-modified.png" type="image/png" />
          {/* Optional: Apple touch icon */}
          <link rel="apple-touch-icon" href="/RianSoe-modified.png" />
          <title>Rian Soe Portfolio</title>
      </Head>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);