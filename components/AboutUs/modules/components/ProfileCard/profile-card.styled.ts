import styled from 'styled-components';

import { StyledProfileCardProps } from './profile-card.model';

export const StyledProfileCard = styled.div<StyledProfileCardProps>`
  position: relative;
  display: flex;
  justify-content: center;

  .card {
    position: relative;
    width: 20rem;
    height: 20rem;
    background-image: ${props => `url("${props.imagePath}")`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    flex-shrink: 0;
  }

  .info {
    color: white;
    position: absolute;
    bottom: 1.6rem;
    left: 1.6rem;
    font-weight: 700;

    .name {
      font-size: 20px;
    }

    .position {
      font-size: 16px;
    }
  }
`;
