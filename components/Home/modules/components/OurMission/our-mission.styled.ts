import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';
import { DEVICE_SIZE } from '@constants/device-size.constant';

export const StyledOurMission = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.secondary};
  padding: 7.2rem;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 7.2rem 2.6rem;
  }

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
      width: 100%;
    }

    p {
      text-align: center;
    }
  }
`;
