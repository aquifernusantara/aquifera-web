import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@components/common/Fonts/fonts.css';
import GlobalStyle from '@components/common/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aquifera</title>
        <link rel="icon" href="/svg/aquifera-logo.svg" />
      </Head>
      <GlobalStyle />
      <>
        <Component {...pageProps} />
      </>
    </>
  );
}
export default MyApp;
