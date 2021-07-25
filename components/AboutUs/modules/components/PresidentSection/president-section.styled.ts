import styled from 'styled-components';

import { DEVICE_SIZE } from '@constants/device-size.constant';

export const StyledPresidentSection = styled.div`
  max-width: ${DEVICE_SIZE.laptop};
  display: flex;
  margin: 11rem auto;
  display: flex;
  align-items: center;

  p {
    text-align: justify;
    margin-left: 8rem;
  }
`;
