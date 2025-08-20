import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const saved = localStorage.getItem('theme'); const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches; const shouldDark = saved ? saved === 'dark' : systemDark; const root = document.documentElement; if (shouldDark) { root.classList.add('dark'); } else { root.classList.remove('dark'); } } catch (e) {} })();`,
          }}
        />
      </Head>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}