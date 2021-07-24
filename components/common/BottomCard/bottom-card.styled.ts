import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';

export const StyledBottomCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${COLOR.secondary};
  padding: 6.4rem;

  .card {
    color: white;
    background-color: ${COLOR.primary};
    display: flex;
    flex: 0;
    padding: 6.4rem;
    border: 2px solid black;
    border-radius: 1.2rem;
    box-shadow: 0.8rem 0.8rem 0 0 #000;
  }
`;
