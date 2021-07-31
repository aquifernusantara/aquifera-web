import React from 'react';

import Accomplishment from '@components/Accomplishment';
import Layout from '@components/common/Layout';
import SEO from '@components/common/SEO';

const PencapaianKamiPage = () => {
  return (
    <>
      <SEO title="Pencapaian Kami" />
      <Layout>
        <Accomplishment />
      </Layout>
    </>
  );
};

export default PencapaianKamiPage;
