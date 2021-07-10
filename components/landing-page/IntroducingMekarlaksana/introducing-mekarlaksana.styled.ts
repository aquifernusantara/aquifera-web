import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';

export const StyledIntroducingMekarlaksana = styled.div`
  min-height: 200vh;
  background-image: linear-gradient(to bottom, ${COLOR.primary}, white);

  .header {
    padding: 3.6rem 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    h4 {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        :first-child {
          font-size: 2rem;
          letter-spacing: -2%;
        }

        :last-child {
          font-size: 2.8rem;
          letter-spacing: -2%;
        }
      }
    }

    hr {
      width: 100%;
      margin: 3.6rem 0;
    }
  }
`;
