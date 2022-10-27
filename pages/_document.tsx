import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    //This is a lesser known feature of next.js I leverged to remove that issue of a white flash when reloading the page
    //because the CSS for the dark background hasn't been loaded yet. Helps prevent eyestrain.
    // NOTE: you may still get a flash of white when running on the devserver, this is just a dev server thing and it won't show in production.
    <Html>
      <Head>
        <style> {"body {background-color:#121619;}"}
        </style>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
