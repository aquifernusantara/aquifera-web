import React from 'react';

import Mekarlaksana from '@components/Mekarlaksana';
import Layout from '@components/common/Layout';
import SEO from '@components/common/SEO';

const MekarlaksanaPage = () => {
  return (
    <>
      <SEO title="Desa Mekarlaksana" />
      <Layout>
        <Mekarlaksana />
      </Layout>
    </>
  );
};

export default MekarlaksanaPage;
