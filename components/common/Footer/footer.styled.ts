import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';
import { DEVICE_SIZE } from '@constants/device-size.constant';

export const StyledFooter = styled.footer`
  position: relative;
  padding: 2.4rem 0;
  margin: 0 5%;
  height: 24rem;
  background-color: white;
  color: ${COLOR.primary};
  border-top: 0.1rem solid ${COLOR.border};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${DEVICE_SIZE.mobileL}) {
    height: 18rem;
  }

  .logo-container {
    position: relative;
    width: 20rem;
    height: 10rem;

    @media (max-width: ${DEVICE_SIZE.mobileL}) {
      display: none;
    }
  }

  .info {
    display: none;

    @media (max-width: ${DEVICE_SIZE.mobileL}) {
      display: block;
    }
  }

  ul {
    margin-top: 3.6rem;
    list-style-type: none;

    display: flex;
    align-items: center;

    li {
      margin: 0rem 2.4rem;

      p {
        font-size: 1.6rem;
        font-weight: 600;
      }

      a {
        display: flex;
        align-items: center;

        span {
          margin-left: 1.2rem;
          font-size: 1.8rem;

          @media (max-width: 1220px) {
            display: none;
          }
        }
      }
    }
  }

  p {
    font-size: 1.2rem;
  }

  .sponsor-container {
    position: absolute;
    z-index: 2;
    right: 5%;
    bottom: 3.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-bottom: 0.8rem;
    }

    ::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: -1;
      display: inline-block;
      width: 10rem;
      height: 5.5rem;
      border-radius: 0.4rem;
      background-color: ${COLOR.secondary};
      transform: translateX(-3rem);
    }
  }
`;
