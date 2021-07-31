import BottomCard from '@components/common/BottomCard';
import PageTitle from '@components/common/PageTitleCard';

import { StyledMekarlaksana } from './mekarlaksana.styled';
import Sponsorship from './modules/components/Sponsorship';
import Statistic from './modules/components/Statistic';
import Story from './modules/components/Story';
import VideoDocumentation from './modules/components/VideoDocumentation';

const Mekarlaksana = () => {
  return (
    <StyledMekarlaksana>
      <PageTitle
        title="Desa Mekarlaksana"
        description="Water Drilling Project"
      />
      <Statistic />
      <Story />
      <VideoDocumentation />
      <Sponsorship />
      <BottomCard
        title="Tertarik dengan perubahan yang diberikan?"
        buttonPrimaryTitle="Yuk, ikut bergabung"
        buttonSecondaryTitle="Unduh Lembar Pertanggungjawaban"
        hrefSecondary="/pdf/LPJ Pilot Project Aquifera 2020.pdf"
        downloadSecondary
      />
    </StyledMekarlaksana>
  );
};

export default Mekarlaksana;
