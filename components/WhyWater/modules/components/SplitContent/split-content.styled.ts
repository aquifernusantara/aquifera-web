import { COMPONENT_SIZING_ON_REM } from '@constants/component-sizing.constant';
import { DEVICE_SIZE } from '@constants/device-size.constant';
import styled from 'styled-components';

export const StyledSplitContent = styled.div`
  display: flex;
  padding: 4.8rem;

  @media (max-width: ${DEVICE_SIZE.tablet}) {
    display: block;
    padding: 4.8rem 1.8rem;
  }
  .sidebar {
    flex: 0.3;
    overflow-y: none;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      position: sticky;
      top: ${COMPONENT_SIZING_ON_REM.header}rem;
    }
  }

  .content {
    flex: 0.7;
    overflow-y: auto;
  }
`;
