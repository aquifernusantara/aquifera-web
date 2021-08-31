import { COMPONENT_SIZING_ON_REM } from '@constants/component-sizing.constant';
import styled from 'styled-components';

export const StyledSidebar = styled.div`
  background-color: white;
  position: sticky;
  top: calc(${COMPONENT_SIZING_ON_REM.header}rem + 12px);

  hr {
    margin: 1.8rem 0;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    padding-right: 2px;
  }
`;
