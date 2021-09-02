import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';
import { StyledBottomCardProps } from './bottom-card.model';

export const StyledBottomCard = styled.div<StyledBottomCardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.secondary};
  padding: 6.4rem;
  position: ${props => props.moveBack ? 'relative' : 'static'};
  z-index: ${props => props.moveBack ? '-1' : '0'};

  .card {
    color: white;
    background-color: ${COLOR.primary};
    display: flex;
    flex-direction: column;
    flex: 0;
    padding: 6.4rem;
    border: 2px solid black;
    border-radius: 1.2rem;
    box-shadow: 0.8rem 0.8rem 0 0 #000;
    min-width: 80%;

    h3 {
      text-align: center;
    }

    .button-container {
      margin-top: 4.8rem;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        :first-child {
          margin-right: 4.8rem;
        }
      }
    }
  }
`;
