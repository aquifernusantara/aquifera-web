import React from 'react';

import { BottomCardProps } from './bottom-card.model';
import { StyledBottomCard } from './bottom-card.styled';

const BottomCard: React.FC<BottomCardProps> = ({ children }) => {
  return (
    <StyledBottomCard>
      <div className="card">{children}</div>
    </StyledBottomCard>
  );
};

export default BottomCard;
