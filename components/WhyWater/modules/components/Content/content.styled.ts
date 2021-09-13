import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';
import { DEVICE_SIZE } from '@constants/device-size.constant';

export const StyledContent = styled.div`
  border-left: 0.1rem solid ${COLOR.border};
  padding-left: 2.4rem;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    border-left: none;
  }
`;
