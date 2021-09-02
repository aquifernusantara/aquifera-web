import { COLOR } from '@constants/color.constant';
import { COMPONENT_SIZING_ON_REM } from '@constants/component-sizing.constant';
import { DEVICE_SIZE } from '@constants/device-size.constant';
import styled from 'styled-components';
import { StyledSidebarProps } from './sidebar.model';

export const StyledSidebar = styled.div<StyledSidebarProps>`
  background-color: white;
  position: sticky;
  top: calc(${COMPONENT_SIZING_ON_REM.header}rem + 12px);

  .tentang-air-container {
    display: flex;
    align-items: center;
    padding-bottom: 1.8rem;
    margin-bottom: 1.8rem;
    border-bottom: 1px solid ${COLOR.border};

    &.sider {
      display: none;
    }

    button.btn-hamburger-icon {
      width: 40px;
      height: 36px;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      padding-bottom: 0;
      border-bottom: 1px solid #1B1B1B;

      &.sider {
        display: flex;
      }
    }
  }

  .tentang-air-title {
   
    @media (max-width: ${DEVICE_SIZE.tablet}) {
      font-size: 2.8rem;
    }
  }

  .navigation {
    display: flex;
    flex-direction: column;
    padding-right: 2px;
  }

  .navigation-slider {
    @media (max-width: ${DEVICE_SIZE.tablet}) {
      background-color: white;
      position: fixed;
      z-index: 2;
      top: ${COMPONENT_SIZING_ON_REM.header}rem;
      left: 0;
      right: 0;
      overflow-x: hidden;
      transition: width 0.5s;
      white-space: nowrap;
      width: ${props => props.siderOpen ? '100%' : '0'};
      max-width: 50rem;
      height: 100%;
    }
  }
`;
