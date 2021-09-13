import styled from 'styled-components';

import { DEVICE_SIZE } from '@constants/device-size.constant';

export const StyledSponsorship = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${DEVICE_SIZE.tablet};
  margin: auto;
  margin-bottom: 4.8rem;

  .description {
    font-size: 1.8rem;
    margin-right: 12rem;
  }

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    padding: 0 3rem;
    flex-wrap: wrap;
    .description {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`;
