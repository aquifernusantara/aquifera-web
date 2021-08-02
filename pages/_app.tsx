import type { AppProps } from 'next/app';
import Head from 'next/head';

import { useEffect, useState } from 'react';

import '@components/common/Fonts/fonts.css';
import GlobalStyle from '@components/common/GlobalStyles';
import Mobile from '@components/common/Mobile';

import useDevices from '@hooks/useDevices.hook';

function MyApp({ Component, pageProps }: AppProps) {
  const { isMobile } = useDevices();

  if (isMobile()) {
    return <Mobile {...pageProps} />;
  }

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
