import React from 'react';

import ProfileCard from '../ProfileCard';
import {
  ADMINISTRATION_PROFILES,
  DESIGN_PROFILES,
  EDUCATION_PROFILES,
  EXPEDITION_PROFILES,
  INOVATION_PROFILES,
  RESEARCHER_PROFILES,
} from '../ProfileCard/profile-card.constant';
import { StyledAquiferaTeam } from './aquifera-team.styled';

const AquiferaTeam = () => {
  return (
    <StyledAquiferaTeam>
      <h4>Tim Aquifera</h4>
      <div className="card-container">
        <ProfileCard
          imagePath={RESEARCHER_PROFILES[0].imagePath}
          name={RESEARCHER_PROFILES[0].name}
          position={RESEARCHER_PROFILES[0].position}
        />
        <ProfileCard
          imagePath={ADMINISTRATION_PROFILES[0].imagePath}
          name={ADMINISTRATION_PROFILES[0].name}
          position={ADMINISTRATION_PROFILES[0].position}
        />
        <ProfileCard
          imagePath={INOVATION_PROFILES[0].imagePath}
          name={INOVATION_PROFILES[0].name}
          position={INOVATION_PROFILES[0].position}
        />
        <ProfileCard
          imagePath={EXPEDITION_PROFILES[0].imagePath}
          name={EXPEDITION_PROFILES[0].name}
          position={EXPEDITION_PROFILES[0].position}
        />
        <ProfileCard
          imagePath={EDUCATION_PROFILES[0].imagePath}
          name={EDUCATION_PROFILES[0].name}
          position={EDUCATION_PROFILES[0].position}
        />
        <ProfileCard
          imagePath={DESIGN_PROFILES[0].imagePath}
          name={DESIGN_PROFILES[0].name}
          position={DESIGN_PROFILES[0].position}
        />
      </div>
    </StyledAquiferaTeam>
  );
};

export default AquiferaTeam;
