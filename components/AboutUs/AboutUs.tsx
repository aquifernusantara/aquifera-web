import React from 'react';

import BottomCard from '@components/common/BottomCard';
import PageTitleCard from '@components/common/PageTitleCard';

import { StyledAboutUs } from './about-us.styled';
import AquiferaTeam from './modules/components/AquiferaTeam';
import PresidentSection from './modules/components/PresidentSection/PresidentSection';

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <PageTitleCard title="Halo Salam Kenal" />
      <PresidentSection />
      <AquiferaTeam />
      <BottomCard
        title="Tertarik dengan perubahan yang diberikan?"
        buttonPrimaryTitle="Yuk, ikut bergabung"
      />
    </StyledAboutUs>
  );
};

export default AboutUs;
