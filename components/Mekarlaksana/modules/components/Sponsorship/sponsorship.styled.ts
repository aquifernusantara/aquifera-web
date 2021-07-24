import styled from 'styled-components';

import { DEVICE_SIZE } from '@constants/device-size.constant';

export const StyledSponsorship = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${DEVICE_SIZE.tablet};
  margin: auto;

  .description {
    font-size: 1.8rem;
    margin-right: 12rem;
  }
`;
