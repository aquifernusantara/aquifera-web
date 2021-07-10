import type { AppProps } from 'next/app';
import Head from 'next/head';

import { HelmetProvider } from 'react-helmet-async';

import '@components/common/Fonts/fonts.css';
import GlobalStyle from '@components/common/GlobalStyles';
import Mobile from '@components/common/Mobile';

import useDevices from '@hooks/useDevices.hook';

function MyApp({ Component, pageProps }: AppProps) {
  const { isMobile } = useDevices();

  if (isMobile()) {
    return (
      <HelmetProvider context={{}}>
        <Mobile />
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider context={{}}>
      <Head>
        <title>Aquifera</title>
        <link rel="icon" href="/svg/aquifera-logo.svg" />
      </Head>
      <GlobalStyle />
      <>
        <Component {...pageProps} />
      </>
    </HelmetProvider>
  );
}
export default MyApp;
