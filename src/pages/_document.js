import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script type="text/javascript" strategy="beforeInteractive" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=da237d77970aaa05abc10bd97ad4702d?autoload=false" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
