import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';

export const StyledOurMission = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.secondary};
  padding: 7.2rem;

  .title__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title__text {
    margin-bottom: 1.2rem;
  }

  .content__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .map-of-indonesia {
      margin: 10rem 0;
    }

    p {
      text-align: center;
    }
  }
`;
