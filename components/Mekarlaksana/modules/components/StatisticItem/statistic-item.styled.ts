import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';

export const StyledStatisticItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8rem;
  margin: 8rem 0;

  .statistic__value {
    font-weight: bold;
    font-size: 3.6rem;
    margin-bottom: 0.8rem;
  }

  :first-of-type {
    border-right: 0.1rem solid ${COLOR.border};
  }

  :last-of-type {
    border-left: 0.1rem solid ${COLOR.border};
  }
`;
