import React from 'react';

import Button from '../Button';
import { BottomCardProps } from './bottom-card.model';
import { StyledBottomCard } from './bottom-card.styled';

const BottomCard: React.FC<BottomCardProps> = ({
  title,
  buttonPrimaryTitle,
  buttonSecondaryTitle,
  hrefSecondary,
  downloadSecondary = false,
}) => {
  return (
    <StyledBottomCard>
      <div className="card">
        <h3>{title}</h3>
        <div className="button-container">
          {buttonPrimaryTitle && <Button>{buttonPrimaryTitle}</Button>}
          {buttonSecondaryTitle && (
            <Button secondary href={hrefSecondary} download={downloadSecondary}>
              {buttonSecondaryTitle}
            </Button>
          )}
        </div>
      </div>
    </StyledBottomCard>
  );
};

export default BottomCard;
