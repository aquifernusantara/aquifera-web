import React from 'react';

import PageTitleCard from '@components/common/PageTitleCard';
import { PageTitleBackgroundColor } from '@components/common/PageTitleCard/page-title-card.enum';

import SplitContent from './modules/components/SplitContent';
import { StyledWhyWater } from './why-water.styled';

const WhyWater = () => {
  return (
    <StyledWhyWater>
      <PageTitleCard
        title="Hari ini, sekitar 1,9 milliar orang di muka bumi masih hidup di area sulit air bersih."
        backgroundColor={PageTitleBackgroundColor.Primary}
      />
      <SplitContent />
    </StyledWhyWater>
  );
};

export default WhyWater;
