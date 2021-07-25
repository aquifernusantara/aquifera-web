import ProfileCard from '../ProfileCard';
import { PRESIDENT_PROFILE } from '../ProfileCard/profile-card.constant';
import { StyledPresidentSection } from './president-section.styled';

const PresidentSection = () => {
  return (
    <StyledPresidentSection>
      <ProfileCard
        imagePath={PRESIDENT_PROFILE.imagePath}
        name={PRESIDENT_PROFILE.name}
        position={PRESIDENT_PROFILE.position}
      />
      <p>
        Aquifer Nusantara (Aquifera) diawali dengan keresahan tiga orang pemuda,
        alumni dari Institut Teknologi Bandung, tentang krisis air bersih
        terutama di daerah pedesaan. Bergerak dari keresahan tersebut pada tahun
        2020 bersama teman-teman lainnya resmi didirikan Aquifera. Aquifera pun
        dibentuk oleh sebuah tujuan sederhana namun sangat bermakna, yaitu
        memberikan akses air bersih untuk masyarakat yang membutuhkan.{' '}
      </p>
    </StyledPresidentSection>
  );
};

export default PresidentSection;
