import { NextSeo } from 'next-seo';
import React from 'react';

import { SeoProps } from './seo.model';

const SEO: React.FC<SeoProps> = ({ title = 'Aquifer Nusantara' }) => {
  return (
    <NextSeo
      title={`Aquifera | ${title}`}
      description="Organisasi kemasyarakatan berbasis teknologi yang mengelola dana dari pihak donatur untuk berkontribusi bagi masyarakat terhadap permasalahan air. | Aquifera"
    />
  );
};

export default SEO;
