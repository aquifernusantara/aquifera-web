import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';
import { COMPONENT_SIZING_ON_REM } from '@constants/component-sizing.constant';
import { DEVICE_SIZE } from '@constants/device-size.constant';

export const StyledHeader = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  height: ${COMPONENT_SIZING_ON_REM.header}rem;
  width: 100%;
  padding: 0 5%;
  background-color: white;
  color: ${COLOR.primary};
  border-bottom: 1px solid white;
  opacity: 0.95;

  display: flex;
  align-items: center;

  nav {
    position: relative;
    flex: 1;

    display: flex;
    align-items: center;

    .block--left {
      flex: 0.4;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      .logo-aquifera {
        height: 62;
        width: 150;
      }

      @media (max-width: ${DEVICE_SIZE.mobileL}) {
        padding-left: 10%;
        justify-content: flex-start;
        flex: 0.7;
      }
    }

    .block--right {
      flex: 0.6;
      white-space: nowrap;

      @media (max-width: ${DEVICE_SIZE.mobileL}) {
        flex: 0.3;
        display: none;
      }

      ul {
        list-style-type: none;

        display: flex;
        justify-content: flex-end;

        li {
          font-size: 1.4rem;
          margin: 0 4%;

          a {
            padding: 0.8rem 0;
            border-bottom: 3px solid white;
            transition: 0.3s;

            :hover {
              border-bottom: 3px solid ${COLOR.primary};
            }

            &.active {
              border-bottom: 3px solid ${COLOR.primary};
            }
          }
        }
      }
    }
  }
`;
