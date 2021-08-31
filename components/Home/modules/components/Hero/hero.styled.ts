import styled from 'styled-components';

import { DEVICE_SIZE } from '@constants/device-size.constant';

export const StyledHero = styled.section`
  height: 100vh;

  video {
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: opacity(40%);
  }

  .overlay {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    padding-top: 7rem;
    padding-left: 5%;

    @media (max-width: ${DEVICE_SIZE.laptop}) {
      width: 90%;
    }

    .title {
      margin-bottom: 2.4rem;
      h1 {
        font-weight: bold;
        @media (max-width: ${DEVICE_SIZE.tablet}) {
          font-size: 4.4rem;
        }
      }
    }

    button {
      font-size: 2rem;
    }
  }
`;
