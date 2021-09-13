import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import '@components/common/Fonts/fonts.css';
import GlobalStyle from '@components/common/GlobalStyles';

const Mobile = dynamic(() => import('@components/common/Mobile'));

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
