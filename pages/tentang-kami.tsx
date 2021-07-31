import React from 'react';

import AboutUs from '@components/AboutUs';
import Layout from '@components/common/Layout';
import SEO from '@components/common/SEO';

const TentangKamiPage = () => {
  return (
    <>
      <SEO title="Tentang Kami" />
      <Layout>
        <AboutUs />
      </Layout>
    </>
  );
};

export default TentangKamiPage;
