import React from 'react';

import { ProfileCardProps } from './profile-card.model';
import { StyledProfileCard } from './profile-card.styled';

const ProfileCard: React.FC<ProfileCardProps> = ({
  imagePath,
  name,
  position,
}) => {
  return (
    <StyledProfileCard imagePath={imagePath}>
      <div className="card">
        <div className="info">
          <span className="name">{name}</span>
          <br />
          <span className="position">{position}</span>
        </div>
      </div>
    </StyledProfileCard>
  );
};

export default ProfileCard;
