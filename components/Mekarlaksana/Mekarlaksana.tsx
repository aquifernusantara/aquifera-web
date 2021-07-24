import BottomCard from '@components/common/BottomCard';
import Button from '@components/common/Button';
import PageTitle from '@components/common/PageTitleCard';

import { StyledMekarlaksana } from './mekarlaksana.styled';
import BottomCardContent from './modules/components/BottomCardContent';
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
      <BottomCard>
        <BottomCardContent />
      </BottomCard>
    </StyledMekarlaksana>
  );
};

export default Mekarlaksana;
