import styled from 'styled-components';

import { COLOR } from '@constants/color.constant';

export const StyledNavigationItem = styled.button`
  padding: 0.8rem 1.2rem;
  margin: 1.2rem 0;
  font-size: 1.6rem;
  line-height: 140%;
  position: relative;
  display: block;
  white-space: nowrap;
  appearance: none;
  box-shadow: 2px 2px 0 0 white;
  border: 1px solid white;
  text-decoration: none;
  cursor: pointer;
  background: white;
  width: fit-content;
  border-radius: 0.4rem;

  :hover {
    background-color: ${COLOR.secondary};
    box-shadow: 2px 2px 0 0 #000;
    border: 1px solid black;
  }
`;
