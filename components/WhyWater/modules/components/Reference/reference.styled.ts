import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';

export const StyledReference = styled.div`
  .title {
    margin-bottom: 1.2rem;
  }

  ol {
    margin-left: 2rem;

    li {
      font-size: 1.8rem;
      line-height: 2.7rem;
      letter-spacing: -1%;
      color: ${COLOR.primary};
    }
  }
`;
