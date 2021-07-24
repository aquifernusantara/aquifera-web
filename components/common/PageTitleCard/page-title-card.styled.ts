import styled from 'styled-components';

import { StyledPageTitleProps } from './page-title-card.model';

export const StyledPageTitle = styled.div<StyledPageTitleProps>`
  background-color: ${props => props.backgroundColor};
  min-height: 42.2rem;
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  padding-left: 3.2rem;
  margin-bottom: 1.2rem;
  justify-content: center;
  border: 2px solid black;
  border-radius: 0 1.2rem 1.2rem 0;
  width: 98%;
  box-shadow: 0.8rem 0.8rem 0 0 #000;
`;
