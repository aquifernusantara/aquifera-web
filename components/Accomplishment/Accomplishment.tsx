import React from 'react';

import PageTitleCard from '@components/common/PageTitleCard';

import { StyledAccomplishment } from './accomplishment.styled';
import MekarlaksanaDescription from './modules/components/MekarlaksanaDescription';
import WaterboxDescription from './modules/components/WaterboxDescription';

const Accomplishment = () => {
  return (
    <StyledAccomplishment>
      <PageTitleCard title="Pencapaian Kami" />
      <WaterboxDescription />
      <MekarlaksanaDescription />
    </StyledAccomplishment>
  );
};

export default Accomplishment;
