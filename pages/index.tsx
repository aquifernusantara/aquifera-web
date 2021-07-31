import React from 'react';

import Home from '@components/Home';
import Layout from '@components/common/Layout';
import SEO from '@components/common/SEO';

const HomePage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;
