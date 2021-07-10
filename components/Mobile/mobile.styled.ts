import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';

export const StyledMobile = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: ${COLOR.primary};
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    list-style-type: none;

    display: flex;
    align-items: center;

    li {
      margin: 2.4rem 2.4rem;
    }
  }

  p:last-child {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    text-align: center;
    font-style: italic;
  }
`;
