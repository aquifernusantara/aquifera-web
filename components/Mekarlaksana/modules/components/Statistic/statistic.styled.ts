import { DEVICE_SIZE } from '@constants/device-size.constant';
import styled from 'styled-components';

export const StyledStatistic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    flex-direction: column;
    margin: 6.4rem 0;
  }
`;
