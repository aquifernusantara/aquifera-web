import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';

export const StyledTopic = styled.article`
  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;
  border-bottom: 0.1rem solid ${COLOR.border};

  .title {
    line-height: 4.68rem;
    letter-spacing: -2%;
    margin-bottom: 1.2rem;
  }

  .subtitle {
    font-weight: bold;
    font-size: 1.8rem;
    letter-spacing: -1%;
    line-height: 2.7rem;
    margin-bottom: 1.2rem;
  }

  p {
    font-weight: 40rem;
  }

  ol {
    font-size: 1.8rem;
    margin-left: 2rem;

    li {
      margin-bottom: 1.2rem;
    }
  }
`;
