import styled from 'styled-components';

import { DEVICE_SIZE } from '@constants/device-size.constant';

export const StyledHowWeWork = styled.div`
  min-height: 80vh;
  padding: 3.6rem 5%;

  .title__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    hr {
      width: 100%;
      margin: 3.6rem 0;
    }
  }

  .content__container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: ${DEVICE_SIZE.laptop};
    margin: auto;
  }
`;
