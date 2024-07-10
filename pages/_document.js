import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/Home.module.css" />
        <meta name="author" content="Deardo Satria | Front-end developer" />
        <meta name="description" content="My personal portfolio website." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
