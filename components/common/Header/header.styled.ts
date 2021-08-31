import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';
import { COMPONENT_SIZING_ON_REM } from '@constants/component-sizing.constant';
import { DEVICE_SIZE } from '@constants/device-size.constant';

import { StyledHeaderProps } from './header.model';

export const StyledHeader = styled.header<StyledHeaderProps>`
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
    }

    .block--right {
      flex: 0.6;
      white-space: nowrap;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        text-align: right;
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
        @media (max-width: ${DEVICE_SIZE.tablet}) {
          display: none;
        }
      }

      .btn-hamburger-icon {
        display: none;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        width: 7rem;
        width: 8rem;

        :hover {
          transform: scale(1.05);
          transition: 0.1s ease-out;
        }

        :active {
          transform: scale(1);
        }

        @media (max-width: ${DEVICE_SIZE.tablet}) {
          display: initial;
        }
      }
    }

    .menu-slider-mobile {
      background-color: white;
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1;
      top: ${COMPONENT_SIZING_ON_REM.header}rem;
      right: 0;
      overflow-x: hidden;
      transition: width 0.5s;
      white-space: nowrap;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        display: initial;
        width: ${props => props.siderOpen ? '100%' : '0'};
        max-width: 50rem;
      }

      @media (max-width: ${DEVICE_SIZE.mobileL}) {
        max-width: 100rem;
      }

      ul {
        padding: 0 16px;

        li {
          font-size: 2.2rem;
          height: 64px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid ${COLOR.border};
          &:last-child {
            border-bottom: 0;
          }
        }
      }
    }
  }
`;
