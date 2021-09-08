import styled from 'styled-components';

import { DEVICE_SIZE } from '@constants/device-size.constant';

export const StyledAquiferaTeam = styled.div`
  max-width: ${DEVICE_SIZE.laptop};
  display: flex;
  margin: 11rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    margin-bottom: 4rem;
  }

  .card-container {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
      flex-basis: 30%;
      margin-bottom: 6rem;
    }

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      justify-content: center;

      > div {
        flex-basis: unset;
      }
    }
  }
`;
