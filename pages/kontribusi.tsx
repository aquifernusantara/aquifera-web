import React from 'react';

import Contribution from '@components/Contribution';
import Layout from '@components/common/Layout';
import SEO from '@components/common/SEO';

const ContributionPage = () => {
  return (
    <>
      <SEO title="Kontribusi" />
      <Layout>
        <Contribution />
      </Layout>
    </>
  );
};

export default ContributionPage;
