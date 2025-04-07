import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>maketh</title>
        <meta name="theme-color" content="#000" />
        {/* <link rel="icon" href="/favicon-32x32.png" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
