import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Karnik Kanojia" key="ogtitle" />
        <meta property="og:description" content="Professional Full Stack Engineer" key="ogdesc" />
        <meta property="og:image" content="%PUBLIC_URL%/favicon.ico" key="ogimage" />
        <meta
          property="og:site_name"
          content="Karnik Kanojia Portfolio"
          key="ogsitename"
        />
        <meta property="og:url" content="https://karnikkanojia.me/" key="ogurl" />
        <meta property="og:type" content="Portfolio" key="ogtype" />
        <meta name="theme-color" content="#333ba6" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
